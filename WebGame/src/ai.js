// ---------- Offline AI Archive Guide: TF-IDF retrieval over the archive ----------
export function createGuide(items) {
  const docs = items.map((it) => {
    const text = [it.title, it.category, it.period, it.location, it.description, (it.keywords || []).join(' ')].join(' ');
    return { it, text: text.toLowerCase(), raw: text };
  });

  function tokenize(s) {
    return (s.toLowerCase().match(/[a-z0-9']{2,}/g) || []).map((w) =>
      w.replace(/(ing|ed|es|s)$/, '')
    );
  }

  // DF index (static corpus)
  const df = new Map();
  for (const d of docs) {
    const seen = new Set(tokenize(d.text));
    for (const t of seen) df.set(t, (df.get(t) || 0) + 1);
  }
  const N = docs.length;
  const idf = (t) => Math.log((N + 1) / ((df.get(t) || 0) + 1) + 1);

  function vec(tokens) {
    const tf = new Map();
    for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
    const v = new Map();
    let norm = 0;
    for (const [t, c] of tf) { const w = (1 + Math.log(c)) * idf(t); v.set(t, w); norm += w * w; }
    return { v, norm: Math.sqrt(norm) || 1 };
  }

  const docVecs = docs.map((d) => vec(tokenize(d.text)));

  // question-pattern stop phrases so the question form doesn't skew results
  const STOP = new Set(['what', 'are', 'the', 'who', 'was', 'were', 'when', 'did', 'does', 'how', 'why', 'and', 'for', 'his', 'her', 'tell', 'about', 'that', 'this', 'with', 'from', 'have', 'has', 'india', 'ambedkar']);

  function search(query, topK = 3) {
    const qTokens = tokenize(query).filter((t) => !STOP.has(t) || t.length > 5);
    if (!qTokens.length) return [];
    const q = vec(qTokens);
    const results = [];
    docs.forEach((d, i) => {
      const dv = docVecs[i];
      let dot = 0;
      for (const [t, w] of q.v) dot += w * (dv.v.get(t) || 0);
      let score = dot / (q.norm * dv.norm);
      // phrase bonus
      const ql = query.toLowerCase().trim();
      if (ql.length > 6 && d.text.includes(ql)) score += 0.35;
      // exact keyword hits
      for (const k of d.it.keywords || []) if (ql.includes(k.toLowerCase())) score += 0.06;
      if (score > 0.02) results.push({ item: d.it, score });
    });
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  function answer(query) {
    const hits = search(query, 3);
    if (!hits.length) {
      return {
        text: "I could not find that in the curated archive. I only answer from the thirty-five verified records — try words like 'constitution', 'Mahad', 'Columbia', 'rights' or 'Buddhism'.",
        sources: [], hits: [],
      };
    }
    const best = hits[0];
    const snippet = best.item.description;
    const lead = hits.length > 1
      ? `From the record “${best.item.title}”: `
      : `According to “${best.item.title}”: `;
    return {
      text: lead + snippet,
      sources: hits.map((h) => h.item.id),
      hits,
    };
  }

  return { search, answer };
}
