import { getState, saveGame, settings } from '../state.js';

// ------------------------------------------------------------------
// Mission chain m1..m8 + door unlocking + XP + achievements.
// missionTypes: Interact | DiscoverExhibits | CompleteQuiz | SearchArchive |
//               VisitMemorials | AskAssistant
// ------------------------------------------------------------------
export function createMissions(ctx) {
  const M = ctx.content.missions;    // 8 missions in order
  const st = getState();

  const ZONE_CHAIN = ['early_life', 'social_reform', 'constitution', 'scholarship', 'memorials', 'legacy'];

  function current() {
    if (st.missionIndex >= M.length) return null;
    return M[st.missionIndex];
  }
  function done(id) { return !!st.missionsDone[id]; }
  function progressText(m) {
    if (!m) return 'All missions complete — free exploration';
    switch (m.type) {
      case 'Interact': return done(m.id) ? 'Complete' : 'Objective: ' + m.objective;
      case 'DiscoverExhibits': {
        const n = Object.keys(st.discovered).length;
        return `Exhibits opened: ${Math.min(n, 2)}/2 · ${m.objective}`;
      }
      case 'CompleteQuiz': {
        if (m.id === 'm3_complete_quiz' || m.id === 'm3') { }
        const qz = quizForMission(m);
        const best = qz ? st.quizBest[qz] : null;
        if (qz && st.quizBest[qz] !== undefined) return 'Checkpoint cleared · ' + m.objective;
        return m.objective;
      }
      case 'SearchArchive': return st.archiveSearched ? 'Complete' : m.objective;
      case 'VisitMemorials': {
        const n = Object.keys(st.memorialsSeen).length;
        return `Dioramas visited: ${Math.min(n, 2)}/2 · ${m.objective}`;
      }
      case 'AskAssistant': return st.aiAsked ? 'Complete' : m.objective;
      default: return m.objective;
    }
  }

  function quizForMission(m) {
    // m3 → social reform quiz, m4 → constitution quiz, m8 → final quiz
    if (m.id.includes('reform') || m.type === 'CompleteQuiz' && m.title.includes('Social')) return 'quiz_social_reform';
    if (m.id.includes('constitution') || m.title.includes('Constitution')) return 'quiz_constitution';
    if (m.id.includes('final') || m.title.includes('Final')) return 'quiz_final';
    return null;
  }

  function awardXP(amount, reason) {
    st.xp += amount;
    st.level = 1 + Math.floor(st.xp / 150);
    ctx.hud.xpToast(`+${amount} Knowledge Points${reason ? ' · ' + reason : ''}`);
    saveGame();
  }

  function completeMission(m, silent = false) {
    if (!m || st.missionsDone[m.id]) return;
    st.missionsDone[m.id] = true;
    st.missionIndex++;
    awardXP(m.xp, m.title);
    if (!silent) {
      ctx.audio.play('objective');
      ctx.hud.achieToast('Mission complete — ' + m.title);
    }
    const nxt = current();
    ctx.hud.objective(nxt ? nxt.title : 'All missions complete!', nxt ? progressText(nxt) : 'Explore freely — the certificate is yours.');
    ctx.events.emit('missionDone', m);
    ctx.world.refreshLocks();
    saveGame();
  }

  // evaluate event → maybe complete current mission
  function onEvent(type, data = {}) {
    const m = current();
    if (!m && !st.missionIndex) return;
    let hit = false;
    if (!m) return;
    switch (m.type) {
      case 'Interact':
        if (type === 'interact' && data.id === m.targetId) hit = true;
        break;
      case 'DiscoverExhibits':
        if (type === 'exhibit') {
          st.discovered[data.zone] = st.discovered[data.zone] || {};
          st.discovered[data.zone][data.id] = true;
          const total = Object.values(st.discovered).reduce((a, o) => a + Object.keys(o).length, 0);
          st.stats.exhibits = total;
          if (total >= 2) hit = true;
        }
        break;
      case 'CompleteQuiz':
        if (type === 'quiz' && data.quizId === quizForMission(m)) hit = true;
        break;
      case 'SearchArchive':
        if (type === 'archive') { st.archiveSearched = true; st.stats.searches++; hit = true; }
        break;
      case 'VisitMemorials':
        if (type === 'memorial') {
          st.memorialsSeen[data.id] = true;
          const n = Object.keys(st.memorialsSeen).length;
          st.stats.memorials = n;
          if (n >= 2 && m.id.includes('memorial')) hit = true;
          else if (n >= 2) hit = true;
        }
        break;
      case 'AskAssistant':
        if (type === 'ai') { st.aiAsked = true; st.stats.questions++; hit = true; }
        break;
    }
    if (hit) completeMission(m);
    else {
      // update partial progress captions
      ctx.hud.objective(m.title, progressText(m), true);
      saveThrottled();
    }
  }

  let saveT = 0;
  function saveThrottled() {
    const now = Date.now();
    if (now - saveT > 4000) { saveT = now; saveGame(); }
  }

  // door unlocking --------------------------------------------------
  function unlockedIndex() {
    // how many doors of the chain are open (index into ZONE_CHAIN)
    let n = 0;
    for (let i = 0; i < ZONE_CHAIN.length; i++) {
      const mi = ['m1_enter', 'm2_earlylife', 'm3_reform', 'm4_constitution', 'm5_archive', 'm6_memorials'];
      // progressive: door i unlocked when mission i (0-based) done? door0 after m1, door1 after m2...
      const gateMission = M[i];   // m1..m6 gate doors 0..5? see below
      if (settings.presentation) return ZONE_CHAIN.length;
      if (i === 0) {
        if (done('m1_enter')) n = 1; else break;
      } else if (i === 1) {
        if (done('m2_earlylife')) n = 2; else break;
      } else if (i === 2) {
        if (done('m3_reform') || done('m3')) n = 3; else break;
      } else if (i === 3) {
        if (done(mIds.constitution)) n = 4; else break;
      } else if (i === 4) {
        if (done(mIds.archive)) n = 5; else break;
      } else if (i === 5) {
        if (done(mIds.memorials)) n = 6; else break;
      }
    }
    return n;
  }

  const mIds = {
    enter: 'm1_enter',
    early: 'm2_earlylife',
    reform: 'm3_reform',
    constitution: 'm4_constitution',
    archive: 'm5_archive',
    memorials: 'm6_memorials',
    legacy: 'm7_legacy',
    final: 'm8_final',
  };

  function isZoneUnlocked(zone) {
    if (settings.presentation) return true;
    const idx = ZONE_CHAIN.indexOf(zone);
    if (idx < 0) return true;
    if (idx === 0) return done(mIds.enter);
    const gateMission = M.slice(0, idx + 1);   // missions gating door idx: m1..m(idx+1)
    // door N opens after mission N is complete (m1→door0 ... m6→door5)
    const gate = M[idx];  // e.g. idx=1 → m2 gates door1? We want door1 after m2 which is index 1 ✓ (door0 after m1=index0)
    return gate ? done(gate.id) : true;
  }

  function initUI() {
    const m = current();
    ctx.hud.objective(m ? m.title : 'All missions complete!', m ? progressText(m) : 'Certificate earned — explore freely');
  }

  function refresh() {
    const m = current();
    ctx.hud.objective(m ? m.title : 'All missions complete!', m ? progressText(m) : 'Certificate earned — explore freely', true);
  }

  return { current, done, onEvent, isZoneUnlocked, initUI, refresh, awardXP, completeMission, progressText, quizForMission, mIds };
}
