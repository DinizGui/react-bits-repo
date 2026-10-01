// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "next/link";
import * as s from "lucide-react";
import * as a from "next/image";
function o() {
  let e = navigator.userAgent.toLowerCase();
  return e.includes("safari") && !e.includes("chrome") && !e.includes("chromium");
}
let l = () => () => {},
  u = [
    {
      title: "Startup Launch Kit",
      image: "/img/mock1_compressed.webp",
    },
    {
      title: "E-commerce Suite",
      image: "/img/mock5_compressed.webp",
    },
    {
      title: "SaaS Dashboard",
      image: "/img/mock9_compressed.webp",
    },
  ],
  c = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform vec2 uTextureResolution;

  vec2 resizeUvCover(vec2 uv, vec2 size, vec2 resolution) {
    vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (size.x / size.y), 1.0),
      min((resolution.y / resolution.x) / (size.y / size.x), 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
  }

  void main() {
    vec2 flippedUv = vec2(uv.x, 1.0 - uv.y);
    vUv = resizeUvCover(flippedUv, uTextureResolution, uResolution);
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,
  h = `
  precision highp float;
  
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uBulge;
  uniform float uRadius;
  uniform float uStrength;
  
  varying vec2 vUv;

  vec2 bulge(vec2 uv, vec2 center) {
    vec2 delta = uv - center;
    float dist = length(delta);
    
    // Gaussian falloff for smooth organic blend
    float falloff = exp(-dist * dist / (uRadius * uRadius));
    
    // Reduce effect near edges to prevent artifacts
    float edgeFade = smoothstep(0.0, 0.15, uv.x) * smoothstep(0.0, 0.15, 1.0 - uv.x) *
                     smoothstep(0.0, 0.15, uv.y) * smoothstep(0.0, 0.15, 1.0 - uv.y);
    
    // Push pixels outward from center
    float bulgeAmount = falloff * uStrength * uBulge * edgeFade;
    
    vec2 displaced = uv + delta * bulgeAmount;
    
    // Clamp to prevent sampling outside texture
    return clamp(displaced, 0.001, 0.999);
  }

  void main() {
    vec2 bulgeUV = bulge(vUv, uMouse);
    vec4 tex = texture2D(uTexture, bulgeUV);
    gl_FragColor = vec4(tex.rgb, 1.0);
  }
`;
function d(e, t, r) {
  let i = e.createShader(t);
  return i
    ? (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS))
      ? i
      : (e.deleteShader(i), null)
    : null;
}
function f({ title: e, imageSrc: n, index: s }) {
  let [o, l] = (0, r.useState)(!1);
  return (
    <i.motion.div
      className="relative border border-border/25 aspect-4/5 w-full overflow-hidden rounded-xl cursor-pointer"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1 * s,
      }}
      viewport={{
        once: !0,
      }}
      onMouseEnter={() => l(!0)}
      onMouseLeave={() => l(!1)}
    >
      <i.motion.div
        className="absolute inset-0"
        animate={{
          scale: o ? 1.1 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <a.default
          src={n}
          alt={e}
          fill={!0}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </i.motion.div>
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color"
        style={{
          background: "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)",
        }}
        aria-hidden="true"
      />
      <i.motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: o ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)",
        }}
        transition={{
          duration: 0.3,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">{e}</h3>
      </div>
    </i.motion.div>
  );
}
function p({ title: e, imageSrc: n, index: s }) {
  let a = (0, r.useRef)(null),
    o = (0, r.useRef)(null),
    l = (0, r.useRef)(null),
    u = (0, r.useRef)(null),
    f = (0, r.useRef)(null),
    p = (0, r.useRef)(0),
    m = (0, r.useRef)({}),
    g = (0, r.useRef)(!1),
    v = (0, r.useRef)({
      width: 1,
      height: 1,
    }),
    y = (0, r.useRef)(!1),
    x = (0, r.useRef)(0.5),
    b = (0, r.useRef)(0.5),
    _ = (0, r.useRef)(0.5),
    w = (0, r.useRef)(0.5),
    T = (0, r.useRef)(0),
    k = (0, r.useRef)(0);
  (0, r.useEffect)(() => {
    let e;
    y.current = !1;
    let t = a.current,
      r = o.current;
    if (!t || !r) return;
    let i = t.getContext("webgl", {
      antialias: !0,
      alpha: !1,
    });
    if (!i) return;
    l.current = i;
    let s = d(i, i.VERTEX_SHADER, c),
      E = d(i, i.FRAGMENT_SHADER, h);
    if (!s || !E) return;
    let S = (e = i.createProgram())
      ? (i.attachShader(e, s),
        i.attachShader(e, E),
        i.linkProgram(e),
        i.getProgramParameter(e, i.LINK_STATUS))
        ? e
        : (i.deleteProgram(e), null)
      : null;
    if (!S) return;
    ((u.current = S), i.useProgram(S));
    let P = new Float32Array([-1, -1, 0, 0, 3, -1, 2, 0, -1, 3, 0, 2]),
      M = i.createBuffer();
    (i.bindBuffer(i.ARRAY_BUFFER, M), i.bufferData(i.ARRAY_BUFFER, P, i.STATIC_DRAW));
    let A = i.getAttribLocation(S, "position"),
      j = i.getAttribLocation(S, "uv");
    (i.enableVertexAttribArray(A),
      i.vertexAttribPointer(A, 2, i.FLOAT, !1, 16, 0),
      i.enableVertexAttribArray(j),
      i.vertexAttribPointer(j, 2, i.FLOAT, !1, 16, 8),
      (m.current = {
        uTexture: i.getUniformLocation(S, "uTexture"),
        uMouse: i.getUniformLocation(S, "uMouse"),
        uBulge: i.getUniformLocation(S, "uBulge"),
        uRadius: i.getUniformLocation(S, "uRadius"),
        uStrength: i.getUniformLocation(S, "uStrength"),
        uResolution: i.getUniformLocation(S, "uResolution"),
        uTextureResolution: i.getUniformLocation(S, "uTextureResolution"),
      }));
    let C = m.current;
    (C.uRadius && i.uniform1f(C.uRadius, 0.5), C.uStrength && i.uniform1f(C.uStrength, 0.5));
    let R = i.createTexture();
    ((f.current = R),
      i.bindTexture(i.TEXTURE_2D, R),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
      i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
      i.texImage2D(
        i.TEXTURE_2D,
        0,
        i.RGBA,
        1,
        1,
        0,
        i.RGBA,
        i.UNSIGNED_BYTE,
        new Uint8Array([128, 128, 128, 255]),
      ));
    let D = new Image();
    ((D.crossOrigin = "anonymous"),
      (D.onload = () => {
        if (!i || !R || y.current) return;
        ((v.current = {
          width: D.width,
          height: D.height,
        }),
          i.bindTexture(i.TEXTURE_2D, R),
          i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, D),
          (g.current = !0));
        let e = m.current.uTextureResolution;
        e && i.uniform2f(e, D.width, D.height);
      }),
      (D.src = n));
    let N = () => {
      let e = Math.min(window.devicePixelRatio, 2),
        n = r.offsetWidth,
        s = r.offsetHeight;
      ((t.width = n * e),
        (t.height = s * e),
        (t.style.width = `${n}px`),
        (t.style.height = `${s}px`),
        i.viewport(0, 0, t.width, t.height));
      let a = m.current.uResolution;
      a && i.uniform2f(a, n, s);
    };
    (N(), window.addEventListener("resize", N));
    let O = () => {
      if (y.current) return;
      if (!i || !u.current || !g.current) {
        p.current = requestAnimationFrame(O);
        return;
      }
      ((x.current += (_.current - x.current) * 0.08),
        (b.current += (w.current - b.current) * 0.08),
        (T.current += (k.current - T.current) * 0.06));
      let e = m.current;
      (e.uMouse && i.uniform2f(e.uMouse, x.current, b.current),
        e.uBulge && i.uniform1f(e.uBulge, T.current),
        i.drawArrays(i.TRIANGLES, 0, 3),
        (p.current = requestAnimationFrame(O)));
    };
    return (
      O(),
      () => {
        ((y.current = !0),
          cancelAnimationFrame(p.current),
          window.removeEventListener("resize", N),
          S && i.deleteProgram(S),
          R && i.deleteTexture(R),
          (l.current = null),
          (u.current = null),
          (f.current = null));
      }
    );
  }, [n]);
  let E = (0, r.useCallback)((e) => {
      let t = o.current?.getBoundingClientRect();
      t && ((_.current = (e.clientX - t.left) / t.width), (w.current = (e.clientY - t.top) / t.height));
    }, []),
    S = (0, r.useCallback)(() => {
      k.current = 1;
    }, []),
    P = (0, r.useCallback)(() => {
      k.current = 0;
    }, []);
  return (
    <i.motion.div
      ref={o}
      className="group relative border border-border/25 aspect-4/5 w-full overflow-hidden rounded-xl cursor-pointer"
      onMouseMove={E}
      onMouseEnter={S}
      onMouseLeave={P}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1 * s,
      }}
      viewport={{
        once: !0,
      }}
    >
      <canvas ref={a} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color"
        style={{
          background: "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">{e}</h3>
      </div>
    </i.motion.div>
  );
}
function m() {
  let C_e = (0, r.useSyncExternalStore)(l, o, () => !1) ? f : p;
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-2xl font-medium tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Pre-built designs, ready to customize
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {u.map((r, i) => (
            <C_e title={r.title} imageSrc={r.image} index={i} key={r.title} />
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 sm:flex-row items-start sm:justify-between">
          <p className="max-w-md text-lg text-muted-foreground">
            Skip the blank canvas. Start with curated presets crafted for specific industries and use cases.
          </p>
          <n.default
            href="#"
            className="group flex shrink-0 items-center leading-0 gap-2 text-xl font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all
            <s.ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </n.default>
        </div>
      </div>
    </section>
  );
}
export { m as ShowcaseCards };
