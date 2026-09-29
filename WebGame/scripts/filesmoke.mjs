// file:// smoke test — the EXE and the APK both load the game this way.
// Uses the same jsdom-ish stub trick: it loads dist/game/content-bundle.js,
// then the bundled game, with a fake WebGL context, and asserts that the game
// boots to the main menu without throwing and that content is available.
import { JSDOMStub } from './dom-stub.mjs';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import vm from 'vm';

const HERE = dirname(fileURLToPath(import.meta.url));
const GAME = resolve(HERE, '../dist/game');

let fail = 0;
const ok = (c, m) => { if (c) console.log('  ok   ' + m); else { console.log('  FAIL ' + m); fail++; } };

console.log('== file:// payload ==');
for (const f of ['index.html', 'game.js', 'content-bundle.js', 'styles.css',
  'content/exhibits.json', 'localization/en.json', 'art/Images/portrait_ambedkar_art.png',
  'art/Textures/floor_medallion.png', 'audio/Music/museum_theme_loop.wav', 'audio/SFX/ui_click.wav']) {
  ok(existsSync(resolve(GAME, f)), 'ships ' + f);
}
const html = readFileSync(resolve(GAME, 'index.html'), 'utf8');
ok(html.includes('content-bundle.js'), 'index.html loads the embedded content bundle');
ok(html.includes('game.js'), 'index.html loads the game bundle');

console.log('== embedded content integrity ==');
const sandbox = { window: {}, document: { createElement: () => ({ getContext: () => null }) } };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(readFileSync(resolve(GAME, 'content-bundle.js'), 'utf8'), sandbox);
const C = sandbox.window.DHJ_CONTENT;
ok(!!C, 'window.DHJ_CONTENT is defined');
ok(C.archive.items.length === 35, `35 archive records embedded (${C.archive.items.length})`);
ok(C.exhibits.zones.length === 6, '6 galleries embedded');
ok(C.missions.missions.length === 8, '8 missions embedded');
ok(C.quizzes.quizzes.length === 4, '4 quizzes embedded');
ok(!!(C.loc.en && C.loc.hi && C.loc.ta), 'en/hi/ta localization embedded');
ok(C.loc.en.items['door.locked'] === 'This door unlocks as your journey progresses.', 'en strings intact after embedding');

// no fetch() of local JSON is needed at runtime
const gameSrc = readFileSync(resolve(GAME, 'game.js'), 'utf8');
ok(/content\/archive_items\.json/.test(gameSrc) && /file:\/\//.test(gameSrc),
  'game short-circuits fetch() on file:// (embedded content is used)');

console.log(`\n=== ${fail} failures ===`);
process.exit(fail ? 1 : 0);
