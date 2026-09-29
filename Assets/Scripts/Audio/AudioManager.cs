using System.Collections.Generic;
using UnityEngine;
using DHJ.Core;

namespace DHJ.AudioSys
{
    public enum SfxId { UiClick, UiHover, QuizCorrect, QuizIncorrect, DoorOpen, PageTurn, Pickup, ObjectiveNew, ExhibitOpen, Footstep, Achievement }

    /// <summary>
    /// Central audio: category volumes (master/music/voice/sfx) applied directly to
    /// sources — no AudioMixer asset required, so nothing can arrive "missing".
    /// Clips are found by convention under Assets/Audio (loaded via Resources-lite
    /// path resolution from generated scene references; see SceneAudio in scenes).
    /// </summary>
    public class AudioManager : MonoBehaviour
    {
        private AudioSource _music, _ambience, _voice;
        private readonly Dictionary<SfxId, AudioClip> _sfx = new();

        public void Initialize()
        {
            _music    = Source("Music", loop: true, spatial: false);
            _ambience = Source("Ambience", loop: true, spatial: false);
            _voice    = Source("Voice", loop: false, spatial: false);
            ApplyVolumes();
            EventBus.Subscribe<AccessibilityChanged>(_ => ApplyVolumes());
        }

        private AudioSource Source(string name, bool loop, bool spatial)
        {
            var go = new GameObject($"Audio_{name}");
            go.transform.SetParent(transform, false);
            var s = go.AddComponent<AudioSource>();
            s.loop = loop; s.playOnAwake = false;
            s.spatialBlend = spatial ? 1f : 0f;
            return s;
        }

        public void RegisterSfx(SfxId id, AudioClip clip)
        {
            if (clip != null) _sfx[id] = clip;
        }

        public void ApplyVolumes()
        {
            var s = GameManager.I.Settings.Data;
            AudioListener.volume = s.master;
            if (_music)    _music.volume    = s.music;
            if (_ambience) _ambience.volume = s.music * 0.6f;
            if (_voice)    _voice.volume    = s.voice;
        }

        public void PlayMusic(AudioClip clip)
        {
            if (clip == null) return;
            if (_music.clip == clip && _music.isPlaying) return;
            _music.clip = clip; _music.Play();
        }

        public void PlayAmbience(AudioClip clip)
        {
            if (clip == null) return;
            if (_ambience.clip == clip && _ambience.isPlaying) return;
            _ambience.clip = clip; _ambience.Play();
        }

        public void PlayVoice(AudioClip clip)
        {
            if (clip == null || !GameManager.I.Settings.Data.narration) return;
            _voice.clip = clip; _voice.Play();
        }

        public void PlaySfx(SfxId id, Vector3? pos = null, float pitch = 1f)
        {
            if (!_sfx.TryGetValue(id, out var clip) || clip == null) return;
            float v = GameManager.I.Settings.Data.sfx;
            if (pos.HasValue)
            {
                AudioSource.PlayClipAtPoint(clip, pos.Value, v);
            }
            else
            {
                var go = new GameObject("sfx_oneshot");
                go.transform.SetParent(transform, false);
                var src = go.AddComponent<AudioSource>();
                src.clip = clip; src.volume = v; src.pitch = pitch; src.spatialBlend = 0f;
                src.Play();
                Destroy(go, clip.length / Mathf.Max(0.01f, pitch) + 0.1f);
            }
        }
    }
}
