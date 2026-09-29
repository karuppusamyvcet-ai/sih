// Data + logic validation (no browser needed). Mirrors ProjectValidator.cs checks.
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGuide } from '../src/ai.js';

const repo = join(dirname(fileURLToPath(import.meta.url)), '../..');
const C = (p) => JSON.parse(readFileSync(join(repo, p), 'utf8'));
const archive = C('Assets/StreamingAssets/Content/archive_items.json');
const exhibits = C('Assets/StreamingAssets/Content/exhibits.json');
const missions = C('Assets/StreamingAssets/Content/missions.json');
const quizzes = C('Assets/StreamingAssets/Content/quizzes.json');
const loc = ['en', 'hi', 'ta'].map((l) => C(`Assets/StreamingAssets/Localization/${l}.json`));

let fail = 0, warn = 0;
const ok = (cond, msg) => { if (cond) console.log('  ok   ' + msg); else { console.log('  FAIL ' + msg); fail++; } };
const wr = (cond, msg) => { if (!cond) { console.log('  warn ' + msg); warn++; } };

console.log('== content integrity ==');
ok(archive.items.length === 35, `archive has 35 records (${archive.items.length})`);
const ids = new Set(archive.items.map((i) => i.id));
ok(ids.size === archive.items.length, 'archive ids unique');
ok(exhibits.zones.length === 6, `six galleries (${exhibits.zones.length})`);
ok(missions.missions.length === 8, `eight missions (${missions.missions.length})`);
ok(quizzes.quizzes.length === 4, `four quizzes (${quizzes.quizzes.length})`);

console.log('== exhibit cross-references ==');
let badRefs = 0, missing = 0;
for (const z of exhibits.zones) {
  for (const e of z.exhibits) {
    if (e.archiveId && !ids.has(e.archiveId)) { console.log(`   · ${z.zoneId}/${e.id} -> missing archiveId ${e.archiveId}`); badRefs++; }
    if (e.quizId && !quizzes.quizzes.find((q) => q.id === e.quizId)) { console.log(`   · ${z.zoneId}/${e.id} -> missing quiz ${e.quizId}`); badRefs++; }
    if (e.kind === 'QuizKiosk' && !e.quizId) missing++;
  }
  wr((z.timeline || []).length > 0, `${z.zoneId} has a timeline`);
}
ok(badRefs === 0, 'every exhibit archiveId/quizId resolves');
ok(missing === 0, 'every QuizKiosk exhibit has a quizId');

console.log('== missions cross-references ==');
const zoneIds = new Set(exhibits.zones.map((z) => z.zoneId));
const quizIds = new Set(quizzes.quizzes.map((q) => q.id));
const allExhibitIds = new Set(exhibits.zones.flatMap((z) => z.exhibits.map((e) => e.id)));
for (const m of missions.missions) {
  ok(!!m.id && !!m.title && !!m.objective && typeof m.xp === 'number', `mission ${m.id} well-formed`);
  if (m.type === 'Interact') ok(m.targetId === 'kiosk_guide' || allExhibitIds.has(m.targetId), `mission ${m.id} target exists (${m.targetId})`);
  if (m.type === 'CompleteQuiz') {
    const linked = [...quizIds].some((q) => m.id.toLowerCase().includes(q.replace('quiz_', '')));
    wr(linked, `mission ${m.id} maps to a quiz (${[...quizIds].join(',')})`);
  }
  if (m.type === 'VisitMemorials') {
    const z = exhibits.zones.find((z) => (z.exhibits || []).some((e) => e.kind === 'MonumentDiorama'));
    ok(!!z, `mission ${m.id} has memorial dioramas available`);
  }
}

console.log('== quiz schema ==');
const types = new Set();
for (const q of quizzes.quizzes) {
  ok(zoneIds.has(q.zone), `${q.id} zone exists (${q.zone})`);
  ok(q.questions.length > 0, `${q.id} has questions`);
  for (const qq of q.questions) {
    types.add(qq.type);
    ok(!!qq.question && !!qq.explanation, `${q.id}: question + explanation present`);
    if (qq.type === 'MultipleChoice' || qq.type === 'TrueFalse') {
      ok(Array.isArray(qq.answers) && qq.answers.length >= 2, `${q.id}: ${qq.type} has answers`);
      ok(qq.correctIndex >= 0 && qq.correctIndex < qq.answers.length, `${q.id}: correctIndex in range`);
    }
    if (qq.type === 'Ordering') {
      ok(Array.isArray(qq.correctOrder) && qq.correctOrder.length === qq.answers.length, `${q.id}: correctOrder matches answers`);
      ok(new Set(qq.correctOrder).size === qq.correctOrder.length, `${q.id}: correctOrder is a permutation`);
    }
    if (qq.type === 'Matching') {
      ok(Array.isArray(qq.pairs) && qq.pairs.length >= 2, `${q.id}: matching pairs present`);
      ok(qq.pairs.every((p) => p.left && p.right), `${q.id}: pairs shaped {left,right}`);
    }
  }
}
ok(['MultipleChoice', 'TrueFalse', 'Ordering', 'Matching'].every((t) => types.has(t)), `all four question types used (${[...types].join(',')})`);

