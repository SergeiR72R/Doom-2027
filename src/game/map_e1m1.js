// E1M1-inspired "Hangar" level, authored from scratch.
// Coordinates are Doom-style map units: x east, y north. Heights in units.
// Each sector is a polygon (+ optional holes). A vertex may carry a texture
// name as 3rd element: it applies to the edge that starts at this vertex.
// Edges shared between sectors become two-sided lines automatically.
//
// Skill bits for things: 1 = skills 1-2, 2 = skill 3, 4 = skills 4-5.

const R = (x0, y0, x1, y1, tex) =>
  tex ? [[x0, y0, tex], [x1, y0, tex], [x1, y1, tex], [x0, y1, tex]] : [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];

export const E1M1 = {
  name: 'E1M1: HANGAR',
  par: 30,
  sky: 'SKY',
  sun: { dir: [-0.55, -0.62, 0.55], color: 0xffb070, intensity: 1.9 },
  sectors: [
    // ---------------------------------------------------------- start room
    {
      id: 'A', poly: R(0, 0, 768, 512),
      holes: [R(192, 224, 256, 288, 'SUPPORT'), R(512, 224, 576, 288, 'SUPPORT'), R(320, 192, 448, 320)],
      floor: 0, ceil: 192, light: 176, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH',
    },
    { id: 'A_lamp', poly: R(320, 192, 448, 320), floor: 0, ceil: 192, light: 220, floorTex: 'FLOOR', ceilTex: 'CEILLIGHT', wall: 'TECH', lamp: 0xfff1d8 },

    // side room with a small slime pit (reached through a short gap)
    { id: 'A_gap', poly: R(768, 192, 800, 320), floor: 0, ceil: 128, light: 150, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH' },
    {
      id: 'A_side', poly: R(800, 128, 1056, 384), holes: [R(880, 208, 976, 304)],
      floor: -16, ceil: 160, light: 136, floorTex: 'FLOORDARK', ceilTex: 'CEIL', wall: 'TECH2', lower: 'STEP',
    },
    { id: 'A_pit', poly: R(880, 208, 976, 304), floor: -40, ceil: 160, light: 200, floorTex: 'NUKAGE', ceilTex: 'CEIL', wall: 'TECH2', lower: 'SUPPORT', damage: 5 },

    // stairs north
    { id: 'S1', poly: R(320, 512, 448, 576), floor: 12, ceil: 200, light: 176, floorTex: 'STEPTOP', ceilTex: 'CEIL', wall: 'TECH', lower: 'STEP', upper: 'TECH' },
    { id: 'S2', poly: R(320, 576, 448, 640), floor: 24, ceil: 208, light: 168, floorTex: 'STEPTOP', ceilTex: 'CEIL', wall: 'TECH', lower: 'STEP', upper: 'TECH' },
    { id: 'S3', poly: R(320, 640, 448, 704), floor: 36, ceil: 216, light: 160, floorTex: 'STEPTOP', ceilTex: 'CEIL', wall: 'TECH', lower: 'STEP', upper: 'TECH' },
    { id: 'S4', poly: R(320, 704, 448, 736), floor: 48, ceil: 216, light: 150, floorTex: 'STEPTOP', ceilTex: 'CEIL', wall: 'TECH', lower: 'STEP', upper: 'TECH' },

    // corridor to the slime hall
    {
      id: 'C1', poly: R(320, 736, 448, 960), holes: [R(352, 816, 416, 880)],
      floor: 48, ceil: 176, light: 128, floorTex: 'FLOOR2', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH',
    },
    { id: 'C1_lamp', poly: R(352, 816, 416, 880), floor: 48, ceil: 176, light: 200, floorTex: 'FLOOR2', ceilTex: 'CEILLIGHT', wall: 'TECH', lamp: 0xd8e8ff },
    { id: 'D1', poly: R(320, 960, 448, 976), floor: 48, ceil: 48, light: 150, floorTex: 'FLOOR2', ceilTex: 'CEIL', wall: 'DOORTRAK', upper: 'DOOR', door: true },

    // ---------------------------------------------------------- slime hall with zig-zag walkway
    { id: 'B_south', poly: R(0, 976, 1024, 1104), floor: 48, ceil: 256, light: 168, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', lower: 'SUPPORT' },
    {
      id: 'B_poolW', poly: [[0, 1104], [448, 1104], [448, 1328], [640, 1328], [640, 1472], [0, 1472]],
      floor: 16, ceil: 256, light: 190, floorTex: 'NUKAGE', ceilTex: 'CEIL', wall: 'TECH', damage: 5,
    },
    {
      id: 'B_walk', poly: [[448, 1104], [544, 1104], [544, 1232], [736, 1232], [736, 1472], [640, 1472], [640, 1328], [448, 1328]],
      floor: 48, ceil: 256, light: 200, floorTex: 'FLOORDARK', ceilTex: 'CEIL', wall: 'TECH', lower: 'SUPPORT',
    },
    {
      id: 'B_poolE', poly: [[544, 1104], [1024, 1104], [1024, 1408], [928, 1408], [928, 1472], [736, 1472], [736, 1232], [544, 1232]],
      floor: 16, ceil: 256, light: 190, floorTex: 'NUKAGE', ceilTex: 'CEIL', wall: 'TECH', damage: 5,
    },
    { id: 'B_step', poly: R(928, 1408, 1024, 1472), floor: 32, ceil: 256, light: 180, floorTex: 'STEPTOP', ceilTex: 'CEIL', wall: 'TECH', lower: 'STEP' },
    { id: 'B_north', poly: R(0, 1472, 1024, 1600), floor: 48, ceil: 256, light: 168, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', lower: 'SUPPORT', upper: 'TECH' },

    // secret #1: closet behind the west wall of the north ledge
    { id: 'SD1', poly: R(-16, 1504, 0, 1568), floor: 48, ceil: 48, light: 150, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH', door: true, secretDoor: true },
    { id: 'SEC1', poly: R(-144, 1488, -16, 1584), floor: 48, ceil: 128, light: 120, floorTex: 'FLOOR2', ceilTex: 'CEIL', wall: 'GSTONE', secret: true },

    // ---------------------------------------------------------- computer room
    { id: 'C2', poly: R(1024, 1488, 1152, 1584), floor: 48, ceil: 160, light: 150, floorTex: 'FLOOR2', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH' },
    {
      id: 'C', poly: [[1152, 1280, 'COMP'], [1664, 1280], [1664, 1792], [1152, 1792]],
      holes: [R(1344, 1472, 1472, 1600, 'COMP'), R(1216, 1344, 1280, 1408), R(1536, 1664, 1600, 1728)],
      floor: 48, ceil: 200, light: 180, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH',
    },
    { id: 'C_lampA', poly: R(1216, 1344, 1280, 1408), floor: 48, ceil: 200, light: 220, floorTex: 'FLOOR', ceilTex: 'CEILLIGHT', wall: 'TECH', lamp: 0xd0f0ff },
    { id: 'C_lampB', poly: R(1536, 1664, 1600, 1728), floor: 48, ceil: 200, light: 220, floorTex: 'FLOOR', ceilTex: 'CEILLIGHT', wall: 'TECH', lamp: 0xd0f0ff },

    // secret #3: niche behind the computer room's east wall
    { id: 'SD2', poly: R(1664, 1472, 1680, 1536), floor: 48, ceil: 48, light: 150, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH', upper: 'TECH', door: true, secretDoor: true },
    { id: 'SEC3', poly: R(1680, 1440, 1776, 1568), floor: 48, ceil: 128, light: 140, floorTex: 'FLOORDARK', ceilTex: 'CEIL', wall: 'GSTONE', secret: true },

    { id: 'D2', poly: R(1344, 1792, 1472, 1808), floor: 48, ceil: 48, light: 160, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'DOORTRAK', upper: 'DOOR', door: true },

    // ---------------------------------------------------------- outdoor courtyard
    {
      id: 'D', poly: [[768, 1808], [2048, 1808], [2048, 2304], [1920, 2304], [1920, 2432], [768, 2432]],
      holes: [R(1152, 2000, 1664, 2240)],
      floor: 32, ceil: 384, light: 190, floorTex: 'RROCK', ceilTex: 'SKY', wall: 'ROCK', lower: 'ROCK',
    },
    { id: 'D_pool', poly: R(1152, 2000, 1664, 2240), floor: 8, ceil: 384, light: 210, floorTex: 'NUKAGE', ceilTex: 'SKY', wall: 'ROCK', damage: 5 },
    { id: 'D_lift', poly: R(1920, 2304, 2048, 2432), floor: 96, ceil: 384, light: 190, floorTex: 'STEPTOP', ceilTex: 'SKY', wall: 'ROCK', lower: 'PLAT', lift: true },
    { id: 'D_ledge', poly: R(768, 2432, 2048, 2560), floor: 96, ceil: 384, light: 180, floorTex: 'RROCK', ceilTex: 'SKY', wall: 'ROCK', lower: 'ROCK' },

    // secret #2: alcove at the west end of the ledge
    { id: 'SD3', poly: R(752, 2464, 768, 2528), floor: 96, ceil: 96, light: 150, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'ROCK', upper: 'ROCK', door: true, secretDoor: true },
    { id: 'SEC2', poly: R(656, 2456, 752, 2536), floor: 96, ceil: 168, light: 150, floorTex: 'FLOOR2', ceilTex: 'CEIL', wall: 'GSTONE', secret: true },

    // ---------------------------------------------------------- dark corridor and exit hall
    { id: 'E', poly: R(2048, 2432, 2304, 2560), floor: 96, ceil: 208, light: 112, floorTex: 'FLOORDARK', ceilTex: 'CEIL', wall: 'TECH2', upper: 'ROCK', flicker: true },
    { id: 'D3', poly: R(2304, 2432, 2320, 2560), floor: 96, ceil: 96, light: 140, floorTex: 'FLOORDARK', ceilTex: 'CEIL', wall: 'DOORTRAK', upper: 'DOOR', door: true },
    {
      id: 'F', poly: [[2320, 2368], [2704, 2368, 'LITE'], [2704, 2400], [2704, 2656, 'LITE'], [2704, 2688], [2320, 2688]],
      holes: [R(2416, 2464, 2448, 2496, 'SUPPORT'), R(2576, 2464, 2608, 2496, 'SUPPORT'), R(2480, 2496, 2544, 2560)],
      floor: 96, ceil: 264, light: 176, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'TECH2', upper: 'TECH2',
    },
    { id: 'F_lamp', poly: R(2480, 2496, 2544, 2560), floor: 96, ceil: 264, light: 230, floorTex: 'FLOOR', ceilTex: 'CEILLIGHT', wall: 'TECH2', lamp: 0xffe0c0 },
    { id: 'D4', poly: R(2448, 2688, 2576, 2704), floor: 96, ceil: 96, light: 160, floorTex: 'FLOOR', ceilTex: 'CEIL', wall: 'DOORTRAK', upper: 'DOOR', door: true },
    {
      id: 'X', poly: [[2448, 2704], [2576, 2704], [2576, 2832], [2544, 2832, 'SWITCH'], [2480, 2832], [2448, 2832]],
      floor: 96, ceil: 200, light: 210, floorTex: 'FLOORDARK', ceilTex: 'CEILLIGHT', wall: 'TECH2', exit: true, lamp: 0xff6040,
    },
  ],

  decals: [
    { tex: 'EXITSIGN', x: 2512, y: 2687.5, z: 228, w: 64, h: 32, nx: 0, ny: -1, glow: 0xff2010 },
    { tex: 'EXITSIGN', x: 2512, y: 2703.5, z: 176, w: 48, h: 24, nx: 0, ny: 1, glow: 0xff2010 },
  ],

  // extra point lights (beyond sector lamps / slime glow). z is height above floor 0.
  lights: [
    { x: 1600, y: 2420, z: 180, color: 0xff9050, intensity: 1.6, distance: 700 },
    { x: 2176, y: 2496, z: 190, color: 0xa0c0ff, intensity: 1.4, distance: 420, flicker: true },
    { x: -80, y: 1536, z: 112, color: 0x80ffa0, intensity: 0.9, distance: 260 },
    { x: 1728, y: 1504, z: 112, color: 0x80c0ff, intensity: 0.9, distance: 260 },
    { x: 704, y: 2496, z: 150, color: 0xffd080, intensity: 0.9, distance: 240 },
  ],

  things: [
    { type: 'player', x: 384, y: 96, angle: 90 },

    // start room
    { type: 'lamp', x: 48, y: 48 }, { type: 'lamp', x: 720, y: 48 },
    { type: 'lamp', x: 48, y: 464 }, { type: 'lamp', x: 720, y: 464 },
    { type: 'hbonus', x: 224, y: 192 }, { type: 'hbonus', x: 224, y: 320 },
    { type: 'hbonus', x: 544, y: 192 }, { type: 'hbonus', x: 544, y: 320 },
    { type: 'clip', x: 96, y: 400 },
    { type: 'abonus', x: 672, y: 400 },

    // side room
    { type: 'zombie', x: 992, y: 336, angle: 180 },
    { type: 'zombie', x: 1008, y: 168, angle: 180, skill: 6 },
    { type: 'barrel', x: 848, y: 176 }, { type: 'barrel', x: 1016, y: 256 }, { type: 'barrel', x: 848, y: 344 },
    { type: 'stim', x: 1016, y: 352 },
    { type: 'abonus', x: 928, y: 168 }, { type: 'abonus', x: 928, y: 344 },

    // corridor
    { type: 'clip', x: 384, y: 760 },

    // slime hall
    { type: 'lamp', x: 40, y: 1016 }, { type: 'lamp', x: 984, y: 1016 },
    { type: 'lamp', x: 40, y: 1560 }, { type: 'lamp', x: 984, y: 1560 },
    { type: 'zombie', x: 160, y: 1040, angle: 0 },
    { type: 'zombie', x: 880, y: 1048, angle: 180, skill: 6 },
    { type: 'zombie', x: 688, y: 1384, angle: 270 },
    { type: 'imp', x: 224, y: 1544, angle: 270 },
    { type: 'imp', x: 832, y: 1536, angle: 270, skill: 6 },
    { type: 'sergeant', x: 512, y: 1552, angle: 270, skill: 4 },
    { type: 'garmor', x: 688, y: 1440 },
    { type: 'stim', x: 64, y: 1064 },
    { type: 'shells', x: 960, y: 1536 },
    { type: 'barrel', x: 136, y: 1584 }, { type: 'barrel', x: 600, y: 1080 },

    // secret closet
    { type: 'medi', x: -80, y: 1512 },
    { type: 'shells', x: -112, y: 1560 },
    { type: 'abonus', x: -48, y: 1560 },

    // computer room
    { type: 'shotgun', x: 1408, y: 1360 },
    { type: 'sergeant', x: 1240, y: 1712, angle: 270 },
    { type: 'zombie', x: 1576, y: 1352, angle: 180 },
    { type: 'imp', x: 1600, y: 1720, angle: 180, skill: 6 },
    { type: 'zombie', x: 1216, y: 1600, angle: 0, skill: 4 },
    { type: 'clip', x: 1200, y: 1320 },
    { type: 'medi', x: 1616, y: 1752 },
    { type: 'barrel', x: 1300, y: 1440 }, { type: 'barrel', x: 1520, y: 1620 },

    // secret niche
    { type: 'chaingun', x: 1728, y: 1504 },
    { type: 'abonus', x: 1708, y: 1460 }, { type: 'abonus', x: 1748, y: 1548 },

    // courtyard
    { type: 'zombie', x: 920, y: 1904, angle: 0 },
    { type: 'zombie', x: 1888, y: 1936, angle: 180, skill: 6 },
    { type: 'sergeant', x: 1408, y: 2336, angle: 270, skill: 6 },
    { type: 'imp', x: 1024, y: 2504, angle: 270 },
    { type: 'imp', x: 1504, y: 2504, angle: 270, skill: 6 },
    { type: 'imp', x: 1824, y: 2504, angle: 270, skill: 4 },
    { type: 'barrel', x: 1120, y: 1968 }, { type: 'barrel', x: 1696, y: 1968 },
    { type: 'barrel', x: 1120, y: 2272 }, { type: 'barrel', x: 1696, y: 2272 }, { type: 'barrel', x: 1408, y: 1960 },
    { type: 'shells', x: 1792, y: 1856 },
    { type: 'stim', x: 816, y: 2384 },
    { type: 'clip', x: 1984, y: 2272 },

    // ledge secret alcove
    { type: 'barmor', x: 696, y: 2496 },

    // dark corridor
    { type: 'zombie', x: 2240, y: 2496, angle: 180, ambush: true },
    { type: 'hbonus', x: 2112, y: 2464 }, { type: 'hbonus', x: 2176, y: 2464 }, { type: 'hbonus', x: 2240, y: 2464 },

    // exit hall
    { type: 'lamp', x: 2352, y: 2400 }, { type: 'lamp', x: 2672, y: 2400 },
    { type: 'imp', x: 2400, y: 2624, angle: 0 },
    { type: 'sergeant', x: 2640, y: 2560, angle: 180, skill: 6 },
    { type: 'zombie', x: 2640, y: 2416, angle: 180, skill: 4 },
    { type: 'imp', x: 2560, y: 2640, angle: 180, skill: 4 },
    { type: 'shellbox', x: 2360, y: 2640 },
    { type: 'medi', x: 2672, y: 2648 },
    { type: 'barrel', x: 2656, y: 2448 },
  ],
};
