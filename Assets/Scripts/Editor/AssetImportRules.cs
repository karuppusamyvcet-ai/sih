using UnityEngine;
using UnityEditor;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Automatic import settings for the procedurally generated assets:
    /// UI/Images PNGs -> Sprites (rounded ones sliced for 9-slice panels),
    /// WAVs kept as streaming-friendly compressed clips.
    /// This runs before any generation menu command, so no .meta hand-editing.
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
                int border = 0;
                if (path.EndsWith("ui_rounded.png") || path.EndsWith("ui_rounded_gold.png")) border = 8;
                else if (path.EndsWith("ui_rounded_soft.png")) border = 18;
                if (border > 0) ti.spriteBorder = new Vector4(border, border, border, border);
                ti.maxTextureSize = 1024;
            }
            else if (path.Contains("Assets/Art/Textures/"))
            {
                var ti = (TextureImporter)assetImporter;
                ti.wrapMode = TextureWrapMode.Repeat;
                ti.mipmapEnabled = true;
                ti.maxTextureSize = 1024;
            }
        }

        private void OnPreprocessAudio()
        {
            var ai = (AudioImporter)assetImporter;
            var s = ai.defaultSampleSettings;
            s.loadType = AudioClipLoadType.DecompressOnLoad;
            s.compressionFormat = AudioCompressionFormat.PCM;
            ai.defaultSampleSettings = s;
        }
    }
}
