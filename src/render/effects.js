// Billboard particle systems and the point light manager.
import * as THREE from 'three';

// ------------------------------------------------------------------ particles
export class Particles {
  constructor(scene, texture, { max = 600, additive = false, lit = false } = {}) {
    this.max = max;
    this.count = 0;
    this.p = []; // particle structs
    const geo = new THREE.InstancedBufferGeometry();
    const quad = new THREE.PlaneGeometry(1, 1);
    geo.index = quad.index;
    geo.setAttribute('position', quad.attributes.position);
    geo.setAttribute('uv', quad.attributes.uv);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
    this.aSize = new THREE.InstancedBufferAttribute(new Float32Array(max * 2), 2); // size, rotation
    this.aCol = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4);
    this.aPos.setUsage(THREE.DynamicDrawUsage); this.aSize.setUsage(THREE.DynamicDrawUsage); this.aCol.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('ipos', this.aPos);
    geo.setAttribute('isize', this.aSize);
    geo.setAttribute('icol', this.aCol);
    geo.instanceCount = 0;
    this.geo = geo;
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: texture }, fogColor: { value: new THREE.Color(0) }, fogDensity: { value: 0.0 }, ambient: { value: 1 } },
      vertexShader: `
        attribute vec3 ipos; attribute vec2 isize; attribute vec4 icol;
        varying vec2 vUv; varying vec4 vCol; varying float vDepth;
        void main() {
          vUv = uv; vCol = icol;
          vec4 mv = modelViewMatrix * vec4(ipos, 1.0);
          float c = cos(isize.y), s = sin(isize.y);
          vec2 o = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * isize.x;
          mv.xy += o;
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform sampler2D map; uniform vec3 fogColor; uniform float fogDensity; uniform float ambient;
        varying vec2 vUv; varying vec4 vCol; varying float vDepth;
        void main() {
          vec4 t = texture2D(map, vUv);
          float fog = 1.0 - exp(-fogDensity * fogDensity * vDepth * vDepth);
          vec3 col = t.rgb * vCol.rgb * ${lit ? 'ambient' : '1.0'};
          float a = t.a * vCol.a;
          ${additive ? 'col *= a * (1.0 - fog); gl_FragColor = vec4(col, 1.0);' : 'col = mix(col, fogColor, fog); gl_FragColor = vec4(col, a);'}
        }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = additive ? 20 : 10;
    scene.add(this.mesh);
    this.mat = mat;
  }

  // spawn: x,y,z three coords
  spawn(o) {
    let p;
    if (this.p.length < this.max) { p = {}; this.p.push(p); }
    else { // recycle oldest
      p = this.p.shift(); this.p.push(p);
    }
    p.x = o.x; p.y = o.y; p.z = o.z;
    p.vx = o.vx || 0; p.vy = o.vy || 0; p.vz = o.vz || 0;
    p.life = 0; p.max = o.life || 1;
    p.s0 = o.size || 4; p.s1 = o.size1 ?? p.s0;
    p.r = o.r ?? 1; p.g = o.g ?? 1; p.b = o.b ?? 1;
    p.a0 = o.alpha ?? 1; p.a1 = o.alpha1 ?? 0;
    p.grav = o.gravity || 0; p.drag = o.drag ?? 0;
    p.rot = o.rot ?? Math.random() * 6.28; p.vrot = o.vrot || 0;
    p.floor = o.floor ?? -1e9;
    return p;
  }

  update(dt) {
    const ps = this.p;
    let w = 0;
    const pos = this.aPos.array, siz = this.aSize.array, col = this.aCol.array;
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      p.life += dt;
      if (p.life >= p.max) continue;
      p.vy -= p.grav * dt;
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vy *= d; p.vz *= d;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < p.floor) { p.y = p.floor; p.vy = 0; p.vx *= 0.5; p.vz *= 0.5; }
      p.rot += p.vrot * dt;
      ps[w++] = p;
      const k = p.life / p.max;
      const j = w - 1;
      pos[j * 3] = p.x; pos[j * 3 + 1] = p.y; pos[j * 3 + 2] = p.z;
      siz[j * 2] = p.s0 + (p.s1 - p.s0) * k; siz[j * 2 + 1] = p.rot;
      col[j * 4] = p.r; col[j * 4 + 1] = p.g; col[j * 4 + 2] = p.b; col[j * 4 + 3] = p.a0 + (p.a1 - p.a0) * k;
    }
    ps.length = w;
    this.geo.instanceCount = w;
    this.aPos.needsUpdate = this.aSize.needsUpdate = this.aCol.needsUpdate = true;
  }

  clear() { this.p.length = 0; this.geo.instanceCount = 0; }
}

// ------------------------------------------------------------------ lights
// A fixed pool of point lights is re-assigned every frame to the static lights
// nearest to the camera (keeps the shader light count constant), plus a pool of
// short-lived dynamic lights (muzzle flashes, fireballs, explosions).
export class LightManager {
  constructor(scene, staticLights, { slots = 10, dynamicSlots = 6 } = {}) {
    this.scene = scene;
    this.statics = staticLights.map((l) => ({ ...l, color: new THREE.Color(l.color), phase: Math.random() * 100, cur: 1 }));
    this.slots = [];
    for (let i = 0; i < slots; i++) {
      const pl = new THREE.PointLight(0xffffff, 0, 400, 1.6);
      pl.userData.assigned = null;
      scene.add(pl);
      this.slots.push(pl);
    }
    this.dyn = [];
    for (let i = 0; i < dynamicSlots; i++) {
      const pl = new THREE.PointLight(0xffffff, 0, 300, 1.6);
      scene.add(pl);
      this.dyn.push({ light: pl, life: 0, max: 0, base: 0, follow: null });
    }
    this.time = 0;
  }

  static intensityFor(l) {
    // our maps describe intensity ~1 = a normal room light; convert to candela-ish for decay 1.6
    return l.intensity * Math.pow(l.distance, 1.6) * 0.055;
  }

  flash(x, y, z, color, intensity, distance, life, follow = null) {
    // pick a free or the oldest slot
    let best = this.dyn[0];
    for (const d of this.dyn) { if (d.life >= d.max) { best = d; break; } if (d.max - d.life < best.max - best.life) best = d; }
    best.light.position.set(x, y, z);
    best.light.color.set(color);
    best.light.distance = distance;
    best.base = intensity * Math.pow(distance, 1.6) * 0.055;
    best.light.intensity = best.base;
    best.life = 0; best.max = life; best.follow = follow;
    return best;
  }

  update(dt, camPos) {
    this.time += dt;
    const t = this.time;
    // flicker
    for (const l of this.statics) {
      let f = 1;
      if (l.flicker) {
        const n = Math.sin(t * 13 + l.phase) * Math.sin(t * 7.3 + l.phase * 2) + Math.sin(t * 31 + l.phase);
        f = n > 0.9 ? 0.15 : n > 0.6 ? 0.6 : 1;
      } else if (l.nukage) {
        f = 0.85 + Math.sin(t * 2.1 + l.phase) * 0.1 + Math.sin(t * 5.3 + l.phase) * 0.05;
      }
      l.cur = f;
      const dx = l.x - camPos.x, dy = l.z - camPos.y, dz = -l.y - camPos.z;
      l.score = Math.sqrt(dx * dx + dy * dy + dz * dz) - l.distance * 0.6;
    }
    const sorted = this.statics.slice().sort((a, b) => a.score - b.score).slice(0, this.slots.length);
    const keep = new Set(sorted);
    const free = [];
    for (const s of this.slots) {
      if (s.userData.assigned && keep.has(s.userData.assigned)) keep.delete(s.userData.assigned);
      else free.push(s);
    }
    for (const l of keep) {
      const s = free.pop();
      if (!s) break;
      s.userData.assigned = l;
    }
    for (const s of free) s.userData.assigned = null;
    for (const s of this.slots) {
      const l = s.userData.assigned;
      if (!l) { s.intensity = 0; continue; }
      s.position.set(l.x, l.z, -l.y);
      s.color.copy(l.color);
      s.distance = l.distance;
      s.intensity = LightManager.intensityFor(l) * l.cur;
    }
    for (const d of this.dyn) {
      if (d.life >= d.max) { d.light.intensity = 0; continue; }
      d.life += dt;
      const k = Math.max(0, 1 - d.life / d.max);
      d.light.intensity = d.base * k * k;
      if (d.follow) d.light.position.copy(d.follow);
    }
  }
}