console.log('== localization ==');
for (const [i, l] of loc.entries()) {
  const lang = ['en', 'hi', 'ta'][i];
  const keys = l && l.items ? Object.keys(l.items) : [];
  ok(keys.length > 20, `${lang}.json has ${keys.length} UI keys`);
}
const enKeys = Object.keys(loc[0].items);
const CORE = ['app.title', 'menu.new', 'menu.continue', 'menu.settings', 'hud.objective', 'pause.resume',
  'settings.title', 'archive.title', 'quiz.correct', 'door.locked', 'map.title', 'certificate.rank'];
for (const [i, lang] of [[1, 'hi'], [2, 'ta']]) {
  const items = loc[i].items;
  const missingCore = CORE.filter((k) => !(k in items));
  ok(missingCore.length === 0, `${lang} translates every core UI key${missingCore.length ? ' (missing: ' + missingCore.join(', ') + ')' : ''}`);
  const cov = Math.round((enKeys.filter((k) => k in items).length / enKeys.length) * 100);
  console.log(`  info ${lang} coverage: ${cov}% of ${enKeys.length} keys (rest falls back to English)`);
  wr(cov >= 40, `${lang} coverage >= 40%`);
}

console.log('== offline AI guide (TF-IDF retrieval) ==');
const guide = createGuide(archive.items);
const probes = [
  ['What are Fundamental Rights?', 'con'],
  ['When was the Mahad Satyagraha?', 'mahad'],
  ['Where did he study in Columbia?', 'columbia'],
  ['What was Mooknayak?', 'mooknayak'],
  ['Buddhism', 'buddh'],
  ['Poona Pact', 'poona'],
];
for (const [q, want] of probes) {
  const r = guide.answer(q);
  const good = r.hits.length && r.hits[0].item.id.includes(want) || JSON.stringify(r.hits.map((h) => h.item.id)).includes(want);
  ok(good, `"${q}" -> ${r.hits[0] ? r.hits[0].item.id : 'NO HIT'} (want *${want}*)`);
}
const none = guide.answer('zzzqqq xyzzy nonsense token');
ok(none.hits.length === 0 || none.hits[0].score < 0.12, 'nonsense query does not hallucinate a confident hit');

console.log('== archive media resolves to a real file ==');
// Mirrors resolveMedia() in src/ui/exhibit.js and mediaTexture() in world/materials.js
let mediaBad = 0, mediaCount = 0, mediaNoFile = 0;
const byId = new Map(archive.items.map((i) => [i.id, i]));
const seenExhibits = new Set();
for (const z of exhibits.zones) {
  for (const e of z.exhibits) {
    if (!e.archiveId || seenExhibits.has(e.archiveId)) continue;
    seenExhibits.add(e.archiveId);
    const rec = byId.get(e.archiveId);
    const m = rec && rec.media;
    if (!m || !m.ref) { mediaNoFile++; console.log(`   · ${e.archiveId} has no media`); continue; }
    let path = null;
    if (/^Art\/Documents\//i.test(m.ref)) path = `Assets/${m.ref.replace(/^Art\//i, 'Art/')}.jpg`;
    else if (/^Art\/Images\//i.test(m.ref)) path = `Assets/${m.ref}.png`;
    else { mediaCount++; continue; }                       // Diorama/* is 3-D, no file
    mediaCount++;
    if (!existsSync(join(repo, path))) { mediaBad++; console.log(`   · ${e.archiveId} -> missing ${path}`); }
    else if (/^Art\/Documents\//i.test(m.ref) && !existsSync(join(repo, `Assets/Art/Documents/thumbs/${m.ref.split('/').pop()}.jpg`))) {
      mediaBad++; console.log(`   · ${e.archiveId} -> missing panel thumbnail`);
    }
  }
}
ok(mediaBad === 0, `every exhibit page resolves to a shipped file (${mediaCount} checked)`);
ok(mediaNoFile === 0, `every exhibit record has media (${seenExhibits.size} records used by exhibits)`);

console.log('== assets present ==');
for (const p of ['Assets/Art/Images/portrait_ambedkar_art.png', 'Assets/Art/Textures/marble_cream.png', 'Assets/Art/Textures/floor_medallion.png', 'Assets/Audio/Music/museum_theme_loop.wav', 'Assets/Audio/Ambience/hall_ambience_loop.wav', 'Assets/Audio/SFX/quiz_correct.wav']) {
  ok(existsSync(join(repo, p)), p);
}
for (const n of ['ui_rounded', 'ui_rounded_gold', 'ui_rounded_soft', 'ui_circle', 'ui_ring', 'ui_pin', 'ui_glow', 'ui_arrow']) {
  ok(existsSync(join(repo, `Assets/Art/UI/${n}.png`)), `UI sprite ${n}`);
}

console.log(`\n=== ${fail} failures, ${warn} warnings ===`);
process.exit(fail ? 1 : 0);
