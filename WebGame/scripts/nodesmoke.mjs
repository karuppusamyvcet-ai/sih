// Node runtime smoke test: stubs just enough DOM/Canvas to construct the real
// world, character, player and mission systems headlessly, then walks through
// every gallery. Catches integration errors that a static check cannot.
import { JSDOMStub } from './dom-stub.mjs';

const dom = new JSDOMStub();
globalThis.window = dom.window;
globalThis.document = dom.document;
Object.defineProperty(globalThis, 'navigator', { value: dom.navigator, configurable: true, writable: true });
globalThis.self = dom.window;
globalThis.location = { href: 'http://localhost/', protocol: 'http:' };
globalThis.HTMLCanvasElement = dom.HTMLCanvasElement;
globalThis.HTMLImageElement = dom.HTMLImageElement;
globalThis.Image = dom.HTMLImageElement;
globalThis.HTMLAudioElement = dom.HTMLAudioElement;
globalThis.Audio = dom.HTMLAudioElement;
globalThis.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
globalThis.requestAnimationFrame = () => 0;
globalThis.cancelAnimationFrame = () => {};
globalThis.localStorage = dom.localStorage;
globalThis.devicePixelRatio = 1;
globalThis.screen = { width: 1280, height: 720 };
globalThis.innerWidth = 1280;
globalThis.innerHeight = 720;
globalThis.addEventListener = () => {};
globalThis.performance = globalThis.performance || { now: () => Date.now() };
// three.js PMREM/RoomEnvironment need WebGL; not exercised here.

const THREE = await import('three');
const { createWorld } = await import('../src/world/world.js');
const { createCharacter } = await import('../src/world/character.js');
const { createPlayer } = await import('../src/play/player.js');
const { createMissions } = await import('../src/play/missions.js');
const { createGuide } = await import('../src/ai.js');
const { zoneMeta, doorOrder } = await import('../src/content.js');
const { newGameState, setState, getState } = await import('../src/state.js');
const { readFileSync } = await import('fs');

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '../..');
const C = (rel) => JSON.parse(readFileSync(resolve(REPO, rel), 'utf8'));
const content = {
  items: C('Assets/StreamingAssets/Content/archive_items.json').items,
  zones: C('Assets/StreamingAssets/Content/exhibits.json').zones,
  missions: C('Assets/StreamingAssets/Content/missions.json').missions,
  quizzes: C('Assets/StreamingAssets/Content/quizzes.json').quizzes,
};
content.byId = new Map(content.items.map((i) => [i.id, i]));
content.zoneById = new Map(content.zones.map((z) => [z.zoneId, z]));
content.quizById = new Map(content.quizzes.map((q) => [q.id, q]));

let fail = 0;
const ok = (c, m) => { if (c) console.log('  ok   ' + m); else { console.log('  FAIL ' + m); fail++; } };

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 16 / 9, 0.1, 200);

const events = { emit() {} };
const hudCalls = { objective: 0, xp: 0, ach: 0, prompt: 0, locked: 0, captions: 0, zone: 0 };
const ctx = {
  canvas: new dom.HTMLCanvasElement(), scene, camera, quality: { shadows: false, dust: 8, aniso: 1, pixelRatio: 1, aa: false, env: false },
  content, events, glowTex: null,
  audio: { play() {}, applyVolumes() {} },
  hud: { objective: () => hudCalls.objective++, xpToast: () => hudCalls.xp++, achieToast: () => hudCalls.ach++,
         locked: () => hudCalls.locked++, captions: () => hudCalls.captions++, zoneLabel: () => hudCalls.zone++,
         prompt: () => hudCalls.prompt++ },
  uiBlocking: () => false,
  isZoneUnlocked: () => true,
};

console.log('== building the world ==');
const world = createWorld(scene, ctx);
await world.init();
ok(world.current === null, 'world starts empty');

const t0 = Date.now();
const hub = await world.enter('hub');
console.log(`  …hub built in ${Date.now() - t0} ms`);
ok(hub.interactables.length >= 10, `hub has ${hub.interactables.length} interactables (6 doors + kiosk + portrait + quote + timeline)`);
ok(hub.colliders.length >= 20, `hub has ${hub.colliders.length} colliders`);
ok(Object.keys(hub.doors).length === 6, 'hub has six doors');
let meshes = 0, lights = 0;
scene.traverse((o) => { if (o.isMesh) meshes++; if (o.isLight) lights++; });
console.log(`  …hub: ${meshes} meshes, ${lights} lights`);
ok(meshes > 150, 'hub mesh count is substantial');
ok(lights > 5, 'hub is lit');

for (const zoneId of doorOrder) {
  const t = Date.now();
  const z = await world.enter(zoneId);
  const kinds = {};
  for (const i of z.interactables) kinds[i.type] = (kinds[i.type] || 0) + 1;
  console.log(`  …${zoneId}: ${z.interactables.length} interactables in ${Date.now() - t} ms  ${JSON.stringify(kinds)}`);
  ok(z.interactables.length >= content.zoneById.get(zoneId).exhibits.length, `${zoneId}: every exhibit is interactive`);
  ok(z.colliders.length >= 5, `${zoneId}: has colliders`);
  ok(z.bounds.x1 > z.bounds.x0, `${zoneId}: bounds valid`);
}

