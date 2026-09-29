"use client";

import { useRef, useEffect } from "react";
import {
  WebGLRenderer,
  SRGBColorSpace,
  Scene,
  OrthographicCamera,
  PlaneGeometry,
  TextureLoader,
  LinearMipmapLinearFilter,
  Vector2,
  ShaderMaterial,
  Mesh,
} from "three";
import { useReducedMotion } from "@/components/ReducedMotion";
import { PHOTOS, photoUrl } from "@/lib/photos";
const o = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  l = (e) => e * e * (3 - 2 * e),
  u = `
precision highp float;
uniform sampler2D uMap;
uniform vec2 uRepeat;
uniform vec2 uOffset;
uniform float uOpacity;
uniform float uRadius;
uniform float uAspect;
uniform float uExposure;
uniform float uLift;
varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  vec2 half_ = vec2(uAspect, 1.0) * 0.5 - uRadius;
  vec2 q = abs(p) - half_;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;
  float aa = fwidth(d);
  float mask = 1.0 - smoothstep(-aa, aa, d);
  vec4 c = texture2D(uMap, vUv * uRepeat + uOffset);
  vec3 rgb = clamp(c.rgb * uExposure + uLift, 0.0, 1.0);
  gl_FragColor = vec4(rgb, c.a * mask * uOpacity);
}`,
  c = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
  h = (e, t, i) => Math.min(i, Math.max(t, e));
