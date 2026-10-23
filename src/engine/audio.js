// audio.js — fully procedural audio for the game.
//
// Every sound effect and every note of music is synthesized at runtime with
// the Web Audio API / plain DSP code. No sampled assets of any kind are used,
// and the music is an original composition.
//
// Architecture
//   master Gain -> DynamicsCompressor -> soft clipper -> destination
//   sfxBus  -> master            (dry SFX)
//   sfxSend -> convolver reverb  (per-voice send, grows with distance)
//   musicBus -> master, musicSend -> convolver
//   convolver -> reverbReturn -> master
//
// SFX are rendered once (several random variants each) into AudioBuffers by
// sample-level DSP code (oscillators, RBJ biquads, formant banks, waveshaping)
// during init(), asynchronously in small chunks so the main thread never
// stalls. Playback is a single AudioBufferSourceNode per voice.
//
// Music uses a lookahead scheduler (setInterval 25 ms, ~0.12 s ahead) driving
// short-lived oscillator voices through shared amp/cab chains; drums are
// pre-rendered one-shot buffers.

const TAU = Math.PI * 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const sweep = (t, a, b, tau) => b + (a - b) * Math.exp(-t / tau);
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function polyblep(t, dt) {
  if (t < dt) {
    t /= dt;
    return t + t - t * t - 1;
  }
  if (t > 1 - dt) {
    t = (t - 1) / dt;
    return t * t + t + t + 1;
  }
  return 0;
}

function lerpTraj(pts, t) {
  if (t <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    if (t <= pts[i][0]) {
      const [t0, v0] = pts[i - 1];
      const [t1, v1] = pts[i];
      return v0 + (v1 - v0) * ((t - t0) / Math.max(1e-6, t1 - t0));
    }
  }
  return pts[pts.length - 1][1];
}
const traj = (pts) => (t) => lerpTraj(pts, t);

function normalize(a, peak = 1) {
  let m = 0;
  for (let i = 0; i < a.length; i++) {
    const v = a[i] < 0 ? -a[i] : a[i];
    if (v > m) m = v;
  }
  if (m > 1e-9) {
    const s = peak / m;
    for (let i = 0; i < a.length; i++) a[i] *= s;
  }
  return a;
}

function sat(a, drive) {
  normalize(a, 1);
  const k = 1 / Math.tanh(drive);
  for (let i = 0; i < a.length; i++) a[i] = Math.tanh(a[i] * drive) * k;
  return a;
}

function mixIn(out, src, off, gain = 1) {
  const n = Math.min(src.length, out.length - off);
  for (let i = 0; i < n; i++) out[off + i] += src[i] * gain;
}

// ---------------------------------------------------------------------------
// RBJ biquad (sample-level)
// ---------------------------------------------------------------------------
class BQ {
  constructor(sr) {
    this.sr = sr;
    this.b0 = 1;
    this.b1 = this.b2 = this.a1 = this.a2 = 0;
    this.x1 = this.x2 = this.y1 = this.y2 = 0;
  }
  set(type, f, q = 0.707, gainDb = 0) {
    f = clamp(f, 5, this.sr * 0.48);
    q = Math.max(q, 0.05);
    const w = (TAU * f) / this.sr;
    const cs = Math.cos(w);
    const al = Math.sin(w) / (2 * q);
    let b0, b1, b2, a0, a1, a2;
    if (type === 'lp') {
      b0 = (1 - cs) / 2; b1 = 1 - cs; b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al;
    } else if (type === 'hp') {
      b0 = (1 + cs) / 2; b1 = -(1 + cs); b2 = b0; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al;
    } else if (type === 'bp') {
      b0 = al; b1 = 0; b2 = -al; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al;
    } else {
      // peaking EQ
      const A = Math.pow(10, gainDb / 40);
      b0 = 1 + al * A; b1 = -2 * cs; b2 = 1 - al * A; a0 = 1 + al / A; a1 = -2 * cs; a2 = 1 - al / A;
    }
    this.b0 = b0 / a0; this.b1 = b1 / a0; this.b2 = b2 / a0; this.a1 = a1 / a0; this.a2 = a2 / a0;
    return this;
  }
  run(x) {
    const y = this.b0 * x + this.b1 * this.x1 + this.b2 * this.x2 - this.a1 * this.y1 - this.a2 * this.y2;
    this.x2 = this.x1; this.x1 = x; this.y2 = this.y1; this.y1 = y;
    return y;
  }
}

// Vowel formants (F1..F4, Hz), adult-male reference.
const VOWELS = {
  a: [730, 1090, 2440, 3300],
  ae: [660, 1720, 2410, 3300],
  e: [530, 1840, 2480, 3300],
  i: [300, 2200, 2950, 3500],
  o: [570, 840, 2410, 3300],
  u: [320, 870, 2240, 3300],
  uh: [640, 1190, 2390, 3300],
  oo: [440, 1020, 2240, 3300],
  er: [490, 1350, 1690, 3300],
};
function vowelAt(vt, t) {
  const get = (v) => (typeof v === 'string' ? VOWELS[v] : v);
  if (t <= vt[0][0]) return get(vt[0][1]);
  for (let i = 1; i < vt.length; i++) {
    if (t <= vt[i][0]) {
      const a = get(vt[i - 1][1]);
      const b = get(vt[i][1]);
      const u = (t - vt[i - 1][0]) / Math.max(1e-6, vt[i][0] - vt[i - 1][0]);
      return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, a[3] + (b[3] - a[3]) * u];
    }
  }
  return get(vt[vt.length - 1][1]);
}

// ---------------------------------------------------------------------------
// Sample generator toolkit
// ---------------------------------------------------------------------------
class Gen {
  constructor(sr, seed) {
    this.sr = sr;
    this.rnd = mulberry32(seed);
  }
  r(a = 0, b = 1) { return a + (b - a) * this.rnd(); }
  w() { return this.rnd() * 2 - 1; }
  buf(d) { return new Float32Array(Math.max(1, Math.ceil(d * this.sr))); }

  filt(a, type, freq, q = 0.707, gdb = 0) {
    const bq = new BQ(this.sr);
    const dyn = typeof freq === 'function';
    bq.set(type, dyn ? freq(0) : freq, q, gdb);
    for (let i = 0; i < a.length; i++) {
      if (dyn && (i & 15) === 0) bq.set(type, freq(i / this.sr), q, gdb);
      a[i] = bq.run(a[i]);
    }
    return a;
  }

  // Render fn(t) for `dur` seconds, run through filters, normalize to `peak`
  // and mix into `out` at t0.
  layer(out, t0, dur, fn, filters, peak = 1) {
    const off = Math.round(t0 * this.sr);
    const n = Math.min(Math.ceil(dur * this.sr), out.length - off);
    if (n <= 0) return;
    const tmp = new Float32Array(n);
    for (let i = 0; i < n; i++) tmp[i] = fn(i / this.sr, i);
    if (filters) for (const f of filters) this.filt(tmp, f[0], f[1], f[2], f[3]);
    normalize(tmp, peak);
    mixIn(out, tmp, off);
  }

  oscFn(type, freq, phase = 0) {
    let ph = phase;
    const sr = this.sr;
    const dyn = typeof freq === 'function';
    return (t) => {
      const f = dyn ? freq(t) : freq;
      const dt = f / sr;
      ph += dt;
      if (ph >= 1) ph -= Math.floor(ph);
      switch (type) {
        case 'sine': return Math.sin(TAU * ph);
        case 'saw': return 2 * ph - 1 - polyblep(ph, dt);
        case 'square': return (ph < 0.5 ? 1 : -1) + polyblep(ph, dt) - polyblep((ph + 0.5) % 1, dt);
        default: return 1 - 4 * Math.abs(ph - 0.5); // triangle
      }
    };
  }

  // smoothed random in [-1,1], changing at roughly `rate` Hz
  srand(rate) {
    let v = 0, tg = this.w(), tn = 0;
    const a = 1 - Math.exp((-TAU * rate) / this.sr);
    return (t) => {
      if (t >= tn) { tg = this.w(); tn = t + (0.5 + this.rnd()) / rate; }
      v += (tg - v) * a;
      return v;
    };
  }

  // sparse random impulses (crackle); rate = impulses per second
  crackleFn(rate, env) {
    let v = 0;
    return (t) => {
      const r = typeof rate === 'function' ? rate(t) : rate;
      if (this.rnd() < r / this.sr) v = this.w() * (0.3 + 0.7 * this.rnd());
      else v *= 0.82;
      return v * (env ? env(t) : 1);
    };
  }

  // decaying sinusoidal modes [[f, amp, tau], ...]
  modes(out, t0, list, peak, dur = 0.3) {
    const ph = list.map(() => this.rnd() * TAU);
    this.layer(out, t0, dur, (t) => {
      let s = 0;
      for (let k = 0; k < list.length; k++) {
        const m = list[k];
        s += m[1] * Math.exp(-t / m[2]) * Math.sin(TAU * m[0] * t + ph[k]);
      }
      return s * Math.min(1, t / 0.0004);
    }, null, peak);
  }

  // short noise burst through a filter chain
  burst(out, t0, tau, filters, peak, dur) {
    this.layer(out, t0, dur || tau * 7, (t) => this.w() * Math.exp(-t / tau), filters, peak);
  }

  // decaying sine with pitch sweep (kick/thump)
  thump(out, t0, f0, f1, ftau, atau, peak, dur) {
    const o = this.oscFn('sine', (t) => sweep(t, f0, f1, ftau));
    this.layer(out, t0, dur || atau * 7, (t) => o(t) * Math.exp(-t / atau) * Math.min(1, t / 0.0008), null, peak);
  }

  // water-drop / bubble chirp (rising pitch)
  bubble(out, t0, f0, f1, dur, peak) {
    const o = this.oscFn('sine', (t) => f0 * Math.pow(f1 / f0, Math.min(1, t / dur)));
    this.layer(out, t0, dur * 2, (t) => o(t) * Math.exp(-t / (dur * 0.45)) * Math.min(1, t / 0.002), null, peak);
  }

