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

const opts = {
  entryPoints: [resolve(root, 'src/main.js')],
  bundle: true,
  outfile: resolve(out, 'game.js'),
  format: 'iife',
  target: ['es2020'],
  minify: !watch,
  sourcemap: watch,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' },
};

copyAssets();
if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
  console.log('watching…');
} else {
  await build(opts);
  // stamp build info
  const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
  writeFileSync(resolve(out, 'build.json'), JSON.stringify({ name: pkg.name, version: pkg.version, built: new Date().toISOString() }, null, 2));
  console.log('game build complete →', out);
}
