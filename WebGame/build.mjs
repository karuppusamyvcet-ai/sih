import { build, context } from 'esbuild';
import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));
const repo = resolve(root, '..');
const out = resolve(root, 'dist/game');
const watch = process.argv.includes('--watch');

mkdirSync(out, { recursive: true });

// ---- copy static assets (idempotent) ----
function copyAssets() {
  const pairs = [
    [resolve(repo, 'Assets/StreamingAssets/Content'), resolve(out, 'content')],
    [resolve(repo, 'Assets/StreamingAssets/Localization'), resolve(out, 'localization')],
    [resolve(repo, 'Assets/Art'), resolve(out, 'art')],
    [resolve(repo, 'Assets/Audio'), resolve(out, 'audio')],
  ];
  for (const [src, dst] of pairs) {
    if (!existsSync(src)) throw new Error('missing asset source: ' + src);
    cpSync(src, dst, { recursive: true });
  }
  cpSync(resolve(root, 'index.html'), resolve(out, 'index.html'));
  cpSync(resolve(root, 'styles.css'), resolve(out, 'styles.css'));
}

// ---- embed the JSON content --------------------------------------------
// The desktop EXE and the Android APK both load the game over file://, where
// fetch() of local JSON is blocked by CORS. Baking the data into a plain
// script keeps the content available in *every* runtime (browser, Electron,
// Android WebView, unzipped folder) with no server at all.
function writeContentBundle() {
  const read = (p) => JSON.parse(readFileSync(resolve(repo, p), 'utf8'));
  const data = {
    archive: read('Assets/StreamingAssets/Content/archive_items.json'),
    exhibits: read('Assets/StreamingAssets/Content/exhibits.json'),
    missions: read('Assets/StreamingAssets/Content/missions.json'),
    quizzes: read('Assets/StreamingAssets/Content/quizzes.json'),
    loc: {
      en: read('Assets/StreamingAssets/Localization/en.json'),
      hi: read('Assets/StreamingAssets/Localization/hi.json'),
      ta: read('Assets/StreamingAssets/Localization/ta.json'),
    },
  };
  const js = '/* Ambedkar Digital Heritage — embedded content (offline) */\n'
    + 'window.DHJ_CONTENT = ' + JSON.stringify(data) + ';\n';
  writeFileSync(resolve(out, 'content-bundle.js'), js);
  return (js.length / 1024).toFixed(0) + ' kB';
}

const opts = {
  entryPoints: [resolve(root, 'src/main.js')],
  bundle: true,
  outfile: resolve(out, 'game.js'),
  format: 'iife',
  target: ['es2020'],
  minify: !watch,
  sourcemap: watch,
  logLevel: 'info',
  // fail loudly on anything esbuild would otherwise only warn about
  logOverride: { 'no-matching-export': 'error', 'unsupported-dynamic-import': 'error' },
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' },
};

copyAssets();
const kb = writeContentBundle();
if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
  console.log('watching…');
} else {
  await build(opts);
  const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
  writeFileSync(resolve(out, 'build.json'), JSON.stringify(
    { name: pkg.name, version: pkg.version, built: new Date().toISOString() }, null, 2));
  console.log(`game build complete → ${out}  (embedded content ${kb})`);
}