  // Formant voice: glottal saw (+subharmonic) and aspiration noise through a
  // 4-band parallel formant bank, with jitter, roughness AM and saturation.
  vocal(p) {
    const sr = this.sr;
    const n = Math.ceil(p.dur * sr);
    const out = new Float32Array(n);
    const bands = [new BQ(sr), new BQ(sr), new BQ(sr), new BQ(sr)];
    const BW = [90, 110, 170, 250];
    const bws = p.bw || 1;
    const fsc = p.fscale || 1;
    const bg = p.bandGain || [1, 0.7, 0.42, 0.22];
    const tilt = new BQ(sr).set('lp', p.tilt || 1500, 0.6);
    const jit = this.srand(30), jit2 = this.srand(18);
    const jitAmt = p.jitter == null ? 0.03 : p.jitter;
    const noiseF = typeof p.noise === 'function' ? p.noise : () => (p.noise == null ? 0.15 : p.noise);
    const rough = p.rough;
    const roughD = rough ? (typeof rough.depth === 'function' ? rough.depth : () => rough.depth) : null;
    let ph = 0, pc = 0, rph = 0;
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      if ((i & 31) === 0) {
        const F = vowelAt(p.vowels, t);
        const fs = typeof fsc === 'function' ? fsc(t) : fsc;
        for (let k = 0; k < 4; k++) {
          const fk = F[k] * fs;
          bands[k].set('bp', fk, fk / (BW[k] * bws));
        }
      }
      const f0 = p.f0(t) * (1 + jitAmt * jit(t));
      const dt = f0 / sr;
      ph += dt;
      if (ph >= 1) { ph -= 1; pc++; }
      let v = 2 * ph - 1 - polyblep(ph, dt);
      if (p.sub && pc & 1) v *= 1 - p.sub;
      v = tilt.run(v);
      const na = noiseF(t);
      const nz = this.w() * (ph < 0.5 ? 1 : 0.5);
      const ex = v * (1 - na) * 2 + nz * na * 3;
      let y = 0;
      for (let k = 0; k < 4; k++) y += bands[k].run(ex) * bg[k];
      if (rough) {
        rph += (rough.rate * (1 + 0.35 * jit2(t))) / sr;
        y *= 1 - roughD(t) * (0.5 + 0.5 * Math.sin(TAU * rph));
      }
      out[i] = y * p.env(t);
    }
    normalize(out, 1);
    if (p.drive) sat(out, p.drive);
    return out;
  }
}

function finish(sr, a) {
  // DC block
  let x1 = 0, y1 = 0;
  const R = 1 - (TAU * 18) / sr;
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    const y = x - x1 + R * y1;
    x1 = x; y1 = y;
    a[i] = y;
  }
  const fi = Math.min(a.length, 12);
  for (let i = 0; i < fi; i++) a[i] *= i / fi;
  const fo = Math.min(a.length, Math.round(sr * 0.008));
  for (let i = 0; i < fo; i++) a[a.length - 1 - i] *= i / fo;
  return normalize(a, 0.98);
}

// ---------------------------------------------------------------------------
// Sound effect definitions: name -> { variants, gain, cap, gen(g, k) }
// ---------------------------------------------------------------------------
const SFX = {};
function def(name, variants, gain, gen, cap = 6) {
  SFX[name] = { variants, gain, gen, cap };
}

const envFade = (a, dur, rel) => (t) => Math.min(1, t / a) * clamp((dur - t) / rel, 0, 1);

function gunshot(g, p) {
  const out = g.buf(p.dur);
  const v = g.r(0.92, 1.08);
  g.burst(out, 0, 0.004, [['hp', 2000 * v, 0.7]], 1.0, 0.04);
  g.burst(out, 0, p.barkTau, [['bp', p.bark * v, 0.7]], 1.0, 0.2);
  g.burst(out, 0, p.barkTau * 1.4, [['lp', 2600, 0.7]], 0.7, 0.25);
  g.thump(out, 0, p.th0 * v, p.th1, 0.03, p.thTau, p.thump, 0.3);
  g.layer(out, 0.004, p.dur - 0.004,
    (t) => g.w() * Math.exp(-t / p.tail) * Math.min(1, t / 0.003),
    [['lp', (t) => 350 + 3500 * Math.exp(-t / 0.05), 0.7]], p.tailAmt);
  sat(out, p.drive);
  return out;
}

// metallic mechanical click: modes + noise tick + body
function mclick(g, out, t0, freqs, tau, body, peak) {
  const tmp = g.buf(0.12);
  g.modes(tmp, 0, freqs.map((f, i) => [f * g.r(0.96, 1.04), 1 / (1 + i * 0.5), tau / (1 + i * 0.4)]), 1, 0.12);
  g.burst(tmp, 0, 0.0015, [['hp', 3000, 0.7]], 0.6, 0.012);
  if (body) g.thump(tmp, 0, body * 1.2, body, 0.01, tau * 2.2, 0.55, 0.1);
  normalize(tmp, peak);
  mixIn(out, tmp, Math.round(t0 * g.sr));
}

def('pistol', 3, 1.0, (g) => gunshot(g, { dur: 0.5, bark: 1150, barkTau: 0.028, th0: 230, th1: 80, thTau: 0.04, thump: 0.75, tail: 0.11, tailAmt: 0.4, drive: 2.4 }));

def('chaingun', 3, 0.9, (g) => gunshot(g, { dur: 0.32, bark: 1000, barkTau: 0.024, th0: 210, th1: 72, thTau: 0.035, thump: 0.8, tail: 0.06, tailAmt: 0.32, drive: 2.6 }), 5);

def('shotgun', 3, 1.25, (g) => {
  const out = g.buf(0.85);
  const blast = g.buf(0.44);
  const v = g.r(0.93, 1.07);
  g.burst(blast, 0, 0.005, [['hp', 1500, 0.7]], 1.0, 0.04);
  g.layer(blast, 0, 0.44, (t) => g.w() * Math.exp(-t / 0.075) * Math.min(1, t / 0.001), [['lp', (t) => 500 + 4500 * Math.exp(-t / 0.06), 0.8]], 1.0);
  g.burst(blast, 0, 0.05, [['bp', 950 * v, 0.7]], 1.0, 0.3);
  g.thump(blast, 0, 160 * v, 52, 0.05, 0.11, 0.8, 0.44);
  for (let i = 0; i < 9; i++) g.burst(blast, g.r(0.012, 0.14), 0.003, [['bp', g.r(2500, 5500), 3]], g.r(0.12, 0.3), 0.02);
  g.layer(blast, 0.01, 0.43, (t) => g.w() * Math.exp(-t / 0.2), [['lp', (t) => 280 + 1800 * Math.exp(-t / 0.08), 0.7]], 0.35);
  sat(blast, 2.8);
  const fo = Math.round(0.06 * g.sr);
  for (let i = 0; i < fo; i++) blast[blast.length - 1 - i] *= i / fo;
  mixIn(out, blast, 0);
  // pump: "chk" (slide back) ... "chk" (forward, heavier)
  const pt = 0.45 + g.r(-0.02, 0.02);
  mclick(g, out, pt, [1150, 2650, 4100, 6300], 0.012, 280, 0.32);
  g.layer(out, pt + 0.012, 0.09, (t) => g.w() * Math.sin(Math.PI * clamp(t / 0.09, 0, 1)), [['bp', 1900, 2]], 0.06);
  mclick(g, out, pt + 0.15, [900, 2200, 3700, 5200], 0.015, 220, 0.42);
  return out;
});

def('punch', 2, 0.55, (g) => {
  const out = g.buf(0.3);
  const fv = g.r(0.85, 1.15);
  const env = (t) => (t < 0.07 ? Math.sin((Math.PI / 2) * (t / 0.07)) ** 2 : Math.exp(-(t - 0.07) / 0.05));
  g.layer(out, 0, 0.3, (t) => g.w() * env(t), [['bp', (t) => fv * (450 + 1500 * Math.sin(Math.PI * clamp(t / 0.22, 0, 1))), 1.3]], 1);
  g.layer(out, 0, 0.3, (t) => g.w() * env(t), [['lp', 350, 0.7]], 0.4);
  return out;
});

def('punch_hit', 3, 1.0, (g) => {
  const out = g.buf(0.35);
  g.thump(out, 0, 125 * g.r(0.9, 1.1), 45, 0.03, 0.07, 1.0, 0.35);
  g.burst(out, 0, 0.03, [['lp', 1600, 0.7]], 0.8, 0.18);
  g.burst(out, 0, 0.01, [['bp', 1500, 0.8]], 0.7, 0.06);
  g.layer(out, 0.005, 0.2, (t) => g.w() * Math.exp(-t / 0.04), [['bp', (t) => sweep(t, 750, 250, 0.05), 4]], 0.35);
  sat(out, 2);
  return out;
});

function doorSound(g, close) {
  const dur = close ? 1.35 : 1.15;
  const mEnd = close ? 1.03 : 1.15;
  const out = g.buf(dur);
  const pv = g.r(0.94, 1.06);
  const env = (t) => clamp(t / 0.07, 0, 1) * clamp((mEnd - t) / 0.14, 0, 1);
  const fm = (t) => pv * (close ? sweep(t, 47, 60, 0.15) - 8 * Math.max(0, t - 0.7) : sweep(t, 43, 62, 0.22)) * (1 + 0.02 * Math.sin(TAU * 3.1 * t));
  const s1 = g.oscFn('saw', fm), s2 = g.oscFn('saw', (t) => fm(t) * 2.02);
  const gear = (t) => 0.55 + 0.45 * Math.pow(Math.abs(Math.sin(Math.PI * 21 * pv * t)), 3);
  g.layer(out, 0, mEnd, (t) => (s1(t) + 0.5 * s2(t)) * gear(t) * env(t), [['lp', 650, 1.8], ['hp', 38, 0.7]], 0.75);
  g.layer(out, 0, mEnd, (t) => g.w() * Math.pow(Math.abs(Math.sin(Math.PI * 17 * pv * t)), 6) * env(t), [['bp', 520, 2.5]], 0.45);
  const hs = g.srand(4);
  g.layer(out, 0, mEnd, (t) => g.w() * env(t) * (0.65 + 0.35 * hs(t)), [['hp', 2600, 0.7], ['lp', 7000, 0.7]], 0.1);
  const wh = g.oscFn('sine', (t) => fm(t) * 8.03);
  g.layer(out, 0, mEnd, (t) => wh(t) * env(t), null, 0.09);
  const sc = g.srand(9);
  g.layer(out, 0, mEnd, (t) => g.w() * env(t) * Math.max(0, sc(t)), [['bp', 1730, 14]], 0.1);
  if (!close) {
    mclick(g, out, 0, [180, 430, 980, 1650], 0.05, 90, 0.5);
  } else {
    const c = g.buf(0.4);
    g.thump(c, 0, 95, 40, 0.03, 0.09, 1.0, 0.4);
    g.modes(c, 0, [[210, 0.7, 0.12], [505, 0.5, 0.09], [870, 0.35, 0.07], [1420, 0.25, 0.05], [2300, 0.15, 0.03]], 0.7, 0.4);
    g.burst(c, 0, 0.02, [['lp', 2000, 0.7]], 0.6, 0.12);
    sat(c, 1.5);
    mixIn(out, c, Math.round((mEnd - 0.02) * g.sr), 1.3);
  }
  return out;
}
def('door_open', 2, 0.9, (g) => doorSound(g, false), 3);
def('door_close', 2, 0.9, (g) => doorSound(g, true), 3);

