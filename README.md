# DOOM 2027 — E1M1 "Hangar" in the browser

A from-scratch browser remake of the first level of the classic Doom, built on
three.js with modern real-time graphics. Every texture, model, sound effect and
music track is generated procedurally in code — no original game assets are used.

## Play

Open `index.html` in a modern desktop browser (Chrome, Edge or Firefox). It works
straight from disk (`file://`) because the game ships as one prebuilt bundle,
`dist/doom.js`. You can also serve the folder with any static server.

| Control | Action |
| --- | --- |
| W A S D / arrows | Move / strafe (Alt + arrows strafes) |
| Mouse | Look and turn |
| Left click / Ctrl | Fire |
| E / Space / Right click | Use: doors, switches, lifts |
| 1 – 4 / mouse wheel | Select weapon |
| Shift | Walk (always-run is on by default) |
| Tab | Automap (+ / − or wheel to zoom) |
| Esc | Menu / pause |

Classic cheats work: `iddqd`, `idkfa`, `idfa`, `idclip`, `iddt`.

## What's in it

**Gameplay, following the original rules**
- Sector-based level: stairs, step-up/drop-off physics, a zig-zag walkway over a
  nukage pool, an outdoor courtyard under the sky, doors that close by themselves,
  a lift, 3 secret areas, damaging nukage floors and the exit switch.
- Monsters: zombieman, shotgun guy and imp, with Doom's AI: they wake on sight
  or on the sound of gunfire (which carries through open sectors), use 8-direction
  chase movement, attack with Doom's chances, feel pain, open doors, fight each other
  after friendly fire and drop ammo or weapons.
- Weapons: fist, pistol, shotgun and chaingun (in a secret), with the original
  damage, spread, fire rates and vertical autoaim.
- Items: ammo, stimpacks, medikits, health and armor bonuses, green and blue armor.
  Exploding barrels set off chain reactions.
- All five skill levels: half damage and double ammo on the easiest; fast,
  respawning monsters on Nightmare.
- HUD and screens: status bar with an animated marine face, pickup messages, red
  and gold screen flashes, automap, the kills/items/secrets/time intermission
  screen with par time, and death followed by restart.

**Graphics beyond the 1993 original**
- PBR materials with normal and roughness maps generated at load time. The nukage
  and computer screens are animated.
- Dynamic point lights for lamps, slime glow, muzzle flashes, fireballs and
  explosions. A sun casts real-time shadows in the courtyard.
- Rigged, animated 3D monsters instead of flat sprites, plus 3D first-person weapons.
- Particle effects for blood, sparks, smoke and fire, bullet-hole decals, a sky dome,
  bloom, ACES tone mapping, vignette, film grain and fog that follows the light level.

**Audio:** synthesized effects with stereo positional sound and reverb, and an
original heavy-metal soundtrack.

Options in the menu cover mouse sensitivity, FOV, volumes, graphics quality
(Low, Medium, High or Ultra), always-run, autoaim, crosshair and view bobbing.

## Development

```sh
npm install
npm run dev     # rebuilds on change, serves http://localhost:8000
npm run build   # writes dist/doom.js
```

| Path | Contents |
| --- | --- |
| `src/game/map_e1m1.js` | Level data: sectors, things, lights |
| `src/engine/level.js` | Map processing, collision, sight checks, hitscan traces |
| `src/engine/textures.js` | Procedural texture generator |
| `src/engine/audio.js` | Sound synthesis and music sequencer |
| `src/render/` | Level meshes, models, particles and the light manager |
| `src/game/world.js` | Actors, AI, weapons, items, doors and lifts |
| `src/ui/` | HUD, automap and menus |
