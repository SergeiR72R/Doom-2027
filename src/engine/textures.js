// Procedural texture generator for the techbase level.
// Everything here is generated from code (seeded noise + simple shape rasterising);
// no external image assets are used.
//
// export createTextures(renderer) -> { textures, update }
//
// Conventions inside this file:
//  * Arrays are row-major with y = 0 at the TOP of the image (canvas convention).
//    CanvasTexture uses flipY = true, so the top of the canvas maps to v = 1.
//  * H  = height field (arbitrary units, ~1 = one panel step), used for normal map + AO.
//  * R,G,B = albedo in display (sRGB) space, 0..1.   Ro = roughness 0..1.
//  * ER,EG,EB = emissive colour (optional).
//  * Every repeating texture uses periodic noise and wrap-around sampling so it tiles.

import * as THREE from 'three';

const TAU = Math.PI * 2;

// ---------------------------------------------------------------- PRNG / math
function rng(seed) {
  let a = (seed * 2654435761) >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash(i) { // integer -> [0,1)
  let x = Math.imul(i ^ 0x9E3779B9, 0x85EBCA6B);
  x ^= x >>> 13; x = Math.imul(x, 0xC2B2AE35); x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
function sstep(a, b, v) { v = (v - a) / (b - a); v = v < 0 ? 0 : v > 1 ? 1 : v; return v * v * (3 - 2 * v); }

// ---------------------------------------------------------------- noise
// Periodic value noise: cx x cy lattice cells across the whole image, accumulated into `out`.
function addNoise(out, w, h, cx, cy, seed, amp) {
  cx = Math.max(1, cx | 0); cy = Math.max(1, cy | 0);
  const r = rng(seed), g = new Float32Array(cx * cy);
  for (let i = 0; i < g.length; i++) g[i] = r();
  const ox = (r() * w) | 0, oy = (r() * h) | 0;
  const X0 = new Int32Array(w), X1 = new Int32Array(w), XT = new Float32Array(w);
  for (let x = 0; x < w; x++) {
    const f = ((x + ox) % w) * cx / w, i = Math.floor(f), t = f - i;
    X0[x] = i % cx; X1[x] = (i + 1) % cx; XT[x] = t * t * (3 - 2 * t);
  }
  let o = 0;
  for (let y = 0; y < h; y++) {
    const f = ((y + oy) % h) * cy / h, i = Math.floor(f);
    let ty = f - i; ty = ty * ty * (3 - 2 * ty);
    const r0 = (i % cy) * cx, r1 = ((i + 1) % cy) * cx;
    for (let x = 0; x < w; x++, o++) {
      const x0 = X0[x], x1 = X1[x], tx = XT[x];
      const a = g[r0 + x0], b = g[r0 + x1], c = g[r1 + x0], d = g[r1 + x1];
      const top = a + (b - a) * tx, bot = c + (d - c) * tx;
      out[o] += amp * (top + (bot - top) * ty);
    }
  }
}
function noise(w, h, cx, cy, seed) { const o = new Float32Array(w * h); addNoise(o, w, h, cx, cy, seed, 1); return o; }
// fbm normalised to 0..1 (min/max stretch)
function fbm(w, h, cx, cy, oct, seed, gain = 0.5) {
  const o = new Float32Array(w * h);
  let amp = 1;
  for (let k = 0; k < oct; k++) {
    const ccx = cx << k, ccy = cy << k;
    if (ccx > w || ccy > h) break;
    addNoise(o, w, h, ccx, ccy, seed + k * 131, amp);
    amp *= gain;
  }
  return norm(o);
}
function ridged(w, h, cx, cy, oct, seed, gain = 0.5) {
  const o = new Float32Array(w * h), tmp = new Float32Array(w * h);
  let amp = 1;
  for (let k = 0; k < oct; k++) {
    const ccx = cx << k, ccy = cy << k;
    if (ccx > w || ccy > h) break;
    tmp.fill(0); addNoise(tmp, w, h, ccx, ccy, seed + k * 71, 1);
    for (let i = 0; i < o.length; i++) { const v = 1 - Math.abs(tmp[i] * 2 - 1); o[i] += amp * v * v; }
    amp *= gain;
  }
  return norm(o);
}
function norm(a) {
  let mn = Infinity, mx = -Infinity;
  for (let i = 0; i < a.length; i++) { const v = a[i]; if (v < mn) mn = v; if (v > mx) mx = v; }
  const s = mx > mn ? 1 / (mx - mn) : 0;
  for (let i = 0; i < a.length; i++) a[i] = (a[i] - mn) * s;
  return a;
}
// 1D periodic fbm (n samples), linear interpolation for sharp/jagged results
function noise1(n, cells, oct, seed, gain = 0.5, ridge = false) {
  const o = new Float32Array(n);
  let amp = 1;
  for (let k = 0; k < oct; k++) {
    const c = cells << k; if (c > n) break;
    const r = rng(seed + k * 17), g = new Float32Array(c);
    for (let i = 0; i < c; i++) g[i] = r();
    for (let x = 0; x < n; x++) {
      const f = x * c / n, i = Math.floor(f); let t = f - i;
      if (k < 2) t = t * t * (3 - 2 * t);
      let v = g[i % c] + (g[(i + 1) % c] - g[i % c]) * t;
      if (ridge) { v = 1 - Math.abs(v * 2 - 1); }
      o[x] += v * amp;
    }
    amp *= gain;
  }
  return norm(o);
}
// Periodic Worley / cellular noise. Returns F1, F2 (in cell units) and nearest cell id.
function worley(w, h, cx, cy, seed, jitter = 1, warpX = null, warpY = null) {
  const r = rng(seed), nc = cx * cy, px = new Float32Array(nc), py = new Float32Array(nc);
  for (let i = 0; i < nc; i++) { px[i] = 0.5 + (r() - 0.5) * jitter; py[i] = 0.5 + (r() - 0.5) * jitter; }
  const n = w * h, F1 = new Float32Array(n), F2 = new Float32Array(n), ID = new Int32Array(n);
  const DX = new Float32Array(n), DY = new Float32Array(n);
  const sx = cx / w, sy = cy / h;
  let o = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++, o++) {
      const fy = (y + 0.5 + (warpY ? warpY[o] : 0)) * sy, iy = Math.floor(fy);
      const fx = (x + 0.5 + (warpX ? warpX[o] : 0)) * sx, ix = Math.floor(fx);
      let d1 = 9, d2 = 9, id = 0, vx = 0, vy = 0;
      for (let dy = -1; dy <= 1; dy++) {
        const cyy = iy + dy, wy = ((cyy % cy) + cy) % cy;
        for (let dx = -1; dx <= 1; dx++) {
          const cxx = ix + dx, wx = ((cxx % cx) + cx) % cx, c = wy * cx + wx;
          const ddx = cxx + px[c] - fx, ddy = cyy + py[c] - fy, d = ddx * ddx + ddy * ddy;
          if (d < d1) { d2 = d1; d1 = d; id = c; vx = -ddx; vy = -ddy; } else if (d < d2) d2 = d;
        }
      }
      F1[o] = Math.sqrt(d1); F2[o] = Math.sqrt(d2); ID[o] = id; DX[o] = vx; DY[o] = vy;
    }
  }
  return { F1, F2, ID, DX, DY };
}
// bilinear 2x upsample with wrap (for soft, low-frequency fields)
function up2(src, w, h) {
  const W = w * 2, H = h * 2, o = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    const fy = (y - 0.5) / 2, y0 = Math.floor(fy), ty = fy - y0;
    const r0 = ((y0 + h) % h) * w, r1 = ((y0 + 1) % h) * w;
    for (let x = 0; x < W; x++) {
      const fx = (x - 0.5) / 2, x0 = Math.floor(fx), tx = fx - x0;
      const a = (x0 + w) % w, b = (x0 + 1) % w;
      const top = src[r0 + a] + (src[r0 + b] - src[r0 + a]) * tx, bot = src[r1 + a] + (src[r1 + b] - src[r1 + a]) * tx;
      o[y * W + x] = top + (bot - top) * ty;
    }
  }
  return o;
}
// separable wrap-around box blur (passes ~ gaussian)
function blur(src, w, h, r, passes = 2) {
  const a = Float32Array.from(src), b = new Float32Array(w * h), inv = 1 / (2 * r + 1);
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < h; y++) {
      const row = y * w; let s = 0;
      for (let k = -r; k <= r; k++) s += a[row + ((k % w) + w) % w];
      for (let x = 0; x < w; x++) {
        b[row + x] = s * inv;
        s += a[row + (x + r + 1) % w] - a[row + (((x - r) % w) + w) % w];
      }
    }
    for (let x = 0; x < w; x++) {
      let s = 0;
      for (let k = -r; k <= r; k++) s += b[(((k % h) + h) % h) * w + x];
      for (let y = 0; y < h; y++) {
        a[y * w + x] = s * inv;
        s += b[((y + r + 1) % h) * w + x] - b[((((y - r) % h) + h) % h) * w + x];
      }
    }
  }
  return a;
}

