// Level processing: sectors, lines, spatial queries, collision, sight and traces.
// Pure logic (no three.js). Map units: x east, y north, z up.

const EPS = 1e-6;

function signedArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    a += p.x * q.y - q.x * p.y;
  }
  return a / 2;
}

export class Level {
  constructor(data) {
    this.data = data;
    this.sectors = [];
    this.byId = {};
    this.lines = [];
    this._build();
  }

  _build() {
    const d = this.data;
    // 1. sectors and contours
    for (let i = 0; i < d.sectors.length; i++) {
      const src = d.sectors[i];
      const s = {
        ...src,
        index: i,
        floor: src.floor, ceil: src.ceil,
        baseFloor: src.floor, baseCeil: src.ceil,
        lines: [], neighbors: [], contours: [],
        sky: src.ceilTex === 'SKY',
        soundTarget: null, soundTime: -1,
        moving: null,
        bbox: [Infinity, Infinity, -Infinity, -Infinity],
      };
      const mk = (poly) => poly.map((p) => ({ x: p[0], y: p[1], tex: p[2] || null }));
      const outer = mk(src.poly);
      if (signedArea(outer) < 0) this._reverseContour(outer);
      s.contours.push(outer);
      s.outer = outer;
      s.holes = [];
      for (const h of src.holes || []) {
        const hc = mk(h);
        if (signedArea(hc) > 0) this._reverseContour(hc);
        s.contours.push(hc);
        s.holes.push(hc);
      }
      for (const p of outer) {
        s.bbox[0] = Math.min(s.bbox[0], p.x); s.bbox[1] = Math.min(s.bbox[1], p.y);
        s.bbox[2] = Math.max(s.bbox[2], p.x); s.bbox[3] = Math.max(s.bbox[3], p.y);
      }
      let cx = 0, cy = 0;
      for (const p of outer) { cx += p.x; cy += p.y; }
      s.cx = cx / outer.length; s.cy = cy / outer.length;
      s.area = Math.abs(signedArea(outer)) - s.holes.reduce((a, h) => a + Math.abs(signedArea(h)), 0);
      this.sectors.push(s);
      this.byId[s.id] = s;
    }

    // 2. collect vertices
    const verts = [];
    const vkey = new Set();
    for (const s of this.sectors) for (const c of s.contours) for (const p of c) {
      const k = p.x + ',' + p.y;
      if (!vkey.has(k)) { vkey.add(k); verts.push(p); }
    }

    // 3. split edges at collinear vertices (T-junctions)
    const edges = []; // {ax,ay,bx,by,tex,sector}
    for (const s of this.sectors) {
      for (const c of s.contours) {
        for (let i = 0; i < c.length; i++) {
          const a = c[i], b = c[(i + 1) % c.length];
          const dx = b.x - a.x, dy = b.y - a.y;
          const len2 = dx * dx + dy * dy;
          const splits = [];
          for (const v of verts) {
            const cross = (v.x - a.x) * dy - (v.y - a.y) * dx;
            if (Math.abs(cross) > 1e-3) continue;
            const t = ((v.x - a.x) * dx + (v.y - a.y) * dy) / len2;
            if (t > EPS && t < 1 - EPS) splits.push(t);
          }
          splits.sort((p, q) => p - q);
          let px = a.x, py = a.y;
          for (const t of [...splits, 1]) {
            const qx = t === 1 ? b.x : Math.round(a.x + dx * t);
            const qy = t === 1 ? b.y : Math.round(a.y + dy * t);
            edges.push({ ax: px, ay: py, bx: qx, by: qy, tex: a.tex, sector: s });
            px = qx; py = qy;
          }
        }
      }
    }

    // 4. match into lines
    const map = new Map();
    for (const e of edges) map.set(`${e.ax},${e.ay}>${e.bx},${e.by}`, e);
    const used = new Set();
    for (const e of edges) {
      const k = `${e.ax},${e.ay}>${e.bx},${e.by}`;
      if (used.has(k)) continue;
      used.add(k);
      const rk = `${e.bx},${e.by}>${e.ax},${e.ay}`;
      const r = map.get(rk);
      let back = null, backTex = null;
      if (r && r.sector !== e.sector) { back = r.sector; backTex = r.tex; used.add(rk); }
      const dx = e.bx - e.ax, dy = e.by - e.ay;
      const len = Math.hypot(dx, dy);
      const line = {
        id: this.lines.length,
        ax: e.ax, ay: e.ay, bx: e.bx, by: e.by, dx, dy, len,
        // left normal = into front sector
        nx: -dy / len, ny: dx / len,
        front: e.sector, back,
        tex: e.tex, backTex,
        seen: false,
      };
      this.lines.push(line);
      e.sector.lines.push(line);
      if (back) {
        back.lines.push(line);
        if (!e.sector.neighbors.includes(back)) e.sector.neighbors.push(back);
        if (!back.neighbors.includes(e.sector)) back.neighbors.push(e.sector);
      }
    }

    // 5. bounds and blockmap
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (const l of this.lines) {
      minx = Math.min(minx, l.ax, l.bx); miny = Math.min(miny, l.ay, l.by);
      maxx = Math.max(maxx, l.ax, l.bx); maxy = Math.max(maxy, l.ay, l.by);
    }
    this.bounds = { minx, miny, maxx, maxy };
    this.cell = 128;
    this.bx0 = Math.floor(minx / this.cell) - 1;
    this.by0 = Math.floor(miny / this.cell) - 1;
    this.bw = Math.ceil(maxx / this.cell) - this.bx0 + 2;
    this.bh = Math.ceil(maxy / this.cell) - this.by0 + 2;
    this.blockLines = Array.from({ length: this.bw * this.bh }, () => []);
    this.blockSectors = Array.from({ length: this.bw * this.bh }, () => []);
    for (const l of this.lines) {
      const x0 = Math.floor((Math.min(l.ax, l.bx) - 1) / this.cell) - this.bx0;
      const x1 = Math.floor((Math.max(l.ax, l.bx) + 1) / this.cell) - this.bx0;
      const y0 = Math.floor((Math.min(l.ay, l.by) - 1) / this.cell) - this.by0;
      const y1 = Math.floor((Math.max(l.ay, l.by) + 1) / this.cell) - this.by0;
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.blockLines[y * this.bw + x].push(l);
    }
    for (const s of this.sectors) {
      const x0 = Math.floor(s.bbox[0] / this.cell) - this.bx0;
      const x1 = Math.floor(s.bbox[2] / this.cell) - this.bx0;
      const y0 = Math.floor(s.bbox[1] / this.cell) - this.by0;
      const y1 = Math.floor(s.bbox[3] / this.cell) - this.by0;
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.blockSectors[y * this.bw + x].push(s);
    }
    this._lineStamp = new Uint32Array(this.lines.length);
    this._stamp = 1;

    // door / lift targets
    for (const s of this.sectors) {
      if (s.door) {
        let low = Infinity;
        for (const n of s.neighbors) low = Math.min(low, n.ceil);
        s.doorTop = low - 4;
      }
      if (s.lift) {
        let low = s.floor;
        for (const n of s.neighbors) low = Math.min(low, n.floor);
        s.liftLow = low;
        s.liftHigh = s.floor;
      }
    }
  }

