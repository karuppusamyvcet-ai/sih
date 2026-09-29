using System;
using System.Linq;
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;

namespace DHJ.EditorTools
{
    /// <summary>
    /// Menu + command-line build entry points (single codebase, two targets).
    ///
    /// Windows:  Builds/Windows/AmbedkarDigitalHeritage.exe   (x64, IL2CPP)
    /// Android:  Builds/Android/AmbedkarDigitalHeritage.apk   (ARM64, IL2CPP, minSdk 26)
    ///
    /// Menu builds use whatever scenes are already generated.
    /// CI builds (BuildWindowsCI / BuildAndroidCI) are for a fresh clone: they run
    /// "Prepare Project" and "Build Everything" first, then build, then exit the
    /// editor with code 0 on success or 1 on failure:
    ///
    ///   Unity -batchmode -nographics -projectPath . -executeMethod DHJ.EditorTools.BuildScript.BuildWindowsCI -logFile build_win.log
    ///   Unity -batchmode -nographics -projectPath . -executeMethod DHJ.EditorTools.BuildScript.BuildAndroidCI -logFile build_android.log
    ///
    /// Set the environment variable DHJ_ANDROID_ID (for example com.myteam.ambedkardigitalheritage)
    /// to override the default Android application id without editing code.
    /// </summary>
    public static class BuildScript
    {
        public const string WindowsOutput = "Builds/Windows/AmbedkarDigitalHeritage.exe";
        public const string AndroidOutput = "Builds/Android/AmbedkarDigitalHeritage.apk";

        [MenuItem("DHJ/5 · Build ➤ Windows (x64)", false, 50)]
        public static void BuildWindows() => Build(BuildTarget.StandaloneWindows64);

        [MenuItem("DHJ/6 · Build ➤ Android (APK, ARM64)", false, 51)]
        public static void BuildAndroid() => Build(BuildTarget.Android);

        /// <summary>Headless: prepare + generate + build Windows, then exit(0/1).</summary>
        public static void BuildWindowsCI() => RunCI(BuildTarget.StandaloneWindows64);

        /// <summary>Headless: prepare + generate + build Android, then exit(0/1).</summary>
        public static void BuildAndroidCI() => RunCI(BuildTarget.Android);

        private static void RunCI(BuildTarget target)
        {
            bool ok = false;
            try
            {
                DHJBootstrap.PrepareAll();
                SceneBuilder.BuildAllScenes();
                ok = Build(target);
            }
            catch (Exception ex)
            {
                Debug.LogError("[DHJ] CI build threw: " + ex);
            }
            EditorApplication.Exit(ok ? 0 : 1);
        }

        private static bool Build(BuildTarget target)
        {
            if (!ProjectValidator.Validate())
                Debug.LogWarning("[DHJ] proceeding despite validation warnings");

            var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();
            if (scenes.Length == 0)
            {
                Debug.LogError("[DHJ] no scenes in build settings — run DHJ ▸ 2 · Build Everything first");
                return false;
            }

            string output;
            if (target == BuildTarget.Android)
            {
                ConfigureAndroid();
                output = AndroidOutput;
            }
            else
            {
                PlayerSettings.SetScriptingBackend(NamedBuildTarget.Standalone, ScriptingImplementation.IL2CPP);
                PlayerSettings.SetIl2CppCodeGeneration(NamedBuildTarget.Standalone, Il2CppCodeGeneration.OptimizeSize);
                output = WindowsOutput;
            }

            var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
            {
                scenes = scenes,
                locationPathName = output,
                target = target,
                options = BuildOptions.None
            });
            return Report(report, target == BuildTarget.Android ? "Android" : "Windows");
        }

        private static void ConfigureAndroid()
        {
            PlayerSettings.SetScriptingBackend(NamedBuildTarget.Android, ScriptingImplementation.IL2CPP);
            PlayerSettings.Android.targetArchitectures = AndroidArchitecture.ARM64;
            PlayerSettings.Android.minSdkVersion = AndroidSdkVersions.AndroidApiLevel26;
            PlayerSettings.Android.targetSdkVersion = AndroidSdkVersions.AndroidApiLevelAuto;
            PlayerSettings.Android.bundleVersionCode = 1;
            PlayerSettings.defaultInterfaceOrientation = UIOrientation.AutoRotation;
            PlayerSettings.allowedAutorotateToPortrait = false;
            PlayerSettings.allowedAutorotateToPortraitUpsideDown = false;
            PlayerSettings.allowedAutorotateToLandscapeLeft = true;
            PlayerSettings.allowedAutorotateToLandscapeRight = true;
            EditorUserBuildSettings.buildAppBundle = false;

            var id = Environment.GetEnvironmentVariable("DHJ_ANDROID_ID");
            if (!string.IsNullOrWhiteSpace(id))
                PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.Android, id.Trim());
        }

        private static bool Report(BuildReport report, string platform)
        {
            var s = report.summary;
            if (s.result == BuildResult.Succeeded)
            {
                Debug.Log($"[DHJ] {platform} build OK → {s.outputPath}  ({s.totalSize / (1024 * 1024)} MB, {s.totalTime})");
                return true;
            }
            Debug.LogError($"[DHJ] {platform} build FAILED: {s.result}; errors: {s.totalErrors}");
            return false;
        }
    }
}
