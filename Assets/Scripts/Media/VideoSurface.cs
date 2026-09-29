using UnityEngine;
using UnityEngine.Video;

namespace DHJ.Media
{
    /// <summary>
    /// Optional exhibit video support: drop an .mp4 into Assets/StreamingAssets/Video/
    /// and set clipFileName on this component (or leave empty with a fallback sprite;
    /// the exhibit system then shows a labelled placeholder instead — spec §57).
    /// Architecture-only component: no video ships with the prototype.
    /// </summary>
    [RequireComponent(typeof(Renderer))]
    public class VideoSurface : MonoBehaviour
    {
        public string clipFileName;               // e.g. "mahad_1927.mp4" in StreamingAssets/Video
        public Sprite fallbackPoster;

        private VideoPlayer _player;
        private RenderTexture _rt;

        private void Start()
        {
            if (string.IsNullOrEmpty(clipFileName)) return;
            string path = System.IO.Path.Combine(Application.streamingAssetsPath, "Video", clipFileName);
#if !UNITY_ANDROID || UNITY_EDITOR
            if (!System.IO.File.Exists(path)) return;      // placeholder path — nothing to play
#endif
            _rt = new RenderTexture(1280, 720, 0);
            _player = gameObject.AddComponent<VideoPlayer>();
            _player.playOnAwake = false;
            _player.isLooping = true;
            _player.renderMode = VideoRenderMode.RenderTexture;
            _player.targetTexture = _rt;
            _player.url = path;
            _player.audioOutputMode = VideoAudioOutputMode.Direct;
            _player.Prepare();
            _player.prepareCompleted += p =>
            {
                GetComponent<Renderer>().material.mainTexture = _rt;
                p.Play();
            };
            _player.errorReceived += (p, msg) =>
            {
                Debug.LogWarning($"[Video] {clipFileName}: {msg}");
                if (fallbackPoster != null) GetComponent<Renderer>().material.mainTexture = fallbackPoster.texture;
            };
        }

        private void OnDestroy()
        {
            if (_rt != null) { _rt.Release(); Destroy(_rt); }
        }
    }
}
