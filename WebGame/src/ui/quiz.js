import { $, show, hide, h, escapeHtml } from '../core.js';
import { getState, saveGame, settings } from '../state.js';

// ------------------------------------------------------------------
// Quiz engine: MultipleChoice · TrueFalse · Ordering · Matching
// with per-question explanations, XP and best-score persistence.
// ------------------------------------------------------------------
export function createQuiz(ctx) {
  const scr = $('quizPanel');
  const body = $('quizBody'), nextBtn = $('quizNext'), scoreEl = $('quizScore');
  let quiz = null, qi = 0, answered = false, correctCount = 0, sel = null;
  let onClose = null;

  $('quizClose').addEventListener('click', () => { if (!quiz) return close(); });
  nextBtn.addEventListener('click', onNext);

  function start(quizId, doneCb) {
    quiz = ctx.content.quizById.get(quizId);
    if (!quiz) { console.warn('missing quiz', quizId); return; }
    onClose = doneCb;
    qi = 0; correctCount = 0; answered = false; sel = null;
    $('quizTitle').textContent = quiz.title;
    $('quizKicker').textContent = 'KNOWLEDGE CHECKPOINT';
    $('quizIntro').textContent = quiz.intro || '';
    show(scr);
    renderQ();
  }

  function renderQ() {
    const q = quiz.questions[qi];
    answered = false; sel = null;
    nextBtn.disabled = true;
    nextBtn.textContent = 'Submit Answer';
    $('quizBar').style.width = `${(qi / quiz.questions.length) * 100}%`;
    scoreEl.textContent = `Question ${qi + 1} / ${quiz.questions.length} · Score ${correctCount}`;
    $('quizIntro').style.display = qi === 0 ? '' : 'none';
    body.innerHTML = '';

    const qEl = h('div', 'quiz-q', escapeHtml(q.question));
    body.appendChild(qEl);

    if (q.type === 'MultipleChoice' || q.type === 'TrueFalse') {
      const opts = h('div', 'quiz-opts');
      q.answers.forEach((ans, i) => {
        const b = h('button', 'quiz-opt', `<span class="qo-key">${q.type === 'TrueFalse' ? (i === 0 ? 'T' : 'F') : String.fromCharCode(65 + i)}</span>${escapeHtml(ans)}`);
        b.style.animationDelay = `${i * 0.05}s`;
        b.addEventListener('click', () => {
          if (answered) return;
          opts.querySelectorAll('.quiz-opt').forEach((x) => x.classList.remove('sel'));
          b.classList.add('sel');
          sel = i;
          nextBtn.disabled = false;
          ctx.audio.play('click');
        });
        opts.appendChild(b);
      });
      body.appendChild(opts);
      nextBtn.style.display = '';
    } else if (q.type === 'Ordering') {
      // build shuffled ordering list
      const idx = q.answers.map((_, i) => i);
      for (let i = idx.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [idx[i], idx[j]] = [idx[j], idx[i]];
      }
      // avoid accidentally correct shuffle
      if (idx.every((v, i) => v === (q.correctOrder ? q.correctOrder[i] : i)) && idx.length > 1) {
        [idx[0], idx[idx.length - 1]] = [idx[idx.length - 1], idx[0]];
      }
      sel = idx.slice();
      const list = h('div', 'quiz-order');
      idx.forEach((ansI, pos) => {
        const item = h('div', 'qo-item',
          `<span class="num">${pos + 1}</span><span>${escapeHtml(q.answers[ansI])}</span>
           <span class="qo-actions"><button data-a="up">▲</button><button data-a="down">▼</button></span>`);
        item.querySelectorAll('button').forEach((btn) => {
          btn.addEventListener('click', () => {
            if (answered) return;
            const arr = sel;
            const cur = arr.indexOf(ansI);
            const to = btn.dataset.a === 'up' ? cur - 1 : cur + 1;
            if (to < 0 || to >= arr.length) return;
            [arr[cur], arr[to]] = [arr[to], arr[cur]];
            ctx.audio.play('click', { volume: 0.6 });
            renderOrderList(list, arr, q);
          });
        });
        list.appendChild(item);
      });
      body.appendChild(list);
      nextBtn.style.display = '';
      nextBtn.disabled = false;
      nextBtn.textContent = 'Submit Order';
      answered = false;
      sel = { type: 'order', arr: sel };
      return;
    } else if (q.type === 'Matching') {
      // pairing UI: left = keys, right = shuffled values
      const pairs = q.pairs || q.answers;  // fallback shape
      const left = pairs.map((p, i) => (Array.isArray(p) ? { k: p[0], v: p[1] } : { k: p.left || p.a || p.k, v: p.right || p.b || p.v, i }));
      const right = [...left];
      for (let i = right.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [right[i], right[j]] = [right[j], right[i]];
      }
      const grid = h('div', 'quiz-match');
      const colL = h('div', 'match-col', '<h5>Statements</h5>');
      const colR = h('div', 'match-col', '<h5>Matches</h5>');
      let pickedKey = null;
      const matches = {};
      const keyEls = {}, valEls = {};
      left.forEach((pair, i) => {
        const b = h('button', 'match-chip', escapeHtml(pair.k));
        b.style.animation = `archIn .3s ease both ${i * 0.05}s`;
        b.addEventListener('click', () => {
          if (answered) return;
          if (b.classList.contains('done')) return;
          colL.querySelectorAll('.match-chip').forEach((x) => x.classList.remove('sel'));
          b.classList.add('sel');
          pickedKey = i;
          ctx.audio.play('click', { volume: 0.6 });
        });
        keyEls[i] = b;
        colL.appendChild(b);
      });
      right.forEach((pair, i) => {
        const origIdx = left.indexOf(pair);
        const b = h('button', 'match-chip', escapeHtml(pair.v));
        b.style.animation = `archIn .3s ease both ${i * 0.05}s`;
        b.addEventListener('click', () => {
          if (answered || pickedKey === null || b.classList.contains('done')) return;
          matches[pickedKey] = origIdx;
          b.classList.add('done', 'paired');
          keyEls[pickedKey].classList.remove('sel');
          keyEls[pickedKey].classList.add('done', 'paired');
          pickedKey = null;
          ctx.audio.play('click', { volume: 0.7 });
          if (Object.keys(matches).length === left.length) {
            nextBtn.disabled = false;
          }
        });
        valEls[i] = b;
        colR.appendChild(b);
      });
      grid.appendChild(colL, colR);
      body.appendChild(grid);
      nextBtn.style.display = '';
      nextBtn.disabled = true;
      nextBtn.textContent = 'Submit Matches';
      sel = { type: 'match', matches };
      return;
    }
    nextBtn.textContent = 'Submit Answer';
  }

  function renderOrderList(list, arr, q) {
    list.innerHTML = '';
    arr.forEach((ansI, pos) => {
      const item = h('div', 'qo-item',
        `<span class="num">${pos + 1}</span><span>${escapeHtml(q.answers[ansI])}</span>
         <span class="qo-actions"><button data-a="up">▲</button><button data-a="down">▼</button></span>`);
      item.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (answered) return;
          const cur = arr.indexOf(ansI);
          const to = btn.dataset.a === 'up' ? cur - 1 : cur + 1;
          if (to < 0 || to >= arr.length) return;
          [arr[cur], arr[to]] = [arr[to], arr[cur]];
          ctx.audio.play('click', { volume: 0.6 });
          renderOrderList(list, arr, q);
        });
      });
      list.appendChild(item);
    });
    sel = { type: 'order', arr };
  }

  function onNext() {
    const q = quiz.questions[qi];
    if (!answered) {
      // ---- evaluate ----
      let ok = false;
      if (q.type === 'MultipleChoice' || q.type === 'TrueFalse') {
        if (sel === null) return;
        ok = sel === q.correctIndex;
        answered = true;
        // mark
        body.querySelectorAll('.quiz-opt').forEach((el, i) => {
          el.classList.remove('sel');
          if (i === q.correctIndex) el.classList.add('correct');
          else if (i === sel) el.classList.add('wrong');
          el.style.pointerEvents = 'none';
        });
      } else if (q.type === 'Ordering') {
        const want = q.correctOrder || q.answers.map((_, i) => i);
        ok = sel.arr.every((v, i) => v === want[i]);
        answered = true;
        body.querySelectorAll('.qo-item').forEach((el) => { el.classList.add('placed'); });
      } else if (q.type === 'Matching') {
        const pairs = q.pairs || q.answers;
        ok = Object.entries(sel.matches).every(([k, v]) => {
          const kk = +k;
          // pairs order: value index should match key index
          return kk === v;
        }) && Object.keys(sel.matches).length === pairs.length;
        answered = true;
      }
      if (ok) {
        correctCount++;
        ctx.audio.play('correct');
      } else {
        ctx.audio.play('wrong');
      }
      // explanation
      const ex = h('div', 'quiz-expl ' + (ok ? 'good' : 'bad'),
        `<b>${ok ? '✓ Correct!' : '✗ Not quite.'}</b> ${escapeHtml(q.explanation || '')}
         ${q.source ? `<span class="src">${escapeHtml(q.source)}</span>` : ''}`);
      body.appendChild(ex);
      scoreEl.textContent = `Question ${qi + 1} / ${quiz.questions.length} · Score ${correctCount}`;
      nextBtn.textContent = qi < quiz.questions.length - 1 ? 'Next Question →' : 'See Results →';
      nextBtn.disabled = false;
    } else {
      // ---- next ----
      qi++;
      if (qi < quiz.questions.length) renderQ();
      else results();
    }
  }

  function results() {
    const total = quiz.questions.length;
    const st = getState();
    const prev = st.quizBest[quiz.id];
    const firstTime = prev === undefined;
    if (prev === undefined || correctCount > prev) st.quizBest[quiz.id] = correctCount;
    st.stats.quizzes = Object.keys(st.quizBest).length;
    const xp = firstTime ? 20 + correctCount * 5 : Math.max(5, correctCount * 2);
    saveGame();
    $('quizBar').style.width = '100%';
    body.innerHTML = `
      <div class="quiz-result">
        <div class="qr-em">${correctCount === total ? '🏆' : correctCount >= total * 0.6 ? '🎖' : '📖'}</div>
        <h3>${correctCount} / ${total}</h3>
        <p>${correctCount === total ? 'Outstanding! Perfect checkpoint.' : correctCount >= total * 0.6 ? 'Well done — checkpoint cleared.' : 'Review the exhibits and try again to improve your score.'}</p>
        <div class="qr-xp">+${xp} Knowledge Points</div>
        ${prev !== undefined && !firstTime ? `<p style="font-size:13px;color:#7d869c;margin-top:8px">Best score: ${Math.max(prev, correctCount)} / ${total}</p>` : ''}
      </div>`;
    scoreEl.textContent = 'Checkpoint complete';
    nextBtn.textContent = 'Close';
    answered = true;
    nextBtn.disabled = false;
    nextBtn.onclick = () => {
      close(true);
      ctx.events.emit('quizDone', { quizId: quiz.id, score: correctCount, total });
    };
    ctx.hud.xpToast(`+${xp} Knowledge Points`);
    if (correctCount >= total * 0.6) ctx.hud.achieToast('Checkpoint cleared — ' + quiz.title, '🎓');
    ctx.missions.onEvent('quiz', { quizId: quiz.id, score: correctCount, total });
    saveGame();
  }

  function close(fired = false) {
    hide(scr);
    const cb = onClose;
    quiz = null;
    nextBtn.onclick = onNext;
    if (cb) cb(fired);
  }

  function isOpen() { return !scr.classList.contains('hidden'); }
  function requestClose() { // ESC / X → confirm quit
    if (!quiz) return false;
    if (answered && qi >= quiz.questions.length) { close(true); return true; }
    close(false);
    return true;
  }

  return { start, isOpen, requestClose };
}
