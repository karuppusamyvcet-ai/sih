import * as THREE from 'three';
import { M } from './materials.js';
import { damp, clamp } from '../core.js';

// ------------------------------------------------------------------
// Fully procedural, rigged Dr. B. R. Ambedkar character:
// navy suit + red tie + round glasses, walk/idle/talk animation cycles.
// ------------------------------------------------------------------
export function createCharacter({ reducedFx = false } = {}) {
  const root = new THREE.Group();          // world placement
  const body = new THREE.Group();          // bob / lean
  root.add(body);

  const skin = M.skin, suit = M.suit, shirt = M.shirt, tie = M.tie, hair = M.hair;

  // ---- hips ----
  const hips = new THREE.Group();
  hips.position.y = 0.98;
  body.add(hips);

  const pelvis = mesh(new THREE.BoxGeometry(0.34, 0.2, 0.2), suit, 0, 0, 0);
  hips.add(pelvis);

  // ---- legs (pivot at hip) ----
  const mkLeg = (side) => {
    const hip = new THREE.Group();
    hip.position.set(side * 0.1, -0.05, 0);
    const thigh = mesh(new THREE.CapsuleGeometry(0.075, 0.3, 6, 12), suit, 0, -0.21, 0);
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.42;
    hip.add(knee);
    const shin = mesh(new THREE.CapsuleGeometry(0.062, 0.3, 6, 12), suit, 0, -0.19, 0);
    knee.add(shin);
    const foot = mesh(new THREE.BoxGeometry(0.11, 0.07, 0.24), M.shoe, 0, -0.39, 0.05);
    knee.add(foot);
    hips.add(hip);
    return { hip, knee };
  };
  const legL = mkLeg(-1), legR = mkLeg(1);

  // ---- spine / chest ----
  const spine = new THREE.Group();
  spine.position.y = 0.1;
  hips.add(spine);
  const torso = mesh(new THREE.BoxGeometry(0.4, 0.46, 0.23), suit, 0, 0.23, 0);
  spine.add(torso);
  // jacket lapels
  const lapelGeo = new THREE.BoxGeometry(0.1, 0.3, 0.02);
  const lapelL = mesh(lapelGeo, suit, -0.07, 0.26, 0.12); lapelL.rotation.z = 0.28; lapelL.rotation.x = -0.1;
  const lapelR = mesh(lapelGeo, suit, 0.07, 0.26, 0.12); lapelR.rotation.z = -0.28; lapelR.rotation.x = -0.1;
  spine.add(lapelL, lapelR);
  // shirt V + tie
  const shirtV = mesh(new THREE.BoxGeometry(0.13, 0.3, 0.03), shirt, 0, 0.3, 0.118);
  spine.add(shirtV);
  const tieM = mesh(new THREE.BoxGeometry(0.05, 0.26, 0.02), tie, 0, 0.28, 0.14);
  spine.add(tieM);
  const knot = mesh(new THREE.BoxGeometry(0.05, 0.05, 0.03), tie, 0, 0.42, 0.135);
  spine.add(knot);
  // pocket square + badge (matches portrait)
  const pocket = mesh(new THREE.BoxGeometry(0.07, 0.03, 0.02), shirt, 0.12, 0.3, 0.12);
  spine.add(pocket);
  const badge = mesh(new THREE.BoxGeometry(0.05, 0.06, 0.01), M.plaqueGold, -0.13, 0.24, 0.122);
  spine.add(badge);

  // ---- arms (pivot at shoulder) ----
  const mkArm = (side) => {
    const sh = new THREE.Group();
    sh.position.set(side * 0.25, 0.42, 0);
    const upper = mesh(new THREE.CapsuleGeometry(0.062, 0.22, 6, 12), suit, 0, -0.15, 0);
    sh.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -0.3;
    sh.add(elbow);
    const fore = mesh(new THREE.CapsuleGeometry(0.052, 0.2, 6, 12), suit, 0, -0.13, 0);
    elbow.add(fore);
    const hand = mesh(new THREE.SphereGeometry(0.055, 12, 10), skin, 0, -0.27, 0);
    hand.scale.y = 1.25;
    elbow.add(hand);
    spine.add(sh);
    return { sh, elbow };
  };
  const armL = mkArm(-1), armR = mkArm(1);

  // ---- book in left hand (scholar) ----
  const book = mesh(new THREE.BoxGeometry(0.16, 0.05, 0.22), new THREE.MeshStandardMaterial({ color: 0x6e2f2f, roughness: 0.7 }), 0, -0.3, 0.04);
  armL.elbow.add(book);

  // ---- neck + head ----
  const neck = mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.09, 12), skin, 0, 0.47, 0);
  spine.add(neck);
  const headG = new THREE.Group();
  headG.position.y = 0.53;
  spine.add(headG);
  const head = mesh(new THREE.SphereGeometry(0.13, 24, 20), skin, 0, 0.1, 0);
  head.scale.set(0.94, 1.08, 0.96);
  headG.add(head);
  // ears
  headG.add(mesh(new THREE.SphereGeometry(0.032, 10, 8), skin, -0.122, 0.1, 0));
  headG.add(mesh(new THREE.SphereGeometry(0.032, 10, 8), skin, 0.122, 0.1, 0));
  // hair cap
  const hairM = new THREE.Mesh(new THREE.SphereGeometry(0.135, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
  hairM.position.set(0, 0.13, -0.012);
  hairM.scale.set(0.98, 1.05, 1.0);
  headG.add(hairM);
  // side hair
  const sideGeo = new THREE.BoxGeometry(0.02, 0.09, 0.14);
  headG.add(mesh(sideGeo, hair, -0.118, 0.09, -0.01));
  headG.add(mesh(sideGeo, hair, 0.118, 0.09, -0.01));
  // eyebrows
  const browGeo = new THREE.BoxGeometry(0.05, 0.012, 0.015);
  headG.add(mesh(browGeo, hair, -0.048, 0.145, 0.118));
  headG.add(mesh(browGeo, hair, 0.048, 0.145, 0.118));
  // eyes
  const eyeGeo = new THREE.SphereGeometry(0.02, 10, 8);
  const eyeW = new THREE.MeshStandardMaterial({ color: 0xf5f1e6, roughness: 0.3 });
  const eyeB = new THREE.MeshStandardMaterial({ color: 0x241a12, roughness: 0.35 });
  for (const s of [-1, 1]) {
    const e = mesh(eyeGeo, eyeW, s * 0.05, 0.118, 0.115);
    headG.add(e);
    const p = mesh(new THREE.SphereGeometry(0.01, 8, 6), eyeB, s * 0.05, 0.118, 0.132);
    headG.add(p);
  }
  // nose
  const nose = mesh(new THREE.ConeGeometry(0.022, 0.05, 10), skin, 0, 0.09, 0.135);
  nose.rotation.x = Math.PI / 2.1;
  headG.add(nose);
  // moustache (portrait signature)
  const must = mesh(new THREE.BoxGeometry(0.07, 0.016, 0.02), hair, 0, 0.052, 0.128);
  headG.add(must);
  // mouth
  const mouth = mesh(new THREE.BoxGeometry(0.045, 0.008, 0.012), new THREE.MeshStandardMaterial({ color: 0x6e4234, roughness: 0.6 }), 0, 0.03, 0.126);
  headG.add(mouth);

  // ---- round glasses ----
  const glasses = new THREE.Group();
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x8a7a4a, roughness: 0.3, metalness: 0.85 });
  for (const s of [-1, 1]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.042, 0.005, 8, 24), rimMat);
    rim.position.set(s * 0.052, 0.118, 0.132);
    glasses.add(rim);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.04, 20), M.lens);
    lens.position.set(s * 0.052, 0.118, 0.133);
    glasses.add(lens);
  }
  const bridge = mesh(new THREE.BoxGeometry(0.025, 0.006, 0.006), rimMat, 0, 0.122, 0.134);
  glasses.add(bridge);
  for (const s of [-1, 1]) {
    const arm = mesh(new THREE.BoxGeometry(0.006, 0.006, 0.15), rimMat, s * 0.093, 0.122, 0.06);
    glasses.add(arm);
  }
  headG.add(glasses);

  // cast shadows
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });

  // soft contact shadow (blob) — keeps the character grounded even where the
  // real shadow map is disabled on low-end devices
  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 1.15),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.015;
  blob.renderOrder = -1;
  root.add(blob);

  // ---------------- animation state ----------------
  const st = { speed: 0, turn: 0, phase: Math.random() * 6, talk: 0, waveT: 0, lookYaw: 0, lookPitch: 0 };

  function mesh(geo, mat, x = 0, y = 0, z = 0) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    return m;
  }

  function update(dt, t, vel = 0, turnRate = 0) {
    st.speed = damp(st.speed, vel, 10, dt);
    const s = st.speed;
    st.phase += dt * (1.7 + s * 1.35) * (s > 0.05 ? 1.0 : 0.6);
    const ph = st.phase;
    const stride = clamp(s / 3.6, 0, 1);          // 0..1 stride amount

    if (stride > 0.02) {
      // walk cycle
      const sw = Math.sin(ph * Math.PI);
      legL.hip.rotation.x = sw * 0.72 * stride;
      legR.hip.rotation.x = -sw * 0.72 * stride;
      legL.knee.rotation.x = Math.max(0, -Math.sin(ph * Math.PI - 0.9)) * 0.95 * stride;
      legR.knee.rotation.x = Math.max(0, Math.sin(ph * Math.PI - 0.9)) * 0.95 * stride;
      armL.sh.rotation.x = -sw * 0.55 * stride;
      armR.sh.rotation.x = sw * 0.55 * stride;
      armL.elbow.rotation.x = -0.25 - Math.max(0, sw) * 0.35 * stride;
      armR.elbow.rotation.x = -0.25 - Math.max(0, -sw) * 0.35 * stride;
      // slight torso sway & lean
      hips.rotation.y = Math.sin(ph * Math.PI * 2) * 0.06 * stride;
      spine.rotation.x = 0.05 * stride;
      spine.rotation.z = Math.sin(ph * Math.PI) * 0.035 * stride;
      body.position.y = Math.abs(Math.sin(ph * Math.PI)) * 0.045 * stride;
      body.rotation.z = Math.sin(ph * Math.PI) * 0.02 * stride;
      headG.rotation.x = -0.04 * stride;
      // book arm keeps holding the book steady
      book.visible = true;
    } else {
      // idle: breathing + micro sway
      const br = Math.sin(t * 1.6);
      legL.hip.rotation.x = damp(legL.hip.rotation.x, 0, 8, dt);
      legR.hip.rotation.x = damp(legR.hip.rotation.x, 0, 8, dt);
      legL.knee.rotation.x = damp(legL.knee.rotation.x, 0, 8, dt);
      legR.knee.rotation.x = damp(legR.knee.rotation.x, 0, 8, dt);
      armL.sh.rotation.x = damp(armL.sh.rotation.x, 0.06 + br * 0.02, 6, dt);
      armR.sh.rotation.x = damp(armR.sh.rotation.x, 0.06 - br * 0.02, 6, dt);
      armL.elbow.rotation.x = damp(armL.elbow.rotation.x, -0.22, 6, dt);
      armR.elbow.rotation.x = damp(armR.elbow.rotation.x, -0.22, 6, dt);
      hips.rotation.y = damp(hips.rotation.y, 0, 6, dt);
      spine.rotation.x = damp(spine.rotation.x, 0.015 + br * 0.012, 6, dt);
      spine.rotation.z = damp(spine.rotation.z, Math.sin(t * 0.8) * 0.015, 4, dt);
      body.position.y = damp(body.position.y, br * 0.006, 6, dt);
      headG.rotation.x = damp(headG.rotation.x, 0, 5, dt);
      // occasional blink is faked by eye scale — skip for perf, eyes are small
    }

    // talking gesture (used when reading a plaque / dialogue captions)
    if (st.talk > 0) {
      st.talk -= dt;
      const g = Math.sin(t * 9) * 0.5 + 0.5;
      armR.sh.rotation.x = -0.5 * g * 0.7;
      armR.elbow.rotation.x = -0.6 - g * 0.4;
      armR.sh.rotation.z = -0.2 * g;
    } else {
      armR.sh.rotation.z = damp(armR.sh.rotation.z, 0, 6, dt);
    }

    // turning lean
    st.turn = damp(st.turn, turnRate, 6, dt);
    body.rotation.z += clamp(st.turn * 0.06, -0.09, 0.09) * stride;
    root.rotation.z = 0;
  }

  function playTalk(sec = 2) { st.talk = sec; }
  function setStrideSoundPhase() { return st.phase % 1; }

  return { root, body, headG, update, playTalk, st, hips, spine, armR, armL, legL, legR, blob };
}
