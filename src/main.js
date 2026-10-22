// Entry point: renderer, post-processing, input, menus and the main loop.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createTextures } from './engine/textures.js';
import { GameAudio } from './engine/audio.js';
import { setModelTextures, ViewWeapon } from './render/models.js';
import { lightFactor } from './render/levelmesh.js';
import { HUD } from './ui/hud.js';
import { Menu } from './ui/menu.js';
import { World } from './game/world.js';
import { E1M1 } from './game/map_e1m1.js';
import { SKILLS } from './game/defs.js';

const QUALITY = {
  low: { pixelRatio: 0.75, shadows: false, shadowSize: 1024, bloom: false, msaa: 0, lightSlots: 6 },
  medium: { pixelRatio: 1, shadows: true, shadowSize: 2048, bloom: true, msaa: 0, lightSlots: 8 },
  high: { pixelRatio: 1.25, shadows: true, shadowSize: 4096, bloom: true, msaa: 4, lightSlots: 12 },
  ultra: { pixelRatio: 2, shadows: true, shadowSize: 4096, bloom: true, msaa: 4, lightSlots: 16 },
};

const DEFAULTS = {
  sensitivity: 1, invertY: false, fov: 90, quality: 'high', musicVol: 0.55, sfxVol: 0.9,
  alwaysRun: true, autoaim: true, crosshair: true, bob: true, showFps: false,
};

function loadSettings() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('doom2027.settings') || '{}') }; } catch { return { ...DEFAULTS }; }
}
function saveSettings(s) { try { localStorage.setItem('doom2027.settings', JSON.stringify(s)); } catch { /* storage unavailable */ } }

// ---------------------------------------------------------------------- post FX shader
const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, time: { value: 0 }, damage: { value: 0 }, bonus: { value: 0 },
    dead: { value: 0 }, resolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, damage, bonus, dead; uniform vec2 resolution;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      vec2 c = uv - 0.5;
      float r2 = dot(c, c);
      // subtle chromatic aberration towards the edges
      float ca = 0.0016 + damage * 0.006;
      vec3 col;
      col.r = texture2D(tDiffuse, uv + c * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - c * ca).b;
      // Doom palette flashes: red when hurt, gold on pickups
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(lum * 1.4 + 0.12, lum * 0.15, lum * 0.1), clamp(damage, 0.0, 0.85));
      col = mix(col, col * vec3(1.15, 1.0, 0.55) + vec3(0.08, 0.06, 0.0), bonus * 0.6);
      col = mix(col, vec3(lum * 1.2 + 0.1, lum * 0.05, 0.02), dead * 0.55);
      // vignette
      col *= 1.0 - smoothstep(0.18, 0.75, r2) * 0.55;
      // film grain
      float g = hash(uv * resolution + fract(time * 13.7)) - 0.5;
      col += g * 0.035;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

class Game {
  constructor() {
    this.settings = loadSettings();
    this.canvas = document.getElementById('view');
    this.hudCanvas = document.getElementById('hud');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.camera = new THREE.PerspectiveCamera(70, 1, 2, 9000);
    this.camera.rotation.order = 'YXZ';
    // first-person weapon scene
    this.weaponScene = new THREE.Scene();
    this.weaponCam = new THREE.PerspectiveCamera(58, 1, 0.01, 10);
    this.wAmbient = new THREE.AmbientLight(0xffffff, 1.5);
    this.wKey = new THREE.DirectionalLight(0xfff0e0, 1.6);
    this.wKey.position.set(-0.5, 1, 0.6);
    this.wFlash = new THREE.PointLight(0xffb060, 0, 3, 1.2);
    this.wFlash.position.set(0, 0, -0.5);
    this.weaponScene.add(this.wAmbient, this.wKey, this.wFlash);
    this.hud = new HUD(this.hudCanvas);
    this.audio = new GameAudio();
    this.input = { keys: new Set(), mouseDX: 0, mouseDY: 0, fire: false, usePressed: false, slot: 0, cycle: 0 };
    this.world = null;
    this.state = 'loading';
    this.automap = false;
    this.revealAll = false; this.revealThings = false;
    this.cheatBuf = '';
    this.fpsAcc = 0; this.fpsN = 0; this.fps = 0;
    this.menu = new Menu(this);
    this.bindInput();
    window.addEventListener('resize', () => this.resize());
  }

