import * as THREE from 'three';
import { M, screenMat, holoMat, TEX } from './materials.js';

// generic helpers -------------------------------------------------
export function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function cyl(rT, rB, h, mat, x = 0, y = 0, z = 0, seg = 24) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rT, rB, h, seg), mat);
  m.position.set(x, y, z);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function plane(w, h, mat) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.receiveShadow = true;
  return m;
}

// text canvas helper (plaques, timelines, titles) -----------------
export function textTexture(lines, {
  w = 512, h = 256, bg = '#101828', fg = '#f4ecd8', accent = '#d9b45b',
  font = '600 {s}px Georgia, serif', size = 40, align = 'center', pad = 34, lineGap = 1.14, sub = null, subSize = 24,
} = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  // subtle border
  g.strokeStyle = accent; g.lineWidth = 6; g.strokeRect(9, 9, w - 18, h - 18);
  g.strokeStyle = accent + '55'; g.lineWidth = 2; g.strokeRect(20, 20, w - 40, h - 40);
  g.fillStyle = fg; g.textAlign = align; g.textBaseline = 'middle';
  const x = align === 'center' ? w / 2 : align === 'right' ? w - pad : pad;
  const arr = Array.isArray(lines) ? lines : [lines];
  const n = arr.length + (sub ? 1 : 0);
  const totalH = h - pad * 2;
  let y = pad + (totalH / n) / 2;
  const fitSize = (txt, maxW, want) => {
    let s = want;
    g.font = font.replace('{s}', s);
    while (g.measureText(txt).width > maxW - pad * 2 && s > 10) { s -= 2; g.font = font.replace('{s}', s); }
    return s;
  };
  for (const ln of arr) {
    const s = fitSize(ln, w, size);
    g.font = font.replace('{s}', s);
    g.fillText(ln, x, y);
    y += (s * lineGap) + (totalH / n - s * lineGap) * 0.0;
    y = pad + ((arr.indexOf(ln) + 1) + 0.0) * (totalH / n) + (totalH / n) / 2 - (totalH / n) + (s * lineGap);
  }
  if (sub) {
    g.fillStyle = accent;
    const s = fitSize(sub, w, subSize);
    g.font = font.replace('{s}', s);
    g.fillText(sub, x, h - pad - s * 0.6);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// simpler single-purpose plaque texture
export function plaqueTexture(title, sub = '', { accent = '#d9b45b', bg = '#0e1524', w = 640, h = 256 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.strokeStyle = accent; g.lineWidth = 7; g.strokeRect(10, 10, w - 20, h - 20);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  let s = 54;
  g.font = `600 ${s}px Georgia, serif`;
  while (g.measureText(title).width > w - 70 && s > 16) { s -= 2; g.font = `600 ${s}px Georgia, serif`; }
  g.fillStyle = '#f7f1e1';
  const yTitle = sub ? h / 2 - 26 : h / 2;
  g.fillText(title, w / 2, yTitle);
  if (sub) {
    let s2 = 27;
    g.font = `400 ${s2}px "Segoe UI", Arial, sans-serif`;
    while (g.measureText(sub).width > w - 60 && s2 > 11) { s2 -= 2; g.font = `400 ${s2}px "Segoe UI", Arial, sans-serif`; }
    g.fillStyle = accent;
    g.fillText(sub, w / 2, h / 2 + 36);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function framedPanel(w, h, tex, frameMat = M.gold) {
  const grp = new THREE.Group();
  const frame = box(w + 0.12, h + 0.12, 0.06, frameMat);
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.62, metalness: 0.04 }));
  pic.position.z = 0.035;
  pic.receiveShadow = true;
  grp.add(frame, pic);
  return grp;
}

// ---------------- exhibit props ----------------

export function pedestal({ title = '', sub = '', glow = 0xd9b45b, radius = 0.55 } = {}) {
  const g = new THREE.Group();
  g.add(cyl(radius + 0.1, radius + 0.16, 0.1, M.marbleCream, 0, 0.05, 0));
  g.add(cyl(radius * 0.72, radius * 0.8, 0.92, M.plinthWhite, 0, 0.56, 0));
  g.add(cyl(radius + 0.06, radius + 0.06, 0.07, M.marbleBlue, 0, 1.06, 0));
  // accent glow ring
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius + 0.1, 0.018, 8, 40),
    new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.85 }));
  ring.rotation.x = Math.PI / 2; ring.position.y = 1.1;
  g.add(ring);
  g.userData.glowRing = ring;
  if (title) {
    const tex = plaqueTexture(title, sub, { w: 512, h: 176 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.3),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.1 }));
    pl.position.set(0, 0.62, radius * 0.8 + 0.03);
    pl.rotation.x = -0.06;
    g.add(pl);
  }
  return g;
}

