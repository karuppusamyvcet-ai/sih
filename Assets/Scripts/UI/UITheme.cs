using UnityEngine;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>
    /// Museum design system: deep blue + cream + gold, heritage but modern.
    /// High-contrast accessibility variant swaps panels/text programmatically.
    /// </summary>
    public static class UITheme
    {
        public static Color BgInk        => HC ? new Color(0.02f, 0.02f, 0.03f, 0.98f)
                                               : new Color(0.055f, 0.068f, 0.125f, 0.94f);  // ~#0E1120
        public static Color Panel        => HC ? new Color(0.00f, 0.00f, 0.00f, 0.99f)
                                               : new Color(0.10f, 0.125f, 0.21f, 0.97f);    // #1A2036
        public static Color PanelSoft    => HC ? new Color(0.10f, 0.10f, 0.10f, 1f)
                                               : new Color(0.16f, 0.19f, 0.30f, 0.95f);     // #29304D
        public static Color Gold         => HC ? new Color(1.00f, 0.95f, 0.35f, 1f)
                                               : new Color(0.83f, 0.66f, 0.30f, 1f);        // #D4A84C
        public static Color GoldDim      => new Color(0.83f, 0.66f, 0.30f, 0.35f);
        public static Color Cream        => HC ? Color.white
                                               : new Color(0.925f, 0.89f, 0.80f, 1f);       // #ECE3CC
        public static Color White        => HC ? Color.white
                                               : new Color(0.96f, 0.96f, 0.98f, 1f);
        public static Color Subtle       => HC ? Color.white
                                               : new Color(0.68f, 0.71f, 0.79f, 1f);
        public static Color Accent       => new Color(0.45f, 0.30f, 0.28f, 1f);
        public static Color Correct      => new Color(0.36f, 0.78f, 0.51f, 1f);
        public static Color Wrong        => new Color(0.83f, 0.42f, 0.40f, 1f);
        public static Color Scrim        => new Color(0.02f, 0.02f, 0.05f, 0.72f);

        public static bool HC => GameManager.I != null && GameManager.I.Settings.Data.highContrast;

        public static float TextScale => GameManager.I != null ? GameManager.I.Settings.Data.textScale : 1f;

        public static int FontSize(int baseSize) => Mathf.RoundToInt(baseSize * TextScale);

        // typography scale (base sizes pre-scale)
        public const int Title = 44, H1 = 32, H2 = 24, Body = 18, Small = 15, Tiny = 13;
    }
}
