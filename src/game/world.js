// Game world: actors, AI, weapons, items, sector movers, effects.
import * as THREE from 'three';
import { Level } from '../engine/level.js';
import { LevelRenderer, makeSky } from '../render/levelmesh.js';
import { Particles, LightManager } from '../render/effects.js';
import { MonsterModel, makeThingModel, makeFireball } from '../render/models.js';
import { TIC, MONSTERS, WEAPONS, WEAPON_ORDER, MAX_AMMO, SKILLS, ITEMS } from './defs.js';

const rnd = () => Math.random();
const prand = () => Math.floor(Math.random() * 256); // Doom P_Random()
const angDiff = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
const DIRS = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (i * Math.PI) / 4);
const NODIR = 8;
const T = (v, x, y, z) => v.set(x, z, -y);
const _v = new THREE.Vector3();

// ======================================================================== base actor
class Actor {
  constructor(world, x, y, angle = 0) {
    this.world = world;
    this.x = x; this.y = y; this.angle = angle;
    this.vx = 0; this.vy = 0; this.vz = 0;
    this.radius = 16; this.height = 56;
    this.sector = world.level.findSector(x, y);
    this.z = this.sector ? this.sector.floor : 0;
    this.floorz = this.z; this.ceilz = this.z + 128;
    this.health = 1;
    this.solid = true; this.shootable = false; this.isMonster = false; this.dead = false;
    this.bleeds = true;
    this.mass = 100;
  }
  get cz() { return this.z + this.height / 2; }
  updateHeights() {
    const h = this.world.level.heightsAt(this.x, this.y, this.radius, this.sector);
    this.sector = h.sector || this.sector;
    this.floorz = h.floor; this.ceilz = h.ceil;
    return h;
  }
  // move horizontally with collision against walls and solid actors
  tryMove(dx, dy, noclip = false) {
    const L = this.world.level;
    const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 8));
    const sx = dx / steps, sy = dy / steps;
    let blockedLines = [];
    let hitActor = null;
    for (let i = 0; i < steps; i++) {
      let nx = this.x + sx, ny = this.y + sy;
      if (!noclip) {
        const r = L.moveCircle(this, nx, ny);
        nx = r.x; ny = r.y;
        if (r.blocked.length) blockedLines = r.blocked;
        // solid actors
        for (const a of this.world.solids) {
          if (a === this || !a.solid || a.dead) continue;
          const ddx = nx - a.x, ddy = ny - a.y;
          const md = this.radius + a.radius;
          if (Math.abs(ddx) >= md || Math.abs(ddy) >= md) continue;
          if (this.z >= a.z + a.height || a.z >= this.z + this.height) continue;
          const d = Math.hypot(ddx, ddy);
          if (d >= md) continue;
          hitActor = a;
          // push back out along the separation vector
          const ux = d > 0.001 ? ddx / d : -sx, uy = d > 0.001 ? ddy / d : -sy;
          nx = a.x + ux * (md + 0.01); ny = a.y + uy * (md + 0.01);
          const r2 = L.moveCircle(this, nx, ny);
          nx = r2.x; ny = r2.y;
        }
      }
      this.x = nx; this.y = ny;
      this.sector = L.findSector(nx, ny, this.sector) || this.sector;
    }
    return { blockedLines, hitActor };
  }
  applyGravity(dt) {
    if (this.z > this.floorz + 0.01 || this.vz > 0) {
      this.vz -= 1225 * dt;
      this.z += this.vz * dt;
      if (this.z <= this.floorz) { const v = this.vz; this.z = this.floorz; this.vz = 0; return v; }
    } else { this.z = this.floorz; this.vz = 0; }
    if (this.z + this.height > this.ceilz && this.ceilz - this.floorz >= this.height) { this.z = this.ceilz - this.height; if (this.vz > 0) this.vz = 0; }
    return 0;
  }
}

// ======================================================================== player
class Player extends Actor {
  constructor(world, x, y, angle) {
    super(world, x, y, angle);
    this.radius = 16; this.height = 56;
    this.health = 100; this.armor = 0; this.armorType = 0;
    this.pitch = 0;
    this.viewHeight = 41; this.viewOffset = 0; this.deathDrop = 0;
    this.weapons = { fist: true, pistol: true, shotgun: false, chaingun: false };
    this.ammo = { bullets: 50, shells: 0, rockets: 0, cells: 0 };
    this.weapon = 'pistol'; this.pendingWeapon = null;
    this.raise = 1; this.weaponState = 'ready';
    this.cooldown = 0; this.fireT = 10; this.refire = 0; this.flashT = 0; this.punchPending = -1;
    this.bobPhase = 0; this.bob = 0;
    this.shootable = true;
    this.damageCount = 0; this.bonusCount = 0;
    this.lastHurtAngle = null; this.lastHurtTime = -10; this.lastHurtAmount = 0;
    this.grinTime = -10; this.attackHeld = 0;
    this.slimeTimer = 0;
    this.god = false; this.noclip = false;
    this.killer = null;
    this.landSquash = 0;
  }

  get eyeZ() { return this.z + this.viewHeight + this.viewOffset - this.deathDrop; }

  update(dt, input) {
    const W = this.world;
    const set = W.settings;
    if (this.dead) {
      this.deathDrop = Math.min(this.viewHeight - 8, this.deathDrop + dt * 60);
      if (this.killer && !this.killer.dead) {
        const want = Math.atan2(this.killer.y - this.y, this.killer.x - this.x);
        this.angle += angDiff(want, this.angle) * Math.min(1, dt * 3);
      }
      this.pitch *= 0.95;
      this.updateHeights();
      this.applyGravity(dt);
      this.vx *= Math.exp(-dt * 4); this.vy *= Math.exp(-dt * 4);
      this.tryMove(this.vx * dt, this.vy * dt);
      return;
    }
    // look
    this.angle -= input.lookX;
    this.pitch = Math.max(-1.25, Math.min(1.25, this.pitch - input.lookY));
    // movement (Doom-like momentum)
    const run = input.run;
    const fwd = input.forward * (run ? 583 : 292);
    const str = input.strafe * (run ? 470 : 233);
    const ca = Math.cos(this.angle), sa = Math.sin(this.angle);
    const onGround = this.z <= this.floorz + 0.5;
    const k = 4.2;
    const control = onGround ? 1 : 0.0;
    const wx = ca * fwd + sa * str, wy = sa * fwd - ca * str;
    this.vx += (wx * k * control) * dt;
    this.vy += (wy * k * control) * dt;
    if (onGround) { const f = Math.exp(-k * dt); this.vx *= f; this.vy *= f; }
    const sp = Math.hypot(this.vx, this.vy);
    if (sp < 2 && !input.forward && !input.strafe) { this.vx = 0; this.vy = 0; }
    const oldZ = this.z;
    this.tryMove(this.vx * dt, this.vy * dt, this.noclip);
    this.updateHeights();
    if (this.floorz > this.z && this.floorz - this.z <= 24.5) {
      this.viewOffset -= this.floorz - this.z;
      this.z = this.floorz;
    }
    const landV = this.applyGravity(dt);
    if (landV < -280) {
      this.landSquash = Math.min(16, -landV / 40);
      W.audio.play('player_land', { volume: 0.8 });
    }
    if (this.z < oldZ && onGround && oldZ - this.z < 24 && this.z <= this.floorz + 0.01) {
      // stepped down: small smoothing
      this.viewOffset += Math.min(8, oldZ - this.z) * 0.5;
    }
    this.viewOffset *= Math.exp(-dt * 14);
    if (this.landSquash > 0) this.landSquash = Math.max(0, this.landSquash - dt * 50);
    // view bob
    const bobAmt = Math.min(1, Math.hypot(this.vx, this.vy) / 583) * (onGround ? 1 : 0);
    this.bob += (bobAmt - this.bob) * Math.min(1, dt * 10);
    this.bobPhase += dt * 11.5 * (0.4 + bobAmt * 0.6);

    // sector specials
    const s = this.sector;
    if (s) {
      if (s.secret && !s.secretFound) {
        s.secretFound = true;
        W.stats.secrets++;
        W.hud.message('A secret is revealed!', 3, '#ffd23a');
        W.audio.play('secret');
      }
      if (s.damage && this.z <= this.floorz + 0.5) {
        this.slimeTimer -= dt;
        if (this.slimeTimer <= 0) {
          this.slimeTimer = 32 * TIC;
          this.damage(s.damage, null, 'slime');
          W.audio.play('slime_burn', { volume: 0.6 });
        }
      } else this.slimeTimer = Math.min(this.slimeTimer, 0);
      if (s.lift && s.prevPlayerSector && s.prevPlayerSector !== s && s.prevPlayerSector.floor >= s.floor - 1 && !s.moving) {
        // walking onto the lift from the top triggers it
        W.activateLift(s);
      }
      if (s !== this.lastSector) { s.prevPlayerSector = this.lastSector; this.lastSector = s; }
    }

    // use
    if (input.use) W.useLines(this);

    // weapons
    this.updateWeapon(dt, input);
    if (this.damageCount > 0) this.damageCount = Math.max(0, this.damageCount - dt * 40);
    if (this.bonusCount > 0) this.bonusCount = Math.max(0, this.bonusCount - dt * 40);
    W.pickupItems(this);
  }

