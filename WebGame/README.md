# Ambedkar: The Digital Heritage Journey — Web / EXE / APK

The same game that `Assets/Scripts/**` describes for Unity, shipped as a
self-contained 3D build that runs **offline** in a browser, as a **Windows
x64 .exe**, and as an **Android .apk** — from one shared `src/` codebase and
the repository's own content pipeline (no duplicated data).

```
WebGame/
  src/            the game (ES modules, bundled by esbuild)
    main.js         boot, scene/render loop, state machine, zone travel, input
    content.js      loads the archive/gallery/mission/quiz data (+ zone metadata)
    ai.js           offline TF-IDF retrieval over the 35 archive records
    state.js        save/load, settings, localization
    audio.js        music, ambience and SFX pools (all from Assets/Audio)
    core.js         helpers, event bus, fade transitions
    play/           player controller (WASD + pointer lock / touch stick),
                    mission chain m1…m8 with progressive door unlocking
    ui/             HUD, main menu, exhibit panel + document viewer, quiz
                    engine (MCQ / True-False / Ordering / Matching), manuscript
                    archive, My Digital Archive, AI guide, map, certificate
    world/          materials + textures, procedural props, the museum itself,
                    the rigged Ambedkar character, post-processing pipeline
  electron/       desktop shell → Windows x64 installer + portable exe
  android/        minimal Gradle/WebView project → signed APK
  scripts/        validate · nodesmoke · filesmoke · qa (browser) · serve · sync-android
```

## Content (single source of truth)

Everything comes from the Unity project's JSON and art — the web build reads
the same files:

| Data | Source |
|---|---|
| 35 archive records | `Assets/StreamingAssets/Content/archive_items.json` |
| 6 galleries, 40 exhibits, timelines | `Assets/StreamingAssets/Content/exhibits.json` |
| 8 missions (m1…m8) | `Assets/StreamingAssets/Content/missions.json` |
| 4 quizzes, 4 question types | `Assets/StreamingAssets/Content/quizzes.json` |
| UI strings EN/HI/TA | `Assets/StreamingAssets/Localization/*.json` |
| Textures, portrait, manuscripts | `Assets/Art/**` |
| Music, ambience, 11 SFX | `Assets/Audio/**` |

The build **bakes** the JSON into `content-bundle.js` (`window.DHJ_CONTENT`)
because the desktop and mobile builds load the game over `file://`, where
`fetch()` of local files is blocked. When the game is served over http(s) it
prefers the live JSON files, so content edits show up without a rebuild.

## Build & run

```bash
cd WebGame
npm install
npm run build          # → dist/game (self-contained folder, ~10 MB)
node scripts/serve.mjs 4173        # preview at http://localhost:4173
```

### Tests (no browser needed)

```bash
node scripts/validate.mjs     # content integrity, cross-refs, AI retrieval, assets
node scripts/nodesmoke.mjs    # builds hub + all 6 galleries, character, player,
                              # walks the 8-mission chain (headless, ~1 s)
node scripts/filesmoke.mjs    # verifies the file:// payload the EXE/APK use
node scripts/qa.mjs           # real Chromium play-through + screenshots (CI)
```

## Windows x64 (EXE)

```bash
cd WebGame && npm run build
cd electron && npm install && npx electron-builder --win --x64
```

Produces `AmbedkarDigitalHeritage-1.0.0-x64.exe` (installer) and
`AmbedkarDigitalHeritage-1.0.0-portable.exe` (single file) in `electron/release/`.
The shell loads the game from `resources/game`, disables network access, and
adds F11 fullscreen plus a Journey/View/Help menu. CI: `.github/workflows/build-windows.yml`.

## Android (APK)

```bash
cd WebGame && npm run build
node scripts/sync-android.mjs         # dist/game → android/app/src/main/assets/www
cd android
keytool -genkeypair -keystore dhj-release.keystore -alias dhj \
        -keyalg RSA -keysize 2048 -validity 10950 \
        -storepass … -keypass … -dname "CN=Team Binary Coders"
./gradlew assembleRelease
```

`app/build/outputs/apk/release/app-release.apk` is a signed, landscape,
minSdk 24 WebView shell. No runtime permissions, no network. CI:
`.github/workflows/build-android.yml`.

## Presentation mode

*Presentation mode* (main menu) unlocks all six doors, enables guided captions
and is the recommended demo setting for judges.

## Offline AI Archive Guide

`src/ai.js` builds a TF-IDF index over the 35 records (title, category, period,
location, description, keywords) and answers by cosine similarity, always
returning the archive record ids it used. It cannot invent facts — questions
with no supporting record are refused. The footer reads *Offline Archive Guide*.
