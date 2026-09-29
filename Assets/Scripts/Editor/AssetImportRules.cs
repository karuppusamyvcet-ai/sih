using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Automatic import settings for the procedurally generated assets:
    /// UI/Images PNGs -> Sprites (rounded ones sliced for 9-slice panels),
    /// *_n.png in Textures -> Tangent-space NormalMap with anisotropic filtering,
    /// Albedo textures -> Repeat + mipmaps + anisotropic filtering (anisoLevel 8),
    /// WAVs kept as streaming-friendly clips.
    /// </summary>
    public class AssetImportRules : AssetPostprocessor
    {
        private void OnPreprocessTexture()
        {
            string path = assetPath.Replace('\\', '/');
            if (path.Contains("Assets/Art/UI/") || path.Contains("Assets/Art/Images/"))
            {
                var ti = (TextureImporter)assetImporter;
                ti.textureType = TextureImporterType.Sprite;
                ti.spriteImportMode = SpriteImportMode.Single;
                ti.alphaIsTransparency = true;
                ti.mipmapEnabled = false;
                ti.filterMode = FilterMode.Bilinear;
                int border = 0;
                if (path.EndsWith("ui_rounded.png") || path.EndsWith("ui_rounded_gold.png")) border = 8;
                else if (path.EndsWith("ui_rounded_soft.png")) border = 18;
                if (border > 0) ti.spriteBorder = new Vector4(border, border, border, border);
                ti.maxTextureSize = 1024;
            }
            else if (path.Contains("Assets/Art/Textures/"))
            {
                var ti = (TextureImporter)assetImporter;
                bool isNormal = path.EndsWith("_n.png");
                ti.textureType = isNormal ? TextureImporterType.NormalMap : TextureImporterType.Default;
                ti.wrapMode = TextureWrapMode.Repeat;
                ti.mipmapEnabled = true;
                ti.filterMode = FilterMode.Trilinear;
                ti.anisoLevel = 8;
                ti.maxTextureSize = 1024;
            }
        }

        private void OnPreprocessAudio()
        {
            var ai = (AudioImporter)assetImporter;
            var s = ai.defaultSampleSettings;
            bool isLoop = assetPath.Contains("/Music/") || assetPath.Contains("/Ambience/");
            s.loadType = isLoop ? AudioClipLoadType.Streaming : AudioClipLoadType.DecompressOnLoad;
            s.compressionFormat = isLoop ? AudioCompressionFormat.Vorbis : AudioCompressionFormat.PCM;
            s.quality = 0.85f;
            ai.defaultSampleSettings = s;
        }
    }
}
