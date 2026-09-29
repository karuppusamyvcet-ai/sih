// Headless QA: loads the game, exercises the flow, screenshots key states.
// usage: node scripts/qa.mjs [--port 8410]
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { mkdirSync } from 'fs';
import { extname, join, normalize } from 'path';
import { fileURLToPath } from 'url';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '../dist/game');
const PORT = +(process.argv.find((a) => a.startsWith('--port')) || '').split('=')[1] || +(process.argv.includes('--port') ? process.argv[process.argv.indexOf('--port') + 1] : 8410) || 8410;

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.wav': 'audio/wav' };

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p === '/') p = '/index.html';
    const file = normalize(join(root, p));
    if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
    const data = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('nf');
  }
});
await new Promise((r) => server.listen(PORT, '0.0.0.0', r));
console.log('serving', root, 'on', PORT, debug ? '(debug/unminified build)' : '(minified build)');

const debug = process.argv.includes('--debug');
const errors = [];
let failCount = 0;
const failedChecks = [];
const ok = (cond, msg) => { console.log((cond ? '  ok   ' : '  FAIL ') + msg); if (!cond) { failCount++; failedChecks.push(msg); } };
const browser = await puppeteer.launch({
  args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
  executablePath: await chromium.executablePath(),
  headless: true,
  defaultViewport: { width: 1280, height: 720 },
});
const page = await browser.newPage();
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 600)); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + ' ||STACK|| ' + String(e.stack || '').replace(/\s+/g, ' ').slice(0, 1200)));

const SHOT_DIR = new URL('./shots/', import.meta.url).pathname;
mkdirSync(SHOT_DIR, { recursive: true });
const shot = async (name) => {
  try { await page.screenshot({ path: `${SHOT_DIR}${name}.png` }); }
  catch (e) { errors.push('screenshot ' + name + ': ' + e.message); }
};
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const tap = (sel) => page.evaluate((s) => { const el = document.querySelector(s); if (!el) throw new Error('missing ' + s); el.click(); }, sel);

