import * as THREE from 'three';
import { clamp, damp, isTouch, $ } from '../core.js';
import { footstep } from '../audio.js';

// ------------------------------------------------------------------
// Third-person player: WASD + pointer-lock mouse (desktop) or
// virtual stick + drag camera (touch). Circle-vs-AABB collision.
// ------------------------------------------------------------------
export function createPlayer(world, camera, character, ctx) {
  const state = {
    pos: new THREE.Vector3(0, 0, 13),
    yaw: Math.PI,             // facing direction (movement space)
    camYaw: Math.PI,          // camera orbit
    camPitch: 0.28,
    camDist: 5.6,
    vel: new THREE.Vector3(),
    speed: 0,
    turnRate: 0,
    enabled: false,
    moveVec: new THREE.Vector2(0, 0),
  };

  const keys = new Map();
  let mouseDown = false, locked = false;
  let lastMouse = { x: 0, y: 0 };
  let touchMove = { x: 0, y: 0 };      // stick [-1..1]
  let touchCamId = null, touchCamLast = { x: 0, y: 0 };

  // ---------------- desktop input ----------------
  const canvas = ctx.canvas;
  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    keys.set(e.code, true);
    if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'ArrowLeft' || e.code === 'ArrowRight') e.preventDefault();
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
  window.addEventListener('blur', () => keys.clear());

  canvas.addEventListener('click', () => {
    if (state.enabled && !isTouch() && !locked && !ctx.uiBlocking()) {
      canvas.requestPointerLock && canvas.requestPointerLock();
    }
  });
  document.addEventListener('pointerlockchange', () => {
    locked = document.pointerLockElement === canvas;
    const note = $('lockNote');
    if (note) note.classList.toggle('hidden', locked || isTouch() || !state.enabled);
  });
  canvas.addEventListener('mousedown', (e) => { mouseDown = true; lastMouse = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', () => { mouseDown = false; });
  window.addEventListener('mousemove', (e) => {
    if (!state.enabled) return;
    if (locked) {
      state.camYaw -= e.movementX * 0.0026;
      state.camPitch = clamp(state.camPitch + e.movementY * 0.0022, -0.42, 1.1);
    } else if (mouseDown && !ctx.uiBlocking()) {
      state.camYaw -= (e.clientX - lastMouse.x) * 0.005;
      state.camPitch = clamp(state.camPitch + (e.clientY - lastMouse.y) * 0.004, -0.42, 1.1);
      lastMouse = { x: e.clientX, y: e.clientY };
    }
  });
  window.addEventListener('wheel', (e) => {
    if (!state.enabled || ctx.uiBlocking()) return;
    state.camDist = clamp(state.camDist + Math.sign(e.deltaY) * 0.5, 3.2, 8.5);
  }, { passive: true });

  // ---------------- touch input ----------------
  const stickBase = $('stickBase'), knob = $('stickKnob'), camZone = $('camZone');
  let stickId = null, stickCenter = { x: 0, y: 0 };
  if (stickBase) {
    const rectCenter = () => {
      const r = stickBase.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    stickBase.addEventListener('pointerdown', (e) => {
      stickId = e.pointerId; stickCenter = rectCenter();
      stickBase.setPointerCapture(e.pointerId);
      e.preventDefault(); e.stopPropagation();
    });
    stickBase.addEventListener('pointermove', (e) => {
      if (e.pointerId !== stickId) return;
      const dx = (e.clientX - stickCenter.x) / 44, dy = (e.clientY - stickCenter.y) / 44;
      const len = Math.hypot(dx, dy) || 1;
      const cl = len > 1 ? 1 / len : 1;
      touchMove = { x: dx * cl, y: dy * cl };
      knob.style.transform = `translate(${touchMove.x * 34}px, ${touchMove.y * 34}px)`;
    });
    const endStick = (e) => {
      if (e.pointerId !== stickId) return;
      stickId = null; touchMove = { x: 0, y: 0 };
      knob.style.transform = 'translate(0,0)';
    };
    stickBase.addEventListener('pointerup', endStick);
    stickBase.addEventListener('pointercancel', endStick);
  }
  if (camZone) {
    camZone.addEventListener('pointerdown', (e) => {
      touchCamId = e.pointerId; touchCamLast = { x: e.clientX, y: e.clientY };
      camZone.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    camZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== touchCamId || !state.enabled) return;
      state.camYaw -= (e.clientX - touchCamLast.x) * 0.007;
      state.camPitch = clamp(state.camPitch + (e.clientY - touchCamLast.y) * 0.0055, -0.42, 1.1);
      touchCamLast = { x: e.clientX, y: e.clientY };
    });
    const endCam = (e) => { if (e.pointerId === touchCamId) touchCamId = null; };
    camZone.addEventListener('pointerup', endCam);
    camZone.addEventListener('pointercancel', endCam);
  }

  // ---------------- collision ----------------
  function resolveCollisions(p, radius = 0.42) {
    const cur = world.current;
    if (!cur) return;
    // bounds
    const b = cur.bounds;
    p.x = clamp(p.x, b.x0 + radius, b.x1 - radius);
    p.z = clamp(p.z, b.z0 + radius, b.z1 - radius);
    // hub circle
    if (world.zone === 'hub') {
      const r = Math.hypot(p.x, p.z);
      const maxR = 16.9 - radius;
      if (r > maxR) { p.x = (p.x / r) * maxR; p.z = (p.z / r) * maxR; }
    }
    // AABB push-out
    for (const c of cur.colliders) {
      const dx = p.x - c.x, dz = p.z - c.z;
      const px = c.hw + radius - Math.abs(dx);
      const pz = c.hd + radius - Math.abs(dz);
      if (px > 0 && pz > 0) {
        if (px < pz) p.x += Math.sign(dx || 1) * px;
        else p.z += Math.sign(dz || 1) * pz;
      }
    }
  }

  // ---------------- update ----------------
  const tmpF = new THREE.Vector3(), tmpR = new THREE.Vector3();
  let strideT = 0;

  function update(dt, t) {
    const enabled = state.enabled;
    // gather input
    let ix = 0, iz = 0;
    if (enabled) {
      if (keys.has('KeyW') || keys.has('ArrowUp')) iz -= 1;
      if (keys.has('KeyS') || keys.has('ArrowDown')) iz += 1;
      if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
      if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
      ix += touchMove.x; iz += touchMove.y;
    }
    const len = Math.hypot(ix, iz);
    if (len > 1) { ix /= len; iz /= len; }
    const mag = Math.min(len, 1);

    // camera-relative direction
    tmpF.set(Math.sin(state.camYaw), 0, Math.cos(state.camYaw));   // forward (away from camera)
    tmpR.set(tmpF.z, 0, -tmpF.x);                                  // right
    const target = state.vel;
    target.x = 0; target.z = 0;

    if (mag > 0.05) {
      const mx = (tmpF.x * -iz + tmpR.x * ix) * 3.7 * mag;
      const mz = (tmpF.z * -iz + tmpR.z * ix) * 3.7 * mag;
      state.pos.x += mx * dt;
      state.pos.z += mz * dt;
      state.speed = Math.hypot(mx, mz);
      // face movement direction smoothly
      const wantYaw = Math.atan2(mx, mz);
      let dy = wantYaw - state.yaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      state.yaw += dy * Math.min(1, dt * 10);
      state.turnRate = clamp(dy / Math.max(dt, 0.001) * 0.08, -1, 1);
      strideT += dt * (state.speed / 3.7);
      footstep(strideT);
    } else {
      state.speed = damp(state.speed, 0, 12, dt);
      state.turnRate = damp(state.turnRate, 0, 8, dt);
    }

    resolveCollisions(state.pos);

    // character transform
    character.root.position.copy(state.pos);
    character.root.rotation.y = state.yaw;
    character.update(dt, t, state.speed, state.turnRate);

    // camera follow: orbit around character head
    const headY = 1.45;
    const cx = state.pos.x + Math.sin(state.camYaw) * Math.cos(state.camPitch) * state.camDist;
    const cz = state.pos.z + Math.cos(state.camYaw) * Math.cos(state.camPitch) * state.camDist;
    const cy = headY + Math.sin(state.camPitch) * state.camDist + 0.55;
    camera.position.x = damp(camera.position.x, cx, 14, dt);
    camera.position.y = damp(camera.position.y, Math.max(cy, 0.75), 14, dt);
    camera.position.z = damp(camera.position.z, cz, 14, dt);
    // keep camera inside hub circle
    if (world.zone === 'hub') {
      const r = Math.hypot(camera.position.x, camera.position.z);
      if (r > 16.6) { camera.position.x *= 16.6 / r; camera.position.z *= 16.6 / r; }
    }
    camera.lookAt(state.pos.x, headY, state.pos.z);
  }

  function spawnAt(s) {
    state.pos.set(s.x, 0, s.z);
    state.yaw = s.yaw ?? Math.PI;
    state.camYaw = s.yaw ?? Math.PI;
    state.camPitch = 0.26;
    state.speed = 0;
    state.vel.set(0, 0, 0);
    character.root.position.copy(state.pos);
    character.root.rotation.y = state.yaw;
    camera.position.set(s.x + Math.sin(state.camYaw) * 5.6, 2.4, s.z + Math.cos(state.camYaw) * 5.6);
    camera.lookAt(s.x, 1.4, s.z);
  }

  return { state, update, spawnAt, get speed() { return state.speed; } };
}
