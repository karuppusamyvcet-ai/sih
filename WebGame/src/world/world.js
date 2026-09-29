import * as THREE from 'three';
import { M, TEX, screenMat, holoMat, loadTextures, buildMaterials } from './materials.js';
import * as P from './props.js';
import { zoneMeta, doorOrder } from '../content.js';
import { rand, damp } from '../core.js';

const ACCENT_HEX = {
  early_life: 0x3d5c8f, social_reform: 0x8c5240, constitution: 0x2e4a6e,
  scholarship: 0x6e5435, memorials: 0x4d6e52, legacy: 0x404d8c,
};

// ------------------------------------------------------------------
// World manager: builds hub + galleries, handles doors, dust, lights
// ------------------------------------------------------------------
export function createWorld(scene, ctx) {
  let current = null;          // active build result
  let currentZone = null;      // 'hub' | zoneId
  const doorState = {};        // zoneId -> {openAmount}
  let dust = null;
  const updaters = [];

  function dispose(obj) {
    obj.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          // shared materials/textures are kept; only dispose canvas-generated ones
          if (m.map && m.map.isCanvasTexture) m.map.dispose();
          if (m.dispose && (m.map && m.map.isCanvasTexture || m.userData.dispose)) m.dispose();
        }
      }
    });
    scene.remove(obj);
  }

  function clear() {
    if (current) dispose(current.group);
    if (dust) { scene.remove(dust.points); dust = null; }
    updaters.length = 0;
    current = null;
  }

  // shared lighting rig ------------------------------------------------
  function lightRig({ sun = 1.05, warm = 0xfff2e0, fog = 0x9a9384, fogD = 0.0075, sky = null } = {}) {
    const g = new THREE.Group();
    const sunL = new THREE.DirectionalLight(warm, sun);
    sunL.position.set(14, 22, 10);
    sunL.castShadow = true;
    sunL.shadow.mapSize.set(ctx.quality.shadows ? 2048 : 1024, ctx.quality.shadows ? 2048 : 1024);
    sunL.shadow.camera.left = -26; sunL.shadow.camera.right = 26;
    sunL.shadow.camera.top = 26; sunL.shadow.camera.bottom = -26;
    sunL.shadow.camera.far = 70;
    sunL.shadow.bias = -0.0006;
    sunL.shadow.normalBias = 0.03;
    g.add(sunL);
    // cool bounce fill
    const fill = new THREE.DirectionalLight(0xcfe0ff, sun * 0.22);
    fill.position.set(-12, 14, -8);
    g.add(fill);
    // trilight ambient via hemisphere
    const hemi = new THREE.HemisphereLight(sky || 0x8892a8, 0x4a4238, 0.75);
    g.add(hemi);
    scene.fog = new THREE.FogExp2(fog, fogD);
    return g;
  }

  // dust motes --------------------------------------------------------
  function makeDust(bounds) {
    const n = ctx.quality.dust;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3);
    const seed = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = rand(-bounds.x, bounds.x);
      pos[i * 3 + 1] = rand(0.3, bounds.y);
      pos[i * 3 + 2] = rand(-bounds.z, bounds.z);
      seed[i] = rand(100);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xffe9c0, size: 0.045, transparent: true, opacity: 0.5,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    scene.add(points);
    return {
      points, seed,
      update(t) {
        const p = geo.attributes.position.array;
        for (let i = 0; i < n; i++) {
          p[i * 3] += Math.sin(t * 0.25 + seed[i]) * 0.0016;
          p[i * 3 + 1] += Math.cos(t * 0.2 + seed[i] * 1.7) * 0.0013;
          p[i * 3 + 2] += Math.cos(t * 0.22 + seed[i] * 0.9) * 0.0016;
          if (p[i * 3 + 1] > bounds.y) p[i * 3 + 1] = 0.3;
        }
        geo.attributes.position.needsUpdate = true;
      },
    };
  }

  // ---------------- floor helpers ----------------
  function circularFloor(radius, mat) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(radius, 64), mat);
    m.rotation.x = -Math.PI / 2;
    m.receiveShadow = true;
    return m;
  }

  // ============================================================
  // HUB — grand rotunda with six gallery doors on the north wall
  // ============================================================
  function buildHub() {
    const g = new THREE.Group();
    const interactables = [];
    const colliders = [];
    const R = 17;

    const rig = lightRig({ sun: 1.12, fogD: 0.006, fog: 0x8f8878 });
    g.add(rig);

    // ---- floor: concentric marble + central medallion ----
    const floor = circularFloor(R + 2, M.marbleCream);
    g.add(floor);
    const medallion = circularFloor(7.5, M.marbleFloor);
    medallion.position.y = 0.012;
    medallion.material = M.marbleFloor.clone();
    medallion.material.map = TEX.floorMed.clone();
    medallion.material.map.repeat.set(1, 1);
    medallion.material.map.needsUpdate = true;
    g.add(medallion);
    // gold inlay rings
    for (const r of [7.6, 12.5, 16.6]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.045, 8, 96), M.brass);
      ring.rotation.x = Math.PI / 2; ring.position.y = 0.02;
      g.add(ring);
    }
    // carpet path from south entrance to reception
    const runner = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 20), M.carpet);
    runner.rotation.x = -Math.PI / 2; runner.position.set(0, 0.02, 7.2);
    runner.receiveShadow = true;
    g.add(runner);

    // ---- rotunda wall: full cylinder (doors pierce the north arc) ----
    const wallSeg = 64;
    const wallMat = M.wall.clone();
    wallMat.map = TEX.sand.clone(); wallMat.map.repeat.set(12, 2); wallMat.map.needsUpdate = true;
    wallMat.normalMap = TEX.sandN.clone(); wallMat.normalMap.repeat.set(12, 2); wallMat.normalMap.needsUpdate = true;
    wallMat.side = THREE.BackSide;
    const wall = new THREE.Mesh(
      new THREE.CylinderGeometry(R, R, 9, wallSeg, 1, true),
      wallMat);
    wall.position.y = 4.5;
    wall.receiveShadow = true;
    g.add(wall);

    // wainscot + crown moulding rings
    const wain = new THREE.Mesh(new THREE.CylinderGeometry(R - 0.06, R - 0.06, 1.4, 64, 1, true, 0, Math.PI * 2), M.woodWarm);
    wain.position.y = 0.7; wain.material.side = THREE.BackSide;
    g.add(wain);
    const crown = new THREE.Mesh(new THREE.TorusGeometry(R - 0.1, 0.16, 8, 96), M.brass);
    crown.rotation.x = Math.PI / 2; crown.position.y = 8.55;
    g.add(crown);

    // ---- ceiling: coffered ring + glass skylight oculus ----
    const ceil = new THREE.Mesh(new THREE.RingGeometry(5.2, R + 0.5, 64), M.ceiling);
    ceil.rotation.x = Math.PI / 2; ceil.position.y = 9;
    ceil.receiveShadow = true;
    g.add(ceil);
    const oculusRim = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.28, 10, 64), M.marbleCream);
    oculusRim.rotation.x = Math.PI / 2; oculusRim.position.y = 8.96;
    g.add(oculusRim);
    // sky above oculus
    const skyDisc = new THREE.Mesh(new THREE.CircleGeometry(6.4, 48),
      new THREE.MeshBasicMaterial({ map: TEX.sky, fog: false }));
    skyDisc.rotation.x = Math.PI / 2; skyDisc.position.y = 11.5;
    g.add(skyDisc);
    // god-ray cone (fake volumetric)
    const ray = new THREE.Mesh(new THREE.ConeGeometry(5.4, 8.8, 32, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xffe6b8, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    ray.position.y = 4.6; ray.rotation.x = Math.PI;
    g.add(ray);

    // ---- columns around perimeter ----
    for (let i = 0; i < 10; i++) {
      const a = Math.PI * 0.5 + (i / 10) * Math.PI * 2;
      if (Math.abs(Math.sin(a)) < 0.28 && Math.cos(a) < 0) continue;  // gaps
      const x = Math.cos(a) * (R - 1.1), z = Math.sin(a) * (R - 1.1);
      const c = P.column(8.6, 0.4);
      c.position.set(x, 0, z);
      g.add(c);
      colliders.push({ x, z, hw: 0.62, hd: 0.62 });
    }

    // ---- SIX DOORS along the north arc ----
    const doors = {};
    const doorXs = [-12.4, -7.5, -2.6, 2.6, 7.5, 12.4];
    doorOrder.forEach((zoneId, i) => {
      const x = doorXs[i], z = -16.0;
      const d = buildDoor(zoneId, ACCENT_HEX[zoneId]);
      d.group.position.set(x, 0, z);
      g.add(d.group);
      doors[zoneId] = d;
      interactables.push({
        id: 'door_' + zoneId, type: 'door', zone: zoneId,
        title: zoneMeta[zoneId].title, pos: new THREE.Vector3(x, 1.4, z + 2.0), range: 3.2,
      });
    });
    // solid north wall strip (no slipping between door frames)
    colliders.push({ x: 0, z: -16.4, hw: 16.9, hd: 0.7 });

    // ---- reception desk + guide kiosk (mission 1) ----
    const desk = P.receptionDesk();
    desk.position.set(0, 0, 8.6);
    desk.rotation.y = Math.PI;
    g.add(desk);
    colliders.push({ x: 0, z: 8.6, hw: 1.95, hd: 0.75 });
    const kiosk = P.archiveTerminal({ accent: 0xffd88a });
    kiosk.position.set(-2.6, 0, 8.2);
    kiosk.rotation.y = Math.PI * 0.92;
    g.add(kiosk);
    colliders.push({ x: -2.6, z: 8.2, hw: 0.75, hd: 0.5 });
    interactables.push({
      id: 'kiosk_guide', type: 'kiosk', title: 'Archive Guide Terminal',
      pos: new THREE.Vector3(-2.6, 1.3, 7.4), range: 2.6,
    });
    // welcome banner behind desk
    const welcome = P.titleBanner('DIGITAL AMBEDKAR HERITAGE MUSEUM', 'Six galleries · 35 archive records · offline guide');
    welcome.position.set(0, 5.6, -15.9);
    g.add(welcome);

    // ---- central portrait pedestal ----
    const portraitGrp = new THREE.Group();
    const ped = P.pedestal({ title: 'Dr. B. R. Ambedkar', sub: 'Artistic visualization', glow: 0xd9b45b, radius: 0.85 });
    portraitGrp.add(ped);
    const frame = P.framedPanel(1.6, 2.0, TEX.portrait, M.gold);
    frame.position.set(0, 2.35, 0);
    portraitGrp.add(frame);
    // backlight glow
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.glowTex, color: 0xd9b45b, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.set(4.4, 4.4, 1); glow.position.set(0, 2.3, -0.4);
    portraitGrp.add(glow);
    portraitGrp.position.set(0, 0, 0);
    g.add(portraitGrp);
    colliders.push({ x: 0, z: 0, hw: 1.1, hd: 1.1 });
    interactables.push({
      id: 'portrait', type: 'portrait', title: 'Portrait of Dr. Ambedkar',
      pos: new THREE.Vector3(0, 1.8, 1.8), range: 3.2,
    });
    // spot from ceiling onto portrait
    const spot = new THREE.SpotLight(0xffe2ae, 40, 22, 0.5, 0.55, 1.4);
    spot.position.set(0, 8.4, 2.6);
    spot.target = portraitGrp;
    spot.castShadow = ctx.quality.shadows;
    g.add(spot);

    // ---- quote hologram ----
    const holo = P.quoteHolo('Cultivation of mind should be the ultimate aim of human existence.', '— Dr. B. R. Ambedkar');
    holo.position.set(-6.4, 2.6, 3.4);
    holo.rotation.y = 0.7;
    g.add(holo);
    const holoRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.02, 8, 48), holoMat(0xd9b45b, 0.8));
    holoRing.rotation.x = Math.PI / 2; holoRing.position.set(-6.4, 0.9, 3.4);
    g.add(holoRing);
    colliders.push({ x: -6.4, z: 3.4, hw: 1.2, hd: 1.2 });
    interactables.push({
      id: 'quote', type: 'quote', title: 'Hologram Quote',
      pos: new THREE.Vector3(-6.4, 1.8, 4.6), range: 2.8,
    });

    // ---- grand timeline (east arc) ----
    const tl = P.timelineWall([
      { year: '1891', text: 'Born at Mhow, 14 April' },
      { year: '1912', text: 'B.A., Elphinstone College, Bombay' },
      { year: '1916', text: 'London School of Economics & Gray’s Inn' },
      { year: '1924', text: 'Bahishkrit Hitakarini Sabha' },
      { year: '1927', text: 'Mahad Satyagraha' },
      { year: '1932', text: 'Poona Pact' },
      { year: '1935', text: '“I was born a Hindu…”' },
      { year: '1947', text: 'India’s first Law Minister' },
      { year: '1950', text: 'Architect of the Constitution' },
      { year: '1956', text: 'Diksha at Deekshabhoomi' },
    ], 0xd9b45b, 9.4);
    tl.position.set(15.7, 4.4, 0);
    tl.rotation.y = -Math.PI / 2;
    g.add(tl);
    interactables.push({
      id: 'timeline', type: 'timeline', title: 'Grand Timeline',
      pos: new THREE.Vector3(14.2, 1.6, 0), range: 4.2,
    });

    // ---- mission map board (west) ----
    const board = P.wallPanel({ title: 'Museum Directory', w: 3.4, h: 2.1, tex: TEX.spines, accent: 0xd9b45b });
    board.position.set(-15.7, 3.6, -1);
    board.rotation.y = Math.PI / 2;
    g.add(board);
    const dirTex = P.plaqueTexture('▸ SIX GALLERIES', 'Early Life · Reform · Constitution · Scholarship · Memorials · Legacy', { w: 900, h: 300 });
    const dir = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.2),
      new THREE.MeshStandardMaterial({ map: dirTex, roughness: 0.6, emissive: 0x11182c, emissiveIntensity: 0.5 }));
    dir.position.set(-15.6, 5.4, -1);
    dir.rotation.y = Math.PI / 2;
    g.add(dir);

    // ---- chandeliers ----
    for (const [x, z] of [[-7, -6], [7, -6], [-7, 6], [7, 6]]) {
      const ch = P.chandelier(1.15);
      ch.position.set(x, 7.1, z);
      g.add(ch);
      const pl = new THREE.PointLight(0xffdca0, 14, 16, 2);
      pl.position.set(x, 6.9, z);
      g.add(pl);
      updaters.push((dt, t) => {
        ch.position.y = 7.1 + Math.sin(t * 0.7 + x) * 0.03;
        pl.intensity = 14 + Math.sin(t * 9 + z) * 0.7;
      });
    }

    // ---- benches, plants, stanchions ----
    for (const [x, z, ry] of [[-5, 12, 0.3], [5, 12, -0.3], [10, 5, -0.9], [-10, 5, 0.9]]) {
      const b = P.bench(); b.position.set(x, 0, z); b.rotation.y = ry; g.add(b);
      colliders.push({ x, z, hw: 1.1, hd: 0.4 });
    }
    for (const [x, z] of [[13, 9], [-13, 9], [13, -9], [-13, -9], [-4, -12], [4, -12]]) {
      const pl = P.plant(); pl.position.set(x, 0, z); g.add(pl);
      colliders.push({ x, z, hw: 0.4, hd: 0.4 });
    }
    // stanchion line guiding to reception
    const s1 = [], s2 = [];
    for (let i = 0; i < 4; i++) {
      const a = P.stanchion(); a.position.set(-2.4, 0, 13 - i * 1.7); g.add(a); s1.push(a.position);
      const b = P.stanchion(); b.position.set(2.4, 0, 13 - i * 1.7); g.add(b); s2.push(b.position);
      colliders.push({ x: -2.4, z: 13 - i * 1.7, hw: 0.16, hd: 0.16 });
      colliders.push({ x: 2.4, z: 13 - i * 1.7, hw: 0.16, hd: 0.16 });
    }
    for (let i = 0; i < 3; i++) {
      g.add(P.ropeBetween(s1[i], s1[i + 1]));
      g.add(P.ropeBetween(s2[i], s2[i + 1]));
    }

    // outer bounds
    const bounds = { x0: -R + 1.2, x1: R - 1.2, z0: -R + 1.2, z1: R - 1.2 };

    // animated bits
    updaters.push((dt, t) => {
      holo.position.y = 2.6 + Math.sin(t * 1.1) * 0.09;
      holo.material.opacity = 0.85 + Math.sin(t * 7) * 0.06;
      holoRing.rotation.z += dt * 0.4;
      glow.material.opacity = 0.45 + Math.sin(t * 2.2) * 0.1;
      for (const zid in doors) {
        const d = doors[zid];
        const target = d.open ? 1 : 0;
        d.openAmount = damp(d.openAmount, target, 5, dt);
        d.left.position.x = -d.openAmount * 1.32;
        d.right.position.x = d.openAmount * 1.32;
        d.ring.material.opacity = 0.45 + Math.sin(t * 2.4 + doorXs.indexOf(d.x) ) * 0.3 + (d.locked ? 0 : 0.2);
      }
    });

    return {
      zone: 'hub', group: g, interactables, colliders, bounds, doors,
      spawns: { default: { x: 0, z: 13.6, yaw: Math.PI }, hubFromGallery: { x: 0, z: -12.5, yaw: 0 } },
      setDoor(zoneId, { open, locked }) {
        const d = doors[zoneId];
        if (!d) return;
        d.open = open; d.locked = locked;
        d.ring.material.color.set(lockColor(locked));
        d.plaque.material.emissiveIntensity = locked ? 0.06 : 0.6;
      },
      update(dt, t) { for (const u of updaters) u(dt, t); },
    };

    function lockColor(locked) { return locked ? 0x666a75 : 0xd9b45b; }
  }

  // door factory ------------------------------------------------------
  function buildDoor(zoneId, accent) {
    const group = new THREE.Group();
    const meta = zoneMeta[zoneId];
    // stone arch frame
    const arch = new THREE.Group();
    arch.add(P.box(0.5, 5.4, 1.1, M.marbleCream, -1.75, 2.7, 0));
    arch.add(P.box(0.5, 5.4, 1.1, M.marbleCream, 1.75, 2.7, 0));
    arch.add(P.box(4.1, 0.6, 1.1, M.marbleCream, 0, 5.5, 0));
    const pediment = new THREE.Mesh(new THREE.ConeGeometry(2.6, 1.0, 4), M.marbleBlue);
    pediment.position.y = 6.2; pediment.rotation.y = Math.PI / 4; pediment.rotation.x = Math.PI; pediment.scale.z = 0.4;
    arch.add(pediment);
    group.add(arch);
    // zone accent glow strip above door
    const strip = P.box(3.2, 0.1, 0.16, new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.6, roughness: 0.4 }), 0, 5.15, 0.58);
    group.add(strip);
    // plaque above
    const tex = P.plaqueTexture(meta.title, '', { accent: '#d9b45b', w: 720, h: 150 });
    const plq = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.66),
      new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, emissive: 0x181004, emissiveIntensity: 0.6 }));
    plq.position.set(0, 4.55, 0.58);
    group.add(plq);
    // double doors (slide open)
    const doorMat = M.woodDark.clone();
    const left = P.box(1.55, 4.4, 0.18, doorMat, -0.8, 2.25, 0.1);
    const right = P.box(1.55, 4.4, 0.18, doorMat, 0.8, 2.25, 0.1);
    // door details
    for (const dr of [left, right]) {
      const inlay = P.box(1.2, 1.6, 0.06, M.leather, 0, 0.5, 0.1);
      dr.add(inlay);
      const handle = P.cyl(0.04, 0.04, 0.4, M.brass, dr === left ? 0.6 : -0.6, 0, 0.14, 10);
      handle.rotation.x = Math.PI / 2;
      dr.add(handle);
    }
    group.add(left, right);
    // floor glow when unlocked
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.05, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0xd9b45b, transparent: true, opacity: 0.6 }));
    ring.rotation.x = Math.PI / 2; ring.position.set(0, 0.06, 1.6);
    group.add(ring);
    // short accent runner
    const run = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 2.4), M.carpet);
    run.rotation.x = -Math.PI / 2; run.position.set(0, 0.03, 1.9);
    group.add(run);
    return { group, left, right, ring, plaque: plq, open: false, locked: true, openAmount: 0, zoneId, x: 0 };
  }

  // ============================================================
  // GALLERY — data-driven exhibit hall for one zone
  // ============================================================
  function buildZone(zoneId) {
    const meta = zoneMeta[zoneId];
    const accent = ACCENT_HEX[zoneId];
    const zone = ctx.content.zoneById.get(zoneId);
    const g = new THREE.Group();
    const interactables = [];
    const colliders = [];
    const updatersLocal = [];

    const rig = lightRig({ sun: 0.95, fogD: 0.01, fog: 0x77715f, warm: 0xfff0da });
    g.add(rig);

    const W = 30, D = 20, H = 7.6;   // hall size

    // ---- floor ----
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), M.marbleCream);
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
    g.add(floor);
    // carpet aisle
    const aisle = new THREE.Mesh(new THREE.PlaneGeometry(6.5, D - 3.5), M.carpet);
    aisle.rotation.x = -Math.PI / 2; aisle.position.y = 0.014; aisle.receiveShadow = true;
    g.add(aisle);
    // accent floor inlays
    const inlayMat = new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.5, roughness: 0.4, metalness: 0.4 });
    for (const x of [-3.7, 3.7]) {
      const inlay = new THREE.Mesh(new THREE.PlaneGeometry(0.16, D - 3.5), inlayMat);
      inlay.rotation.x = -Math.PI / 2; inlay.position.set(x, 0.02, 0);
      g.add(inlay);
    }

    // ---- walls ----
    const mkWall = (w, h, x, z, ry) => {
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(w, h), M.wall);
      wall.position.set(x, h / 2, z);
      wall.rotation.y = ry;
      wall.receiveShadow = true;
      g.add(wall);
      // wainscot
      const ws = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.4), M.woodWarm);
      ws.position.set(x, 0.7, z);
      ws.rotation.y = ry;
      if (ry === 0) ws.position.z += z > 0 ? -0.03 : 0.03;
      if (ry === Math.PI / 2 || ry === -Math.PI / 2) ws.position.x += x > 0 ? -0.03 : 0.03;
      ws.receiveShadow = true;
      g.add(ws);
      // crown
      const cr = P.box(w, 0.22, 0.14, M.brass, 0, 0, 0);
      cr.position.set(x, H - 0.2, z);
      cr.rotation.y = ry;
      g.add(cr);
    };
    mkWall(W, H, 0, -D / 2, 0);            // north
    mkWall(W, H, 0, D / 2, Math.PI);       // south (entry)
    mkWall(D, H, -W / 2, 0, Math.PI / 2);  // west
    mkWall(D, H, W / 2, 0, -Math.PI / 2);  // east
    // ceiling
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), M.ceiling);
    ceil.rotation.x = Math.PI / 2; ceil.position.y = H;
    ceil.receiveShadow = true;
    g.add(ceil);
    // ceiling beams
    for (const x of [-10, -3.4, 3.4, 10]) {
      const beam = P.box(0.5, 0.34, D, M.woodDark, x, H - 0.2, 0);
      g.add(beam);
    }

    // ---- title banner (north wall) ----
    const title = P.titleBanner(meta.title, meta.desc, '#' + accent.toString(16).padStart(6, '0'));
    title.position.set(0, 5.4, -D / 2 + 0.14);
    g.add(title);

    // ---- timeline (west wall) ----
    if (zone.timeline && zone.timeline.length) {
      const tl = P.timelineWall(zone.timeline, accent, 9.4);
      tl.position.set(-W / 2 + 0.14, 3.9, -2.4);
      tl.rotation.y = Math.PI / 2;
      g.add(tl);
      interactables.push({
        id: zoneId + '_timeline', type: 'timeline', title: 'Timeline — ' + meta.title,
        pos: new THREE.Vector3(-W / 2 + 2.2, 1.6, -2.4), range: 3.4,
      });
    }

    // ---- back door to hub (south wall) ----
    const back = buildDoor(zoneId, accent);
    back.group.position.set(0, 0, D / 2 - 0.55);
    back.group.rotation.y = Math.PI;
    back.open = true; back.locked = false;
    g.add(back.group);
    interactables.push({
      id: 'back_hub', type: 'backdoor', zone: zoneId,
      title: 'Return to Rotunda', pos: new THREE.Vector3(0, 1.4, D / 2 - 2.2), range: 2.6,
    });
    // entry sign
    const exitTex = P.plaqueTexture('◂ ROTUNDA', 'Exit gallery', { w: 460, h: 130 });
    const exit = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.48),
      new THREE.MeshStandardMaterial({ map: exitTex, roughness: 0.55 }));
    exit.position.set(0, 4.3, D / 2 - 0.62);
    exit.rotation.y = Math.PI;
    g.add(exit);

    // ---- exhibit placement ----
    const items = zone.exhibits.filter((e) => e.kind !== 'MonumentDiorama');
    const dioramas = zone.exhibits.filter((e) => e.kind === 'MonumentDiorama');

    // special central pieces first
    const special = items.filter((e) => ['ConstitutionTable', 'ArchiveTerminal', 'AIConsole', 'BookDesk'].includes(e.kind));
    const regular = items.filter((e) => !['ConstitutionTable', 'ArchiveTerminal', 'AIConsole', 'BookDesk'].includes(e.kind));

    // central special props
    special.forEach((e) => {
      let prop, pos, yaw = 0;
      if (e.kind === 'ConstitutionTable') {
        prop = P.constitutionTable(); pos = { x: 0, z: -3.4 }; yaw = Math.PI;
      } else if (e.kind === 'ArchiveTerminal') {
        prop = P.archiveTerminal({ accent: 0x7fd0ff }); pos = { x: 6.4, z: -6.2 }; yaw = Math.PI * 0.85;
      } else if (e.kind === 'AIConsole') {
        prop = P.aiConsole(); pos = { x: -6.4, z: -6.2 }; yaw = Math.PI * 1.15;
      } else {
        prop = P.bookDesk(); pos = { x: -7, z: 4.6 }; yaw = Math.PI * 0.15;
      }
      prop.position.set(pos.x, 0, pos.z);
      prop.rotation.y = yaw;
      g.add(prop);
      addColliderBox(prop, pos.x, pos.z, e.kind === 'ConstitutionTable' ? [1.5, 0.8] : [1.1, 0.7]);
      interactables.push({
        id: e.id, type: exhibitType(e.kind), title: e.title, exhibit: e,
        pos: new THREE.Vector3(pos.x, 1.4, pos.z + (e.kind === 'ConstitutionTable' ? 1.6 : 1.3)), range: 3.0,
      });
      maybeSpot(pos.x, pos.z, accent);
    });

    // regular exhibits along the walls
    const slots = [
      { x: -12.6, z: -6.4, ry: Math.PI / 2 },
      { x: -12.6, z: -1.2, ry: Math.PI / 2 },
      { x: -12.6, z: 4.6, ry: Math.PI / 2 },
      { x: 12.6, z: -6.4, ry: -Math.PI / 2 },
      { x: 12.6, z: -1.2, ry: -Math.PI / 2 },
      { x: 12.6, z: 4.6, ry: -Math.PI / 2 },
      { x: -7.4, z: -9.2, ry: 0 },
      { x: 7.4, z: -9.2, ry: 0 },
      { x: -4.6, z: 8.4, ry: Math.PI },
      { x: 4.6, z: 8.4, ry: Math.PI },
    ];
    let slotI = 0;
    regular.forEach((e) => {
      const s = slots[slotI % slots.length]; slotI++;
      let prop;
      const titleShort = e.title.length > 30 ? e.title.slice(0, 28) + '…' : e.title;
      if (e.kind === 'WallPanel') {
        // snap flush to the wall this slot faces
        prop = P.wallPanel({ title: titleShort, w: 2.4, h: 1.5, accent, tex: zoneTex(zoneId, e.id) });
        if (s.ry === Math.PI / 2) prop.position.set(-W / 2 + 0.16, 3.1, s.z);
        else if (s.ry === -Math.PI / 2) prop.position.set(W / 2 - 0.16, 3.1, s.z);
        else if (s.ry === 0) prop.position.set(s.x, 3.1, -D / 2 + 0.16);
        else prop.position.set(s.x, 3.1, D / 2 - 0.16);
        prop.rotation.y = s.ry;
      } else if (e.kind === 'DisplayCase') {
        prop = P.displayCase({ title: titleShort, accent, item: artifactFor(e.id) });
        prop.position.set(s.x, 0, s.z);
        prop.rotation.y = s.ry;
      } else if (e.kind === 'QuizKiosk') {
        prop = P.quizKiosk({ title: titleShort, accent, icon: '🎓' });
        prop.position.set(s.x * 0.62, 0, s.z > 0 ? 6.8 : -7.6);
        prop.rotation.y = s.z > 0 ? Math.PI : 0;
      } else { // Pedestal
        prop = P.pedestal({ title: titleShort, sub: '', glow: accent, radius: 0.6 });
        const art = P.artifact(artifactFor(e.id), accent);
        art.position.y = 1.12;
        prop.add(art);
        prop.position.set(s.x * 0.92, 0, s.z * 0.98);
        prop.rotation.y = s.ry;
      }
      g.add(prop);
      if (e.kind !== 'WallPanel') {
        const cs = e.kind === 'DisplayCase' ? [1.0, 0.6] : e.kind === 'QuizKiosk' ? [0.5, 0.45] : [0.7, 0.7];
        addColliderBox(prop, prop.position.x, prop.position.z, cs);
      } else {
        // wall panels: no collider (on wall)
      }
      const p = prop.position;
      interactables.push({
        id: e.id, type: exhibitType(e.kind), title: e.title, exhibit: e,
        pos: new THREE.Vector3(
          p.x + Math.sin(s.ry) * (e.kind === 'WallPanel' ? 1.5 : 1.4),
          1.4,
          p.z + Math.cos(s.ry) * (e.kind === 'WallPanel' ? 1.5 : 1.4)),
        range: e.kind === 'WallPanel' ? 2.6 : 3.0,
      });
      if (e.kind === 'Pedestal' || e.kind === 'DisplayCase') {
        maybeSpot(prop.position.x, prop.position.z, accent);
        // animate any spinning/levitating artifact children
        prop.traverse((o) => {
          if (o.userData && o.userData.spin) {
            updatersLocal.push((dt, t) => { o.userData.spin.rotation.y += dt * 0.5; });
          }
          if (o.userData && o.userData.flame) {
            updatersLocal.push((dt, t) => {
              o.userData.flame.scale.y = 1.55 + Math.sin(t * 11) * 0.2;
              o.userData.flame.position.x = Math.sin(t * 6) * 0.008;
            });
          }
        });
        // levitation for pedestal artifacts
        if (e.kind === 'Pedestal') {
          const art = prop.children.find((c) => c.type === 'Group');
          if (art) {
            const y0 = art.position.y;
            updatersLocal.push((dt, t) => {
              art.position.y = y0 + Math.sin(t * 1.3) * 0.045;
              art.rotation.y += dt * 0.35;
            });
          }
        }
      }
    });

    // ---- memorials dioramas ring ----
    if (dioramas.length) {
      const kinds = ['stupa', 'gate', 'pillar', 'hall', 'arch', 'tower'];
      dioramas.forEach((e, i) => {
        const a = (i / dioramas.length) * Math.PI * 2 + Math.PI / 6;
        const x = Math.cos(a) * 8.6, z = Math.sin(a) * 5.6 - 1.2;
        const d = P.diorama({ title: e.title, kind: kinds[i % kinds.length], accent });
        d.position.set(x, 0, z);
        d.rotation.y = -a + Math.PI / 2;
        g.add(d);
        addColliderBox(d, x, z, [1.7, 1.7]);
        interactables.push({
          id: e.id, type: 'diorama', title: e.title, exhibit: e,
          pos: new THREE.Vector3(x + Math.cos(a) * 2.2, 1.4, z + Math.sin(a) * 2.2), range: 3.2,
        });
        maybeSpot(x, z, 0x8fe0a8, 18);
        updatersLocal.push((dt, t) => {
          d.userData.scene.rotation.y = Math.sin(t * 0.24 + i) * 0.14;
        });
      });
    }

    // ---- ambient gallery lights: pendant lamps along the aisle ----
    for (const z of [-6, 0, 6]) {
      for (const x of [-3.9, 3.9]) {
        const lamp = P.chandelier(0.55);
        lamp.position.set(x, H - 1.0, z);
        g.add(lamp);
      }
    }
    const pl1 = new THREE.PointLight(0xffe0b0, 22, 26, 2); pl1.position.set(0, H - 1.4, -4); g.add(pl1);
    const pl2 = new THREE.PointLight(0xffe0b0, 18, 26, 2); pl2.position.set(0, H - 1.4, 5); g.add(pl2);
    const plA = new THREE.PointLight(accent, 14, 20, 2); plA.position.set(-8, H - 1.6, -4); g.add(plA);
    const plB = new THREE.PointLight(accent, 14, 20, 2); plB.position.set(8, H - 1.6, -4); g.add(plB);

    // ---- benches ----
    for (const [x, z] of [[-3.9, 2.6], [3.9, 2.6]]) {
      const b = P.bench(1.9); b.position.set(x, 0, z); b.rotation.y = x > 0 ? -0.35 : 0.35; g.add(b);
      colliders.push({ x, z, hw: 0.95, hd: 0.4 });
    }
    // corner plants
    for (const [x, z] of [[-W / 2 + 1.4, D / 2 - 1.4], [W / 2 - 1.4, D / 2 - 1.4]]) {
      const pl = P.plant(); pl.position.set(x, 0, z); g.add(pl);
      colliders.push({ x, z, hw: 0.4, hd: 0.4 });
    }

    const bounds = { x0: -W / 2 + 0.9, x1: W / 2 - 0.9, z0: -D / 2 + 0.9, z1: D / 2 - 0.9 };

    return {
      zone: zoneId, group: g, interactables, colliders, bounds,
      spawns: {
        fromHub: { x: 0, z: D / 2 - 3.2, yaw: Math.PI },
        default: { x: 0, z: D / 2 - 3.2, yaw: Math.PI },
      },
      setDoor() { /* gallery doors always open */ },
      update(dt, t) { for (const u of updatersLocal) u(dt, t); },
    };

    // helpers
    function addColliderBox(prop, x, z, [hw, hd]) { colliders.push({ x, z, hw, hd }); }
    function maybeSpot(x, z, color, intensity = 26) {
      if (!ctx.quality.shadows) { // still add light, cheaper
        const s = new THREE.PointLight(color, intensity * 0.6, 9, 2);
        s.position.set(x, 4.6, z);
        g.add(s);
        return;
      }
      const s = new THREE.SpotLight(0xfff1d8, intensity, 11, 0.44, 0.6, 1.6);
      s.position.set(x, 6.6, z);
      s.target.position.set(x, 1, z);
      s.castShadow = false;
      g.add(s, s.target);
      const pool = new THREE.Mesh(new THREE.CircleGeometry(1.4, 24),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending }));
      pool.rotation.x = -Math.PI / 2; pool.position.set(x, 0.03, z);
      g.add(pool);
    }
    function exhibitType(kind) {
      switch (kind) {
        case 'QuizKiosk': return 'quiz';
        case 'ArchiveTerminal': return 'archive';
        case 'AIConsole': return 'ai';
        case 'ConstitutionTable': return 'constitution';
        case 'BookDesk': return 'desk';
        default: return 'exhibit';
      }
    }
    function zoneTex(zid, eid) {
      if (zid === 'scholarship' || zid === 'legacy') return TEX.spines;
      if (zid === 'constitution') return TEX.ms3;
      if (eid.startsWith('el_')) return TEX.ms1;
      if (eid.startsWith('sr_')) return TEX.ms2;
      return TEX.portrait;
    }
    function artifactFor(eid) {
      const map = ['urn', 'book', 'globe', 'scroll', 'lamp', 'diamond'];
      let h = 0; for (const ch of eid) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      return map[h % map.length];
    }
  }

  // ============================================================
  async function init() {
    await loadTextures(ctx.quality);
    buildMaterials();
    // glow sprite texture
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.35)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
    ctx.glowTex = new THREE.CanvasTexture(c);
  }

  async function enter(zoneId) {
    clear();
    currentZone = zoneId;
    current = zoneId === 'hub' ? buildHub() : buildZone(zoneId);
    scene.add(current.group);
    dust = makeDust(zoneId === 'hub' ? { x: 15, y: 8, z: 15 } : { x: 13, y: 6.5, z: 8.5 });
    // apply lock states
    if (zoneId === 'hub') {
      for (const zid of doorOrder) {
        const locked = !ctx.isZoneUnlocked(zid);
        current.setDoor(zid, { open: false, locked });
      }
    }
    return current;
  }

  function update(dt, t) {
    if (current) current.update(dt, t);
    if (dust) dust.update(t);
  }

  function refreshLocks() {
    if (currentZone === 'hub' && current) {
      for (const zid of doorOrder) current.setDoor(zid, { open: false, locked: !ctx.isZoneUnlocked(zid) });
    }
  }

  return {
    init, enter, update, refreshLocks,
    get current() { return current; },
    get zone() { return currentZone; },
    doorOrder,
  };
}