try {
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded', timeout: 30000 });
  // wait for boot to finish (menu visible)
  await page.waitForFunction(() => document.getElementById('menu') && !document.getElementById('menu').classList.contains('hidden'), { timeout: 30000 });
  await wait(1500);
  await shot('01-menu');

  // --- start new game ---
  await tap('#btnNew');
  await page.waitForFunction(() => !document.getElementById('intro').classList.contains('hidden'), { timeout: 5000 }).catch(() => {});
  await wait(1600);
  await shot('02-intro');
  // skip intro
  await tap('#btnSkipIntro').catch(() => {});
  await wait(2500);
  await shot('03-hub');

  // --- walk forward a bit via key events ---
  await page.keyboard.down('KeyW');
  await wait(1400);
  await page.keyboard.up('KeyW');
  await wait(600);
  await shot('04-hub-walk');

  // --- interact with guide kiosk (teleport player near it via debug) ---
  await page.evaluate(() => {
    const d = window.__dhjDebug;
    d.player.state.pos.set(-2.6, 0, 6.4);
    d.player.state.camYaw = Math.PI;
    d.player.spawnAt({ x: -2.6, z: 6.4, yaw: Math.PI });
  });
  await wait(700);
  await shot('05-kiosk-prompt');
  await page.keyboard.press('KeyE');
  await wait(1200);
  await shot('06-exhibit-kiosk');
  // close exhibit
  await page.keyboard.press('Escape');
  await wait(400);

  // --- open map ---
  await page.keyboard.press('KeyM');
  await wait(600);
  await shot('07-map');
  await page.keyboard.press('Escape');
  await wait(300);

  // --- travel to early_life directly (m1 should be done after kiosk) ---
  const unlocked = await page.evaluate(async () => {
    const d = window.__dhjDebug;
    return d.missions.isZoneUnlocked('early_life');
  });
  console.log('early_life unlocked after kiosk:', unlocked);

  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    await d.travelTo('early_life', 'fromHub');
  });
  await wait(2000);
  await shot('08-gallery-earlylife');

  // --- open an exhibit ---
  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    d.player.spawnAt({ x: -11.0, z: -6.4, yaw: -Math.PI / 2 });
  });
  await wait(700);
  await shot('09-exhibit-prompt');
  await page.keyboard.press('KeyE');
  await wait(1100);
  await shot('10-exhibit-panel');
  await page.keyboard.press('Escape');
  await wait(300);

  // --- quiz kiosk: find and start via debug ---
  await page.evaluate(() => {
    const d = window.__dhjDebug;
    const quiz = d.world.current.interactables.find((i) => i.type === 'quiz');
    if (quiz) d.player.spawnAt({ x: quiz.pos.x, z: quiz.pos.z + 1.8, yaw: Math.PI });
  });
  await wait(600);
  await page.keyboard.press('KeyE');
  await wait(900);
  await shot('11-quiz');
  // answer first question blindly if present
  const quizOpen = await page.evaluate(() => !document.getElementById('quizPanel').classList.contains('hidden'));
  console.log('quiz open:', quizOpen);
  if (quizOpen) {
    await page.evaluate(() => {
      const opt = document.querySelector('.quiz-opt');
      if (opt) opt.click();
    });
    await wait(300);
    await tap('#quizNext').catch(() => {});
    await wait(500);
    await shot('12-quiz-answered');
    // close quiz
    await page.evaluate(() => { document.getElementById('quizClose').click(); });
    await wait(300);
  }

  // --- archive terminal in scholarship ---
  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    await d.travelTo('scholarship', 'fromHub');
  });
  await wait(2000);
  await shot('13-scholarship');
  await page.evaluate(() => {
    const d = window.__dhjDebug;
    const t = d.world.current.interactables.find((i) => i.type === 'archive');
    if (t) d.player.spawnAt({ x: t.pos.x, z: t.pos.z + 1.6, yaw: Math.PI });
  });
  await wait(500);
  await page.keyboard.press('KeyE');
  await wait(700);
  await page.type('#archQ', 'constitution');
  await tap('#btnArchSearch');
  await wait(600);
  await shot('14-archive-search');
  await page.keyboard.press('Escape');
  await wait(300);

  // --- legacy AI guide ---
  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    await d.travelTo('legacy', 'fromHub');
  });
  await wait(2000);
  await shot('15-legacy');
  await page.evaluate(() => {
    const d = window.__dhjDebug;
    const t = d.world.current.interactables.find((i) => i.type === 'ai');
    if (t) d.player.spawnAt({ x: t.pos.x, z: t.pos.z + 1.6, yaw: Math.PI });
  });
  await wait(500);
  await page.keyboard.press('KeyE');
  await wait(700);
  await page.type('#aiQ', 'What are Fundamental Rights?');
  await tap('#btnAiAsk');
  await wait(1600);
  await shot('16-ai-guide');
  await page.keyboard.press('Escape');
  await wait(300);

  // --- memorials diorama ---
  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    await d.travelTo('memorials', 'fromHub');
  });
  await wait(2000);
  await shot('17-memorials');

  // --- pause screen ---
  await page.evaluate(() => document.getElementById('btnPause').click());
  await wait(500);
  await page.evaluate(() => document.getElementById('btnProgress').click());
  await wait(400);
  await shot('18-pause-progress');
  await page.keyboard.press('Escape');
  await wait(300);

  // --- full quiz run in the final gallery (all four question types) ---
  await page.evaluate(async () => {
    const d = window.__dhjDebug;
    await d.travelTo('legacy', 'fromHub');
  });
  await wait(1800);
  const quizRan = await page.evaluate(async () => {
    const d = window.__dhjDebug;
    const kiosk = d.world.current.interactables.find((i) => i.type === 'quiz');
    if (!kiosk) return { error: 'no quiz kiosk in legacy' };
    d.player.spawnAt({ x: kiosk.pos.x, z: kiosk.pos.z + 1.6, yaw: Math.PI });
    return { ok: true, quizId: kiosk.exhibit && kiosk.exhibit.quizId };
  });
  await wait(400);
  await page.keyboard.press('KeyE');
  await wait(800);
  const finalQuiz = await page.evaluate(() => {
    const panel = document.getElementById('quizPanel');
    if (panel.classList.contains('hidden')) return { open: false };
    return { open: true, title: document.getElementById('quizTitle').textContent };
  });
  console.log('final quiz:', JSON.stringify({ ...quizRan, ...finalQuiz }));
  ok(finalQuiz.open, 'final knowledge challenge opens');
  if (finalQuiz.open) {
    // answer every question correctly using the exposed data
    const answeredAll = await page.evaluate(async () => {
      const q = window.__dhjDebug.ctx.content.quizById.get('quiz_final');
      const panel = document.getElementById('quizPanel');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      for (let i = 0; i < q.questions.length; i++) {
        const question = q.questions[i];
        const body = document.getElementById('quizBody');
        if (question.type === 'MultipleChoice' || question.type === 'TrueFalse') {
          const opts = [...body.querySelectorAll('.quiz-opt')];
          if (opts[question.correctIndex]) opts[question.correctIndex].click();
        } else if (question.type === 'Ordering') {
          // reorder the list into the correct order
          const want = question.correctOrder || question.answers.map((_, k) => k);
          const items = [...body.querySelectorAll('.qo-item')];
          for (let pos = 0; pos < want.length; pos++) {
            const cur = items[pos];
            const txt = cur.textContent;
            const wantIdx = want[pos];
            const target = question.answers[wantIdx];
            if (txt.includes(target.slice(0, 18))) continue;
            const j = items.findIndex((el) => el.textContent.includes(target.slice(0, 18)));
            if (j > pos) {
              for (let k = j; k > pos; k--) {
                items[k].querySelector('[data-a="up"]').click();
                await sleep(20);
              }
            }
          }
        } else if (question.type === 'Matching') {
          const cols = [...body.querySelectorAll('.match-col')];
          const keys = [...cols[0].querySelectorAll('.match-chip')];
          const vals = [...cols[1].querySelectorAll('.match-chip')];
          for (let k = 0; k < keys.length; k++) {
            keys[k].click();
            const wantRight = question.pairs[k].right;
            const v = vals.find((el) => el.textContent.trim() === wantRight);
            if (v) v.click();
            await sleep(20);
          }
        }
        await sleep(80);
        const next = document.getElementById('quizNext');
        if (!next.disabled) next.click();
        await sleep(140);
      }
      return { resultVisible: !!document.querySelector('.quiz-result') };
    });
    console.log('quiz completion:', JSON.stringify(answeredAll));
    ok(answeredAll.resultVisible, 'final quiz reaches the results screen');
    await wait(400);
    await shot('19-quiz-results');
    await page.evaluate(() => { const b = document.getElementById('quizNext'); if (!b.disabled) b.click(); });
    await wait(1200);
  }

  // --- finish the mission chain and show the certificate ---
  await page.evaluate(() => {
    const d = window.__dhjDebug;
    const s = d.getState();
    // complete the remaining mission events directly through the mission system
    const m = d.missions;
    m.onEvent('exhibit', { id: 'q_el_birth', zone: 'early_life' });
    m.onEvent('exhibit', { id: 'q_el_school', zone: 'early_life' });
    m.onEvent('quiz', { quizId: 'quiz_social_reform' });
    m.onEvent('quiz', { quizId: 'quiz_constitution' });
    m.onEvent('archive', { q: 'constitution' });
    m.onEvent('memorial', { id: 'mem_chaitya' });
    m.onEvent('memorial', { id: 'mem_deekshabhoomi' });
    m.onEvent('ai', { q: 'rights' });
    m.onEvent('quiz', { quizId: 'quiz_final' });
  });
  await wait(1500);
  const certVisible = await page.evaluate(() => !document.getElementById('certScreen').classList.contains('hidden'));
  console.log('certificate visible:', certVisible);
  await shot('20-certificate');

  // --- settings screen ---
  await page.evaluate(() => {
    document.getElementById('certScreen').classList.add('hidden');
    document.getElementById('settingsScreen').classList.remove('hidden');
  });
  await wait(400);
  await shot('21-settings');

  // --- mobile viewport check ---
  await page.setViewport({ width: 844, height: 390, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    ['settingsScreen', 'certScreen', 'pauseScreen', 'mapScreen', 'quizPanel', 'exhibitPanel'].forEach((id) => document.getElementById(id).classList.add('hidden'));
  });
  await wait(900);
  await shot('22-mobile');
  await page.setViewport({ width: 1280, height: 720 });

  // summary
  const st = await page.evaluate(() => {
    const s = window.__dhjDebug.getState();
    return { xp: s.xp, missionIndex: s.missionIndex, zone: s.zone, collected: s.collected.length };
  });
  console.log('state:', JSON.stringify(st));
} catch (e) {
  errors.push('fatal: ' + e.message);
  await shot('99-failure').catch(() => {});
}

console.log('\n=== ERRORS (' + errors.length + ') ===');
for (const e of [...new Set(errors)].slice(0, 30)) console.log(' •', e);
if (failCount) console.log('\n=== FAILED CHECKS: ' + failCount + ' ===');
for (const f of failedChecks) console.log(' x', f);

await browser.close();
server.close();
process.exit(errors.length || failCount ? 1 : 0);