// ---------------------------------------------------------------- image buffer + shape helpers
class Img {
  constructor(w, h) {
    this.w = w; this.h = h; const n = this.n = w * h;
    this.H = new Float32Array(n);
    this.R = new Float32Array(n); this.G = new Float32Array(n); this.B = new Float32Array(n);
    this.Ro = new Float32Array(n).fill(0.6);
    this.ER = null; this.EG = null; this.EB = null;
  }
  emis() {
    if (!this.ER) { const n = this.n; this.ER = new Float32Array(n); this.EG = new Float32Array(n); this.EB = new Float32Array(n); }
    return this;
  }
  // iterate rect [x0,x1) x [y0,y1) with wrap; fn(index, distToEdge, lx, ly)
  rect(x0, y0, x1, y1, fn) {
    const w = this.w, h = this.h;
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    // a rect spanning the whole tile along an axis has no edge on that axis (keeps tiling seamless)
    const fullX = x1 - x0 >= w, fullY = y1 - y0 >= h, BIG = 1e6;
    for (let y = y0; y < y1; y++) {
      const yy = ((y % h) + h) % h, dy = fullY ? BIG : Math.min(y - y0, y1 - 1 - y), row = yy * w;
      for (let x = x0; x < x1; x++) {
        const xx = ((x % w) + w) % w;
        let d = fullX ? BIG : x - x0; const d2 = fullX ? BIG : x1 - 1 - x; if (d2 < d) d = d2; if (dy < d) d = dy;
        fn(row + xx, d, x - x0, y - y0);
      }
    }
  }
  // raised (hgt>0) or recessed (hgt<0) panel with linear chamfer of `bevel` px
  panel(x0, y0, x1, y1, bevel, hgt) {
    const H = this.H;
    this.rect(x0, y0, x1, y1, (i, d) => { const t = (d + 0.5) / bevel; H[i] += hgt * (t >= 1 ? 1 : t); });
  }
  // rounded (cosine) profile across x (vertical rib) or y
  rib(x0, y0, x1, y1, hgt, vertical = true) {
    const H = this.H, wd = vertical ? x1 - x0 : y1 - y0;
    this.rect(x0, y0, x1, y1, (i, d, lx, ly) => {
      const u = ((vertical ? lx : ly) + 0.5) / wd; H[i] += hgt * Math.sin(u * Math.PI);
    });
  }
  paint(x0, y0, x1, y1, c, a = 1, feather = 0) {
    const R = this.R, G = this.G, B = this.B;
    this.rect(x0, y0, x1, y1, (i, d) => {
      let k = a; if (feather > 0) k *= Math.min(1, (d + 0.5) / feather);
      R[i] += (c[0] - R[i]) * k; G[i] += (c[1] - G[i]) * k; B[i] += (c[2] - B[i]) * k;
    });
  }
  // multiply colour (keeps underlying variation)
  tint(x0, y0, x1, y1, c) {
    const R = this.R, G = this.G, B = this.B;
    this.rect(x0, y0, x1, y1, (i) => { R[i] *= c[0]; G[i] *= c[1]; B[i] *= c[2]; });
  }
  rough(x0, y0, x1, y1, v, a = 1) { const Ro = this.Ro; this.rect(x0, y0, x1, y1, (i) => { Ro[i] += (v - Ro[i]) * a; }); }
  glow(x0, y0, x1, y1, c, feather = 0) {
    this.emis(); const ER = this.ER, EG = this.EG, EB = this.EB;
    this.rect(x0, y0, x1, y1, (i, d) => {
      let k = 1; if (feather > 0) k = Math.min(1, (d + 0.5) / feather);
      ER[i] = Math.max(ER[i], c[0] * k); EG[i] = Math.max(EG[i], c[1] * k); EB[i] = Math.max(EB[i], c[2] * k);
    });
  }
  disc(cx, cy, r, fn) {
    const w = this.w, h = this.h, r2 = r * r;
    for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
      const yy = ((y % h) + h) % h, dy = y + 0.5 - cy;
      for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
        const dx = x + 0.5 - cx, d2 = dx * dx + dy * dy;
        if (d2 < r2) fn(yy * w + (((x % w) + w) % w), Math.sqrt(d2) / r, dx, dy);
      }
    }
  }
  rivet(cx, cy, r, hgt = 0.6, col = null) {
    const H = this.H, R = this.R, G = this.G, B = this.B;
    // dark ring
    this.disc(cx, cy, r + 1.2, (i, t) => { if (t * (r + 1.2) > r) { H[i] -= 0.15; R[i] *= 0.7; G[i] *= 0.7; B[i] *= 0.7; } });
    this.disc(cx, cy, r, (i, t) => {
      H[i] += hgt * Math.sqrt(1 - t * t);
      if (col) { R[i] = col[0]; G[i] = col[1]; B[i] = col[2]; } else { R[i] *= 1.08; G[i] *= 1.08; B[i] *= 1.08; }
      this.Ro[i] = 0.4;
    });
  }
  // hex bolt head
  bolt(cx, cy, r, hgt = 0.8) {
    const H = this.H, R = this.R, G = this.G, B = this.B, Ro = this.Ro;
    this.disc(cx, cy, r + 1.5, (i, t, dx, dy) => {
      const rr = t * (r + 1.5);
      const ang = Math.atan2(dy, dx), sec = TAU / 6;
      const a = ((ang % sec) + sec) % sec - sec / 2;
      const hexR = r * Math.cos(sec / 2) / Math.cos(a);
      if (rr < hexR) { H[i] += hgt; R[i] *= 1.1; G[i] *= 1.1; B[i] *= 1.08; Ro[i] = 0.38; }
      else if (rr < r + 1.5) { H[i] += 0.15; R[i] *= 0.75; G[i] *= 0.75; B[i] *= 0.75; }
    });
  }
  // diagonal yellow/black hazard stripes with wear; wearN: optional noise array 0..1
  hazard(x0, y0, x1, y1, period = 32, wearN = null, wearAmt = 0.3, dir = 1) {
    const w = this.w, R = this.R, G = this.G, B = this.B, Ro = this.Ro;
    const Y = [0.86, 0.66, 0.12], K = [0.09, 0.08, 0.07];
    this.rect(x0, y0, x1, y1, (i) => {
      const x = i % w, y = (i / w) | 0;
      let s = ((dir > 0 ? x + y : x - y) % period + period) % period / period; // 0..1
      // anti-aliased stripe edge
      const e = Math.min(Math.abs(s - 0.0), Math.abs(s - 0.5), Math.abs(s - 1.0)) * period;
      const yel = s < 0.5 ? 1 : 0, aa = Math.min(1, e / 0.8);
      let k = yel ? 0.5 + 0.5 * aa : 0.5 - 0.5 * aa;
      let c0 = K[0] + (Y[0] - K[0]) * k, c1 = K[1] + (Y[1] - K[1]) * k, c2 = K[2] + (Y[2] - K[2]) * k;
      let paintA = 1;
      if (wearN) paintA = 1 - sstep(1 - wearAmt, 1 - wearAmt + 0.15, wearN[i]);
      const v = wearN ? 0.85 + wearN[i] * 0.3 : 1;
      R[i] += (c0 * v - R[i]) * paintA; G[i] += (c1 * v - G[i]) * paintA; B[i] += (c2 * v - B[i]) * paintA;
      Ro[i] += (0.62 - Ro[i]) * paintA;
    });
  }
}

// base metal: colour with large blotches + brushed streaks + speckle
function metalBase(t, col, vary = 0.15, seed = 1, brushed = 1, rough = 0.55) {
  const { w, h, n, R, G, B, H, Ro } = t;
  const a = fbm(w, h, 4, Math.max(1, Math.round(4 * h / w)), 5, seed);
  const b = noise(w, h, Math.max(2, w >> 5), h >> 1, seed + 1);
  const c = noise(w, h, w >> 1, h >> 1, seed + 2);
  const warm = fbm(w, h, 3, Math.max(1, Math.round(3 * h / w)), 3, seed + 3);
  for (let i = 0; i < n; i++) {
    const m = 1 + (a[i] - 0.5) * vary * 2 + (b[i] - 0.5) * 0.07 * brushed + (c[i] - 0.5) * 0.06;
    const wv = (warm[i] - 0.5) * 0.06;
    R[i] = col[0] * m * (1 + wv); G[i] = col[1] * m; B[i] = col[2] * m * (1 - wv);
    H[i] += (a[i] - 0.5) * 0.12 + (c[i] - 0.5) * 0.05 + (b[i] - 0.5) * 0.03 * brushed;
    Ro[i] = rough + (a[i] - 0.5) * 0.25 + (b[i] - 0.5) * 0.12 * brushed;
  }
}

// grime streaks running down from ledges (where height drops going downwards) + general streaking
function drips(t, amt = 0.5, seed = 3, col = [0.16, 0.13, 0.10], general = 0.25) {
  const { w, h, n, H, R, G, B, Ro } = t;
  const cn = noise(w, h, Math.max(4, w >> 2), 3, seed);
  const cn2 = noise(w, h, Math.max(4, w >> 4), 3, seed + 5);
  const D = new Float32Array(n);
  for (let x = 0; x < w; x++) {
    const decay = 0.965 + hash(x * 7 + seed) * 0.03;
    let d = 0;
    for (let yy = 0; yy < 2 * h; yy++) {
      const y = yy % h, i = y * w + x, up = ((y + h - 1) % h) * w + x;
      let s = H[up] - H[i]; s = s > 0.05 ? Math.min(1, s * 2.5) : 0;
      d = Math.max(s, d * decay);
      if (yy >= h) D[i] = d;
    }
  }
  for (let i = 0; i < n; i++) {
    const m = sstep(0.3, 0.85, cn[i]);
    const k = Math.min(1, D[i] * m * amt + sstep(0.55, 0.95, cn2[i]) * general * (0.5 + 0.5 * cn[i]));
    R[i] += (col[0] - R[i]) * k * 0.6; G[i] += (col[1] - G[i]) * k * 0.6; B[i] += (col[2] - B[i]) * k * 0.6;
    Ro[i] += 0.15 * k;
  }
}

function scratches(t, count, seed, len = 20, bright = 0.12) {
  const { w, h, R, G, B, H, Ro } = t; const r = rng(seed);
  for (let s = 0; s < count; s++) {
    let x = r() * w, y = r() * h; const a = (r() - 0.5) * 1.2 + (r() < 0.5 ? 0 : Math.PI / 2) * 0.3;
    const L = len * (0.3 + r()), dx = Math.cos(a), dy = Math.sin(a);
    for (let k = 0; k < L; k++) {
      const i = ((((y | 0) % h) + h) % h) * w + ((((x | 0) % w) + w) % w);
      R[i] += bright; G[i] += bright; B[i] += bright * 0.95; H[i] -= 0.04; Ro[i] -= 0.1;
      x += dx; y += dy;
    }
  }
}

// AO / edge wear / rust from the height field, plus optional upward-dust tint
function finish(t, o = {}) {
  const { w, h, n, H, R, G, B, Ro } = t;
  const aoR = o.aoR ?? 4, ao = o.ao ?? 0.6, edge = o.edge ?? 0.25;
  const bl = blur(H, w, h, aoR, 2);
  const rn = o.rust ? fbm(w, h, 6, Math.max(1, Math.round(6 * h / w)), 5, o.seed ?? 77) : null;
  const rc = o.rustCol ?? [0.42, 0.25, 0.13], rcav = o.rustCav ?? 1.0;
  for (let i = 0; i < n; i++) {
    const cav = bl[i] - H[i];
    let m = cav > 0 ? 1 - cav * ao : 1 - cav * edge;
    m = clamp(m, 0.25, 1.35);
    if (rn) {
      const rk = sstep(0.6, 0.85, rn[i] + Math.max(0, cav) * rcav) * o.rust;
      const v = 0.75 + rn[i] * 0.5;
      R[i] += (rc[0] * v - R[i]) * rk; G[i] += (rc[1] * v - G[i]) * rk; B[i] += (rc[2] * v - B[i]) * rk;
      Ro[i] += rk * 0.25;
    }
    if (cav < 0) Ro[i] += cav * edge * 0.6; else Ro[i] += cav * 0.2;
    R[i] *= m; G[i] *= m; B[i] *= m;
  }
  if (o.dust) { // lighten upward-facing slopes (in image space "up" = smaller y)
    const dc = o.dustCol ?? [0.6, 0.5, 0.4], s = o.dust;
    for (let y = 0; y < h; y++) {
      const ym = ((y + h - 1) % h) * w, yp = ((y + 1) % h) * w;
      for (let x = 0; x < w; x++) {
        const i = y * w + x, up = H[yp + x] - H[ym + x]; // >0 => surface rises downward => faces up
        const k = clamp(up * s, 0, 0.6);
        R[i] += (dc[0] - R[i]) * k; G[i] += (dc[1] - G[i]) * k; B[i] += (dc[2] - B[i]) * k;
      }
    }
  }
}