def('lift_start', 2, 0.75, (g) => {
  const out = g.buf(1.2);
  const pv = g.r(0.95, 1.05);
  const c = g.buf(0.3);
  g.thump(c, 0, 80, 40, 0.03, 0.06, 1, 0.3);
  g.modes(c, 0, [[150, 1, 0.08], [350, 0.6, 0.06], [720, 0.4, 0.04]], 0.7, 0.3);
  sat(c, 1.4);
  mixIn(out, c, 0, 0.8);
  const env = (t) => clamp(t / 0.15, 0, 1) * clamp((1.18 - t) / 0.15, 0, 1);
  const fm = (t) => pv * sweep(t, 30, 55, 0.12);
  const s1 = g.oscFn('saw', fm), s2 = g.oscFn('saw', (t) => fm(t) * 2.01), s3 = g.oscFn('sine', (t) => fm(t) * 3);
  const trem = (t) => 0.8 + 0.2 * Math.sin(TAU * 7 * t);
  g.layer(out, 0.02, 1.18, (t) => (s1(t) + 0.4 * s2(t) + 0.3 * s3(t)) * env(t) * trem(t), [['lp', 520, 1.5]], 0.6);
  const h1 = g.oscFn('sine', 110 * pv), h2 = g.oscFn('sine', 220 * pv);
  g.layer(out, 0.02, 1.18, (t) => (h1(t) + 0.5 * h2(t)) * env(t) * (0.7 + 0.3 * Math.sin(TAU * 6 * t)), null, 0.18);
  const wh = g.oscFn('sine', (t) => fm(t) * 9);
  g.layer(out, 0.02, 1.18, (t) => wh(t) * env(t), null, 0.05);
  const fl = g.srand(25);
  g.layer(out, 0.02, 1.18, (t) => g.w() * env(t) * (0.5 + 0.5 * fl(t)), [['bp', 900, 3]], 0.12);
  return out;
}, 3);

def('lift_stop', 2, 0.85, (g) => {
  const out = g.buf(0.6);
  const wd = g.oscFn('saw', (t) => sweep(t, 50, 24, 0.08));
  g.layer(out, 0, 0.18, (t) => wd(t) * Math.exp(-t / 0.05), [['lp', 400, 1]], 0.25);
  g.thump(out, 0.01, 70 * g.r(0.92, 1.08), 32, 0.04, 0.12, 1.0, 0.59);
  g.modes(out, 0.01, [[120, 1, 0.15], [290, 0.8, 0.12], [610, 0.7, 0.08], [1100, 0.5, 0.05], [1900, 0.35, 0.03]], 0.8, 0.55);
  g.burst(out, 0.01, 0.03, [['lp', 1200, 0.7]], 0.5, 0.2);
  sat(out, 1.6);
  return out;
}, 3);

def('switch', 2, 0.8, (g) => {
  const out = g.buf(0.26);
  mclick(g, out, 0, [2100, 3500, 5600], 0.004, 650, 0.6);
  mclick(g, out, g.r(0.065, 0.09), [1400, 2600, 4300], 0.008, 420, 1.0);
  return out;
}, 3);

function grunt(g, p) {
  return g.vocal({
    dur: p.dur,
    f0: traj(p.f0),
    vowels: p.vowels,
    noise: p.noise || 0.12,
    sub: p.sub || 0.1,
    drive: p.drive || 1.8,
    rough: p.rough,
    fscale: p.fscale || 1,
    jitter: 0.025,
    env: p.env,
  });
}

def('noway', 2, 0.6, (g) => {
  const fv = g.r(0.92, 1.08);
  const dur = 0.34;
  const out = grunt(g, {
    dur,
    f0: [[0, 135 * fv], [0.06, 125 * fv], [0.3, 92 * fv]],
    vowels: [[0, 'uh'], [0.12, 'uh'], [0.3, 'u']],
    env: (t) => Math.min(1, t / 0.015) * Math.exp(-Math.max(0, t - 0.04) / 0.1) * clamp((dur - t) / 0.06, 0, 1),
  });
  g.burst(out, 0, 0.02, [['hp', 1000, 0.7]], 0.15, 0.06);
  g.layer(out, 0.17, 0.16, (t) => g.w() * Math.sin(Math.PI * clamp(t / 0.16, 0, 1)), [['hp', 1500, 0.7], ['lp', 6000, 0.7]], 0.12);
  return out;
}, 2);

def('item_pickup', 2, 0.42, (g) => {
  const out = g.buf(0.2);
  const pv = g.r(0.97, 1.03);
  for (const [t0, f, len] of [[0, 1047, 0.06], [0.045, 1568, 0.15]]) {
    const sq = g.oscFn('square', f * pv), sn = g.oscFn('sine', f * pv * 2);
    g.layer(out, t0, len, (t) => (sq(t) * 0.6 + sn(t) * 0.3) * Math.exp(-t / 0.045) * Math.min(1, t / 0.002), [['lp', 5000, 0.7]], t0 ? 0.9 : 0.7);
  }
  return out;
}, 4);

def('weapon_pickup', 2, 0.6, (g) => {
  const out = g.buf(0.65);
  mclick(g, out, 0, [320, 780, 1350, 2400], 0.04, 140, 0.8);
  g.burst(out, 0, 0.015, [['bp', 1500, 1]], 0.3, 0.08);
  mclick(g, out, 0.12, [1850, 2950, 4700, 6200], 0.06, 0, 0.65);
  for (const [t0, f] of [[0.24, 523.25], [0.32, 783.99]]) {
    const sq = g.oscFn('square', f), sw = g.oscFn('saw', f * 1.003);
    g.layer(out, t0, 0.3, (t) => (sq(t) + sw(t)) * Math.min(1, t / 0.003) * Math.exp(-t / 0.07), [['lp', 2600, 0.8]], 0.4);
  }
  return out;
}, 3);

def('powerup', 1, 0.5, (g) => {
  const dur = 1.3;
  const out = g.buf(dur);
  const fq = (t) => 300 * Math.pow(4, Math.min(t, 1.0));
  const o1 = g.oscFn('tri', fq), o2 = g.oscFn('tri', (t) => fq(t) * 1.007), o3 = g.oscFn('sine', (t) => fq(t) * 0.993), o4 = g.oscFn('sine', (t) => fq(t) * 2);
  const env = (t) => Math.min(1, t / 0.1) * clamp((dur - t) / 0.3, 0, 1);
  g.layer(out, 0, dur, (t) => (o1(t) + o2(t) + o3(t) + 0.3 * o4(t)) * env(t) * (0.6 + 0.4 * Math.sin(TAU * 14 * t)), null, 0.8);
  for (let t0 = 0.05; t0 < 1.1; t0 += g.r(0.03, 0.06)) {
    const f = g.r(2000, 5000) * (0.6 + t0 * 0.5);
    const s = g.oscFn('sine', f);
    g.layer(out, t0, 0.1, (t) => s(t) * Math.exp(-t / 0.025), null, 0.08 + 0.25 * (t0 / 1.1));
  }
  return out;
}, 2);

function fmBell(g, out, t0, f, peak, len = 1.6) {
  const m = g.oscFn('sine', f * 1.41);
  const pp = g.oscFn('sine', f * 2.76);
  let ph = 0;
  g.layer(out, t0, len, (t) => {
    const I = 2.2 * Math.exp(-t / 0.35);
    ph += f / g.sr;
    return (Math.sin(TAU * ph + I * m(t)) + 0.25 * pp(t) * Math.exp(-t / 0.3)) * Math.exp(-t / 0.85) * Math.min(1, t / 0.002);
  }, null, peak);
}
def('secret', 1, 0.55, (g) => {
  const dur = 2.2;
  const out = g.buf(dur);
  fmBell(g, out, 0, 659.26, 0.8, 2.2);
  fmBell(g, out, 0.18, 932.33, 0.7, 2.0);
  fmBell(g, out, 0.36, 1244.5, 0.75, 1.84);
  const p1 = g.oscFn('saw', 82.41), p2 = g.oscFn('saw', 123.47 * 1.002), p3 = g.oscFn('saw', 164.81 * 0.998);
  const env = (t) => Math.sin(Math.PI * clamp(t / dur, 0, 1)) ** 1.5;
  g.layer(out, 0, dur, (t) => (p1(t) + p2(t) + p3(t)) * env(t), [['lp', 420, 0.9]], 0.35);
  g.layer(out, 0.2, 2.0, (t) => g.w() * Math.sin(Math.PI * clamp(t / 2.0, 0, 1)) ** 2, [['bp', 3200, 8]], 0.12);
  return out;
}, 1);

def('player_pain', 3, 0.48, (g) => {
  const fv = g.r(0.9, 1.1);
  const dur = 0.4 * g.r(0.9, 1.1);
  return grunt(g, {
    dur,
    f0: [[0, 150 * fv], [0.05, 178 * fv], [dur, 118 * fv]],
    vowels: [[0, 'uh'], [0.1, ['a', 'ae', 'uh'][Math.floor(g.r(0, 2.99))]], [dur, 'uh']],
    noise: 0.18, sub: 0.15, drive: 2.5, rough: { rate: 40, depth: 0.25 },
    env: (t) => Math.min(1, t / 0.008) * Math.exp(-Math.max(0, t - 0.08) / 0.1) * clamp((dur - t) / 0.05, 0, 1),
  });
}, 2);

def('player_death', 2, 0.4, (g) => {
  const fv = g.r(0.92, 1.08);
  const dur = 1.4;
  const out = g.vocal({
    dur,
    f0: (t) => lerpTraj([[0, 255 * fv], [0.15, 340 * fv], [0.4, 320 * fv], [0.9, 200 * fv], [1.4, 105 * fv]], t) * (1 + 0.03 * Math.sin(TAU * 6 * t) * Math.min(1, t / 0.4)),
    vowels: [[0, 'ae'], [0.2, 'a'], [0.8, 'a'], [1.2, 'o'], [1.4, 'uh']],
    fscale: 1.05, noise: (t) => 0.15 + 0.25 * (t / dur), sub: 0.2, drive: 3,
    rough: { rate: 30, depth: (t) => 0.1 + 0.3 * (t / dur) }, jitter: 0.04,
    env: (t) => Math.min(1, t / 0.03) * (t < 0.9 ? 1 : Math.pow(clamp((dur - t) / 0.5, 0, 1), 1.5)),
  });
  g.filt(out, 'lp', 7000, 0.7);
  return out;
}, 2);

def('player_land', 2, 0.8, (g) => {
  const out = g.buf(0.36);
  g.thump(out, 0, 85, 38, 0.03, 0.06, 1.0, 0.36);
  g.burst(out, 0, 0.03, [['lp', 600, 0.7]], 0.6, 0.2);
  const v = grunt(g, {
    dur: 0.2, f0: [[0, 120], [0.2, 95]], vowels: [[0, 'uh'], [0.2, 'u']], drive: 1.6,
    env: (t) => Math.min(1, t / 0.01) * clamp((0.2 - t) / 0.08, 0, 1),
  });
  mixIn(out, v, Math.round(0.02 * g.sr), 0.45);
  return out;
}, 2);

// ---- monsters -------------------------------------------------------------
function throat(g, out, peak, f = 400, rate = 30) {
  const sr = g.srand(rate);
  const len = out.length / g.sr;
  g.layer(out, 0, len, (t) => g.w() * (0.5 + 0.5 * sr(t)) * Math.min(1, t / 0.05) * clamp((len - t) / 0.2, 0, 1), [['bp', f, 1]], peak);
}

