import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';

// subtle filmic grade: vignette + slight warm/cool split + grain-free dither
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    vignette: { value: 0.9 },
    warmth: { value: 0.06 },
    contrast: { value: 1.06 },
    saturation: { value: 1.05 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float vignette, warmth, contrast, saturation;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // split tone: warm highlights, cool shadows
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb += vec3(warmth, warmth * 0.55, -warmth * 0.5) * l;
      c.rgb += vec3(-warmth * 0.35, 0.0, warmth * 0.55) * (1.0 - l);
      // contrast + saturation
      c.rgb = (c.rgb - 0.5) * contrast + 0.5;
      float g = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(g), c.rgb, saturation);
      // vignette
      vec2 d = vUv - 0.5;
      float v = 1.0 - dot(d, d) * vignette;
      c.rgb *= clamp(v, 0.0, 1.0);
      gl_FragColor = vec4(c.rgb, 1.0);
    }
  `,
};

/**
 * Cinematic pipeline. Enabled on capable desktops; the mobile/reduced-FX
 * path renders straight to the canvas (cheaper, still looks good thanks to
 * the material/lighting work in world.js).
 */
export function createPostFX(renderer, scene, camera, quality) {
  if (!quality.desktop) return null;      // mobile renders straight to the canvas

  const size = new THREE.Vector2();
  renderer.getSize(size);

  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.addPass(new RenderPass(scene, camera));

  let gtao = null;
  try {
    gtao = new GTAOPass(scene, camera, size.x, size.y);
    gtao.output = GTAOPass.OUTPUT.Default;
    gtao.updateGtaoMaterial({
      radius: 0.55,          // world-space AO radius
      distanceExponent: 1.0,
      thickness: 1.0,
      scale: 1.1,
      samples: quality.shadows ? 16 : 8,
      distanceFallOff: 1.0,
      screenSpaceRadius: false,
    });
    gtao.blendIntensity = 0.85;
    composer.addPass(gtao);
  } catch (e) {
    console.warn('GTAO unavailable, continuing without AO', e);
    gtao = null;
  }

  // soft glow for gold trim, holograms, screens
  const bloom = new UnrealBloomPass(size, 0.42, 0.72, 0.86);
  composer.addPass(bloom);

  composer.addPass(new OutputPass());

  const grade = new ShaderPass(GradeShader);
  grade.renderToScreen = true;
  composer.addPass(grade);

  return {
    composer, bloom, gtao, grade,
    setSize(w, h) {
      composer.setSize(w, h);
      if (gtao) gtao.setSize(w, h);
      bloom.setSize(w, h);
    },
    render(dt) { composer.render(dt); },
    setReduced(on) {
      if (gtao) gtao.enabled = !on;
      bloom.enabled = !on;
      grade.uniforms.vignette.value = on ? 0.5 : 0.9;
    },
    dispose() { composer.dispose(); },
  };
}