  async boot() {
    this.menu.showLoading('Generating textures…');
    await new Promise((r) => setTimeout(r, 30));
    const t0 = performance.now();
    const { textures, update } = createTextures(this.renderer);
    this.tex = textures;
    this.texUpdate = update;
    setModelTextures(textures);
    this.viewWeapon = new ViewWeapon(textures);
    this.weaponScene.add(this.viewWeapon.root);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.weaponScene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.weaponScene.environmentIntensity = 0.35;
    console.log('textures', Math.round(performance.now() - t0), 'ms');
    this.setupComposer();
    this.resize();
    this.state = 'title';
    // a live attract-mode backdrop for the title screen
    this.newWorld(2, true);
    this.menu.showTitle();
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
  }

  get quality() { return QUALITY[this.settings.quality] || QUALITY.high; }

  setupComposer() {
    const q = this.quality;
    const size = new THREE.Vector2();
    this.renderer.getSize(size);
    const rt = new THREE.WebGLRenderTarget(Math.max(1, size.x), Math.max(1, size.y), { type: THREE.HalfFloatType, samples: q.msaa });
    this.composer = new EffectComposer(this.renderer, rt);
    this.scenePass = new RenderPass(new THREE.Scene(), this.camera);
    this.weaponPass = new RenderPass(this.weaponScene, this.weaponCam);
    this.weaponPass.clear = false;
    this.weaponPass.clearDepth = true;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.55, 0.82);
    this.finalPass = new ShaderPass(FinalShader);
    this.composer.addPass(this.scenePass);
    this.composer.addPass(this.weaponPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(this.finalPass);
    this.composer.addPass(new OutputPass());
    this.bloom.enabled = q.bloom;
    this.renderer.shadowMap.enabled = q.shadows;
  }

  applyQuality() {
    this.composer.dispose();
    this.setupComposer();
    this.resize();
    if (this.world) this.scenePass.scene = this.world.scene;
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const pr = Math.min(window.devicePixelRatio || 1, this.quality.pixelRatio);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    if (this.composer) {
      this.composer.setPixelRatio(pr);
      this.composer.setSize(w, h);
      this.finalPass.uniforms.resolution.value.set(w * pr, h * pr);
    }
    const aspect = w / h;
    this.camera.aspect = aspect;
    const hfov = (this.settings.fov * Math.PI) / 180;
    // Doom's FOV is horizontal at 4:3; keep that vertical FOV on wider screens (Hor+)
    this.camera.fov = (2 * Math.atan(Math.tan(hfov / 2) / (4 / 3)) * 180) / Math.PI;
    this.camera.updateProjectionMatrix();
    this.weaponCam.aspect = aspect;
    this.weaponCam.updateProjectionMatrix();
    this.hud.resize(w, h, Math.min(2, window.devicePixelRatio || 1));
  }