def('zombie_sight', 3, 0.65, (g, k) => {
  const fv = g.r(0.88, 1.12), ts = g.r(0.88, 1.12), dur = 0.8 * ts;
  const vs = [['o', 'a', 'uh'], ['er', 'a', 'o'], ['uh', 'ae', 'o']][k % 3];
  const out = g.vocal({
    dur,
    f0: traj([[0, 78 * fv], [0.15 * ts, 108 * fv], [0.45 * ts, 96 * fv], [dur, 62 * fv]]),
    vowels: [[0, vs[0]], [0.2 * ts, vs[1]], [0.55 * ts, vs[1]], [dur, vs[2]]],
    fscale: 0.82 * g.r(0.95, 1.05), bw: 1.6, noise: 0.3, rough: { rate: g.r(28, 40), depth: 0.55 }, sub: 0.35, drive: 4.5, jitter: 0.05,
    env: envFade(0.07, dur, 0.25),
  });
  throat(g, out, 0.25, 380);
  g.filt(out, 'peak', 180, 1, 4);
  g.filt(out, 'lp', 5500, 0.7);
  return out;
}, 3);

def('zombie_active', 3, 0.6, (g, k) => {
  const fv = g.r(0.9, 1.1), dur = 0.8 * g.r(0.9, 1.1);
  const vs = [['u', 'uh', 'o'], ['o', 'er', 'u'], ['oo', 'uh', 'o']][k % 3];
  const out = g.vocal({
    dur,
    f0: traj([[0, 62 * fv], [dur * 0.5, 71 * fv], [dur, 56 * fv]]),
    vowels: [[0, vs[0]], [dur * 0.5, vs[1]], [dur, vs[2]]],
    fscale: 0.8, bw: 1.5, noise: 0.35, rough: { rate: g.r(11, 16), depth: 0.8 }, sub: 0.4, drive: 3, jitter: 0.06,
    env: (t) => Math.pow(Math.sin(Math.PI * clamp(t / dur, 0, 1)), 0.7),
  });
  for (let i = 0; i < 6; i++) g.bubble(out, g.r(0.05, dur - 0.1), g.r(160, 240), g.r(420, 650), g.r(0.02, 0.035), g.r(0.12, 0.25));
  g.filt(out, 'peak', 160, 1, 3);
  g.filt(out, 'lp', 5000, 0.7);
  return out;
}, 3);

def('zombie_pain', 3, 0.45, (g) => {
  const fv = g.r(0.9, 1.12), dur = 0.35 * g.r(0.9, 1.1);
  return g.vocal({
    dur,
    f0: traj([[0, 150 * fv], [0.04, 192 * fv], [dur, 118 * fv]]),
    vowels: [[0, 'e'], [0.1, 'a'], [dur, 'uh']],
    fscale: 0.88, bw: 1.4, noise: 0.25, rough: { rate: 40, depth: 0.4 }, sub: 0.25, drive: 4,
    env: (t) => Math.min(1, t / 0.006) * Math.exp(-Math.max(0, t - 0.05) / 0.1) * clamp((dur - t) / 0.05, 0, 1),
  });
}, 3);

def('zombie_death', 3, 0.5, (g, k) => {
  const fv = g.r(0.9, 1.1), dur = 1.0 * g.r(0.92, 1.08);
  const out = g.vocal({
    dur,
    f0: traj([[0, 190 * fv], [0.1, 172 * fv], [0.6 * dur, 95 * fv], [dur, 52 * fv]]),
    vowels: [[0, k === 1 ? 'ae' : 'a'], [0.3 * dur, 'a'], [0.7 * dur, 'o'], [dur, 'u']],
    fscale: 0.85, bw: 1.5, noise: (t) => 0.2 + 0.3 * (t / dur), sub: 0.3, drive: 4, jitter: 0.05,
    rough: { rate: 30, depth: (t) => 0.2 + 0.6 * (t / dur) },
    env: (t) => Math.min(1, t / 0.02) * (t < 0.55 * dur ? 1 : clamp((dur - t) / (0.45 * dur), 0, 1)),
  });
  for (let i = 0; i < 4; i++) g.bubble(out, g.r(0.6, 0.9) * dur, g.r(150, 220), g.r(380, 560), 0.03, 0.15);
  g.filt(out, 'lp', 5500, 0.7);
  return out;
}, 3);

function screech(g, out, f0, f1, peak) {
  const len = out.length / g.sr;
  const sr = g.srand(50);
  g.layer(out, 0, len, (t) => g.w() * (0.4 + 0.6 * Math.abs(sr(t))) * Math.min(1, t / 0.03) * clamp((len - t) / 0.25, 0, 1),
    [['bp', (t) => f0 + (f1 - f0) * (t / len), 6]], peak);
}

def('imp_sight', 3, 0.5, (g, k) => {
  const fv = g.r(0.9, 1.1), ts = g.r(0.9, 1.1), dur = 0.82 * ts;
  const vs = [['i', 'ae', 'o'], ['e', 'a', 'uh'], ['ae', 'a', 'o']][k % 3];
  const out = g.vocal({
    dur,
    f0: traj([[0, 210 * fv], [0.1 * ts, 290 * fv], [0.4 * ts, 262 * fv], [dur, 168 * fv]]),
    vowels: [[0, vs[0]], [0.1 * ts, vs[1]], [0.45 * ts, 'a'], [dur, vs[2]]],
    fscale: 1.12, bw: 2, noise: 0.55, rough: { rate: g.r(48, 62), depth: 0.5 }, sub: 0.3, drive: 5, jitter: 0.05,
    env: envFade(0.03, dur, 0.25),
  });
  screech(g, out, 2600 * fv, 2200 * fv, 0.3);
  g.filt(out, 'hp', 120, 0.7);
  g.filt(out, 'lp', 8000, 0.7);
  return out;
}, 3);

def('imp_active', 3, 0.45, (g) => {
  const dur = 0.75 * g.r(0.9, 1.1);
  const b1 = 0.45 * dur;
  const env = (t) => (t < b1 ? Math.sin(Math.PI * t / b1) : t > b1 + 0.03 ? 0.85 * Math.sin(Math.PI * clamp((t - b1 - 0.03) / (dur - b1 - 0.03), 0, 1)) : 0);
  const out = g.vocal({
    dur,
    f0: (t) => 95 * (1 + 0.1 * Math.sin(TAU * 1.3 * t)),
    vowels: [[0, 'a'], [b1, 'o'], [b1 + 0.03, 'ae'], [dur, 'uh']],
    fscale: 1.05, bw: 2, noise: 0.75, rough: { rate: 22, depth: 0.6 }, sub: 0.3, drive: 3.5, jitter: 0.06,
    env,
  });
  g.filt(out, 'hp', 100, 0.7);
  return out;
}, 3);

def('imp_pain', 3, 0.38, (g) => {
  const fv = g.r(0.9, 1.1), dur = 0.35 * g.r(0.9, 1.1);
  return g.vocal({
    dur,
    f0: traj([[0, 280 * fv], [0.05, 385 * fv], [dur, 240 * fv]]),
    vowels: [[0, 'ae'], [0.15, 'a'], [dur, 'uh']],
    fscale: 1.15, bw: 1.8, noise: 0.45, rough: { rate: 50, depth: 0.4 }, sub: 0.2, drive: 5,
    env: (t) => Math.min(1, t / 0.005) * Math.exp(-Math.max(0, t - 0.04) / 0.09) * clamp((dur - t) / 0.05, 0, 1),
  });
}, 3);

def('imp_death', 3, 0.5, (g) => {
  const fv = g.r(0.9, 1.1), dur = 1.0 * g.r(0.92, 1.08);
  const out = g.vocal({
    dur,
    f0: traj([[0, 380 * fv], [0.1, 420 * fv], [0.5 * dur, 230 * fv], [dur, 108 * fv]]),
    vowels: [[0, 'i'], [0.1, 'ae'], [0.4 * dur, 'a'], [0.9 * dur, 'o']],
    fscale: (t) => 1.25 - 0.3 * (t / dur), bw: 1.8, noise: 0.5, sub: 0.25, drive: 5, jitter: 0.05,
    rough: { rate: 45, depth: (t) => 0.3 + 0.4 * (t / dur) },
    env: (t) => Math.min(1, t / 0.02) * (t < 0.5 * dur ? 1 : clamp((dur - t) / (0.5 * dur), 0, 1)),
  });
  screech(g, out, 3200 * fv, 1500 * fv, 0.3);
  g.filt(out, 'hp', 110, 0.7);
  return out;
}, 3);

def('imp_claw', 3, 0.7, (g) => {
  const out = g.buf(0.3);
  const fv = g.r(0.85, 1.15);
  const env = (t) => (t < 0.04 ? t / 0.04 : Math.exp(-(t - 0.04) / 0.05));
  g.layer(out, 0, 0.3, (t) => g.w() * env(t), [['bp', (t) => fv * (t < 0.07 ? 700 + 2500 * (t / 0.07) : 1200 + 2000 * Math.exp(-(t - 0.07) / 0.05)), 1.5]], 1);
  g.burst(out, 0.04, 0.03, [['hp', 5000, 0.7]], 0.3, 0.15);
  g.burst(out, 0.03, 0.03, [['lp', 300, 0.7]], 0.2, 0.15);
  return out;
}, 3);

def('fireball_launch', 3, 0.6, (g) => {
  const dur = 0.65;
  const out = g.buf(dur);
  const fv = g.r(0.85, 1.15);
  const bump = (t) => Math.sin(Math.PI * clamp(t / 0.35, 0, 1));
  const env = (t) => (t < 0.08 ? Math.sin((Math.PI / 2) * (t / 0.08)) : Math.exp(-(t - 0.08) / 0.18));
  g.layer(out, 0, dur, (t) => g.w() * env(t), [['lp', (t) => fv * (400 + 2600 * bump(t)), 0.9]], 1);
  g.layer(out, 0, dur, g.crackleFn(140, env), [['bp', 3000, 0.8]], 0.35);
  let br = 0;
  g.layer(out, 0, dur, (t) => ((br = br * 0.995 + g.w() * 0.05), br * env(t)), [['lp', 250, 0.7]], 0.5);
  g.layer(out, 0, dur, (t) => g.w() * env(t), [['bp', (t) => fv * (900 + 1100 * bump(t)), 3]], 0.3);
  sat(out, 1.5);
  return out;
}, 4);

def('fireball_explode', 3, 0.8, (g) => {
  const dur = 0.9;
  const out = g.buf(dur);
  g.thump(out, 0, 160, 50, 0.02, 0.05, 0.7, 0.4);
  g.layer(out, 0, dur, (t) => g.w() * Math.exp(-t / 0.12), [['lp', (t) => 800 + 5200 * Math.exp(-t / 0.08), 0.7]], 1.0);
  g.layer(out, 0, dur, g.crackleFn((t) => 400 * Math.exp(-t / 0.3), (t) => Math.exp(-t / 0.25)), [['hp', 2000, 0.7]], 0.6);
  let sh = 0;
  g.layer(out, 0, dur, (t, i) => ((i % 160 === 0 ? (sh = g.rnd()) : 0), g.w() * sh * Math.exp(-t / 0.3)), [['hp', 4500, 0.7]], 0.35);
  sat(out, 1.8);
  return out;
}, 4);

