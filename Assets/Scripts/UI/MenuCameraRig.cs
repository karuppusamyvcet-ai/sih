using UnityEngine;
using DHJ.Core;

namespace DHJ.UI
{
    /// <summary>Slow cinematic orbit used by the Main Menu vignette.</summary>
    public class MenuCameraRig : MonoBehaviour
    {
        public Transform pivot;
        public float radius = 9f, height = 3.2f, degreesPerSecond = 4.5f;
        private float _angle;

        private void Update()
        {
            if (pivot == null) return;
            _angle += degreesPerSecond * Time.deltaTime;
            float rad = _angle * Mathf.Deg2Rad;
            Vector3 pos = pivot.position + new Vector3(Mathf.Sin(rad) * radius, height, Mathf.Cos(rad) * radius);
            transform.position = Vector3.Lerp(transform.position, pos, Time.deltaTime * 2f);
            var look = Quaternion.LookRotation(pivot.position + Vector3.up * 1.2f - transform.position);
            transform.rotation = Quaternion.Slerp(transform.rotation, look, Time.deltaTime * 2f);
        }
    }
}
