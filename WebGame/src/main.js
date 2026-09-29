import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { $, show, hide, fade, isTouch, Bus, clamp } from './core.js';
import { settings, saveSettings, applySettings, loadLocalization, newGameState, setState, getState, loadGame, hasSave, saveGame, wipeSave, applySettingsToForm } from './state.js';
import * as audio from './audio.js';
import { loadContent, zoneMeta, doorOrder } from './content.js';
import { createGuide } from './ai.js';
import { createWorld } from './world/world.js';
import { createPostFX } from './world/postfx.js';
import { createCharacter } from './world/character.js';
import { createPlayer } from './play/player.js';
import { createMissions } from './play/missions.js';
import { createHud } from './ui/hud.js';
import { createMenu, createIntro, createPause, createSettingsManager, createCertificate, bindOverlayClosers, openOverlay, closeOverlay } from './ui/screens.js';
import { createExhibitUI } from './ui/exhibit.js';
import { createQuiz } from './ui/quiz.js';
import { createLibrary } from './ui/library.js';
import { createMap } from './ui/map.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// app-level mutable state (declared early so closures can reference it safely)
let state = 'boot';            // boot | menu | intro | play | paused | cert
let currentZone = 'hub';

// ---------------- quality tier ----------------
function detectQuality() {
  const coarse = isTouch();
  const dpr = window.devicePixelRatio || 1;
  const reduced = settings.reducedFx;
  const small = Math.min(screen.width, screen.height) < 480;
  if (coarse || small) {
    return {
      desktop: false,
      pixelRatio: Math.min(dpr, 1.3),
      shadows: !reduced,
      dust: reduced ? 40 : 110,
      aniso: 4,
      aa: false,
      env: true,
    };
  }
  return {
    desktop: true,
    pixelRatio: Math.min(dpr, 1.75),
    shadows: !reduced,
    dust: reduced ? 60 : 240,
    aniso: 8,
    aa: !reduced,
    env: true,
  };
}

