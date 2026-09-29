using System.Collections.Generic;
using System.IO;
using UnityEngine;
using DHJ.Data;

namespace DHJ.Core
{
    /// <summary>
    /// Loads exhibit media: built-in generated artwork first, then any file the
    /// content-import pipeline placed in StreamingAssets/Imported/.
    /// Offline, deterministic, cache-backed.
    /// </summary>
    public static class ContentLoader
    {
        private static readonly Dictionary<string, Sprite> Sprites = new();
        private static readonly Dictionary<string, AudioClip> Clips = new();
        private static readonly Dictionary<string, Texture2D> Textures = new();

        public static Sprite LoadSprite(string mediaRef, ArchiveItemDto item = null)
        {
            string key = string.IsNullOrEmpty(mediaRef) ? item?.id ?? "none" : mediaRef;
            if (Sprites.TryGetValue(key, out var cached)) return cached;

            Sprite result = null;

            // 1) imported file (StreamingAssets/Imported/…)
            if (!string.IsNullOrEmpty(mediaRef))
            {
                var tex = LoadTextureFromFile(mediaRef) ?? LoadTextureFromFile(mediaRef + ".png")
                          ?? LoadTextureFromFile(mediaRef + ".jpg");
                if (tex != null)
                    result = Sprite.Create(tex, new Rect(0, 0, tex.width, tex.height),
                        new Vector2(0.5f, 0.5f), 100f);
            }

            // 2) built-in generated artwork (curated mapping; fallback by media type)
            if (result == null && item != null && AssetLibrary.I != null)
            {
                var l = AssetLibrary.I;
                result = item.id switch
                {
                    "ref_mooknayak" or "ref_mahad_1927" or "legacy_buddhism" => l.manuscript1,
                    "const_preamble" or "const_adoption" or "const_drafting"
                        or "const_fundamental_rights" or "const_lawminister" => l.manuscript3,
                    "book_rupee" or "book_aoc" or "book_wcbs" or "book_buddha"
                        or "quote_motto" or "quote_article32_ctx" => l.manuscript2,
                    "bio_birth_1891" or "edu_columbia" or "edu_lse" => l.portraitArt,
                    _ => string.Equals(item.media?.type, "image", System.StringComparison.OrdinalIgnoreCase)
                        ? l.manuscript1 : null
                };
            }
            if (result == null && AssetLibrary.I != null) result = AssetLibrary.I.manuscript1;

            Sprites[key] = result;
            return result;
        }

        public static Texture2D LoadTextureFromFile(string relativeOrFile)
        {
            if (Textures.TryGetValue(relativeOrFile, out var t)) return t;
            string path = Path.Combine(Application.streamingAssetsPath, "Imported", relativeOrFile);
            if (!File.Exists(path)) return null;
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            if (!tex.LoadImage(File.ReadAllBytes(path))) { Object.Destroy(tex); return null; }
            Textures[relativeOrFile] = tex;
            return tex;
        }

        public static AudioClip LoadAudioClip(string mediaRef)
        {
            if (Clips.TryGetValue(mediaRef, out var c)) return c;
            // teams may additionally drop clips under Assets/Resources/Imported/
            var clip = Resources.Load<AudioClip>("Imported/" + Path.GetFileNameWithoutExtension(mediaRef));
            Clips[mediaRef] = clip;
            return clip;
        }
    }
}