// the artifact shown on a pedestal — subtle levitation + spin
export function artifact(kind = 'urn', color = 0xc9a24e) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.75, envMapIntensity: 1.4 });
  if (kind === 'urn') {
    g.add(cyl(0.16, 0.12, 0.06, mat, 0, 0.03, 0));
    g.add(cyl(0.2, 0.15, 0.26, mat, 0, 0.19, 0));
    g.add(cyl(0.1, 0.2, 0.2, mat, 0, 0.42, 0));
    g.add(cyl(0.13, 0.11, 0.05, mat, 0, 0.54, 0));
  } else if (kind === 'book') {
    const b = box(0.4, 0.07, 0.3, M.leather, 0, 0.035, 0);
    const b2 = box(0.37, 0.05, 0.27, M.paper, 0, 0.075, 0);
    g.add(b, b2);
    g.rotation.y = 0.4;
  } else if (kind === 'globe') {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 18), new THREE.MeshStandardMaterial({ color: 0x8fb7d8, roughness: 0.4, metalness: 0.2, map: TEX.sky }));
    s.position.y = 0.24;
    g.add(cyl(0.1, 0.13, 0.05, M.woodDark), s);
    g.children[0].position.y = 0.025;
    const ringM = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.012, 6, 32), mat);
    ringM.position.y = 0.24; ringM.rotation.z = 0.4;
    g.add(ringM);
    g.userData.spin = s;
  } else if (kind === 'scroll') {
    g.add(cyl(0.05, 0.05, 0.5, M.parch, 0, 0.16, 0).rotateZ(Math.PI / 2));
    g.add(cyl(0.06, 0.06, 0.05, M.woodDark, -0.26, 0.16, 0).rotateZ(Math.PI / 2));
    g.add(cyl(0.06, 0.06, 0.05, M.woodDark, 0.26, 0.16, 0).rotateZ(Math.PI / 2));
  } else if (kind === 'lamp') { // dalit lamp / flame of knowledge
    g.add(cyl(0.14, 0.18, 0.07, mat, 0, 0.035, 0));
    g.add(cyl(0.05, 0.1, 0.2, mat, 0, 0.17, 0));
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffc96b }));
    flame.scale.set(1, 1.7, 1); flame.position.y = 0.34;
    g.add(flame);
    g.userData.flame = flame;
  } else if (kind === 'diamond') {
    const d = new THREE.Mesh(new THREE.OctahedronGeometry(0.17), mat);
    d.position.y = 0.24;
    g.add(d);
    g.userData.spin = d;
  }
  return g;
}

export function wallPanel({ title = '', w = 2.2, h = 1.4, tex = null, accent = 0xd9b45b } = {}) {
  const g = new THREE.Group();
  const backing = box(w + 0.18, h + 0.18, 0.07, M.woodDark, 0, 0, 0.0);
  const art = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
    tex
      ? new THREE.MeshStandardMaterial({ map: tex, roughness: 0.68, metalness: 0.03 })
      : new THREE.MeshStandardMaterial({ color: 0x18233a, roughness: 0.75 }));
  art.position.z = 0.045;
  const trim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.1, h + 0.1, 0.03),
    new THREE.MeshStandardMaterial({ color: accent, roughness: 0.3, metalness: 0.85 }));
  trim.position.z = 0.02;
  g.add(backing, trim, art);
  if (title) {
    const texP = plaqueTexture(title, '', { w: 640, h: 100 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(w + 0.1, 2.4), 0.3),
      new THREE.MeshStandardMaterial({ map: texP, roughness: 0.5 }));
    pl.position.set(0, -(h / 2) - 0.24, 0.06);
    g.add(pl);
  }
  return g;
}

