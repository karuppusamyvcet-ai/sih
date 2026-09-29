// ---------- loads StreamingAssets content ----------
export async function loadContent() {
  const [archive, exhibits, missions, quizzes] = await Promise.all([
    fetch('content/archive_items.json').then((r) => r.json()),
    fetch('content/exhibits.json').then((r) => r.json()),
    fetch('content/missions.json').then((r) => r.json()),
    fetch('content/quizzes.json').then((r) => r.json()),
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
  };
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