  hasAmmo(w) {
    const d = WEAPONS[w];
    return !d.ammo || this.ammo[d.ammo] >= d.perShot;
  }

  bestWeapon() {
    for (const w of ['chaingun', 'shotgun', 'pistol', 'fist']) if (this.weapons[w] && this.hasAmmo(w)) return w;
    return 'fist';
  }

  selectWeapon(w) {
    if (!this.weapons[w] || this.dead) return;
    if (w === this.weapon && !this.pendingWeapon) return;
    this.pendingWeapon = w;
  }

  updateWeapon(dt, input) {
    const W = this.world;
    if (input.weaponSlot) {
      const want = WEAPON_ORDER.find((w) => WEAPONS[w].slot === input.weaponSlot);
      if (want) this.selectWeapon(want);
    }
    if (input.cycle) {
      const owned = WEAPON_ORDER.filter((w) => this.weapons[w]);
      const cur = owned.indexOf(this.pendingWeapon || this.weapon);
      const next = owned[(cur + input.cycle + owned.length) % owned.length];
      this.selectWeapon(next);
    }
    this.fireT += dt;
    this.cooldown -= dt;
    if (this.flashT > 0) this.flashT -= dt;
    // punch impact happens a few tics into the animation
    if (this.punchPending >= 0) { this.punchPending -= dt; if (this.punchPending < 0) W.punch(this); }
    if (this.weaponState === 'lowering') {
      this.raise -= dt * 4.5;
      if (this.raise <= 0) {
        this.raise = 0;
        this.weapon = this.pendingWeapon; this.pendingWeapon = null;
        this.weaponState = 'raising';
        W.audio.play('weapon_switch', { volume: 0.5 });
      }
      return;
    }
    if (this.weaponState === 'raising') {
      this.raise += dt * 4.5;
      if (this.raise >= 1) { this.raise = 1; this.weaponState = 'ready'; }
      return;
    }
    if (this.pendingWeapon && this.cooldown <= 0) { this.weaponState = 'lowering'; return; }
    if (input.fire) this.attackHeld += dt; else this.attackHeld = 0;
    if (input.fire && this.cooldown <= 0) {
      if (!this.hasAmmo(this.weapon)) {
        const b = this.bestWeapon();
        if (b !== this.weapon) this.selectWeapon(b);
        return;
      }
      W.fireWeapon(this, this.weapon);
      this.refire++;
      this.cooldown = WEAPONS[this.weapon].refire;
      this.fireT = 0;
    } else if (!input.fire && this.cooldown <= 0) this.refire = 0;
  }

  damage(amount, source, kind) {
    const W = this.world;
    if (this.dead) return;
    if (this.god && kind !== 'telefrag') return;
    amount *= SKILLS[W.skill].dmgMul;
    amount = Math.max(1, Math.round(amount));
    if (this.armorType) {
      let saved = this.armorType === 1 ? Math.floor(amount / 3) : Math.floor(amount / 2);
      if (this.armor <= saved) { saved = this.armor; this.armorType = 0; }
      this.armor -= saved;
      amount -= saved;
    }
    this.health -= amount;
    this.damageCount = Math.min(100, this.damageCount + amount * 2.5);
    this.lastHurtTime = W.time; this.lastHurtAmount = amount;
    if (source && source !== this) {
      this.lastHurtAngle = angDiff(Math.atan2(source.y - this.y, source.x - this.x), this.angle);
      W.hud.hurtFrom(this.lastHurtAngle, amount);
    } else this.lastHurtAngle = null;
    if (this.health <= 0) {
      this.health = Math.max(this.health, -99);
      this.dead = true;
      this.killer = source;
      W.audio.play(this.health < -50 ? 'gib' : 'player_death');
      W.onPlayerDeath();
    } else {
      W.audio.play('player_pain', { volume: 0.9 });
    }
  }
}

// ======================================================================== monster
class Monster extends Actor {
  constructor(world, type, x, y, angle, ambush) {
    super(world, x, y, angle);
    const d = MONSTERS[type];
    this.type = type; this.def = d;
    this.radius = d.radius; this.height = d.height;
    this.health = d.hp; this.mass = d.mass;
    this.shootable = true; this.isMonster = true;
    this.ambush = !!ambush;
    this.state = 'spawn'; this.st = 0;
    this.target = null; this.threshold = 0;
    this.reaction = d.reaction; this.movedir = NODIR; this.movecount = 0;
    this.stepTimer = rnd() * d.stepTics * TIC;
    this.lookTimer = rnd() * 0.3;
    this.justAttacked = false; this.justHit = false; this.fired = false;
    this.model = new MonsterModel(type);
    this.model.addBloodPool();
    this.walkPhase = rnd() * 6;
    this.visAngle = angle;
    this.fast = !!SKILLS[world.skill].fast;
    world.scene.add(this.model.root);
    this.syncModel(0);
    this.time = rnd() * 10;
  }

  get speed() { return (this.def.speed / (this.def.stepTics * TIC)); }

  syncModel(dt) {
    const m = this.model;
    T(m.root.position, this.x, this.y, this.z);
    // smooth visual turning
    const want = this.state === 'attack' || this.state === 'melee' || this.state === 'pain' ? this.angle : (this.movedir !== NODIR && this.state === 'chase' ? DIRS[this.movedir] : this.angle);
    this.visAngle += angDiff(want, this.visAngle) * Math.min(1, dt * 10);
    if (!this.dead) m.root.rotation.y = this.visAngle + Math.PI / 2;
    let anim = 'idle';
    if (this.dead) anim = 'dead';
    else if (this.state === 'chase') anim = 'walk';
    else if (this.state === 'attack') anim = this.meleeAttack ? 'melee' : 'attack';
    else if (this.state === 'pain') anim = 'pain';
    let aimPitch = 0;
    if (this.target && this.state === 'attack') {
      const dz = (this.target.cz) - (this.z + 40);
      aimPitch = Math.atan2(dz, Math.hypot(this.target.x - this.x, this.target.y - this.y)) * 0.8;
    }
    // only monsters under the open sky need to cast sun shadows
    if (this.sector) m.setShadows(!!this.sector.sky);
    m.update(dt, { anim, t: this.st, walkPhase: this.walkPhase, time: this.time, fireAt: this.fireAt, aimPitch });
  }

  canSee(t) {
    const L = this.world.level;
    return L.checkSight(this.x, this.y, this.z + this.height * 0.75, t.x, t.y, t.z, t.z + t.height);
  }

  lookForPlayer(allAround) {
    const p = this.world.player;
    if (p.dead) return false;
    if (!this.canSee(p)) return false;
    if (!allAround) {
      const a = Math.atan2(p.y - this.y, p.x - this.x);
      const d = Math.hypot(p.x - this.x, p.y - this.y);
      if (Math.abs(angDiff(a, this.angle)) > Math.PI / 2 && d > 64) return false;
    }
    this.target = p;
    return true;
  }

  wake() {
    this.state = 'chase'; this.st = 0;
    const W = this.world;
    W.audio.play(this.def.sight, { pos: this.pos3(), pitchVar: 0.08, volume: 1, rate: this.def.voicePitch });
  }

  pos3() { return { x: this.x, y: this.z + 40, z: -this.y }; }