// ---------------------------------------------------------------- canvases / three textures
let ANISO = 1;
function mkCanvas(w, h) {
  if (typeof document !== 'undefined') { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
  return new OffscreenCanvas(w, h);
}
function canvasFrom(w, h, fill) {
  const c = mkCanvas(w, h), ctx = c.getContext('2d');
  const id = ctx.createImageData(w, h); fill(id.data); ctx.putImageData(id, 0, 0);
  return c;
}
function cloneCanvas(src) { const c = mkCanvas(src.width, src.height); c.getContext('2d').drawImage(src, 0, 0); return c; }
function mkTex(canvas, srgb, repeat = true, repeatV = repeat) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.wrapS = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.wrapT = repeatV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.anisotropy = ANISO;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}
function albedoCanvas(w, h, R, G, B) {
  return canvasFrom(w, h, (d) => {
    for (let i = 0, j = 0; i < R.length; i++, j += 4) { d[j] = R[i] * 255; d[j + 1] = G[i] * 255; d[j + 2] = B[i] * 255; d[j + 3] = 255; }
  });
}
function normalCanvas(w, h, H, s) {
  return canvasFrom(w, h, (d) => {
    for (let y = 0; y < h; y++) {
      const ym = ((y + h - 1) % h) * w, y0 = y * w, yp = ((y + 1) % h) * w;
      for (let x = 0; x < w; x++) {
        const xm = (x + w - 1) % w, xp = (x + 1) % w;
        const dx = (H[ym + xp] + 2 * H[y0 + xp] + H[yp + xp]) - (H[ym + xm] + 2 * H[y0 + xm] + H[yp + xm]);
        const dy = (H[yp + xm] + 2 * H[yp + x] + H[yp + xp]) - (H[ym + xm] + 2 * H[ym + x] + H[ym + xp]);
        // image y points down, texture v points up -> ny = +dH/dy_img
        let nx = -dx * s, ny = dy * s;
        const l = 1 / Math.sqrt(nx * nx + ny * ny + 1);
        const j = (y0 + x) * 4;
        d[j] = (nx * l * 0.5 + 0.5) * 255; d[j + 1] = (ny * l * 0.5 + 0.5) * 255; d[j + 2] = (l * 0.5 + 0.5) * 255; d[j + 3] = 255;
      }
    }
  });
}
function grayCanvas(w, h, A) {
  return canvasFrom(w, h, (d) => {
    for (let i = 0, j = 0; i < A.length; i++, j += 4) { const v = A[i] * 255; d[j] = v; d[j + 1] = v; d[j + 2] = v; d[j + 3] = 255; }
  });
}
function build(t, p) {
  const { w, h } = t;
  const def = {
    map: mkTex(albedoCanvas(w, h, t.R, t.G, t.B), true),
    normalMap: mkTex(normalCanvas(w, h, t.H, p.nStr ?? 0.4), false),
    roughnessMap: mkTex(grayCanvas(w, h, t.Ro), false),
    emissiveMap: null, emissive: null, emissiveIntensity: p.ei ?? 1,
    roughness: p.rough ?? 1, metalness: p.metal ?? 0,
    worldSize: p.ws, transparent: false,
  };
  if (t.ER) {
    def.emissiveMap = mkTex(albedoCanvas(w, h, t.ER, t.EG, t.EB), true);
    def.emissive = p.emissive ?? 0xffffff;
  }
  return def;
}

// ---------------------------------------------------------------- tiny block font
const GLYPHS = {
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
  '.': ['0', '0', '0', '0', '0', '0', '1'],
  ' ': ['00', '00', '00', '00', '00', '00', '00'],
};
function textWidth(str, cw) { let s = 0; for (const ch of str) s += (GLYPHS[ch][0].length + 1) * cw; return s - cw; }
function textMask(w, h, str, x0, y0, cw, chh) {
  const m = new Float32Array(w * h); let cx = x0;
  for (const ch of str) {
    const g = GLYPHS[ch];
    for (let r = 0; r < 7; r++) for (let c = 0; c < g[r].length; c++) {
      if (g[r][c] !== '1') continue;
      const xa = Math.round(cx + c * cw), xb = Math.round(cx + (c + 1) * cw), ya = Math.round(y0 + r * chh), yb = Math.round(y0 + (r + 1) * chh);
      for (let y = ya; y < yb; y++) for (let x = xa; x < xb; x++) if (x >= 0 && y >= 0 && x < w && y < h) m[y * w + x] = 1;
    }
    cx += (g[0].length + 1) * cw;
  }
  return m;
}

// ================================================================= WALLS
function genTECH() {
  const t = new Img(256, 256);
  metalBase(t, [0.60, 0.56, 0.48], 0.14, 11);
  // upper panels
  for (const x0 of [0, 128]) {
    t.panel(x0 + 3, 3, x0 + 125, 93, 4, 1);
    t.panel(x0 + 16, 16, x0 + 112, 80, 2, -0.4);
    t.panel(x0 + 19, 19, x0 + 109, 77, 2, 0.4);
    t.tint(x0 + 19, 19, x0 + 109, 77, [1.04, 1.02, 0.98]);
    for (const [bx, by] of [[x0 + 9, 9], [x0 + 119, 9], [x0 + 9, 87], [x0 + 119, 87]]) t.rivet(bx, by, 2.5, 0.6);
  }
  // dark band with small lights
  t.paint(0, 96, 256, 128, [0.30, 0.29, 0.28], 1);
  t.panel(0, 96, 256, 128, 1, -0.2);
  t.panel(0, 100, 256, 124, 2, 0.5);
  const bandN = noise(256, 256, 64, 64, 5);
  t.rect(0, 96, 256, 128, (i) => { t.R[i] *= 0.9 + bandN[i] * 0.2; t.G[i] *= 0.9 + bandN[i] * 0.2; t.B[i] *= 0.9 + bandN[i] * 0.2; t.Ro[i] = 0.5; });
  for (let k = 0; k < 8; k++) {
    const x = 16 + 32 * k;
    t.panel(x - 6, 108, x + 6, 116, 1, -0.5);
    t.paint(x - 6, 108, x + 6, 116, [0.06, 0.06, 0.06]);
    const on = k % 2 === 0;
    const c = on ? [1.0, 0.72, 0.32] : [0.35, 0.75, 1.0];
    t.paint(x - 5, 109, x + 5, 115, [c[0] * 0.8, c[1] * 0.8, c[2] * 0.8]);
    t.glow(x - 5, 109, x + 5, 115, c, 1.5);
    t.rough(x - 5, 109, x + 5, 115, 0.15);
    t.rivet(x + 16, 104, 2, 0.5); t.rivet(x + 16, 120, 2, 0.5);
  }
  // lower vertical panels
  for (let k = 0; k < 4; k++) {
    const x0 = 64 * k;
    t.panel(x0 + 3, 131, x0 + 61, 253, 4, 1);
    t.panel(x0 + 30, 142, x0 + 34, 242, 1, -0.5);
    t.tint(x0 + 3, 131, x0 + 61, 253, k % 2 ? [0.97, 0.96, 0.95] : [1.02, 1.0, 0.98]);
    for (const [bx, by] of [[x0 + 11, 139], [x0 + 53, 139], [x0 + 11, 245], [x0 + 53, 245]]) t.rivet(bx, by, 2.5, 0.6);
  }
  scratches(t, 60, 21, 18, 0.08);
  drips(t, 0.7, 13, undefined, 0.12);
  finish(t, { ao: 0.75, edge: 0.35, rust: 0.3, rustCav: 1.3, seed: 17, rustCol: [0.40, 0.25, 0.15] });
  return build(t, { nStr: 0.5, metal: 0.2, ws: [128, 128], ei: 1.5 });
}

function genTECH2() {
  const t = new Img(256, 256);
  metalBase(t, [0.38, 0.42, 0.48], 0.14, 31);
  // vertical ribs between horizontal bars
  for (let k = 0; k < 8; k++) {
    const x = k * 32;
    t.panel(x + 2, 12, x + 30, 116, 2, -0.6);
    t.panel(x + 2, 140, x + 30, 244, 2, -0.6);
    t.rib(x + 10, 14, x + 22, 114, 1.4); t.rib(x + 10, 142, x + 22, 242, 1.4);
    t.tint(x + 2, 12, x + 30, 116, [0.8, 0.82, 0.86]);
    t.tint(x + 2, 140, x + 30, 244, [0.8, 0.82, 0.86]);
    t.tint(x + 10, 14, x + 22, 114, [1.2, 1.2, 1.2]); t.tint(x + 10, 142, x + 22, 242, [1.2, 1.2, 1.2]);
  }
  // horizontal heavy bars (one wraps across the tile edge)
  for (const y of [-10, 118]) {
    t.panel(0, y + 1, 256, y + 21, 3, 0.9);
    t.tint(0, y + 1, 256, y + 21, [1.06, 1.06, 1.08]);
    for (let k = 0; k < 8; k++) t.bolt(16 + k * 32, y + 11, 3.5, 0.6);
  }
  // small status lights on the middle bar
  for (let k = 0; k < 4; k++) {
    const x = 64 * k + 32;
    t.paint(x - 3, 126, x + 3, 132, [0.05, 0.05, 0.06]);
    t.paint(x - 2, 127, x + 2, 131, [0.3, 0.8, 1.0]);
    t.glow(x - 2, 127, x + 2, 131, [0.25, 0.85, 1.0]);
  }
  scratches(t, 40, 33, 16, 0.07);
  drips(t, 0.6, 35, [0.12, 0.12, 0.13]);
  finish(t, { ao: 0.8, edge: 0.35, rust: 0.25, rustCav: 1.0, seed: 37, rustCol: [0.38, 0.25, 0.16] });
  return build(t, { nStr: 0.5, metal: 0.3, ws: [128, 128], ei: 1.5 });
}

function genROCK() {
  const w = 256, h = 256, t = new Img(w, h), n = t.n;
  const wx = fbm(w, h, 3, 3, 4, 47), wy = fbm(w, h, 4, 4, 4, 48);
  for (let i = 0; i < n; i++) { wx[i] = (wx[i] - 0.5) * 60; wy[i] = (wy[i] - 0.5) * 26; }
  // slabs: cells elongated horizontally -> stratified, layered rock
  const W1 = worley(w, h, 3, 7, 41, 0.9, wx, wy), W2 = worley(w, h, 7, 16, 42, 1, wx, wy);
  const f = fbm(w, h, 4, 4, 6, 43), fr = ridged(w, h, 4, 2, 6, 44), st = noise(w, h, 1, 18, 45);
  const frh = ridged(w, h, 16, 16, 3, 51);
  const fine = noise(w, h, 128, 128, 46), mid = fbm(w, h, 16, 16, 3, 49), streak = noise(w, h, 48, 3, 50);
  const { H, R, G, B, Ro } = t;
  for (let i = 0; i < n; i++) {
    const e1 = W1.F2[i] - W1.F1[i], e2 = W2.F2[i] - W2.F1[i];
    const id1 = W1.ID[i], id2 = W2.ID[i], ch = hash(id1 + 7), ch2 = hash(id2 + 99);
    // each slab leans out at the top and is undercut at the bottom (faceted)
    const tilt1 = -W1.DY[i] * (0.8 + ch * 1.2) + W1.DX[i] * (hash(id1 * 3 + 1) - 0.5) * 1.2;
    const tilt2 = -W2.DY[i] * 0.6 + W2.DX[i] * (hash(id2 * 5 + 2) - 0.5) * 0.8;
    const blk = sstep(0.0, 0.25, e1), blk2 = sstep(0.0, 0.15, e2);
    H[i] = blk * (0.8 + ch * 1.4) + tilt1 * 1.4 * blk + (tilt2 * 0.7 + ch2 * 0.4) * (0.4 + 0.6 * blk2) +
      fr[i] * 1.1 + frh[i] * 0.35 + (f[i] - 0.5) * 0.9 + (st[i] - 0.5) * 0.6 + (mid[i] - 0.5) * 0.5 + (fine[i] - 0.5) * 0.16;
    const v = 0.74 + f[i] * 0.3 + ch * 0.18 + ch2 * 0.1 + (st[i] - 0.5) * 0.3 + (mid[i] - 0.5) * 0.15 + (fine[i] - 0.5) * 0.12
      - sstep(0.6, 0.95, streak[i]) * 0.12;
    const crack = 0.72 + 0.28 * blk;
    const grey = clamp((mid[i] - 0.45) * 1.5 + (ch2 - 0.5) * 0.3, 0, 0.5);
    R[i] = lerp(0.50, 0.44, grey) * v * crack; G[i] = lerp(0.37, 0.40, grey) * v * crack; B[i] = lerp(0.26, 0.35, grey) * v * crack;
    Ro[i] = 0.86 + (fine[i] - 0.5) * 0.15;
  }
  finish(t, { ao: 0.35, aoR: 5, edge: 0.18, dust: 1.0, dustCol: [0.6, 0.48, 0.36] });
  return build(t, { nStr: 0.7, metal: 0, ws: [128, 128] });
}

