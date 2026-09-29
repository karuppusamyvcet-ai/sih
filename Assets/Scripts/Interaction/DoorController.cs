using System.Collections;
using UnityEngine;
using DHJ.Core;
using TMPro;

namespace DHJ.Interaction
{
    /// <summary>
    /// One of the six gallery doors. Handles label, lock state, open animation
    /// (double-leaf slide), description panel and scene transition.
    /// </summary>
    public class DoorController : Interactable
    {
        [Header("Identity")]
        public string zoneId;
        public string targetScene;
        public string displayName;
        [TextArea] public string description;

        [Header("Wiring (set by MuseumBuilder)")]
        public Transform leafLeft, leafRight;
        public Renderer glowStrip;
        public TMP_Text label3D;

        public bool IsUnlocked => GameManager.I.Quests.IsDoorUnlocked(zoneId);
        private bool _busy;

        public override string Prompt => IsUnlocked
            ? $"Enter: {displayName}"
            : $"{displayName} (Locked)";

        private void Start()
        {
            ApplyState();
            EventBus.Subscribe<MissionStateChanged>(_ => ApplyState());
        }

        private void ApplyState()
        {
            if (glowStrip != null)
                glowStrip.material.color = IsUnlocked
                    ? new Color(0.83f, 0.66f, 0.30f)      // heritage gold
                    : new Color(0.32f, 0.34f, 0.38f);     // dormant grey
            if (label3D != null)
                label3D.text = displayName + (IsUnlocked ? "" : "\n🔒");
        }

        public override void Interact(GameObject player)
        {
            if (_busy) return;
            if (!IsUnlocked)
            {
                GameManager.I.Audio.PlaySfx(AudioSys.SfxId.UiHover);
                UI.UIManager.instance?.Toast(GameManager.I.Localization.T("door.locked"));
                return;
            }
            UI.UIManager.instance?.ShowDoorInfo(this);
        }

        public void BeginEnter()
        {
            if (_busy) return;
            StartCoroutine(OpenAndTravel());
        }

        private IEnumerator OpenAndTravel()
        {
            _busy = true;
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.DoorOpen, transform.position);
            GameManager.I.SetState(GameState.Cinematic);

            // double-leaf slide animation
            float t = 0, dur = 1.1f;
            Vector3 l0 = leafLeft.localPosition, r0 = leafRight.localPosition;
            Vector3 l1 = l0 + leafLeft.right * -1.05f, r1 = r0 + leafRight.right * 1.05f;
            while (t < dur)
            {
                t += Time.deltaTime;
                float k = Mathf.SmoothStep(0, 1, t / dur);
                if (leafLeft)  leafLeft.localPosition  = Vector3.Lerp(l0, l1, k);
                if (leafRight) leafRight.localPosition = Vector3.Lerp(r0, r1, k);
                yield return null;
            }

            yield return new WaitForSeconds(0.35f);
            yield return SceneFlow.SwitchTo(targetScene);

            // arriving in a gallery -> place player at its spawn marker
            var spawn = GameObject.Find("PlayerSpawn");
            var pc = FindObjectOfType<Player.PlayerController>();
            if (pc != null && spawn != null)
            {
                pc.Teleport(spawn.transform.position, spawn.transform.eulerAngles.y);
                Camera.main?.GetComponent<Player.ThirdPersonCamera>()?.SnapBehindTarget();
            }
            GameManager.I.Save.Data.lastScene = targetScene;
            GameManager.I.Save.SaveNow();
            EventBus.Publish(new PlayerZoneEntered { ZoneId = zoneId });
            GameManager.I.SetState(GameState.Playing);
            _busy = false;
        }
    }

    /// <summary>Door back to the museum hub from any gallery (always unlocked).</summary>
    public class HubReturnDoor : Interactable
    {
        public override string Prompt => GameManager.I.Localization.T("door.back");

        public override void Interact(GameObject player) => StartCoroutine(Go());

        private IEnumerator Go()
        {
            GameManager.I.Audio.PlaySfx(AudioSys.SfxId.DoorOpen, transform.position);
            GameManager.I.SetState(GameState.Cinematic);
            yield return SceneFlow.SwitchTo("MuseumHub");
            var spawn = GameObject.Find("PlayerSpawn");
            var pc = FindObjectOfType<Player.PlayerController>();
            if (pc != null && spawn != null)
            {
                pc.Teleport(spawn.transform.position, spawn.transform.eulerAngles.y);
                Camera.main?.GetComponent<Player.ThirdPersonCamera>()?.SnapBehindTarget();
            }
            GameManager.I.Save.Data.lastScene = "MuseumHub";
            GameManager.I.Save.SaveNow();
            EventBus.Publish(new PlayerZoneEntered { ZoneId = "hub" });
            GameManager.I.SetState(GameState.Playing);
        }
    }
}