  update(dt) {
    const W = this.world;
    this.time += dt;
    this.st += dt;
    this.updateHeights();
    if (this.floorz > this.z && this.floorz - this.z <= 24.5) this.z = this.floorz;
    this.applyGravity(dt);
    if (this.dead) {
      this.syncModel(dt);
      if (this.respawnAt && W.time > this.respawnAt && !this.gibbed) this.tryRespawn();
      return;
    }
    // knockback
    if (this.vx || this.vy) {
      this.tryMove(this.vx * dt, this.vy * dt);
      const f = Math.exp(-dt * 6); this.vx *= f; this.vy *= f;
      if (Math.abs(this.vx) + Math.abs(this.vy) < 3) { this.vx = this.vy = 0; }
    }
    switch (this.state) {
      case 'spawn': {
        this.lookTimer -= dt;
        if (this.lookTimer <= 0) {
          this.lookTimer = 10 * TIC;
          let woke = false;
          const s = this.sector;
          if (s && s.soundTarget && s.soundTime > (this.lastHeard || -1)) {
            this.lastHeard = s.soundTime;
            if (!this.ambush || this.canSee(s.soundTarget)) { this.target = s.soundTarget; woke = true; }
          }
          if (!woke) woke = this.lookForPlayer(false);
          if (woke) this.wake();
        }
        break;
      }
      case 'chase': this.chase(dt); break;
      case 'attack': this.attackState(dt); break;
      case 'pain': if (this.st > 0.2) { this.state = 'chase'; this.st = 0; } break;
    }
    this.syncModel(dt);
  }

  chase(dt) {
    const W = this.world;
    // continuous movement along movedir
    if (this.movedir !== NODIR) {
      const sp = this.speed * dt;
      const ox = this.x, oy = this.y;
      const res = this.tryMove(Math.cos(DIRS[this.movedir]) * sp, Math.sin(DIRS[this.movedir]) * sp);
      const moved = Math.hypot(this.x - ox, this.y - oy);
      this.walkPhase += moved * 0.16;
      if (moved < sp * 0.4) {
        for (const l of res.blockedLines) W.monsterUseLine(this, l);
        this.newChaseDir();
      }
    }
    this.stepTimer -= dt;
    if (this.stepTimer > 0) return;
    this.stepTimer += this.def.stepTics * TIC;
    if (this.reaction > 0) this.reaction--;
    if (this.threshold > 0) this.threshold--;
    const t = this.target;
    if (!t || t.dead || !t.shootable) {
      this.target = null;
      if (this.lookForPlayer(true)) return;
      this.state = 'spawn'; this.st = 0; this.movedir = NODIR;
      return;
    }
    if (this.justAttacked) {
      this.justAttacked = false;
      if (!this.fast) this.newChaseDir();
      return;
    }
    const dist = Math.hypot(t.x - this.x, t.y - this.y);
    // melee
    if (this.def.melee && dist < 64 - 20 + t.radius && Math.abs(t.z - this.z) < 48 && this.canSee(t)) {
      this.startAttack(true);
      return;
    }
    // missile / hitscan (Doom only considers it once the current walk run is over)
    if ((this.fast || this.movecount <= 0) && this.checkMissileRange(dist)) {
      this.startAttack(false);
      return;
    }
    if (--this.movecount < 0 || this.movedir === NODIR) this.newChaseDir();
    if (prand() < 3) W.audio.play(this.def.active, { pos: this.pos3(), volume: 0.8, rate: this.def.voicePitch });
  }

  checkMissileRange(dist) {
    const t = this.target;
    if (!this.canSee(t)) return false;
    if (this.justHit) { this.justHit = false; return true; }
    if (this.reaction > 0 && !this.fast) return false;
    let d = dist - 64;
    if (!this.def.melee) d -= 128;
    if (d > 200) d = 200;
    if (prand() < d) return false;
    return true;
  }

  startAttack(melee) {
    this.state = 'attack'; this.st = 0; this.fired = false;
    this.meleeAttack = melee;
    this.fireAt = melee ? 6 * TIC : this.def.fireAt * (this.fast ? 0.5 : 1);
    this.attackEnd = melee ? 18 * TIC : this.def.attackEnd * (this.fast ? 0.5 : 1);
    this.faceTarget();
    if (melee) this.world.audio.play('imp_claw', { pos: this.pos3(), volume: 0.8 });
  }

  faceTarget() {
    if (this.target) this.angle = Math.atan2(this.target.y - this.y, this.target.x - this.x);
  }

  attackState() {
    const W = this.world;
    const t = this.target;
    if (!this.fired) this.faceTarget();
    if (!this.fired && this.st >= this.fireAt) {
      this.fired = true;
      if (!t || t.dead) { this.state = 'chase'; return; }
      if (this.meleeAttack || (this.def.melee && Math.hypot(t.x - this.x, t.y - this.y) < 64 - 20 + t.radius && this.canSee(t))) {
        const dmg = ((prand() % 8) + 1) * 3;
        if (Math.hypot(t.x - this.x, t.y - this.y) < 64 - 20 + t.radius + 8) W.damageActor(t, dmg, this, this);
      } else if (this.def.attack === 'hitscan') {
        W.audio.play(this.def.shot, { pos: this.pos3(), volume: 0.9 });
        this.model.flash = 0.09;
        const fp = this.model.firePoint(_v);
        W.lights.flash(fp.x, fp.y, fp.z, 0xffc070, 1.6, 260, 0.08);
        const sz = this.z + 32;
        const dist = Math.hypot(t.x - this.x, t.y - this.y);
        const slope = (t.cz - sz) / Math.max(1, dist);
        for (let i = 0; i < this.def.pellets; i++) {
          const ang = this.angle + ((prand() - prand()) / 255) * (22.4 * Math.PI / 180);
          const dmg = ((prand() % 5) + 1) * 3;
          W.lineAttack(this, this.x, this.y, sz, ang, slope, 2048, dmg);
        }
        W.level.noiseAlert(this.sector, t, W.time);
      } else if (this.def.attack === 'fireball') {
        W.spawnFireball(this, t);
      }
    }
    if (this.st >= this.attackEnd) {
      this.state = 'chase'; this.st = 0;
      this.justAttacked = true;
    }
  }

  tryWalk(dir) {
    if (dir === NODIR) return false;
    const L = this.world.level;
    const step = 20;
    const nx = this.x + Math.cos(DIRS[dir]) * step, ny = this.y + Math.sin(DIRS[dir]) * step;
    const r = L.moveCircle(this, nx, ny);
    const moved = Math.hypot(r.x - this.x, r.y - this.y);
    let ok = moved > step * 0.7;
    if (!ok) {
      // a closed door in the way? monsters open doors
      for (const l of r.blocked) if (this.world.monsterUseLine(this, l)) { ok = true; break; }
    }
    if (ok) {
      for (const a of this.world.solids) {
        if (a === this || a.dead || !a.solid) continue;
        if (Math.hypot(r.x - a.x, r.y - a.y) < this.radius + a.radius - 2 && Math.hypot(this.x - a.x, this.y - a.y) >= this.radius + a.radius - 2) {
          if (a.z < this.z + this.height && this.z < a.z + a.height) { ok = false; break; }
        }
      }
    }
    if (!ok) return false;
    this.movedir = dir;
    this.movecount = prand() & 15;
    return true;
  }

  newChaseDir() {
    const t = this.target;
    if (!t) { this.movedir = NODIR; return; }
    const olddir = this.movedir;
    const turnaround = olddir === NODIR ? NODIR : (olddir + 4) % 8;
    const dx = t.x - this.x, dy = t.y - this.y;
    let d1 = dx > 10 ? 0 : dx < -10 ? 4 : NODIR;
    let d2 = dy < -10 ? 6 : dy > 10 ? 2 : NODIR;
    if (d1 !== NODIR && d2 !== NODIR) {
      const diag = d1 === 0 ? (d2 === 2 ? 1 : 7) : (d2 === 2 ? 3 : 5);
      if (diag !== turnaround && this.tryWalk(diag)) return;
    }
    if (prand() > 200 || Math.abs(dy) > Math.abs(dx)) { const tmp = d1; d1 = d2; d2 = tmp; }
    if (d1 === turnaround) d1 = NODIR;
    if (d2 === turnaround) d2 = NODIR;
    if (d1 !== NODIR && this.tryWalk(d1)) return;
    if (d2 !== NODIR && this.tryWalk(d2)) return;
    if (olddir !== NODIR && this.tryWalk(olddir)) return;
    const order = rnd() < 0.5 ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
    for (const d of order) if (d !== turnaround && this.tryWalk(d)) return;
    if (turnaround !== NODIR && this.tryWalk(turnaround)) return;
    this.movedir = NODIR;
  }