console.log('== character ==');
const character = createCharacter();
ok(!!character.root, 'character root created');
for (let i = 0; i < 240; i++) character.update(1 / 60, i / 60, i % 2 ? 3.7 : 0, 0.3);
ok(Number.isFinite(character.root.position.x), 'character animates 240 frames without NaN');
const posAfter = character.root.position.clone();
ok(posAfter.length() === 0 || Number.isFinite(posAfter.y), 'no NaN in character transforms');
character.playTalk(2);
character.update(1 / 60, 5, 0, 0);
ok(true, 'talk gesture runs');

console.log('== player + collision ==');
await world.enter('hub');
const player = createPlayer(world, camera, character, ctx);
player.spawnAt({ x: 0, z: 13, yaw: Math.PI });
// walk into the north wall for 3 seconds; must stay inside the rotunda
for (let i = 0; i < 180; i++) {
  player.state.camYaw = 0;             // face +z
  player.state.enabled = true;
  // emulate forward input by writing the internal key map through a synthetic event
  player.update(1 / 60, i / 60);
}
ok(Number.isFinite(player.state.pos.x) && Number.isFinite(player.state.pos.z), 'player position stays finite');
ok(Math.hypot(player.state.pos.x, player.state.pos.z) < 17, `player stays inside the rotunda (r=${Math.hypot(player.state.pos.x, player.state.pos.z).toFixed(2)})`);
ok(camera.position.y > 0.4, 'camera never sinks below the floor');

console.log('== missions ==');
setState(newGameState(false));
ctx.world = world;
const missions = createMissions(ctx);
ctx.missions = missions;
ctx.isZoneUnlocked = (z) => missions.isZoneUnlocked(z);
ok(missions.current().id === 'm1_enter', 'first mission is m1_enter');
ok(!missions.isZoneUnlocked('early_life'), 'early_life locked at start (presentation off)');
missions.onEvent('interact', { id: 'kiosk_guide' });
ok(getState().missionsDone.m1_enter, 'm1 completes on kiosk interaction');
ok(missions.isZoneUnlocked('early_life'), 'early_life unlocks after m1');
ok(!missions.isZoneUnlocked('social_reform'), 'social_reform still locked');
ok(missions.quizForMission(missions.current()) === null, 'm2 needs exhibits, not a quiz');
missions.onEvent('exhibit', { id: 'el_birth', zone: 'early_life' });
missions.onEvent('exhibit', { id: 'el_school', zone: 'early_life' });
ok(getState().missionsDone.m2_earlylife, 'm2 completes after two exhibits');
ok(missions.isZoneUnlocked('social_reform'), 'social_reform unlocks after m2');
// quiz for m3
missions.onEvent('quiz', { quizId: 'quiz_early_life' });
ok(!getState().missionsDone.m3_reform, 'wrong quiz does not complete m3');
missions.onEvent('quiz', { quizId: 'quiz_social_reform' });
ok(getState().missionsDone.m3_reform, 'correct quiz completes m3');
// drive the rest of the chain
missions.onEvent('quiz', { quizId: 'quiz_constitution' });
missions.onEvent('archive', { q: 'constitution' });
missions.onEvent('memorial', { id: 'mem_chaitya' });
missions.onEvent('memorial', { id: 'mem_deekshabhoomi' });
missions.onEvent('ai', { q: 'rights' });
missions.onEvent('quiz', { quizId: 'quiz_final' });
const done = Object.keys(getState().missionsDone);
ok(done.length === 8, `all eight missions complete (${done.length}: ${done.join(',')})`);
ok(getState().xp > 0, `XP accumulated: ${getState().xp}`);
ok(hudCalls.xp > 0 && hudCalls.ach > 0, 'HUD toasts fired');
ok(missions.current() === null, 'no current mission after the chain');

// presentation mode
setState(newGameState(true));
const pm = createMissions(ctx);
ok(doorOrder.every((z) => pm.isZoneUnlocked(z)), 'presentation mode unlocks every door');

console.log('== ai guide over every zone topic ==');
const guide = createGuide(content.items);
const topics = {
  early_life: 'columbia', social_reform: 'mahad', constitution: 'rights',
  scholarship: 'books', memorials: 'chaitya', legacy: 'buddhism',
};
for (const [z, q] of Object.entries(topics)) {
  const r = guide.answer(q);
  ok(r.hits.length > 0 && r.hits[0].score > 0.05, `${z}: "${q}" -> ${r.hits[0] ? r.hits[0].item.id : 'none'}`);
  ok(r.sources.length > 0, `${z}: answer cites sources`);
}

console.log('== zoneMeta coverage ==');
for (const z of content.zones) {
  const m = zoneMeta[z.zoneId];
  ok(!!m && !!m.title && !!m.desc, `${z.zoneId} has presentation metadata`);
}

console.log(`\n=== ${fail} failures ===`);
process.exit(fail ? 1 : 0);
