# Architecture

## Layers

```
┌───────────────────────────────────────────────────────────────────────┐
│ SCENES (generated, checked-in)                                        │
│  Boot → MainMenu → MuseumHub ⇄ Gallery_{EarlyLife,SocialReform,       │
│  Constitution,Scholarship,Memorials,Legacy}                           │
└───────────────────────────────────────────────────────────────────────┘
          ▲ built by                                ▲ plays in
┌─────────┴──────────────────┐        ┌─────────────┴────────────────────┐
│ EDITOR GENERATOR LAYER     │        │ RUNTIME LAYER                    │
│  DHJBootstrap (setup)      │        │  GameManager (service locator +  │
│  CharacterFactory          │        │   state machine, auto-save)      │
│  AnimationFactory          │        │  PlayerController +              │
│  PropLibrary/DioramaFactory│        │  ThirdPersonCamera + Interactor  │
│  MuseumBuilder/SceneBuilder│        │  Interactables (IInteractable)   │
│  ContentImporter           │        │  UIManager + screens (HUD, map…) │
│  ProjectValidator          │        │  Script systems below ◄──┐       │
└────────────────────────────┘        └─────────────────────────┼───────┘
                                          │ uses                │
                                   ┌──────┴───────────────────┐ │
                                   │ MANAGERS (persist across │ │
                                   │ scenes, plain C# events) │ │
                                   │  SaveManager  Settings   │ │
                                   │  ContentDatabase (JSON)  │ │
                                   │  ArchiveManager (search) │ │
                                   │  QuestManager Achievements│ │
                                   │  QuizManager  AudioMgr   │ │
                                   │  LocalizationManager     │ │
                                   │  KnowledgeAssistant (AI) │◄┘
                                   └──────────────────────────┘
                                          │ reads
                                   StreamingAssets/{Content,Localization}/*.json
                                   StreamingAssets/Imported/ (team media)
```

## Data & control flow

- **Content is data.** Exhibits, archive records, quizzes, missions, and timelines are
  JSON (`ContentDtos` mirrors). Editing JSON + re-running scene generation changes the
  museum without code. Cross-references are enforced by the ProjectValidator.
- **Event-driven.** `EventBus` carries game events (`ExhibitOpenedEvent`,
  `QuizCompletedEvent`, `MemorialVisitedEvent`, `ArchiveSearchedEvent`,
  `AssistantAskedEvent`, `MissionStateChanged`, …). Quests, achievements, HUD, and
  audio react without direct coupling.
- **State machine.** `GameManager.GameState`: Boot → MainMenu → Playing ⇄ Paused, plus
  Cinematic (intro/door travel) and UI-modal panels that pause interactions, not time.
- **Deterministic save.** Versioned JSON in `persistentDataPath`, with a `.bak` mirror;
  autosave every 30 s of play + on scene travel, pause, and quit.
- **Offline AI.** `KnowledgeAssistant` = tokenizer + TF-IDF-style ranker over the
  verified archive; answers quote the matching record(s) and always show sources.

## Performance budget (mid-range Android)

| Budget | Policy |
|---|---|
| Lights ≤ 4 pixel | hub/gallery spots `LightShadows.None`, 1 soft-shadow directional |
| Draw calls | shared meshes/materials; galleries ≈ 60–120 real-time draws |
| Geometry | all props procedural low-poly; no skinned meshes |
| Textures | ≤ 1024², generated; UI sprite borders set in the importer |
| Audio | PCM SFX, compressed loops; ≤ 4 simultaneous sources |
| Effects | single dust particle system, disabled by Reduced-FX setting |

## Determinism & regeneration

Everything visible is generated: `Tools/AssetGen/*.py` (art/audio),
`Assets/Scripts/Editor/*Factory.cs` (character, animations, meshes, materials),
`SceneBuilder` (scenes). Re-running any step is idempotent and produces stable
asset paths, so scenes keep valid references.
