import { $, show, hide, h, escapeHtml, isTouch } from '../core.js';
import { getState, saveGame } from '../state.js';

// ------------------------------------------------------------------
// Exhibit panel: description + manuscript document viewer (pan/zoom),
// plus the archive knowledge-card modal.
// ------------------------------------------------------------------
export function createExhibitUI(ctx) {
  const panel = $('exhibitPanel');
  const card = $('cardPanel');
  let lastFocus = null;

  // ---------- document viewer ----------
  const viewer = $('docViewer'), img = $('exImg');
  let vs = { scale: 1, x: 0, y: 0, drag: null };
  function applyView() {
    img.style.transform = `translate(calc(-50% + ${vs.x}px), calc(-50% + ${vs.y}px)) scale(${vs.scale})`;
  }
  function resetView() { vs = { scale: 1, x: 0, y: 0, drag: null }; applyView(); }
  viewer.addEventListener('pointerdown', (e) => {
    vs.drag = { x: e.clientX - vs.x, y: e.clientY - vs.y };
    viewer.classList.add('grabbing');
    viewer.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  viewer.addEventListener('pointermove', (e) => {
    if (!vs.drag) return;
    vs.x = e.clientX - vs.drag.x;
    vs.y = e.clientY - vs.drag.y;
    applyView();
  });
  const endDrag = () => { vs.drag = null; viewer.classList.remove('grabbing'); };
  viewer.addEventListener('pointerup', endDrag);
  viewer.addEventListener('pointercancel', endDrag);
  viewer.addEventListener('wheel', (e) => {
    e.preventDefault();
    vs.scale = Math.min(3.4, Math.max(0.7, vs.scale - Math.sign(e.deltaY) * 0.18));
    applyView();
  }, { passive: false });
  // pinch zoom
  let pinch = null;
  viewer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    }
  }, { passive: true });
  viewer.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && pinch) {
      const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      vs.scale = Math.min(3.4, Math.max(0.7, vs.scale * (d / pinch)));
      pinch = d;
      applyView();
      e.preventDefault();
    }
  }, { passive: false });
  viewer.addEventListener('touchend', () => { pinch = null; });

  // ---------- open exhibit ----------
  function openExhibit(entry, zoneId) {
    lastFocus = document.activeElement;
    const a = entry.archiveId ? ctx.content.byId.get(entry.archiveId) : null;
    $('exKind').textContent = entry.kind ? entry.kind.replace(/([A-Z])/g, ' $1').trim().toUpperCase() : 'EXHIBIT';
    $('exTitle').textContent = entry.title;
    const body = $('exText');
    if (a) {
      body.innerHTML = `
        <p>${escapeHtml(a.description)}</p>
        <div class="meta-chips">
          <span class="chip gold">${escapeHtml(a.category)}</span>
          ${a.period ? `<span class="chip">${escapeHtml(a.period)}</span>` : ''}
          ${a.date ? `<span class="chip">${escapeHtml(a.date)}</span>` : ''}
          ${a.location ? `<span class="chip">${escapeHtml(a.location)}</span>` : ''}
          ${(a.keywords || []).slice(0, 5).map((k) => `<span class="chip">#${escapeHtml(k)}</span>`).join('')}
        </div>
        <div class="src">Source: ${escapeHtml(a.source || '—')}</div>
        <div class="src">Record id: ${escapeHtml(a.id)}</div>`;
      const media = a.media || {};
      const url = resolveMedia(media);
      img.src = url || pickManuscript(entry.id);
      $('exImgLabel').textContent = media.label
        || (url ? 'Archival document' : 'Manuscript facsimile — artistic visualization');
      if (media.source_note) {
        body.insertAdjacentHTML('beforeend', `<div class="src">${escapeHtml(media.source_note)}</div>`);
      }
    } else {
      body.innerHTML = `<p>${escapeHtml(entry.text || 'This exhibit forms part of the museum collection. Open the archive terminal for the full catalogue record.')}
        </p><div class="src">Digital Ambedkar Heritage Museum</div>`;
      img.src = pickManuscript(entry.id);
      $('exImgLabel').textContent = 'Artistic visualization — not a historical photograph';
    }
    resetView();
    show(panel);
    ctx.audio.play('open');
    // subtle talk animation of character nearby
    if (ctx.character) ctx.character.playTalk(3);

    // collect event
    const btn = $('btnCollect');
    const have = a && getState().collected.includes(a.id);
    btn.textContent = have ? '✓ In My Digital Archive' : '☆ Add to My Digital Archive';
    btn.disabled = have || !a;
    btn.onclick = () => {
      if (!a) return;
      const st = getState();
      if (!st.collected.includes(a.id)) {
        st.collected.push(a.id);
        saveGame();
        ctx.audio.play('pickup');
        ctx.hud.achieToast('Added to My Digital Archive — ' + a.title, '🗂');
        btn.textContent = '✓ In My Digital Archive';
        btn.disabled = true;
        ctx.events.emit('collect', a.id);
      }
    };
    $('btnExClose').onclick = () => close();
  }

  function pickManuscript(seed = '') {
    let n = 0; for (const c of seed) n += c.charCodeAt(0);
    return `art/Images/manuscript_placeholder_${(n % 3) + 1}.png`;
  }

  // Archive media refs are written the way the content files spell them
  // ("Art/Documents/const_preamble"); map them to the shipped asset folder.
  const MEDIA_EXT = { 'art/documents/': '.jpg', 'art/images/': '.png' };
  function resolveMedia(media) {
    // a monument record shows its commemorative certificate; the diorama is
    // the 3-D model standing next to the panel
    const ref = media && (media.type === 'Model3D' ? media.certificate : media.ref);
    if (!ref) return null;
    const path = ref.replace(/^Art\//i, 'art/').toLowerCase();
    const dir = Object.keys(MEDIA_EXT).find((d) => path.startsWith(d));
    if (!dir) return null;
    return ref.replace(/^Art\//i, 'art/') + MEDIA_EXT[dir];
  }

  function close() {
    hide(panel);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // ---------- knowledge card ----------
  function openCard(archiveId) {
    const a = ctx.content.byId.get(archiveId);
    if (!a) return;
    $('cardTitle').textContent = a.title;
    $('cardBody').innerHTML = `
      <div class="kv"><div class="k">Category</div><div>${escapeHtml(a.category)}</div></div>
      <div class="kv"><div class="k">Period</div><div>${escapeHtml(a.period || '—')}</div></div>
      <div class="kv"><div class="k">Date</div><div>${escapeHtml(a.date || '—')}</div></div>
      <div class="kv"><div class="k">Location</div><div>${escapeHtml(a.location || '—')}</div></div>
      <div class="kv"><div class="k">Author</div><div>${escapeHtml(a.author && a.author !== '—' ? a.author : 'Dr. B. R. Ambedkar')}</div></div>
      <div class="desc">${escapeHtml(a.description)}</div>
      <div class="kv"><div class="k">Source</div><div>${escapeHtml(a.source || '—')}</div></div>
      <div class="kv"><div class="k">Record id</div><div><code>${escapeHtml(a.id)}</code></div></div>
      ${(a.related && a.related.length) ? `<div class="card-rel">${a.related.map((r) => `<button data-rel="${escapeHtml(r)}">→ ${escapeHtml(r)}</button>`).join('')}</div>` : ''}`;
    $('cardBody').querySelectorAll('[data-rel]').forEach((b) => {
      b.addEventListener('click', () => openCard(b.dataset.rel));
    });
    show(card);
    ctx.audio.play('page');
    // auto-collect opened cards
    const st = getState();
    if (!st.collected.includes(a.id)) {
      st.collected.push(a.id);
      saveGame();
      ctx.audio.play('pickup', { volume: 0.7 });
      ctx.events.emit('collect', a.id);
    }
    $('btnCardClose').onclick = () => hide(card);
  }

  function anyOpen() {
    return [panel, card, $('archivePanel'), $('aiPanel'), $('quizPanel'), $('myArchivePanel')]
      .some((el) => !el.classList.contains('hidden'));
  }
  function closeAll() {
    [panel, card, $('archivePanel'), $('aiPanel'), $('myArchivePanel')].forEach(hide);
  }

  return { openExhibit, openCard, close, anyOpen, closeAll };
}