def('barrel_explode', 2, 1.3, (g) => {
  const dur = 1.9;
  const out = g.buf(dur);
  g.burst(out, 0, 0.006, [['hp', 1200, 0.7]], 0.8, 0.05);
  g.layer(out, 0, dur, (t) => g.w() * Math.min(1, t / 0.002) * Math.exp(-t / 0.3), [['lp', (t) => 300 + 5000 * Math.exp(-t / 0.12), 0.7]], 1.0);
  g.burst(out, 0, 0.06, [['bp', 700, 0.6]], 0.6, 0.4);
  g.thump(out, 0, 90 * g.r(0.92, 1.08), 32, 0.12, 0.35, 0.85, dur);
  let br = 0;
  const am = g.srand(8);
  g.layer(out, 0, dur, (t) => ((br = br * 0.998 + g.w() * 0.04), br * (0.6 + 0.4 * am(t)) * Math.min(1, t / 0.05) * Math.exp(-t / 0.6)), [['lp', 180, 0.7]], 0.55);
  g.layer(out, 0.05, 0.85, g.crackleFn(90, (t) => Math.exp(-t / 0.4)), [['bp', 2500, 1]], 0.35);
  sat(out, 2.6);
  return out;
}, 4);

def('gib', 3, 0.7, (g) => {
  const out = g.buf(0.65);
  g.thump(out, 0, 100, 45, 0.03, 0.05, 0.5, 0.3);
  for (let i = 0; i < 7; i++) {
    const t0 = i === 0 ? 0 : g.r(0, 0.35);
    const f0 = g.r(1100, 1700);
    g.layer(out, t0, 0.12, (t) => g.w() * Math.exp(-t / 0.03), [['lp', (t) => sweep(t, f0, 250, 0.03), 6]], g.r(0.4, 1));
    g.burst(out, t0, 0.01, [['bp', 1200, 0.8]], 0.4, 0.05);
  }
  for (let i = 0; i < 3; i++) g.bubble(out, g.r(0.35, 0.55), g.r(280, 340), g.r(700, 900), 0.015, 0.2);
  sat(out, 1.5);
  return out;
}, 4);

def('slime_burn', 2, 0.5, (g) => {
  const dur = 0.55;
  const out = g.buf(dur);
  const env = (t) => Math.min(1, t / 0.02) * (t < 0.25 ? 1 : Math.exp(-(t - 0.25) / 0.12));
  let sh = 0;
  g.layer(out, 0, dur, (t, i) => ((i % 800 === 0 ? (sh = 0.4 + 0.6 * g.rnd()) : 0), g.w() * sh * env(t)), [['hp', 2500, 0.7], ['lp', 9000, 0.7]], 1);
  g.layer(out, 0, dur, g.crackleFn(80, env), [['hp', 3000, 0.7]], 0.4);
  for (let i = 0; i < 3; i++) g.bubble(out, g.r(0.02, 0.35), g.r(180, 240), g.r(500, 650), 0.03, 0.3);
  g.layer(out, 0, dur, (t) => g.w() * env(t), [['lp', 400, 0.7]], 0.2);
  return out;
}, 2);

def('weapon_switch', 2, 0.6, (g) => {
  const out = g.buf(0.28);
  mclick(g, out, 0, [1700, 3100, 5200], 0.01, 500, 0.7);
  g.layer(out, 0.02, 0.1, (t) => g.w() * Math.sin(Math.PI * clamp(t / 0.1, 0, 1)), [['bp', 3000, 2]], 0.18);
  mclick(g, out, g.r(0.1, 0.12), [1200, 2300, 3900], 0.014, 600, 1.0);
  return out;
}, 2);

def('bullet_hit', 4, 0.35, (g, k) => {
  const ric = k >= 2;
  const out = g.buf(ric ? 0.2 : 0.12);
  g.burst(out, 0, 0.002, [['hp', 2500, 0.7]], 1, 0.02);
  g.modes(out, 0, [[2300 * g.r(0.8, 1.2), 1, 0.012], [3700 * g.r(0.8, 1.2), 0.7, 0.008], [5100 * g.r(0.8, 1.2), 0.5, 0.005]], 0.5, 0.08);
  g.burst(out, 0, 0.02, [['lp', 1500, 0.7]], 0.3, 0.1);
  if (ric) {
    const f0 = g.r(3400, 4200), f1 = f0 * g.r(0.55, 0.7);
    const o = g.oscFn('sine', (t) => (f0 + (f1 - f0) * (t / 0.15)) * (1 + 0.01 * Math.sin(TAU * 40 * t)));
    g.layer(out, 0.005, 0.19, (t) => o(t) * Math.min(1, t / 0.005) * Math.exp(-t / 0.05), null, 0.25);
  }
  return out;
}, 8);

const SFX_ORDER = [
  'pistol', 'shotgun', 'chaingun', 'punch', 'punch_hit', 'bullet_hit', 'weapon_switch', 'item_pickup', 'weapon_pickup',
  'zombie_sight', 'zombie_pain', 'zombie_death', 'imp_sight', 'imp_pain', 'imp_death', 'imp_claw', 'fireball_launch',
  'fireball_explode', 'barrel_explode', 'player_pain', 'door_open', 'door_close', 'switch', 'noway', 'lift_start',
  'lift_stop', 'zombie_active', 'imp_active', 'gib', 'player_death', 'player_land', 'slime_burn', 'powerup', 'secret',
];

// ---------------------------------------------------------------------------
// Drum / one-shot buffers for the music (generated synchronously, small)
// ---------------------------------------------------------------------------
const HAT_FREQS = [205.3, 304.4, 369.6, 522.7, 540.0, 800.0];
function metalFn(g, mul) {
  const os = HAT_FREQS.map((f) => g.oscFn('square', f * mul, g.rnd()));
  return () => {
    let s = 0;
    for (const o of os) s += o(0);
    return s;
  };
}
function genDrums(sr) {
  const g = new Gen(sr, 777);
  const D = {};
  let b;
  b = g.buf(0.45);
  g.thump(b, 0, 165, 50, 0.03, 0.12, 1.0, 0.45);
  g.burst(b, 0, 0.003, [['bp', 3500, 0.8]], 0.6, 0.025);
  g.thump(b, 0, 1200, 600, 0.004, 0.004, 0.25, 0.02);
  sat(b, 1.6);
  D.kick = finish(sr, b);

  b = g.buf(0.35);
  g.thump(b, 0, 200, 182, 0.02, 0.05, 0.6, 0.3);
  g.thump(b, 0, 345, 325, 0.02, 0.035, 0.35, 0.25);
  g.burst(b, 0, 0.11, [['hp', 1200, 0.7], ['lp', 9000, 0.7]], 1.0, 0.35);
  g.burst(b, 0, 0.004, [['bp', 4000, 1]], 0.3, 0.03);
  sat(b, 1.8);
  D.snare = finish(sr, b);

  for (const [name, tau, len] of [['hatC', 0.022, 0.09], ['hatO', 0.15, 0.45]]) {
    b = g.buf(len);
    const m = metalFn(g, 1);
    g.layer(b, 0, len, (t) => m() * Math.exp(-t / tau) * Math.min(1, t / 0.0005), [['bp', 10000, 0.8], ['hp', 7000, 0.7]], 1);
    g.burst(b, 0, tau * 0.7, [['hp', 8000, 0.7]], 0.4, len);
    D[name] = finish(sr, b);
  }

  b = g.buf(2.2);
  const m2 = metalFn(g, 1.37);
  g.layer(b, 0, 2.2, (t) => (m2() * 0.7 + g.w()) * (0.65 * Math.exp(-t / 0.7) + 0.35 * Math.exp(-t / 0.05)) * Math.min(1, t / 0.001), [['hp', 4000, 0.7], ['lp', 12000, 0.7]], 1);
  g.burst(b, 0, 0.02, [['bp', 2500, 0.8]], 0.3, 0.1);
  D.crash = finish(sr, b);

  for (const [name, f0, f1] of [['tomH', 155, 108], ['tomL', 108, 74]]) {
    b = g.buf(0.55);
    g.thump(b, 0, f0, f1, 0.08, 0.18, 1, 0.55);
    g.burst(b, 0, 0.01, [['lp', 2000, 0.7]], 0.4, 0.06);
    sat(b, 1.4);
    D[name] = finish(sr, b);
  }

  b = g.buf(0.15);
  g.modes(b, 0, [[1700, 1, 0.02], [520, 0.8, 0.03]], 1, 0.15);
  g.burst(b, 0, 0.008, [['bp', 2500, 1]], 0.6, 0.05);
  D.rim = finish(sr, b);

  b = g.buf(3.0);
  g.thump(b, 0, 58, 27, 0.2, 0.8, 1, 3.0);
  let br = 0;
  g.layer(b, 0, 3.0, (t) => ((br = br * 0.998 + g.w() * 0.04), br * Math.exp(-t / 1.0) * Math.min(1, t / 0.01)), [['lp', 130, 0.7]], 0.6);
  g.burst(b, 0, 0.03, [['lp', 800, 0.7]], 0.5, 0.2);
  sat(b, 1.3);
  D.boom = finish(sr, b);
  return D;
}

function makeIR(ctx) {
  const sr = ctx.sampleRate;
  const dur = 1.5, tau = 0.16;
  const n = Math.ceil(dur * sr);
  const buf = ctx.createBuffer(2, n, sr);
  for (let ch = 0; ch < 2; ch++) {
    const g = new Gen(sr, 4242 + ch * 101);
    const d = new Float32Array(n);
    for (let k = 0; k < 12; k++) {
      const tt = 0.004 + g.r(0, 0.055);
      d[Math.floor(tt * sr)] += g.w() * 0.7 * Math.exp(-tt / 0.04);
    }
    let lp = 0;
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const a = 0.2 + 0.7 * Math.exp(-t / 0.3);
      const x = g.w() * Math.exp(-t / tau) * clamp((t - 0.006) / 0.012, 0, 1);
      lp += a * (x - lp);
      d[i] += lp * 0.8;
    }
    const fo = Math.round(0.1 * sr);
    for (let i = 0; i < fo; i++) d[n - 1 - i] *= i / fo;
    buf.copyToChannel(d, ch);
  }
  return buf;
}

function distCurve(k, bias = 0, n = 4096) {
  const c = new Float32Array(n);
  const off = Math.tanh(bias);
  const norm = Math.tanh(k + bias) - off;
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    c[i] = (Math.tanh(k * x + bias) - off) / norm;
  }
  return c;
}

function softClipCurve(n = 8192) {
  // input domain [-1,1] represents amplitude [-2,2] (a 0.5 gain precedes it)
  const c = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const a = ((i / (n - 1)) * 2 - 1) * 2;
    const m = Math.abs(a);
    const y = m < 0.8 ? m : 0.8 + 0.19 * Math.tanh((m - 0.8) / 0.19);
    c[i] = Math.sign(a) * y;
  }
  return c;
}