  _reverseContour(c) {
    // reverse vertex order but keep each edge's texture with the same edge
    const n = c.length;
    const tex = c.map((p) => p.tex);
    c.reverse();
    // edge i (c[i] -> c[i+1]) after reverse was edge (n-2-i) before (from c'[n-2-i] to c'[n-1-i])
    for (let i = 0; i < n; i++) {
      const orig = (2 * n - 2 - i) % n;
      c[i].tex = tex[orig];
    }
  }

  // ------------------------------------------------------------- queries
  linesNear(x0, y0, x1, y1) {
    const stamp = ++this._stamp;
    const out = [];
    const cx0 = Math.max(0, Math.floor(x0 / this.cell) - this.bx0);
    const cx1 = Math.min(this.bw - 1, Math.floor(x1 / this.cell) - this.bx0);
    const cy0 = Math.max(0, Math.floor(y0 / this.cell) - this.by0);
    const cy1 = Math.min(this.bh - 1, Math.floor(y1 / this.cell) - this.by0);
    for (let y = cy0; y <= cy1; y++) for (let x = cx0; x <= cx1; x++) {
      for (const l of this.blockLines[y * this.bw + x]) {
        if (this._lineStamp[l.id] === stamp) continue;
        this._lineStamp[l.id] = stamp;
        out.push(l);
      }
    }
    return out;
  }

  pointInSector(s, x, y) {
    if (x < s.bbox[0] || x > s.bbox[2] || y < s.bbox[1] || y > s.bbox[3]) return false;
    let inside = false;
    for (const c of s.contours) {
      for (let i = 0, j = c.length - 1; i < c.length; j = i++) {
        const a = c[i], b = c[j];
        if ((a.y > y) !== (b.y > y) && x < ((b.x - a.x) * (y - a.y)) / (b.y - a.y) + a.x) inside = !inside;
      }
    }
    return inside;
  }

