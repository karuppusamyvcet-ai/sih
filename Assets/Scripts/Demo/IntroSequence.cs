using System.Collections;
using UnityEngine;
using TMPro;
using DHJ.Core;
using DHJ.UI;

namespace DHJ.Demo
{
    /// <summary>
    /// Skippable opening cinematic for the Museum Hub:
    /// black → title → subtitle → fade in over the lobby while the camera dollies
    /// from the entrance toward the character, then control hands over.
    /// </summary>
    public class IntroSequence : MonoBehaviour
    {
        public Transform player;
        public Transform[] dollyPoints;      // set by MuseumBuilder (entrance → approach → behind player)

        private CanvasGroup _fade, _card;
        private TextMeshProUGUI _cardText;
        private GameObject _overlay;
        private bool _skip;

        private void Start()
        {
            if (!GameManager.I.Save.Data.playIntroOnHubEntry)
            {
                GameManager.I.SetState(GameState.Playing);
                enabled = false;
                return;
            }
            BuildOverlay();
            StartCoroutine(Play());
        }

        private void BuildOverlay()
        {
            var ui = UIManager.instance;
            var rt = UIFactory.Stretch(ui.canvas.gameObject, "intro");
            _overlay = rt.gameObject;
            var img = rt.gameObject.AddComponent<UnityEngine.UI.Image>();
            img.color = Color.black;
            _fade = rt.gameObject.AddComponent<CanvasGroup>();

            var cardRt = UIFactory.Rt(rt.gameObject, "card", new Vector2(0.1f, 0.42f), new Vector2(0.9f, 0.62f),
                                      Vector2.zero, Vector2.zero);
            _card = cardRt.gameObject.AddComponent<CanvasGroup>();
            _card.alpha = 0;
            _cardText = cardRt.gameObject.AddComponent<TextMeshProUGUI>();
            _cardText.alignment = TextAlignmentOptions.Center;
            _cardText.fontSize = UITheme.FontSize(UITheme.Title);
            _cardText.color = UITheme.Cream;
            _cardText.fontStyle = FontStyles.Bold;
            if (AssetLibrary.I != null && AssetLibrary.I.mainFont != null) _cardText.font = AssetLibrary.I.mainFont;

            var skip = UIFactory.TextAt(rt.gameObject, "skip",
                GameManager.I.Localization.T("intro.skip"), UITheme.Small, UITheme.Subtle,
                new Vector2(0.3f, 0.03f), new Vector2(0.7f, 0.09f), TextAlignmentOptions.Center, FontStyles.Italic);
        }

        private void Update()
        {
            if (Input.anyKeyDown || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
            {
                // let clicks on UI pass (no UI during intro anyway)
                _skip = true;
            }
        }

        private IEnumerator Play()
        {
            GameManager.I.SetState(GameState.Cinematic);
            if (UIManager.instance != null) UIManager.instance.hud.gameObject.SetActive(false);

            var cam = Camera.main;
            var tpc = cam != null ? cam.GetComponent<Player.ThirdPersonCamera>() : null;
            if (tpc != null) tpc.enabled = false;

            yield return Card("AMBEDKAR", 2.0f);
            yield return Card("THE DIGITAL HERITAGE JOURNEY", 2.0f);
            yield return Card(GameManager.I.Localization.T("app.subtitle"), 2.2f);

            // fade up from black while dollying in
            float dur = 5.0f, t = 0;
            Vector3 lookTarget = player != null ? player.position + Vector3.up * 1.4f : Vector3.zero;
            while (t < dur && !_skip)
            {
                t += Time.deltaTime;
                float k = Mathf.SmoothStep(0, 1, t / dur);
                _fade.alpha = 1f - Mathf.Clamp01(t / (dur * 0.4f));
                if (dollyPoints != null && dollyPoints.Length >= 2 && cam != null)
                {
                    Vector3 pos = Spline(dollyPoints, k);
                    cam.transform.position = pos;
                    cam.transform.rotation = Quaternion.Slerp(cam.transform.rotation,
                        Quaternion.LookRotation(lookTarget - pos), Time.deltaTime * 4f);
                }
                yield return null;
            }

            // hand control back
            _fade.alpha = 0;
            _fade.blocksRaycasts = false;
            if (tpc != null) { tpc.enabled = true; tpc.SnapBehindTarget(); }
            GameManager.I.Save.Data.playIntroOnHubEntry = false;
            GameManager.I.Save.SaveNow();
            GameManager.I.SetState(GameState.Playing);
            if (UIManager.instance != null) UIManager.instance.hud.gameObject.SetActive(true);

            UIManager.instance?.ShowSubtitle(
                "Guide: Welcome to the Digital Ambedkar Heritage Museum. " +
                (GameManager.I.IsTouchPlatform
                    ? "Use the joystick to walk; swipe right side to look around."
                    : "Use W A S D to walk and the mouse to look around.") +
                " The Archive Guide terminal is ahead.", 7f);

            if (_overlay != null) Destroy(_overlay);          // removes only the intro overlay
            Destroy(this);                                     // keep the scene object alive
        }

        private Vector3 Spline(Transform[] pts, float k)
        {
            if (pts.Length == 2) return Vector3.Lerp(pts[0].position, pts[1].position, k);
            float seg = k * (pts.Length - 1);
            int i = Mathf.Clamp(Mathf.FloorToInt(seg), 0, pts.Length - 2);
            return Vector3.Lerp(pts[i].position, pts[i + 1].position, seg - i);
        }

        private IEnumerator Card(string text, float hold)
        {
            _cardText.text = text;
            float t = 0;
            while (t < 0.6f && !_skip) { t += Time.deltaTime; _card.alpha = Mathf.Clamp01(t / 0.6f); yield return null; }
            float h = 0;
            while (h < hold && !_skip) { h += Time.deltaTime; yield return null; }
            t = 0;
            while (t < 0.5f && !_skip) { t += Time.deltaTime; _card.alpha = 1f - Mathf.Clamp01(t / 0.5f); yield return null; }
            _card.alpha = 0;
        }
    }
}
