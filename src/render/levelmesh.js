// Builds three.js meshes for the level: floors, ceilings, walls (static ones merged
// per material, moving ones as small updatable meshes), decals and the sky.
import * as THREE from 'three';

export function lightFactor(light) {
  const l = Math.max(0, Math.min(255, light)) / 255;
  return 0.06 + Math.pow(l, 1.7) * 1.05;
}

class Acc {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.col = []; this.idx = []; }
  get count() { return this.pos.length / 3; }
  toGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}

export class LevelRenderer {
  constructor(level, tex, scene) {
    this.level = level;
    this.tex = tex;
    this.scene = scene;
    this.materials = {};
    this.group = new THREE.Group();
    this.group.name = 'level';
    scene.add(this.group);
    this.dynamicWalls = [];   // {line, kind, mesh}
    this.dynamicFlats = [];   // {sector, mesh, which}
    this.lineMeshes = new Map(); // special lines (switch) -> mesh
    this.collidables = [];
    this.staticLights = [];
    this.build();
  }

  mat(name) {
    if (this.materials[name]) return this.materials[name];
    const t = this.tex[name] || this.tex.TECH;
    const m = new THREE.MeshStandardMaterial({
      map: t.map,
      normalMap: t.normalMap || null,
      roughnessMap: t.roughnessMap || null,
      emissiveMap: t.emissiveMap || null,
      emissive: t.emissiveMap ? new THREE.Color(t.emissive ?? 0xffffff) : new THREE.Color(0),
      emissiveIntensity: t.emissiveIntensity ?? 1,
      roughness: t.roughness ?? 0.8,
      metalness: t.metalness ?? 0.1,
      vertexColors: true,
    });
    m.shadowSide = THREE.DoubleSide;
    if (t.normalMap) m.normalScale = new THREE.Vector2(1, 1);
    m.name = name;
    this.materials[name] = m;
    return m;
  }

  ws(name) { return (this.tex[name] && this.tex[name].worldSize) || [64, 64]; }

  isDynamicSector(s) { return !!(s.door || s.lift); }

