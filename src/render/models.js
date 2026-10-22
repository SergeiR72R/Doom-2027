// Procedural 3D models: monsters (rigged + procedurally animated), items,
// decorations, projectiles and first-person weapon view models.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Merge sibling meshes that share a material (per rig node) to cut draw calls.
export function mergeRig(node) {
  const groups = new Map();
  for (const c of node.children) {
    if (c.isMesh && !c.isSprite && c.children.length === 0 && !c.userData.keep) {
      if (!groups.has(c.material)) groups.set(c.material, []);
      groups.get(c.material).push(c);
    }
  }
  for (const [mat, meshes] of groups) {
    if (meshes.length < 2) continue;
    const geos = meshes.map((m) => {
      m.updateMatrix();
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      g.applyMatrix4(m.matrix);
      for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
      return g;
    });
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mat);
    mesh.castShadow = true; mesh.receiveShadow = true;
    for (const m of meshes) node.remove(m);
    node.add(mesh);
  }
  for (const c of [...node.children]) if (!c.isMesh || c.children.length) mergeRig(c);
}

const M = {};
function std(color, rough = 0.7, metal = 0.0, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...extra });
}
function glow(color, intensity = 2.5) {
  return new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity, roughness: 0.5 });
}
// small tiling grain textures (skin pores / fabric weave) so models aren't plastic-smooth
function grainTexture(kind) {
  const n = 128;
  const c = document.createElement('canvas');
  c.width = c.height = n;
  const g = c.getContext('2d');
  const id = g.createImageData(n, n);
  let seed = kind === 'cloth' ? 11 : 5;
  const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const val = new Float32Array(n * n);
  for (let i = 0; i < n * n; i++) val[i] = r();
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    let v;
    if (kind === 'cloth') {
      const w = ((x % 4) < 2) !== ((y % 4) < 2) ? 0.62 : 0.5;
      v = w + (val[y * n + x] - 0.5) * 0.25;
    } else {
      // blotchy skin: blurred noise + pores
      let a = 0;
      for (let k = -2; k <= 2; k++) a += val[((y + k + n) % n) * n + ((x + k * 3 + n) % n)];
      v = 0.55 + (a / 5 - 0.5) * 0.5 + (val[y * n + x] > 0.93 ? -0.25 : 0);
    }
    const b = Math.max(0, Math.min(255, v * 255));
    const o = (y * n + x) * 4;
    id.data[o] = id.data[o + 1] = id.data[o + 2] = b; id.data[o + 3] = 255;
  }
  g.putImageData(id, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  return t;
}

function initMaterials() {
  if (M.ready) return;
  M.ready = true;
  M.zSkin = std(0xa89480, 0.62);
  M.zShirt = std(0x55663a, 0.85);
  M.zPants = std(0x5d4d3c, 0.9);
  M.boot = std(0x231d18, 0.55, 0.1);
  M.belt = std(0x3a2a1a, 0.6);
  M.hair = std(0x2e2218, 0.9);
  M.redEye = glow(0xff2a0a, 4);
  M.gunMetal = std(0x2a2b30, 0.38, 0.85);
  M.gunMetalLight = std(0x50535c, 0.35, 0.9);
  M.wood = std(0x6b3f1f, 0.6, 0.0);
  M.sArmor = std(0x1e1e22, 0.45, 0.3);
  M.sPants = std(0x4b4b4e, 0.85);
  M.sSkin = std(0xb07a62, 0.6);
  M.blood = std(0x5a0606, 0.35, 0.0);
  M.flesh = std(0x8a2a22, 0.5);
  M.impSkin = std(0x7a4f33, 0.68);
  M.impBelly = std(0x9a7050, 0.7);
  M.bone = std(0xd8c9a6, 0.5);
  M.impEye = glow(0xffa010, 5);
  M.mouth = glow(0x601000, 1.2);
  M.marineGreen = std(0x3f5a2c, 0.6, 0.1);
  M.glove = std(0x3a3028, 0.65);
  M.marineSkin = std(0xc08a68, 0.55);
  M.brass = std(0xc0902a, 0.3, 0.9);
  M.shellRed = std(0x9a1a12, 0.45, 0.1);
  M.white = std(0xe8e8e0, 0.5);
  M.redCross = std(0xc01010, 0.5, 0, { emissive: 0x300000 });
  M.barrel = std(0x3e5a2a, 0.5, 0.45);
  M.barrelRim = std(0x30362a, 0.45, 0.7);
  M.slimeTop = new THREE.MeshStandardMaterial({ color: 0x206010, emissive: 0x50ff20, emissiveIntensity: 1.2, roughness: 0.2 });
  M.lampPole = std(0x3a3a40, 0.4, 0.8);
  M.lampGlow = glow(0xdfeaff, 6);
  M.hBonus = new THREE.MeshStandardMaterial({ color: 0x2040ff, emissive: 0x2a50ff, emissiveIntensity: 1.6, roughness: 0.1, metalness: 0.0, transparent: true, opacity: 0.85 });
  M.aBonus = std(0x6a9a40, 0.3, 0.8, { emissive: 0x204010, emissiveIntensity: 1 });
  M.gArmor = std(0x3d8a2c, 0.35, 0.6, { emissive: 0x0c3a06, emissiveIntensity: 1 });
  M.bArmor = std(0x2a4ab8, 0.35, 0.6, { emissive: 0x0a1650, emissiveIntensity: 1 });
  M.ammoBox = std(0x4a4a2a, 0.7, 0.2);
  const skinBump = grainTexture('skin'), clothBump = grainTexture('cloth');
  for (const k of ['zSkin', 'sSkin', 'impSkin', 'impBelly', 'marineSkin', 'flesh']) { M[k].bumpMap = skinBump; M[k].bumpScale = 1.6; }
  for (const k of ['zShirt', 'zPants', 'sPants', 'sArmor', 'marineGreen', 'glove', 'belt']) { M[k].bumpMap = clothBump; M[k].bumpScale = 1.2; }
  M.zSkin.color.set(0x8f7b68);
  M.redEye.emissiveIntensity = 2.5;
}

