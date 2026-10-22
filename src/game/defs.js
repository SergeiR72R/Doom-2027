// Static game definitions (Doom-like values; time in seconds, 1 tic = 1/35 s).
export const TIC = 1 / 35;

export const MONSTERS = {
  zombie: {
    hp: 20, radius: 20, height: 56, speed: 8, stepTics: 4, painChance: 200, reaction: 8,
    attack: 'hitscan', pellets: 1, fireAt: 10 * TIC, attackEnd: 26 * TIC, melee: false,
    sight: 'zombie_sight', active: 'zombie_active', pain: 'zombie_pain', death: 'zombie_death', shot: 'pistol',
    drop: 'clip', mass: 100,
  },
  sergeant: {
    hp: 30, radius: 20, height: 56, speed: 8, stepTics: 3, painChance: 170, reaction: 8,
    attack: 'hitscan', pellets: 3, fireAt: 10 * TIC, attackEnd: 30 * TIC, melee: false,
    sight: 'zombie_sight', active: 'zombie_active', pain: 'zombie_pain', death: 'zombie_death', shot: 'shotgun',
    drop: 'shotgun', mass: 100, voicePitch: 0.85,
  },
  imp: {
    hp: 60, radius: 20, height: 56, speed: 8, stepTics: 3, painChance: 200, reaction: 8,
    attack: 'fireball', fireAt: 16 * TIC, attackEnd: 22 * TIC, melee: true,
    sight: 'imp_sight', active: 'imp_active', pain: 'imp_pain', death: 'imp_death',
    mass: 100,
  },
};

export const WEAPONS = {
  fist: { slot: 1, ammo: null, refire: 0.37, name: 'fist' },
  pistol: { slot: 2, ammo: 'bullets', perShot: 1, refire: 0.4, name: 'pistol' },
  shotgun: { slot: 3, ammo: 'shells', perShot: 1, refire: 1.0, name: 'shotgun' },
  chaingun: { slot: 4, ammo: 'bullets', perShot: 1, refire: 4 * TIC, name: 'chaingun' },
};
export const WEAPON_ORDER = ['fist', 'pistol', 'shotgun', 'chaingun'];
export const MAX_AMMO = { bullets: 200, shells: 50, rockets: 50, cells: 300 };

export const SKILLS = [
  { name: "I'm too young to die.", dmgMul: 0.5, ammoMul: 2, bit: 1 },
  { name: 'Hey, not too rough.', dmgMul: 1, ammoMul: 1, bit: 1 },
  { name: 'Hurt me plenty.', dmgMul: 1, ammoMul: 1, bit: 2 },
  { name: 'Ultra-Violence.', dmgMul: 1, ammoMul: 1, bit: 4 },
  { name: 'Nightmare!', dmgMul: 1, ammoMul: 2, bit: 4, fast: true, respawn: true },
];

export const ITEMS = {
  clip: { radius: 20, msg: 'Picked up a clip.' },
  bullets: { radius: 20, msg: 'Picked up a box of bullets.' },
  shells: { radius: 20, msg: 'Picked up 4 shotgun shells.' },
  shellbox: { radius: 20, msg: 'Picked up a box of shotgun shells.' },
  stim: { radius: 20, msg: 'Picked up a stimpack.' },
  medi: { radius: 20, msg: 'Picked up a medikit.' },
  hbonus: { radius: 20, msg: 'Picked up a health bonus.', count: true },
  abonus: { radius: 20, msg: 'Picked up an armor bonus.', count: true },
  garmor: { radius: 20, msg: 'Picked up the armor.' },
  barmor: { radius: 20, msg: 'Picked up the MegaArmor!' },
  shotgun: { radius: 20, msg: 'You got the shotgun!' },
  chaingun: { radius: 20, msg: 'You got the chaingun!' },
};
