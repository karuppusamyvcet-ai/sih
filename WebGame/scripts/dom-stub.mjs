// Minimal DOM/Canvas stub so the game's world-building code can run in Node.
// Canvas 2D calls are recorded no-ops; CanvasTexture only needs the element.
function makeCtx2D() {
  const noop = () => {};
  return new Proxy({
    canvas: null,
    measureText: (s) => ({ width: String(s).length * 7 }),
    createLinearGradient: () => ({ addColorStop: noop }),
    createRadialGradient: () => ({ addColorStop: noop }),
    getImageData: () => ({ data: new Uint8ClampedArray(4) }),
  }, {
    get(t, k) {
      if (k in t) return t[k];
      return noop;
    },
    set(t, k, v) { t[k] = v; return true; },
  });
}

class FakeCanvas {
  constructor() {
    this.width = 300; this.height = 150;
    this.style = {};
    this._ctx = makeCtx2D();
  }
  getContext(kind) {
    if (kind === '2d') return this._ctx;
    return null;                       // no WebGL in Node
  }
  toDataURL() { return 'data:image/png;base64,'; }
  addEventListener() {}
  removeEventListener() {}
  getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }; }
  setPointerCapture() {}
  releasePointerCapture() {}
  focus() {}
  blur() {}
  click() {}
}

class FakeImage {
  constructor() {
    this.width = 64; this.height = 64;
    this.onload = null; this.onerror = null;
    setTimeout(() => this.onload && this.onload(), 0);
  }
  set src(v) { this._src = v; }
  get src() { return this._src; }
  addEventListener() {}
  removeEventListener() {}
}

class FakeAudio {
  constructor(src) {
    this.src = src; this.currentTime = 0; this.volume = 1; this.paused = true;
    this.loop = false; this.playbackRate = 1; this.preload = '';
  }
  play() { this.paused = false; return Promise.resolve(); }
  pause() { this.paused = true; }
  addEventListener() {}
  removeEventListener() {}
}

class FakeElement {
  constructor(tag) {
    this.tagName = (tag || 'div').toUpperCase();
    this.children = [];
    this.style = new Proxy({}, { get: (t, k) => t[k] ?? '', set: (t, k, v) => { t[k] = v; return true; } });
    this.classList = {
      _s: new Set(),
      add: (...c) => c.forEach((x) => this.classList._s.add(x)),
      remove: (...c) => c.forEach((x) => this.classList._s.delete(x)),
      toggle: (c, f) => { if (f === undefined) { this.classList._s.has(c) ? this.classList._s.delete(c) : this.classList._s.add(c); } else if (f) this.classList._s.add(c); else this.classList._s.delete(c); },
      contains: (c) => this.classList._s.has(c),
    };
    this._html = '';
    this._text = '';
    this.dataset = {};
    this.attributes = {};
    this.listeners = {};
    this.offsetWidth = 100; this.offsetHeight = 100;
  }
  get innerHTML() { return this._html; }
  set innerHTML(v) { this._html = String(v); }
  get textContent() { return this._text; }
  set textContent(v) { this._text = String(v); }
  appendChild(c) { this.children.push(c); return c; }
  append(...c) { c.forEach((x) => this.children.push(x)); }
  remove() {}
  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k]; }
  removeAttribute(k) { delete this.attributes[k]; }
  addEventListener(t, fn) { (this.listeners[t] || (this.listeners[t] = [])).push(fn); }
  removeEventListener() {}
  dispatchEvent() { return true; }
  querySelector() { return new FakeElement('div'); }
  querySelectorAll() { return []; }
  getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }; }
  focus() {} blur() {} click() {}
  setPointerCapture() {}
  requestPointerLock() {}
  scrollIntoView() {}
  cloneNode() { return new FakeElement(this.tagName); }
}

class FakeDocument {
  constructor() {
    this.byId = new Map();
    this.body = new FakeElement('body');
    this.documentElement = new FakeElement('html');
  }
  createElement(tag) {
    const t = String(tag).toLowerCase();
    if (t === 'canvas') return new FakeCanvas();
    return new FakeElement(t);
  }
  createElementNS(ns, tag) {
    if (tag === 'img') return new FakeImage();
    return new FakeElement(tag);
  }
  createTextNode(t) { return { text: t }; }
  getElementById(id) {
    if (!this.byId.has(id)) this.byId.set(id, new FakeElement('div'));
    return this.byId.get(id);
  }
  querySelector() { return new FakeElement('div'); }
  querySelectorAll() { return []; }
  addEventListener() {}
  removeEventListener() {}
  exitPointerLock() {}
  get pointerLockElement() { return null; }
}

class FakeStorage {
  constructor() { this.m = new Map(); }
  getItem(k) { return this.m.has(k) ? this.m.get(k) : null; }
  setItem(k, v) { this.m.set(k, String(v)); }
  removeItem(k) { this.m.delete(k); }
  clear() { this.m.clear(); }
}

export class JSDOMStub {
  constructor() {
    this.document = new FakeDocument();
    this.HTMLCanvasElement = FakeCanvas;
    this.HTMLImageElement = FakeImage;
    this.HTMLAudioElement = FakeAudio;
    this.localStorage = new FakeStorage();
    this.navigator = {
      userAgent: 'node-smoke', maxTouchPoints: 0, language: 'en-US',
      languages: ['en-US'], userAgentData: { mobile: false },
    };
    const self = this;
    this.window = {
      document: this.document,
      navigator: this.navigator,
      localStorage: this.localStorage,
      innerWidth: 1280, innerHeight: 720, devicePixelRatio: 1,
      addEventListener() {}, removeEventListener() {},
      setTimeout: (...a) => setTimeout(...a), clearTimeout: (...a) => clearTimeout(...a),
      setInterval: (...a) => setInterval(...a), clearInterval: (...a) => clearInterval(...a),
      requestAnimationFrame: () => 0, cancelAnimationFrame: () => {},
      matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
      performance: { now: () => Date.now() },
      location: { href: 'http://localhost/' },
      getComputedStyle: () => ({}),
      Audio: FakeAudio,
      HTMLCanvasElement: FakeCanvas,
      console,
      __self: self,
    };
  }
}