function capsule(r, len, mat, seg = 10) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 4, seg), mat);
  m.castShadow = true;
  return m;
}
function rbox(w, h, d, r, mat) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, r), mat);
  m.castShadow = true;
  return m;
}
function box(w, h, d, mat) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.castShadow = true;
  return m;
}
function cyl(rt, rb, h, mat, seg = 14) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.castShadow = true;
  return m;
}
function sphere(r, mat, ws = 14, hs = 10) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), mat);
  m.castShadow = true;
  return m;
}
function cone(r, h, mat, seg = 8) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat);
  m.castShadow = true;
  return m;
}
// limb hanging down from a joint
function limb(r, len, mat) {
  const g = new THREE.Group();
  const c = capsule(r, len, mat);
  c.position.y = -len / 2;
  g.add(c);
  return g;
}

let TEX = null;
export function setModelTextures(tex) { TEX = tex; initMaterials(); }

function makeSprite(texName, color, size, additive = true) {
  const mat = new THREE.SpriteMaterial({
    map: TEX[texName].map, color, transparent: true, depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(size, size, 1);
  return s;
}

// =================================================================== monsters
export class MonsterModel {
  constructor(kind) {
    initMaterials();
    this.kind = kind;
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.flash = 0;
    if (kind === 'imp') this.buildImp(); else this.buildHuman(kind);
    mergeRig(this.body);
    this.meshes = [];
    this.body.traverse((o) => { if (o.isMesh) this.meshes.push(o); });
    this.shadows = true;
    this.deadT = 0;
    this.pool = null;
  }

  buildHuman(kind) {
    const serg = kind === 'sergeant';
    const skin = serg ? M.sSkin : M.zSkin;
    const shirt = serg ? M.sArmor : M.zShirt;
    const pants = serg ? M.sPants : M.zPants;
    const hips = new THREE.Group(); hips.position.y = 27; this.body.add(hips);
    this.hipY = 27;
    // legs
    const mkLeg = (sx) => {
      const leg = limb(3.6, 9, pants); leg.position.set(sx * 4.6, 0, 0); hips.add(leg);
      const shin = limb(3.1, 9.5, pants); shin.position.y = -13; leg.add(shin);
      const bootM = rbox(6.4, 4.6, 10, 1.4, M.boot); bootM.position.set(0, -13.2, 1.8); shin.add(bootM);
      return { leg, shin };
    };
    const L = mkLeg(-1), Rr = mkLeg(1);
    const belt = rbox(15.5, 3, 9.4, 1.2, M.belt); belt.position.y = 1; hips.add(belt);
    const buckle = box(3, 2.2, 0.6, M.gunMetalLight); buckle.position.set(0, 1, 4.8); hips.add(buckle);
    const pelvis = rbox(14.5, 5, 8.6, 2, pants); pelvis.position.y = -1.8; hips.add(pelvis);
    // torso
    const torso = new THREE.Group(); torso.position.y = 2; hips.add(torso);
    const chest = rbox(16.5, 17, 9.5, 3, shirt); chest.position.y = 9.5; torso.add(chest);
    if (serg) {
      const plate = rbox(14, 9, 2.2, 1, M.gunMetal); plate.position.set(0, 12, 4.6); torso.add(plate);
      for (const sx of [-1, 1]) { const pad = sphere(4.4, M.sArmor); pad.scale.set(1.1, 0.75, 1); pad.position.set(sx * 8.6, 17.2, 0); torso.add(pad); }
    } else {
      // torn bloody shirt patches and a dog-tag strap
      const stain = rbox(5, 4, 0.6, 0.3, M.blood); stain.position.set(-3, 7, 4.8); stain.rotation.z = 0.4; torso.add(stain);
      const strap = box(1.6, 17, 0.5, M.belt); strap.position.set(2.5, 9.5, 4.9); strap.rotation.z = -0.5; torso.add(strap);
    }
    const neck = cyl(2.6, 3, 3.4, skin); neck.position.y = 19.4; torso.add(neck);
    const head = new THREE.Group(); head.position.y = 24.8; torso.add(head);
    const skull = sphere(5.4, skin, 18, 14); skull.scale.set(0.95, 1.06, 1.02); head.add(skull);
    const jaw = rbox(7.6, 3.4, 6.4, 1.4, skin); jaw.position.set(0, -3.6, 1.0); head.add(jaw);
    if (!serg) { const hair = sphere(5.6, M.hair, 16, 10); hair.scale.set(1, 0.65, 1.04); hair.position.set(0, 2.2, -0.6); head.add(hair); }
    for (const sx of [-1, 1]) {
      const e = sphere(0.95, M.redEye, 8, 6); e.position.set(sx * 2.1, 0.6, 4.6); head.add(e);
      const brow = box(2.6, 0.8, 1.2, serg ? skin : M.hair); brow.position.set(sx * 2.1, 2.0, 4.6); brow.rotation.z = -sx * 0.35; head.add(brow);
    }
    const mouth = box(3.4, 0.7, 0.5, M.mouth); mouth.position.set(0, -3.4, 4.2); head.add(mouth);
    // arms
    const mkArm = (sx) => {
      const arm = limb(2.9, 8.6, shirt); arm.position.set(sx * 9.8, 16.2, 0); torso.add(arm);
      const fore = limb(2.5, 8.6, skin); fore.position.y = -11.4; arm.add(fore);
      const hand = sphere(2.6, skin); hand.position.y = -11.6; fore.add(hand);
      return { arm, fore };
    };
    const AL = mkArm(-1), AR = mkArm(1);
    // weapon held in the right hand pointing forward
    const gun = new THREE.Group();
    if (serg) {
      const barrel = cyl(0.9, 0.9, 24, M.gunMetal, 10); barrel.rotation.x = Math.PI / 2; barrel.position.z = 9; gun.add(barrel);
      const tube = cyl(0.8, 0.8, 18, M.gunMetalLight, 8); tube.rotation.x = Math.PI / 2; tube.position.set(0, -1.7, 7); gun.add(tube);
      const pump = rbox(2.6, 2.6, 7, 0.8, M.wood); pump.position.set(0, -1.7, 11); gun.add(pump);
      const recv = rbox(2.6, 3.6, 8, 0.6, M.gunMetal); recv.position.set(0, -0.6, -1.5); gun.add(recv);
      const stock = rbox(2.4, 4, 9, 1, M.wood); stock.position.set(0, -2, -9); stock.rotation.x = 0.15; gun.add(stock);
    } else {
      const barrel = cyl(0.7, 0.7, 14, M.gunMetal, 8); barrel.rotation.x = Math.PI / 2; barrel.position.z = 11; gun.add(barrel);
      const body = rbox(2.6, 4.2, 14, 0.6, M.gunMetal); body.position.set(0, -0.5, 2); gun.add(body);
      const mag = rbox(1.8, 6, 2.6, 0.4, M.gunMetalLight); mag.position.set(0, -4.5, 4); mag.rotation.x = 0.2; gun.add(mag);
      const stock = rbox(2.2, 4.4, 8, 1, M.wood); stock.position.set(0, -1.6, -8); gun.add(stock);
    }
    gun.position.set(0, -11, 1.5);
    gun.rotation.x = Math.PI / 2;
    AR.fore.add(gun);
    const muzzle = makeSprite('MUZZLE', 0xffe0a0, 14);
    muzzle.visible = false;
    muzzle.position.set(0, 0, serg ? 22 : 19);
    gun.add(muzzle);
    this.muzzle = muzzle;
    Object.assign(this, { hips, torso, head, legL: L.leg, legR: Rr.leg, shinL: L.shin, shinR: Rr.shin, armL: AL.arm, armR: AR.arm, foreL: AL.fore, foreR: AR.fore, gun });
  }

  buildImp() {
    const hips = new THREE.Group(); hips.position.y = 25; this.body.add(hips);
    this.hipY = 25;
    const mkLeg = (sx) => {
      const leg = limb(3.8, 8.5, M.impSkin); leg.position.set(sx * 4.8, 0, 0); hips.add(leg);
      leg.rotation.x = -0.25;
      const shin = limb(3, 10, M.impSkin); shin.position.y = -12.5; shin.rotation.x = 0.45; leg.add(shin);
      const foot = rbox(5.5, 3.2, 9, 1.4, M.impSkin); foot.position.set(0, -13, 2.4); shin.add(foot);
      for (let i = -1; i <= 1; i++) { const c = cone(0.7, 3, M.bone, 5); c.rotation.x = Math.PI / 2; c.position.set(i * 1.7, -13.6, 7.4); shin.add(c); }
      const kneeSpike = cone(1, 4, M.bone, 6); kneeSpike.position.set(0, -12, 2.6); kneeSpike.rotation.x = 1.2; leg.add(kneeSpike);
      return { leg, shin };
    };
    const L = mkLeg(-1), Rr = mkLeg(1);
    const pelvis = rbox(13.5, 6, 8.5, 2.5, M.impSkin); pelvis.position.y = -1; hips.add(pelvis);
    const torso = new THREE.Group(); torso.position.y = 2; torso.rotation.x = 0.32; hips.add(torso);
    this.torsoBaseX = 0.32;
    const chest = rbox(17, 17, 10.5, 4, M.impSkin); chest.position.y = 9.5; torso.add(chest);
    const belly = rbox(11, 10, 2, 1, M.impBelly); belly.position.set(0, 7, 4.9); torso.add(belly);
    // spikes on back & shoulders
    for (let i = 0; i < 5; i++) {
      const sp = cone(1.4, 6, M.bone, 6); sp.position.set((i % 2 ? 1 : -1) * 2.5, 6 + i * 3, -5.4); sp.rotation.x = -1.0; torso.add(sp);
    }
    for (const sx of [-1, 1]) {
      for (let i = 0; i < 3; i++) { const sp = cone(1.2, 5.5, M.bone, 6); sp.position.set(sx * (8 + i * 1.4), 17 + i * 0.5, -1 + i * 1.5); sp.rotation.z = -sx * 0.9; torso.add(sp); }
    }
    const neck = cyl(3, 3.6, 4, M.impSkin); neck.position.set(0, 19.5, 1); torso.add(neck);
    const head = new THREE.Group(); head.position.set(0, 24, 2.5); torso.add(head);
    this.headBaseX = -0.3; head.rotation.x = -0.3;
    const skull = sphere(5.6, M.impSkin, 18, 14); skull.scale.set(1, 0.95, 1.08); head.add(skull);
    const snout = rbox(7, 4.4, 5, 1.6, M.impSkin); snout.position.set(0, -2.5, 3.8); head.add(snout);
    const mouth = box(5.5, 0.9, 0.6, M.mouth); mouth.position.set(0, -3.4, 6.35); head.add(mouth);
    for (let i = -2; i <= 2; i++) { const t = cone(0.35, 1.3, M.bone, 4); t.rotation.x = Math.PI; t.position.set(i * 1.1, -2.6, 6.3); head.add(t); }
    for (const sx of [-1, 1]) {
      const e = sphere(1.25, M.impEye, 8, 6); e.position.set(sx * 2.4, 1.0, 4.6); e.scale.set(1.2, 0.8, 1); head.add(e);
      const horn = cone(1.1, 5.5, M.bone, 6); horn.position.set(sx * 3.6, 4.4, -0.5); horn.rotation.set(-0.6, 0, -sx * 0.5); head.add(horn);
      const ridge = box(3, 1, 2, M.impSkin); ridge.position.set(sx * 2.4, 2.3, 4.4); ridge.rotation.z = sx * 0.4; head.add(ridge);
    }
    const mkArm = (sx) => {
      const arm = limb(3.2, 9.5, M.impSkin); arm.position.set(sx * 10.5, 16.5, 0); torso.add(arm);
      const fore = limb(2.8, 10.5, M.impSkin); fore.position.y = -12.6; arm.add(fore);
      const elbow = cone(1, 4, M.bone, 6); elbow.position.set(0, -12.6, -2.6); elbow.rotation.x = -2.2; arm.add(elbow);
      const hand = sphere(3, M.impSkin); hand.position.y = -14; fore.add(hand);
      for (let i = -1; i <= 1; i++) { const c = cone(0.6, 4.5, M.bone, 5); c.position.set(i * 1.6, -17.5, 1); c.rotation.x = Math.PI - 0.3; fore.add(c); }
      return { arm, fore, hand };
    };
    const AL = mkArm(-1), AR = mkArm(1);
    AR.arm.rotation.z = 0.15; AL.arm.rotation.z = -0.15;
    // fireball forming in the hand during the throw
    const ball = makeSprite('FIRE', 0xffa040, 12);
    ball.visible = false;
    ball.position.y = -15;
    AR.fore.add(ball);
    this.handBall = ball;
    Object.assign(this, { hips, torso, head, legL: L.leg, legR: Rr.leg, shinL: L.shin, shinR: Rr.shin, armL: AL.arm, armR: AR.arm, foreL: AL.fore, foreR: AR.fore });
  }

  setShadows(on) {
    if (on === this.shadows) return;
    this.shadows = on;
    for (const m of this.meshes) m.castShadow = on;
  }

  // world position of weapon muzzle / imp hand (three coords)
  firePoint(out) {
    const obj = this.muzzle || this.handBall;
    return obj.getWorldPosition(out);
  }

  update(dt, st) {
    const imp = this.kind === 'imp';
    const t = st.t;
    const ph = st.walkPhase;
    // reset
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    this.torso.rotation.set(imp ? this.torsoBaseX : 0, 0, 0);
    this.head.rotation.set(imp ? this.headBaseX : 0, 0, 0);
    this.hips.position.y = this.hipY;
    if (this.muzzle) this.muzzle.visible = false;
    if (this.handBall) this.handBall.visible = false;
    let legSwing = 0, kneeL = imp ? 0.45 : 0.08, kneeR = kneeL;
    let armLx = 0, armRx = 0, foreLx = -0.15, foreRx = -0.15, armLz = imp ? -0.15 : -0.08, armRz = imp ? 0.15 : 0.08;
    const holdGun = !imp;
    if (holdGun) { armRx = -0.9; foreRx = -0.7; armLx = -0.75; foreLx = -1.0; armLz = 0.35; }

    if (st.anim === 'walk' || st.anim === 'idle') {
      const amp = st.anim === 'walk' ? 1 : 0;
      const s = Math.sin(ph);
      legSwing = s * 0.62 * amp;
      kneeL += Math.max(0, Math.sin(ph + 1.2)) * 0.9 * amp;
      kneeR += Math.max(0, Math.sin(ph + 1.2 + Math.PI)) * 0.9 * amp;
      this.hips.position.y += Math.abs(Math.cos(ph)) * 1.4 * amp - 0.6 * amp;
      this.torso.rotation.y = s * 0.12 * amp;
      if (imp) { armLx = s * 0.7 * amp; armRx = -s * 0.7 * amp; foreLx = -0.5; foreRx = -0.5; }
      else { armRx += s * 0.08 * amp; armLx += s * 0.08 * amp; }
      // idle breathing
      const br = Math.sin(st.time * 2.2) * 0.03;
      this.torso.rotation.x += br;
      this.head.rotation.y = st.anim === 'idle' ? Math.sin(st.time * 0.7) * 0.25 : 0;
    } else if (st.anim === 'attack') {
      if (imp) {
        // wind up then throw (fireball released at st.fireAt)
        const k = Math.min(1, t / st.fireAt);
        if (t < st.fireAt) {
          armRx = -2.6 * k; foreRx = -1.2 * k; armRz = 0.5 * k;
          this.torso.rotation.y = -0.4 * k;
          this.handBall.visible = true;
          const s = 3 + 9 * k;
          this.handBall.scale.set(s, s, 1);
        } else {
          const k2 = Math.min(1, (t - st.fireAt) / 0.15);
          armRx = -2.6 + 3.6 * k2; foreRx = -1.2 + 1.1 * k2; armRz = 0.5;
          this.torso.rotation.y = -0.4 + 0.75 * k2;
          this.torso.rotation.x += 0.2 * k2;
        }
        armLx = -0.6; foreLx = -0.8;
        this.head.rotation.x = -0.1;
      } else {
        armRx = -1.5 + (st.aimPitch || 0); foreRx = -0.08; armLx = -1.25 + (st.aimPitch || 0); foreLx = -0.55; armLz = 0.55; armRz = 0.05;
        this.torso.rotation.y = -0.1;
        if (this.flash > 0) {
          this.muzzle.visible = true;
          const s = 10 + Math.random() * 8;
          this.muzzle.scale.set(s, s, 1);
          this.muzzle.material.rotation = Math.random() * 6.28;
          armRx -= 0.15; this.torso.rotation.x -= 0.06;
        }
      }
    } else if (st.anim === 'melee') {
      const k = Math.min(1, t / 0.25);
      armRx = -2.4 + 3.2 * k; foreRx = -0.9 + 0.6 * k; armRz = 0.4;
      armLx = -2.0 * (1 - k); foreLx = -0.6;
      this.torso.rotation.x += 0.25 * k;
    } else if (st.anim === 'pain') {
      const k = Math.max(0, 1 - t / 0.25);
      this.torso.rotation.x -= 0.45 * k;
      this.head.rotation.x -= 0.5 * k;
      armLx = imp ? 0.8 * k : armLx - 0.6 * k; armRx = imp ? 0.6 * k : armRx - 0.5 * k;
      armLz -= 0.5 * k; armRz += 0.5 * k;
    } else if (st.anim === 'dead') {
      const k = Math.min(1, t / 0.6);
      const e = k * k * (3 - 2 * k);
      const dir = imp ? 1 : -1;
      this.body.rotation.x = dir * e * Math.PI / 2 * 0.98;
      this.body.position.y = e * (imp ? 4 : 4.5);
      this.body.position.z = -dir * e * 2;
      kneeL = 0.08 + e * 0.6; kneeR = 0.08 + e * 0.2;
      legSwing = e * 0.25;
      armLx = -e * 2.6; armRx = -e * 2.2; armLz = -e * 0.6; armRz = e * 0.8;
      foreLx = -e * 0.4; foreRx = -e * 0.2;
      this.head.rotation.x = dir * e * 0.4;
      this.head.rotation.y = e * 0.5;
      if (this.pool) {
        const ps = Math.min(1, t / 2.5);
        this.pool.scale.setScalar(0.2 + ps * 0.8);
        this.pool.visible = true;
      }
    }
    this.legL.rotation.x = -legSwing;
    this.legR.rotation.x = legSwing;
    if (imp && st.anim !== 'dead') { this.legL.rotation.x -= 0.25; this.legR.rotation.x -= 0.25; }
    this.shinL.rotation.x = kneeL;
    this.shinR.rotation.x = kneeR;
    this.armL.rotation.set(armLx, 0, armLz);
    this.armR.rotation.set(armRx, 0, armRz);
    this.foreL.rotation.x = foreLx;
    this.foreR.rotation.x = foreRx;
    if (this.flash > 0) this.flash -= dt;
  }

  addBloodPool() {
    const t = TEX.BLOODPOOL;
    const m = new THREE.MeshStandardMaterial({ map: t.map, transparent: true, depthWrite: false, roughness: 0.15, metalness: 0.0, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    const p = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), m);
    p.rotation.x = -Math.PI / 2;
    p.rotation.z = Math.random() * 6.28;
    p.position.set(0, 0.35, this.kind === 'imp' ? 12 : -14);
    p.visible = false;
    p.receiveShadow = true;
    this.root.add(p);
    this.pool = p;
  }

  gib() {
    this.body.visible = false;
    const g = new THREE.Group();
    const mats = [M.flesh, M.blood, this.kind === 'imp' ? M.impSkin : M.flesh];
    for (let i = 0; i < 9; i++) {
      const s = sphere(2 + Math.random() * 3.5, mats[i % 3], 8, 6);
      s.scale.y = 0.5;
      s.position.set((Math.random() - 0.5) * 22, 1, (Math.random() - 0.5) * 22);
      g.add(s);
    }
    const b = sphere(4, this.kind === 'imp' ? M.impSkin : M.zSkin, 10, 8); b.position.set(4, 3, -3); g.add(b);
    this.root.add(g);
    if (!this.pool) this.addBloodPool();
    this.pool.visible = true;
    this.pool.scale.setScalar(1.2);
  }
}

// =================================================================== things
export function makeThingModel(type) {
  initMaterials();
  const g = new THREE.Group();
  let spin = true, bob = true, lightColor = null;
  switch (type) {
    case 'barrel': {
      spin = false; bob = false;
      const b = cyl(12.5, 12.5, 32, M.barrel, 20); b.position.y = 16; g.add(b);
      for (const y of [3, 16, 29]) { const r = new THREE.Mesh(new THREE.TorusGeometry(12.7, 0.9, 6, 24), M.barrelRim); r.rotation.x = Math.PI / 2; r.position.y = y; r.castShadow = true; g.add(r); }
      const top = cyl(11.8, 11.8, 1, M.slimeTop, 20); top.position.y = 32.2; g.add(top);
      const lip = new THREE.Mesh(new THREE.TorusGeometry(12, 1.2, 6, 24), M.barrelRim); lip.rotation.x = Math.PI / 2; lip.position.y = 32.6; g.add(lip);
      g.userData.slime = top;
      break;
    }
    case 'lamp': {
      spin = false; bob = false;
      const base = cyl(9, 12, 6, M.lampPole, 16); base.position.y = 3; g.add(base);
      const pole = cyl(2.2, 2.6, 58, M.lampPole, 10); pole.position.y = 34; g.add(pole);
      const cage = cyl(6.5, 6.5, 18, new THREE.MeshStandardMaterial({ color: 0x222228, metalness: 0.8, roughness: 0.4, wireframe: true }), 8); cage.position.y = 72; g.add(cage);
      const tube = capsule(4, 12, M.lampGlow, 12); tube.position.y = 72; tube.castShadow = false; g.add(tube);
      const cap = cyl(7, 7, 2, M.lampPole, 16); cap.position.y = 82; g.add(cap);
      const cap2 = cyl(7, 7, 2, M.lampPole, 16); cap2.position.y = 62; g.add(cap2);
      break;
    }
    case 'clip': {
      const mag = rbox(4, 11, 7, 0.8, M.gunMetal); mag.position.y = 6; mag.rotation.z = 0.12; g.add(mag);
      for (let i = 0; i < 2; i++) { const b = cyl(1, 1, 3, M.brass, 8); b.rotation.z = Math.PI / 2; b.position.set(0.6, 12.3, -1.5 + i * 3); g.add(b); }
      break;
    }
    case 'shells': {
      for (let i = 0; i < 4; i++) {
        const s = new THREE.Group();
        const body = cyl(1.6, 1.6, 7, M.shellRed, 10); body.position.y = 3.5; s.add(body);
        const cap = cyl(1.75, 1.75, 2, M.brass, 10); cap.position.y = 1; s.add(cap);
        s.position.set((i % 2) * 3.8 - 1.9, 0, Math.floor(i / 2) * 3.8 - 1.9);
        g.add(s);
      }
      break;
    }
    case 'shellbox': {
      const b = rbox(20, 9, 12, 1, M.ammoBox); b.position.y = 4.5; g.add(b);
      const stripe = box(20.4, 2.4, 12.4, M.shellRed); stripe.position.y = 6; g.add(stripe);
      for (let i = 0; i < 5; i++) { const c = cyl(1.6, 1.6, 2, M.brass, 8); c.position.set(-7 + i * 3.5, 9.5, 0); g.add(c); }
      break;
    }
    case 'bullets': {
      const b = rbox(16, 9, 10, 1, M.ammoBox); b.position.y = 4.5; g.add(b);
      break;
    }
    case 'stim': {
      const b = rbox(10, 7, 6, 1.2, M.white); b.position.y = 3.5; g.add(b);
      const c1 = box(6, 1.8, 6.3, M.redCross); c1.position.y = 4; g.add(c1);
      const c2 = box(1.8, 5, 6.3, M.redCross); c2.position.y = 4; g.add(c2);
      break;
    }
    case 'medi': {
      const b = rbox(22, 12, 9, 1.5, M.white); b.position.y = 6; g.add(b);
      const c1 = box(10, 3, 9.4, M.redCross); c1.position.y = 6; g.add(c1);
      const c2 = box(3, 9, 9.4, M.redCross); c2.position.y = 6; g.add(c2);
      const h = new THREE.Mesh(new THREE.TorusGeometry(3, 0.8, 6, 12, Math.PI), M.gunMetal); h.position.y = 12; g.add(h);
      break;
    }
    case 'hbonus': {
      const f = sphere(4.5, M.hBonus, 14, 10); f.position.y = 6; g.add(f);
      const n = cyl(1.6, 1.8, 4, M.hBonus, 10); n.position.y = 11.5; g.add(n);
      const cork = cyl(1.4, 1.4, 1.6, M.white, 8); cork.position.y = 14; g.add(cork);
      lightColor = 0x3050ff;
      break;
    }
    case 'abonus': {
      const h = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.aBonus);
      h.position.y = 2; h.castShadow = true; g.add(h);
      const visor = box(8, 2, 3, glow(0x40ff40, 2)); visor.position.set(0, 4, 4.8); g.add(visor);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(6, 0.8, 6, 18), M.aBonus); rim.rotation.x = Math.PI / 2; rim.position.y = 2; g.add(rim);
      break;
    }
    case 'garmor':
    case 'barmor': {
      const mat = type === 'garmor' ? M.gArmor : M.bArmor;
      const vest = rbox(22, 22, 9, 3, mat); vest.position.y = 14; g.add(vest);
      for (const sx of [-1, 1]) { const s = sphere(6, mat, 12, 8); s.scale.set(1.1, 0.6, 1); s.position.set(sx * 11, 23, 0); g.add(s); }
      const plate = rbox(14, 8, 2, 1, mat); plate.position.set(0, 18, 4.8); g.add(plate);
      const neck = new THREE.Mesh(new THREE.TorusGeometry(4.5, 1.4, 6, 14), mat); neck.rotation.x = Math.PI / 2; neck.position.y = 25; g.add(neck);
      lightColor = type === 'garmor' ? 0x40ff40 : 0x4060ff;
      break;
    }
    case 'shotgun': {
      const w = buildShotgunMesh(); w.scale.setScalar(36); w.rotation.y = Math.PI / 2; w.position.y = 4; g.add(w);
      break;
    }
    case 'chaingun': {
      const w = buildChaingunMesh(); w.scale.setScalar(34); w.rotation.y = Math.PI / 2; w.position.y = 6; g.add(w);
      break;
    }
    default: {
      const b = box(8, 8, 8, M.white); b.position.y = 4; g.add(b);
    }
  }
  mergeRig(g);
  g.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
  return { group: g, spin, bob, lightColor };
}

