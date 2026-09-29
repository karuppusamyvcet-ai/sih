using System.Collections.Generic;
using UnityEngine;
using TMPro;
using DHJ.AudioSys;

namespace DHJ.UI
{
    /// <summary>
    /// Scene-side catalog of generated art/audio assets. The editor SceneBuilder
    /// fills every reference from the generated Assets tree, so runtime code never
    /// touches AssetDatabase or Resources and nothing can arrive unassigned.
    /// </summary>
    public class AssetLibrary : MonoBehaviour
    {
        public static AssetLibrary I { get; private set; }

        [Header("Fonts")]
        public TMP_FontAsset mainFont;

        [Header("UI Sprites")]
        public Sprite rounded, roundedSoft, roundedGold, circleSprite, ringSprite,
                      arrowSprite, glowSprite, pinSprite;

        [Header("Exhibit Images")]
        public Sprite portraitArt, manuscript1, manuscript2, manuscript3, bookSpines;

        [Header("Audio")]
        public AudioClip musicTheme, hallAmbience;
        public AudioClip uiClick, uiHover, quizCorrect, quizIncorrect, doorOpen,
                         pageTurn, pickup, objectiveNew, exhibitOpen, footstep, achievement;

        private readonly Dictionary<string, Sprite> _imageByRef = new();

        private void Awake()
        {
            I = this;
            _imageByRef["Art/Images/portrait_ambedkar_art"]  = portraitArt;
            _imageByRef["Art/Images/manuscript_placeholder_1"] = manuscript1;
            _imageByRef["Art/Images/manuscript_placeholder_2"] = manuscript2;
            _imageByRef["Art/Images/manuscript_placeholder_3"] = manuscript3;
            _imageByRef["Art/Images/book_spines"] = bookSpines;
        }

        private void Start()
        {
            var gm = Core.GameManager.I;
            if (gm != null)
            {
                gm.Audio.RegisterSfx(SfxId.UiClick, uiClick);
                gm.Audio.RegisterSfx(SfxId.UiHover, uiHover);
                gm.Audio.RegisterSfx(SfxId.QuizCorrect, quizCorrect);
                gm.Audio.RegisterSfx(SfxId.QuizIncorrect, quizIncorrect);
                gm.Audio.RegisterSfx(SfxId.DoorOpen, doorOpen);
                gm.Audio.RegisterSfx(SfxId.PageTurn, pageTurn);
                gm.Audio.RegisterSfx(SfxId.Pickup, pickup);
                gm.Audio.RegisterSfx(SfxId.ObjectiveNew, objectiveNew);
                gm.Audio.RegisterSfx(SfxId.ExhibitOpen, exhibitOpen);
                gm.Audio.RegisterSfx(SfxId.Footstep, footstep);
                gm.Audio.RegisterSfx(SfxId.Achievement, achievement);
                gm.Audio.PlayMusic(musicTheme);
                gm.Audio.PlayAmbience(hallAmbience);
            }
        }

        public Sprite ImageFor(string archiveMediaRef) =>
            archiveMediaRef != null && _imageByRef.TryGetValue(archiveMediaRef, out var s) ? s : null;

        private void OnDestroy() { if (I == this) I = null; }
    }
}
