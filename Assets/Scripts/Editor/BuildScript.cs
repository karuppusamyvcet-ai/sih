using System.Linq;
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Command-line + menu build entry points.
    /// Windows:  Builds/Windows/AmbedkarDigitalHeritage.exe
    /// Android:  Builds/Android/AmbedkarDigitalHeritage.apk  (IL2CPP, ARM64)
    /// CI:  Unity -batchmode -executeMethod DHJ.EditorTools.BuildScript.BuildWindows
    ///      Unity -batchmode -executeMethod DHJ.EditorTools.BuildScript.BuildAndroid
    /// </summary>
    public static class BuildScript
    {
        [MenuItem("DHJ/5 · Build ➤ Windows (x64)", false, 50)]
        public static void BuildWindows()
        {
            if (!ProjectValidator.Validate()) Debug.LogWarning("[DHJ] proceeding despite validation warnings");
            var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();
            if (scenes.Length == 0) { Debug.LogError("[DHJ] no scenes in build settings — run DHJ ▸ Build All Scenes"); return; }

            PlayerSettings.SetScriptingBackend(NamedBuildTarget.Standalone, ScriptingImplementation.IL2CPP);
            PlayerSettings.SetIl2CppCodeGeneration(NamedBuildTarget.Standalone, Il2CppCodeGeneration.OptimizeSize);

            var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
            {
                scenes = scenes,
                locationPathName = "Builds/Windows/AmbedkarDigitalHeritage.exe",
                target = BuildTarget.StandaloneWindows64,
                options = BuildOptions.None
            });
            Report(report, "Windows");
        }

        [MenuItem("DHJ/6 · Build ➤ Android (APK, ARM64)", false, 51)]
        public static void BuildAndroid()
        {
            if (!ProjectValidator.Validate()) Debug.LogWarning("[DHJ] proceeding despite validation warnings");
            var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();
            if (scenes.Length == 0) { Debug.LogError("[DHJ] no scenes in build settings — run DHJ ▸ Build All Scenes"); return; }

            PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel24;
            PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevelAuto;
            PlayerSettings.Android.bundleVersionCode = 1;
            AndroidBuildApkSymbols(false);
            EditorUserBuildSettings.buildAppBundle = false;

            var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
            {
                scenes = scenes,
                locationPathName = "Builds/Android/AmbedkarDigitalHeritage.apk",
                target = BuildTarget.Android,
                options = BuildOptions.None
            });
            Report(report, "Android");
        }

        private static void AndroidBuildApkSymbols(bool _) { /* symbols disabled for compact builds */ }

        private static void Report(BuildReport report, string platform)
        {
            var s = report.summary;
            if (s.result == BuildResult.Succeeded)
                Debug.Log($"[DHJ] 🎉 {platform} build OK → {s.outputPath}  ({s.totalSize / (1024 * 1024)} MB, {s.totalTime})");
            else
                Debug.LogError($"[DHJ] {platform} build FAILED: {s.result}; errors: {s.totalErrors}");
        }
    }
}
