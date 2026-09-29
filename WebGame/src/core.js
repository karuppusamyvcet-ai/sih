// ---------- tiny helpers, event bus, math ----------
export const $ = (id) => document.getElementById(id);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, l, dt) => lerp(a, b, 1 - Math.exp(-l * dt));
export const rand = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];

export function fmtTime(ts) {
  try { return new Date(ts).toLocaleString(); } catch { return ''; }
}

export class Bus {
  constructor() { this.map = new Map(); }
  on(k, fn) { (this.map.get(k) || this.map.set(k, []).get(k)).push(fn); return () => this.off(k, fn); }
  off(k, fn) { const a = this.map.get(k); if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } }
  emit(k, ...args) { const a = this.map.get(k); if (a) for (const fn of [...a]) { try { fn(...args); } catch (e) { console.error(e); } } }
}

// fade / scene transition helper
export function fade(on, quick = false) {
  const el = $('fade');
  el.classList.toggle('quick', quick);
  el.classList.toggle('on', on);
}

export function show(el) { el.classList.remove('hidden'); }
export function hide(el) { el.classList.add('hidden'); }

// simple element factory
export function h(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// is this a touch device?
export const isTouch = () => (navigator.maxTouchPoints > 0 && matchMedia('(pointer:coarse)').matches);

// localStorage safe wrappers (file:// in some engines can throw)
export const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* ignore */ } },
};

// text scramble reveal used by intro / certificate
export function typeInto(el, text, speed = 26) {
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(t);
  }, speed);
  return () => clearInterval(t);
}

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