  findSector(x, y, hint) {
    if (hint && this.pointInSector(hint, x, y)) return hint;
    const cx = Math.floor(x / this.cell) - this.bx0, cy = Math.floor(y / this.cell) - this.by0;
    if (cx >= 0 && cy >= 0 && cx < this.bw && cy < this.bh) {
      // prefer the smallest containing sector (inner sectors overlap the outer bbox)
      let best = null;
      for (const s of this.blockSectors[cy * this.bw + cx]) {
        if (this.pointInSector(s, x, y) && (!best || s.area < best.area)) best = s;
      }
      if (best) return best;
    }
    return hint || null;
  }

  // floor/ceiling heights touched by a circle (Doom's floorz/ceilingz/dropoffz)
  heightsAt(x, y, r, hint) {
    const s = this.findSector(x, y, hint);
    let floor = s ? s.floor : 0, ceil = s ? s.ceil : 0, drop = floor;
    for (const l of this.linesNear(x - r, y - r, x + r, y + r)) {
      if (!l.back) continue;
      if (distToSeg2(x, y, l) >= r * r) continue;
      floor = Math.max(floor, l.front.floor, l.back.floor);
      ceil = Math.min(ceil, l.front.ceil, l.back.ceil);
      drop = Math.min(drop, l.front.floor, l.back.floor);
    }
    return { sector: s, floor, ceil, drop };
  }

  // Does line l block an actor with feet at z, height h? (monster: no big dropoffs)
  lineBlocks(l, z, h, isMonster, stepH = 24) {
    if (!l.back) return true;
    const f = l.front, b = l.back;
    const openBottom = Math.max(f.floor, b.floor);
    const openTop = Math.min(f.ceil, b.ceil);
    if (openTop - openBottom < h) return true;
    if (openBottom - z > stepH) return true;
    if (openTop - z < h) return true;
    if (isMonster) {
      if (Math.abs(f.floor - b.floor) > 24) return true;
      if (!!f.damage !== !!b.damage) return true;
    }
    return false;
  }

