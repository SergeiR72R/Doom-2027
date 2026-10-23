// HTML menus: title, skill select, options, controls, pause and intermission.
import { SKILLS } from '../game/defs.js';

const QUALITY_NAMES = { low: 'Low', medium: 'Medium', high: 'High', ultra: 'Ultra' };

function fmtTime(t) {
  const m = Math.floor(t / 60), s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export class Menu {
  constructor(game) {
    this.game = game;
    this.el = document.getElementById('menu');
    this.stack = [];
    this.capturingKey = false;
    this.el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      this.game.initAudio();
      this.game.audio.play('switch', { volume: 0.4 });
      this.act(b.dataset.act, b.dataset.arg);
    });
  }

  get inSubmenu() { return this.stack.length > 0; }

  render(html, cls = '') {
    this.el.className = 'visible ' + cls;
    this.el.innerHTML = html;
    const first = this.el.querySelector('button');
    if (first) first.focus({ preventScroll: true });
  }

  hide() { this.el.className = ''; this.el.innerHTML = ''; this.stack = []; }

  showLoading(text) {
    this.render(`<div class="loading"><div class="logo small">DOOM<span>2027</span></div><p>${text}</p></div>`, 'dim');
  }

  showTitle() {
    this.stack = [];
    this.screen = 'title';
    this.render(`
      <div class="title">
        <div class="logo">DOOM<span>2027</span></div>
        <div class="sub">EPISODE 1 · E1M1: HANGAR</div>
        <div class="buttons">
          <button data-act="new">New Game</button>
          <button data-act="options">Options</button>
          <button data-act="controls">Controls</button>
        </div>
        <div class="foot">A fan-made browser tribute. All graphics, sounds and music are generated procedurally.</div>
      </div>`, 'title-screen');
  }

  showSkill() {
    this.screen = 'skill';
    this.render(`
      <div class="panel">
        <h2>Choose Skill Level</h2>
        <div class="buttons skills">
          ${SKILLS.map((s, i) => `<button data-act="skill" data-arg="${i}">${s.name}</button>`).join('')}
        </div>
        <button class="back" data-act="back">Back</button>
      </div>`);
  }

  showPause() {
    this.stack = [];
    this.screen = 'pause';
    this.render(`
      <div class="panel">
        <h2>Paused</h2>
        <div class="buttons">
          <button data-act="resume">Resume</button>
          <button data-act="options">Options</button>
          <button data-act="controls">Controls</button>
          <button data-act="restart">Restart Level</button>
          <button data-act="quit">Quit to Title</button>
        </div>
      </div>`, 'dim');
  }

  showOptions() {
    const s = this.game.settings;
    const toggle = (k, label) => `<label class="row"><span>${label}</span><input type="checkbox" data-set="${k}" ${s[k] ? 'checked' : ''}></label>`;
    const range = (k, label, min, max, step) => `<label class="row"><span>${label}</span><input type="range" data-set="${k}" min="${min}" max="${max}" step="${step}" value="${s[k]}"><em>${s[k]}</em></label>`;
    this.render(`
      <div class="panel options">
        <h2>Options</h2>
        <div class="grid">
          ${range('sensitivity', 'Mouse sensitivity', 0.2, 3, 0.05)}
          ${toggle('invertY', 'Invert mouse Y')}
          ${range('fov', 'Field of view', 70, 120, 1)}
          <label class="row"><span>Graphics quality</span><select data-set="quality">${Object.keys(QUALITY_NAMES).map((q) => `<option value="${q}" ${s.quality === q ? 'selected' : ''}>${QUALITY_NAMES[q]}</option>`).join('')}</select></label>
          ${range('musicVol', 'Music volume', 0, 1, 0.05)}
          ${range('sfxVol', 'Sound volume', 0, 1, 0.05)}
          ${toggle('alwaysRun', 'Always run (Shift walks)')}
          ${toggle('autoaim', 'Vertical autoaim')}
          ${toggle('crosshair', 'Crosshair')}
          ${toggle('bob', 'View bobbing')}
          ${toggle('showFps', 'Show FPS')}
        </div>
        <p class="note">Light count and shadow quality fully apply on the next level start.</p>
        <button class="back" data-act="back">Back</button>
      </div>`, this.screen === 'pause' ? 'dim' : '');
    this.el.querySelectorAll('[data-set]').forEach((inp) => {
      inp.addEventListener('input', () => {
        const k = inp.dataset.set;
        let v = inp.type === 'checkbox' ? inp.checked : inp.type === 'range' ? parseFloat(inp.value) : inp.value;
        s[k] = v;
        const em = inp.parentElement.querySelector('em');
        if (em) em.textContent = v;
        this.game.onSettingsChanged(k);
      });
    });
  }

  showControls() {
    const rows = [
      ['W A S D / Arrows', 'Move / strafe (Alt + arrows strafes)'], ['Mouse', 'Look and turn'], ['Left click / Ctrl', 'Fire'],
      ['E / Space / Right click', 'Use: open doors, flip switches, ride lifts'], ['1 – 4 / Mouse wheel', 'Select weapon'],
      ['Shift', 'Walk (or run if always-run is off)'], ['Tab', 'Automap  (+ / − or wheel to zoom)'], ['Esc', 'Menu / pause'],
      ['Shift + F', 'Toggle FPS counter'], ['Classic cheats', 'iddqd, idkfa, idfa, idclip, iddt …'],
    ];
    this.render(`
      <div class="panel">
        <h2>Controls</h2>
        <table class="controls">${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</table>
        <button class="back" data-act="back">Back</button>
      </div>`, this.screen === 'pause' ? 'dim' : '');
  }

  showIntermission(stats, map) {
    this.screen = 'inter';
    const pct = (a, b) => (b ? Math.round((a / b) * 100) : 100);
    const target = { kills: pct(stats.kills, stats.totalKills), items: pct(stats.items, stats.totalItems), secrets: pct(stats.secrets, stats.totalSecrets) };
    this.render(`
      <div class="panel inter">
        <h3>${map.name.split(':')[1].trim()}</h3>
        <h2>Finished</h2>
        <table class="stats">
          <tr><td>Kills</td><td id="i-kills">0%</td></tr>
          <tr><td>Items</td><td id="i-items">0%</td></tr>
          <tr><td>Secrets</td><td id="i-secrets">0%</td></tr>
          <tr><td>Time</td><td id="i-time">0:00</td></tr>
          <tr><td>Par</td><td>${fmtTime(map.par)}</td></tr>
        </table>
        <div class="buttons" id="i-buttons" style="visibility:hidden">
          <p class="note">You have conquered the Hangar. E1M2 is coming in a future update.</p>
          <button data-act="replay">Play Again</button>
          <button data-act="quit">Title Screen</button>
        </div>
      </div>`, 'dim inter-screen');
    const keys = ['kills', 'items', 'secrets'];
    let i = 0, v = 0;
    const tick = () => {
      if (this.screen !== 'inter') return;
      if (i < keys.length) {
        v = Math.min(target[keys[i]], v + 2);
        document.getElementById('i-' + keys[i]).textContent = v + '%';
        this.game.audio.play('pistol', { volume: 0.18 });
        if (v >= target[keys[i]]) { i++; v = 0; this.game.audio.play('barrel_explode', { volume: 0.25 }); setTimeout(tick, 400); return; }
        setTimeout(tick, 30);
      } else {
        document.getElementById('i-time').textContent = fmtTime(stats.time);
        document.getElementById('i-buttons').style.visibility = 'visible';
        this.el.querySelector('#i-buttons button').focus();
      }
    };
    setTimeout(tick, 600);
  }

  back() {
    if (this.screen === 'pause') { this.game.resume(); return; }
    const prev = this.stack.pop();
    if (prev) prev(); else if (this.game.state === 'title') this.showTitle();
  }

  key(e) {
    const btns = [...this.el.querySelectorAll('button')];
    const i = btns.indexOf(document.activeElement);
    if (e.code === 'ArrowDown') { e.preventDefault(); (btns[i + 1] || btns[0])?.focus(); }
    if (e.code === 'ArrowUp') { e.preventDefault(); (btns[i - 1] || btns[btns.length - 1])?.focus(); }
  }

  act(a, arg) {
    const g = this.game;
    const back = this.game.state === 'paused' ? () => this.showPause() : () => this.showTitle();
    switch (a) {
      case 'new': this.stack.push(() => this.showTitle()); this.showSkill(); g.audio.startMusic('menu'); break;
      case 'skill': g.startGame(parseInt(arg, 10)); break;
      case 'options': this.stack.push(back); this.showOptions(); break;
      case 'controls': this.stack.push(back); this.showControls(); break;
      case 'back': this.back(); break;
      case 'resume': g.resume(); break;
      case 'restart': g.startGame(g.skill); break;
      case 'replay': g.startGame(g.skill); break;
      case 'quit': g.quitToTitle(); break;
    }
  }
}
