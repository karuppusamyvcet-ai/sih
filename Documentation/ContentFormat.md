# Content Format & Editing Guide

All museum content lives in `Assets/StreamingAssets/Content/*.json` and
`Assets/StreamingAssets/Localization/*.json`. **No code changes are required to add
or fix content.** After editing, run **DHJ → 2 · Rebuild Scenes** (only needed for
`exhibits.json`) and **DHJ → 4 · Validate Project**.

## archive_items.json — the verified record DB

```jsonc
{
  "items": [{
    "id": "const_preamble",            // unique, snake_case
    "title": "Preamble of the Constitution",
    "category": "Constitution",        // free grouping string
    "period": "1949-1950",
    "date": "26 November 1949",
    "location": "New Delhi",
    "author": "Constituent Assembly of India",
    "source": "Ministry of Law and Justice, Government of India (public record)",
    "description": "…educational description…",
    "keywords": ["preamble", "justice", "liberty"],
    "media": { "type": "image|audio|video|text",
               "ref": "Art/Images/manuscript_placeholder_3  (or Imported/<file>)",
               "label": "Digital reconstruction" },
    "related": ["const_adoption"]
  }]
}
```

**Accuracy guardrails (enforced by policy + validator):**
- `source`, `date` and `description` are **mandatory** — the validator fails without them.
- No invented events or quotations. Artistic/long-lost material must be labelled
  *Digital Reconstruction* / *Artistic Visualization* in `label` and `description`.
- The in-game AI Guide can only cite ids present here.

## exhibits.json — museum layout

```jsonc
{ "zones": [{
  "zoneId": "early_life",              // must match MuseumBuilder.ZoneScenes
  "title":  "EARLY LIFE & EDUCATION",  // door label
  "exhibits": [{
    "id": "el_birth",
    "kind": "Pedestal|WallPanel|DisplayCase|BookDesk|QuizKiosk|
             ArchiveTerminal|AIConsole|ConstitutionTable|MonumentDiorama",
    "archiveId": "bio_birth_1891",     // optional — links knowledge card
    "quizId": "quiz_early_life",       // only for QuizKiosk
    "diorama": "MhowHouse"             // only for MonumentDiorama
  }],
  "timeline": [{ "year": "1891", "text": "Born at Mhow, 14 April" }]
}]}
```

Placement is automatic (wall panels → east wall, others → north/center rows;
Memorials get a 3×2 grid). Six valid `diorama` ids: `MhowHouse, ChaityaBhoomi,
Deekshabhoomi, AlipurHouse, LucknowPark, LondonHouse`.

## quizzes.json

`type`: `MultipleChoice | TrueFalse | Ordering | Matching`. Every question must
carry `explanation` (+ optional `source`) — quizzes teach, not just test.
`quiz_final` is the multi-stage certificate challenge.

## missions.json

Mission types drive `QuestManager`:
`Interact (targetId=exhibit)`, `DiscoverExhibits (zone,count)`,
`CompleteQuiz (quizId)`, `SearchArchive`, `VisitMemorials (count)`, `AskAssistant`.
Completing a mission unlocks the next door per `QuestManager.UnlockNextDoor`.

## Localization/TEXT

Keys resolve via `LocalizationManager.T(key)`; {0} placeholders allowed.
English is complete; add languages by copying `en.json`. Supported language ids:
`en, hi, ta, te, ml, kn, mr`.

## Importing real media (photos, scans, narration)

1. Drop files in `<project>/ContentImports/{images,audio,video}/<archiveId>.<ext>`.
2. Add a row to `ContentImports/provenance.csv`:
   `archiveId,source,license,author`.
3. Run **DHJ → 3 · Import External Content** — files are copied to
   `StreamingAssets/Imported/`, and the importer warns if any file lacks provenance.
4. Optionally point an archive record's `media.ref` at the imported filename.

Runtime resolution order for images: imported file → curated built-in artwork →
placeholder manuscript (always labelled as such).
