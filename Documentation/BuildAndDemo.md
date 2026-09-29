# Build & Demo Instructions

## Requirements
- Unity **2022.3.30f1 LTS** (2022.3.x works), module *Android Build Support* for the APK.
- No other dependencies — packages resolve from `Packages/manifest.json` (URP 14, TMP 3, uGUI).

## First-time project setup
1. Open the project. Wait for compile (editor scripts run from `Assets/Scripts/Editor`).
2. **DHJ → 1 · Prepare Project** — font, URP assignment, player settings.
3. **DHJ → 2 · Build Everything** — character prefab, animation clips/controller,
   meshes, materials, all 9 scenes; registers `EditorBuildSettings`.
4. **DHJ → 4 · Validate Project** — must report `0 failed`.
5. Play from the `Boot` scene (or any scene — `RuntimeBootstrap` self-heals).

## Windows build
- Menu: **DHJ → 5 · Build ➤ Windows** → `Builds/Windows/AmbedkarDigitalHeritage.exe`
- CLI: `Unity -batchmode -projectPath . -executeMethod DHJ.EditorTools.BuildScript.BuildWindows -quit`
- x64, IL2CPP → fast, self-contained (Unity Player + `*_Data` folder next to the exe ships as-is).

## Android build
- Menu: **DHJ → 6 · Build ➤ Android** → `Builds/Android/AmbedkarDigitalHeritage.apk`
- ARM64-only, IL2CPP, minSdk 26, landscape.
- Package id: `com.sih26096.team.ambedkardigitalheritage` — **replace with your team's**
  in `DHJBootstrap.ConfigurePlayerSettings` before release.

## Judge demo flow (5–10 min, "Presentation mode")
1. **Main menu** → enable *Presentation mode* (unlock-all, guided captions) → *New Journey*.
2. **Intro** (skippable) — title card, hub dolly-in. *Skip* to move faster.
3. **Reception** — interact with the **Archive Guide kiosk** (mission 1 completes, XP banner).
4. Walk the **rotunda** — artistic portrait pedestal, hologram quote, grand timeline.
5. **Door 1 — Early Life** — slides open, scene travel; read the timeline, open 2 exhibits
   (shows exhibit panel + document viewer with a manuscript image).
6. **Door 2 — Social Reform** — run the *Match & Verify* quiz kiosk (matching + MCQ,
   explanations after each answer, XP + best-score save).
7. **Door 4 — Scholarship** — archive terminal: type "constitution" → ranked results →
   open a knowledge card (mission: search). Show *My Digital Archive* collecting entries.
8. **Door 5 — Memorials** — walk between two dioramas (Chaitya Bhoomi & Deekshabhoomi);
   each is labelled *Digital reconstruction* (mission progress x/2).
9. **Door 6 — Legacy** — AI Archive Guide console: ask "What are Fundamental Rights?"
   → answer cites archive ids; footer reads **Offline Archive Guide**.
10. Back in the hub: open **Map** (M), **Pause → Settings** (subtitles / text size /
    high contrast / volumes), then show **Progress** (missions 1–8 banner) — if the team
    completed the chain in advance, finish **m8** to show the **Heritage Archivist
    Certificate** screen.

## QA checklist (the validator automates most of it)
- [ ] `DHJ → 4` reports 0 failures.
- [ ] Play through: New Game → intro → m1 kiosk → doors 1–6 → door back → map → pause/settings.
- [ ] Quiz: wrong answer shows explanation; best score persists after restart.
- [ ] Save: quit mid-gallery → Continue restores position & progress.
- [ ] Subtitles: enable → open an exhibit → text appears with captions; text-size applies.
- [ ] Airplane mode: AI Guide still answers with cited sources; label says *Offline Archive Guide*.
- [ ] Windows build starts from the exe; Android APK installs on ARM64 device.
- [ ] No magenta materials (URP assigned), no missing-font boxes (TMP font generated).