// ---------------- app ----------------
async function boot() {
  const fill = $('bootFill'), msg = $('bootMsg');
  const step = (p, t) => { fill.style.width = p + '%'; msg.textContent = t; };

  applySettings();
  applySettingsToForm();
  step(6, 'Loading localization…');
  await loadLocalization(settings.lang);
  audio.initAudio();
  window.__dhjAudio = audio;

  step(14, 'Loading the 35-record archive…');
  const content = await loadContent();
  window.__dhjContent = content;
  const guide = createGuide(content.items);

  step(26, 'Warming up the renderer…');
  const canvas = $('gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  const quality = detectQuality();
  renderer.setPixelRatio(quality.pixelRatio);
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.shadowMap.enabled = quality.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 160);
  camera.position.set(0, 4, 16);

  step(38, 'Generating textures and materials…');
  const ctx = {
    canvas, scene, camera, renderer, content, guide, quality,
    events: new Bus(),
    audio,
    hud: null, missions: null, world: null, character: null, player: null,
    exhibits: null,
    uiBlocking: () => state !== 'play' || anyOverlayOpen(),
    isZoneUnlocked: () => true,   // replaced below
  };
  function anyOverlayOpen() {
    return document.querySelectorAll('.overlay:not(.hidden)').length > 0;
  }

  // environment reflections (PBR ambient) + cinematic grade
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
  scene.environmentIntensity = 0.55;

  // world + character
  const world = createWorld(scene, ctx);
  ctx.world = world;
  await world.init();

  const post = createPostFX(renderer, scene, camera, quality);
  ctx.post = post;

  step(60, 'Building the rotunda…');
  await world.enter('hub');

  step(72, 'Tailoring the character…');
  const character = createCharacter({ reducedFx: settings.reducedFx });
  scene.add(character.root);
  ctx.character = character;

  // UI factories
  ctx.hud = createHud();
  ctx.exhibits = createExhibitUI(ctx);
  const quiz = createQuiz(ctx);
  const library = createLibrary(ctx);
  const mapUI = createMap(ctx);
  const missions = createMissions(ctx);
  ctx.missions = missions;
  ctx.isZoneUnlocked = (z) => missions.isZoneUnlocked(z);

  const player = createPlayer(world, camera, character, ctx);
  ctx.player = player;
  player.spawnAt({ x: 0, z: 13.6, yaw: Math.PI });

  step(86, 'Curating missions…');
  bindOverlayClosers();
  createSettingsManager(audio);

  const menu = createMenu({
    onNew: () => startNewGame(),
    onContinue: () => continueGame(),
    onSettings: () => openOverlay('settingsScreen'),
    onCredits: () => openOverlay('creditsScreen'),
  });
  const intro = createIntro((skipped) => enterPlay());
  const pause = createPause({
    onResume: () => closePause(),
    onQuit: () => quitToMenu(),
    onSave: () => { saveGame(); ctx.hud.achieToast('Progress saved', '💾'); },
    missions,
  });
  const cert = createCertificate({
    onContinue: () => { hide($('certScreen')); resumePlay(); },
    onMenu: () => { hide($('certScreen')); quitToMenu(); },
  });
  ctx.cert = cert;

  // ---------------- state machine helpers ----------------
  function topOverlay() {
    const els = [...document.querySelectorAll('.overlay:not(.hidden)')];
    return els[els.length - 1];
  }

  function exitPointerLock() {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  function uiChanged() {
    const blocked = state !== 'play' || anyOverlayOpen();
    player.state.enabled = state === 'play' && !anyOverlayOpen();
    if (blocked) exitPointerLock();
    const note = $('lockNote');
    if (note) note.classList.toggle('hidden', !(state === 'play' && !anyOverlayOpen() && !isTouch() && !document.pointerLockElement));
  }

  // ---------------- zone travel ----------------
  async function travelTo(zone, spawnName = 'default') {
    if (state !== 'play') return;
    player.state.enabled = false;
    fade(true);
    await sleep(480);
    const built = await world.enter(zone);
    currentZone = zone;
    const spawn = built.spawns[spawnName] || built.spawns.default;
    player.spawnAt(spawn);
    getState().zone = zone;
    getState().pos = { x: spawn.x, z: spawn.z };
    getState().yaw = spawn.yaw;
    saveGame();
    ctx.hud.zoneLabel(zone === 'hub' ? 'HUB · ROTUNDA' : zoneMeta[zone].title);
    missions.refresh();
    fade(false);
    await sleep(120);
    player.state.enabled = true;
    if (zone !== 'hub') {
      const m = missions.current();
      ctx.hud.captions(zoneMeta[zone].desc, 5200);
      audio.play('door');
    }
  }

  // ---------------- interaction ----------------
  let nearest = null;
  function scanInteractables() {
    if (state !== 'play' || anyOverlayOpen()) { nearest = null; ctx.hud.prompt(null); return; }
    const list = world.current ? world.current.interactables : [];
    let best = null, bestD = Infinity;
    const p = player.state.pos;
    for (const it of list) {
      const dx = it.pos.x - p.x, dz = it.pos.z - p.z;
      const d = Math.hypot(dx, dz);
      if (d < it.range && d < bestD) { best = it; bestD = d; }
    }
    nearest = best;
    if (!best) { ctx.hud.prompt(null); return; }
    const label = promptLabel(best);
    ctx.hud.prompt(label.text, 'E');
  }

  function promptLabel(it) {
    switch (it.type) {
      case 'door': {
        const unlocked = missions.isZoneUnlocked(it.zone);
        return { text: unlocked ? `Enter — ${it.title}` : `🔒 ${it.title} — sealed` };
      }
      case 'backdoor': return { text: 'Return to the Rotunda' };
      case 'kiosk': return { text: 'Speak with the Archive Guide terminal' };
      case 'quiz': return { text: 'Begin Knowledge Checkpoint' };
      case 'archive': return { text: 'Search the Manuscript Archive' };
      case 'ai': return { text: 'Consult the AI Archive Guide' };
      case 'diorama': return { text: 'Study the reconstruction — ' + it.title };
      case 'constitution': return { text: 'Read the Constitution Table' };
      case 'desk': return { text: 'Browse the Reading Desk' };
      case 'timeline': return { text: 'Read the Timeline' };
      case 'portrait': return { text: 'Admire the Portrait' };
      case 'quote': return { text: 'Read the Hologram Quote' };
      default: return { text: 'Examine — ' + it.title };
    }
  }

  async function activate() {
    if (!nearest || state !== 'play' || anyOverlayOpen()) return;
    const it = nearest;
    audio.play('click');
    switch (it.type) {
      case 'door': {
        if (!missions.isZoneUnlocked(it.zone)) {
          ctx.hud.locked(`Finish your current missions to open this gallery — see the objective banner.`);
          audio.play('wrong', { volume: 0.5 });
          return;
        }
        // animate door open then travel
        const d = world.current.doors && world.current.doors[it.zone];
        if (d) d.open = true;
        audio.play('door');
        ctx.hud.captions('Entering ' + zoneMeta[it.zone].title + '…', 2600);
        await sleep(650);
        await travelTo(it.zone, 'fromHub');
        break;
      }
      case 'backdoor': {
        audio.play('door');
        await travelTo('hub', 'default');
        break;
      }
      case 'kiosk': {
        const archiveRec = content.byId.get('bio_birth_1891');
        ctx.exhibits.openExhibit({ id: it.id, title: 'Archive Guide — Welcome', archiveId: 'bio_birth_1891', kind: 'Terminal' }, 'hub');
        missions.onEvent('interact', { id: it.id });
        ctx.hud.captions('“Welcome to the Digital Ambedkar Heritage Museum. Six galleries await — begin with Early Life.”', 6500);
        character.playTalk(3);
        break;
      }
      case 'exhibit': {
        ctx.exhibits.openExhibit(it.exhibit, world.zone);
        missions.onEvent('exhibit', { id: it.exhibit.id, zone: world.zone });
        break;
      }
      case 'quiz': {
        const qid = it.exhibit && it.exhibit.quizId;
        if (!qid) { ctx.hud.locked('No checkpoint is configured for this kiosk.'); return; }
        quiz.start(qid, () => { uiChanged(); missions.refresh(); });
        uiChanged();
        break;
      }
      case 'archive': {
        library.openArchive();
        uiChanged();
        break;
      }
      case 'ai': {
        library.openAI();
        uiChanged();
        break;
      }
      case 'diorama': {
        ctx.exhibits.openExhibit(it.exhibit, world.zone);
        missions.onEvent('memorial', { id: it.exhibit.id });
        ctx.hud.captions('Artistic visualization — digital reconstruction.', 4200);
        break;
      }
      case 'constitution': {
        const rec = content.items.find((i) => /preamble/i.test(i.title + ' ' + (i.keywords || []).join(' ')))
          || content.items.find((i) => i.category === 'Constitution')
          || content.items.find((i) => /constitution/i.test(i.title));
        ctx.exhibits.openExhibit({ id: it.id, title: 'The Constitution Table', archiveId: rec ? rec.id : '', kind: 'Document' }, world.zone);
        missions.onEvent('exhibit', { id: it.id, zone: world.zone });
        break;
      }
      case 'desk': {
        const rec = content.items.find((i) => /book|writing|rupee|annihilation/i.test(i.title)) || content.items[0];
        ctx.exhibits.openExhibit({ id: it.id, title: 'Reading Desk — Manuscripts', archiveId: rec.id, kind: 'BookDesk' }, world.zone);
        missions.onEvent('exhibit', { id: it.id, zone: world.zone });
        break;
      }
      case 'timeline': {
        const zoneData = world.zone === 'hub' ? null : content.zoneById.get(world.zone);
        const entries = zoneData && zoneData.timeline ? zoneData.timeline : [
          { year: '1891', text: 'Born at Mhow, 14 April' },
          { year: '1912', text: 'B.A., Elphinstone College' },
          { year: '1916', text: 'LSE & Gray’s Inn, London' },
          { year: '1924', text: 'Bahishkrit Hitakarini Sabha' },
          { year: '1927', text: 'Mahad Satyagraha' },
          { year: '1932', text: 'Poona Pact' },
          { year: '1947', text: 'India’s first Law Minister' },
          { year: '1950', text: 'Architect of the Constitution' },
          { year: '1956', text: 'Diksha at Deekshabhoomi' },
        ];
        ctx.exhibits.openExhibit({
          id: it.id, title: it.title, kind: 'Timeline',
          text: entries.map((e) => `<p><b style="color:#f4d98c">${e.year}</b> — ${e.text}</p>`).join(''),
        }, world.zone);
        break;
      }
      case 'portrait': {
        ctx.exhibits.openExhibit({ id: 'portrait', title: 'Dr. B. R. Ambedkar (1891–1956)', archiveId: 'bio_birth_1891', kind: 'Portrait' }, 'hub');
        break;
      }
      case 'quote': {
        ctx.hud.captions('“Cultivation of mind should be the ultimate aim of human existence.” — Dr. B. R. Ambedkar', 6000);
        character.playTalk(3);
        audio.play('page');
        break;
      }
    }
    uiChanged();
  }

  // ---------------- flow ----------------
  function startNewGame() {
    audio.play('click');
    wipeSave();
    setState(newGameState(settings.presentation));
    const st = getState();
    st.introSeen = true;
    saveGame();
    menu.hideMenu();
    state = 'intro';
    audio.playMusic();
    intro.play();
  }

  function continueGame() {
    audio.play('click');
    const s = loadGame();
    if (!s) return;
    setState(s);
    settings.presentation = !!s.presentation;
    saveSettings();
    menu.hideMenu();
    // skip intro on continue
    enterPlay(true);
  }

  async function enterPlay(skipIntro = false) {
    state = 'play';
    fade(false);
    hide($('intro'));
    ctx.hud.showHud();
    audio.playAmbience();
    audio.playMusic();

    const st = getState();
    currentZone = st.zone || 'hub';
    await world.enter(currentZone);
    // lock states are refreshed inside world.enter via ctx.isZoneUnlocked
    const spawn = st.pos && currentZone === st.zone
      ? { x: st.pos.x, z: st.pos.z, yaw: st.yaw ?? Math.PI }
      : (world.current.spawns.default);
    // ensure inside bounds
    player.spawnAt(spawn);
    ctx.hud.zoneLabel(currentZone === 'hub' ? 'HUB · ROTUNDA' : zoneMeta[currentZone].title);
    missions.initUI();
    world.refreshLocks();
    uiChanged();
    if (!st.introSeen) { ctx.hud.captions('Walk with W A S D · look with the mouse · interact with E', 6500); }
    ctx.hud.captions(currentZone === 'hub'
      ? 'You arrive at the Digital Ambedkar Heritage Museum. The Archive Guide terminal awaits at reception.'
      : zoneMeta[currentZone].desc, 5600);
  }

  function closePause() {
    pause.hidePause();
    state = 'play';
    audio.play('click');
    uiChanged();
  }

  function openPause() {
    if (state !== 'play' || anyOverlayOpen()) return;
    state = 'paused';
    pause.showPause();
    exitPointerLock();
    audio.play('click');
  }

  function quitToMenu() {
    saveGame();
    pause.hidePause();
    ctx.exhibits.closeAll();
    hide($('mapScreen'));
    ctx.hud.hideHud();
    state = 'menu';
    menu.refreshContinue(hasSave());
    menu.showMenu();
    player.state.enabled = false;
    // return camera to hub orbit
    world.enter('hub').then(() => {
      player.spawnAt({ x: 0, z: 13.6, yaw: Math.PI });
    });
    audio.stopAmbience();
    audio.play('click');
    uiChanged();
  }

  function resumePlay() {
    state = 'play';
    uiChanged();
  }

  // ---------------- HUD / buttons ----------------
  $('btnMap').addEventListener('click', () => { if (state === 'play' && !anyOverlayOpen()) { mapUI.open(); uiChanged(); } });
  $('btnPause').addEventListener('click', () => openPause());
  $('btnTouchAct') && $('btnTouchAct').addEventListener('click', (e) => { e.preventDefault(); activate(); });

  // ---------------- keyboard ----------------
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyE' || e.code === 'Space') {
      if (state === 'play' && !anyOverlayOpen()) { activate(); e.preventDefault(); }
    } else if (e.code === 'KeyM') {
      if (state === 'play') { mapUI.toggle(); uiChanged(); }
    } else if (e.code === 'Escape') {
      if (state === 'cert') return;
      // close order: quiz → overlays → map → pause
      if (quiz.isOpen()) { quiz.requestClose(); uiChanged(); return; }
      const top = topOverlay();
      if (top) {
        if (top.id === 'pauseScreen') { closePause(); return; }
        hide(top); audio.play('click');
        if (!anyOverlayOpen() && state === 'play') missions.refresh();
        uiChanged();
        return;
      }
      if (state === 'play') openPause();
      else if (state === 'paused') closePause();
    }
  });

  // close buttons inside overlays also refresh missions
  document.querySelectorAll('.ov-close, [data-close]').forEach((b) => {
    b.addEventListener('click', () => {
      setTimeout(() => { if (state === 'play') missions.refresh(); }, 10);
    });
  });

  // ---------------- autosave ----------------
  setInterval(() => {
    if (state === 'play') {
      const st = getState();
      st.pos = { x: player.state.pos.x, z: player.state.pos.z };
      st.yaw = player.state.yaw;
      st.zone = currentZone;
      saveGame();
    }
  }, 12000);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && state === 'play') {
      const st = getState();
      st.pos = { x: player.state.pos.x, z: player.state.pos.z };
      st.yaw = player.state.yaw;
      st.zone = currentZone;
      saveGame();
    }
  });

  // quiz finished → certificate check
  ctx.events.on('quizDone', ({ quizId }) => {
    if (quizId === 'quiz_final') {
      const st = getState();
      if (st.missionsDone.m8_final || (missions.current() && missions.current().id === 'm8_final')) {
        // mission event will complete m8 via missions.onEvent
      }
    }
    setTimeout(() => checkCertificate(), 1400);
  });
  ctx.events.on('missionDone', (m) => {
    if (m.id === 'm8_final') setTimeout(() => checkCertificate(), 900);
  });

  function checkCertificate() {
    const st = getState();
    const allDone = content.missions.every((m) => st.missionsDone[m.id]);
    if (allDone && $('certScreen').classList.contains('hidden')) {
      state = 'cert';
      cert.showCert();
      audio.play('achievement');
      ctx.hud.achieToast('Heritage Archivist Certificate earned!', '🎓');
      saveGame();
      exitPointerLock();
    }
  }

  // language relang hook
  window.__dhjRelang = async (lang) => {
    await loadLocalization(lang);
    ctx.hud.objective('Language: ' + lang.toUpperCase(), 'UI language updated');
  };

  // ---------------- resize ----------------
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    if (post) post.setSize(innerWidth, innerHeight);
  });

  // ---------------- menu orbit camera ----------------
  let orbitA = Math.PI * 0.1;
  function menuOrbit(dt) {
    orbitA += dt * 0.06;
    const r = 12.5;
    camera.position.set(Math.sin(orbitA) * r, 3.6 + Math.sin(orbitA * 0.6) * 0.7, Math.cos(orbitA) * r);
    camera.lookAt(0, 2.2, 0);
  }

  // intro dolly (camera) — driven by the `intro` state in the loop
  let introT = 0;

  // ---------------- main loop ----------------
  const clock = new THREE.Clock();
  let tGlobal = 0;
  function loop() {
    const dt = Math.min(clock.getDelta(), 0.05);
    tGlobal += dt;

    if (state === 'menu' || state === 'boot') {
      menuOrbit(dt);
      world.update(dt, tGlobal);
      character.root.position.set(0, 0, 4.2);
      character.root.rotation.y = Math.PI + Math.sin(tGlobal * 0.4) * 0.16;
      character.update(dt, tGlobal, 0, 0);
    } else if (state === 'intro') {
      introT += dt;
      const k = clamp(introT / 6.2, 0, 1);
      // (intro card animation runs on CSS timeline in parallel)
      const ease = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      const y = 7.4 - ease * 4.6;
      const z = 16.8 - ease * 2.8;
      camera.position.set(Math.sin(tGlobal * 0.12) * 1.2, y, z);
      camera.lookAt(0, 2.4, 2);
      world.update(dt, tGlobal);
      character.root.position.set(0, 0, 13.6);
      character.root.rotation.y = Math.PI;
      character.update(dt, tGlobal, 0, 0);
    } else {
      // play / paused / cert — world stays live but player may be disabled
      player.update(dt, tGlobal);
      world.update(dt, tGlobal);
      scanInteractables();
    }

    if (post) post.render(dt); else renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  // patch startNewGame to use intro wrapper with dolly (intro state drives camera already)
  // state must become 'intro' — ensure intro.play sets state:

  step(96, 'Opening the doors…');
  await sleep(150);

  // show menu
  state = 'menu';
  player.state.enabled = false;
  menu.refreshContinue(hasSave());
  menu.showMenu();
  applySettingsToForm();
  hide($('boot'));
  step(100, 'Ready');


  window.__dhjDebug = { scene, camera, renderer, post, ctx, world, player, missions, getState, travelTo, settings };
  loop();

  // ---------------- Android hardware back button ----------------
  window.__dhjAndroidBack = () => {
    // close the top-most layer first, then pause, then leave to the menu
    if (quiz.isOpen()) { quiz.requestClose(); uiChanged(); return; }
    const top = topOverlay();
    if (top) { hide(top); audio.play('click'); uiChanged(); return; }
    if (state === 'play') { openPause(); return; }
    if (state === 'paused') { quitToMenu(); return; }
  };

  // handle context menu on canvas
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
}

boot().catch((err) => {
  console.error(err);
  const m = $('bootMsg');
  if (m) { m.textContent = 'Failed to start: ' + err.message; m.style.color = '#e0716b'; }
});