function genGSTONE() {
  const w = 256, h = 256, t = new Img(w, h), n = t.n, r = rng(51);
  const rows = 4, rh = h / rows;
  const blockOf = [], colD = [];
  for (let ro = 0; ro < rows; ro++) {
    const widths = []; let sum = 0;
    while (sum < w) { let bw = [64, 80, 96, 112, 128][(r() * 5) | 0]; if (w - sum - bw < 48) bw = w - sum; widths.push(bw); sum += bw; }
    const off = (r() * w) | 0, bo = new Int16Array(w), cd = new Float32Array(w);
    let s = 0;
    for (let j = 0; j < widths.length; j++) {
      for (let k = 0; k < widths[j]; k++) { const x = (s + k + off) % w; bo[x] = j; cd[x] = Math.min(k, widths[j] - 1 - k); }
      s += widths[j];
    }
    blockOf.push(bo); colD.push(cd);
  }
  const nE = fbm(w, h, 16, 16, 3, 52), f = fbm(w, h, 4, 4, 6, 53), fine = noise(w, h, 128, 128, 54), moss = fbm(w, h, 6, 6, 5, 55);
  const { H, R, G, B, Ro } = t;
  for (let y = 0; y < h; y++) {
    const ro = (y / rh) | 0, ly = y - ro * rh, dy = Math.min(ly, rh - 1 - ly);
    for (let x = 0; x < w; x++) {
      const i = y * w + x, id = ro * 32 + blockOf[ro][x];
      let d = Math.min(dy, colD[ro][x]) + (nE[i] - 0.5) * 10;
      const bv = sstep(0.5, 7, d), bh = hash(id * 3 + 1), bt = hash(id * 5 + 2);
      H[i] = bv * (1 + bh * 0.4) + (f[i] - 0.5) * 0.9 * bv + (fine[i] - 0.5) * 0.15;
      const v = (0.82 + bh * 0.3) * (0.85 + f[i] * 0.3) + (fine[i] - 0.5) * 0.08;
      let cr = 0.42 * v, cg = 0.47 * v, cb = 0.40 * v;
      cg *= 1 + (bt - 0.5) * 0.08; cb *= 1 - (bt - 0.5) * 0.06;
      // mortar
      const mk = 1 - sstep(0.0, 2.0, d);
      cr = lerp(cr, 0.17, mk); cg = lerp(cg, 0.19, mk); cb = lerp(cb, 0.16, mk);
      // moss in crevices / near edges
      const mm = sstep(0.55, 0.85, moss[i] + (1 - sstep(0, 10, d)) * 0.35) * 0.65;
      cr = lerp(cr, 0.22, mm); cg = lerp(cg, 0.33, mm); cb = lerp(cb, 0.14, mm);
      R[i] = cr; G[i] = cg; B[i] = cb;
      Ro[i] = 0.85 - bv * 0.1 + mm * 0.1;
    }
  }
  finish(t, { ao: 0.5, aoR: 4, edge: 0.2 });
  return build(t, { nStr: 0.55, metal: 0, ws: [128, 128] });
}

function genSUPPORT() {
  const w = 128, h = 256, t = new Img(w, h);
  metalBase(t, [0.50, 0.46, 0.40], 0.15, 61, 0.5);
  // dark recessed sides
  t.panel(0, 0, 18, h, 1, -0.8); t.panel(110, 0, 128, h, 1, -0.8);
  t.tint(0, 0, 18, h, [0.55, 0.53, 0.52]); t.tint(110, 0, 128, h, [0.55, 0.53, 0.52]);
  t.rib(4, 0, 12, h, 0.5); t.rib(116, 0, 124, h, 0.5);
  // central flange
  t.panel(18, 0, 110, h, 4, 1.0);
  t.panel(56, 0, 72, h, 2, 0.35); // centre rib
  t.tint(56, 0, 72, h, [1.05, 1.04, 1.02]);
  for (let y = 24; y < h; y += 32) { if (y > 232) break; t.bolt(32, y, 4, 0.7); t.bolt(96, y, 4, 0.7); }
  // horizontal clamp plate wrapping the tile boundary
  t.panel(0, -16, 128, 16, 3, 1.6);
  t.paint(0, -16, 128, 16, [0.36, 0.34, 0.32], 0.85);
  t.panel(0, -3, 128, 3, 1, -0.4);
  for (const bx of [16, 64, 112]) { t.bolt(bx, -9, 4, 0.7); t.bolt(bx, 9, 4, 0.7); }
  scratches(t, 30, 63, 14, 0.07);
  drips(t, 0.8, 65);
  finish(t, { ao: 0.8, edge: 0.35, rust: 0.5, rustCav: 1.4, seed: 67, rustCol: [0.40, 0.24, 0.13] });
  return build(t, { nStr: 0.5, metal: 0.3, ws: [64, 128] });
}

function genDOOR() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.54, 0.52, 0.48], 0.14, 71);
  const wear = fbm(w, h, 8, 8, 5, 72);
  // big plates, two halves split by a central seam
  const bands = [[6, 84], [88, 140], [144, 216]];
  for (const [y0, y1] of bands) {
    t.panel(4, y0, 125, y1, 4, 1); t.panel(131, y0, 252, y1, 4, 1);
  }
  t.panel(126, 0, 130, h, 1, -0.8); t.paint(126, 0, 130, h, [0.08, 0.08, 0.08], 0.9);
  // horizontal stiffener ribs on top plates
  for (const x0 of [4, 131]) {
    for (const y of [24, 44, 64]) { t.rib(x0 + 10, y, x0 + 111, y + 6, 0.5, false); }
  }
  // edge bolts
  for (const [y0, y1] of bands) for (const x0 of [4, 131]) {
    for (let x = x0 + 10; x < x0 + 120; x += 25) { t.rivet(x, y0 + 5, 2.4, 0.6); t.rivet(x, y1 - 5, 2.4, 0.6); }
  }
  // logo plate
  t.panel(80, 94, 176, 134, 3, 0.8);
  t.paint(80, 94, 176, 134, [0.22, 0.24, 0.27], 1, 2);
  t.rough(80, 94, 176, 134, 0.4);
  const str = 'U.A.C.', cw = 3, tw = textWidth(str, cw), tm = textMask(w, h, str, Math.round(128 - tw / 2), 103, cw, 3);
  const tmb = blur(tm, w, h, 1, 1);
  for (let i = 0; i < t.n; i++) if (tmb[i] > 0) {
    const k = tmb[i]; t.H[i] += k * 0.5;
    t.R[i] = lerp(t.R[i], 0.82, k); t.G[i] = lerp(t.G[i], 0.78, k); t.B[i] = lerp(t.B[i], 0.66, k);
  }
  for (const [bx, by] of [[85, 99], [171, 99], [85, 129], [171, 129]]) t.rivet(bx, by, 1.8, 0.4);
  // hazard trim
  t.panel(4, 222, 252, 252, 2, 0.7);
  t.hazard(4, 222, 252, 252, 32, wear, 0.25);
  t.panel(0, 252, 256, 256, 1, -0.5);
  scratches(t, 70, 73, 20, 0.08);
  drips(t, 0.6, 75);
  finish(t, { ao: 0.75, edge: 0.35, rust: 0.4, rustCav: 1.2, seed: 77 });
  return build(t, { nStr: 0.5, metal: 0.3, ws: [128, 128] });
}

function genDOORTRAK() {
  const w = 32, h = 256, t = new Img(w, h);
  metalBase(t, [0.28, 0.27, 0.26], 0.15, 81, 0.3);
  const wear = fbm(w, h, 2, 16, 4, 82);
  t.panel(0, 0, 32, h, 1, -0.3);
  t.rib(5, 0, 12, h, 1.2); t.rib(20, 0, 27, h, 1.2);
  t.tint(5, 0, 12, h, [1.6, 1.55, 1.5]); t.tint(20, 0, 27, h, [1.6, 1.55, 1.5]);
  t.rough(5, 0, 12, h, 0.35, 0.7); t.rough(20, 0, 27, h, 0.35, 0.7);
  for (let y = 0; y < h; y += 64) {
    t.panel(0, y + 4, 32, y + 22, 1, 0.3);
    t.hazard(0, y + 4, 32, y + 22, 16, wear, 0.3);
    t.bolt(16, y + 40, 3, 0.6);
  }
  drips(t, 0.5, 85);
  finish(t, { ao: 0.7, edge: 0.4, rust: 0.4, seed: 87 });
  return build(t, { nStr: 0.5, metal: 0.35, ws: [16, 128] });
}

