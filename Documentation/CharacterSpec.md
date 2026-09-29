# Character Technical Specification — Dr. B. R. Ambedkar (player character)

> **Status:** the values below are what the generator currently produces. They are
> driven by one asset, `Assets/Data/Characters/AmbedkarStyle.asset`
> (`CharacterStyleConfig`). The character sheet image was **not attached** to the
> session that wrote this file, so these values have **not** been re-checked against
> it. Before a public demo, compare the in-game model with the sheet (front, side,
> 3/4) and adjust the config (see "Calibrating to the sheet").

## Master reference
The supplied character sheet is the only visual authority for face, hairstyle,
glasses, body proportions, skin tone and costume. The model must stay a realistic,
respectful likeness: no anime, cartoon, superhero, fantasy or futuristic styling,
and no costume change without a narrative reason.

## Current specification

| Area | Value in `CharacterStyleConfig` / `CharacterFactory` |
|---|---|
| Height | 1.72 m (all body measurements are scaled from this) |
| Build / head scale | 1.0 / 1.0 (range 0.85–1.2 and 0.9–1.1) |
| Skin | warm brown, base `(0.45, 0.32, 0.24)`, shade `(0.42, 0.30, 0.22)` |
| Hair | near-black, short |
| Facial hair | `hasMustache = true` (**verify against the sheet; disable if the sheet shows a clean-shaven face**) |
| Glasses | round thin-rim spectacles, dark frame, lens radius 0.030 m, translucent lens material |
| Jacket | deep navy worsted wool, tiled fabric texture + normal map |
| Shirt | white |
| Tie | patterned red / maroon `(0.55, 0.18, 0.20)` |
| Trousers | navy, matching suit fabric |
| Shoes | black leather Oxford style |
| Extras | breast-pocket kerchief and pen |

## Materials (PBR)
Skin, Skin_Shade, Lip_Tone, Hair, Char_Suit_Wool, Char_Suit_Dark, Shirt_White,
Tie_Red, Char_Trousers_Wool, Char_Shoes_Leather, Glasses_Frame, Glasses_Lens.
Each garment has its own material, so colours can be tuned independently.

## Rig and animation
Humanoid bone hierarchy built in code (Hips, Spine, Chest, Neck, Head, shoulders,
forearms, hands, thighs, shins, feet). `AnimationFactory` generates the clips and
the Animator Controller (idle, breathing idle, walk, run, interact, read, talk,
examine, and the other gesture states). `CharacterRealismDriver` adds blinking,
gaze and light cloth motion. `CharacterAnimatorDriver` connects the controller to
`PlayerController`.

## Calibrating to the sheet
1. Run **DHJ → 2 · Build Everything** once so the prefab and the config asset exist.
2. Select `Assets/Data/Characters/AmbedkarStyle.asset`.
3. Sample the colours from the sheet, and set height, build, mustache and glasses
   flags to match.
4. Run **DHJ → 2 · Build Everything** again to regenerate
   `Assets/Prefabs/Player/Ambedkar_Player.prefab`.
5. Review the model from the front, the side, a 3/4 angle, the gameplay camera and
   an exhibit inspection camera.

For a higher-fidelity likeness, replace the procedural mesh with a sculpted model
(any Humanoid-rigged FBX). Assign it as a child of `Ambedkar_Player`, keep the
Animator Controller, and remove the generated `Model` child.