// =================================================================== projectiles
export function makeFireball() {
  const g = new THREE.Group();
  const core = makeSprite('FIRE', 0xffc070, 16);
  const halo = makeSprite('FLARE', 0xff5010, 40);
  g.add(halo); g.add(core);
  g.userData.core = core; g.userData.halo = halo;
  return g;
}

// =================================================================== view weapons
// built in "view units" (~1 = 1 m), camera at origin looking down -Z
function buildPistolMesh() {
  initMaterials();
  const g = new THREE.Group();
  const slide = rbox(0.034, 0.036, 0.2, 0.006, M.gunMetalLight); slide.position.set(0, 0.018, -0.1); g.add(slide);
  const frame = rbox(0.032, 0.022, 0.17, 0.004, M.gunMetal); frame.position.set(0, -0.008, -0.09); g.add(frame);
  const grip = rbox(0.03, 0.1, 0.045, 0.008, M.gunMetal); grip.position.set(0, -0.06, -0.012); grip.rotation.x = -0.22; g.add(grip);
  const guard = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 6, 12, Math.PI), M.gunMetal); guard.rotation.set(0, Math.PI / 2, Math.PI); guard.position.set(0, -0.02, -0.06); g.add(guard);
  const sight = box(0.006, 0.008, 0.01, M.gunMetal); sight.position.set(0, 0.04, -0.19); g.add(sight);
  const rear = box(0.022, 0.008, 0.008, M.gunMetal); rear.position.set(0, 0.04, -0.01); g.add(rear);
  const bore = cyl(0.006, 0.006, 0.01, glow(0x000000, 0), 8); bore.rotation.x = Math.PI / 2; bore.position.set(0, 0.016, -0.2); g.add(bore);
  g.userData.slide = slide;
  return g;
}
function buildShotgunMesh() {
  initMaterials();
  const g = new THREE.Group();
  const barrel = cyl(0.013, 0.013, 0.62, M.gunMetal, 12); barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.02, -0.42); g.add(barrel);
  const tube = cyl(0.011, 0.011, 0.5, M.gunMetalLight, 10); tube.rotation.x = Math.PI / 2; tube.position.set(0, -0.008, -0.38); g.add(tube);
  const recv = rbox(0.045, 0.06, 0.2, 0.008, M.gunMetal); recv.position.set(0, 0.0, -0.05); g.add(recv);
  const port = box(0.002, 0.02, 0.06, glow(0x000000, 0)); port.position.set(0.0235, 0.008, -0.05); g.add(port);
  const stock = rbox(0.04, 0.07, 0.26, 0.012, M.wood); stock.position.set(0, -0.03, 0.17); stock.rotation.x = 0.14; g.add(stock);
  const grip = rbox(0.034, 0.06, 0.05, 0.01, M.wood); grip.position.set(0, -0.05, 0.03); grip.rotation.x = -0.4; g.add(grip);
  const pump = new THREE.Group();
  const fore = rbox(0.042, 0.04, 0.15, 0.012, M.wood); pump.add(fore);
  for (let i = 0; i < 5; i++) { const r = box(0.044, 0.004, 0.006, M.belt); r.position.set(0, -0.018, -0.06 + i * 0.03); pump.add(r); }
  pump.position.set(0, -0.012, -0.3); g.add(pump);
  const bead = sphere(0.004, M.brass, 6, 4); bead.position.set(0, 0.036, -0.72); g.add(bead);
  g.userData.pump = pump;
  return g;
}
function buildChaingunMesh() {
  initMaterials();
  const g = new THREE.Group();
  const spin = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const b = cyl(0.008, 0.008, 0.5, M.gunMetal, 8); b.rotation.x = Math.PI / 2; b.position.set(Math.cos(a) * 0.025, Math.sin(a) * 0.025, 0); spin.add(b);
  }
  for (const z of [-0.2, 0.05, 0.2]) { const ring = cyl(0.036, 0.036, 0.014, M.gunMetalLight, 14); ring.rotation.x = Math.PI / 2; ring.position.z = z; spin.add(ring); }
  spin.position.set(0, 0.0, -0.38);
  g.add(spin);
  const body = rbox(0.09, 0.09, 0.22, 0.015, M.gunMetal); body.position.set(0, -0.005, -0.04); g.add(body);
  const handle = rbox(0.03, 0.03, 0.12, 0.008, M.gunMetalLight); handle.position.set(0, 0.07, -0.05); g.add(handle);
  const h1 = box(0.02, 0.04, 0.02, M.gunMetalLight); h1.position.set(0, 0.05, -0.1); g.add(h1);
  const h2 = box(0.02, 0.04, 0.02, M.gunMetalLight); h2.position.set(0, 0.05, 0.0); g.add(h2);
  const grip = rbox(0.035, 0.08, 0.05, 0.01, M.belt); grip.position.set(0, -0.08, 0.04); grip.rotation.x = -0.3; g.add(grip);
  const box1 = rbox(0.05, 0.07, 0.08, 0.01, M.ammoBox); box1.position.set(-0.07, -0.02, -0.03); g.add(box1);
  g.userData.spin = spin;
  return g;
}
function buildArm(withGlove = true) {
  initMaterials();
  const g = new THREE.Group();
  const sleeve = capsule(0.034, 0.24, M.marineGreen, 12); sleeve.rotation.x = Math.PI / 2; sleeve.position.z = 0.16; g.add(sleeve);
  const pad = rbox(0.08, 0.05, 0.12, 0.02, M.marineGreen); pad.position.set(0, 0.02, 0.26); g.add(pad);
  const hand = rbox(0.05, 0.045, 0.06, 0.015, withGlove ? M.glove : M.marineSkin); hand.position.set(0, 0, 0); g.add(hand);
  return g;
}

