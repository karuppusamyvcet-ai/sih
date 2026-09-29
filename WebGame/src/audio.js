import { settings } from './state.js';

// ---------- audio: one shared HTMLAudio pool ----------
const files = {
  music: 'audio/Music/museum_theme_loop.wav',
  ambience: 'audio/Ambience/hall_ambience_loop.wav',
  click: 'audio/SFX/ui_click.wav',
  hover: 'audio/SFX/ui_hover.wav',
  pickup: 'audio/SFX/pickup.wav',
  correct: 'audio/SFX/quiz_correct.wav',
  wrong: 'audio/SFX/quiz_incorrect.wav',
  page: 'audio/SFX/page_turn.wav',
  open: 'audio/SFX/exhibit_open.wav',
  objective: 'audio/SFX/objective_new.wav',
  achievement: 'audio/SFX/achievement.wav',
  door: 'audio/SFX/door_open.wav',
  step: 'audio/SFX/footstep_stone.wav',
};

let unlocked = false;
let musicEl = null, ambEl = null;
let currentMusic = null, currentAmb = null;
const pools = new Map();

function vol(group) {
  const m = settings.master / 100;
  if (group === 'music') return m * (settings.music / 100);
  return m * (settings.sfx / 100);
}

function make(src, group) {
  const a = new Audio(src);
  a.preload = 'auto';
  a._group = group;
  return a;
}

export function initAudio() {
  musicEl = make(files.music, 'music');
  musicEl.loop = true;
  ambEl = make(files.ambience, 'music');
  ambEl.loop = true;
  // build small pools for frequent SFX
  for (const k of ['click', 'hover', 'step', 'pickup', 'correct', 'wrong', 'page', 'open', 'objective', 'achievement', 'door']) {
    pools.set(k, [0, 1, 2].map(() => make(files[k], 'sfx')));
  }
  applyVolumes();
  const unlock = () => {
    if (unlocked) return;
    unlocked = true;
    if (currentMusic) musicEl.play().catch(() => {});
    if (currentAmb) ambEl.play().catch(() => {});
  };
  window.addEventListener('pointerdown', unlock, { once: false });
  window.addEventListener('keydown', unlock, { once: false });
}

export function applyVolumes() {
  if (musicEl) musicEl.volume = vol('music');
  if (ambEl) ambEl.volume = vol('music') * 0.85;
  for (const pool of pools.values()) for (const a of pool) a.volume = vol('sfx');
}

export function play(name, { volume = 1, rate = 1 } = {}) {
  if (!unlocked || !pools.has(name)) return;
  const pool = pools.get(name);
  const a = pool.find((x) => x.paused || x.ended) || pool[0];
  try {
    a.pause(); a.currentTime = 0; a.volume = vol('sfx') * volume; a.playbackRate = rate;
    a.play().catch(() => {});
  } catch { /* ignore */ }
}

export function playMusic() {
  currentMusic = true;
  if (!musicEl) return;
  musicEl.volume = vol('music');
  musicEl.play().catch(() => {});
}
export function stopMusic() { currentMusic = null; if (musicEl) { musicEl.pause(); } }

export function playAmbience() {
  currentAmb = true;
  if (!ambEl) return;
  ambEl.volume = vol('music') * 0.85;
  ambEl.play().catch(() => {});
}
export function stopAmbience() { currentAmb = null; if (ambEl) ambEl.pause(); }

// footsteps driven by character stride
let lastStep = 0;
export function footstep(stridePhase) {
  if (stridePhase - lastStep > 0.5 || stridePhase < lastStep) { lastStep = stridePhase; play('step', { volume: 0.5, rate: 0.96 + Math.random() * 0.1 }); }
}