export function displayCase({ title = '', w = 1.7, h = 1.05, d = 0.85, accent = 0xd9b45b, item = 'book', pageTex = null } = {}) {
  const g = new THREE.Group();
  // wooden base
  g.add(box(w, 0.62, d, M.woodWarm, 0, 0.31, 0));
  g.add(box(w + 0.06, 0.05, d + 0.06, M.brass, 0, 0.645, 0));
  // glass box
  const glass = box(w - 0.06, h, d - 0.06, M.glass, 0, 0.67 + h / 2, 0);
  glass.castShadow = false;
  g.add(glass);
  // frame edges
  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(w - 0.06, h, d - 0.06)),
    new THREE.LineBasicMaterial({ color: accent }));
  edge.position.y = 0.67 + h / 2;
  g.add(edge);
  // interior light strip
  const strip = box(w - 0.2, 0.02, d - 0.2, M.warmLight, 0, 0.7, 0);
  strip.material = new THREE.MeshBasicMaterial({ color: 0xffe9c0 });
  g.add(strip);
  const it = artifact(item, accent);
  it.position.y = 0.72;
  g.add(it);
  g.userData.artifact = it;
  // the document itself, raked on a stand beside the object
  if (pageTex) g.add(documentStand(pageTex, accent, w, d, h));
  // label
  if (title) {
    const tex = plaqueTexture(title, '', { w: 512, h: 128 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.23),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.05 }));
    pl.position.set(0, 0.4, d / 2 + 0.015);
    g.add(pl);
  }
  return g;
}

/**
 * A digitised archive page lying open on a raked stand — the way a document
 * is actually shown in a case. Used inside display cases and on pedestals.
 */
export function documentStand(tex, accent = 0xd9b45b, w = 1.7, d = 0.85, h = 1.05) {
  const g = new THREE.Group();
  const pw = Math.min(w - 0.34, 0.62), ph = pw * 1.414;   // A-series page
  const board = box(pw + 0.05, ph + 0.05, 0.02, M.brass, 0, 0, 0);
  const page = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.72, metalness: 0.0 }));
  page.position.z = 0.012;
  const inner = new THREE.Group();
  inner.add(board, page);
  inner.rotation.x = -0.62;                     // raked towards the visitor
  inner.position.set(w * 0.26, 0.70 + ph * 0.33, d * 0.16);
  g.add(inner);
  // little support wedge
  g.add(box(pw + 0.05, 0.03, 0.16, M.woodDark, w * 0.26, 0.70, d * 0.16 - 0.06));
  g.userData.page = page;
  return g;
}

export function quizKiosk({ title = 'Knowledge Checkpoint', accent = 0xd9b45b, icon = '❓' } = {}) {
  const g = new THREE.Group();
  g.add(box(0.72, 0.06, 0.5, M.woodDark, 0, 0.03, 0));
  const stem = box(0.16, 0.9, 0.16, M.darkMetal, 0, 0.5, 0);
  g.add(stem);
  // slanted console top
  const console_ = new THREE.Group();
  console_.position.set(0, 1.0, 0.02);
  console_.rotation.x = -0.5;
  const frame = box(0.78, 0.56, 0.05, M.brass);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.46), screenMat(accent));
  scr.position.z = 0.03;
  console_.add(frame, scr);
  g.add(console_);
  // glowing ring
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 8, 40),
    new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.9 }));
  ring.rotation.x = Math.PI / 2; ring.position.y = 1.35;
  g.add(ring);
  g.userData.glowRing = ring;
  // header plaque
  const tex = plaqueTexture(title, icon + '  Interact to begin', { w: 640, h: 160 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.28),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }));
  pl.position.set(0, 1.62, 0);
  g.add(pl);
  return g;
}

export function archiveTerminal({ accent = 0x7fd0ff } = {}) {
  const g = new THREE.Group();
  g.add(box(1.3, 0.75, 0.7, M.woodWarm, 0, 0.375, 0));
  g.add(box(1.36, 0.05, 0.76, M.brass, 0, 0.77, 0));
  const stand = box(0.1, 0.5, 0.1, M.darkMetal, 0, 1.0, -0.15);
  g.add(stand);
  const scrGrp = new THREE.Group();
  scrGrp.position.set(0, 1.35, -0.05);
  scrGrp.rotation.x = -0.28;
  const bezel = box(1.05, 0.66, 0.05, M.darkMetal);
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.56), screenMat(accent));
  scr.position.z = 0.03;
  scrGrp.add(bezel, scr);
  g.add(scrGrp);
  g.userData.screen = scr;
  const tex = plaqueTexture('Manuscript Archive', '35 records · search & collect', { w: 640, h: 150 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.25),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55 }));
  pl.position.set(0, 0.5, 0.36);
  pl.rotation.x = -0.1;
  g.add(pl);
  return g;
}