export class ViewWeapon {
  constructor(tex) {
    initMaterials();
    this.root = new THREE.Group();
    this.models = {};
    // fist
    {
      const g = new THREE.Group();
      const arm = buildArm(false);
      const fist = new THREE.Group();
      const palm = rbox(0.07, 0.06, 0.075, 0.02, M.marineSkin); fist.add(palm);
      for (let i = 0; i < 4; i++) { const k = rbox(0.016, 0.022, 0.03, 0.007, M.marineSkin); k.position.set(-0.025 + i * 0.017, 0.012, -0.042); fist.add(k); }
      const thumb = rbox(0.02, 0.02, 0.05, 0.008, M.marineSkin); thumb.position.set(-0.04, -0.012, -0.02); thumb.rotation.y = 0.5; fist.add(thumb);
      arm.add(fist);
      arm.children[2].visible = false;
      g.add(arm);
      g.position.set(0.1, -0.12, -0.24);
      g.rotation.set(0.35, 0.3, 0);
      g.userData.arm = arm;
      this.models.fist = g;
    }
    // pistol
    {
      const g = new THREE.Group();
      const p = buildPistolMesh();
      const arm = buildArm(true);
      arm.position.set(0, -0.06, -0.01);
      arm.rotation.x = 0.95;
      g.add(arm); g.add(p);
      g.position.set(0.0, -0.105, -0.36);
      g.rotation.x = 0.06;
      g.userData.gun = p;
      this.models.pistol = g;
    }
    // shotgun
    {
      const g = new THREE.Group();
      const s = buildShotgunMesh();
      const armR = buildArm(true); armR.position.set(0.0, -0.06, 0.04); armR.rotation.x = 0.9; s.add(armR);
      const armL = buildArm(true); armL.position.set(-0.01, -0.03, 0.0); armL.rotation.set(1.1, -0.35, 0); s.userData.pump.add(armL);
      g.add(s);
      g.position.set(0.0, -0.115, -0.2);
      g.rotation.x = 0.07;
      g.userData.gun = s;
      this.models.shotgun = g;
    }
    // chaingun
    {
      const g = new THREE.Group();
      const c = buildChaingunMesh();
      const armR = buildArm(true); armR.position.set(0.0, -0.1, 0.05); armR.rotation.x = 0.9; c.add(armR);
      g.add(c);
      g.position.set(0.0, -0.125, -0.24);
      g.rotation.x = 0.05;
      g.userData.gun = c;
      this.models.chaingun = g;
    }
    for (const k in this.models) { this.models[k].visible = false; this.root.add(this.models[k]); this.models[k].userData.base = this.models[k].position.clone(); this.models[k].userData.baseRot = this.models[k].rotation.clone(); }
    this.flash = makeSprite('MUZZLE', 0xffe2a0, 0.25);
    this.flash.visible = false;
    this.root.add(this.flash);
    this.flashGlow = makeSprite('FLARE', 0xff9040, 0.6);
    this.flashGlow.visible = false;
    this.root.add(this.flashGlow);
    this.current = null;
    this.spinAngle = 0;
  }

