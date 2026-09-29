// ---------- loads StreamingAssets content ----------
// Works in every runtime: the build bakes the JSON into window.DHJ_CONTENT
// (needed for file:// in the desktop EXE and the Android WebView); when the
// game is served over http(s) we prefer the live files so content edits show
// up without a rebuild.
const EMBEDDED = () => (typeof window !== 'undefined' && window.DHJ_CONTENT) || null;

async function tryFetch(path) {
  if (location.protocol === 'file:') throw new Error('file://');
  const r = await fetch(path, { cache: 'no-cache' });
  if (!r.ok) throw new Error(path + ' → ' + r.status);
  return r.json();
}

async function loadOne(key, file) {
  const emb = EMBEDDED();
  if (emb && emb[key]) return emb[key];
  return tryFetch(file);
}

export async function loadContent() {
  const [archive, exhibits, missions, quizzes] = await Promise.all([
    loadOne('archive', 'content/archive_items.json'),
    loadOne('exhibits', 'content/exhibits.json'),
    loadOne('missions', 'content/missions.json'),
    loadOne('quizzes', 'content/quizzes.json'),
  ]);
  const byId = new Map();
  for (const it of archive.items) byId.set(it.id, it);
  const zones = exhibits.zones;
  const zoneById = new Map(zones.map((z) => [z.zoneId, z]));
  const quizById = new Map(quizzes.quizzes.map((q) => [q.id, q]));
  const zoneOrder = zones.map((z) => z.zoneId);
  return {
    archive, items: archive.items, byId,
    zones, zoneById, zoneOrder,
    missions: missions.missions,
    quizzes: quizzes.quizzes, quizById,
    zoneMeta, zoneOfQuiz: (quizId) => (quizById.get(quizId) || {}).zone,
    source: EMBEDDED() ? 'embedded' : 'http',
  };
}

// localization shares the same embedded-bundle trick
export async function loadLocalizationFile(lang) {
  const emb = EMBEDDED();
  if (emb && emb.loc && emb.loc[lang]) return emb.loc[lang];
  return tryFetch(`localization/${lang}.json`);
}

// static presentation metadata per zone (mirrors MuseumBuilder.cs)
export const zoneMeta = {
  early_life:    { title: 'EARLY LIFE & EDUCATION', accent: 0x3d5c8f, desc: "From Mhow to the world's great universities — walk the timeline 1891–1923.", scene: 'Gallery_EarlyLife', theme: 'dawn' },
  social_reform: { title: 'SOCIAL REFORM', accent: 0x8c5240, desc: 'Movements, newspapers and negotiations that changed a nation.', scene: 'Gallery_SocialReform', theme: 'ember' },
  constitution:  { title: 'CONSTITUTION', accent: 0x2e4a6e, desc: 'Read the Preamble at the Constitution Table. Discover Fundamental Rights.', scene: 'Gallery_Constitution', theme: 'deep' },
  scholarship:   { title: 'SCHOLARSHIP & WRITINGS', accent: 0x6e5435, desc: 'Manuscripts, books and a searchable institutional archive.', scene: 'Gallery_Scholarship', theme: 'amber' },
  memorials:     { title: 'MEMORIALS', accent: 0x4d6e52, desc: 'Digital reconstructions of memorials and historic places.', scene: 'Gallery_Memorials', theme: 'garden' },
  legacy:        { title: 'LEGACY', accent: 0x404d8c, desc: 'The legacy archive, the AI Archive Guide and the Final Knowledge Challenge.', scene: 'Gallery_Legacy', theme: 'night' },
};

export const doorOrder = ['early_life', 'social_reform', 'constitution', 'scholarship', 'memorials', 'legacy'];