export function aiConsole({ accent = 0x9fb7ff } = {}) {
  const g = archiveTerminal({ accent });
  const tex = plaqueTexture('AI Archive Guide', 'Offline · cites sources', { w: 640, h: 150 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.25),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55 }));
  pl.position.set(0, 0.5, 0.36);
  pl.rotation.x = -0.1;
  // replace default plaque by covering it
  g.add(pl);
  // hologram orb
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 16),
    new THREE.MeshBasicMaterial({ color: 0xbfd0ff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
  orb.position.set(0, 1.85, -0.05);
  g.add(orb);
  g.userData.orb = orb;
  return g;
}

export function constitutionTable() {
  const g = new THREE.Group();
  // grand table
  g.add(box(2.6, 0.1, 1.3, M.woodDark, 0, 0.86, 0));
  g.add(box(2.5, 0.6, 1.1, M.woodWarm, 0, 0.5, 0));
  for (const [x, z] of [[-1.15, -0.5], [1.15, -0.5], [-1.15, 0.5], [1.15, 0.5]]) g.add(box(0.12, 0.4, 0.12, M.woodDark, x, 0.2, z));
  // open document (Preamble)
  const docMat = new THREE.MeshStandardMaterial({ map: TEX.ms3, roughness: 0.9 });
  const doc = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.02, 0.95), docMat);
  doc.position.set(0, 0.925, 0);
  doc.rotation.y = 0.02;
  g.add(doc);
  const lip = box(1.76, 0.03, 1.0, M.leather, 0, 0.9, 0);
  g.add(lip);
  // small brass lamp
  const lampPost = cyl(0.02, 0.03, 0.5, M.brass, 0, 1.15, -0.5);
  const lampShade = cyl(0.12, 0.18, 0.14, M.warmLight, 0, 1.42, -0.5);
  g.add(lampPost, lampShade);
  const tex = plaqueTexture('The Constitution Table', 'Read the Preamble · Interact', { w: 640, h: 160 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }));
  pl.position.set(0, 0.45, 0.68);
  g.add(pl);
  return g;
}

export function bookDesk() {
  const g = new THREE.Group();
  g.add(box(1.9, 0.08, 1.0, M.woodWarm, 0, 0.84, 0));
  g.add(box(1.6, 0.55, 0.8, M.woodDark, 0, 0.5, 0));
  // stacked books
  const cols = [0x7a2f2f, 0x2f4f7a, 0x5a6e3a, 0x8a6a2f];
  let y = 0.9;
  for (let i = 0; i < 4; i++) {
    const w = 0.5 - i * 0.04, d = 0.36 - i * 0.03;
    const bk = box(w, 0.07, d, new THREE.MeshStandardMaterial({ color: cols[i], roughness: 0.75 }), -0.45 + (i % 2) * 0.06, y, 0);
    bk.rotation.y = (i - 1.5) * 0.14;
    g.add(bk);
    y += 0.075;
  }
  // book spines image on a stand
  const spines = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5),
    new THREE.MeshStandardMaterial({ map: TEX.spines, roughness: 0.7 }));
  spines.position.set(0.5, 1.25, -0.1);
  spines.rotation.x = -0.35;
  g.add(spines);
  g.add(box(0.74, 0.54, 0.03, M.woodDark, 0.5, 1.25, -0.13).rotateX(-0.35));
  const tex = plaqueTexture('Reading Desk', 'Manuscripts & books', { w: 512, h: 140 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.25),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55 }));
  pl.position.set(0, 0.55, 0.52);
  g.add(pl);
  return g;
}