// ---- computer bank (animated)
function genCOMP() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.52, 0.51, 0.49], 0.1, 91, 0.6, 0.5);
  t.emis();
  t.panel(4, 4, 252, 252, 3, 0.6);
  const screens = [
    { x0: 18, y0: 22, x1: 120, y1: 84, kind: 'text', col: [0.35, 1.0, 0.45] },
    { x0: 136, y0: 22, x1: 238, y1: 84, kind: 'bars', col: [0.35, 0.75, 1.0] },
    { x0: 26, y0: 136, x1: 230, y1: 196, kind: 'graph', col: [0.55, 1.0, 0.35] },
  ];
  for (const s of screens) {
    t.panel(s.x0 - 7, s.y0 - 7, s.x1 + 7, s.y1 + 7, 3, 0.8);
    t.tint(s.x0 - 7, s.y0 - 7, s.x1 + 7, s.y1 + 7, [0.62, 0.62, 0.64]);
    t.panel(s.x0, s.y0, s.x1, s.y1, 2, -1.2);
    t.paint(s.x0, s.y0, s.x1, s.y1, [0.035, 0.05, 0.05], 1);
    t.rough(s.x0, s.y0, s.x1, s.y1, 0.1);
    t.glow(s.x0, s.y0, s.x1, s.y1, [s.col[0] * 0.05, s.col[1] * 0.05, s.col[2] * 0.05]);
    t.rivet(s.x0 - 3, s.y0 - 3, 1.5, 0.3); t.rivet(s.x1 + 3, s.y0 - 3, 1.5, 0.3);
    t.rivet(s.x0 - 3, s.y1 + 3, 1.5, 0.3); t.rivet(s.x1 + 3, s.y1 + 3, 1.5, 0.3);
  }
  // LED strip
  t.panel(14, 96, 242, 124, 2, -0.4);
  t.paint(14, 96, 242, 124, [0.16, 0.16, 0.17], 1, 2);
  const leds = [];
  const lr = rng(92), LC = [[1, 0.15, 0.08], [0.2, 1, 0.25], [1, 0.7, 0.1], [0.3, 0.7, 1]];
  for (let row = 0; row < 2; row++) for (let k = 0; k < 18; k++) {
    const x = 22 + k * 12.4, y = 101 + row * 12;
    const c = LC[(lr() * 4) | 0];
    leds.push({ x: Math.round(x), y, c, on: lr() < 0.6, rate: 0.05 + lr() * 0.3 });
    t.panel(Math.round(x), y, Math.round(x) + 7, y + 6, 1, 0.3);
  }
  // vents + buttons at bottom
  for (let y = 210; y < 246; y += 6) { t.panel(22, y, 118, y + 3, 1, -0.7); t.paint(22, y, 118, y + 3, [0.08, 0.08, 0.08], 0.8); }
  for (let by = 0; by < 3; by++) for (let bx = 0; bx < 6; bx++) {
    const x = 138 + bx * 16, y = 208 + by * 13, c = hash(bx * 7 + by * 13) < 0.3 ? [0.65, 0.2, 0.15] : hash(bx + by * 5) < 0.4 ? [0.7, 0.6, 0.25] : [0.3, 0.3, 0.32];
    t.panel(x, y, x + 12, y + 9, 2, 0.6); t.paint(x + 1, y + 1, x + 11, y + 8, c, 0.9, 1.5);
  }
  scratches(t, 30, 93, 14, 0.06);
  drips(t, 0.35, 95, [0.2, 0.18, 0.16], 0.12);
  finish(t, { ao: 0.7, edge: 0.3, rust: 0.12, seed: 97 });
  const def = build(t, { nStr: 0.45, metal: 0.25, ws: [128, 128], ei: 1.6 });

  // dynamic content drawn with canvas 2D on top of the baked base
  const mapC = def.map.image, emC = def.emissiveMap.image;
  const baseMap = cloneCanvas(mapC), baseEm = cloneCanvas(emC);
  const mctx = mapC.getContext('2d'), ectx = emC.getContext('2d');
  const r = rng(99);
  const textLines = [];
  const newLine = () => { const words = []; let x = 0; const ind = r() < 0.3 ? 6 : 0; x += ind; const max = 90 * (0.3 + r() * 0.7); while (x < max) { const ww = 2 + ((r() * 7) | 0) * 2; words.push([x, ww]); x += ww + 3; } return words; };
  for (let i = 0; i < 12; i++) textLines.push(newLine());
  const bars = new Float32Array(12).map(() => r()), barsT = new Float32Array(12).map(() => r());
  let tick = 0;
  const css = (c, m) => `rgb(${(c[0] * m * 255) | 0},${(c[1] * m * 255) | 0},${(c[2] * m * 255) | 0})`;
  function drawScreens(ctx, base, m) {
    for (const s of screens) {
      const sw = s.x1 - s.x0, sh = s.y1 - s.y0;
      ctx.drawImage(base, s.x0, s.y0, sw, sh, s.x0, s.y0, sw, sh);
      ctx.save(); ctx.beginPath(); ctx.rect(s.x0 + 1, s.y0 + 1, sw - 2, sh - 2); ctx.clip();
      if (s.kind === 'text') {
        ctx.fillStyle = css(s.col, m);
        for (let l = 0; l < textLines.length; l++) {
          const y = s.y0 + 4 + l * 5;
          for (const [x, ww] of textLines[l]) ctx.fillRect(s.x0 + 4 + x, y, ww, 3);
        }
        if (tick & 2) ctx.fillRect(s.x0 + 4, s.y0 + 4 + 11 * 5, 4, 3); // cursor
      } else if (s.kind === 'bars') {
        ctx.fillStyle = css(s.col, m * 0.25);
        for (let gy = s.y0 + 8; gy < s.y1; gy += 10) ctx.fillRect(s.x0 + 2, gy, sw - 4, 1);
        for (let k = 0; k < 12; k++) {
          const bh = 6 + bars[k] * (sh - 16), x = s.x0 + 5 + k * 8;
          ctx.fillStyle = css(k % 4 === 3 ? [1, 0.6, 0.2] : s.col, m);
          ctx.fillRect(x, s.y1 - 4 - bh, 6, bh);
        }
      } else {
        ctx.fillStyle = css(s.col, m * 0.22);
        for (let gx = s.x0 + 6; gx < s.x1; gx += 17) ctx.fillRect(gx, s.y0 + 2, 1, sh - 4);
        for (let gy = s.y0 + 6; gy < s.y1; gy += 12) ctx.fillRect(s.x0 + 2, gy, sw - 4, 1);
        ctx.lineWidth = 1.5;
        const ph = tick * 0.35;
        for (let tr = 0; tr < 2; tr++) {
          ctx.strokeStyle = css(tr ? [1, 0.75, 0.2] : s.col, m);
          ctx.beginPath();
          for (let x = 0; x <= sw; x += 2) {
            const u = x / sw;
            const v = tr ? 0.5 + 0.3 * Math.sin(u * 9 + ph * 1.7) * Math.sin(u * 2.3 - ph * 0.4)
              : 0.5 + 0.22 * Math.sin(u * 23 - ph * 3) + 0.12 * Math.sin(u * 61 + ph * 5) + (hash((x >> 1) * 31 + tick) - 0.5) * 0.08;
            const yy = s.y0 + 4 + (1 - v) * (sh - 8);
            if (x === 0) ctx.moveTo(s.x0 + x, yy); else ctx.lineTo(s.x0 + x, yy);
          }
          ctx.stroke();
        }
      }
      // faint scanlines
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      for (let y = s.y0; y < s.y1; y += 2) ctx.fillRect(s.x0, y, sw, 1);
      ctx.restore();
    }
    for (const L of leds) {
      ctx.fillStyle = L.on ? css(L.c, m) : css(L.c, ctx === ectx ? 0.03 : 0.25);
      ctx.fillRect(L.x + 1, L.y + 1, 5, 4);
    }
  }
  function step() {
    tick++;
    if (tick % 2 === 0) { textLines.shift(); textLines.push(newLine()); }
    for (let k = 0; k < 12; k++) { if (r() < 0.25) barsT[k] = r(); bars[k] += (barsT[k] - bars[k]) * 0.4; }
    for (const L of leds) if (r() < L.rate) L.on = !L.on;
    drawScreens(mctx, baseMap, 0.75); drawScreens(ectx, baseEm, 1.0);
    def.map.needsUpdate = true; def.emissiveMap.needsUpdate = true;
  }
  step();
  let last = -1;
  def._update = (time) => { const f = Math.floor(time * 8); if (f !== last) { last = f; step(); } };
  return def;
}

function genSTEP() {
  const w = 128, h = 32, t = new Img(w, h);
  metalBase(t, [0.34, 0.32, 0.30], 0.15, 101, 0.8);
  const wear = fbm(w, h, 8, 2, 4, 102);
  t.panel(0, 0, w, 5, 1, 0.8); t.tint(0, 0, w, 5, [1.5, 1.45, 1.4]); t.rough(0, 0, w, 5, 0.35, 0.7);
  t.panel(0, 8, w, 14, 1, 0.3); t.hazard(0, 8, w, 14, 16, wear, 0.35);
  t.panel(0, 20, w, 26, 1, -0.5); t.paint(0, 20, w, 26, [0.08, 0.08, 0.09]);
  for (let x = 0; x < w; x += 8) { t.paint(x + 1, 21, x + 6, 25, [0.6, 0.85, 1.0]); t.glow(x + 1, 21, x + 6, 25, [0.35, 0.65, 1.0], 1); }
  for (let x = 16; x < w; x += 32) t.rivet(x, 29, 1.8, 0.4);
  drips(t, 0.4, 105);
  finish(t, { ao: 0.6, aoR: 2, edge: 0.4, rust: 0.3, seed: 107 });
  return build(t, { nStr: 0.45, metal: 0.3, ws: [64, 16], ei: 1.3 });
}

function genPLAT() {
  const w = 128, h = 128, t = new Img(w, h);
  metalBase(t, [0.44, 0.42, 0.39], 0.15, 111);
  const wear = fbm(w, h, 8, 8, 5, 112);
  t.panel(2, 2, 126, 126, 3, 0.8);
  t.panel(12, 12, 116, 116, 2, -0.4);
  t.hazard(12, 12, 116, 116, 32, wear, 0.3);
  for (const [x, y] of [[7, 7], [121, 7], [7, 121], [121, 121], [64, 7], [64, 121], [7, 64], [121, 64]]) t.bolt(x, y, 3, 0.6);
  scratches(t, 40, 113, 14, 0.08);
  drips(t, 0.5, 115);
  finish(t, { ao: 0.7, edge: 0.35, rust: 0.35, seed: 117 });
  return build(t, { nStr: 0.45, metal: 0.25, ws: [64, 64] });
}

function genSWITCH(on) {
  const w = 128, h = 256, t = new Img(w, h);
  metalBase(t, [0.50, 0.48, 0.45], 0.14, 121);
  const wear = fbm(w, h, 4, 8, 4, 122);
  t.panel(3, 3, 125, 253, 3, 0.8);
  t.panel(3, 40, 125, 43, 1, -0.6); t.panel(3, 212, 125, 215, 1, -0.6);
  for (const [x, y] of [[12, 12], [116, 12], [12, 244], [116, 244]]) t.bolt(x, y, 3.5, 0.6);
  // switch housing
  t.panel(30, 60, 98, 196, 4, 1.4);
  t.tint(30, 60, 98, 196, [0.6, 0.61, 0.66]);
  t.panel(36, 66, 92, 190, 2, -0.3);
  // indicator light
  const lc = on ? [0.25, 1.0, 0.3] : [1.0, 0.12, 0.06];
  t.disc(64, 80, 8, (i, q) => { t.H[i] -= 0.4 * (1 - q); t.R[i] = 0.08; t.G[i] = 0.08; t.B[i] = 0.08; });
  t.emis();
  t.disc(64, 80, 6, (i, q) => {
    const k = 1 - q * q * 0.5; t.H[i] += 0.5 * Math.sqrt(1 - q * q);
    t.R[i] = lc[0] * 0.85; t.G[i] = lc[1] * 0.85; t.B[i] = lc[2] * 0.85; t.Ro[i] = 0.12;
    t.ER[i] = lc[0] * k; t.EG[i] = lc[1] * k; t.EB[i] = lc[2] * k;
  });
  // slot
  t.panel(58, 98, 70, 178, 2, -1.2); t.paint(58, 98, 70, 178, [0.04, 0.04, 0.04], 1, 1.5);
  // lever (off: down, on: up)
  const ly = on ? 102 : 160;
  t.panel(42, ly, 86, ly + 14, 3, 2.2);
  t.paint(42, ly, 86, ly + 14, [0.66, 0.64, 0.6], 1);
  t.rough(42, ly, 86, ly + 14, 0.3);
  t.panel(46, ly + 3, 82, ly + 11, 2, 0.3);
  t.paint(46, ly + 3, 82, ly + 11, on ? [0.2, 0.55, 0.22] : [0.65, 0.12, 0.08], 1, 1);
  // label strip
  t.panel(36, 222, 92, 236, 1, 0.4); t.hazard(36, 222, 92, 236, 16, wear, 0.25);
  scratches(t, 30, 123, 12, 0.07);
  drips(t, 0.5, 125);
  finish(t, { ao: 0.75, edge: 0.35, rust: 0.3, seed: 127 });
  return build(t, { nStr: 0.5, metal: 0.25, ws: [64, 128], ei: 2.0 });
}

