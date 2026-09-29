// Copies the built game into the Android assets folder (file:// origin).
import { cpSync, rmSync, mkdirSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const gameDir = join(here, '../dist/game');
const outDir = join(here, '../android/app/src/main/assets/www');

if (!existsSync(gameDir)) {
  console.error('dist/game not built yet — run `npm run build` first');
  process.exit(1);
}
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(gameDir, outDir, { recursive: true });

// report
let files = 0, bytes = 0;
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else { files++; bytes += statSync(p).size; }
  }
})(outDir);
writeFileSync(join(outDir, 'BUILT.txt'), `Ambedkar Digital Heritage — web build\n${new Date().toISOString()}\n${files} files, ${(bytes / 1048576).toFixed(2)} MB\n`);
console.log(`synced ${files} files (${(bytes / 1048576).toFixed(2)} MB) → ${outDir}`);
