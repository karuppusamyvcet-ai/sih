import { $, store } from './core.js';

// ---------------- settings ----------------
const DEFAULTS = {
  master: 90, music: 55, sfx: 90,
  textSize: 100, subs: true, contrast: false, reducedFx: false,
  lang: 'en', presentation: false,
};

export const settings = { ...DEFAULTS, ...JSON.parse(store.get('dhj.settings') || '{}') };
export function saveSettings() { store.set('dhj.settings', JSON.stringify(settings)); }

export function applySettings() {
  document.documentElement.style.setProperty('--fs', settings.textSize + '%');
  document.body.classList.toggle('hc', !!settings.contrast);
  document.body.classList.toggle('rfx', !!settings.reducedFx);
}

// ---------------- localization ----------------
let LOC = {};
export async function loadLocalization(lang) {
  try {
    const r = await fetch(`localization/${lang}.json`);
    LOC = await r.json();
  } catch { LOC = {}; }
}
export function T(key, fallback = '') {
  return (LOC && LOC[key]) || fallback || key;
}

// ---------------- save state ----------------
export const SAVE_KEY = 'dhj.save.v1';
export const SAVE_BACKUP = 'dhj.save.backup.v1';

export function newGameState(presentation = false) {
  return {
    version: 1,
    created: Date.now(),
    savedAt: 0,
    presentation,
    zone: 'hub',
    pos: null,              // {x,z} resume position
    yaw: 0,
    xp: 0,
    level: 1,
    missionIndex: 0,        // current mission slot (0..8)
    missionsDone: {},       // id -> true
    discovered: {},         // exhibitId -> true
    collected: [],          // archive ids in My Digital Archive
    quizBest: {},           // quizId -> best score
    memorialsSeen: {},      // diorama exhibitId -> true
    archiveSearched: false,
    aiAsked: false,
    introSeen: false,
    name: 'Visitor',
    stats: { exhibits: 0, quizzes: 0, searches: 0, questions: 0 },
  };
}

let state = newGameState();
export const getState = () => state;
export function setState(s) { state = s; }

export function saveGame() {
  state.savedAt = Date.now();
  state.pos = state.pos || null;
  const raw = JSON.stringify(state);
  const old = store.get(SAVE_KEY);
  if (old) store.set(SAVE_BACKUP, old);   // rolling backup
  store.set(SAVE_KEY, raw);
}

export function loadGame() {
  const raw = store.get(SAVE_KEY);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    if (!s || s.version !== 1) return null;
    return { ...newGameState(), ...s };
  } catch {
    // corruption: try backup
    try {
      const b = store.get(SAVE_BACKUP);
      if (b) { const s = JSON.parse(b); store.set(SAVE_KEY, b); return { ...newGameState(), ...s }; }
    } catch { /* ignore */ }
    return null;
  }
}

export function hasSave() { return !!loadGame(); }
export function wipeSave() { store.del(SAVE_KEY); store.del(SAVE_BACKUP); }

export function applySettingsToForm() {
  const set = (id, v) => { const el = $(id); if (el) { if (el.type === 'checkbox') el.checked = !!v; else el.value = v; } };
  set('setMaster', settings.master); set('setMusic', settings.music); set('setSfx', settings.sfx);
  set('setTextSize', settings.textSize); set('setSubs', settings.subs);
  set('setContrast', settings.contrast); set('setReducedFx', settings.reducedFx); set('setLang', settings.lang);
  const p = $('chkPresentation'); if (p) p.checked = settings.presentation;
}

export function bindSettingsForm(onChange) {
  const bind = (id, key, isChk = false, num = false) => {
    const el = $(id); if (!el) return;
    el.addEventListener('change', () => {
      settings[key] = isChk ? el.checked : num ? +el.value : el.value;
      saveSettings(); applySettings();
      if (onChange) onChange(key, settings[key]);
    });
    if (el.type === 'range') {
      el.addEventListener('input', () => {
        settings[key] = +el.value; saveSettings();
        if (onChange) onChange(key, settings[key]);
      });
    }
  };
  bind('setMaster', 'master', false, true);
  bind('setMusic', 'music', false, true);
  bind('setSfx', 'sfx', false, true);
  bind('setTextSize', 'textSize', false, true);
  bind('setSubs', 'subs', true);
  bind('setContrast', 'contrast', true);
  bind('setReducedFx', 'reducedFx', true);
  bind('setLang', 'lang');
}