  // ---------------------------------------------------------------- flats
  emitFlat(acc, sector, which, height) {
    const outer = sector.outer.map((p) => new THREE.Vector2(p.x, p.y));
    const holes = sector.holes.map((h) => h.map((p) => new THREE.Vector2(p.x, p.y)));
    const tris = THREE.ShapeUtils.triangulateShape(outer, holes);
    const all = outer.concat(...holes);
    const texName = which === 'floor' ? sector.floorTex : sector.ceilTex;
    const [w, h] = this.ws(texName);
    const base = acc.count;
    const lf = lightFactor(sector.light) * (which === 'ceil' ? 0.92 : 1);
    for (const p of all) {
      acc.pos.push(p.x, height, -p.y);
      acc.nor.push(0, which === 'floor' ? 1 : -1, 0);
      acc.uv.push(p.x / w, p.y / h);
      acc.col.push(lf, lf, lf);
    }
    for (const t of tris) {
      // a CCW triangle in map (x,y) faces +Y in three space (x, z, -y)
      const p0 = all[t[0]], p1 = all[t[1]], p2 = all[t[2]];
      const ccw = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x) > 0;
      if (ccw === (which === 'floor')) acc.idx.push(base + t[0], base + t[1], base + t[2]);
      else acc.idx.push(base + t[0], base + t[2], base + t[1]);
    }
  }

  // ---------------------------------------------------------------- walls
  // Returns list of visible parts for a line given current sector heights.
  wallParts(l) {
    const parts = [];
    const f = l.front, b = l.back;
    if (!b) {
      if (f.ceil > f.floor) parts.push({ kind: 'mid', z0: f.floor, z1: f.ceil, side: 1, sector: f, tex: l.tex || f.wall, peg: null });
      return parts;
    }
    // lower part
    if (f.floor !== b.floor) {
      const hi = f.floor > b.floor ? f : b, lo = hi === f ? b : f;
      const tex = (hi === f ? l.tex : l.backTex) || hi.lower || hi.wall;
      parts.push({ kind: 'lower', z0: lo.floor, z1: hi.floor, side: lo === f ? 1 : -1, sector: lo, tex, peg: hi.lift ? { top: hi.floor } : null });
    }
    // upper part
    if (f.ceil !== b.ceil && !(f.sky && b.sky)) {
      const lo = f.ceil < b.ceil ? f : b, hi = lo === f ? b : f;
      const tex = (lo === f ? l.tex : l.backTex) || lo.upper || lo.wall;
      parts.push({ kind: 'upper', z0: lo.ceil, z1: hi.ceil, side: hi === f ? 1 : -1, sector: hi, tex, peg: lo.door ? { bottom: lo.ceil } : null });
    }
    return parts;
  }

  emitWall(acc, l, part) {
    const { z0, z1, side } = part;
    if (z1 - z0 < 0.01) return;
    const [W, H] = this.ws(part.tex);
    const nx = l.nx * side, ny = l.ny * side;
    // viewer-right direction for this face
    const rx = -ny, ry = nx;
    const lf = lightFactor(part.sector.light);
    // vertical bands for fake ambient occlusion at the floor/ceiling seams
    const zs = [z0];
    const zb = z0 + 36, zt = z1 - 20;
    if (part.kind !== 'upper' && zb < z1 - 1) zs.push(zb);
    if (part.kind !== 'lower' && zt > zs[zs.length - 1] + 1) zs.push(zt);
    zs.push(z1);
    const ao = (z) => {
      let a = 1;
      if (part.kind !== 'upper') a *= 0.58 + 0.42 * Math.min(1, (z - z0) / 36);
      if (part.kind !== 'lower') a *= 0.8 + 0.2 * Math.min(1, (z1 - z) / 20);
      return a;
    };
    const vcoord = (z) => {
      if (part.peg && part.peg.bottom !== undefined) return (z - part.peg.bottom) / H;
      if (part.peg && part.peg.top !== undefined) return (z - part.peg.top) / H;
      return z / H;
    };
    const ua = (l.ax * rx + l.ay * ry) / W, ub = (l.bx * rx + l.by * ry) / W;
    const base = acc.count;
    for (const z of zs) {
      const c = lf * ao(z);
      acc.pos.push(l.ax, z, -l.ay, l.bx, z, -l.by);
      acc.nor.push(nx, 0, -ny, nx, 0, -ny);
      const v = vcoord(z);
      acc.uv.push(ua, v, ub, v);
      acc.col.push(c, c, c, c, c, c);
    }
    // winding: check against desired normal
    const ax = l.ax, az = -l.ay, bx = l.bx, bz = -l.by;
    // triangle (a0, b0, b1): e1 = b0-a0 = (bx-ax,0,bz-az), e2 = b1-a0 = (bx-ax, dz, bz-az)
    // cross(e1,e2) = (-(bz-az)*dz, 0, (bx-ax)*dz)  (dz>0)
    const cx = -(bz - az), cz = bx - ax;
    const ccw = cx * nx + cz * -ny > 0;
    for (let i = 0; i < zs.length - 1; i++) {
      const a0 = base + i * 2, b0 = a0 + 1, a1 = a0 + 2, b1 = a0 + 3;
      if (ccw) acc.idx.push(a0, b0, b1, a0, b1, a1);
      else acc.idx.push(a0, b1, b0, a0, a1, b1);
    }
  }

  build() {
    const L = this.level;
    const accs = {};
    const accFor = (name) => (accs[name] ||= new Acc());

    // flats
    for (const s of L.sectors) {
      if (this.isDynamicSector(s)) {
        for (const which of ['floor', 'ceil']) {
          if (which === 'ceil' && s.sky) continue;
          const acc = new Acc();
          this.emitFlat(acc, s, which, 0);
          const mesh = new THREE.Mesh(acc.toGeometry(), this.mat(which === 'floor' ? s.floorTex : s.ceilTex));
          mesh.castShadow = mesh.receiveShadow = true;
          mesh.position.y = which === 'floor' ? s.floor : s.ceil;
          this.group.add(mesh);
          this.dynamicFlats.push({ sector: s, mesh, which });
          this.collidables.push(mesh);
        }
      } else {
        this.emitFlat(accFor(s.floorTex), s, 'floor', s.floor);
        if (!s.sky) this.emitFlat(accFor(s.ceilTex), s, 'ceil', s.ceil);
      }
    }

    // walls
    for (const l of L.lines) {
      const dynamic = (l.back && (this.isDynamicSector(l.front) || this.isDynamicSector(l.back))) || l.tex === 'SWITCH' ||
        (!l.back && this.isDynamicSector(l.front));
      if (!dynamic) {
        for (const p of this.wallParts(l)) this.emitWall(accFor(p.tex), l, p);
        continue;
      }
      if (!l.back || l.tex === 'SWITCH') {
        // one-sided wall of a moving sector (door track) or the exit switch
        const mesh = this.makeDynMesh();
        this.dynamicWalls.push({ line: l, kind: 'mid', mesh });
        if (l.tex === 'SWITCH') this.lineMeshes.set(l, mesh);
      } else {
        this.dynamicWalls.push({ line: l, kind: 'lower', mesh: this.makeDynMesh() });
        this.dynamicWalls.push({ line: l, kind: 'upper', mesh: this.makeDynMesh() });
      }
    }
    for (const dw of this.dynamicWalls) this.updateDynWall(dw);

    for (const name in accs) {
      const mesh = new THREE.Mesh(accs[name].toGeometry(), this.mat(name));
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.name = 'lvl_' + name;
      this.group.add(mesh);
      this.collidables.push(mesh);
    }

    // decals (exit signs)
    for (const d of L.data.decals || []) {
      const t = this.tex[d.tex];
      const m = new THREE.MeshStandardMaterial({
        map: t.map, emissiveMap: t.emissiveMap || t.map, emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 1.6, roughness: 0.4, metalness: 0.2, transparent: !!t.transparent,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
      });
      const g = new THREE.PlaneGeometry(d.w, d.h);
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(d.x + d.nx * 0.6, d.z, -(d.y + d.ny * 0.6));
      mesh.lookAt(mesh.position.x + d.nx, d.z, mesh.position.z - d.ny);
      this.group.add(mesh);
      if (d.glow) this.staticLights.push({ x: d.x + d.nx * 24, y: d.y + d.ny * 24, z: d.z, color: d.glow, intensity: 0.8, distance: 220 });
    }

    // lights from sectors
    for (const s of L.sectors) {
      if (s.lamp) {
        this.staticLights.push({ x: s.cx, y: s.cy, z: s.ceil - 10, color: s.lamp, intensity: 1.5, distance: Math.max(360, Math.sqrt(s.area) * 3.2) });
      }
      if (s.damage && s.floorTex === 'NUKAGE') {
        const size = Math.sqrt(s.area);
        this.staticLights.push({ x: s.cx, y: s.cy, z: s.floor + 28, color: 0x5cff3a, intensity: 1.1, distance: Math.max(240, size * 1.6), nukage: true });
      }
    }
    for (const li of L.data.lights || []) this.staticLights.push({ ...li });
  }

  makeDynMesh() {
    const g = new THREE.BufferGeometry();
    const n = 8; // up to 4 bands * 2 verts
    g.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(n * 2), 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3));
    g.setIndex(new THREE.Uint16BufferAttribute(new Uint16Array(18), 1));
    const mesh = new THREE.Mesh(g, this.mat('TECH'));
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
    this.collidables.push(mesh);
    return mesh;
  }

  updateDynWall(dw) {
    const parts = this.wallParts(dw.line).filter((p) => p.kind === dw.kind);
    const mesh = dw.mesh;
    if (!parts.length || parts[0].z1 - parts[0].z0 < 0.01) { mesh.visible = false; return; }
    const p = parts[0];
    if (dw.override) p.tex = dw.override;
    const acc = new Acc();
    this.emitWall(acc, dw.line, p);
    const g = mesh.geometry;
    const pos = g.attributes.position.array, nor = g.attributes.normal.array, uv = g.attributes.uv.array, col = g.attributes.color.array;
    pos.fill(0); nor.fill(0); uv.fill(0); col.fill(0);
    pos.set(acc.pos); nor.set(acc.nor); uv.set(acc.uv); col.set(acc.col);
    const idx = g.index.array; idx.fill(0); idx.set(acc.idx);
    g.setDrawRange(0, acc.idx.length);
    g.attributes.position.needsUpdate = g.attributes.normal.needsUpdate = g.attributes.uv.needsUpdate = g.attributes.color.needsUpdate = true;
    g.index.needsUpdate = true;
    g.computeBoundingSphere();
    mesh.material = this.mat(p.tex);
    mesh.visible = true;
  }

  setLineTexture(line, texName) {
    for (const dw of this.dynamicWalls) if (dw.line === line) { dw.override = texName; this.updateDynWall(dw); }
  }

  // call after sector heights changed
  sectorMoved(sector) {
    for (const df of this.dynamicFlats) if (df.sector === sector) df.mesh.position.y = df.which === 'floor' ? sector.floor : sector.ceil;
    for (const dw of this.dynamicWalls) if (dw.line.front === sector || dw.line.back === sector) this.updateDynWall(dw);
  }
}

// ------------------------------------------------------------------ sky dome
export function makeSky(tex) {
  const t = tex.SKY.map;
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.generateMipmaps = false;
  t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: t }, time: { value: 0 } },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,
    fragmentShader: `
      uniform sampler2D map;
      uniform float time;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float u = atan(d.x, -d.z) / 6.2831853 + 0.5;
        float el = asin(clamp(d.y, -1.0, 1.0));
        float v = clamp((el + 0.10) / 1.05, 0.002, 0.998);
        vec3 c = texture2D(map, vec2(u * 2.0 + time * 0.0015, v)).rgb;
        // fade into the darkest top colour near zenith
        vec3 top = texture2D(map, vec2(u * 2.0, 0.995)).rgb;
        c = mix(c, top, smoothstep(0.85, 1.25, el));
        gl_FragColor = vec4(c * 1.1, 1.0);
      }`,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: true,
    fog: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(100, 48, 24), mat);
  mesh.renderOrder = -1000;
  mesh.frustumCulled = false;
  mesh.name = 'sky';
  return mesh;
}