// memorial diorama under a glass dome
export function diorama({ title = '', kind = 'stupa', accent = 0x4d6e52 } = {}) {
  const g = new THREE.Group();
  // base drum
  g.add(cyl(1.5, 1.6, 0.5, M.marbleCream, 0, 0.25, 0, 32));
  g.add(cyl(1.55, 1.55, 0.06, M.brass, 0, 0.53, 0, 32));
  const scene_ = new THREE.Group();
  scene_.position.y = 0.56;
  const stMat = new THREE.MeshStandardMaterial({ color: 0xe6ddc8, roughness: 0.7 });
  const redMat = M.sandstoneRed;
  if (kind === 'stupa') {
    // Chaitya Bhoomi-like: dome + spire
    scene_.add(cyl(0.9, 1.0, 0.18, stMat, 0, 0.09, 0, 28));
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.72, 28, 18, 0, Math.PI * 2, 0, Math.PI / 2), stMat);
    dome.position.y = 0.18; dome.castShadow = true;
    scene_.add(dome);
    scene_.add(cyl(0.1, 0.22, 0.34, stMat, 0, 1.0, 0, 16));
    const tip = cyl(0.02, 0.06, 0.3, M.gold, 0, 1.3, 0, 12);
    scene_.add(tip);
  } else if (kind === 'gate') {
    // Deekshabhoomi-like: dome + ceremonial gate
    scene_.add(cyl(1.0, 1.1, 0.14, stMat, 0, 0.07, 0, 28));
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.78, 28, 18, 0, Math.PI * 2, 0, Math.PI / 2), stMat);
    dome.position.y = 0.14; dome.castShadow = true;
    scene_.add(dome);
    for (const x of [-0.85, 0.85]) { scene_.add(cyl(0.06, 0.07, 0.7, redMat, x, 0.35, 0.55, 12)); }
    scene_.add(box(1.9, 0.1, 0.1, redMat, 0, 0.72, 0.55));
  } else if (kind === 'pillar') {
    scene_.add(cyl(0.8, 0.9, 0.16, stMat, 0, 0.08, 0, 24));
    scene_.add(cyl(0.16, 0.2, 1.4, stMat, 0, 0.85, 0, 18));
    scene_.add(cyl(0.3, 0.3, 0.08, M.gold, 0, 1.58, 0, 18));
    const lion = box(0.3, 0.26, 0.42, M.gold, 0, 1.75, 0);
    scene_.add(lion);
  } else if (kind === 'hall') {
    scene_.add(box(1.7, 0.14, 1.1, stMat, 0, 0.07, 0));
    scene_.add(box(1.5, 0.6, 0.9, stMat, 0, 0.44, 0));
    for (const x of [-0.6, -0.2, 0.2, 0.6]) scene_.add(cyl(0.05, 0.05, 0.5, M.woodDark, x, 0.4, 0.5, 10));
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.15, 0.5, 4), redMat);
    roof.position.y = 1.0; roof.rotation.y = Math.PI / 4;
    scene_.add(roof);
  } else if (kind === 'arch') {
    for (const x of [-0.55, 0.55]) scene_.add(cyl(0.12, 0.14, 1.2, stMat, x, 0.6, 0, 14));
    const top = box(1.6, 0.3, 0.3, stMat, 0, 1.3, 0);
    scene_.add(top);
    const finial = cyl(0.03, 0.1, 0.4, M.gold, 0, 1.6, 0, 10);
    scene_.add(finial);
  } else if (kind === 'tower') {
    scene_.add(cyl(0.85, 0.95, 0.14, stMat, 0, 0.07, 0, 24));
    for (let i = 0; i < 4; i++) {
      const r = 0.62 - i * 0.12;
      scene_.add(cyl(r, r + 0.08, 0.3, stMat, 0, 0.3 + i * 0.3, 0, 20));
    }
    scene_.add(cyl(0.04, 0.12, 0.5, M.gold, 0, 1.6, 0, 10));
  }
  scene_.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.add(scene_);
  g.userData.scene = scene_;
  // glass dome
  const domeGlass = new THREE.Mesh(
    new THREE.SphereGeometry(1.45, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshPhysicalMaterial({ color: 0xcfe2f2, roughness: 0.05, transmission: 0.9, transparent: true, opacity: 0.25, thickness: 0.2, side: THREE.DoubleSide }));
  domeGlass.position.y = 0.55;
  g.add(domeGlass);
  // label ring
  const tex = plaqueTexture(title, 'Digital reconstruction', { w: 640, h: 170, accent: '#8fe0a8' });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.35),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, emissive: 0x16321f, emissiveIntensity: 0.5 }));
  pl.position.set(0, 0.3, 1.62);
  pl.rotation.x = -0.18;
  g.add(pl);
  return g;
}

