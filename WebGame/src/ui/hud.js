import { $, show, hide, isTouch } from '../core.js';
import { settings, getState } from '../state.js';

export function createHud() {
  let objTimer = 0, capTimer = 0;

  function objective(title, meta, silent = false) {
    const b = $('objBanner');
    $('objText').textContent = title;
    $('objMeta').textContent = meta || '';
    if (!silent) {
      b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    } else {
      $('objText').textContent = title;
    }
  }

  function prompt(text, key = 'E') {
    const p = $('prompt');
    if (!text) { hide(p); return; }
    if ($('promptText').textContent !== text) {
      $('promptText').textContent = text;
      $('promptKey').textContent = isTouch() ? '✋' : key;
    }
    show(p);
  }

  function xpToast(text) {
    const t = $('xpToast');
    $('xpToastText').textContent = text;
    t.classList.remove('hidden');
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(objTimer);
    objTimer = setTimeout(() => hide(t), 2400);
  }

  function achieToast(text, icon = '★') {
    const t = $('achieToast');
    $('achieToastText').textContent = text;
    $('achieToastIcon').textContent = icon;
    show(t);
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(t._h);
    t._h = setTimeout(() => hide(t), 3100);
  }

  function locked(text) {
    const l = $('lockedToast');
    l.textContent = '🔒 ' + text;
    show(l);
    clearTimeout(l._h);
    l._h = setTimeout(() => hide(l), 2600);
  }

  function captions(text, ms = 0) {
    const c = $('captions');
    if (!text || !settings.subs) { hide(c); return; }
    $('captionsText').textContent = text;
    show(c);
    clearTimeout(capTimer);
    if (ms > 0) capTimer = setTimeout(() => hide(c), ms);
  }

  function zoneLabel(txt) { $('compassText').textContent = txt; }

  function showHud() {
    show($('hud'));
    if (isTouch()) show($('touchUI')); else hide($('touchUI'));
  }
  function hideHud() { hide($('hud')); }

  return { objective, prompt, xpToast, achieToast, locked, captions, zoneLabel, showHud, hideHud };
}