  damage(amount, source, inflictor) {
    const W = this.world;
    if (this.dead) return;
    this.health -= amount;
    // knockback (Doom thrust)
    if (inflictor && inflictor !== this) {
      const a = Math.atan2(this.y - inflictor.y, this.x - inflictor.x);
      const th = (amount * 12.5 / this.mass) * 35 * 0.6;
      this.vx += Math.cos(a) * th; this.vy += Math.sin(a) * th;
    }
    if (this.health <= 0) { this.die(source); return; }
    this.justHit = true;
    if (prand() < this.def.painChance) {
      this.state = 'pain'; this.st = 0;
      W.audio.play(this.def.pain, { pos: this.pos3(), rate: this.def.voicePitch });
    }
    if (source && source !== this && (this.threshold <= 0 || !this.target || this.target.dead)) {
      if (source.shootable) {
        this.target = source;
        this.threshold = 100;
      }
    }
    if (this.state === 'spawn') this.state = 'chase';
    this.reaction = 0;
  }

  die(source) {
    const W = this.world;
    this.dead = true; this.solid = false; this.shootable = false;
    this.state = 'dead'; this.st = 0;
    this.gibbed = this.health < -this.def.hp;
    this.model.root.rotation.y = this.visAngle + Math.PI / 2;
    if (this.gibbed) {
      this.model.gib();
      W.audio.play('gib', { pos: this.pos3() });
      W.fx.blood(this.x, this.y, this.z + 30, 40, 1.6);
    } else W.audio.play(this.def.death, { pos: this.pos3(), rate: this.def.voicePitch });
    if (!this.respawned) W.stats.kills++;
    if (this.def.drop) W.spawnItem(this.def.drop, this.x, this.y, true);
    if (SKILLS[W.skill].respawn) this.respawnAt = W.time + 12 + rnd() * 8;
  }

  tryRespawn() {
    const W = this.world;
    const sp = this.spawn;
    for (const a of W.solids) if (!a.dead && a.solid && Math.hypot(a.x - sp.x, a.y - sp.y) < a.radius + this.radius) { this.respawnAt = W.time + 3; return; }
    W.scene.remove(this.model.root);
    const m = new Monster(W, this.type, sp.x, sp.y, sp.angle, sp.ambush);
    m.spawn = sp; m.respawned = true;
    W.monsters.push(m); W.solids.push(m);
    this.respawnAt = null;
    W.fx.teleport(sp.x, sp.y, m.z);
  }
}

// ======================================================================== barrel & decor
class Barrel extends Actor {
  constructor(world, x, y) {
    super(world, x, y);
    this.radius = 10; this.height = 42;
    this.health = 20; this.shootable = true; this.bleeds = false;
    this.type = 'barrel';
    const m = makeThingModel('barrel');
    this.model = m.group;
    T(this.model.position, x, y, this.z);
    this.model.rotation.y = rnd() * 6.28;
    world.scene.add(this.model);
    this.explodeAt = -1;
    this.phase = rnd() * 10;
  }
  damage(amount, source) {
    if (this.dead) return;
    this.health -= amount;
    if (this.health <= 0) {
      this.dead = true; this.shootable = false;
      this.killer = source;
      this.explodeAt = this.world.time + 10 * TIC;
    }
  }
  update(dt) {
    const W = this.world;
    if (this.explodeAt > 0 && W.time >= this.explodeAt) {
      this.explodeAt = -1;
      this.solid = false;
      W.scene.remove(this.model);
      W.audio.play('barrel_explode', { pos: { x: this.x, y: this.z + 20, z: -this.y } });
      W.fx.explosion(this.x, this.y, this.z + 24, 1.2);
      W.radiusAttack(this, this.killer || this, 128);
      this.gone = true;
    }
    if (!this.gone) {
      const s = this.model.userData.slime;
      if (s) s.material.emissiveIntensity = 1.8 + Math.sin(W.time * 3 + this.phase) * 0.5;
      if (this.dead) {
        // pre-explosion glow & shake
        this.model.position.x = this.x + (rnd() - 0.5) * 1.5;
      }
    }
  }
}

class Decoration extends Actor {
  constructor(world, type, x, y) {
    super(world, x, y);
    this.type = type;
    this.radius = 16; this.height = 80;
    const m = makeThingModel(type);
    this.model = m.group;
    T(this.model.position, x, y, this.z);
    world.scene.add(this.model);
  }
}

// ======================================================================== items
class Item {
  constructor(world, type, x, y, dropped) {
    this.world = world; this.type = type; this.x = x; this.y = y; this.dropped = !!dropped;
    this.def = ITEMS[type];
    this.sector = world.level.findSector(x, y);
    this.z = this.sector ? this.sector.floor : 0;
    const m = makeThingModel(type);
    this.model = m.group; this.spin = m.spin; this.bob = m.bob;
    this.phase = rnd() * 6.28;
    this.vz = dropped ? 140 : 0;
    this.zoff = dropped ? 30 : 0;
    T(this.model.position, x, y, this.z);
    world.scene.add(this.model);
    this.taken = false;
  }
  update(dt, t) {
    if (this.zoff > 0 || this.vz > 0) { this.vz -= 1225 * dt; this.zoff += this.vz * dt; if (this.zoff <= 0) { this.zoff = 0; this.vz = 0; } }
    const b = this.bob ? 2 + Math.sin(t * 2.4 + this.phase) * 2 : 0;
    this.model.position.y = this.z + this.zoff + b;
    if (this.spin) this.model.rotation.y = t * 1.2 + this.phase;
  }
}

// ======================================================================== projectiles
class Fireball {
  constructor(world, owner, x, y, z, ang, slope, speed) {
    this.world = world; this.owner = owner;
    this.x = x; this.y = y; this.z = z;
    this.vx = Math.cos(ang) * speed; this.vy = Math.sin(ang) * speed; this.vz = slope * speed;
    this.radius = 6; this.height = 8;
    this.sector = world.level.findSector(x, y);
    this.model = makeFireball();
    T(this.model.position, x, y, z);
    world.scene.add(this.model);
    this.light = world.lights.flash(x, z, -y, 0xff7020, 1.4, 300, 30, this.model.position);
    this.dead = false;
    this.age = 0;
  }
  update(dt) {
    const W = this.world, L = W.level;
    this.age += dt;
    const steps = Math.max(1, Math.ceil(Math.hypot(this.vx, this.vy, this.vz) * dt / 8));
    for (let i = 0; i < steps && !this.dead; i++) {
      const sdt = dt / steps;
      const nx = this.x + this.vx * sdt, ny = this.y + this.vy * sdt, nz = this.z + this.vz * sdt;
      // walls
      for (const c of L.crossings(this.x, this.y, nx, ny)) {
        const l = c.line;
        const hz = this.z + (nz - this.z) * c.t;
        if (!l.back) { this.explode(this.x + (nx - this.x) * c.t, this.y + (ny - this.y) * c.t, hz); return; }
        const top = Math.min(l.front.ceil, l.back.ceil), bot = Math.max(l.front.floor, l.back.floor);
        if (hz < bot || hz + this.height > top) {
          if (hz + this.height > top && l.front.sky && l.back.sky) { this.vanish(); return; }
          this.explode(this.x + (nx - this.x) * c.t, this.y + (ny - this.y) * c.t, hz); return;
        }
      }
      this.x = nx; this.y = ny; this.z = nz;
      this.sector = L.findSector(nx, ny, this.sector);
      const s = this.sector;
      if (s) {
        if (this.z < s.floor) { this.explode(this.x, this.y, s.floor + 2); return; }
        if (this.z + this.height > s.ceil) { if (s.sky) { this.vanish(); return; } this.explode(this.x, this.y, s.ceil - 4); return; }
      }
      // actors
      for (const a of W.shootables()) {
        if (a === this.owner || !a.shootable) continue;
        const d = Math.hypot(a.x - this.x, a.y - this.y);
        if (d > a.radius + this.radius) continue;
        if (this.z > a.z + a.height || this.z + this.height < a.z) continue;
        if (a.type && this.owner.type === a.type) { this.explode(this.x, this.y, this.z); return; }
        const dmg = ((prand() % 8) + 1) * 3;
        W.damageActor(a, dmg, this.owner, this);
        this.explode(this.x, this.y, this.z);
        return;
      }
    }
    if (this.dead) return;
    T(this.model.position, this.x, this.y, this.z + 4);
    const s = 14 + Math.sin(this.age * 40) * 2;
    this.model.userData.core.scale.set(s, s, 1);
    this.model.userData.core.material.rotation = this.age * 8;
    if (rnd() < 0.8) W.fx.trail(this.x, this.y, this.z + 4);
  }
  explode(x, y, z) {
    const W = this.world;
    this.dead = true;
    W.scene.remove(this.model);
    this.light.life = this.light.max;
    W.audio.play('fireball_explode', { pos: { x, y: z, z: -y } });
    W.fx.fireballHit(x, y, z);
  }
  vanish() {
    this.dead = true;
    this.world.scene.remove(this.model);
    this.light.life = this.light.max;
  }
}