// timeline strip on a wall
export function timelineWall(entries, accent = 0xd9b45b, width = 8) {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  const rowH = 64, pad = 40;
  c.width = 1600; c.height = pad * 2 + rowH * entries.length;
  const x = c.getContext('2d');
  x.fillStyle = '#0e1524'; x.fillRect(0, 0, c.width, c.height);
  // vertical spine
  x.strokeStyle = '#' + accent.toString(16).padStart(6, '0'); x.lineWidth = 5;
  x.beginPath(); x.moveTo(210, pad); x.lineTo(210, c.height - pad); x.stroke();
  x.textBaseline = 'middle';
  entries.forEach((e, i) => {
    const y = pad + rowH * i + rowH / 2;
    x.fillStyle = x.strokeStyle;
    x.beginPath(); x.arc(210, y, 11, 0, Math.PI * 2); x.fill();
    x.font = '700 42px Georgia, serif'; x.fillStyle = '#f4d98c'; x.textAlign = 'right';
    x.fillText(e.year, 180, y);
    x.font = '400 34px "Segoe UI", Arial, sans-serif'; x.fillStyle = '#e9e2d0'; x.textAlign = 'left';
    let txt = e.text;
    while (x.measureText(txt).width > c.width - 260 && txt.length > 4) txt = txt.slice(0, -4) + '…';
    x.fillText(txt, 250, y);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const ratio = c.width / c.height;
  const W = width, H = W / ratio;
  const backing = box(W + 0.24, H + 0.24, 0.07, M.woodDark);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(W, H),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.68, emissive: 0x0a1020, emissiveIntensity: 0.35 }));
  face.position.z = 0.045;
  g.add(backing, face);
  return g;
}

// large title banner texture on wall
export function titleBanner(title, sub, accentHex = '#d9b45b') {
  const c = document.createElement('canvas');
  c.width = 1400; c.height = 300;
  const x = c.getContext('2d');
  const grad = x.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, '#131c30'); grad.addColorStop(1, '#0c1220');
  x.fillStyle = grad; x.fillRect(0, 0, c.width, c.height);
  x.strokeStyle = accentHex; x.lineWidth = 8; x.strokeRect(14, 14, c.width - 28, c.height - 28);
  x.textAlign = 'center'; x.textBaseline = 'middle';
  let s = 96;
  x.font = `600 ${s}px Georgia, serif`;
  while (x.measureText(title).width > c.width - 120 && s > 30) { s -= 4; x.font = `600 ${s}px Georgia, serif`; }
  x.fillStyle = '#fdf6e6';
  x.fillText(title, c.width / 2, 128);
  x.font = '400 40px "Segoe UI", Arial, sans-serif';
  x.fillStyle = accentHex;
  x.fillText(sub, c.width / 2, 218);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const W = 7.4, H = W * (c.height / c.width);
  const g = new THREE.Group();
  const back = box(W + 0.3, H + 0.3, 0.08, M.woodDark);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(W, H),
    new THREE.MeshStandardMaterial({ map: t, roughness: 0.6, emissive: 0x111a2e, emissiveIntensity: 0.5 }));
  face.position.z = 0.05;
  g.add(back, face);
  return g;
}

// decorative column
export function column(h = 7, r = 0.38) {
  const g = new THREE.Group();
  g.add(cyl(r + 0.14, r + 0.2, 0.3, M.marbleCream, 0, 0.15, 0));
  g.add(cyl(r, r * 1.08, h - 0.6, M.marbleCream, 0, h / 2, 0));
  g.add(cyl(r + 0.2, r + 0.06, 0.3, M.marbleCream, 0, h - 0.15, 0));
  // gold collar
  g.add(cyl(r + 0.05, r + 0.05, 0.07, M.brass, 0, h - 0.42, 0));
  return g;
}

// hanging chandelier
export function chandelier(scale = 1) {
  const g = new THREE.Group();
  const chain = cyl(0.02, 0.02, 1.6, M.darkMetal, 0, 0.8, 0, 8);
  g.add(chain);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7 * scale, 0.035, 8, 36), M.brass);
  ring.rotation.x = Math.PI / 2;
  g.add(ring);
  const bulbs = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe2a8 }));
    b.position.set(Math.cos(a) * 0.7 * scale, 0.05, Math.sin(a) * 0.7 * scale);
    bulbs.add(b);
    const cup = cyl(0.05, 0.08, 0.09, M.brass, b.position.x, -0.02, b.position.z, 10);
    bulbs.add(cup);
  }
  g.add(bulbs);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), new THREE.MeshBasicMaterial({ color: 0xffedc2 }));
  core.position.y = 0.02;
  g.add(core);
  g.userData.bulbs = bulbs;
  return g;
}