function ImageHelix({ stageId: e, className: d }: any) {
  const p = useRef(null),
    f = useReducedMotion();
  useEffect(() => {
    const t = p.current,
      i = document.getElementById(e);
    if (t && i)
      return (function (e, t, i) {
        const n = new WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        n.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        n.outputColorSpace = SRGBColorSpace;
        n.setClearColor(0, 0);
        n.sortObjects = true;
        const d = n.domElement;
        d.className = "absolute inset-0 block size-full";
        d.classList.add("opacity-0", "transition-opacity", "duration-400", "ease-[ease]");
        d.setAttribute("aria-hidden", "true");
        e.appendChild(d);
        const p = new Scene(),
          f = new OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
        f.position.z = 10;
        const m = new PlaneGeometry(0.86, 1),
          g = n.capabilities.getMaxAnisotropy(),
          v = new TextureLoader();
        v.setCrossOrigin("anonymous");
        let _ = PHOTOS.map(() => null),
          x = PHOTOS.map(
            (e, t) =>
              new Promise<void>((i) => {
                v.load(
                  photoUrl(e, 640),
                  (e) => {
                    e.colorSpace = SRGBColorSpace;
                    e.minFilter = LinearMipmapLinearFilter;
                    e.generateMipmaps = true;
                    e.anisotropy = g;
                    _[t] = e;
                    i();
                  },
                  undefined,
                  () => i(),
                );
              }),
          ),
          y = (e, t) => {
            const i = t.image,
              n = i?.width && i?.height ? i.width / i.height : 0.86,
              a = new Vector2(1, 1),
              s = new Vector2(0, 0);
            n > 0.86 ? ((a.x = 0.86 / n), (s.x = (1 - a.x) / 2)) : ((a.y = n / 0.86), (s.y = (1 - a.y) / 2));
            const o = e.mesh.material.uniforms;
            if (o.uMap) {
              o.uMap.value = t;
            }
            if (o.uRepeat) {
              o.uRepeat.value = a;
            }
            if (o.uOffset) {
              o.uOffset.value = s;
            }
          },
          S = 0,
          M = (e) => {
            for (let t = 0; t < PHOTOS.length; t++) {
              const i = (S + t) % PHOTOS.length,
                n = _[i];
              if (n) return ((S = i + 1), y(e, n), true);
            }
            return false;
          },
          b = [];
        for (let e = 0; e < 96; e++) {
          const t = new ShaderMaterial({
              vertexShader: c,
              fragmentShader: u,
              transparent: true,
              depthWrite: false,
              uniforms: {
                uMap: {
                  value: null,
                },
                uRepeat: {
                  value: new Vector2(1, 1),
                },
                uOffset: {
                  value: new Vector2(0, 0),
                },
                uOpacity: {
                  value: 0,
                },
                uRadius: {
                  value: 0.1,
                },
                uAspect: {
                  value: 0.86,
                },
                uExposure: {
                  value: 1.1,
                },
                uLift: {
                  value: 0.03,
                },
              },
            }),
            i = new Mesh(m, t);
          i.visible = false;
          p.add(i);
          b.push({
            mesh: i,
            index: e,
            lap: -1,
            pending: true,
          });
        }
        let E = 1,
          T = 1,
          w = {
            card: 80,
            spacing: 50,
            amp: 200,
            turn: 1600,
            axis: 300,
            span: 1600,
            count: 0,
          },
          A = () => {
            const i = e.getBoundingClientRect();
            E = Math.max(1, i.width);
            const r = t.getBoundingClientRect();
            T = Math.max(1, i.height);
            const a = h(0.1 * E, 84, 150),
              s = 0.86 * a * 0.55,
              o = E + 1.1 * a * 2,
              l = Math.min(96, Math.ceil(o / s) + 1),
              u = h(0.09 * E, 80, 140);
            for (const e of ((w = {
              card: a,
              spacing: s,
              amp: u,
              turn: 1e3,
              axis: r.top - i.top + r.height * (E < 640 ? -0.15 : 0.5) - (1.1 * a) / 2 - u,
              span: o,
              count: l,
            }),
            b))
              e.mesh.visible = e.index < l;
            const c = E < 640,
              d = r.top - i.top,
              p = d - (c ? 120 : 200),
              m = d + 0.3 * r.height,
              g = (e) => `${p + (m - p) * e}px`,
              v = `linear-gradient(to bottom, #000 ${g(0)}, rgba(0,0,0,0.9) ${g(0.25)}, rgba(0,0,0,0.5) ${g(0.5)}, rgba(0,0,0,0.1) ${g(0.75)}, transparent ${g(1)})`;
            e.style.maskImage = v;
            e.style.webkitMaskImage = v;
            f.left = -E / 2;
            f.right = E / 2;
            f.top = T / 2;
            f.bottom = -T / 2;
            f.updateProjectionMatrix();
            n.setSize(E, T, false);
          },
          R = (e) => {
            let t,
              { card: n, spacing: r, amp: a, turn: s, axis: u, span: c, count: h } = w,
              d = i || (t = o((e - 0.1) / 2.6)) >= 1 ? 1 : 1 - Math.pow(2, -9 * t) * (1 - 0.35 * t),
              p = (e / 26) * s,
              f = (2 * Math.PI) / s;
            for (let e = 0; e < h; e++) {
              const t = b[e];
              if (!t) continue;
              const i = e * r + p,
                s = Math.floor(i / c);
              s !== t.lap ? ((t.lap = s), (t.pending = !M(t))) : t.pending && (t.pending = !M(t));
              const h = i - s * c - c / 2,
                m = l(o(1.45 * d - (Math.abs(h) / (c / 2)) * 0.45)),
                g = h * m,
                v = Math.cos(f * g),
                _ = u + a * v,
                x = (1 + 0.1 * v) * (0.6 + 0.4 * m),
                { mesh: y } = t;
              y.position.set(g, T / 2 - _, g / c);
              y.scale.set(n * x, n * x, 1);
              const S = y.material.uniforms;
              if (S.uOpacity) {
                S.uOpacity.value = t.pending ? 0 : m;
              }
            }
          };
        A();
        const C = new ResizeObserver(A);
        C.observe(e);
        C.observe(t);
        const P = () => {
          d.classList.replace("opacity-0", "opacity-100");
        };
        function N() {
          for (const e of (m.dispose(), b)) e.mesh.material.dispose();
          for (const e of _) e?.dispose();
          n.dispose();
          d.remove();
        }
        if (i) {
          const t = () => {
            R(9.62);
            n.render(p, f);
          };
          t();
          P();
          const i = window.setInterval(t, 400),
            r = window.setTimeout(() => window.clearInterval(i), 8e3),
            a = new ResizeObserver(t);
          a.observe(e);
          return () => {
            window.clearInterval(i);
            window.clearTimeout(r);
            C.disconnect();
            a.disconnect();
            N();
          };
        }
        let L = 0,
          D = 0,
          I = 0,
          U = true,
          O = (e) => {
            I = requestAnimationFrame(O);
            L += Math.min(e - D, 100) / 1e3;
            D = e;
            R(L);
            n.render(p, f);
          },
          F = () => {
            I && (cancelAnimationFrame(I), (I = 0));
          },
          B = () => {
            I || !U || document.hidden || ((D = performance.now()), (I = requestAnimationFrame(O)));
          },
          k = false,
          V = () => {
            k || ((k = true), R(0), n.render(p, f), P(), B());
          };
        Promise.allSettled(x.slice(0, 6)).then(V);
        const z = window.setTimeout(V, 1500),
          G = new IntersectionObserver(
            (e) => {
              (U = e[0]?.isIntersecting ?? true) ? k && B() : F();
            },
            {
              rootMargin: "80px",
            },
          );
        G.observe(e);
        const H = () => {
          document.hidden ? F() : k && B();
        };
        document.addEventListener("visibilitychange", H);
        return () => {
          F();
          window.clearTimeout(z);
          C.disconnect();
          G.disconnect();
          document.removeEventListener("visibilitychange", H);
          N();
        };
      })(t, i, f);
  }, [e, f]);
  return (
    <div
      ref={p}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${d ?? ""}`}
    />
  );
}
export { ImageHelix };
