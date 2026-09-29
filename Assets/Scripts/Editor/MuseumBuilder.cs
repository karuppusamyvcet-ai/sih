using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;
using TMPro;
using DHJ.Data;
using DHJ.Core;
using DHJ.UI;
using DHJ.Interaction;
using DHJ.Player;
using DHJ.Demo;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Builds every scene of the game from code: the hub, the six galleries,
    /// the main-menu vignette and Boot. All content placement is data-driven from
    /// StreamingAssets/Content/exhibits.json — content edits re-generate scenes
    /// without touching this file.
    /// </summary>
    public static class MuseumBuilder
    {
        // ------------------------------------------------------------ shared
        private static readonly Color Warm = new(1f, 0.91f, 0.78f);
        private static readonly Color WarmDim = new(1f, 0.88f, 0.70f);

        public static readonly Dictionary<string, Color> ZoneAccent = new()
        {
            ["early_life"]    = new Color(0.24f, 0.36f, 0.56f),
            ["social_reform"] = new Color(0.55f, 0.32f, 0.24f),
            ["constitution"]  = new Color(0.18f, 0.29f, 0.43f),
            ["scholarship"]   = new Color(0.43f, 0.33f, 0.21f),
            ["memorials"]     = new Color(0.30f, 0.43f, 0.32f),
            ["legacy"]        = new Color(0.25f, 0.30f, 0.55f),
        };

        public static readonly Dictionary<string, string> ZoneScenes = new()
        {
            ["early_life"]    = "Gallery_EarlyLife",
            ["social_reform"] = "Gallery_SocialReform",
            ["constitution"]  = "Gallery_Constitution",
            ["scholarship"]   = "Gallery_Scholarship",
            ["memorials"]     = "Gallery_Memorials",
            ["legacy"]        = "Gallery_Legacy",
        };

        public static readonly Dictionary<string, string> ZoneShortDesc = new()
        {
            ["early_life"]    = "From Mhow to the world's great universities — walk the timeline 1891–1923.",
            ["social_reform"] = "Movements, newspapers and negotiations that changed a nation.",
            ["constitution"]  = "Read the Preamble at the Constitution Table. Discover Fundamental Rights.",
            ["scholarship"]   = "Manuscripts, books and a searchable institutional archive.",
            ["memorials"]     = "Six digital reconstructions of memorials and historic places.",
            ["legacy"]        = "The legacy archive, the AI Archive Guide and the Final Knowledge Challenge.",
        };

        private static void Sun(Scene scene, float intensity, Vector3 euler)
        {
            var go = new GameObject("Sun");
            var l = go.AddComponent<Light>();
            l.type = LightType.Directional;
            l.color = Warm;
            l.intensity = intensity;
            l.shadows = LightShadows.Soft;
            l.shadowStrength = 0.68f;
            l.shadowBias = 0.03f;
            l.shadowNormalBias = 0.35f;
            go.transform.rotation = Quaternion.Euler(euler);
            SceneManager_MoveToScene(go, scene);

            // Soft architectural bounce fill light from opposite azimuth (shadowless, zero shadow-map cost)
            var fillGo = new GameObject("ArchitecturalBounceFill");
            var fill = fillGo.AddComponent<Light>();
            fill.type = LightType.Directional;
            fill.color = new Color(0.95f, 0.89f, 0.78f);
            fill.intensity = intensity * 0.26f;
            fill.shadows = LightShadows.None;
            fillGo.transform.rotation = Quaternion.Euler(26f, euler.y + 180f, 0f);
            SceneManager_MoveToScene(fillGo, scene);

            // Realistic Trilight ambient environment (skylight zenith + sandstone horizon + marble floor bounce)
            RenderSettings.ambientMode = AmbientMode.Trilight;
            RenderSettings.ambientSkyColor = new Color(0.46f, 0.50f, 0.58f);
            RenderSettings.ambientEquatorColor = new Color(0.40f, 0.36f, 0.30f);
            RenderSettings.ambientGroundColor = new Color(0.24f, 0.22f, 0.20f);
            RenderSettings.fog = true;
            RenderSettings.fogMode = FogMode.ExponentialSquared;
            RenderSettings.fogColor = new Color(0.75f, 0.72f, 0.65f);
            RenderSettings.fogDensity = 0.0085f;
        }

        private static void AddReflectionProbe(Transform parent, float w, float h, float d)
        {
            var probeGo = new GameObject("HallReflectionProbe");
            probeGo.transform.SetParent(parent, false);
            probeGo.transform.localPosition = new Vector3(0f, h * 0.45f, 0f);
            var probe = probeGo.AddComponent<ReflectionProbe>();
            probe.mode = ReflectionProbeMode.Realtime;
            probe.refreshMode = ReflectionProbeRefreshMode.OnAwake;
            probe.timeSlicingMode = ReflectionProbeTimeSlicingMode.AllFacesAtOnce;
            probe.boxProjection = true;
            probe.size = new Vector3(w + 2f, h + 2f, d + 2f);
            probe.resolution = 128;
            probe.intensity = 0.85f;
            probe.hdr = true;
        }

        private static void BuildSkylightAtrium(Transform parent, float ceilingH, float w, float d)
        {
            var sky = new GameObject("SkylightAtrium");
            sky.transform.SetParent(parent, false);
            sky.transform.localPosition = new Vector3(0f, ceilingH - 0.02f, 0f);

            PropLibrary.Mk("FrameN", sky.transform, ProceduralMesh.Box("SkyFN", w + 0.8f, 0.42f, 0.42f),
                MaterialLibrary.Marble, new Vector3(0, -0.14f, d / 2f));
            PropLibrary.Mk("FrameS", sky.transform, ProceduralMesh.Box("SkyFS", w + 0.8f, 0.42f, 0.42f),
                MaterialLibrary.Marble, new Vector3(0, -0.14f, -d / 2f));
            PropLibrary.Mk("FrameE", sky.transform, ProceduralMesh.Box("SkyFE", 0.42f, 0.42f, d),
                MaterialLibrary.Marble, new Vector3(w / 2f, -0.14f, 0));
            PropLibrary.Mk("FrameW", sky.transform, ProceduralMesh.Box("SkyFW", 0.42f, 0.42f, d),
                MaterialLibrary.Marble, new Vector3(-w / 2f, -0.14f, 0));

            var daylightMat = MaterialLibrary.Get("SkylightDaylight",
                new Color(0.92f, 0.96f, 1.0f), null, 0.9f, 0f, null, new Color(0.85f, 0.90f, 0.98f) * 1.1f);
            PropLibrary.Mk("DaylightPane", sky.transform, ProceduralMesh.Box("SkyPane", w - 0.2f, 0.05f, d - 0.2f),
                daylightMat, new Vector3(0, -0.04f, 0));

            for (int i = -1; i <= 1; i++)
            {
                PropLibrary.Mk("MullionX_" + i, sky.transform, ProceduralMesh.Box("SkyMX", w, 0.10f, 0.09f),
                    MaterialLibrary.Gold, new Vector3(0, -0.11f, i * (d * 0.28f)));
                PropLibrary.Mk("MullionZ_" + i, sky.transform, ProceduralMesh.Box("SkyMZ", 0.09f, 0.10f, d),
                    MaterialLibrary.Gold, new Vector3(i * (w * 0.28f), -0.11f, 0));
            }
        }

        private static void SceneManager_MoveToScene(GameObject go, Scene scene) =>
            UnityEngine.SceneManagement.SceneManager.MoveGameObjectToScene(go, scene);

        private static Camera MainCamera(Transform player = null)
        {
            var go = new GameObject("Main Camera");
            go.tag = "MainCamera";
            var cam = go.AddComponent<Camera>();
            cam.fieldOfView = 56f;
            cam.nearClipPlane = 0.08f;
            cam.allowHDR = true;
            cam.allowMSAA = true;
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = new Color(0.10f, 0.12f, 0.20f);
            go.AddComponent<AudioListener>();
            if (player != null)
            {
                var tpc = go.AddComponent<ThirdPersonCamera>();
                tpc.target = player;
                go.transform.position = player.position + new Vector3(0, 2.2f, -4.2f);
            }
            return cam;
        }

        public static UIManager SceneUIRoot()
        {
            var go = new GameObject("[DHJ] UI");
            var ui = go.AddComponent<UIManager>();
            go.AddComponent<GameplayWiring>();
            FillAssetLibrary(go);
            return ui;
        }

        private static void FillAssetLibrary(GameObject parent)
        {
            var lib = parent.AddComponent<AssetLibrary>();
            lib.mainFont = DHJBootstrap.EnsureTmpFont();
            Sprite S(string p) => AssetDatabase.LoadAssetAtPath<Sprite>($"{p}.png");
            lib.rounded      = S("Assets/Art/UI/ui_rounded");
            lib.roundedSoft  = S("Assets/Art/UI/ui_rounded_soft");
            lib.roundedGold  = S("Assets/Art/UI/ui_rounded_gold");
            lib.circleSprite = S("Assets/Art/UI/ui_circle");
            lib.ringSprite   = S("Assets/Art/UI/ui_ring");
            lib.arrowSprite  = S("Assets/Art/UI/ui_arrow");
            lib.glowSprite   = S("Assets/Art/UI/ui_glow");
            lib.pinSprite    = S("Assets/Art/UI/ui_pin");
            lib.portraitArt  = S("Assets/Art/Images/portrait_ambedkar_art");
            lib.manuscript1  = S("Assets/Art/Images/manuscript_placeholder_1");
            lib.manuscript2  = S("Assets/Art/Images/manuscript_placeholder_2");
            lib.manuscript3  = S("Assets/Art/Images/manuscript_placeholder_3");
            lib.bookSpines   = S("Assets/Art/Images/book_spines");
            AudioClip A(string p) => AssetDatabase.LoadAssetAtPath<AudioClip>($"{p}.wav");
            lib.musicTheme    = A("Assets/Audio/Music/museum_theme_loop");
            lib.hallAmbience  = A("Assets/Audio/Ambience/hall_ambience_loop");
            lib.uiClick       = A("Assets/Audio/SFX/ui_click");
            lib.uiHover       = A("Assets/Audio/SFX/ui_hover");
            lib.quizCorrect   = A("Assets/Audio/SFX/quiz_correct");
            lib.quizIncorrect = A("Assets/Audio/SFX/quiz_incorrect");
            lib.doorOpen      = A("Assets/Audio/SFX/door_open");
            lib.pageTurn      = A("Assets/Audio/SFX/page_turn");
            lib.pickup        = A("Assets/Audio/SFX/pickup");
            lib.objectiveNew  = A("Assets/Audio/SFX/objective_new");
            lib.exhibitOpen   = A("Assets/Audio/SFX/exhibit_open");
            lib.footstep      = A("Assets/Audio/SFX/footstep_stone");
            lib.achievement   = A("Assets/Audio/SFX/achievement");
        }

        private static GameObject PlacePlayer(Scene scene, Vector3 pos, float yaw, out Transform pawn)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(CharacterFactory.PrefabPath);
            if (prefab == null)
            {
                var cfg = DHJBootstrap.EnsureStyleConfig();
                prefab = CharacterFactory.BuildPlayerPrefab(cfg);
            }
            var player = (GameObject)PrefabUtility.InstantiatePrefab(prefab, scene);
            player.transform.SetPositionAndRotation(pos, Quaternion.Euler(0, yaw, 0));
            pawn = player.transform;
            var spawn = new GameObject("PlayerSpawn");
            SceneManager_MoveToScene(spawn, scene);
            spawn.transform.SetPositionAndRotation(pos, Quaternion.Euler(0, yaw, 0));
            spawn.AddComponent<PlayerSpawn>();
            return player;
        }

        // ============================================================ HUB
        public static void BuildHubScene(Scene scene)
        {
            const float W = 64, D = 44, H = 9;
            var shell = PropLibrary.RoomShell("HubShell", W, H, D,
                MaterialLibrary.Marble, MaterialLibrary.Sandstone, MaterialLibrary.CeilingMat);
            SceneManager_MoveToScene(shell, scene);
            AddReflectionProbe(shell.transform, W, H, D);
            BuildSkylightAtrium(shell.transform, H, 14f, 12f);

            // carpet runners: entrance → rotunda → doors
            PropLibrary.Mk("Runner_Main", shell.transform, ProceduralMesh.Box("Runner64", 4.4f, 0.02f, D - 4),
                MaterialLibrary.Carpet, new Vector3(0, 0.012f, 0));
            PropLibrary.Mk("Runner_Cross", shell.transform, ProceduralMesh.Box("RunnerX", W - 6, 0.02f, 4.4f),
                MaterialLibrary.Carpet, new Vector3(0, 0.012f, 0));

            // nave columns
            foreach (var z in new[] { -14f, -6f, 6f, 14f })
                foreach (var x in new[] { -10f, 10f })
                    PropLibrary.Column(shell.transform, new Vector3(x, 0, z), H - 0.4f);

            Sun(scene, 1.15f, new Vector3(48, -30, 0));

            // ---------- rotunda centerpiece: inlaid floor medallion + dais + stanchion ring + portrait
            PropLibrary.Mk("RotundaFloorMedallion", shell.transform,
                ProceduralMesh.Disc("Hub_Medallion", 7.2f, 64), MaterialLibrary.FloorMedallion,
                new Vector3(0, 0.016f, 0));
            PropLibrary.Mk("RotundaDais", shell.transform,
                ProceduralMesh.Cylinder("RotundaDais", 5.2f, 5.6f, 0.35f, 40), MaterialLibrary.MarbleBlue,
                new Vector3(0, 0, 0), default, null, true);
            PropLibrary.Mk("RotundaRing", shell.transform, ProceduralMesh.Torus("RotundaRing", 5.45f, 0.06f, 40, 8),
                MaterialLibrary.Gold, new Vector3(0, 0.38f, 0));
            PropLibrary.StanchionRing(shell.transform, Vector3.zero, 6.1f, 12, skipSegment: 6);

            var portraitSprite = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/Art/Images/portrait_ambedkar_art.png");
            var display = PropLibrary.PortraitDisplay(shell.transform, new Vector3(0, 1.1f, 0), 0f, portraitSprite);
            foreach (var a in new[] { 45f, 135f, 225f, 315f })
            {
                var rad = a * Mathf.Deg2Rad;
                PropLibrary.SpotlightFixture(shell.transform,
                    new Vector3(Mathf.Sin(rad) * 4.2f, H - 0.4f, Mathf.Cos(rad) * 4.2f),
                    Quaternion.LookRotation(new Vector3(0, 2.2f, 0) - new Vector3(Mathf.Sin(rad) * 4.2f, H - 0.6f, Mathf.Cos(rad) * 4.2f)).eulerAngles,
                    "rotunda", 3.2f, 14f, Warm);
            }
            // information plaque
            PropLibrary.CaptionPlate(shell.transform, new Vector3(0, 1.0f, -4.6f),
                "DR. B. R. AMBEDKAR\n1891 – 1956\nScholar • Social Reformer • Chief Architect of the Constitution",
                4.2f, 0.19f);

            // ---------- reception + guide kiosk (mission 1 target)
            PropLibrary.ReceptionDesk(shell.transform, new Vector3(-7f, 0, -14f), 20f);
            var guide = PropLibrary.Kiosk(shell.transform, new Vector3(-5.2f, 0, -12.6f), 20f, "guide");
            var guideComp = guide.AddComponent<ExhibitInteractable>();
            guideComp.exhibitId = "kiosk_guide";
            guideComp.kind = ExhibitKind.GuideKiosk;
            PropLibrary.CaptionPlate(shell.transform, new Vector3(-5.2f, 1.0f, -13.7f), "ARCHIVE GUIDE", 1.6f, 0.16f, 20f);

            // hub archive terminal (also satisfies archive search)
            var term = PropLibrary.Kiosk(shell.transform, new Vector3(7f, 0, -14f), -20f, "archive");
            var termComp = term.AddComponent<ExhibitInteractable>();
            termComp.exhibitId = "hub_terminal";
            termComp.kind = ExhibitKind.ArchiveTerminal;
            PropLibrary.CaptionPlate(shell.transform, new Vector3(7f, 1.0f, -15.1f), "DIGITAL ARCHIVE TERMINAL", 2.2f, 0.15f, -20f);

            // ---------- projection wall (west): visuals of the archive platform
            var proj = PropLibrary.WallPanelFrame(shell.transform, new Vector3(-W / 2 + 0.4f, 3.4f, 0), 90f, 12f, 6.2f, "ProjectionWall");
            var projScreen = PropLibrary.Mk("Screen", proj.transform,
                ProceduralMesh.Box("ProjScreen", 11.2f, 5.4f, 0.06f), MaterialLibrary.ScreenGlow, new Vector3(0, -0.1f, -0.06f));
            PropLibrary.CaptionPlate(shell.transform, new Vector3(-W / 2 + 1.2f, 1.2f, -4.5f),
                "AUDIO-VISUAL HERITAGE PLATFORM", 3.4f, 0.18f, 90f);

            // ---------- grand timeline (east wall, front facing −x = hall centre)
            var hubTimeline = new List<TimelineEntryDto>
            {
                new() { year = "1891", text = "Born at Mhow, 14 April" },
                new() { year = "1923", text = "D.Sc. London; The Problem of the Rupee" },
                new() { year = "1927", text = "Mahad Satyagraha — the right to water" },
                new() { year = "1932", text = "Poona Pact — reserved seats" },
                new() { year = "1947", text = "First Law Minister; Chairman, Drafting Committee" },
                new() { year = "1949–50", text = "Constitution adopted & in force" },
                new() { year = "1956", text = "Embraces Buddhism at Nagpur; Mahaparinirvan, 6 Dec" },
                new() { year = "1990", text = "Bharat Ratna (posthumous)" },
            };
            BuildTimelineWall(shell.transform, new Vector3(W / 2 - 0.4f, 2.9f, 0), 90f, hubTimeline, "hub");

            // ---------- SIX DOORS on the north wall
            string[] doorOrder = { "early_life", "social_reform", "constitution", "scholarship", "memorials", "legacy" };
            for (int i = 0; i < doorOrder.Length; i++)
            {
                string zid = doorOrder[i];
                float x = -25f + i * 10f;
                var zone = LoadZones()[zid];
                var (root, leafL, leafR, strip, label) = PropLibrary.DoorAssembly(
                    shell.transform, new Vector3(x, 0, D / 2 - 0.3f), zone.title, ZoneAccent[zid]);
                var dc = root.AddComponent<DoorController>();
                dc.zoneId = zid;
                dc.targetScene = ZoneScenes[zid];
                dc.displayName = zone.title;
                dc.description = ZoneShortDesc[zid];
                dc.leafLeft = leafL; dc.leafRight = leafR;
                dc.glowStrip = strip; dc.label3D = label;
                // a soft accent light above each door, aimed at the door
                var lightPos = new Vector3(x, H - 0.4f, D / 2 - 2.4f);
                var aimTo = new Vector3(x, 2.6f, D / 2 - 0.3f);
                PropLibrary.SpotlightFixture(shell.transform, lightPos,
                    Quaternion.LookRotation(aimTo - lightPos).eulerAngles,
                    "door" + i, 1.6f, 9f, ZoneAccent[zid] * 1.2f + WarmDim * 0.4f);
                // door number plaque
                PropLibrary.CaptionPlate(shell.transform, new Vector3(x, 4.1f, D / 2 - 1.0f),
                    $"DOOR {i + 1}", 1.0f, 0.22f);
            }

            // ---------- ceiling motif + entrance arch (south)
            PropLibrary.Mk("Medallion", shell.transform, ProceduralMesh.Torus("Medallion", 3.4f, 0.09f, 40, 8),
                MaterialLibrary.Gold, new Vector3(0, H - 0.05f, 0), new Vector3(90, 0, 0));
            var entArch = PropLibrary.Mk("EntranceArch", shell.transform,
                ProceduralMesh.ArchBand("EntArch", 3.4f, 0.22f, 24), MaterialLibrary.Sandstone,
                new Vector3(0, 4.6f, -D / 2 + 0.35f));
            PropLibrary.Mk("EntPillL", shell.transform, ProceduralMesh.Cylinder("EntPil", 0.32f, 0.38f, 4.6f, 16),
                MaterialLibrary.Sandstone, new Vector3(-3.4f, 0, -D / 2 + 0.35f), default, null, true);
            PropLibrary.Mk("EntPillR", shell.transform, ProceduralMesh.Cylinder("EntPil", 0.32f, 0.38f, 4.6f, 16),
                MaterialLibrary.Sandstone, new Vector3(3.4f, 0, -D / 2 + 0.35f), default, null, true);
            PropLibrary.Mk("EntGlass", shell.transform, ProceduralMesh.Box("EntGlass", 6.4f, 4.6f, 0.05f),
                MaterialLibrary.MakeTransparent(MaterialLibrary.Get("EntGlassM",
                    new Color(0.75f, 0.85f, 0.95f, 0.10f), null, 0.9f)), new Vector3(0, 2.3f, -D / 2 + 0.30f));

            // ---------- seating + planters
            foreach (var z in new[] { -8f, 8f })
            {
                PropLibrary.Bench(shell.transform, new Vector3(-6.4f, 0, z), 0f);
                PropLibrary.Bench(shell.transform, new Vector3(6.4f, 0, z), 180f);
            }
            foreach (var (x, z) in new[] { (-20f, -16f), (20f, -16f), (-20f, 16f), (20f, 16f) })
                PropLibrary.Planter(shell.transform, new Vector3(x, 0, z));

            // ---------- collectibles
            Collect(shell.transform, "quote_motto", new Vector3(-14f, 1.5f, -2f));
            Collect(shell.transform, "quote_article32_ctx", new Vector3(14f, 1.5f, -2f));

            // ---------- ambient dust (disabled by Reduced FX)
            BuildDust(shell.transform, new Vector3(0, 4.5f, 0), new Vector3(W - 8, 8, D - 8));

            // ---------- player, camera, dolly points, intro
            var player = PlacePlayer(scene, new Vector3(0, 0.05f, -16f), 0f, out var pawn);
            var cam = MainCamera(pawn);
            SceneManager_MoveToScene(cam.gameObject, scene);

            // intro dolly: entrance high → medium → behind player
            var introGo = new GameObject("IntroSequence");
            SceneManager_MoveToScene(introGo, scene);
            var intro = introGo.AddComponent<IntroSequence>();
            intro.player = pawn;
            var dolly = new List<Transform>();
            foreach (var (p, i) in new[] { (new Vector3(0, 6.5f, -19f), 0), (new Vector3(5f, 3.4f, -11f), 1), (new Vector3(0, 2.3f, -21f) + Vector3.forward * 0f, 2) })
            {
                var mark = new GameObject($"dolly{i}");
                SceneManager_MoveToScene(mark, scene);
                mark.transform.position = p + pawn.position * (i == 2 ? 1f : 0f);
                if (i == 2) mark.transform.position = pawn.position + pawn.forward * -4.2f + Vector3.up * 2.3f;
                dolly.Add(mark.transform);
            }
            intro.dollyPoints = dolly.ToArray();

            // presentation mode captions
            var pres = new GameObject("PresentationMode");
            SceneManager_MoveToScene(pres, scene);
            pres.AddComponent<PresentationModeController>();

            // UI root + systems glue
            SceneManager_MoveToScene(SceneUIRoot().gameObject, scene);
        }

        private static void Collect(Transform parent, string archiveId, Vector3 pos)
        {
            var c = PropLibrary.CollectibleNode(parent, pos);
            var comp = c.AddComponent<CollectibleInteractable>();
            comp.archiveId = archiveId;
        }

        private static void BuildDust(Transform parent, Vector3 center, Vector3 size)
        {
            var go = new GameObject("DustMotes");
            go.transform.SetParent(parent, false);
            go.transform.position = center;
            var ps = go.AddComponent<ParticleSystem>();
            var main = ps.main;
            main.startLifetime = 9f;
            main.startSpeed = 0.05f;
            main.startSize = new ParticleSystem.MinMaxCurve(0.015f, 0.05f);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 0.95f, 0.8f, 0.10f), new Color(1f, 0.9f, 0.7f, 0.05f));
            main.maxParticles = 90;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            var em = ps.emission; em.rateOverTime = 8f;
            var shape = ps.shape; shape.shapeType = ParticleSystemShapeType.Box; shape.scale = size;
            go.AddComponent<ReducedFxGate>();
        }

        // ============================================================ TIMELINE WALL
        /// <summary>
        /// Row of interactive timeline panels. <paramref name="facingYaw"/> is the yaw each
        /// panel gets so its front (−Z) faces the hall: 90 for the east wall, −90 west, 0 north.
        /// Panels spread along the wall's run direction.
        /// </summary>
        private static void BuildTimelineWall(Transform parent, Vector3 center, float facingYaw,
            List<TimelineEntryDto> entries, string zoneId)
        {
            var wall = new GameObject("TimelineWall_" + zoneId);
            wall.transform.SetParent(parent, false);
            wall.transform.position = center;

            var rot = Quaternion.Euler(0, facingYaw, 0);
            Vector3 front = rot * new Vector3(0, 0, -1);
            Vector3 along = rot * Vector3.right;

            // thin gold rail running the length of the wall
            float railLen = entries.Count * 3.2f;
            var rail = PropLibrary.Mk("Rail", wall.transform,
                ProceduralMesh.Box($"TL_Rail_{zoneId}", 0.10f, 0.06f, railLen),
                MaterialLibrary.Gold, front * 0.10f + Vector3.down * 0.95f);
            rail.transform.localEulerAngles = new Vector3(0, Mathf.Atan2(along.x, along.z) * Mathf.Rad2Deg, 0);

            var ids = new List<string>();
            for (int i = 0; i < entries.Count; i++) ids.Add($"tl_{zoneId}_{i}");

            var font = DHJBootstrap.EnsureTmpFont();
            for (int i = 0; i < entries.Count; i++)
            {
                float s = (i - (entries.Count - 1) / 2f) * 3.2f;
                var frame = PropLibrary.WallPanelFrame(wall.transform, along * s, facingYaw,
                    2.6f, 2.0f, $"TLP_{i}");

                var yearGo = new GameObject("Year");
                yearGo.transform.SetParent(frame.transform, false);
                yearGo.transform.localPosition = new Vector3(0, 0.62f, -0.10f);
                var year = yearGo.AddComponent<TextMeshPro>();
                year.text = entries[i].year;
                year.fontSize = 0.30f; year.fontStyle = FontStyles.Bold;
                year.color = new Color(0.72f, 0.58f, 0.24f);
                year.alignment = TextAlignmentOptions.Center;
                year.rectTransform.sizeDelta = new Vector2(2.4f, 0.45f);
                if (font != null) year.font = font;

                var textGo = new GameObject("Txt");
                textGo.transform.SetParent(frame.transform, false);
                textGo.transform.localPosition = new Vector3(0, -0.18f, -0.10f);
                var txt = textGo.AddComponent<TextMeshPro>();
                txt.text = entries[i].text;
                txt.fontSize = 0.15f;
                txt.color = new Color(0.16f, 0.15f, 0.14f);
                txt.alignment = TextAlignmentOptions.Top;
                txt.rectTransform.sizeDelta = new Vector2(2.4f, 1.3f);
                if (font != null) txt.font = font;

                var comp = frame.AddComponent<TimelinePanelInteractable>();
                comp.panelId = ids[i];
                comp.zoneId = zoneId;
                comp.year = entries[i].year;
                comp.text = entries[i].text;
                comp.allZonePanelIds = new List<string>(ids);
                var col = frame.GetComponentInChildren<BoxCollider>();
                if (col != null) { col.size = new Vector3(2.6f, 2.0f, 0.4f); col.center = new Vector3(0, 0, -0.1f); }
            }
        }

        // ============================================================ GALLERIES
        public static void BuildGalleryScene(Scene scene, ZoneDto zone)
        {
            const float W = 40, D = 30, H = 8;
            var accent = ZoneAccent.TryGetValue(zone.zoneId, out var a) ? a : new Color(0.3f, 0.3f, 0.3f);
            var shell = PropLibrary.RoomShell("GalleryShell_" + zone.zoneId, W, H, D,
                MaterialLibrary.Marble, MaterialLibrary.Sandstone, MaterialLibrary.CeilingMat);
            SceneManager_MoveToScene(shell, scene);
            AddReflectionProbe(shell.transform, W, H, D);
            BuildSkylightAtrium(shell.transform, H, 10f, 10f);

            // zone accent band around the walls
            PropLibrary.Mk("AccentBandN", shell.transform, ProceduralMesh.Box($"AB_{zone.zoneId}", W - 0.2f, 0.35f, 0.1f),
                MaterialLibrary.Get("ZoneBand_" + zone.zoneId, accent, null, 0.4f), new Vector3(0, H - 1.2f, D / 2 - 0.12f));
            PropLibrary.Mk("AccentBandS", shell.transform, ProceduralMesh.Box($"AB_{zone.zoneId}", W - 0.2f, 0.35f, 0.1f),
                MaterialLibrary.Get("ZoneBand_" + zone.zoneId, accent, null, 0.4f), new Vector3(0, H - 1.2f, -D / 2 + 0.12f));
            // center carpet
            PropLibrary.Mk("Carpet", shell.transform, ProceduralMesh.Box($"GCarpet_{zone.zoneId}", W - 12, 0.02f, 6f),
                MaterialLibrary.Carpet, new Vector3(0, 0.012f, -D / 2 + 8f));

            Sun(scene, 0.95f, new Vector3(52, -22, 0));

            // columns (two rows)
            foreach (var z in new[] { -8f, 0f, 8f })
                foreach (var x in new[] { -14f, 14f })
                    PropLibrary.Column(shell.transform, new Vector3(x, 0, z), H - 0.4f, 0.28f);

            // ---------- entry (south): return door + zone title
            var (root, _, _, _, _) = PropLibrary.DoorAssembly(
                shell.transform, new Vector3(0, 0, -D / 2 + 0.3f), "MUSEUM HALL", new Color(0.35f, 0.35f, 0.4f));
            root.AddComponent<HubReturnDoor>();
            // zone title over the entry inside
            PropLibrary.CaptionPlate(shell.transform, new Vector3(0, 5.6f, -D / 2 + 0.9f),
                zone.title, 7.5f, 0.30f);

            // ---------- exhibits placement (kind-aware)
            PlaceExhibits(shell.transform, zone, accent, H);

            // ---------- timeline wall (west, front facing +x = hall centre)
            if (zone.timeline != null && zone.timeline.Count > 0)
                BuildTimelineWall(shell.transform, new Vector3(-W / 2 + 0.45f, 3.0f, 3.5f), -90f,
                    zone.timeline, zone.zoneId);

            // ---------- zone-specific centerpieces
            if (zone.zoneId == "constitution")
            {
                PropLibrary.Mk("ConFloorMedallion", shell.transform,
                    ProceduralMesh.Disc("Con_Medallion", 4.4f, 48), MaterialLibrary.FloorMedallion,
                    new Vector3(0, 0.015f, 3f));
                PropLibrary.StanchionRing(shell.transform, new Vector3(0, 0, 3f), 3.6f, 8, skipSegment: 4);

                var ct = PropLibrary.ConstitutionTable(shell.transform, new Vector3(0, 0, 3f));
                var ctComp = ct.AddComponent<ExhibitInteractable>();
                var e = FindExhibit(zone, "ct_table");
                ctComp.exhibitId = e.id; ctComp.archiveId = e.archiveId; ctComp.kind = e.Kind;
                var ctCol = ct.AddComponent<BoxCollider>();
                ctCol.center = new Vector3(0, 1.0f, 0); ctCol.size = new Vector3(3.4f, 2.2f, 3.4f);
                PropLibrary.SpotlightFixture(shell.transform, new Vector3(0, H - 0.5f, 3f),
                    new Vector3(90, 0, 0), "ct", 3.4f, 12f, Warm);
            }

            if (zone.zoneId == "scholarship")
            {
                // shelf-lined walls + central reading zone
                for (int i = 0; i < 5; i++)
                    PropLibrary.Bookshelf(shell.transform, new Vector3(-16f + i * 8f, 0, D / 2 - 0.7f), 180f);
                for (int i = 0; i < 3; i++)
                    PropLibrary.Bookshelf(shell.transform, new Vector3(-16f + i * 8f, 0, -D / 2 + 6.4f), 0f);
                PropLibrary.Bench(shell.transform, new Vector3(-6f, 0, 2f), 90f);
                PropLibrary.Bench(shell.transform, new Vector3(6f, 0, 2f), -90f);
            }

            // ---------- player + camera + UI
            var player = PlacePlayer(scene, new Vector3(0, 0.05f, -D / 2 + 3f), 0f, out var pawn);
            var cam = MainCamera(pawn);
            SceneManager_MoveToScene(cam.gameObject, scene);
            SceneManager_MoveToScene(SceneUIRoot().gameObject, scene);
        }

        private static ExhibitDto FindExhibit(ZoneDto zone, string id)
        {
            foreach (var e in zone.exhibits) if (e.id == id) return e;
            return new ExhibitDto { id = id, title = id };
        }

        private static void PlaceExhibits(Transform parent, ZoneDto zone, Color accent, float H)
        {
            // dioramas get a dedicated 3×2 grid with a walking corridor
            if (zone.zoneId == "memorials")
            {
                int di = 0;
                foreach (var e in zone.exhibits)
                {
                    var pos = new Vector3(-8f + (di % 3) * 8f, 0, di < 3 ? -5.5f : 5.5f);
                    SpawnExhibit(parent, e, pos, 0f, accent, H, zone.zoneId);
                    di++;
                }
                return;
            }

            // wall panels hug the east wall; everything else freestanding in the
            // north row, then the centre row.
            int east = 0, north = 0, island = 0;
            const float wallX = 40f / 2 - 0.28f;   // panel back against inner wall face
            const float northZ = 30f / 2 - 1.6f;
            foreach (var e in zone.exhibits)
            {
                if (e.id == "ct_table") continue;   // constitution table is the centerpiece
                Vector3 pos; float yaw;
                bool isWallSide = e.Kind == ExhibitKind.WallPanel;
                if (isWallSide && east < 6)
                {
                    pos = new Vector3(wallX, 0, -9f + east * 3.6f);
                    yaw = 90f; east++;          // front −x into the hall
                }
                else if (north < 6)
                {
                    pos = new Vector3(-12.5f + north * 5f, 0, northZ);
                    yaw = 0f; north++;           // front −z (south) into the hall
                }
                else
                {
                    pos = new Vector3(-9f + island * 6f, 0, -2f);
                    yaw = 0f; island++;
                }
                SpawnExhibit(parent, e, pos, yaw, accent, H, zone.zoneId);
            }
        }

        private static void SpawnExhibit(Transform parent, ExhibitDto e, Vector3 pos, float yaw, Color accent, float H, string zoneId)
        {
            GameObject go;
            switch (e.Kind)
            {
                case ExhibitKind.WallPanel:
                    go = PropLibrary.WallPanelFrame(parent, pos + new Vector3(Mathf.Cos(yaw * Mathf.Deg2Rad) * 0f, 2.6f, 0),
                        yaw, 3.4f, 2.6f, "Exhibit_" + e.id);
                    break;
                case ExhibitKind.DisplayCase:
                    go = PropLibrary.DisplayCase(parent, pos, yaw);
                    PropLibrary.SpotlightFixture(parent, pos + new Vector3(0, H - 0.8f, 0),
                        new Vector3(90, 0, 0), e.id, 2.6f, 10f, Warm);
                    break;
                case ExhibitKind.BookDesk:
                    go = PropLibrary.BookDesk(parent, pos, yaw);
                    PropLibrary.SpotlightFixture(parent, pos + new Vector3(0, H - 0.8f, 0),
                        new Vector3(90, 0, 0), e.id, 2.4f, 10f, Warm);
                    break;
                case ExhibitKind.QuizKiosk:
                    go = PropLibrary.Kiosk(parent, pos, yaw, "quiz");
                    // quiz kiosks wear the zone accent
                    PropLibrary.Mk("QuizBand", go.transform, ProceduralMesh.Box("QuizBand", 1.1f, 0.1f, 0.5f),
                        MaterialLibrary.GoldEmissive, new Vector3(0, 1.75f, -0.05f), new Vector3(-16, 0, 0));
                    break;
                case ExhibitKind.ArchiveTerminal:
                    go = PropLibrary.Kiosk(parent, pos, yaw, "archive");
                    break;
                case ExhibitKind.AIConsole:
                    go = PropLibrary.Kiosk(parent, pos, yaw, "guide");
                    // holographic ring above the console
                    var ring = PropLibrary.Mk("HoloRing", go.transform,
                        ProceduralMesh.Torus("HoloRing", 0.5f, 0.03f, 28, 8),
                        MaterialLibrary.ScreenGlow, new Vector3(0, 2.3f, 0));
                    ring.transform.localEulerAngles = new Vector3(0, 0, 0);
                    break;
                case ExhibitKind.MonumentDiorama:
                    go = DioramaFactory.Build(e.diorama, parent, pos);
                    PropLibrary.SpotlightFixture(parent, pos + new Vector3(0, H - 0.8f, 0),
                        new Vector3(90, 0, 0), e.id, 2.8f, 11f, Warm);
                    PropLibrary.CaptionPlate(parent, pos + new Vector3(0, 0.9f, -2.3f),
                        e.title + "\nDigital reconstruction (scale model)", 3.2f, 0.15f);
                    break;
                default: // Pedestal
                    bool isDoc = zoneId is "scholarship" or "social_reform" or "early_life";
                    go = PropLibrary.Pedestal(parent, pos, isDoc ? "document" : "prism");
                    break;
            }

            // caption plate for non-diorama exhibits
            if (e.Kind != ExhibitKind.MonumentDiorama && e.Kind != ExhibitKind.WallPanel)
                PropLibrary.CaptionPlate(parent, pos + new Vector3(0, 0.55f, 0) +
                    Quaternion.Euler(0, yaw, 0) * new Vector3(0, 0, -0.85f), e.title, 2.0f, 0.14f, yaw);
            if (e.Kind == ExhibitKind.WallPanel)
            {
                var font = DHJBootstrap.EnsureTmpFont();
                var tGo = new GameObject("Title");
                tGo.transform.SetParent(go.transform, false);
                tGo.transform.localPosition = new Vector3(0, 1.0f, -0.10f);
                var tmp = tGo.AddComponent<TextMeshPro>();
                tmp.text = e.title.ToUpperInvariant();
                tmp.fontSize = 0.22f; tmp.fontStyle = FontStyles.Bold;
                tmp.color = new Color(0.92f, 0.88f, 0.78f);
                tmp.alignment = TextAlignmentOptions.Center;
                tmp.rectTransform.sizeDelta = new Vector2(3.2f, 0.35f);
                if (font != null) tmp.font = font;
            }

            // interaction wiring
            var comp = go.GetComponent<ExhibitInteractable>() ?? go.AddComponent<ExhibitInteractable>();
            comp.exhibitId = e.id;
            comp.archiveId = e.archiveId;
            comp.kind = e.Kind;
            comp.quizId = e.quizId;
            EnsureInteractCollider(go, e.Kind);
        }

        private static void EnsureInteractCollider(GameObject go, ExhibitKind kind)
        {
            if (go.GetComponentInChildren<Collider>() != null) return;
            var col = go.AddComponent<BoxCollider>();
            col.size = kind switch
            {
                ExhibitKind.MonumentDiorama => new Vector3(4.6f, 3.2f, 4.6f),
                ExhibitKind.WallPanel       => new Vector3(3.4f, 2.6f, 0.6f),
                _                           => new Vector3(1.6f, 2.2f, 1.6f)
            };
            col.center = new Vector3(0, kind == ExhibitKind.MonumentDiorama ? 1.6f : 1.1f, 0);
        }

        // ============================================================ MENU & BOOT
        public static void BuildMenuScene(Scene scene)
        {
            Sun(scene, 1.1f, new Vector3(42, 20, 0));
            RenderSettings.fogDensity = 0.008f;

            var stage = new GameObject("MenuStage");
            SceneManager_MoveToScene(stage, scene);
            AddReflectionProbe(stage.transform, 26f, 8f, 26f);

            PropLibrary.Mk("Floor", stage.transform, ProceduralMesh.Box("MenuFloor", 26, 0.3f, 26),
                MaterialLibrary.Marble, new Vector3(0, -0.15f, 0), default, null, true);
            PropLibrary.Mk("FloorMedallion", stage.transform, ProceduralMesh.Disc("MenuMedDisc", 4.6f, 48),
                MaterialLibrary.FloorMedallion, new Vector3(0, 0.015f, 0));
            PropLibrary.Mk("Medallion", stage.transform, ProceduralMesh.Torus("MenuMed", 4.6f, 0.08f, 40, 8),
                MaterialLibrary.Gold, new Vector3(0, 0.02f, 0));
            foreach (var a in new[] { 0f, 90f, 180f, 270f })
            {
                var rad = a * Mathf.Deg2Rad;
                PropLibrary.Column(stage.transform, new Vector3(Mathf.Sin(rad) * 8.5f, 0, Mathf.Cos(rad) * 8.5f), 7.5f, 0.42f);
            }
            // rotunda portrait as the visual anchor + brass stanchion ring
            PropLibrary.Mk("Dais", stage.transform, ProceduralMesh.Cylinder("MenuDais", 3.4f, 3.7f, 0.3f, 36),
                MaterialLibrary.MarbleBlue, Vector3.zero, default, null, true);
            PropLibrary.StanchionRing(stage.transform, Vector3.zero, 4.35f, 8, skipSegment: 4);
            var portraitSprite = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/Art/Images/portrait_ambedkar_art.png");
            PropLibrary.PortraitDisplay(stage.transform, new Vector3(0, 0.9f, 0), 0f, portraitSprite);
            PropLibrary.SpotlightFixture(stage.transform, new Vector3(0, 7.2f, 2.5f), new Vector3(35, 180, 0),
                "menu", 3.5f, 16f, Warm);
            // distant door facade (the six doors motif)
            PropLibrary.Mk("Facade", stage.transform, ProceduralMesh.Box("MenuFacade", 26, 8, 0.5f),
                MaterialLibrary.Sandstone, new Vector3(0, 4, 9.5f));
            for (int i = 0; i < 6; i++)
            {
                float x = -10f + i * 4f;
                PropLibrary.Mk("DoorVis" + i, stage.transform, ProceduralMesh.Box("MenuDoorVis", 2.2f, 3.6f, 0.2f),
                    MaterialLibrary.DeepBlue, new Vector3(x, 1.8f, 9.2f));
                PropLibrary.Mk("DoorTrim" + i, stage.transform, ProceduralMesh.Box("MenuDoorTrim", 2.5f, 0.12f, 0.24f),
                    MaterialLibrary.Gold, new Vector3(x, 3.7f, 9.2f));
            }

            // camera rig
            var camGo = new GameObject("Main Camera");
            camGo.tag = "MainCamera";
            var cam = camGo.AddComponent<Camera>();
            cam.fieldOfView = 50f;
            cam.allowHDR = true;
            cam.allowMSAA = true;
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = new Color(0.07f, 0.09f, 0.16f);
            camGo.AddComponent<AudioListener>();
            var pivot = new GameObject("MenuPivot");
            SceneManager_MoveToScene(pivot, scene);
            pivot.transform.position = new Vector3(0, 2.2f, 0);
            var rig = camGo.AddComponent<MenuCameraRig>();
            rig.pivot = pivot.transform;
            rig.radius = 11f; rig.height = 3.4f;
            camGo.transform.position = new Vector3(0, 3.4f, -11f);
            SceneManager_MoveToScene(camGo, scene);

            // UI root (no HUD in menu) + controller
            var uiRoot = SceneUIRoot();
            SceneManager_MoveToScene(uiRoot.gameObject, scene);
            uiRoot.gameObject.AddComponent<MainMenuController>();
        }

        public static void BuildBootScene(Scene scene)
        {
            var cam = new GameObject("Main Camera");
            cam.tag = "MainCamera";
            var c = cam.AddComponent<Camera>();
            c.clearFlags = CameraClearFlags.SolidColor;
            c.backgroundColor = new Color(0.03f, 0.04f, 0.08f);
            cam.AddComponent<AudioListener>();
            SceneManager_MoveToScene(cam, scene);
            var li = new GameObject("BootLight");
            li.AddComponent<Light>().intensity = 0.4f;
            SceneManager_MoveToScene(li, scene);
        }

        // ------------------------------------------------------------ content
        private static Dictionary<string, ZoneDto> _zones;

        public static Dictionary<string, ZoneDto> LoadZones()
        {
            if (_zones != null) return _zones;
            _zones = new Dictionary<string, ZoneDto>();
            string path = System.IO.Path.Combine(Application.dataPath, "StreamingAssets/Content/exhibits.json");
            if (!System.IO.File.Exists(path))
            {
                Debug.LogError("[DHJ] exhibits.json missing at " + path);
                return _zones;
            }
            var dto = JsonUtility.FromJson<ZoneListDto>(System.IO.File.ReadAllText(path));
            foreach (var z in dto.zones) _zones[z.zoneId] = z;
            return _zones;
        }
    }
}
