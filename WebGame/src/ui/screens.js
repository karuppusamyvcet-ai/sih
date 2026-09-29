import { $, show, hide, h, escapeHtml } from '../core.js';
import { settings, saveSettings, applySettingsToForm, bindSettingsForm, getState } from '../state.js';

// ---------------- main menu ----------------
export function createMenu({ onNew, onContinue, onSettings, onCredits }) {
  const menu = $('menu');
  const btnNew = $('btnNew'), btnCont = $('btnContinue');
  const chk = $('chkPresentation');

  chk.checked = settings.presentation;
  chk.addEventListener('change', () => {
    settings.presentation = chk.checked;
    saveSettings();
  });

  btnNew.addEventListener('click', () => { onNew(); });
  btnCont.addEventListener('click', () => { onContinue(); });
  $('btnSettings').addEventListener('click', () => onSettings());
  $('btnCredits').addEventListener('click', () => onCredits());

  // hover sfx on all menu buttons
  menu.querySelectorAll('.btn').forEach((b) => {
    b.addEventListener('mouseenter', () => window.__dhjAudio && window.__dhjAudio.play('hover', { volume: 0.45 }));
    b.addEventListener('click', () => window.__dhjAudio && window.__dhjAudio.play('click'));
  });

  function refreshContinue(hasSave) { btnCont.disabled = !hasSave; }
  function showMenu() { refreshContinue(false); show(menu); }
  function hideMenu() { hide(menu); }
  return { showMenu, hideMenu, refreshContinue };
}

// ---------------- intro ----------------
export function createIntro(onDone) {
  const el = $('intro'), card = $('introCard'), skip = $('btnSkipIntro');
  let t = null;
  function play(cb) {
    show(el);
    card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
    t = setTimeout(() => { hide(el); cb(); }, 7000);
    skip.onclick = () => { clearTimeout(t); hide(el); cb(); };
  }
  return { play };
}

// ---------------- pause / settings / progress ----------------
export function createPause({ onResume, onQuit, onSave, missions }) {
  const scr = $('pauseScreen');
  const pv = $('progressView');

  function renderProgress() {
    const st = getState();
    const list = (window.__dhjContent && window.__dhjContent.missions) || [];
    pv.innerHTML = '';
    const head = h('div', 'pv-mission', `<div><h5>Knowledge Points: ${st.xp}</h5><p>Level ${st.level} · Exhibits ${st.stats.exhibits} · Quizzes ${st.stats.quizzes || 0} · Archive items ${st.collected.length}/35</p></div>`);
    pv.appendChild(head);
    list.forEach((m, i) => {
      const done = st.missionsDone[m.id];
      const active = !done && i === st.missionIndex;
      const div = h('div', 'pv-mission' + (done ? ' done' : active ? ' active' : ''),
        `<div class="st">${done ? '✓' : i + 1}</div>
         <div><h5>${escapeHtml(m.title)}</h5><p>${escapeHtml(m.objective)}</p></div>
         <div class="pv-xp">+${m.xp} XP</div>`);
      pv.appendChild(div);
    });
  }

  $('btnResume').addEventListener('click', () => onResume());
  $('btnQuit').addEventListener('click', () => onQuit());
  $('btnSaveNow').addEventListener('click', () => onSave());
  $('btnSettings2').addEventListener('click', () => show($('settingsScreen')));
  $('btnProgress').addEventListener('click', () => { renderProgress(); pv.classList.toggle('on'); });
  scr.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => hide($(b.dataset.close))));

  function showPause() { renderProgress(); pv.classList.remove('on'); show(scr); }
  function hidePause() { hide(scr); }
  return { showPause, hidePause };
}

// generic overlay open/close with ESC handling handled by main
export function openOverlay(id) { show($(id)); }
export function closeOverlay(id) { hide($(id)); }

export function bindOverlayClosers() {
  document.querySelectorAll('[data-close]').forEach((b) => {
    b.addEventListener('click', () => {
      const el = $(b.dataset.close);
      if (el) { hide(el); window.__dhjAudio && window.__dhjAudio.play('click'); }
    });
  });
}

export function createSettingsManager(audio) {
  bindSettingsForm((key, val) => {
    if (key === 'master' || key === 'music' || key === 'sfx') audio.applyVolumes();
    if (key === 'lang') window.__dhjRelang && window.__dhjRelang(val);
    if (key === 'reducedFx') { /* applied via body class */ }
    if (key === 'subs' && !val) { const c = $('captions'); if (c) hide(c); }
  });
}

// ---------------- certificate ----------------
export function createCertificate({ onContinue, onMenu }) {
  const scr = $('certScreen');
  $('btnCertContinue').addEventListener('click', () => { hide(scr); onContinue(); });
  $('btnCertMenu').addEventListener('click', () => { hide(scr); onMenu(); });
  function showCert() {
    const st = getState();
    $('certName').textContent = st.name || 'Visitor';
    $('certStats').innerHTML = `
      <div><b>${st.xp}</b><span>Knowledge Points</span></div>
      <div><b>${st.stats.exhibits}</b><span>Exhibits</span></div>
      <div><b>${Object.keys(st.quizBest).length}</b><span>Checkpoints</span></div>
      <div><b>35</b><span>Archive Records</span></div>`;
    $('certDate').textContent = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    show(scr);
  }
  return { showCert };
}
