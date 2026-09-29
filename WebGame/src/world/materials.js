import * as THREE from 'three';

// ---------- texture + material library ----------
const loader = new THREE.TextureLoader();
const cache = new Map();

export const TEX = {};       // loaded textures
export const M = {};         // shared materials

function loadTex(name, url, { repeat = [1, 1], srgb = true, aniso = 8 } = {}) {
  const t = loader.load(url);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  TEX[name] = t;
  return t;
}

export async function loadTextures(quality) {
  const A = 'art/Textures/';
  const aniso = quality.aniso;
  loadTex('floorMed', A + 'floor_medallion.png', { repeat: [1, 1], aniso });
  loadTex('floorMedN', A + 'floor_medallion_n.png', { srgb: false, aniso });
  loadTex('carpet', A + 'carpet_heritage.png', { repeat: [4, 4], aniso });
  loadTex('carpetN', A + 'carpet_heritage_n.png', { repeat: [4, 4], srgb: false, aniso });
  loadTex('marbleC', A + 'marble_cream.png', { repeat: [3, 3], aniso });
  loadTex('marbleCN', A + 'marble_cream_n.png', { repeat: [3, 3], srgb: false, aniso });
  loadTex('marbleB', A + 'marble_blue.png', { repeat: [2, 2], aniso });
  loadTex('marbleBN', A + 'marble_blue_n.png', { repeat: [2, 2], srgb: false, aniso });
  loadTex('sand', A + 'sandstone_wall.png', { repeat: [4, 2], aniso });
  loadTex('sandN', A + 'sandstone_wall_n.png', { repeat: [4, 2], srgb: false, aniso });
  loadTex('woodW', A + 'wood_warm.png', { repeat: [2, 2], aniso });
  loadTex('woodWN', A + 'wood_warm_n.png', { repeat: [2, 2], srgb: false, aniso });
  loadTex('woodD', A + 'wood_dark.png', { repeat: [2, 2], aniso });
  loadTex('woodDN', A + 'wood_dark_n.png', { repeat: [2, 2], srgb: false, aniso });
  loadTex('coffer', A + 'ceiling_coffer.png', { repeat: [6, 4], aniso });
  loadTex('cofferN', A + 'ceiling_coffer_n.png', { repeat: [6, 4], srgb: false, aniso });
  loadTex('leather', A + 'leather_dark.png', { repeat: [2, 2], aniso });
  loadTex('leatherN', A + 'leather_dark_n.png', { repeat: [2, 2], srgb: false, aniso });
  loadTex('suit', A + 'suit_fabric.png', { repeat: [3, 3], aniso });
  loadTex('suitN', A + 'suit_fabric_n.png', { repeat: [3, 3], srgb: false, aniso });
  loadTex('paper', A + 'paper_aged.png', { repeat: [1, 1], aniso });
  loadTex('parch', A + 'parchment.png', { repeat: [1, 1], aniso });
  loadTex('sky', A + 'sky_gradient.png', { repeat: [1, 1], aniso: 4 });
  // images used on surfaces
  loadTex('portrait', 'art/Images/portrait_ambedkar_art.png', { repeat: [1, 1], aniso });
  loadTex('spines', 'art/Images/book_spines.png', { repeat: [1, 1], aniso });
  loadTex('ms1', 'art/Images/manuscript_placeholder_1.png', { repeat: [1, 1], aniso });
  loadTex('ms2', 'art/Images/manuscript_placeholder_2.png', { repeat: [1, 1], aniso });
  loadTex('ms3', 'art/Images/manuscript_placeholder_3.png', { repeat: [1, 1], aniso });
}

/**
 * Lazily load the digitised page that belongs to an archive record.
 * `media` is the record's media object ("Art/Documents/const_preamble",
 * "Art/Images/book_spines", "Diorama/MhowHouse"). Returns null for 3-D media
 * or anything we have no texture for, so callers can fall back.
 */
const mediaCache = new Map();
export function mediaTexture(media) {
  if (!media) return null;
  const ref = media.ref || (media.certificate || '');
  if (!ref) return null;
  let url = null;
  if (/^Art\/Documents\//i.test(ref)) {
    url = 'art/Documents/thumbs/' + ref.split('/').pop() + '.jpg';
  } else if (/^Art\/Images\//i.test(ref)) {
    url = 'art/Images/' + ref.split('/').pop() + '.png';
  }
  if (!url) return null;
  if (mediaCache.has(url)) return mediaCache.get(url);
  const t = loader.load(url);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  mediaCache.set(url, t);
  return t;
}