function genEXITSIGN() {
  const w = 128, h = 64, t = new Img(w, h);
  metalBase(t, [0.28, 0.28, 0.29], 0.1, 131, 0.3);
  t.panel(1, 1, 127, 63, 2, 0.8);
  t.panel(6, 6, 122, 58, 2, -0.8);
  t.paint(6, 6, 122, 58, [0.06, 0.04, 0.04], 1, 2);
  t.rough(6, 6, 122, 58, 0.15);
  const str = 'EXIT', cw = 5, ch = 5, tw = textWidth(str, cw);
  const tm = textMask(w, h, str, Math.round(64 - tw / 2), 32 - Math.round(3.5 * ch), cw, ch);
  const sharp = blur(tm, w, h, 1, 1), halo = blur(tm, w, h, 4, 3);
  t.emis();
  for (let i = 0; i < t.n; i++) {
    const k = sharp[i], g = halo[i];
    t.H[i] += k * 0.4;
    t.R[i] = lerp(t.R[i] + g * 0.15, 0.95, k); t.G[i] = lerp(t.G[i], 0.18, k); t.B[i] = lerp(t.B[i], 0.12, k);
    t.ER[i] = Math.min(1, k * 1.0 + g * 0.35); t.EG[i] = k * 0.12 + g * 0.02; t.EB[i] = k * 0.06 + g * 0.01;
  }
  for (const [x, y] of [[4, 4], [124, 4], [4, 60], [124, 60]]) t.rivet(x, y, 1.6, 0.3);
  finish(t, { ao: 0.6, aoR: 2, edge: 0.3 });
  return build(t, { nStr: 0.4, metal: 0.2, ws: [64, 32], ei: 2.5 });
}

function genLITE() {
  const w = 64, h = 256, t = new Img(w, h);
  metalBase(t, [0.50, 0.50, 0.52], 0.1, 141, 0.6);
  t.panel(0, 0, 12, h, 2, 0.9); t.panel(52, 0, 64, h, 2, 0.9);
  t.panel(12, 0, 52, h, 1, -0.3);
  t.emis();
  t.rect(14, 0, 50, h, (i, d, lx) => {
    const u = (lx + 0.5) / 36, c = 1 - Math.pow(Math.abs(u - 0.5) * 2, 3) * 0.35;
    t.R[i] = 0.82 * c; t.G[i] = 0.9 * c; t.B[i] = 1.0 * c; t.Ro[i] = 0.2;
    t.ER[i] = 0.78 * c; t.EG[i] = 0.9 * c; t.EB[i] = 1.0 * c;
    t.H[i] += 0.2 * Math.sin(u * Math.PI);
  });
  for (let y = 0; y < h; y += 64) {
    t.panel(12, y - 2, 52, y + 2, 1, 0.6); t.paint(12, y - 2, 52, y + 2, [0.25, 0.25, 0.27]);
    t.rect(12, y - 2, 52, y + 2, (i) => { t.ER[i] = 0.02; t.EG[i] = 0.02; t.EB[i] = 0.03; });
    t.bolt(6, y + 32, 3, 0.5); t.bolt(58, y + 32, 3, 0.5);
  }
  finish(t, { ao: 0.5, aoR: 2, edge: 0.3 });
  return build(t, { nStr: 0.4, metal: 0.2, ws: [32, 128], ei: 2.5 });
}

// ================================================================= FLATS
function genFLOOR() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.47, 0.44, 0.40], 0.14, 151, 0.4);
  const { H, R, G, B, Ro } = t;
  const plate = new Float32Array(t.n);
  for (let py = 0; py < 2; py++) for (let px = 0; px < 2; px++) {
    const x0 = px * 128, y0 = py * 128, alt = (px + py) & 1;
    t.panel(x0 + 2, y0 + 2, x0 + 126, y0 + 126, 2, 0.7);
    t.tint(x0 + 2, y0 + 2, x0 + 126, y0 + 126, alt ? [0.9, 0.9, 0.92] : [1.03, 1.0, 0.96]);
    t.rect(x0 + 6, y0 + 6, x0 + 122, y0 + 122, (i) => { plate[i] = alt ? 2 : 1; });
    for (const [bx, by] of [[x0 + 8, y0 + 8], [x0 + 120, y0 + 8], [x0 + 8, y0 + 120], [x0 + 120, y0 + 120]]) t.rivet(bx, by, 2.5, 0.5);
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x; if (!plate[i]) continue;
    const lx = (x % 16) - 7.5, ly = (y % 16) - 7.5;
    let p = (((x >> 4) + (y >> 4)) & 1) ^ (plate[i] === 2 ? 1 : 0);
    let a = (lx + ly) * 0.7071, b = (lx - ly) * 0.7071;
    if (p) { const tmp = a; a = b; b = tmp; }
    const e = (a * a) / 38 + (b * b) / 3.2;
    if (e < 1) { const bump = Math.sqrt(1 - e); H[i] += bump * 0.55; R[i] *= 1 + bump * 0.12; G[i] *= 1 + bump * 0.12; B[i] *= 1 + bump * 0.1; Ro[i] -= bump * 0.15; }
  }
  scratches(t, 80, 153, 22, 0.07);
  finish(t, { ao: 0.8, aoR: 3, edge: 0.5, rust: 0.15, rustCav: 1.0, seed: 157, rustCol: [0.38, 0.25, 0.15] });
  return build(t, { nStr: 0.55, metal: 0.3, ws: [64, 64] });
}

function genFLOOR2() {
  const w = 256, h = 256, t = new Img(w, h), { H, R, G, B, Ro } = t;
  const f = fbm(w, h, 4, 4, 6, 161), fine = noise(w, h, 128, 128, 162), mott = fbm(w, h, 16, 16, 3, 163);
  for (let i = 0; i < t.n; i++) {
    const v = 0.85 + f[i] * 0.25 + (mott[i] - 0.5) * 0.12 + (fine[i] - 0.5) * 0.06;
    R[i] = 0.55 * v; G[i] = 0.44 * v; B[i] = 0.31 * v; Ro[i] = 0.75 + (f[i] - 0.5) * 0.2;
    H[i] = (f[i] - 0.5) * 0.2 + (fine[i] - 0.5) * 0.06 + (mott[i] - 0.5) * 0.1;
  }
  for (let ty = 0; ty < 4; ty++) for (let tx = 0; tx < 4; tx++) {
    const x0 = tx * 64, y0 = ty * 64, hv = hash(tx * 5 + ty * 17 + 3);
    t.panel(x0 + 1, y0 + 1, x0 + 63, y0 + 63, 2, 0.6);
    t.tint(x0 + 1, y0 + 1, x0 + 63, y0 + 63, [0.92 + hv * 0.14, 0.92 + hv * 0.13, 0.92 + hv * 0.1]);
    t.panel(x0 + 6, y0 + 6, x0 + 58, y0 + 58, 3, 0.12);
  }
  scratches(t, 50, 165, 16, 0.05);
  finish(t, { ao: 0.9, aoR: 3, edge: 0.3 });
  return build(t, { nStr: 0.4, metal: 0, ws: [64, 64] });
}

function genFLOORDARK() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.34, 0.38, 0.44], 0.12, 171, 0.4, 0.45);
  const { H, R, G, B, Ro } = t;
  const deep = fbm(w, h, 8, 8, 3, 172);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    const mx = Math.min(x % 64, 64 - (x % 64)), my = Math.min(y % 64, 64 - (y % 64));
    const major = Math.min(mx, my) < 4;
    const lx = (x % 16), ly = (y % 16);
    const bx = Math.min(lx, 16 - lx), by = Math.min(ly, 16 - ly); // distance to bar centre lines
    const bar = Math.min(bx, by) < 2.5 || major;
    if (!bar) {
      H[i] = -2.2; const dk = 0.1 + deep[i] * 0.08;
      R[i] *= dk; G[i] *= dk; B[i] *= dk * 1.1; Ro[i] = 0.9;
    } else {
      const d = major ? 4 - Math.min(mx, my) : 2.5 - Math.min(bx, by);
      H[i] += Math.min(1, d / 1.5) * (major ? 1.2 : 0.8);
      if (major) { R[i] *= 1.1; G[i] *= 1.1; B[i] *= 1.1; }
    }
  }
  for (let y = 0; y < h; y += 64) for (let x = 0; x < w; x += 64) t.bolt(x, y, 2.6, 0.4);
  finish(t, { ao: 0.5, aoR: 2, edge: 0.5, rust: 0.2, seed: 177, rustCol: [0.35, 0.25, 0.18] });
  return build(t, { nStr: 0.45, metal: 0.4, ws: [64, 64] });
}

function genCEIL() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.50, 0.47, 0.42], 0.15, 181, 0.3, 0.7);
  for (let ty = 0; ty < 4; ty++) for (let tx = 0; tx < 4; tx++) {
    const x0 = tx * 64, y0 = ty * 64, hv = hash(tx * 11 + ty * 3 + 1);
    t.panel(x0 + 2, y0 + 2, x0 + 62, y0 + 62, 3, 0.7);
    t.tint(x0 + 2, y0 + 2, x0 + 62, y0 + 62, [0.93 + hv * 0.12, 0.93 + hv * 0.11, 0.93 + hv * 0.1]);
    if ((tx + ty) & 1) {
      t.panel(x0 + 14, y0 + 14, x0 + 50, y0 + 50, 2, -0.35);
      for (let dy = 0; dy < 4; dy++) for (let dx = 0; dx < 4; dx++) t.disc(x0 + 20 + dx * 8, y0 + 20 + dy * 8, 2, (i, q) => { t.H[i] -= 0.5 * (1 - q); t.R[i] *= 0.3; t.G[i] *= 0.3; t.B[i] *= 0.3; });
    } else {
      t.panel(x0 + 10, y0 + 10, x0 + 54, y0 + 54, 2, 0.25);
    }
  }
  for (let y = 0; y < h; y += 64) for (let x = 0; x < w; x += 64) t.rivet(x, y, 3, 0.5);
  drips(t, 0.2, 185, [0.2, 0.18, 0.15], 0.1);
  finish(t, { ao: 0.8, aoR: 3, edge: 0.3, rust: 0.2, seed: 187 });
  return build(t, { nStr: 0.45, metal: 0.15, ws: [64, 64] });
}

function genCEILLIGHT() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.50, 0.49, 0.47], 0.12, 191, 0.5, 0.5);
  t.emis();
  t.panel(4, 4, 252, 252, 4, 0.8);
  t.panel(34, 34, 222, 222, 3, -0.9);
  t.tint(34, 34, 222, 222, [0.5, 0.5, 0.52]);
  t.rect(44, 44, 212, 212, (i, d, lx, ly) => {
    const u = (lx + 0.5) / 168 - 0.5, v = (ly + 0.5) / 168 - 0.5;
    const c = 1 - (u * u + v * v) * 0.5;
    const gx = (lx % 21), gy = (ly % 21);
    const grid = (gx < 1.5 || gy < 1.5) ? 0.82 : 1;
    t.R[i] = 0.92 * c * grid; t.G[i] = 0.93 * c * grid; t.B[i] = 0.9 * c * grid; t.Ro[i] = 0.25;
    t.ER[i] = 1.0 * c * grid; t.EG[i] = 0.97 * c * grid; t.EB[i] = 0.9 * c * grid;
    t.H[i] = 0.2 + (grid < 1 ? 0.15 : 0);
  });
  for (const [x, y] of [[18, 18], [238, 18], [18, 238], [238, 238], [128, 18], [128, 238], [18, 128], [238, 128]]) t.bolt(x, y, 4, 0.6);
  finish(t, { ao: 0.6, aoR: 3, edge: 0.3 });
  return build(t, { nStr: 0.4, metal: 0.25, ws: [64, 64], ei: 2.2 });
}

