import { $, show, hide, h, escapeHtml } from '../core.js';
import { getState, saveGame } from '../state.js';

// ------------------------------------------------------------------
// Manuscript Archive terminal · My Digital Archive · Offline AI Guide
// ------------------------------------------------------------------
export function createLibrary(ctx) {
  const archPanel = $('archivePanel'), myPanel = $('myArchivePanel'), aiPanel = $('aiPanel');

  // ---------- archive search ----------
  function openArchive() {
    show(archPanel);
    $('myCount').textContent = getState().collected.length;
    $('archQ').value = '';
    $('archResults').innerHTML = '';
    renderResults(ctx.content.items.slice(0, 8).map((item) => ({ item, score: 0 })), true);
    setTimeout(() => $('archQ').focus(), 60);
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const hits = ctx.guide.search(query, 6);
    renderResults(hits, false, q);
    ctx.missions.onEvent('archive', { q });
    ctx.audio.play('page');
  }

  function renderResults(hits, isBrowse = false, q = '') {
    const box = $('archResults');
    box.innerHTML = '';
    if (!hits.length) {
      box.appendChild(h('div', 'arch-empty', 'No records matched “' + escapeHtml(q) + '”. Try: constitution, Mahad, education, rights…'));
      return;
    }
    hits.forEach((r, i) => {
      const it = r.item;
      const el = h('div', 'arch-item', `
        <h4>${escapeHtml(it.title)}</h4>
        <span class="arch-score">${isBrowse ? escapeHtml(it.category) : Math.round(r.score * 100) + '% match'}</span>
        <div class="arch-meta">${escapeHtml(it.category)} · ${escapeHtml(it.date || it.period || '')} · <code>${escapeHtml(it.id)}</code></div>
        <div class="arch-desc">${escapeHtml(it.description)}
          <div class="src" style="margin-top:8px;font-size:12px;color:#98a1b5">Source: ${escapeHtml(it.source || '—')}</div>
        </div>`);
      el.style.animationDelay = `${i * 0.05}s`;
      el.addEventListener('click', () => {
        if (el.classList.contains('open')) { ctx.exhibits.openCard(it.id); return; }
        box.querySelectorAll('.arch-item').forEach((x) => x.classList.remove('open'));
        el.classList.add('open');
        ctx.audio.play('click', { volume: 0.6 });
      });
      el.addEventListener('dblclick', () => ctx.exhibits.openCard(it.id));
      box.appendChild(el);
    });
  }

  $('btnArchSearch').addEventListener('click', () => search($('archQ').value));
  $('archQ').addEventListener('keydown', (e) => { if (e.key === 'Enter') search($('archQ').value); });
  $('btnMyArchive').addEventListener('click', () => { hide(archPanel); openMyArchive(); });

  // ---------- my archive ----------
  function openMyArchive() {
    const st = getState();
    $('myCount').textContent = st.collected.length;
    const box = $('myArchiveList');
    box.innerHTML = '';
    if (!st.collected.length) {
      box.appendChild(h('div', 'arch-empty', 'Nothing collected yet. Open exhibits and knowledge cards to build your personal archive.'));
    } else {
      st.collected.forEach((id, i) => {
        const it = ctx.content.byId.get(id);
        if (!it) return;
        const el = h('div', 'arch-item myarchive-item', `
          <h4>${escapeHtml(it.title)}</h4>
          <span class="badge-have">COLLECTED</span>
          <div class="arch-meta">${escapeHtml(it.category)} · <code>${escapeHtml(it.id)}</code></div>`);
        el.style.animationDelay = `${i * 0.04}s`;
        el.addEventListener('click', () => ctx.exhibits.openCard(id));
        box.appendChild(el);
      });
    }
    show(myPanel);
    ctx.audio.play('page');
  }

  // ---------- AI guide ----------
  const log = $('aiLog');
  function openAI() {
    show(aiPanel);
    if (!log.children.length) {
      botSay('Namaskar! I am the Offline Archive Guide. I answer strictly from the thirty-five curated records and always cite them. Ask me anything — for example, “What are Fundamental Rights?”');
    }
    setTimeout(() => $('aiQ').focus(), 60);
  }

  function meSay(t) {
    log.appendChild(h('div', 'ai-msg me', escapeHtml(t)));
    log.scrollTop = log.scrollHeight;
  }
  function botSay(t, sources = []) {
    const el = h('div', 'ai-msg bot', `
      ${escapeHtml(t)}
      ${sources.length ? `<span class="ai-src-k">Sources</span><span class="ai-sources">${sources.map((s) => `<span>${escapeHtml(s)}</span>`).join('')}</span>` : ''}`);
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  }

  function ask() {
    const q = $('aiQ').value.trim();
    if (!q) return;
    meSay(q);
    $('aiQ').value = '';
    ctx.audio.play('click');
    // typing indicator
    const typing = h('div', 'ai-msg bot', '<span class="ai-typing"><i></i><i></i><i></i></span>');
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const res = ctx.guide.answer(q);
      botSay(res.text, res.sources);
      ctx.audio.play('correct', { volume: 0.4 });
      ctx.missions.onEvent('ai', { q });
    }, 650 + Math.random() * 500);
  }
  $('btnAiAsk').addEventListener('click', ask);
  $('aiQ').addEventListener('keydown', (e) => { if (e.key === 'Enter') ask(); });

  function isOpen() {
    return [archPanel, myPanel, aiPanel].some((el) => !el.classList.contains('hidden'));
  }
  function closeAll() { [archPanel, myPanel, aiPanel].forEach(hide); }

  return { openArchive, openMyArchive, openAI, isOpen, closeAll, renderResults };
}
