using UnityEngine;

namespace DHJ.Core
{
    /// <summary>Disables the attached particle systems / extra lights when the
    /// player's accessibility setting "Reduced Visual Effects" is on.</summary>
    public class ReducedFxGate : MonoBehaviour
    {
        private void OnEnable()
        {
            Apply();
            EventBus.Subscribe<AccessibilityChanged>(_ => Apply());
        }

        private void Apply()
        {
            bool reduced = GameManager.I != null && GameManager.I.Settings.Data.reducedFx;
            foreach (var ps in GetComponentsInChildren<ParticleSystem>(true))
                ps.gameObject.SetActive(!reduced);
        }
    }
}