// ---- nukage (animated: frame-swapped colour/emissive + scrolling)
function genNUKAGE() {
  const w = 128, h = 128, n = w * h, N = 16;
  const A = fbm(w, h, 4, 4, 5, 201), Bn = fbm(w, h, 6, 6, 5, 202), C = fbm(w, h, 3, 3, 4, 203);
  const Wb = worley(w, h, 8, 8, 204);
  const shiftA = [], shiftB = [];
  for (let k = 0; k < N; k++) {
    const a = k / N * TAU;
    shiftA.push([Math.round(Math.cos(a) * 9), Math.round(Math.sin(a) * 9)]);
    shiftB.push([Math.round(-Math.sin(a) * 13), Math.round(Math.cos(a) * 13)]);
  }
  // static height / normal (bubbly surface), roughness
  const t = new Img(w, h);
  for (let i = 0; i < n; i++) {
    t.H[i] = A[i] * 1.2 + Bn[i] * 0.6 + Math.max(0, 0.35 - Wb.F1[i]) * 2.0;
    t.Ro[i] = 0.08 + C[i] * 0.12;
  }
  const mapFrames = [], emFrames = [], cellSize = new Float32Array(100);
  const R = new Float32Array(n), G = new Float32Array(n), B = new Float32Array(n);
  const ER = new Float32Array(n), EG = new Float32Array(n), EB = new Float32Array(n);
  for (let k = 0; k < N; k++) {
    const [ax, ay] = shiftA[k], [bx, by] = shiftB[k], ph = k / N * TAU;
    for (let c = 0; c < cellSize.length; c++) cellSize[c] = 0.12 + 0.22 * Math.max(0, Math.sin(ph + hash(c * 13 + 5) * TAU)) * (hash(c + 77) < 0.6 ? 1 : 0);
    for (let y = 0; y < h; y++) {
      const ya = ((y + ay) % h + h) % h * w, yb = ((y + by) % h + h) % h * w;
      for (let x = 0; x < w; x++) {
        const i = y * w + x;
        const va = A[ya + (((x + ax) % w) + w) % w], vb = Bn[yb + (((x + bx) % w) + w) % w];
        let v = va * 0.6 + vb * 0.4 + (C[i] - 0.5) * 0.3;
        // bubbles: pulsing cells
        const size = cellSize[Wb.ID[i]];
        const f1 = Wb.F1[i];
        const bub = size > 0.13 ? sstep(size, size - 0.06, f1) : 0;
        const rim = size > 0.13 ? Math.max(0, 1 - Math.abs(f1 - size + 0.02) * 18) : 0;
        v = clamp(v, 0, 1);
        const hot = sstep(0.55, 0.9, v);
        let r = 0.05 + 0.4 * hot, g = 0.18 + 0.8 * v, b = 0.02 + 0.14 * hot;
        r += bub * 0.25 + rim * 0.4; g += bub * 0.2 + rim * 0.3; b += rim * 0.25;
        R[i] = r; G[i] = g; B[i] = b;
        const e = 0.35 + 0.65 * v;
        ER[i] = r * e * 0.8; EG[i] = g * e * 0.9; EB[i] = b * e * 0.6;
      }
    }
    mapFrames.push(albedoCanvas(w, h, R, G, B));
    emFrames.push(albedoCanvas(w, h, ER, EG, EB));
  }
  const def = {
    map: mkTex(mapFrames[0], true),
    normalMap: mkTex(normalCanvas(w, h, t.H, 0.35), false),
    roughnessMap: mkTex(grayCanvas(w, h, t.Ro), false),
    emissiveMap: mkTex(emFrames[0], true),
    emissive: 0xffffff, emissiveIntensity: 0.6,
    roughness: 1, metalness: 0, worldSize: [64, 64], transparent: false,
  };
  let last = 0;
  def._update = (time) => {
    const f = Math.floor(time * 8) % N;
    if (f !== last) {
      last = f;
      def.map.image = mapFrames[f]; def.emissiveMap.image = emFrames[f];
      def.map.needsUpdate = true; def.emissiveMap.needsUpdate = true;
    }
    const ox = (time * 0.012) % 1, oy = (time * 0.025) % 1;
    def.map.offset.set(ox, oy); def.emissiveMap.offset.set(ox, oy); def.roughnessMap.offset.set(ox, oy);
    def.normalMap.offset.set((-time * 0.018) % 1, (time * 0.011) % 1);
  };
  return def;
}

function genRROCK() {
  const w = 256, h = 256, t = new Img(w, h), n = t.n, { H, R, G, B, Ro } = t;
  const f = fbm(w, h, 4, 4, 6, 211), fine = noise(w, h, 128, 128, 212), f2 = fbm(w, h, 12, 12, 4, 213);
  const P = worley(w, h, 20, 20, 214), Q = worley(w, h, 6, 6, 215), K = worley(w, h, 9, 9, 216);
  for (let i = 0; i < n; i++) {
    const ph = hash(P.ID[i] + 3), pr = 0.22 + ph * 0.22;
    const peb = P.F1[i] < pr && ph > 0.45 ? Math.pow(1 - (P.F1[i] / pr) ** 2, 0.7) : 0;
    const qh = hash(Q.ID[i] + 9), qr = 0.2 + qh * 0.25;
    const rock = Q.F1[i] < qr && qh > 0.45 ? Math.pow(1 - (Q.F1[i] / qr) ** 2, 0.6) : 0;
    const crack = (1 - sstep(0, 0.05, K.F2[i] - K.F1[i])) * sstep(0.45, 0.7, f2[i]);
    H[i] = (f[i] - 0.5) * 1.2 + (f2[i] - 0.5) * 0.4 + (fine[i] - 0.5) * 0.25 + peb * 0.5 + rock * (1.2 + (f2[i] - 0.5) * 0.8) - crack * 0.5 * (1 - rock);
    let v = 0.8 + f[i] * 0.3 + (fine[i] - 0.5) * 0.15 + (f2[i] - 0.5) * 0.15;
    let r = 0.44 * v, g = 0.37 * v, b = 0.29 * v;
    if (peb > 0) { const pv = 0.75 + hash(P.ID[i] + 50) * 0.4; r = lerp(r, 0.44 * pv, 0.6); g = lerp(g, 0.40 * pv, 0.6); b = lerp(b, 0.35 * pv, 0.6); }
    if (rock > 0) { const rv = 0.7 + qh * 0.3 + (fine[i] - 0.5) * 0.2 + (f2[i] - 0.5) * 0.3; r = lerp(r, 0.45 * rv, 0.85); g = lerp(g, 0.41 * rv, 0.85); b = lerp(b, 0.36 * rv, 0.85); }
    r *= 1 - crack * 0.4; g *= 1 - crack * 0.4; b *= 1 - crack * 0.4;
    R[i] = r; G[i] = g; B[i] = b; Ro[i] = 0.9 - peb * 0.1 - rock * 0.1;
  }
  finish(t, { ao: 0.45, aoR: 3, edge: 0.2 });
  return build(t, { nStr: 0.6, metal: 0, ws: [64, 64] });
}

function genSTEPTOP() {
  const w = 256, h = 256, t = new Img(w, h);
  metalBase(t, [0.45, 0.43, 0.40], 0.16, 221, 1.0);
  const wear = fbm(w, h, 8, 8, 5, 222);
  // transverse tread grooves
  for (let y = 44; y < 252; y += 12) t.panel(8, y, 248, y + 4, 1, -0.5);
  // hazard nosing
  t.panel(0, 0, 256, 34, 2, 0.6);
  t.hazard(0, 2, 256, 32, 32, wear, 0.4);
  t.panel(0, 34, 256, 37, 1, -0.6);
  // worn centre
  const f = fbm(w, h, 2, 2, 4, 223);
  for (let i = 0; i < t.n; i++) { const k = sstep(0.4, 0.9, f[i]) * 0.15; t.R[i] += k; t.G[i] += k; t.B[i] += k * 0.95; t.Ro[i] -= k; }
  for (let x = 32; x < w; x += 64) { t.bolt(x, 248, 3, 0.5); }
  scratches(t, 120, 225, 24, 0.08);
  finish(t, { ao: 0.7, aoR: 3, edge: 0.5, rust: 0.3, seed: 227 });
  return build(t, { nStr: 0.5, metal: 0.3, ws: [64, 64] });
}