// ---------------------------------------------------------------------------
// Music
// ---------------------------------------------------------------------------
// Automated biquad params are a-rate by default, which makes the browser
// recompute filter coefficients for every sample. Block-rate is plenty here.
function kRate(n) {
  try {
    n.frequency.automationRate = 'k-rate';
    n.Q.automationRate = 'k-rate';
  } catch (e) { /* older browsers */ }
  return n;
}

function chain(...nodes) {
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]);
  return nodes[0];
}

class Track {
  constructor(audio) {
    this.audio = audio;
    const ctx = (this.ctx = audio.ctx);
    this.out = ctx.createGain();
    this.out.gain.value = 0;
    this.out.connect(audio.musicBus);
    this.send = this.g(0.1);
    this.out.connect(this.send);
    this.send.connect(audio.musicSend);
    this.dr = audio._drums;
    this.drumBus = this.g(0.9, this.out);
    this.step = 0;
    this.nextTime = 0;
  }
  g(v, dest) {
    const n = this.ctx.createGain();
    n.gain.value = v;
    if (dest) n.connect(dest);
    return n;
  }
  f(type, freq, q, gain, krate) {
    const n = this.ctx.createBiquadFilter();
    if (krate) kRate(n);
    n.type = type;
    n.frequency.value = freq;
    if (q != null) n.Q.value = q;
    if (gain != null) n.gain.value = gain;
    return n;
  }
  pan(v, dest) {
    const n = this.ctx.createStereoPanner();
    n.pan.value = v;
    if (dest) n.connect(dest);
    return n;
  }
  shaper(curve) {
    const n = this.ctx.createWaveShaper();
    n.curve = curve;
    n.oversample = '4x';
    return n;
  }
  osc(type, freq, t0, t1, dest, det = 0) {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    if (det) o.detune.value = det;
    o.connect(dest);
    o.start(t0);
    o.stop(t1);
    return o;
  }
  delay(time, fb, wet, dest) {
    const inp = this.g(1);
    const d = this.ctx.createDelay(2);
    d.delayTime.value = time;
    const fbg = this.g(fb);
    const lp = this.f('lowpass', 3200, 0.7);
    const w = this.g(wet, dest);
    inp.connect(d);
    d.connect(lp);
    lp.connect(fbg);
    fbg.connect(d);
    lp.connect(w);
    return inp;
  }
  hit(name, t, vel = 1, pan = 0, rate = 1) {
    const b = this.dr[name];
    if (!b) return;
    const s = this.ctx.createBufferSource();
    s.buffer = b;
    if (rate !== 1) s.playbackRate.value = rate;
    const gn = this.g(vel);
    s.connect(gn);
    if (pan) gn.connect(this.pan(pan, this.drumBus));
    else gn.connect(this.drumBus);
    s.start(t);
  }
  drums(pat, s, t, vel = 1) {
    const c = (k) => (pat[k] ? pat[k][s] : '.');
    if (c('k') === 'k') this.hit('kick', t, 0.95 * vel);
    const sn = c('s');
    if (sn === 's') this.hit('snare', t, 0.8 * vel);
    else if (sn === 'r') this.hit('rim', t, 0.35 * vel);
    const h = c('h');
    if (h === 'h') this.hit('hatC', t, (s % 4 === 0 ? 0.32 : 0.22) * vel, 0.25);
    else if (h === 'o') this.hit('hatO', t, 0.26 * vel, 0.25);
    const tm = c('t');
    if (tm === 't') this.hit('tomH', t, 0.75 * vel, -0.25);
    else if (tm === 'T') this.hit('tomL', t, 0.8 * vel, 0.2);
  }
  fadeIn(t, tc) {
    this.out.gain.setValueAtTime(0, t);
    this.out.gain.setTargetAtTime(this.level || 1, t, tc);
  }
}

// --- 'level': fast E-Phrygian metal, 140 BPM, 32 bars: A B A' B' ---------
const E2 = 82.4069;
const NOTE_SEMI = { E: 0, F: 1, 'F#': 2, G: 3, 'G#': 4, A: 5, Bb: 6, B: 7, C: 8, 'C#': 9, D: 10, 'D#': 11 };
function parseRiff(str) {
  const tok = str.trim().split(/\s+/);
  const ev = [];
  for (let i = 0; i < tok.length; i++) {
    const tk = tok[i];
    if (tk === '-' || tk === '.') continue;
    let len = 1;
    while (i + len < tok.length && tok[i + len] === '-') len++;
    if (tk === 'x') ev.push({ s: i, semi: null, pm: true, len });
    else if (tk === 'X') ev.push({ s: i, semi: null, pm: false, len });
    else ev.push({ s: i, semi: NOTE_SEMI[tk], pm: false, len });
  }
  return ev;
}
const RIFF_A = [
  parseRiff('x . x x x . x x F - x x G - F -'),
  parseRiff('x . x x x . x x A - G - F - x x'),
  parseRiff('x . x x x . x x F - x x G - Bb -'),
  parseRiff('x x x x A - - - G - - - F - - -'),
  parseRiff('G - - - A - - - x x x x F - x x'),
];
const A_ORDER = [0, 1, 2, 3, 0, 1, 2, 4];
const RIFF_B = parseRiff('X - x x X - x x X - x x X - x x');
const B_ROOTS = [0, 0, 8, 10, 0, 0, 1, 7]; // E E C D E E F B
const LEAD = [
  [[0, 64, 2], [2, 67, 2], [4, 71, 4], [8, 69, 2], [10, 67, 2], [12, 65, 4]],
  [[0, 64, 8], [8, 67, 4], [12, 69, 4]],
  [[0, 71, 2], [2, 72, 6], [8, 71, 4], [12, 67, 4]],
  [[0, 69, 4], [4, 74, 4], [8, 72, 4], [12, 69, 4]],
  [[0, 71, 6], [6, 76, 2], [8, 74, 4], [12, 71, 4]],
  [[0, 72, 4], [4, 71, 4], [8, 67, 4], [12, 65, 4]],
  [[0, 69, 2], [2, 72, 2], [4, 77, 8], [12, 76, 2], [14, 72, 2]],
  [[0, 71, 4], [4, 75, 4], [8, 78, 4], [12, 75, 4]],
];
const SCALE_EM = [4, 6, 7, 9, 11, 0, 2];
const SCALE_EHM = [4, 6, 7, 9, 11, 0, 3];
function thirdAbove(m, scale) {
  const pc = m % 12;
  const i = scale.indexOf(pc);
  if (i < 0) return m + (pc === 5 ? 4 : 3);
  return m + ((scale[(i + 2) % 7] - pc + 12) % 12);
}
const LV_DRUMS = {
  A: { k: 'k.kk..k.k.kk..k.', s: '....s.......s...', h: 'h.h.h.h.h.h.h.h.' },
  A2: { k: 'k.kkk.kkk.kkk.kk', s: '....s.......s...', h: 'h.h.h.h.h.h.h.h.' },
  B: { k: 'k.kkk.kkk.kkk.kk', s: '....s.......s...', h: 'o.h.o.h.o.h.o.h.' },
  F: { k: 'k.k.k.k.k.......', s: '....s...s.ss....', t: '............ttTT', h: 'h.h.h.h.........' },
};

class LevelTrack extends Track {
  constructor(a) {
    super(a);
    this.stepDur = 60 / 140 / 4;
    this.len = 32 * 16;
    this.level = 0.6;
    this.send.gain.value = 0.07;
    const curve = distCurve(16, 0.15);
    this.gtr = [-0.7, 0.7].map((p) => {
      const inp = this.g(1);
      chain(inp, this.f('highpass', 110, 0.7), this.shaper(curve), this.f('highpass', 95, 0.7),
        this.f('peaking', 140, 1, 2), this.f('peaking', 650, 1.1, -5), this.f('peaking', 2300, 1.1, 6),
        this.f('lowpass', 5200, 0.8), this.f('lowpass', 7500, 0.6), this.g(0.17), this.pan(p), this.out);
      return inp;
    });
    this.bassIn = this.g(1);
    chain(this.bassIn, this.shaper(distCurve(2.5)), this.f('lowpass', 2200, 0.7), this.g(0.2), this.out);
    this.leadIn = this.g(1);
    const leadOut = this.g(0.2);
    chain(this.leadIn, this.shaper(distCurve(3)), this.f('lowpass', 3800, 0.9), this.f('peaking', 1700, 1, 3), leadOut, this.out);
    leadOut.connect(this.delay(this.stepDur * 3, 0.3, 0.28, this.pan(0.35, this.out)));
    this.lv = [{ f: 0, end: -1 }, { f: 0, end: -1 }];
  }
  guitar(t, semi, steps, pm, vel = 1) {
    const ctx = this.ctx;
    const f = E2 * Math.pow(2, semi / 12);
    const dur = steps * this.stepDur;
    for (let side = 0; side < 2; side++) {
      const ts = t + (side ? 0.007 : 0);
      const det = side ? 6 : -5;
      const gn = ctx.createGain();
      const lp = kRate(ctx.createBiquadFilter());
      lp.type = 'lowpass';
      const end = ts + (pm ? Math.min(dur, 0.16) : dur) - 0.005;
      gn.gain.setValueAtTime(0, ts);
      if (pm) {
        lp.Q.value = 1.2;
        lp.frequency.setValueAtTime(1300, ts);
        lp.frequency.setTargetAtTime(380, ts, 0.035);
        gn.gain.linearRampToValueAtTime(0.5 * vel, ts + 0.002);
        gn.gain.setTargetAtTime(0, ts + 0.01, 0.06);
      } else {
        lp.Q.value = 0.7;
        lp.frequency.setValueAtTime(4500, ts);
        lp.frequency.setTargetAtTime(2400, ts, 0.3);
        gn.gain.linearRampToValueAtTime(0.55 * vel, ts + 0.003);
        gn.gain.setTargetAtTime(0.4 * vel, ts + 0.003, 0.2);
      }
      gn.gain.setTargetAtTime(0, end, 0.008);
      gn.connect(lp);
      lp.connect(this.gtr[side]);
      const stop = end + 0.06;
      this.osc('sawtooth', f, ts, stop, gn, det);
      this.osc('sawtooth', f, ts, stop, gn, det + 9);
      this.osc('sawtooth', f * 1.4983, ts, stop, gn, det - 3);
      if (!pm) this.osc('sawtooth', f * 2, ts, stop, gn, det + 4);
    }
  }
  bass(t, semi, steps, pm) {
    const ctx = this.ctx;
    const f = (E2 / 2) * Math.pow(2, semi / 12);
    const end = t + (pm ? Math.min(steps * this.stepDur, 0.14) : steps * this.stepDur) - 0.005;
    const gn = ctx.createGain();
    const lp = this.f('lowpass', 1400, 2, null, true);
    lp.frequency.setValueAtTime(pm ? 900 : 1500, t);
    lp.frequency.setTargetAtTime(pm ? 300 : 500, t, 0.06);
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.6, t + 0.004);
    gn.gain.setTargetAtTime(pm ? 0.25 : 0.45, t + 0.004, 0.08);
    gn.gain.setTargetAtTime(0, end, 0.012);
    lp.connect(gn);
    gn.connect(this.bassIn);
    this.osc('sawtooth', f, t, end + 0.08, lp);
    this.osc('sine', f, t, end + 0.08, gn);
  }
  lead(t, midi, steps, vel, voice) {
    const ctx = this.ctx;
    const f = mtof(midi);
    const dur = steps * this.stepDur;
    const end = t + dur - 0.012;
    const lv = this.lv[voice];
    const glide = Math.abs(lv.end - t) < 0.03 && lv.f > 0;
    const gn = ctx.createGain();
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.3 * vel, t + 0.01);
    gn.gain.setTargetAtTime(0.22 * vel, t + 0.01, 0.15);
    gn.gain.setTargetAtTime(0, end, 0.025);
    gn.connect(voice ? this.pan(-0.3, this.leadIn) : this.leadIn);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 5.6;
    const lg = ctx.createGain();
    lg.gain.setValueAtTime(0, t);
    lg.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(0.35, dur));
    lfo.connect(lg);
    lfo.start(t);
    lfo.stop(end + 0.15);
    for (const det of [-9, 9]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.detune.value = det;
      if (glide) {
        o.frequency.setValueAtTime(lv.f, t);
        o.frequency.exponentialRampToValueAtTime(f, t + 0.04);
      } else o.frequency.setValueAtTime(f, t);
      lg.connect(o.frequency);
      o.connect(gn);
      o.start(t);
      o.stop(end + 0.15);
    }
    lv.f = f;
    lv.end = t + dur;
  }
  schedule(step, t) {
    const bar = step >> 4, s = step & 15;
    const sec = bar >> 3, bi = bar & 7;
    const isB = sec & 1;
    const riff = isB ? RIFF_B : RIFF_A[A_ORDER[bi]];
    const root = isB ? B_ROOTS[bi] : 0;
    for (const ev of riff) {
      if (ev.s !== s) continue;
      const semi = ev.semi == null ? root : ev.semi;
      this.guitar(t, semi, ev.len, ev.pm, ev.pm ? 0.9 : 1);
      this.bass(t, semi, ev.len, ev.pm);
    }
    if (isB) {
      for (const [ls, m, len] of LEAD[bi]) {
        if (ls !== s) continue;
        this.lead(t, m, len, 1, 0);
        if (sec === 3) this.lead(t, thirdAbove(m, bi === 7 ? SCALE_EHM : SCALE_EM), len, 0.6, 1);
      }
    }
    const pat = bi === 7 ? LV_DRUMS.F : isB ? LV_DRUMS.B : sec === 2 ? LV_DRUMS.A2 : LV_DRUMS.A;
    this.drums(pat, s, t);
    if (s === 0 && (bi === 0 || (isB && (bi & 1) === 0))) this.hit('crash', t, bi === 0 ? 0.6 : 0.45, bi & 2 ? 0.3 : -0.3);
  }
}