export function buildMaterials() {
  const std = (o) => new THREE.MeshStandardMaterial(o);

  M.marbleFloor = std({ map: TEX.floorMed, normalMap: TEX.floorMedN, normalScale: new THREE.Vector2(0.7, 0.7), roughness: 0.32, metalness: 0.06, envMapIntensity: 1.1 });
  M.marbleCream = std({ map: TEX.marbleC, normalMap: TEX.marbleCN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.38, metalness: 0.05 });
  M.marbleBlue = std({ map: TEX.marbleB, normalMap: TEX.marbleBN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.4, metalness: 0.05 });
  M.wall = std({ map: TEX.sand, normalMap: TEX.sandN, normalScale: new THREE.Vector2(0.9, 0.9), roughness: 0.86, metalness: 0 });
  M.carpet = std({ map: TEX.carpet, normalMap: TEX.carpetN, normalScale: new THREE.Vector2(1.1, 1.1), roughness: 0.96, metalness: 0 });
  M.ceiling = std({ map: TEX.coffer, normalMap: TEX.cofferN, normalScale: new THREE.Vector2(0.8, 0.8), roughness: 0.8, metalness: 0 });
  M.woodWarm = std({ map: TEX.woodW, normalMap: TEX.woodWN, roughness: 0.55, metalness: 0.04 });
  M.woodDark = std({ map: TEX.woodD, normalMap: TEX.woodDN, roughness: 0.5, metalness: 0.05 });
  M.leather = std({ map: TEX.leather, normalMap: TEX.leatherN, roughness: 0.72, metalness: 0.02 });
  M.brass = std({ color: 0xc9a24e, roughness: 0.28, metalness: 0.9, envMapIntensity: 1.3 });
  M.gold = std({ color: 0xd9b45b, roughness: 0.22, metalness: 1.0, envMapIntensity: 1.5 });
  M.goldGlow = std({ color: 0xd9b45b, roughness: 0.3, metalness: 0.9, emissive: 0x8a6a20, emissiveIntensity: 0.55 });
  M.darkMetal = std({ color: 0x2a2f3a, roughness: 0.42, metalness: 0.85 });
  M.glass = new THREE.MeshPhysicalMaterial({ color: 0xbcd2e8, roughness: 0.06, metalness: 0, transmission: 0.82, transparent: true, opacity: 0.42, thickness: 0.4, ior: 1.45, envMapIntensity: 1.4 });
  M.paper = std({ map: TEX.paper, roughness: 0.92, metalness: 0 });
  M.parch = std({ map: TEX.parch, roughness: 0.9, metalness: 0 });
  M.plinthWhite = std({ color: 0xe8e2d2, roughness: 0.5, metalness: 0.03 });
  M.plaqueGold = std({ color: 0xb9963f, roughness: 0.34, metalness: 0.92, emissive: 0x3a2c08, emissiveIntensity: 0.4 });
  M.suit = std({ map: TEX.suit, normalMap: TEX.suitN, normalScale: new THREE.Vector2(0.9, 0.9), color: 0x2c3e6b, roughness: 0.78, metalness: 0.02 });
  M.skin = std({ color: 0x9c6a45, roughness: 0.66, metalness: 0 });
  M.hair = std({ color: 0x14110f, roughness: 0.52, metalness: 0.06 });
  M.shirt = std({ color: 0xf2efe6, roughness: 0.7, metalness: 0 });
  M.tie = std({ color: 0x9e2f2f, roughness: 0.6, metalness: 0.02 });
  M.shoe = std({ color: 0x17130f, roughness: 0.35, metalness: 0.25 });
  M.lens = new THREE.MeshPhysicalMaterial({ color: 0xdfeaf2, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.3, transmission: 0.7, thickness: 0.05 });
  M.leaf = std({ color: 0x3e6b46, roughness: 0.8, metalness: 0 });
  M.trunk = std({ color: 0x5b4632, roughness: 0.9, metalness: 0 });
  M.fountain = std({ color: 0x7fb6d9, roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.75 });
  M.stone = std({ color: 0x9b958a, roughness: 0.92, metalness: 0.02 });
  M.sandstoneRed = std({ color: 0xa8683f, roughness: 0.88, metalness: 0.02 });
  M.warmLight = new THREE.MeshBasicMaterial({ color: 0xffe6b8 });
  M.panelDark = std({ color: 0x131a2b, roughness: 0.6, metalness: 0.1 });
}

// emissive "screen" material factory
export function screenMat(color = 0x86c7ff) {
  return new THREE.MeshStandardMaterial({
    color: 0x0a1220, emissive: color, emissiveIntensity: 1.25, roughness: 0.35, metalness: 0.1,
  });
}

export function holoMat(color = 0xd9b45b, opacity = 0.85) {
  return new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}
