// 2D overlay: Doom-style status bar with an animated marine face, messages,
// crosshair, damage direction indicators and the automap.
const FONT = "Impact, 'Haettenschweiler', 'Arial Narrow Bold', 'Arial Black', sans-serif";

export class HUD {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.msgs = [];
    this.hurts = [];
    this.lookDir = 0; this.lookTimer = 0;
    this.amZoom = 0.35;
    this.barCache = null;
    this.time = 0;
  }

  resize(w, h, dpr) {
    this.w = w; this.h = h; this.dpr = dpr;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.barCache = null;
  }

  get barHeight() { return Math.round(Math.min(this.h * 0.13, this.w / 10)); }

  message(text, dur = 4, color = '#ffb070') {
    this.msgs.push({ text, t: 0, dur, color });
    if (this.msgs.length > 4) this.msgs.shift();
  }

  clearMessages() { this.msgs.length = 0; }

  hurtFrom(angle, amount) {
    this.hurts.push({ angle, t: 0, a: Math.min(1, 0.35 + amount / 30) });
    if (this.hurts.length > 6) this.hurts.shift();
  }

  // ------------------------------------------------------------------ status bar background
  buildBar(W, H) {
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#5b544c'); grad.addColorStop(0.08, '#3d3833'); grad.addColorStop(0.9, '#2a2622'); grad.addColorStop(1, '#16130f');
    g.fillStyle = grad; g.fillRect(0, 0, W, H);
    // noise / scratches
    const id = g.getImageData(0, 0, W, H);
    for (let i = 0; i < id.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 22;
      id.data[i] += n; id.data[i + 1] += n; id.data[i + 2] += n * 0.9;
    }
    g.putImageData(id, 0, 0);
    g.globalAlpha = 0.12;
    g.strokeStyle = '#000';
    for (let i = 0; i < 60; i++) { g.beginPath(); const x = Math.random() * W, y = Math.random() * H; g.moveTo(x, y); g.lineTo(x + Math.random() * 30 - 15, y + Math.random() * 4); g.stroke(); }
    g.globalAlpha = 1;
    const u = W / 320;
    // recessed panels
    const panel = (x0, x1) => {
      const x = x0 * u, w = (x1 - x0) * u;
      const pg = g.createLinearGradient(0, 2 * u, 0, H - 2 * u);
      pg.addColorStop(0, '#1d1a17'); pg.addColorStop(1, '#2c2824');
      g.fillStyle = pg; g.fillRect(x, 2 * u, w, H - 4 * u);
      g.strokeStyle = '#0a0907'; g.lineWidth = u; g.strokeRect(x + 0.5, 2 * u + 0.5, w - 1, H - 4 * u - 1);
      g.strokeStyle = 'rgba(255,240,220,0.18)'; g.beginPath(); g.moveTo(x, H - 2 * u); g.lineTo(x + w, H - 2 * u); g.lineTo(x + w, 2 * u); g.stroke();
    };
    panel(2, 48); panel(50, 104); panel(106, 142); panel(178, 234); panel(236, 248); panel(250, 318);
    // face well
    g.fillStyle = '#100d0b'; g.fillRect(143 * u, 1 * u, 34 * u, H - 1 * u);
    // rivets
    g.fillStyle = '#8a8076';
    for (const x of [1, 49, 105, 142.5, 177.5, 235, 249, 319]) for (const y of [3, H / u - 3]) { g.beginPath(); g.arc(x * u, y * u, 0.7 * u, 0, 7); g.fill(); }
    // labels
    g.fillStyle = '#c8c0b4';
    g.font = `${Math.round(5.2 * u)}px ${FONT}`;
    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    const ly = H - 3.4 * u;
    g.fillText('AMMO', 25 * u, ly); g.fillText('HEALTH', 77 * u, ly); g.fillText('ARMS', 124 * u, ly); g.fillText('ARMOR', 206 * u, ly);
    g.textAlign = 'left';
    g.font = `${Math.round(4.2 * u)}px ${FONT}`;
    g.fillStyle = '#c9b46c';
    ['BULL', 'SHEL', 'RCKT', 'CELL'].forEach((t, i) => g.fillText(t, 252 * u, (9 + i * 6.4) * u));
    return c;
  }

  bigNum(g, text, x, y, size, color = '#d8230e') {
    g.font = `${size}px ${FONT}`;
    g.textAlign = 'right'; g.textBaseline = 'alphabetic';
    g.fillStyle = '#000'; g.fillText(text, x + size * 0.05, y + size * 0.05);
    const grad = g.createLinearGradient(0, y - size * 0.8, 0, y);
    grad.addColorStop(0, '#ff6a3a'); grad.addColorStop(0.5, color); grad.addColorStop(1, '#7a0c04');
    g.fillStyle = grad; g.fillText(text, x, y);
  }

  // ------------------------------------------------------------------ face
  faceState(world) {
    const p = world.player;
    const t = world.time;
    const st = { tier: 0, look: this.lookDir, expr: 'normal' };
    const h = Math.max(0, p.health);
    st.tier = h >= 80 ? 0 : h >= 60 ? 1 : h >= 40 ? 2 : h >= 20 ? 3 : 4;
    if (p.dead) { st.expr = 'dead'; return st; }
    if (p.god) st.expr = 'god';
    if (t - p.grinTime < 1.6) st.expr = 'grin';
    else if (t - p.lastHurtTime < 0.9) {
      if (p.lastHurtAmount >= 20) st.expr = 'ouch';
      else {
        st.expr = 'pain';
        if (p.lastHurtAngle !== null) st.look = Math.abs(p.lastHurtAngle) < 0.5 ? 0 : p.lastHurtAngle > 0 ? -1 : 1;
      }
    } else if (p.attackHeld > 2) st.expr = 'rampage';
    if (p.god && st.expr !== 'grin') st.expr = 'god';
    return st;
  }

  drawFace(g, x, y, w, h, st) {
    g.save();
    g.beginPath(); g.rect(x, y, w, h); g.clip();
    const cx = x + w / 2, cy = y + h * 0.55;
    const dead = st.expr === 'dead';
    const tier = st.tier;
    const lx = st.look * w * 0.035;
    // neck / armour collar
    g.fillStyle = '#2e3d22';
    g.beginPath(); g.ellipse(cx, y + h * 1.02, w * 0.52, h * 0.2, 0, 0, 7); g.fill();
    // head
    const skin = dead ? ['#9a7a6a', '#6a4a3e'] : ['#e0a27a', '#9a5a3c'];
    const sg = g.createRadialGradient(cx - w * 0.08 + lx, cy - h * 0.12, w * 0.05, cx, cy, w * 0.5);
    sg.addColorStop(0, skin[0]); sg.addColorStop(1, skin[1]);
    g.fillStyle = sg;
    g.beginPath();
    g.moveTo(cx - w * 0.33, cy - h * 0.18);
    g.quadraticCurveTo(cx - w * 0.36, cy - h * 0.48, cx, cy - h * 0.5);
    g.quadraticCurveTo(cx + w * 0.36, cy - h * 0.48, cx + w * 0.33, cy - h * 0.18);
    g.quadraticCurveTo(cx + w * 0.34, cy + h * 0.2, cx + w * 0.16, cy + h * 0.36);
    g.quadraticCurveTo(cx, cy + h * 0.44, cx - w * 0.16, cy + h * 0.36);
    g.quadraticCurveTo(cx - w * 0.34, cy + h * 0.2, cx - w * 0.33, cy - h * 0.18);
    g.fill();
    // ears
    g.fillStyle = skin[1];
    for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * w * 0.35, cy - h * 0.04, w * 0.05, h * 0.09, 0, 0, 7); g.fill(); }
    // hair
    g.fillStyle = '#4a2c16';
    g.beginPath();
    g.moveTo(cx - w * 0.34, cy - h * 0.2);
    g.quadraticCurveTo(cx - w * 0.38, cy - h * 0.56, cx, cy - h * 0.56);
    g.quadraticCurveTo(cx + w * 0.38, cy - h * 0.56, cx + w * 0.34, cy - h * 0.2);
    g.quadraticCurveTo(cx + w * 0.2, cy - h * 0.38, cx, cy - h * 0.38);
    g.quadraticCurveTo(cx - w * 0.2, cy - h * 0.38, cx - w * 0.34, cy - h * 0.2);
    g.fill();
    // brows
    const angry = st.expr === 'rampage' || st.expr === 'pain' || st.expr === 'ouch' || st.expr === 'god';
    g.strokeStyle = '#2a1608'; g.lineWidth = h * 0.05; g.lineCap = 'round';
    for (const s of [-1, 1]) {
      g.beginPath();
      const ex = cx + s * w * 0.14 + lx;
      const inner = angry ? h * 0.045 : -h * 0.01;
      g.moveTo(ex - s * w * 0.1, cy - h * 0.2);
      g.lineTo(ex + s * w * 0.06 - s * w * 0.12, cy - h * 0.2 + inner);
      g.stroke();
    }
    // eyes
    const eyeY = cy - h * 0.09;
    for (const s of [-1, 1]) {
      const ex = cx + s * w * 0.13 + lx;
      const squint = st.expr === 'pain' || st.expr === 'ouch' ? 0.45 : st.expr === 'rampage' ? 0.7 : 1;
      g.fillStyle = dead ? '#d8c8c0' : '#f2ece4';
      g.beginPath(); g.ellipse(ex, eyeY, w * 0.07, h * 0.04 * squint, 0, 0, 7); g.fill();
      if (!dead) {
        if (st.expr === 'god') { g.fillStyle = '#ffd020'; g.shadowColor = '#ffcc00'; g.shadowBlur = w * 0.15; }
        else g.fillStyle = '#3a5a8a';
        g.beginPath(); g.arc(ex + st.look * w * 0.035, eyeY, h * 0.03 * Math.max(0.6, squint), 0, 7); g.fill();
        g.shadowBlur = 0;
        g.fillStyle = '#000';
        g.beginPath(); g.arc(ex + st.look * w * 0.035, eyeY, h * 0.013, 0, 7); g.fill();
      } else {
        g.strokeStyle = '#401010'; g.lineWidth = h * 0.02;
        g.beginPath(); g.moveTo(ex - w * 0.05, eyeY - h * 0.02); g.lineTo(ex + w * 0.05, eyeY + h * 0.02); g.moveTo(ex + w * 0.05, eyeY - h * 0.02); g.lineTo(ex - w * 0.05, eyeY + h * 0.02); g.stroke();
      }
    }
    // nose
    g.strokeStyle = 'rgba(80,30,10,0.6)'; g.lineWidth = h * 0.025;
    g.beginPath(); g.moveTo(cx + lx * 0.8, cy - h * 0.06); g.lineTo(cx - w * 0.03 + lx, cy + h * 0.07); g.lineTo(cx + w * 0.04 + lx, cy + h * 0.08); g.stroke();
    // mouth
    const my = cy + h * 0.2;
    if (st.expr === 'grin' || st.expr === 'god') {
      g.fillStyle = '#300'; g.beginPath(); g.ellipse(cx + lx, my, w * 0.15, h * 0.05, 0, 0, Math.PI); g.fill();
      g.fillStyle = '#f4f0e0'; g.fillRect(cx - w * 0.13 + lx, my, w * 0.26, h * 0.025);
    } else if (st.expr === 'ouch' || dead) {
      g.fillStyle = '#200';
      g.beginPath(); g.ellipse(cx + lx, my + h * 0.01, w * 0.07, h * 0.07, 0, 0, 7); g.fill();
    } else {
      g.strokeStyle = '#5a1e10'; g.lineWidth = h * 0.03;
      g.beginPath();
      const frown = st.expr === 'pain' || st.expr === 'rampage' ? h * 0.025 : tier * h * 0.006;
      g.moveTo(cx - w * 0.1 + lx, my + frown); g.quadraticCurveTo(cx + lx, my - frown * 0.6, cx + w * 0.1 + lx, my + frown);
      g.stroke();
      if (st.expr === 'rampage') { g.fillStyle = '#eee'; g.fillRect(cx - w * 0.07 + lx, my - h * 0.012, w * 0.14, h * 0.02); }
    }
    // blood & bruises by health tier
    const bloodN = dead ? 6 : tier;
    let seed = 7;
    const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < bloodN; i++) {
      const bx = cx + (r() - 0.5) * w * 0.55, by = cy - h * 0.35 + r() * h * 0.2;
      g.strokeStyle = 'rgba(150,0,0,0.85)'; g.lineWidth = h * (0.02 + r() * 0.025);
      g.beginPath(); g.moveTo(bx, by); g.quadraticCurveTo(bx + (r() - 0.5) * w * 0.05, by + h * 0.15, bx + (r() - 0.5) * w * 0.06, by + h * (0.2 + r() * 0.25)); g.stroke();
    }
    if (tier >= 2 || dead) {
      g.fillStyle = 'rgba(90,30,70,0.35)';
      g.beginPath(); g.ellipse(cx - w * 0.17 + lx, eyeY + h * 0.04, w * 0.08, h * 0.06, 0, 0, 7); g.fill();
    }
    if (tier >= 3 || dead) {
      g.fillStyle = 'rgba(160,0,0,0.6)';
      g.beginPath(); g.ellipse(cx + w * 0.18, cy - h * 0.28, w * 0.09, h * 0.06, 0.4, 0, 7); g.fill();
    }
    g.restore();
  }

  // ------------------------------------------------------------------ main draw
  draw(world, dt, opts) {
    const g = this.ctx;
    this.time += dt;
    const dpr = this.dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, this.w, this.h);
    if (!world) return;
    const p = world.player;
    // idle eye wander
    this.lookTimer -= dt;
    if (this.lookTimer <= 0) { this.lookTimer = 0.8 + Math.random() * 1.6; this.lookDir = Math.random() < 0.5 ? 0 : Math.random() < 0.5 ? -1 : 1; }

    if (opts.automap) this.drawAutomap(world, opts);

    // crosshair
    if (opts.crosshair && !opts.automap && !p.dead) {
      const cx = this.w / 2, cy = (this.h - (opts.showBar ? this.barHeight : 0)) / 2 + (opts.showBar ? this.barHeight / 2 : 0);
      g.strokeStyle = 'rgba(255,230,180,0.75)'; g.lineWidth = 1.5;
      g.beginPath();
      g.moveTo(cx - 9, this.h / 2); g.lineTo(cx - 4, this.h / 2); g.moveTo(cx + 4, this.h / 2); g.lineTo(cx + 9, this.h / 2);
      g.moveTo(cx, this.h / 2 - 9); g.lineTo(cx, this.h / 2 - 4); g.moveTo(cx, this.h / 2 + 4); g.lineTo(cx, this.h / 2 + 9);
      g.stroke();
      void cy;
    }

    // damage direction arcs
    for (const hu of this.hurts) hu.t += dt;
    this.hurts = this.hurts.filter((h) => h.t < 1.2);
    if (!opts.automap) {
      const cx = this.w / 2, cy = this.h / 2, R = Math.min(this.w, this.h) * 0.33;
      for (const hu of this.hurts) {
        const a = -hu.angle - Math.PI / 2;
        const al = hu.a * (1 - hu.t / 1.2);
        g.strokeStyle = `rgba(255,30,10,${al})`;
        g.lineWidth = 7;
        g.beginPath(); g.arc(cx, cy, R, a - 0.28, a + 0.28); g.stroke();
      }
    }

    // messages
    for (const m of this.msgs) m.t += dt;
    this.msgs = this.msgs.filter((m) => m.t < m.dur);
    g.font = `${Math.round(Math.max(15, this.h * 0.028))}px ${FONT}`;
    g.textAlign = 'left'; g.textBaseline = 'top';
    let my = 12;
    for (const m of this.msgs.slice(-3)) {
      const a = Math.min(1, (m.dur - m.t) * 2);
      g.globalAlpha = a;
      g.fillStyle = '#000'; g.fillText(m.text, 16, my + 2);
      g.fillStyle = m.color; g.fillText(m.text, 14, my);
      my += Math.max(18, this.h * 0.034);
    }
    g.globalAlpha = 1;

    if (opts.fps) {
      g.font = `14px monospace`; g.textAlign = 'right'; g.fillStyle = '#9f9';
      g.fillText(opts.fps + ' fps', this.w - 10, 10);
    }

    if (opts.showBar) this.drawBar(world, g);
  }

  drawBar(world, g) {
    const p = world.player;
    const H = this.barHeight, W = H * 10;
    const x0 = Math.round((this.w - W) / 2), y0 = this.h - H;
    const bw = Math.round(W * this.dpr), bh = Math.round(H * this.dpr);
    if (!this.barCache || this.barCache.width !== bw) this.barCache = this.buildBar(bw, bh);
    // side fill so the bar spans the screen
    if (x0 > 0) {
      g.fillStyle = '#1e1b18';
      g.fillRect(0, y0, x0, H); g.fillRect(x0 + W, y0, this.w - x0 - W, H);
    }
    g.drawImage(this.barCache, x0, y0, W, H);
    const u = W / 320;
    const numY = y0 + H * 0.68, ns = Math.round(H * 0.56);
    const w = p.weapon;
    const ammoType = { pistol: 'bullets', chaingun: 'bullets', shotgun: 'shells' }[w];
    if (ammoType) this.bigNum(g, String(p.ammo[ammoType]), x0 + 46 * u, numY, ns);
    this.bigNum(g, Math.max(0, Math.ceil(p.health)) + '%', x0 + 103 * u, numY, ns);
    this.bigNum(g, Math.ceil(p.armor) + '%', x0 + 233 * u, numY, ns, p.armorType === 2 ? '#3050e8' : '#d8230e');
    // arms
    g.font = `${Math.round(7.5 * u)}px ${FONT}`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    const owned = { 2: p.weapons.pistol, 3: p.weapons.shotgun, 4: p.weapons.chaingun, 5: false, 6: false, 7: false };
    [2, 3, 4, 5, 6, 7].forEach((n, i) => {
      const ax = x0 + (112 + (i % 3) * 12) * u, ay = y0 + (9 + Math.floor(i / 3) * 10) * u;
      g.fillStyle = owned[n] ? '#ffd23a' : '#6a6258';
      g.fillText(String(n), ax, ay);
    });
    // face
    const fs = this.faceState(world);
    this.drawFace(g, x0 + 143 * u, y0 + 1 * u, 34 * u, H - 1 * u, fs);
    // keys (none on this map; empty slots)
    g.strokeStyle = 'rgba(120,110,100,0.4)';
    for (let i = 0; i < 3; i++) g.strokeRect(x0 + 238.5 * u, y0 + (4 + i * 8) * u, 7 * u, 6 * u);
    // ammo table
    g.font = `${Math.round(4.6 * u)}px ${FONT}`;
    g.textAlign = 'right'; g.textBaseline = 'alphabetic';
    const rows = [['bullets', 200], ['shells', 50], ['rockets', 50], ['cells', 300]];
    rows.forEach(([k, max], i) => {
      const yy = y0 + (9 + i * 6.4) * u;
      g.fillStyle = '#ffd23a';
      g.fillText(String(p.ammo[k]), x0 + 296 * u, yy);
      g.fillText(String(max), x0 + 316 * u, yy);
      g.fillStyle = '#9a8a5a'; g.fillText('/', x0 + 302 * u, yy);
    });
  }

  // ------------------------------------------------------------------ automap
  drawAutomap(world, opts) {
    const g = this.ctx;
    const p = world.player;
    const L = world.level;
    const barH = opts.showBar ? this.barHeight : 0;
    const H = this.h - barH;
    g.fillStyle = 'rgba(0,0,0,0.97)';
    g.fillRect(0, 0, this.w, H);
    g.save();
    g.beginPath(); g.rect(0, 0, this.w, H); g.clip();
    const s = this.amZoom * Math.min(this.w, H) / 700;
    const ox = this.w / 2 - p.x * s, oy = H / 2 + p.y * s;
    const X = (x) => ox + x * s, Y = (y) => oy - y * s;
    // grid
    g.strokeStyle = 'rgba(60,60,90,0.25)'; g.lineWidth = 1;
    g.beginPath();
    for (let gx = Math.floor((p.x - 3000) / 128) * 128; gx < p.x + 3000; gx += 128) { g.moveTo(X(gx), 0); g.lineTo(X(gx), H); }
    for (let gy = Math.floor((p.y - 3000) / 128) * 128; gy < p.y + 3000; gy += 128) { g.moveTo(0, Y(gy)); g.lineTo(this.w, Y(gy)); }
    g.stroke();
    g.lineWidth = Math.max(1.5, s * 2.2);
    g.lineCap = 'round';
    for (const l of L.lines) {
      if (!l.seen && !opts.revealAll) continue;
      let col;
      if (!l.back) col = '#e02a20';
      else {
        const f = l.front, b = l.back;
        const secretDoor = f.secretDoor || b.secretDoor;
        if (secretDoor) col = opts.revealAll ? '#ff40ff' : '#e02a20';
        else if (f.door || b.door) col = '#e8d440';
        else if (f.floor !== b.floor) col = '#b07840';
        else if (f.ceil !== b.ceil) col = '#e8d440';
        else if (opts.revealAll) col = 'rgba(120,120,120,0.6)';
        else continue;
      }
      if (!l.seen) col = 'rgba(140,140,160,0.55)';
      g.strokeStyle = col;
      g.beginPath(); g.moveTo(X(l.ax), Y(l.ay)); g.lineTo(X(l.bx), Y(l.by)); g.stroke();
    }
    if (opts.revealThings) {
      for (const m of world.monsters) {
        g.fillStyle = m.dead ? '#663' : '#f33';
        g.beginPath(); g.arc(X(m.x), Y(m.y), Math.max(2, m.radius * s), 0, 7); g.fill();
      }
      for (const it of world.items) {
        if (it.taken) continue;
        g.fillStyle = '#ff3'; g.fillRect(X(it.x) - 2, Y(it.y) - 2, 4, 4);
      }
    }
    // player arrow
    g.save();
    g.translate(X(p.x), Y(p.y));
    g.rotate(-p.angle);
    g.strokeStyle = '#fff'; g.lineWidth = 2;
    const a = Math.max(8, 16 * s * 2);
    g.beginPath();
    g.moveTo(-a, 0); g.lineTo(a, 0);
    g.moveTo(a, 0); g.lineTo(a * 0.4, -a * 0.45);
    g.moveTo(a, 0); g.lineTo(a * 0.4, a * 0.45);
    g.moveTo(-a, 0); g.lineTo(-a * 1.3, -a * 0.4); g.moveTo(-a, 0); g.lineTo(-a * 1.3, a * 0.4);
    g.stroke();
    g.restore();
    g.restore();
    // title & stats
    g.font = `${Math.round(Math.max(16, this.h * 0.03))}px ${FONT}`;
    g.fillStyle = '#e02a20'; g.textAlign = 'left'; g.textBaseline = 'bottom';
    g.fillText(world.mapData.name, 14, H - 10);
    const st = world.stats;
    g.textAlign = 'right';
    g.fillText(`K ${st.kills}/${st.totalKills}   I ${st.items}/${st.totalItems}   S ${st.secrets}/${st.totalSecrets}`, this.w - 14, H - 10);
  }
}