// --- 'intermission': 96 BPM, ominous pads + clean arpeggio + light drums ---
const INT_CHORDS = [
  { root: 40, n: [52, 55, 59, 64] }, // Em
  { root: 36, n: [48, 55, 60, 64] }, // C
  { root: 33, n: [45, 52, 57, 60] }, // Am
  { root: 35, n: [47, 54, 59, 63] }, // B
  { root: 40, n: [52, 55, 59, 64] }, // Em
  { root: 36, n: [48, 55, 60, 64] }, // C
  { root: 41, n: [53, 57, 60, 65] }, // F (bII)
  { root: 35, n: [47, 54, 57, 63] }, // B7
];
const ARP = [0, 1, 2, 3, 2, 1, 2, 3];
class InterTrack extends Track {
  constructor(a) {
    super(a);
    this.stepDur = 60 / 96 / 4;
    this.len = 16 * 16;
    this.level = 1.6;
    this.send.gain.value = 0.25;
    this.padIn = this.g(1);
    const pf = this.f('lowpass', 1000, 0.6);
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.08;
    const lg = this.g(350);
    lfo.connect(lg);
    lg.connect(pf.frequency);
    lfo.start();
    this._lfo = lfo;
    chain(this.padIn, pf, this.g(0.8), this.out);
    this.arpIn = this.g(1);
    const arpOut = this.g(0.85);
    chain(this.arpIn, this.f('lowpass', 2600, 0.7), arpOut, this.out);
    arpOut.connect(this.delay(this.stepDur * 3, 0.38, 0.35, this.pan(-0.3, this.out)));
    this.bassIn = this.g(1);
    chain(this.bassIn, this.f('lowpass', 600, 0.7), this.g(0.25), this.out);
  }
  pad(t, notes, dur) {
    notes.forEach((m, i) => {
      const f = mtof(m);
      const gn = this.g(0);
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(0.06, t + 1.0);
      gn.gain.setTargetAtTime(0, t + dur, 0.5);
      gn.connect(this.pan(i & 1 ? 0.4 : -0.4, this.padIn));
      this.osc('sawtooth', f, t, t + dur + 3, gn, -7);
      this.osc('sawtooth', f, t, t + dur + 3, gn, 7);
    });
  }
  pluck(t, m) {
    const f = mtof(m);
    const gn = this.g(0, this.arpIn);
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.25, t + 0.003);
    gn.gain.setTargetAtTime(0, t + 0.003, 0.22);
    this.osc('triangle', f, t, t + 1.3, gn);
    const g2 = this.g(0.25, gn);
    this.osc('sine', f * 2, t, t + 1.3, g2);
  }
  bassNote(t, m, dur) {
    const gn = this.g(0, this.bassIn);
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.5, t + 0.01);
    gn.gain.setTargetAtTime(0.3, t + 0.01, 0.2);
    gn.gain.setTargetAtTime(0, t + dur, 0.05);
    this.osc('triangle', mtof(m), t, t + dur + 0.4, gn);
    this.osc('sine', mtof(m), t, t + dur + 0.4, gn);
  }
  schedule(step, t) {
    const bar = step >> 4, s = step & 15;
    const ch = INT_CHORDS[(bar >> 1) & 7];
    if (s === 0 && (bar & 1) === 0) this.pad(t, ch.n, this.stepDur * 32);
    if ((s & 1) === 0) this.pluck(t, ch.n[ARP[((s >> 1) + (bar & 1) * 3) & 7]] + 12);
    if (s === 0 || s === 8) this.bassNote(t, ch.root, this.stepDur * 7);
    const b8 = bar & 7;
    if (b8 >= 2) {
      const pat = bar === 15
        ? { k: 'k.........k.....', s: '....r.......r...', h: 'h.h.h.h.h.h.....', t: '............ttTT' }
        : { k: 'k.........k.....', s: '....r.......r...', h: 'h.h.h.h.h.h.h.ho' };
      this.drums(pat, s, t, 0.6);
    } else if (s === 0) this.hit('kick', t, 0.5);
    else if ((s & 3) === 0) this.hit('hatC', t, 0.1, 0.25);
    if (s === 0 && b8 === 0) this.hit('crash', t, 0.25, 0.3);
  }
}

// --- 'menu': dark ambient drone with occasional deep hits -------------------
const DRONES = [[40, 47, 52], [40, 48, 55], [40, 46, 52], [40, 47, 54]];
class MenuTrack extends Track {
  constructor(a) {
    super(a);
    this.stepDur = 0.5;
    this.len = 64;
    this.level = 1.3;
    this.send.gain.value = 0.55;
    this.droneIn = this.g(1);
    const df = this.f('lowpass', 650, 2.5);
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.05;
    const lg = this.g(320);
    lfo.connect(lg);
    lg.connect(df.frequency);
    lfo.start();
    this._lfo = lfo;
    chain(this.droneIn, df, this.g(1), this.out);
  }
  drone(t, notes, dur) {
    notes.forEach((m, i) => {
      const gn = this.g(0);
      gn.gain.setValueAtTime(0, t);
      gn.gain.linearRampToValueAtTime(0.07, t + 2.5);
      gn.gain.setValueAtTime(0.07, t + dur - 3);
      gn.gain.linearRampToValueAtTime(0, t + dur);
      gn.connect(this.pan((i - 1) * 0.4, this.droneIn));
      this.osc('sawtooth', mtof(m), t, t + dur + 0.1, gn, -5);
      this.osc('sawtooth', mtof(m), t, t + dur + 0.1, gn, 6);
      if (i === 0) this.osc('sine', mtof(m - 12), t, t + dur + 0.1, this.g(1.5, gn));
    });
  }
  eerie(t, m, dur) {
    const gn = this.g(0);
    gn.gain.setValueAtTime(0, t);
    gn.gain.linearRampToValueAtTime(0.05, t + 3);
    gn.gain.setValueAtTime(0.05, t + dur - 3);
    gn.gain.linearRampToValueAtTime(0, t + dur);
    gn.connect(this.pan(Math.random() * 1.2 - 0.6, this.out));
    const o = this.osc('sine', mtof(m), t, t + dur + 0.1, gn);
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 4.2;
    const lg = this.g(mtof(m) * 0.006);
    lfo.connect(lg);
    lg.connect(o.frequency);
    lfo.start(t);
    lfo.stop(t + dur + 0.1);
  }
  schedule(step, t) {
    if (step % 16 === 0) this.drone(t, DRONES[(step >> 4) & 3], 9.5);
    if (step === 8) this.eerie(t, 83, 8);
    if (step === 40) this.eerie(t, 77, 8);
    if ([6, 21, 30, 44, 55].includes(step)) this.hit('boom', t, 0.9);
    if (step === 13 || step === 37) this.hit('rim', t, 0.25, step === 13 ? -0.6 : 0.6, 0.35);
  }
}

const TRACKS = { level: LevelTrack, intermission: InterTrack, menu: MenuTrack };

// ---------------------------------------------------------------------------
// GameAudio
// ---------------------------------------------------------------------------
const DUMMY = Object.freeze({ stop() {}, setPos() {}, playing: false });
const MAX_VOICES = 32;
const CLOSE_DIST = 160;
const CLIP_DIST = 1400;

export class GameAudio {
  constructor() {
    this.ctx = null;
    this._buffers = {};
    this._lastVar = {};
    this._voices = [];
    this._warned = new Set();
    this._sfxVol = 1;
    this._musicVol = 1;
    this._lis = { x: 0, y: 0, z: 0, rx: 1, rz: 0 };
    this._music = null;
    this._pendingMusic = null;
    this._timer = null;
    this._sfxReady = null;
  }

  get ready() {
    return !!this.ctx;
  }

