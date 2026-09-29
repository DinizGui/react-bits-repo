"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import {
  WebGLRenderer,
  SRGBColorSpace,
  Scene,
  PerspectiveCamera,
  PlaneGeometry,
  TextureLoader,
  LinearMipmapLinearFilter,
  Vector2,
  ShaderMaterial,
  Mesh,
} from "three";
import { DotField } from "@/components/DotField";
import { useReducedMotion } from "@/components/ReducedMotion";
import { Reveal } from "@/components/Reveal";
import { PHOTOS, photoUrl } from "@/lib/photos";
const l = (62 * Math.PI) / 180,
  u = (e) => {
    const t = Math.min(1, e);
    return 0.56 - 0.7 * t * (1 - t) + 0.1 * t;
  },
  c = (e) => l * (1 - Math.pow(1 - Math.min(e, 1), 1.6));
function h(e, t, i) {
  let n = Math.min(0.48 * t, 0.7 * e),
    r = Math.min(0.085 * t, 0.35 * n),
    a = n / r,
    s = (e) => r * Math.pow(a, e),
    o = (e) => s(e) * Math.cos(c(e)),
    l = 0;
  for (let e = 0; e < 1024; e++) {
    const t = (e + 0.5) / 1024;
    l += o(t) * (1 - u(t));
  }
  l /= 1024;
  let h = (e, t) => {
      const n = i / s(t),
        r = c(t),
        a = (e * n) / i - 0.5 * Math.cos(r);
      return (i * a) / (n + 0.5 * Math.sin(r));
    },
    d = 1,
    p = 64;
  for (let t = 0; t < 30; t++) {
    const t = (d + p) / 2;
    h(t * l, 1) < e ? (d = t) : (p = t);
  }
  let f = Math.max(2, p),
    m = Math.min(64, Math.ceil(1.35 * f)),
    g = m / f,
    v = new Float32Array(4097),
    _ = g / 4096,
    x = 0;
  for (let e = 1; e <= 4096; e++) {
    const t = (e - 0.5) * _;
    x += f * o(t) * (1 - u(t)) * _;
    v[e] = x;
  }
  return {
    density: f,
    pool: m,
    sEnd: g,
    distAt: (e) => i / s(e),
    axAt: (e) => {
      const t = (Math.min(Math.max(e, 0), g) / g) * 4096,
        i = Math.floor(t),
        n = v[i] ?? 0,
        r = v[Math.min(i + 1, 4096)] ?? n;
      return n + (r - n) * (t - i);
    },
  };
}
const d = `
uniform float uBend;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  p.z += uBend * p.x * p.x;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,
  p = `
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
}`;
function ComponentF({ stageId: e, className: i, onSettled: l }: any) {
  const u = useRef(null),
    m = useReducedMotion(),
    g = useRef(l);
  useEffect(() => {
    g.current = l;
  }, [l]);
  useEffect(() => {
    const t = u.current,
      i = document.getElementById(e);
    if (t && i)
      return (function (e, t, i, n) {
        const r = new WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        r.outputColorSpace = SRGBColorSpace;
        r.setClearColor(0, 0);
        r.sortObjects = true;
        const l = r.domElement;
        l.className = "absolute inset-0 block size-full";
        l.setAttribute("aria-hidden", "true");
        e.appendChild(l);
        const u = new Scene(),
          f = new PerspectiveCamera(40, 1, 0.05, 400),
          m = new PlaneGeometry(1, 1, 24, 1),
          g = r.capabilities.getMaxAnisotropy(),
          v = new TextureLoader();
        v.setCrossOrigin("anonymous");
        const _ = {
            ids: PHOTOS,
            textures: PHOTOS.map(() => null),
            serial: 0,
            lastUsed: [],
          },
          x = (e, t) =>
            new Promise<any>((i, n) => {
              const r = e.ids[t];
              if (!r) return n(Error("no image"));
              v.load(
                photoUrl(r, 640),
                (n) => {
                  n.colorSpace = SRGBColorSpace;
                  n.minFilter = LinearMipmapLinearFilter;
                  n.generateMipmaps = true;
                  n.anisotropy = g;
                  e.textures[t] = n;
                  i(n);
                },
                undefined,
                n,
              );
            }),
          y = [],
          S = (e, t) => {
            let i,
              n,
              r,
              s,
              o,
              l = -1,
              u = -1 / 0;
            for (let e = 0; e < t.ids.length; e++) {
              if (!t.textures[e]) continue;
              const i = t.serial - (t.lastUsed[e] ?? -1 / 0);
              i > u && ((u = i), (l = e));
            }
            if (l < 0) return false;
            t.lastUsed[l] = t.serial++;
            e.slot = l;
            const c = t.textures[l];
            c &&
              ((i = c.image),
              (n = i?.width && i?.height ? i.width / i.height : 1),
              (r = new Vector2(1, 1)),
              (s = new Vector2(0, 0)),
              n > 1 ? ((r.x = 1 / n), (s.x = (1 - r.x) / 2)) : ((r.y = n / 1), (s.y = (1 - r.y) / 2)),
              (o = e.mesh.material).uniforms.uMap && (o.uniforms.uMap.value = c),
              o.uniforms.uRepeat && (o.uniforms.uRepeat.value = r),
              o.uniforms.uOffset && (o.uniforms.uOffset.value = s));
            return true;
          };
        for (const e of [-1, 1])
          for (let t = 0; t < 64; t++) {
            const i = new ShaderMaterial({
                vertexShader: d,
                fragmentShader: p,
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
                    value: 0.03,
                  },
                  uAspect: {
                    value: 1,
                  },
                  uBend: {
                    value: 0,
                  },
                  uExposure: {
                    value: 1.14,
                  },
                  uLift: {
                    value: 0.04,
                  },
                },
              }),
              n = new Mesh(m, i);
            u.add(n);
            const r = {
              mesh: n,
              side: e,
              index: t,
              phase: 0,
              lap: -1,
              slot: -1,
              pending: false,
            };
            y.push(r);
          }
        for (let e = 0; e < _.ids.length; e++) x(_, e).catch(() => undefined);
        let M = 1,
          b = 1,
          E = 1,
          T = 64,
          w = h(50, 62, 64),
          A = () => {
            const i = e.getBoundingClientRect(),
              n = t.getBoundingClientRect();
            b = Math.max(1, i.width);
            E = Math.max(1, i.height);
            M = n.height / 12;
            const a = b / 2 / M;
            for (const e of ((T = Math.max(64, 1.4 * a)), (w = h(a, E / M, T)), y))
              ((e.mesh.visible = e.index < w.pool), (e.phase = e.index / w.pool));
            const s = Math.max(2 * (n.top - i.top + n.height / 2), 2);
            f.fov = (2 * Math.atan(s / 2 / (T * M)) * 180) / Math.PI;
            f.aspect = b / s;
            f.setViewOffset(b, s, 0, 0, b, E);
            f.updateProjectionMatrix();
            r.setSize(b, E, false);
          },
          R = (e, t) => {
            let { mesh: i, side: n } = e,
              r = w.distAt(t),
              a = c(t),
              s = (w.axAt(t) * r) / T;
            i.position.set(n * s, 0, -r);
            i.rotation.y = -n * a;
            const o = i.material;
            if (o.uniforms.uBend) {
              o.uniforms.uBend.value = 0.6 * Math.pow(Math.min(t, 1), 1.4);
            }
            const l = Math.min(1, t / 0.02);
            if (o.uniforms.uOpacity) {
              o.uniforms.uOpacity.value = e.pending ? 0 : l;
            }
          },
          C = false,
          P = (e) => {
            const t = Math.min(1, Math.max(0, (e - 0.1) / 2.8)),
              i = t >= 1 ? 1 : 1 - Math.pow(2, -9 * t) * (1 - 0.35 * t);
            !C && t >= 0.3 && ((C = true), n());
            const r = e / (26 * w.sEnd);
            for (const e of y) {
              if (!e.mesh.visible) continue;
              const t = e.phase + r,
                n = Math.floor(t);
              n !== e.lap
                ? ((e.lap = n), (e.slot = -1), (e.pending = !S(e, _)))
                : e.pending && (e.pending = !S(e, _));
              R(e, (t - n) * w.sEnd * i);
            }
          };
        A();
        const N = new ResizeObserver(A);
        N.observe(e);
        N.observe(t);
        let L = 0,
          D = 0,
          I = 0,
          U = true,
          O = (e) => {
            I = requestAnimationFrame(O);
            L += Math.min(e - D, 100) / 1e3;
            D = e;
            P(L);
            r.render(u, f);
          },
          F = () => {
            I && (cancelAnimationFrame(I), (I = 0));
          },
          B = () => {
            I || !U || document.hidden || ((D = performance.now()), (I = requestAnimationFrame(O)));
          };
        if (i) {
          const t = () => {
            P(19.4);
            r.render(u, f);
          };
          t();
          n();
          const i = window.setInterval(t, 400),
            a = window.setTimeout(() => window.clearInterval(i), 8e3),
            s = new ResizeObserver(t);
          s.observe(e);
          return () => {
            window.clearInterval(i);
            window.clearTimeout(a);
            N.disconnect();
            s.disconnect();
            W();
          };
        }
        let k = [0, 1, 2, 3, 4, 5].map((e) => x(_, e)),
          V = false,
          z = () => {
            V || ((V = true), B());
          };
        Promise.allSettled(k).then(z);
        const G = window.setTimeout(z, 1500),
          H = new IntersectionObserver(
            (e) => {
              (U = e[0]?.isIntersecting ?? true) ? V && B() : F();
            },
            {
              rootMargin: "80px",
            },
          );
        H.observe(e);
        const j = () => {
          document.hidden ? F() : V && B();
        };
        function W() {
          for (const e of (m.dispose(), y)) e.mesh.material.dispose();
          for (const e of _.textures) e?.dispose();
          r.dispose();
          l.remove();
        }
        document.addEventListener("visibilitychange", j);
        return () => {
          F();
          window.clearTimeout(G);
          N.disconnect();
          H.disconnect();
          document.removeEventListener("visibilitychange", j);
          W();
        };
      })(t, i, m, () => g.current?.());
  }, [e, m]);
  return (
    <div
      ref={u}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${i ?? ""}`}
    />
  );
}
function Hero() {
  const [e, n] = useState(false),
    a = useCallback(() => n(true), []);
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative grid min-h-[100dvh] grid-rows-[1fr_auto_calc(var(--u)*12)_auto_1fr] [overflow-x:clip] [--u:2.2vw] sm:[--u:1.5vw] lg:[--u:min(1vw,16px)]"
    >
      <DotField stageId="hero-stage" />
      <ComponentF stageId="hero-stage" onSettled={a} />
      <div className="relative z-10 row-start-2 flex items-end justify-center px-5 pb-[calc(var(--u)*3.5)] sm:pb-[calc(var(--u)*3)]">
        <Reveal when={e} y={10} scale={0.75} duration={1.1}>
          <h1 className="text-center font-serif text-[min(2.5rem,10.25vw)] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[3.5rem] lg:text-[4.25rem]">
            The picture in your head,
            <br />
            rendered before lunch.
          </h1>
        </Reveal>
      </div>
      <div id="hero-stage" className="row-start-3" />
      <div className="relative z-10 row-start-4 flex flex-col items-center px-5 pt-[calc(var(--u)*2.5)] text-center sm:pt-[calc(var(--u)*3)]">
        <Reveal when={e} y={10} scale={0.75} duration={1.1}>
          <p className="max-w-[26rem] text-[15px] leading-6 text-pretty text-foreground/80 sm:text-base sm:leading-7">
            <span className="text-foreground">Image generation for creative teams.</span> Describe the shot,
            steer it with references and brand rules, and export production-ready files in every size you
            need.
          </p>
        </Reveal>
        <Reveal when={e} delay={0.1} y={10} scale={0.75} duration={1.1} className="mt-7">
          <a
            href="#pricing"
            className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-foreground pr-4 pl-5 text-[15px] font-medium text-background shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_12px_32px_-14px_rgba(0,0,0,0.45)] transition-[transform,opacity] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.98]"
          >
            Start creating for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
export { Hero };