  show(name) {
    for (const k in this.models) this.models[k].visible = k === name;
    this.current = name;
  }

  // st: { name, raise (0..1, 0 = fully lowered), bobX, bobY, fireT (time since last shot), flash (bool), firing (bool), dt, pitch }
  update(st) {
    if (st.name !== this.current) this.show(st.name);
    const m = this.models[st.name];
    if (!m) return;
    const base = m.userData.base, br = m.userData.baseRot;
    m.position.copy(base);
    m.rotation.copy(br);
    m.position.x += st.bobX;
    m.position.y += st.bobY - (1 - st.raise) * 0.35;
    m.rotation.x += st.swayPitch || 0;
    m.rotation.y += st.swayYaw || 0;
    const f = st.fireT;
    const gun = m.userData.gun;
    let flashPos = null;
    this.flash.visible = false;
    this.flashGlow.visible = false;
    if (st.name === 'fist') {
      // punch: thrust forward then return (~0.3s)
      if (f < 0.32) {
        const k = f < 0.1 ? f / 0.1 : 1 - (f - 0.1) / 0.22;
        m.position.z -= 0.17 * k; m.position.x -= 0.09 * k; m.position.y += 0.04 * k;
        m.rotation.y -= 0.3 * k;
      }
    } else if (st.name === 'pistol') {
      if (f < 0.25) {
        const k = Math.exp(-f * 22);
        m.position.z += 0.05 * k; m.rotation.x += 0.35 * k;
        gun.userData.slide.position.z = -0.1 + 0.03 * Math.exp(-f * 30);
      } else gun.userData.slide.position.z = -0.1;
      flashPos = [0, 0.016, -0.24];
    } else if (st.name === 'shotgun') {
      if (f < 1.0) {
        const k = Math.exp(-f * 12);
        m.position.z += 0.1 * k; m.rotation.x += 0.4 * k;
        // pump action between 0.32s and 0.75s
        const p = (f - 0.32) / 0.43;
        if (p > 0 && p < 1) {
          const s = Math.sin(p * Math.PI);
          gun.userData.pump.position.z = -0.3 + 0.1 * s;
          m.rotation.z += 0.25 * s; m.rotation.y -= 0.12 * s; m.position.x -= 0.03 * s; m.position.y -= 0.02 * s;
        } else gun.userData.pump.position.z = -0.3;
      } else gun.userData.pump.position.z = -0.3;
      flashPos = [0, 0.02, -0.75];
    } else if (st.name === 'chaingun') {
      if (st.firing) this.spinAngle += st.dt * 28; else this.spinAngle += st.dt * Math.max(0, 6 - (f * 10));
      gun.userData.spin.rotation.z = this.spinAngle;
      if (f < 0.1) { const k = 1 - f / 0.1; m.position.z += 0.015 * k; m.position.y += (Math.random() - 0.5) * 0.004; }
      flashPos = [0, 0, -0.65];
    }
    if (st.flash && flashPos) {
      const p = new THREE.Vector3(...flashPos);
      gun.localToWorld(p);
      this.root.worldToLocal(p);
      this.flash.position.copy(p);
      this.flashGlow.position.copy(p);
      this.flash.visible = this.flashGlow.visible = true;
      const s = (st.name === 'shotgun' ? 0.32 : 0.2) * (0.8 + Math.random() * 0.4);
      this.flash.scale.set(s, s, 1);
      this.flash.material.rotation = Math.random() * 6.28;
    }
  }
}