  disposeWorld() {
    if (!this.world) return;
    this.world.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material && !o.isSprite) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of ms) if (m.dispose) m.dispose();
      }
    });
    this.world = null;
  }

  newWorld(skill, attract = false) {
    this.disposeWorld();
    const q = this.quality;
    this.skill = skill;
    this.world = new World({ tex: this.tex, audio: this.audio, hud: this.hud, settings: { ...this.settings, ...q } }, E1M1, skill);
    this.scenePass.scene = this.world.scene;
    this.attract = attract;
    this.hud.clearMessages();
    this.automap = false;
    if (!attract) this.hud.message(E1M1.name, 3, '#e02a20');
    this.renderer.compile(this.world.scene, this.camera);
  }

  startGame(skill) {
    this.initAudio();
    this.newWorld(skill);
    this.state = 'playing';
    this.menu.hide();
    this.audio.startMusic('level');
    this.lockPointer();
  }

  initAudio() {
    this.audio.init();
    this.audio.setMusicVolume(this.settings.musicVol);
    this.audio.setSfxVolume(this.settings.sfxVol);
  }

  lockPointer() {
    if (document.pointerLockElement !== this.canvas) {
      const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    }
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.menu.showPause();
    if (document.pointerLockElement) document.exitPointerLock();
  }

  resume() {
    this.state = 'playing';
    this.menu.hide();
    this.lockPointer();
    this.last = performance.now();
  }

  quitToTitle() {
    this.state = 'title';
    if (document.pointerLockElement) document.exitPointerLock();
    this.newWorld(2, true);
    this.menu.showTitle();
    this.audio.startMusic('menu');
  }

  onSettingsChanged(k) {
    saveSettings(this.settings);
    if (k === 'musicVol') this.audio.setMusicVolume(this.settings.musicVol);
    if (k === 'sfxVol') this.audio.setSfxVolume(this.settings.sfxVol);
    if (k === 'fov') this.resize();
    if (k === 'quality') this.applyQuality();
    if (this.world) Object.assign(this.world.settings, this.settings);
  }

  // ------------------------------------------------------------------ input
  bindInput() {
    const inp = this.input;
    window.addEventListener('keydown', (e) => {
      if (this.menu.capturingKey) return;
      const k = e.code;
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k)) e.preventDefault();
      if (k === 'Escape') {
        if (this.state === 'playing') this.pause();
        else if (this.state === 'paused' && !this.menu.inSubmenu) this.resume();
        else this.menu.back();
        return;
      }
      if (this.state !== 'playing') { this.menu.key(e); return; }
      if (e.repeat) return;
      inp.keys.add(k);
      if (k === 'KeyE' || k === 'Space' || k === 'Enter') inp.usePressed = true;
      if (k.startsWith('Digit')) { const n = +k.slice(5); if (n >= 1 && n <= 7) inp.slot = n; }
      if (k === 'Tab') this.automap = !this.automap;
      if (k === 'Equal' || k === 'NumpadAdd') this.hud.amZoom = Math.min(2, this.hud.amZoom * 1.3);
      if (k === 'Minus' || k === 'NumpadSubtract') this.hud.amZoom = Math.max(0.08, this.hud.amZoom / 1.3);
      if (k === 'KeyF' && e.shiftKey) { this.settings.showFps = !this.settings.showFps; saveSettings(this.settings); }
      if (k === 'ControlLeft' || k === 'ControlRight') inp.fire = true;
      // cheat codes
      if (k.startsWith('Key')) { this.cheatBuf = (this.cheatBuf + k.slice(3).toLowerCase()).slice(-12); this.checkCheats(); }
    });
    window.addEventListener('keyup', (e) => {
      inp.keys.delete(e.code);
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') inp.fire = inp.mouseFire || false;
    });
    window.addEventListener('blur', () => { inp.keys.clear(); inp.fire = false; inp.mouseFire = false; });
    this.canvas.addEventListener('mousedown', (e) => {
      if (this.state === 'playing') {
        if (document.pointerLockElement !== this.canvas) { this.lockPointer(); return; }
        if (e.button === 0) { inp.fire = true; inp.mouseFire = true; }
        if (e.button === 2) inp.usePressed = true;
      }
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) { inp.mouseFire = false; inp.fire = inp.keys.has('ControlLeft') || inp.keys.has('ControlRight'); } });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === this.canvas) { inp.mouseDX += e.movementX; inp.mouseDY += e.movementY; }
    });
    window.addEventListener('wheel', (e) => {
      if (this.state !== 'playing') return;
      if (this.automap) { this.hud.amZoom = Math.max(0.08, Math.min(2, this.hud.amZoom * (e.deltaY > 0 ? 0.85 : 1.18))); return; }
      inp.cycle = e.deltaY > 0 ? 1 : -1;
    }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.state === 'playing' && !this.world?.player.dead) this.pause();
    });
  }

  checkCheats() {
    const b = this.cheatBuf;
    const W = this.world;
    if (!W) return;
    const p = W.player;
    const hit = (code) => { if (b.endsWith(code)) { this.cheatBuf = ''; return true; } return false; };
    if (hit('iddqd')) { p.god = !p.god; if (p.god) p.health = 100; this.hud.message(p.god ? 'Degreelessness Mode On' : 'Degreelessness Mode Off'); }
    else if (hit('idkfa')) { Object.assign(p.weapons, { shotgun: true, chaingun: true }); Object.assign(p.ammo, { bullets: 200, shells: 50 }); p.armor = 200; p.armorType = 2; this.hud.message('Very Happy Ammo Added'); }
    else if (hit('idfa')) { Object.assign(p.weapons, { shotgun: true, chaingun: true }); Object.assign(p.ammo, { bullets: 200, shells: 50 }); p.armor = 200; p.armorType = 2; this.hud.message('Ammo (no keys) Added'); }
    else if (hit('idclip') || hit('idspispopd')) { p.noclip = !p.noclip; this.hud.message(p.noclip ? 'No Clipping Mode ON' : 'No Clipping Mode OFF'); }
    else if (hit('iddt')) {
      if (!this.revealAll) this.revealAll = true; else if (!this.revealThings) this.revealThings = true; else { this.revealAll = false; this.revealThings = false; }
    } else if (hit('idmypos')) this.hud.message(`x ${Math.round(p.x)}  y ${Math.round(p.y)}  angle ${Math.round(p.angle * 180 / Math.PI)}`);
  }

  readInput(dt) {
    const k = this.input.keys, s = this.settings, inp = this.input;
    const fwd = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    let strafe = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    let turn = (k.has('ArrowLeft') ? 1 : 0) - (k.has('ArrowRight') ? 1 : 0);
    if (k.has('AltLeft') || k.has('AltRight')) { strafe -= turn; turn = 0; }
    const shift = k.has('ShiftLeft') || k.has('ShiftRight');
    const run = s.alwaysRun ? !shift : shift;
    const sens = 0.0022 * s.sensitivity;
    const out = {
      forward: Math.max(-1, Math.min(1, fwd)), strafe: Math.max(-1, Math.min(1, strafe)), run,
      lookX: inp.mouseDX * sens - turn * dt * (run ? 3.6 : 2.4),
      lookY: inp.mouseDY * sens * (s.invertY ? -1 : 1),
      fire: inp.fire, use: inp.usePressed, weaponSlot: inp.slot, cycle: inp.cycle,
    };
    inp.mouseDX = 0; inp.mouseDY = 0; inp.usePressed = false; inp.slot = 0; inp.cycle = 0;
    return out;
  }

  // attract mode: slowly fly the camera around the start of the level
  attractInput(dt) {
    return { forward: 0, strafe: 0, run: false, lookX: -dt * 0.12, lookY: 0, fire: false, use: false, weaponSlot: 0, cycle: 0 };
  }

  // ------------------------------------------------------------------ loop
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (!(dt > 0)) dt = 0.016;
    dt = Math.min(dt, 0.05);
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsAcc > 0.5) { this.fps = Math.round(this.fpsN / this.fpsAcc); this.fpsAcc = 0; this.fpsN = 0; }
    const W = this.world;
    if (!W) return;
    if (this.state === 'playing') {
      const inp = this.readInput(dt);
      if (W.player.dead && W.time - W.deathTime > 1 && (inp.use || inp.fire)) {
        this.input.fire = false; this.input.mouseFire = false;
        this.newWorld(this.skill);
        return;
      }
      W.update(dt, inp);
      if (W.exited) this.finishLevel();
    } else if (this.state === 'title' || this.attract) {
      W.update(dt, this.attractInput(dt));
    }
    this.texUpdate(W.time);
    this.render(dt);
  }

  finishLevel() {
    this.state = 'intermission';
    if (document.pointerLockElement) document.exitPointerLock();
    this.audio.startMusic('intermission');
    this.menu.showIntermission(this.world.stats, E1M1);
  }

  render(dt) {
    const W = this.world, p = W.player, cam = this.camera, s = this.settings;
    // camera
    const bobOn = s.bob && !p.dead;
    const bobY = bobOn ? Math.sin(p.bobPhase * 2) * 2.2 * p.bob : 0;
    let ez = p.eyeZ + bobY - p.landSquash;
    if (ez > p.ceilz - 4) ez = p.ceilz - 4;
    const shakeX = (Math.random() - 0.5) * W.shake, shakeY = (Math.random() - 0.5) * W.shake;
    cam.position.set(p.x + shakeX * 0.3, ez + shakeY * 0.3, -p.y);
    p.kick = (p.kick || 0) * Math.exp(-dt * 12);
    cam.rotation.set(p.pitch + p.kick + shakeY * 0.002, p.angle - Math.PI / 2 + shakeX * 0.002, p.dead ? 0.25 * Math.min(1, p.deathDrop / 30) : 0);
    W.sky.position.copy(cam.position);
    W.sky.material.uniforms.time.value = W.time;
    // fog density follows sector lighting (Doom's light diminishing)
    const sec = p.sector;
    const lf = sec ? lightFactor(sec.light) : 1;
    W.scene.fog.density = 0.00028 + (1 - Math.min(1, lf)) * 0.0005;
    W.lights.update(dt, cam.position);
    W.fx.update(dt, W.scene.fog.density, 0.35 + Math.min(1, lf) * 0.8);
    this.audio.setListener(cam.position.x, cam.position.y, cam.position.z, cam.rotation.y);
    // weapon view
    const showWeapon = !p.dead && this.state !== 'title' && !this.attract;
    this.viewWeapon.root.visible = showWeapon;
    if (showWeapon) {
      const barLift = this.hud.barHeight / window.innerHeight;
      this.viewWeapon.root.position.y = barLift * 0.36;
      p.swayX = (p.swayX || 0) * Math.exp(-dt * 8);
      const bx = bobOn ? Math.cos(p.bobPhase) * 0.012 * p.bob : 0;
      const by = bobOn ? -Math.abs(Math.sin(p.bobPhase)) * 0.010 * p.bob : 0;
      this.viewWeapon.update({
        name: p.weapon, raise: p.raise, bobX: bx, bobY: by, fireT: p.fireT, flash: p.flashT > 0,
        firing: this.input.fire && p.weapon === 'chaingun' && p.hasAmmo('chaingun'), dt,
      });
      this.wAmbient.intensity = 0.4 + Math.min(1.2, lf) * 1.5;
      this.wKey.intensity = 0.4 + Math.min(1.2, lf) * 1.1;
      this.wFlash.intensity = p.flashT > 0 ? 6 : 0;
    }
    // post effects
    const u = this.finalPass.uniforms;
    u.time.value = W.time;
    u.damage.value = Math.min(0.85, p.damageCount / 100);
    u.bonus.value = Math.min(1, p.bonusCount / 60);
    u.dead.value = p.dead ? Math.min(1, (W.time - W.deathTime) * 2) : 0;
    this.composer.render(dt);
    const inGame = this.state === 'playing' || this.state === 'paused';
    this.hud.draw(inGame ? W : null, dt, {
      automap: this.automap && inGame, showBar: inGame, crosshair: s.crosshair, revealAll: this.revealAll, revealThings: this.revealThings,
      fps: s.showFps ? this.fps : 0,
    });
  }
}

export { SKILLS, saveSettings, QUALITY };

const game = new Game();
window.__game = game;
game.boot().catch((e) => {
  console.error(e);
  document.getElementById('menu').innerHTML = `<div class="panel"><h2>Error</h2><pre>${String(e && e.stack || e)}</pre></div>`;
});