// ======================================================================== effects helper
class FX {
  constructor(world) {
    const tex = world.tex, scene = world.scene;
    this.world = world;
    this.smoke = new Particles(scene, tex.SMOKE.map, { max: 500, additive: false, lit: true });
    this.blood_ = new Particles(scene, tex.BLOOD.map, { max: 500, additive: false, lit: true });
    this.spark = new Particles(scene, tex.SPARK.map, { max: 400, additive: true });
    this.fire = new Particles(scene, tex.FIRE.map, { max: 400, additive: true });
    this.flare = new Particles(scene, tex.FLARE.map, { max: 200, additive: true });
    this.all = [this.smoke, this.blood_, this.spark, this.fire, this.flare];
    // bullet hole decals
    this.decals = [];
    this.decalMat = new THREE.MeshStandardMaterial({ map: tex.SCORCH.map, transparent: true, depthWrite: false, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.decalGeo = new THREE.PlaneGeometry(1, 1);
  }
  update(dt, fogDensity, ambient) {
    for (const p of this.all) {
      p.update(dt);
      p.mat.uniforms.fogDensity.value = fogDensity;
      p.mat.uniforms.ambient.value = ambient;
    }
  }
  puff(x, y, z, nx = 0, ny = 0, nz = 0) {
    for (let i = 0; i < 5; i++) {
      this.spark.spawn({ x, y: z, z: -y, vx: (nx * 120 + (rnd() - 0.5) * 200), vy: nz * 120 + rnd() * 160, vz: -(ny * 120 + (rnd() - 0.5) * 200), life: 0.15 + rnd() * 0.25, size: 1.6, size1: 0.4, r: 1, g: 0.8, b: 0.45, alpha: 1, alpha1: 0, gravity: 500 });
    }
    for (let i = 0; i < 2; i++) {
      this.smoke.spawn({ x: x + nx * 2, y: z + nz * 2, z: -(y + ny * 2), vx: nx * 20 + (rnd() - 0.5) * 10, vy: 18 + rnd() * 10, vz: -ny * 20 + (rnd() - 0.5) * 10, life: 0.8 + rnd() * 0.6, size: 5, size1: 16, r: 0.6, g: 0.58, b: 0.55, alpha: 0.55, alpha1: 0, drag: 2, vrot: (rnd() - 0.5) * 2 });
    }
    this.flare.spawn({ x, y: z, z: -y, life: 0.06, size: 10, size1: 4, r: 1, g: 0.7, b: 0.3, alpha: 0.9, alpha1: 0 });
  }
  blood(x, y, z, n = 10, force = 1) {
    const s = this.world.level.findSector(x, y);
    const floor = s ? s.floor + 0.5 : -1e9;
    for (let i = 0; i < n; i++) {
      this.blood_.spawn({ x, y: z, z: -y, vx: (rnd() - 0.5) * 160 * force, vy: rnd() * 140 * force, vz: (rnd() - 0.5) * 160 * force, life: 0.5 + rnd() * 0.6, size: 2.5 + rnd() * 3, size1: 4 + rnd() * 3, r: 0.75, g: 0.04, b: 0.03, alpha: 1, alpha1: 0.0, gravity: 700, floor });
    }
    for (let i = 0; i < Math.min(3, n / 3); i++) {
      this.blood_.spawn({ x, y: z, z: -y, vx: (rnd() - 0.5) * 30, vy: rnd() * 30, vz: (rnd() - 0.5) * 30, life: 0.4, size: 6, size1: 14, r: 0.5, g: 0.02, b: 0.02, alpha: 0.7, alpha1: 0, gravity: 50 });
    }
  }
  explosion(x, y, z, scale = 1) {
    const W = this.world;
    W.lights.flash(x, z, -y, 0xff8030, 3.5 * scale, 520 * scale, 0.7);
    for (let i = 0; i < 26 * scale; i++) {
      const a = rnd() * 6.28, e = rnd() * 3.14 - 1.57, sp = 60 + rnd() * 220;
      this.fire.spawn({ x, y: z, z: -y, vx: Math.cos(a) * Math.cos(e) * sp, vy: Math.sin(e) * sp * 0.8 + 60, vz: Math.sin(a) * Math.cos(e) * sp, life: 0.35 + rnd() * 0.45, size: 18 * scale, size1: 46 * scale, r: 1, g: 0.75, b: 0.45, alpha: 1, alpha1: 0, drag: 4, vrot: (rnd() - 0.5) * 4 });
    }
    for (let i = 0; i < 14 * scale; i++) {
      this.smoke.spawn({ x: x + (rnd() - 0.5) * 30, y: z + rnd() * 20, z: -(y + (rnd() - 0.5) * 30), vx: (rnd() - 0.5) * 60, vy: 30 + rnd() * 50, vz: (rnd() - 0.5) * 60, life: 1.6 + rnd() * 1.2, size: 24, size1: 70, r: 0.22, g: 0.2, b: 0.18, alpha: 0.75, alpha1: 0, drag: 1.2, vrot: (rnd() - 0.5) * 1.5 });
    }
    for (let i = 0; i < 30 * scale; i++) {
      const a = rnd() * 6.28, sp = 200 + rnd() * 400;
      this.spark.spawn({ x, y: z, z: -y, vx: Math.cos(a) * sp, vy: rnd() * 300, vz: Math.sin(a) * sp, life: 0.4 + rnd() * 0.6, size: 2.2, size1: 0.5, r: 1, g: 0.7, b: 0.3, alpha: 1, alpha1: 0, gravity: 600 });
    }
    this.flare.spawn({ x, y: z, z: -y, life: 0.35, size: 120 * scale, size1: 200 * scale, r: 1, g: 0.6, b: 0.25, alpha: 1, alpha1: 0 });
    // camera shake
    const p = W.player;
    const d = Math.hypot(p.x - x, p.y - y);
    W.shake = Math.max(W.shake, Math.max(0, 1 - d / 700) * 14);
  }
  fireballHit(x, y, z) {
    this.world.lights.flash(x, z, -y, 0xff6020, 2.2, 300, 0.35);
    for (let i = 0; i < 14; i++) {
      const a = rnd() * 6.28, sp = 40 + rnd() * 140;
      this.fire.spawn({ x, y: z, z: -y, vx: Math.cos(a) * sp, vy: (rnd() - 0.3) * sp, vz: Math.sin(a) * sp, life: 0.3 + rnd() * 0.3, size: 10, size1: 26, r: 1, g: 0.55, b: 0.3, alpha: 1, alpha1: 0, drag: 5 });
    }
    for (let i = 0; i < 4; i++) this.smoke.spawn({ x, y: z, z: -y, vx: (rnd() - 0.5) * 30, vy: 25, vz: (rnd() - 0.5) * 30, life: 1.2, size: 12, size1: 34, r: 0.25, g: 0.2, b: 0.18, alpha: 0.6, alpha1: 0, drag: 1 });
    this.flare.spawn({ x, y: z, z: -y, life: 0.25, size: 60, size1: 90, r: 1, g: 0.45, b: 0.15, alpha: 1, alpha1: 0 });
  }
  trail(x, y, z) {
    this.fire.spawn({ x: x + (rnd() - 0.5) * 3, y: z + (rnd() - 0.5) * 3, z: -(y + (rnd() - 0.5) * 3), vy: 10, life: 0.25 + rnd() * 0.15, size: 8, size1: 2, r: 1, g: 0.45, b: 0.15, alpha: 0.9, alpha1: 0 });
    if (rnd() < 0.3) this.smoke.spawn({ x, y: z, z: -y, vy: 12, life: 0.7, size: 5, size1: 14, r: 0.3, g: 0.25, b: 0.22, alpha: 0.35, alpha1: 0 });
  }
  teleport(x, y, z) {
    for (let i = 0; i < 40; i++) {
      const a = rnd() * 6.28;
      this.flare.spawn({ x: x + Math.cos(a) * 20, y: z + rnd() * 56, z: -(y + Math.sin(a) * 20), vy: 40 + rnd() * 60, life: 0.8, size: 10, size1: 2, r: 0.3, g: 1, b: 0.4, alpha: 1, alpha1: 0 });
    }
  }
  bulletHole(x, y, z, nx, ny, nz) {
    let m;
    if (this.decals.length < 80) {
      m = new THREE.Mesh(this.decalGeo, this.decalMat);
      m.receiveShadow = true;
      this.world.scene.add(m);
      this.decals.push(m);
    } else { m = this.decals.shift(); this.decals.push(m); }
    const s = 5 + rnd() * 3;
    m.scale.set(s, s, 1);
    m.position.set(x + nx * 0.3, z + nz * 0.3, -(y + ny * 0.3));
    _v.set(m.position.x + nx, m.position.y + nz, m.position.z - ny);
    m.lookAt(_v);
    m.rotateZ(rnd() * 6.28);
  }
  slimeSplash(x, y, z) {
    for (let i = 0; i < 4; i++) this.flare.spawn({ x: x + (rnd() - 0.5) * 20, y: z + 2, z: -(y + (rnd() - 0.5) * 20), vy: 40 + rnd() * 40, vx: (rnd() - 0.5) * 40, vz: (rnd() - 0.5) * 40, gravity: 300, life: 0.4, size: 4, size1: 2, r: 0.4, g: 1, b: 0.2, alpha: 0.9, alpha1: 0 });
  }
}

// ======================================================================== world
export class World {
  constructor(ctx, mapData, skill) {
    this.ctx = ctx;
    this.tex = ctx.tex;
    this.audio = ctx.audio;
    this.hud = ctx.hud;
    this.settings = ctx.settings;
    this.skill = skill;
    this.mapData = mapData;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050403, 0.00042);
    this.level = new Level(mapData);
    this.lr = new LevelRenderer(this.level, this.tex, this.scene);
    this.sky = makeSky(this.tex);
    this.scene.add(this.sky);
    this.time = 0;
    this.shake = 0;
    this.stats = { kills: 0, totalKills: 0, items: 0, totalItems: 0, secrets: 0, totalSecrets: 0, time: 0 };
    this.stats.totalSecrets = this.level.sectors.filter((s) => s.secret).length;
    this.monsters = []; this.items = []; this.projectiles = []; this.barrels = []; this.decor = []; this.solids = [];
    this.exiting = false; this.exited = false;
    this.lineCheckIdx = 0;
    this.setupLights();
    this.spawnThings();
    this.fx = new FX(this);
    this.lights = new LightManager(this.scene, this.lr.staticLights, { slots: ctx.settings.lightSlots || 12, dynamicSlots: 6 });
  }

  setupLights() {
    const amb = new THREE.AmbientLight(0xfff4e8, 2.2);
    this.scene.add(amb);
    this.ambient = amb;
    const hemi = new THREE.HemisphereLight(0x8090a0, 0x302418, 0.35);
    this.scene.add(hemi);
    // outdoor sun casting shadows over the whole map (indoor areas are shadowed by their ceilings)
    const sunDef = this.mapData.sun;
    const sun = new THREE.DirectionalLight(sunDef.color, sunDef.intensity);
    const b = this.level.bounds;
    const cx = (b.minx + b.maxx) / 2, cy = (b.miny + b.maxy) / 2;
    const span = Math.max(b.maxx - b.minx, b.maxy - b.miny) * 0.75;
    const dir = new THREE.Vector3(...sunDef.dir).normalize();
    sun.position.set(cx - dir.x * 2000, 0 - dir.y * 2000, -cy - dir.z * 2000);
    sun.target.position.set(cx, 0, -cy);
    this.scene.add(sun.target);
    sun.castShadow = !!this.settings.shadows;
    const sz = this.settings.shadowSize || 4096;
    sun.shadow.mapSize.set(sz, sz);
    const c = sun.shadow.camera;
    c.left = -span; c.right = span; c.top = span; c.bottom = -span; c.near = 10; c.far = 5000;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 1.5;
    this.scene.add(sun);
    this.sun = sun;
  }

  spawnThings() {
    const bit = SKILLS[this.skill].bit;
    for (const t of this.mapData.things) {
      if (t.type !== 'player' && t.skill !== undefined && !(t.skill & bit)) continue;
      const ang = ((t.angle || 0) * Math.PI) / 180;
      if (t.type === 'player') {
        this.player = new Player(this, t.x, t.y, ang);
      } else if (MONSTERS[t.type]) {
        const m = new Monster(this, t.type, t.x, t.y, ang, t.ambush);
        m.spawn = { x: t.x, y: t.y, angle: ang, ambush: t.ambush };
        this.monsters.push(m); this.solids.push(m);
        this.stats.totalKills++;
      } else if (t.type === 'barrel') {
        const b = new Barrel(this, t.x, t.y);
        this.barrels.push(b); this.solids.push(b);
      } else if (t.type === 'lamp') {
        const d = new Decoration(this, 'lamp', t.x, t.y);
        this.decor.push(d); this.solids.push(d);
        this.lr.staticLights.push({ x: t.x, y: t.y, z: d.z + 72, color: 0xdfeaff, intensity: 1.2, distance: 380 });
      } else if (ITEMS[t.type]) {
        this.spawnItem(t.type, t.x, t.y, false);
      }
    }
    this.solids.push(this.player);
  }

  spawnItem(type, x, y, dropped) {
    const it = new Item(this, type, x, y, dropped);
    this.items.push(it);
    if (it.def.count && !dropped) this.stats.totalItems++;
    return it;
  }

  *shootables() {
    if (this.player.shootable && !this.player.dead) yield this.player;
    for (const m of this.monsters) if (m.shootable && !m.dead) yield m;
    for (const b of this.barrels) if (b.shootable && !b.dead) yield b;
  }

  // ------------------------------------------------------------------ combat
  damageActor(a, amount, source, inflictor) {
    if (a.dead) return;
    a.damage(amount, source, inflictor);
  }

  // hitscan attack (bullets, pellets, punches)
  lineAttack(shooter, x, y, z, ang, slope, range, damage, opts = {}) {
    const L = this.level;
    const hit = L.traceWorld(x, y, z, ang, slope, range, shooter.sector);
    let best = null, bestD = hit.dist;
    const ca = Math.cos(ang), sa = Math.sin(ang);
    for (const a of this.shootables()) {
      if (a === shooter) continue;
      // 2D ray vs circle
      const ox = a.x - x, oy = a.y - y;
      const proj = ox * ca + oy * sa;
      if (proj <= 0 || proj - a.radius > bestD) continue;
      const perp2 = ox * ox + oy * oy - proj * proj;
      if (perp2 > a.radius * a.radius) continue;
      const d = proj - Math.sqrt(a.radius * a.radius - perp2);
      if (d > bestD) continue;
      const hz = z + slope * Math.max(0, d);
      if (hz < a.z || hz > a.z + a.height) {
        // the ray may pass through the cylinder vertically between entry and exit
        const d2 = proj + Math.sqrt(a.radius * a.radius - perp2);
        const hz2 = z + slope * d2;
        if (!((hz < a.z && hz2 >= a.z) || (hz > a.z + a.height && hz2 <= a.z + a.height))) continue;
      }
      best = a; bestD = Math.max(0, d);
    }
    const hx = x + ca * bestD, hy = y + sa * bestD, hz = z + slope * bestD;
    if (best) {
      if (best.bleeds) this.fx.blood(hx, hy, hz, 8, 0.8); else this.fx.puff(hx - ca * 4, hy - sa * 4, hz, -ca, -sa, 0);
      this.damageActor(best, damage, shooter, shooter);
      if (opts.punch) this.audio.play('punch_hit', { volume: 0.9 });
      return { actor: best, dist: bestD };
    }
    if (hit.kind === 'none' || hit.kind === 'sky') return null;
    if (opts.punch) { if (hit.dist < range) this.audio.play('bullet_hit', { pos: { x: hit.x, y: hit.z, z: -hit.y }, volume: 0.5 }); return null; }
    this.fx.puff(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz);
    this.fx.bulletHole(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz);
    if (rnd() < 0.35) this.audio.play('bullet_hit', { pos: { x: hit.x, y: hit.z, z: -hit.y }, volume: 0.35 });
    return null;
  }

  // Doom-style vertical autoaim: find a target along the horizontal direction
  aimSlope(p, ang, range = 2048) {
    const eye = p.z + 41;
    const ca = Math.cos(ang), sa = Math.sin(ang);
    const pitchSlope = Math.tan(p.pitch);
    let best = null, bestD = Infinity;
    for (const m of this.shootables()) {
      if (m === p || m.type === 'barrel') continue;
      const ox = m.x - p.x, oy = m.y - p.y;
      const proj = ox * ca + oy * sa;
      if (proj <= 0 || proj > range) continue;
      const perp = Math.abs(-ox * sa + oy * ca);
      if (perp > m.radius + 4) continue;
      const slope = (m.cz - eye) / proj;
      if (Math.abs(Math.atan(slope) - p.pitch) > 0.33) continue;
      if (proj < bestD && this.level.checkSight(p.x, p.y, eye, m.x, m.y, m.z, m.z + m.height)) { best = m; bestD = proj; }
    }
    if (!best) return pitchSlope;
    return (best.cz - eye) / bestD;
  }

  fireWeapon(p, w) {
    const d = WEAPONS[w];
    const eye = p.z + 41;
    if (d.ammo) p.ammo[d.ammo] -= d.perShot;
    this.level.noiseAlert(p.sector, p, this.time);
    const directSlope = Math.tan(p.pitch);
    const slopeFor = (ang) => (this.settings.autoaim ? this.aimSlopeCombined(p, ang, directSlope) : directSlope);
    const spread = 5.6 * Math.PI / 180;
    if (w === 'fist') {
      p.punchPending = 3 * TIC;
      this.audio.play('punch', { volume: 0.6 });
      return;
    }
    const flash = () => {
      p.flashT = 0.07;
      const fx = p.x + Math.cos(p.angle) * 20, fy = p.y + Math.sin(p.angle) * 20;
      this.lights.flash(fx, eye - 4, -fy, 0xffc070, w === 'shotgun' ? 3.4 : 2.4, 420, 0.1);
    };
    if (w === 'pistol' || w === 'chaingun') {
      this.audio.play(w === 'pistol' ? 'pistol' : 'chaingun', { volume: 0.9 });
      flash();
      let ang = p.angle;
      if (p.refire > 0) ang += ((prand() - prand()) / 255) * spread;
      const dmg = 5 * ((prand() % 3) + 1);
      this.lineAttack(p, p.x, p.y, eye, ang, slopeFor(ang), 2048, dmg);
      p.kick = (p.kick || 0) + (w === 'pistol' ? 0.012 : 0.006);
    } else if (w === 'shotgun') {
      this.audio.play('shotgun', { volume: 1 });
      flash();
      const base = slopeFor(p.angle);
      for (let i = 0; i < 7; i++) {
        const ang = p.angle + ((prand() - prand()) / 255) * spread;
        const dmg = 5 * ((prand() % 3) + 1);
        this.lineAttack(p, p.x, p.y, eye, ang, base, 2048, dmg);
      }
      p.kick = (p.kick || 0) + 0.035;
    }
  }

  aimSlopeCombined(p, ang, directSlope) {
    // if the direct ray hits a monster, keep it; otherwise use Doom autoaim
    const eye = p.z + 41;
    const ca = Math.cos(ang), sa = Math.sin(ang);
    for (const m of this.shootables()) {
      if (m === p) continue;
      const ox = m.x - p.x, oy = m.y - p.y;
      const proj = ox * ca + oy * sa;
      if (proj <= 0) continue;
      const perp = Math.abs(-ox * sa + oy * ca);
      if (perp > m.radius) continue;
      const hz = eye + directSlope * proj;
      if (hz >= m.z && hz <= m.z + m.height) return directSlope;
    }
    return this.aimSlope(p, ang);
  }

  punch(p) {
    const ang = p.angle + ((prand() - prand()) / 255) * (5.6 * Math.PI / 180) * 0.5;
    const dmg = ((prand() % 10) + 1) * 2;
    const slope = this.aimSlope(p, ang, 64);
    const r = this.lineAttack(p, p.x, p.y, p.z + 41, ang, slope, 72, dmg, { punch: true });
    if (r && r.actor) p.angle = Math.atan2(r.actor.y - p.y, r.actor.x - p.x);
  }

  spawnFireball(owner, target) {
    const sz = owner.z + 32;
    const ang = Math.atan2(target.y - owner.y, target.x - owner.x);
    const dist = Math.hypot(target.x - owner.x, target.y - owner.y);
    const speed = (SKILLS[this.skill].fast ? 20 : 10) * 35;
    const slope = (target.cz - sz) / Math.max(1, dist);
    const fb = new Fireball(this, owner, owner.x + Math.cos(ang) * 22, owner.y + Math.sin(ang) * 22, sz, ang, slope, speed);
    this.projectiles.push(fb);
    this.audio.play('fireball_launch', { pos: owner.pos3() });
  }

  radiusAttack(spot, source, damage) {
    for (const a of [...this.shootables()]) {
      if (a === spot) continue;
      const dist = Math.max(0, Math.max(Math.abs(a.x - spot.x), Math.abs(a.y - spot.y)) - a.radius);
      if (dist >= damage) continue;
      if (!this.level.checkSight(spot.x, spot.y, spot.z + 20, a.x, a.y, a.z, a.z + a.height)) continue;
      const dmg = damage - dist;
      this.damageActor(a, dmg, source, spot);
      if (a === this.player) {
        const ang = Math.atan2(a.y - spot.y, a.x - spot.x);
        const th = dmg / 8 * 35;
        a.vx += Math.cos(ang) * th; a.vy += Math.sin(ang) * th;
      }
    }
  }

  // ------------------------------------------------------------------ specials
  useLines(p) {
    const L = this.level;
    const range = 64 + p.radius;
    const x2 = p.x + Math.cos(p.angle) * range, y2 = p.y + Math.sin(p.angle) * range;
    for (const c of L.crossings(p.x, p.y, x2, y2)) {
      const l = c.line;
      if (l.tex === 'SWITCH' && l.front.exit) { this.exitSwitch(l); return; }
      const ds = l.back && (l.back.door ? l.back : l.front.door ? l.front : null);
      if (ds && ds !== p.sector) { this.activateDoor(ds, true); return; }
      const ls = l.back && (l.back.lift ? l.back : l.front.lift ? l.front : null);
      if (ls) { this.activateLift(ls); return; }
      if (!l.back || L.lineBlocks(l, p.z, p.height, false)) {
        this.audio.play('noway', { volume: 0.8 });
        return;
      }
    }
  }

  monsterUseLine(m, l) {
    if (!l.back) return false;
    const ds = l.back.door ? l.back : l.front.door ? l.front : null;
    if (!ds || ds.secretDoor) return false;
    if (!ds.moving || ds.moving.state === 'closing') this.activateDoor(ds, false);
    return true;
  }

  activateDoor(s, byPlayer) {
    const mv = s.moving;
    const pos = { x: s.cx, y: s.floor + 64, z: -s.cy };
    if (!mv) {
      s.moving = { type: 'door', state: 'opening', wait: 0 };
      this.audio.play('door_open', { pos });
    } else if (mv.state === 'closing') {
      mv.state = 'opening';
      this.audio.play('door_open', { pos });
    } else if (mv.state === 'open' && byPlayer) {
      mv.state = 'closing';
      this.audio.play('door_close', { pos });
    }
  }

  activateLift(s) {
    if (s.moving) return;
    s.moving = { type: 'lift', state: 'down', wait: 0 };
    this.audio.play('lift_start', { pos: { x: s.cx, y: s.floor, z: -s.cy } });
  }

  exitSwitch(l) {
    if (this.exiting) return;
    this.exiting = true;
    this.lr.setLineTexture(l, 'SWITCH_ON');
    this.audio.play('switch');
    this.exitAt = this.time + 0.9;
  }

  actorsInSector(s) {
    const out = [];
    for (const a of [this.player, ...this.monsters]) {
      if (a.dead && a !== this.player) continue;
      if (a.x + a.radius > s.bbox[0] && a.x - a.radius < s.bbox[2] && a.y + a.radius > s.bbox[1] && a.y - a.radius < s.bbox[3]) out.push(a);
    }
    return out;
  }

  updateMovers(dt) {
    for (const s of this.level.sectors) {
      const mv = s.moving;
      if (!mv) continue;
      if (mv.type === 'door') {
        const speed = 2.6 * 35;
        if (mv.state === 'opening') {
          s.ceil = Math.min(s.doorTop, s.ceil + speed * dt);
          if (s.ceil >= s.doorTop) { mv.state = 'open'; mv.wait = 150 * TIC; }
        } else if (mv.state === 'open') {
          mv.wait -= dt;
          if (mv.wait <= 0) {
            if (this.actorsInSector(s).length) mv.wait = 0.5;
            else { mv.state = 'closing'; this.audio.play('door_close', { pos: { x: s.cx, y: s.floor + 64, z: -s.cy } }); }
          }
        } else if (mv.state === 'closing') {
          const blockers = this.actorsInSector(s).filter((a) => !a.dead);
          if (blockers.length) { mv.state = 'opening'; this.audio.play('door_open', { pos: { x: s.cx, y: s.floor + 64, z: -s.cy } }); }
          else {
            s.ceil = Math.max(s.floor, s.ceil - speed * dt);
            if (s.ceil <= s.floor) { s.ceil = s.floor; s.moving = null; }
          }
        }
        this.lr.sectorMoved(s);
      } else if (mv.type === 'lift') {
        const speed = 4 * 35;
        const old = s.floor;
        if (mv.state === 'down') {
          s.floor = Math.max(s.liftLow, s.floor - speed * dt);
          if (s.floor <= s.liftLow) { mv.state = 'wait'; mv.wait = 105 * TIC; this.audio.play('lift_stop', { pos: { x: s.cx, y: s.floor, z: -s.cy } }); }
        } else if (mv.state === 'wait') {
          mv.wait -= dt;
          if (mv.wait <= 0) { mv.state = 'up'; this.audio.play('lift_start', { pos: { x: s.cx, y: s.floor, z: -s.cy } }); }
        } else if (mv.state === 'up') {
          s.floor = Math.min(s.liftHigh, s.floor + speed * dt);
          if (s.floor >= s.liftHigh) { s.moving = null; this.audio.play('lift_stop', { pos: { x: s.cx, y: s.floor, z: -s.cy } }); }
        }
        // carry actors standing on it
        for (const a of this.actorsInSector(s)) {
          if (Math.abs(a.z - old) < 1.5) a.z = s.floor;
        }
        this.lr.sectorMoved(s);
      }
    }
  }

  // ------------------------------------------------------------------ items
  pickupItems(p) {
    for (const it of this.items) {
      if (it.taken) continue;
      if (Math.abs(it.x - p.x) > it.def.radius + p.radius || Math.abs(it.y - p.y) > it.def.radius + p.radius) continue;
      if (Math.abs(it.z - p.z) > 40) continue;
      if (this.giveItem(p, it)) {
        it.taken = true;
        this.scene.remove(it.model);
        if (it.def.count && !it.dropped) this.stats.items++;
      }
    }
  }

  giveItem(p, it) {
    const t = it.type;
    const mul = SKILLS[this.skill].ammoMul;
    const giveAmmo = (type, n) => {
      if (p.ammo[type] >= MAX_AMMO[type]) return false;
      const had = p.ammo[type];
      p.ammo[type] = Math.min(MAX_AMMO[type], p.ammo[type] + n * mul);
      // Doom auto-switches from fist/pistol when picking up ammo with nothing
      if (had === 0 && type === 'shells' && p.weapons.shotgun && (p.weapon === 'fist' || p.weapon === 'pistol')) p.selectWeapon('shotgun');
      if (had === 0 && type === 'bullets' && p.weapon === 'fist') p.selectWeapon(p.weapons.chaingun ? 'chaingun' : 'pistol');
      return true;
    };
    let msg = it.def.msg, ok = true, sound = 'item_pickup';
    switch (t) {
      case 'clip': ok = giveAmmo('bullets', it.dropped ? 5 : 10); break;
      case 'bullets': ok = giveAmmo('bullets', 50); break;
      case 'shells': ok = giveAmmo('shells', 4); break;
      case 'shellbox': ok = giveAmmo('shells', 20); break;
      case 'stim': if (p.health >= 100) ok = false; else p.health = Math.min(100, p.health + 10); break;
      case 'medi':
        if (p.health >= 100) ok = false;
        else { if (p.health < 25) msg = 'Picked up a medikit that you REALLY need!'; p.health = Math.min(100, p.health + 25); }
        break;
      case 'hbonus': p.health = Math.min(200, p.health + 1); break;
      case 'abonus': p.armor = Math.min(200, p.armor + 1); if (!p.armorType) p.armorType = 1; break;
      case 'garmor': if (p.armor >= 100) ok = false; else { p.armor = 100; p.armorType = 1; } break;
      case 'barmor': if (p.armor >= 200) ok = false; else { p.armor = 200; p.armorType = 2; } break;
      case 'shotgun':
      case 'chaingun': {
        const had = p.weapons[t];
        const ammoType = t === 'shotgun' ? 'shells' : 'bullets';
        const n = t === 'shotgun' ? (it.dropped ? 4 : 8) : (it.dropped ? 10 : 20);
        const gotAmmo = giveAmmo(ammoType, n);
        if (had && !gotAmmo) ok = false;
        else {
          p.weapons[t] = true;
          if (!had) { p.selectWeapon(t); p.grinTime = this.time; }
          sound = 'weapon_pickup';
        }
        break;
      }
      default: ok = false;
    }
    if (!ok) return false;
    p.bonusCount = Math.min(60, p.bonusCount + 24);
    this.hud.message(msg);
    this.audio.play(sound);
    return true;
  }

  // ------------------------------------------------------------------ misc
  onPlayerDeath() {
    this.hud.message('You died. Press USE or FIRE to restart.', 1e9, '#ff5040');
    this.deathTime = this.time;
  }

  updateSeenLines() {
    const p = this.player;
    const L = this.level;
    const n = L.lines.length;
    const eye = p.eyeZ;
    for (let i = 0; i < 16; i++) {
      const l = L.lines[this.lineCheckIdx = (this.lineCheckIdx + 1) % n];
      if (l.seen) continue;
      const mx = (l.ax + l.bx) / 2, my = (l.ay + l.by) / 2;
      const dx = mx - p.x, dy = my - p.y;
      const d = Math.hypot(dx, dy);
      if (d > 2200) continue;
      const toward = l.front.floor; // approximate sample height range
      const zb = Math.min(l.front.floor, l.back ? l.back.floor : l.front.floor), zt = Math.max(l.front.ceil, l.back ? l.back.ceil : l.front.ceil);
      void toward;
      // sample just in front of the line on the viewer's side
      const side = (p.x - l.ax) * l.nx + (p.y - l.ay) * l.ny >= 0 ? 1 : -1;
      const sx = mx + l.nx * side * 2, sy = my + l.ny * side * 2;
      if (L.checkSight(p.x, p.y, eye, sx, sy, zb, zt)) l.seen = true;
    }
  }

  update(dt, input) {
    this.time += dt;
    if (!this.exited) this.stats.time += dt;
    this.updateMovers(dt);
    this.player.update(dt, input);
    for (const m of this.monsters) m.update(dt);
    for (const b of this.barrels) b.update(dt);
    for (const pr of this.projectiles) pr.update(dt);
    this.projectiles = this.projectiles.filter((p) => !p.dead);
    for (const it of this.items) if (!it.taken) it.update(dt, this.time);
    if (this.items.length > 64 && this.items.some((i) => i.taken)) this.items = this.items.filter((i) => !i.taken);
    this.updateSeenLines();
    if (this.exiting && this.time >= this.exitAt && !this.exited) { this.exited = true; }
    if (this.shake > 0) this.shake = Math.max(0, this.shake - dt * 30);
  }
}