// ================================================================= SKY
function genSKY() {
  const W = 2048, Hh = 512, n = W * Hh;
  const hw = W >> 1, hh = Hh >> 1;
  const c1 = up2(fbm(hw, hh, 6, 3, 7, 301), hw, hh), c2 = up2(fbm(hw, hh, 16, 6, 5, 302), hw, hh), wisp = up2(fbm(hw, hh, 4, 8, 6, 303), hw, hh);
  const RH = Hh >> 1, rock = ridged(W, RH, 32, 4, 3, 304); // only the lower half holds mountains
  const m1 = noise1(W, 5, 8, 311, 0.55, true), m2 = noise1(W, 7, 8, 312, 0.55, true), m3 = noise1(W, 9, 8, 313, 0.5, true);
  const R = new Float32Array(n), G = new Float32Array(n), B = new Float32Array(n);
  const sky = [
    [0.00, [0.018, 0.014, 0.022]], [0.30, [0.05, 0.028, 0.034]], [0.50, [0.16, 0.06, 0.045]],
    [0.64, [0.52, 0.21, 0.07]], [0.72, [0.62, 0.30, 0.10]], [1.0, [0.30, 0.13, 0.06]],
  ];
  const grad = new Float32Array(Hh * 3);
  for (let y = 0; y < Hh; y++) {
    const v = y / (Hh - 1); let k = 0; while (k < sky.length - 2 && v > sky[k + 1][0]) k++;
    const [va, ca] = sky[k], [vb, cb] = sky[k + 1], q = sstep(0, 1, (v - va) / (vb - va));
    for (let c = 0; c < 3; c++) grad[y * 3 + c] = lerp(ca[c], cb[c], q);
  }
  const layers = [
    { m: m1, base: 0.765, amp: 0.15, col: [0.24, 0.13, 0.09], haze: 0.55 },
    { m: m2, base: 0.845, amp: 0.15, col: [0.13, 0.08, 0.06], haze: 0.3 },
    { m: m3, base: 0.935, amp: 0.13, col: [0.065, 0.048, 0.042], haze: 0.1 },
  ];
  for (const L of layers) { L.top = new Float32Array(W); for (let x = 0; x < W; x++) L.top[x] = (L.base - L.amp * Math.pow(L.m[x], 1.4)) * Hh; }
  for (let y = 0; y < Hh; y++) {
    const v = y / Hh;
    const band = sstep(0.0, 0.3, v) * (1 - sstep(0.6, 0.72, v)) * 0.75 + 0.25;
    const yu = ((y + Hh - 1) % Hh) * W, yd = ((y + 1) % Hh) * W;
    for (let x = 0; x < W; x++) {
      const i = y * W + x;
      let r = grad[y * 3], g = grad[y * 3 + 1], b = grad[y * 3 + 2];
      // clouds
      const cv = c1[i] * 0.65 + c2[i] * 0.35 + (wisp[i] - 0.5) * 0.25;
      const dens = sstep(0.38, 0.75, cv) * band;
      const lit = sstep(0.18, 0.66, v);
      // lighting from below (horizon glow): brighter where density drops downward
      const below = c1[yd + x] - c1[yu + x];
      const edgeLit = clamp(0.55 - below * 25, 0, 1);
      const cr = lerp(0.075, 0.70, lit) * (0.55 + 0.6 * edgeLit), cg = lerp(0.05, 0.28, lit) * (0.55 + 0.6 * edgeLit), cb = lerp(0.07, 0.10, lit) * (0.6 + 0.5 * edgeLit);
      r = lerp(r, cr, dens * 0.92); g = lerp(g, cg, dens * 0.92); b = lerp(b, cb, dens * 0.92);
      // high thin streaks
      const st = sstep(0.6, 0.85, wisp[i]) * (1 - sstep(0.35, 0.6, v)) * 0.3;
      r += st * 0.09; g += st * 0.045; b += st * 0.06;
      // mountains, back to front
      for (let l = 0; l < 3; l++) {
        const L = layers[l], top = L.top[x];
        if (y >= top) {
          const dy = y - top, ry = (y - RH) * W, rk = rock[ry + x];
          const slope = (rock[ry + (x + 1) % W] - rock[ry + (x + W - 1) % W]) * 18 + (L.m[(x + 2) % W] - L.m[(x + W - 2) % W]) * 3 * Math.exp(-dy / 25);
          const shade = clamp(0.7 + rk * 0.45 + slope, 0.35, 1.6) * (1 - sstep(0, 120, dy) * 0.35);
          let mr = L.col[0] * shade, mg = L.col[1] * shade, mb = L.col[2] * shade;
          const rim = Math.max(0, 1 - dy / 2.5) * (0.45 - l * 0.12);
          mr += rim * 0.55; mg += rim * 0.22; mb += rim * 0.06;
          const hz = L.haze * (0.4 + 0.6 * sstep(0, 70, dy));
          mr = lerp(mr, 0.40, hz * 0.5); mg = lerp(mg, 0.17, hz * 0.5); mb = lerp(mb, 0.07, hz * 0.5);
          r = mr; g = mg; b = mb;
        }
      }
      R[i] = r; G[i] = g; B[i] = b;
    }
  }
  const map = mkTex(albedoCanvas(W, Hh, R, G, B), true, true, false);
  return { map, normalMap: null, roughnessMap: null, emissiveMap: null, emissive: null, emissiveIntensity: 1, roughness: 1, metalness: 0, worldSize: [1, 1], transparent: false };
}

// ================================================================= SPRITES / EFFECTS
function sprite(size, fn) {
  const c = canvasFrom(size, size, (d) => {
    const out = [0, 0, 0, 0];
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const nx = (x + 0.5) / size * 2 - 1, ny = (y + 0.5) / size * 2 - 1;
      const r = Math.sqrt(nx * nx + ny * ny), a = Math.atan2(ny, nx);
      out[0] = out[1] = out[2] = 1; out[3] = 0;
      fn(out, nx, ny, r, a, y * size + x);
      const j = (y * size + x) * 4;
      d[j] = out[0] * 255; d[j + 1] = out[1] * 255; d[j + 2] = out[2] * 255; d[j + 3] = clamp(out[3], 0, 1) * 255;
    }
  });
  const map = mkTex(c, true, false);
  return { map, normalMap: null, roughnessMap: null, emissiveMap: null, emissive: null, emissiveIntensity: 1, roughness: 1, metalness: 0, worldSize: [1, 1], transparent: true };
}
function angNoise(a, arr) { const n = arr.length; const f = ((a / TAU) + 1) % 1 * n, i = Math.floor(f), t = f - i; return lerp(arr[i % n], arr[(i + 1) % n], t); }

function genSprites() {
  const S = {};
  S.FLARE = sprite(128, (o, x, y, r) => {
    const a = Math.pow(Math.max(0, 1 - r), 2.4) * 0.85 + Math.exp(-r * r * 40) * 0.6;
    o[3] = a; o[0] = 1; o[1] = 1; o[2] = 1;
  });
  const sm = fbm(128, 128, 4, 4, 5, 401), sm2 = fbm(128, 128, 8, 8, 4, 402);
  S.SMOKE = sprite(128, (o, x, y, r, a, i) => {
    const fall = Math.pow(Math.max(0, 1 - r * (0.9 + (sm2[i] - 0.5) * 0.5)), 1.5);
    const d = clamp((sm[i] - 0.25) * 1.6, 0, 1);
    o[3] = fall * d * 0.9; const v = 0.62 + sm2[i] * 0.3; o[0] = v; o[1] = v; o[2] = v * 1.02;
  });
  S.SPARK = sprite(64, (o, x, y, r) => {
    const core = Math.exp(-r * r * 60);
    const rayH = Math.exp(-Math.abs(y) * 40) * Math.pow(Math.max(0, 1 - Math.abs(x)), 2);
    const rayV = Math.exp(-Math.abs(x) * 40) * Math.pow(Math.max(0, 1 - Math.abs(y)), 2);
    const d1 = (x + y) * 0.7071, d2 = (x - y) * 0.7071;
    const rayD = (Math.exp(-Math.abs(d1) * 60) * Math.max(0, 1 - Math.abs(d2) * 1.6) + Math.exp(-Math.abs(d2) * 60) * Math.max(0, 1 - Math.abs(d1) * 1.6)) * 0.5;
    const glow = Math.pow(Math.max(0, 1 - r), 3) * 0.35;
    o[3] = clamp(core + rayH + rayV + rayD + glow, 0, 1);
    o[0] = 1; o[1] = 0.95; o[2] = 0.8 + core * 0.2;
  });
  const bn = noise1(256, 8, 4, 403), bf = fbm(64, 64, 4, 4, 4, 404);
  const drops = []; { const r = rng(405); for (let k = 0; k < 7; k++) { const a = r() * TAU, d = 0.55 + r() * 0.35; drops.push([Math.cos(a) * d, Math.sin(a) * d, 0.04 + r() * 0.07]); } }
  S.BLOOD = sprite(64, (o, x, y, r, a, i) => {
    const edge = 0.32 + angNoise(a, bn) * 0.28;
    let k = sstep(edge + 0.04, edge - 0.04, r);
    for (const [dx, dy, dr] of drops) { const dd = Math.hypot(x - dx, y - dy); k = Math.max(k, sstep(dr + 0.03, dr - 0.03, dd)); }
    o[3] = k;
    const v = 0.75 + bf[i] * 0.4 + Math.max(0, 0.3 - r) * 0.6;
    o[0] = 0.5 * v; o[1] = 0.03 * v; o[2] = 0.03 * v;
  });
  const ff = fbm(128, 128, 4, 4, 6, 406), ff2 = ridged(128, 128, 3, 3, 5, 407);
  S.FIRE = sprite(128, (o, x, y, r, a, i) => {
    const turb = (ff[i] - 0.5) * 0.7 + (ff2[i] - 0.5) * 0.35;
    const I = clamp(1 - (r + turb * 0.6) / 0.85, 0, 1);
    const q = Math.pow(I, 0.8);
    o[0] = 1; o[1] = clamp(0.25 + q * 0.95, 0, 1); o[2] = clamp(q * q * 0.9 - 0.1, 0, 1) + 0.04;
    o[3] = sstep(0.0, 0.35, I) * (0.85 + 0.15 * q);
  });
  const mz = noise1(64, 8, 1, 408);
  S.MUZZLE = sprite(128, (o, x, y, r, a) => {
    const spikes = 7, s = Math.pow(Math.abs(Math.cos(a * spikes / 2)), 8);
    const sp = Math.floor(((a / TAU + 1) % 1) * spikes);
    const lim = 0.28 + (0.45 + mz[sp * 8 % 64] * 0.4) * s;
    const I = clamp(1 - r / lim, 0, 1), core = Math.exp(-r * r * 30);
    o[3] = clamp(Math.pow(I, 0.7) + core, 0, 1);
    const q = clamp(I * 1.3 + core, 0, 1);
    o[0] = 1; o[1] = 0.55 + 0.45 * q; o[2] = 0.15 + 0.8 * q * q;
  });
  const sn = fbm(64, 64, 4, 4, 5, 409), sa = noise1(256, 10, 3, 410);
  S.SCORCH = sprite(64, (o, x, y, r, a, i) => {
    const hole = sstep(0.17, 0.11, r);
    const soot = (1 - sstep(0.12, 0.55 + angNoise(a, sa) * 0.3 + (sn[i] - 0.5) * 0.2, r)) * (0.55 + sn[i] * 0.4);
    o[3] = clamp(Math.max(hole, soot * 0.85), 0, 1);
    const v = 0.02 + (1 - hole) * 0.06 * sn[i];
    o[0] = v * 1.2; o[1] = v; o[2] = v * 0.85;
  });
  const pn = noise1(256, 6, 4, 411), pf = fbm(128, 128, 4, 4, 5, 412);
  S.BLOODPOOL = sprite(128, (o, x, y, r, a, i) => {
    const edge = 0.5 + (angNoise(a, pn) - 0.5) * 0.45 + (pf[i] - 0.5) * 0.12;
    const k = sstep(edge + 0.02, edge - 0.03, r);
    o[3] = k * 0.93;
    const v = 0.7 + pf[i] * 0.4 + sstep(edge - 0.02, edge - 0.15, r) * 0.0;
    o[0] = 0.36 * v; o[1] = 0.02 * v; o[2] = 0.02 * v;
  });
  return S;
}

// ================================================================= main
export function createTextures(renderer) {
  ANISO = (renderer && renderer.capabilities && renderer.capabilities.getMaxAnisotropy) ? renderer.capabilities.getMaxAnisotropy() : 1;
  const textures = {};
  textures.TECH = genTECH();
  textures.TECH2 = genTECH2();
  textures.ROCK = genROCK();
  textures.GSTONE = genGSTONE();
  textures.SUPPORT = genSUPPORT();
  textures.DOOR = genDOOR();
  textures.DOORTRAK = genDOORTRAK();
  textures.COMP = genCOMP();
  textures.STEP = genSTEP();
  textures.PLAT = genPLAT();
  textures.SWITCH = genSWITCH(false);
  textures.SWITCH_ON = genSWITCH(true);
  textures.EXITSIGN = genEXITSIGN();
  textures.LITE = genLITE();
  textures.FLOOR = genFLOOR();
  textures.FLOOR2 = genFLOOR2();
  textures.FLOORDARK = genFLOORDARK();
  textures.CEIL = genCEIL();
  textures.CEILLIGHT = genCEILLIGHT();
  textures.NUKAGE = genNUKAGE();
  textures.RROCK = genRROCK();
  textures.STEPTOP = genSTEPTOP();
  textures.SKY = genSKY();
  Object.assign(textures, genSprites());

  const animated = [];
  for (const k in textures) {
    const d = textures[k];
    if (d._update) { animated.push(d._update); delete d._update; }
    if (d.emissiveIntensity == null) d.emissiveIntensity = 1;
  }
  function update(time) { for (let i = 0; i < animated.length; i++) animated[i](time); }
  return { textures, update };
}