  // Slide-move a circle actor. Returns {x, y, blockedLines}
  moveCircle(actor, nx, ny, opts = {}) {
    const r = actor.radius;
    const blocked = [];
    for (let iter = 0; iter < 4; iter++) {
      let pushed = false;
      for (const l of this.linesNear(nx - r - 2, ny - r - 2, nx + r + 2, ny + r + 2)) {
        if (opts.noclip) break;
        if (!this.lineBlocks(l, actor.z, actor.height, actor.isMonster)) continue;
        // closest point on segment
        const t = clamp01(((nx - l.ax) * l.dx + (ny - l.ay) * l.dy) / (l.len * l.len));
        if (t > 0 && t < 1) {
          const s0 = (actor.x - l.ax) * l.nx + (actor.y - l.ay) * l.ny >= 0 ? 1 : -1;
          const sd = ((nx - l.ax) * l.nx + (ny - l.ay) * l.ny) * s0;
          if (sd >= r) continue;
          const push = r - sd + 0.01;
          nx += l.nx * s0 * push; ny += l.ny * s0 * push;
        } else {
          const px = l.ax + l.dx * t, py = l.ay + l.dy * t;
          let ddx = nx - px, ddy = ny - py;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 >= r * r) continue;
          const d = Math.sqrt(d2);
          if (d < 1e-4) continue;
          const push = r - d + 0.01;
          nx += (ddx / d) * push; ny += (ddy / d) * push;
        }
        pushed = true;
        if (!blocked.includes(l)) blocked.push(l);
      }
      if (!pushed) break;
    }
    return { x: nx, y: ny, blocked };
  }

  // segment-segment crossings with lines, sorted by t along (x1,y1)->(x2,y2)
  crossings(x1, y1, x2, y2) {
    const out = [];
    const dx = x2 - x1, dy = y2 - y1;
    for (const l of this.linesNear(Math.min(x1, x2), Math.min(y1, y2), Math.max(x1, x2), Math.max(y1, y2))) {
      const den = dx * l.dy - dy * l.dx;
      if (Math.abs(den) < 1e-9) continue;
      const ex = l.ax - x1, ey = l.ay - y1;
      const t = (ex * l.dy - ey * l.dx) / den;
      const u = (ex * dy - ey * dx) / den;
      if (t < 0 || t > 1 || u < 0 || u > 1) continue;
      out.push({ t, line: l });
    }
    out.sort((a, b) => a.t - b.t);
    return out;
  }

  // Doom-style sight check between eye z1 and target spanning [z2bottom, z2top]
  checkSight(x1, y1, z1, x2, y2, z2b, z2t) {
    const dist = Math.hypot(x2 - x1, y2 - y1);
    if (dist < 1) return true;
    let top = (z2t - z1) / dist, bottom = (z2b - z1) / dist;
    for (const c of this.crossings(x1, y1, x2, y2)) {
      const l = c.line;
      if (!l.back) return false;
      const f = l.front, b = l.back;
      const openTop = Math.min(f.ceil, b.ceil), openBottom = Math.max(f.floor, b.floor);
      if (openBottom >= openTop) return false;
      const d = Math.max(c.t * dist, 0.01);
      if (f.floor !== b.floor) bottom = Math.max(bottom, (openBottom - z1) / d);
      if (f.ceil !== b.ceil) top = Math.min(top, (openTop - z1) / d);
      if (top <= bottom) return false;
    }
    return true;
  }

  // Hitscan through world geometry only. Returns {dist, x, y, z, kind:'wall'|'floor'|'ceil'|'sky'|'none', line, nx, ny, nz}
  traceWorld(x, y, z, ang, slope, range, startSector) {
    const cos = Math.cos(ang), sin = Math.sin(ang);
    const x2 = x + cos * range, y2 = y + sin * range;
    let cur = startSector || this.findSector(x, y);
    const flatHit = (sec, maxD) => {
      if (!sec) return null;
      if (slope < 0) {
        const d = (sec.floor - z) / slope;
        if (d >= 0 && d <= maxD) return { dist: d, kind: 'floor', sector: sec, nz: 1 };
      } else if (slope > 0) {
        const d = (sec.ceil - z) / slope;
        if (d >= 0 && d <= maxD) return { dist: d, kind: sec.sky ? 'sky' : 'ceil', sector: sec, nz: -1 };
      }
      return null;
    };
    const fin = (h) => {
      h.x = x + cos * h.dist; h.y = y + sin * h.dist; h.z = z + slope * h.dist;
      if (h.nx === undefined) { h.nx = 0; h.ny = 0; }
      if (h.nz === undefined) h.nz = 0;
      return h;
    };
    for (const c of this.crossings(x, y, x2, y2)) {
      const d = c.t * range;
      const fh = flatHit(cur, d);
      if (fh) return fin(fh);
      const l = c.line;
      const hz = z + slope * d;
      const side = (x - l.ax) * l.nx + (y - l.ay) * l.ny >= 0 ? 1 : -1;
      const nx = l.nx * side, ny = l.ny * side;
      if (!l.back) return fin({ dist: d - 0.5, kind: 'wall', line: l, nx, ny });
      const other = l.front === cur ? l.back : l.front;
      const f = l.front, b = l.back;
      const openTop = Math.min(f.ceil, b.ceil), openBottom = Math.max(f.floor, b.floor);
      if (hz < openBottom) return fin({ dist: d - 0.5, kind: 'wall', line: l, nx, ny });
      if (hz > openTop) {
        if (f.sky && b.sky) return fin({ dist: d, kind: 'sky', line: l });
        // shooting the upper wall of a sky sector seen from outside
        if (other.sky && hz > other.ceil && cur.ceil >= other.ceil) return fin({ dist: d, kind: 'sky', line: l });
        return fin({ dist: d - 0.5, kind: 'wall', line: l, nx, ny });
      }
      cur = other;
    }
    const fh = flatHit(cur, range);
    if (fh) return fin(fh);
    return fin({ dist: range, kind: 'none' });
  }

  // flood sound through open lines from a sector
  noiseAlert(sector, source, time) {
    if (!sector) return;
    const stack = [sector];
    const seen = new Set([sector]);
    while (stack.length) {
      const s = stack.pop();
      s.soundTarget = source; s.soundTime = time;
      for (const l of s.lines) {
        if (!l.back) continue;
        const o = l.front === s ? l.back : l.front;
        if (seen.has(o)) continue;
        if (Math.min(l.front.ceil, l.back.ceil) - Math.max(l.front.floor, l.back.floor) <= 0) continue;
        seen.add(o);
        stack.push(o);
      }
    }
  }
}

export function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }

export function distToSeg2(x, y, l) {
  const t = clamp01(((x - l.ax) * l.dx + (y - l.ay) * l.dy) / (l.len * l.len));
  const px = l.ax + l.dx * t - x, py = l.ay + l.dy * t - y;
  return px * px + py * py;
}