// rope stanchion pair segment (crowd control)
export function stanchion() {
  const g = new THREE.Group();
  g.add(cyl(0.06, 0.1, 0.02, M.brass, 0, 0.01, 0));
  g.add(cyl(0.025, 0.03, 0.95, M.brass, 0, 0.5, 0, 12));
  g.add(cyl(0.05, 0.04, 0.06, M.gold, 0, 1.0, 0, 12));
  return g;
}
export function ropeBetween(a, b, sag = 0.18, color = 0x7a1f1f) {
  const pts = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    pts.push(new THREE.Vector3(
      a.x + (b.x - a.x) * t,
      0.98 - Math.sin(t * Math.PI) * sag,
      a.z + (b.z - a.z) * t));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const geo = new THREE.TubeGeometry(curve, 20, 0.022, 6, false);
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.85 }));
  m.castShadow = true;
  return m;
}

// potted plant for corners
export function plant() {
  const g = new THREE.Group();
  g.add(cyl(0.3, 0.22, 0.4, M.sandstoneRed, 0, 0.2, 0));
  g.add(cyl(0.33, 0.33, 0.06, M.woodDark, 0, 0.42, 0));
  for (let i = 0; i < 7; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), M.leaf);
    const a = (i / 7) * Math.PI * 2;
    leaf.position.set(Math.cos(a) * 0.16, 0.62 + (i % 3) * 0.16, Math.sin(a) * 0.16);
    leaf.scale.set(1, 1.6, 0.55);
    leaf.rotation.z = Math.cos(a) * 0.7;
    leaf.rotation.x = Math.sin(a) * 0.7;
    leaf.castShadow = true;
    g.add(leaf);
  }
  return g;
}

// bench
export function bench(w = 2.2) {
  const g = new THREE.Group();
  g.add(box(w, 0.09, 0.55, M.leather, 0, 0.48, 0));
  g.add(box(w, 0.5, 0.09, M.leather, 0, 0.76, -0.24));
  for (const x of [-w / 2 + 0.15, w / 2 - 0.15]) {
    g.add(box(0.08, 0.46, 0.5, M.woodDark, x, 0.23, 0));
  }
  return g;
}

// quote hologram (floating text slab)
export function quoteHolo(text, author = '— Dr. B. R. Ambedkar') {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const x = c.getContext('2d');
  x.clearRect(0, 0, c.width, c.height);
  x.fillStyle = 'rgba(10,18,34,0.55)';
  x.fillRect(20, 20, c.width - 40, c.height - 40);
  x.strokeStyle = '#d9b45b'; x.lineWidth = 4; x.strokeRect(20, 20, c.width - 40, c.height - 40);
  x.fillStyle = '#f4ecd8'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = 'italic 46px Georgia, serif';
  // wrap
  const words = '“' + text + '”'.split(' ');
  const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).length > 46) { lines.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w;
  }
  lines.push(cur);
  const y0 = 210 - (lines.length - 1) * 30;
  lines.forEach((l, i) => x.fillText(l, c.width / 2, y0 + i * 62));
  x.fillStyle = '#d9b45b';
  x.font = '600 34px Georgia, serif';
  x.fillText(author, c.width / 2, 400);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.2), holoMat(0xffffff, 0.92));
  m.material = new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  return m;
}

// reception desk
export function receptionDesk() {
  const g = new THREE.Group();
  const top = box(3.6, 0.1, 1.1, M.woodDark, 0, 1.05, 0);
  const body = box(3.4, 1.0, 0.95, M.woodWarm, 0, 0.5, 0);
  const trim = box(3.5, 0.06, 1.0, M.brass, 0, 0.97, 0);
  g.add(body, top, trim);
  // curved front accent
  const front = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 1.0, 24, 1, false, Math.PI * 0.75, Math.PI * 0.5), M.woodWarm);
  front.position.set(0, 0.5, -0.2);
  front.scale.z = 0.45;
  g.add(front);
  const tex = plaqueTexture('Archive Reception', 'Begin your journey here', { w: 640, h: 170 });
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.4),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, emissive: 0x1a1408, emissiveIntensity: 0.45 }));
  pl.position.set(0, 0.6, 0.5);
  pl.rotation.x = -0.06;
  g.add(pl);
  return g;
}