  init(ctxOverride) {
    if (this.ctx) {
      if (this.ctx.state === 'suspended' && this.ctx.resume) this.ctx.resume().catch(() => {});
      return;
    }
    let ctx = ctxOverride;
    if (!ctx) {
      const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
      if (!AC) {
        console.warn('[audio] Web Audio API not available');
        return;
      }
      try {
        ctx = new AC({ latencyHint: 'interactive' });
      } catch (e) {
        console.warn('[audio] could not create AudioContext', e);
        return;
      }
    }
    this.ctx = ctx;
    this._offline = !!ctxOverride && typeof OfflineAudioContext !== 'undefined' && ctx instanceof OfflineAudioContext;

    this.master = ctx.createGain();
    this.master.gain.value = 0.6;
    const comp = (this.compressor = ctx.createDynamicsCompressor());
    comp.threshold.value = -10;
    comp.knee.value = 6;
    comp.ratio.value = 4;
    comp.attack.value = 0.004;
    comp.release.value = 0.2;
    const pre = ctx.createGain();
    pre.gain.value = 0.5;
    const clip = ctx.createWaveShaper();
    clip.curve = softClipCurve();
    this.master.connect(comp);
    comp.connect(pre);
    pre.connect(clip);
    clip.connect(ctx.destination);

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = makeIR(ctx);
    this.reverbReturn = ctx.createGain();
    this.reverbReturn.gain.value = 0.55;
    this.reverb.connect(this.reverbReturn);
    this.reverbReturn.connect(this.master);

    this.sfxBus = ctx.createGain();
    this.sfxBus.connect(this.master);
    this.sfxSend = ctx.createGain();
    this.sfxSend.connect(this.reverb);
    this.musicBus = ctx.createGain();
    this.musicBus.connect(this.master);
    this.musicSend = ctx.createGain();
    this.musicSend.connect(this.reverb);
    this._applyVolumes(true);

    this._drums = genDrums(ctx.sampleRate);
    for (const k of Object.keys(this._drums)) this._drums[k] = this._toBuffer(this._drums[k]);

    this._sfxReady = this._genAll();
    if (ctx.state === 'suspended' && ctx.resume && !this._offline) ctx.resume().catch(() => {});
    if (this._pendingMusic) {
      const t = this._pendingMusic;
      this._pendingMusic = null;
      this.startMusic(t);
    }
  }

  _toBuffer(data) {
    const b = this.ctx.createBuffer(1, data.length, this.ctx.sampleRate);
    b.copyToChannel(data, 0);
    return b;
  }

  async _genAll() {
    const sr = this.ctx.sampleRate;
    for (const name of SFX_ORDER) {
      const d = SFX[name];
      const list = [];
      for (let k = 0; k < d.variants; k++) {
        try {
          const g = new Gen(sr, hashStr(name) + k * 7919);
          list.push(this._toBuffer(finish(sr, d.gen(g, k))));
        } catch (e) {
          console.warn('[audio] failed to generate', name, e);
        }
        // first variant becomes playable immediately; yield between variants
        this._buffers[name] = list;
        if (!this._offline) await new Promise((r) => setTimeout(r, 0));
      }
    }
    return true;
  }

  _applyVolumes(instant) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const set = (p, v) => (instant ? (p.value = v) : p.setTargetAtTime(v, now, 0.05));
    set(this.sfxBus.gain, 0.9 * this._sfxVol);
    set(this.sfxSend.gain, this._sfxVol);
    set(this.musicBus.gain, 0.45 * this._musicVol);
    set(this.musicSend.gain, 0.45 * this._musicVol);
  }

  setSfxVolume(v) {
    this._sfxVol = clamp(+v || 0, 0, 1);
    this._applyVolumes(false);
  }

  setMusicVolume(v) {
    this._musicVol = clamp(+v || 0, 0, 1);
    this._applyVolumes(false);
  }

  setListener(x, y, z, yaw) {
    const L = this._lis;
    L.x = x; L.y = y; L.z = z;
    L.rx = Math.cos(yaw);
    L.rz = -Math.sin(yaw);
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    for (const v of this._voices) {
      if (v.pos) this._updateVoice(v, now, false);
    }
  }

  _spatial(p) {
    const L = this._lis;
    const dx = p.x - L.x, dy = (p.y || 0) - L.y, dz = p.z - L.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    let g;
    if (d <= CLOSE_DIST) g = 1;
    else if (d >= CLIP_DIST) g = 0;
    else {
      const u = (CLIP_DIST - d) / (CLIP_DIST - CLOSE_DIST);
      g = 0.5 * u + 0.5 * u * u * (3 - 2 * u);
    }
    const hd = Math.sqrt(dx * dx + dz * dz);
    let pan = hd > 1e-3 ? (dx * L.rx + dz * L.rz) / hd : 0;
    pan *= 0.8 * Math.min(1, d / 96);
    const u = clamp((d - CLOSE_DIST) / (CLIP_DIST - CLOSE_DIST), 0, 1);
    const fc = 20000 * Math.pow(2200 / 20000, u);
    return { g, pan, fc, send: 0.12 + 0.33 * u };
  }

  _updateVoice(v, now, force) {
    const s = this._spatial(v.pos);
    const o = v.sp;
    if (!force && o && Math.abs(o.g - s.g) < 0.01 && Math.abs(o.pan - s.pan) < 0.01 && Math.abs(o.fc - s.fc) / o.fc < 0.03) return;
    v.sp = s;
    v.g.gain.setTargetAtTime(v.vol * s.g, now, 0.03);
    v.pan.pan.setTargetAtTime(s.pan, now, 0.03);
    v.lp.frequency.setTargetAtTime(s.fc, now, 0.03);
    v.send.gain.setTargetAtTime(s.send, now, 0.03);
  }

  play(name, opts) {
    const d = SFX[name];
    if (!d) {
      if (!this._warned.has(name)) {
        this._warned.add(name);
        console.warn(`[audio] unknown sound "${name}"`);
      }
      return DUMMY;
    }
    if (!this.ctx) return DUMMY;
    const list = this._buffers[name];
    if (!list || !list.length) return DUMMY;
    opts = opts || {};
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const loop = !!opts.loop;
    const pos = opts.pos ? { x: +opts.pos.x || 0, y: +opts.pos.y || 0, z: +opts.pos.z || 0 } : null;
    const vol = (opts.volume == null ? 1 : Math.max(0, opts.volume)) * d.gain;
    let sp = null;
    if (pos) {
      sp = this._spatial(pos);
      if (!loop && sp.g < 0.002) return DUMMY;
    }

    let idx = 0;
    if (list.length > 1) {
      const last = this._lastVar[name];
      idx = Math.floor(Math.random() * list.length);
      if (idx === last) idx = (idx + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length;
    }
    this._lastVar[name] = idx;

    // voice limits: per-name cap and global cap (steal oldest)
    let same = 0, oldestSame = null;
    for (const v of this._voices) {
      if (v.name === name) {
        same++;
        if (!oldestSame) oldestSame = v;
      }
    }
    if (same >= d.cap && oldestSame) this._kill(oldestSame);
    while (this._voices.length >= MAX_VOICES) {
      const victim = this._voices.find((v) => !v.loop) || this._voices[0];
      this._kill(victim);
    }

    const src = ctx.createBufferSource();
    src.buffer = list[idx];
    src.loop = loop;
    const pv = opts.pitchVar == null ? 0.05 : opts.pitchVar;
    src.playbackRate.value = (opts.rate || 1) * (1 + (Math.random() * 2 - 1) * pv);
    const gn = ctx.createGain();
    const send = ctx.createGain();
    const v = { src, g: gn, send, lp: null, pan: null, pos, sp, vol, name, loop, done: false };
    src.connect(gn);
    if (pos) {
      const lp = (v.lp = ctx.createBiquadFilter());
      lp.type = 'lowpass';
      lp.frequency.value = sp.fc;
      lp.Q.value = 0.5;
      const pn = (v.pan = ctx.createStereoPanner());
      pn.pan.value = sp.pan;
      gn.gain.value = vol * sp.g;
      send.gain.value = sp.send;
      gn.connect(lp);
      lp.connect(pn);
      pn.connect(this.sfxBus);
      pn.connect(send);
    } else {
      gn.gain.value = vol;
      send.gain.value = 0.1;
      gn.connect(this.sfxBus);
      gn.connect(send);
    }
    send.connect(this.sfxSend);
    src.onended = () => this._release(v);
    src.start(now + Math.max(0, opts.delay || 0));
    this._voices.push(v);
    return {
      stop: () => this._kill(v),
      setPos: (p) => {
        if (!v.pos || v.done || !p) return;
        v.pos = { x: +p.x || 0, y: +p.y || 0, z: +p.z || 0 };
        this._updateVoice(v, ctx.currentTime, false);
      },
      get playing() {
        return !v.done;
      },
    };
  }

  _release(v) {
    if (v.released) return;
    v.released = true;
    v.done = true;
    const i = this._voices.indexOf(v);
    if (i >= 0) this._voices.splice(i, 1);
    try {
      v.src.disconnect();
      v.g.disconnect();
      v.send.disconnect();
      if (v.lp) v.lp.disconnect();
      if (v.pan) v.pan.disconnect();
    } catch (e) { /* ignore */ }
  }

  _kill(v) {
    if (!v || v.done) return;
    v.done = true;
    const i = this._voices.indexOf(v);
    if (i >= 0) this._voices.splice(i, 1);
    const now = this.ctx.currentTime;
    try {
      v.g.gain.cancelScheduledValues(now);
      v.g.gain.setValueAtTime(v.g.gain.value, now);
      v.g.gain.setTargetAtTime(0, now, 0.008);
      v.src.stop(now + 0.05);
    } catch (e) {
      this._release(v);
    }
  }

  // ---- music ---------------------------------------------------------------
  startMusic(track) {
    if (!TRACKS[track]) {
      console.warn(`[audio] unknown music track "${track}"`);
      return;
    }
    if (!this.ctx) {
      this._pendingMusic = track;
      return;
    }
    if (this._music && this._music.name === track) return;
    this._fadeOutMusic(0.35);
    const m = new TRACKS[track](this);
    m.name = track;
    const t0 = this.ctx.currentTime + 0.06;
    m.nextTime = t0;
    m.fadeIn(t0, track === 'level' ? 0.05 : 0.4);
    this._music = m;
    if (!this._timer && !this._offline) this._timer = setInterval(() => this._tick(), 25);
    this._tick();
  }

  stopMusic() {
    this._pendingMusic = null;
    this._fadeOutMusic(0.25);
  }

  _fadeOutMusic(tc) {
    const m = this._music;
    if (!m) return;
    this._music = null;
    const now = this.ctx.currentTime;
    m.out.gain.cancelScheduledValues(now);
    m.out.gain.setValueAtTime(m.out.gain.value, now);
    m.out.gain.setTargetAtTime(0, now, tc);
    const kill = () => {
      try {
        m.out.disconnect();
        m.send.disconnect();
        if (m._lfo) m._lfo.stop();
      } catch (e) { /* ignore */ }
    };
    if (this._offline) return;
    setTimeout(kill, tc * 8000 + 1500);
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  _tick(until) {
    const m = this._music;
    if (!m) return;
    const now = this.ctx.currentTime;
    const ahead = until != null ? until : now + 0.12;
    if (until == null && m.nextTime < now - 0.2) m.nextTime = now + 0.03; // throttled tab: resync, don't burst
    while (m.nextTime < ahead) {
      m.schedule(m.step, m.nextTime);
      m.nextTime += m.stepDur;
      m.step = (m.step + 1) % m.len;
    }
  }
}

