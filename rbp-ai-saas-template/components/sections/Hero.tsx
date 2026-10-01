// @ts-nocheck
"use client";

import * as r from "motion/react";
import * as i from "motion/react";
import * as n from "motion/react";
import * as s from "motion/react";
import { createLucideIcon as __lucide_a } from "lucide-react";
const a = { default: __lucide_a };
import * as d from "lucide-react";
import * as p from "next/image";
import * as m from "react";
let C_o = (0, a.default)("paperclip", [
    [
      "path",
      {
        d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
        key: "1miecu",
      },
    ],
  ]),
  C_l = (0, a.default)("lightbulb", [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    [
      "path",
      {
        d: "M9 18h6",
        key: "x1upvd",
      },
    ],
    [
      "path",
      {
        d: "M10 22h4",
        key: "ceow96",
      },
    ],
  ]),
  C_u = (0, a.default)("pen-tool", [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn",
      },
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e",
      },
    ],
    [
      "path",
      {
        d: "m2.3 2.3 7.286 7.286",
        key: "1wuzzi",
      },
    ],
    [
      "circle",
      {
        cx: "11",
        cy: "11",
        r: "2",
        key: "xmgehs",
      },
    ],
  ]),
  C_c = (0, a.default)("panels-top-left", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7",
      },
    ],
    [
      "path",
      {
        d: "M3 9h18",
        key: "1pudct",
      },
    ],
    [
      "path",
      {
        d: "M9 21V9",
        key: "1oto5p",
      },
    ],
  ]),
  C_h = (0, a.default)("mic", [
    [
      "path",
      {
        d: "M12 19v3",
        key: "npa21l",
      },
    ],
    [
      "path",
      {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
        key: "1vc78b",
      },
    ],
    [
      "rect",
      {
        x: "9",
        y: "2",
        width: "6",
        height: "13",
        rx: "3",
        key: "s6n7sd",
      },
    ],
  ]);
let C_f = (0, a.default)("arrow-down", [
  [
    "path",
    {
      d: "M12 5v14",
      key: "s699le",
    },
  ],
  [
    "path",
    {
      d: "m19 12-7 7-7-7",
      key: "1idqje",
    },
  ],
]);
let g = {
  vertex: `
    precision highp float;
    varying vec2 vUv;
    attribute vec2 a_position;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 u_texel;

    void main () {
      vUv = .5 * (a_position + 1.);
      vL = vUv - vec2(u_texel.x, 0.);
      vR = vUv + vec2(u_texel.x, 0.);
      vT = vUv + vec2(0., u_texel.y);
      vB = vUv - vec2(0., u_texel.y);
      gl_Position = vec4(a_position, 0., 1.);
    }
  `,
  advection: `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D u_velocity_texture;
    uniform sampler2D u_input_texture;
    uniform vec2 u_texel;
    uniform float u_dt;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
      vec2 st = uv / tsize - 0.5;
      vec2 iuv = floor(st);
      vec2 fuv = fract(st);
      vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
      vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
      vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
      vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
      return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
      vec2 coord = vUv - u_dt * bilerp(u_velocity_texture, vUv, u_texel).xy * u_texel;
      float dissipation = .96;
      gl_FragColor = dissipation * bilerp(u_input_texture, coord, u_texel);
      gl_FragColor.a = 1.;
    }
  `,
  divergence: `
    precision highp float;
    precision highp sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D u_velocity_texture;

    void main () {
      float L = texture2D(u_velocity_texture, vL).x;
      float R = texture2D(u_velocity_texture, vR).x;
      float T = texture2D(u_velocity_texture, vT).y;
      float B = texture2D(u_velocity_texture, vB).y;
      float div = .6 * (R - L + T - B);
      gl_FragColor = vec4(div, 0., 0., 1.);
    }
  `,
  pressure: `
    precision highp float;
    precision highp sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D u_pressure_texture;
    uniform sampler2D u_divergence_texture;

    void main () {
      float L = texture2D(u_pressure_texture, vL).x;
      float R = texture2D(u_pressure_texture, vR).x;
      float T = texture2D(u_pressure_texture, vT).x;
      float B = texture2D(u_pressure_texture, vB).x;
      float divergence = texture2D(u_divergence_texture, vUv).x;
      float pressure = (L + R + B + T - divergence) * 0.25;
      gl_FragColor = vec4(pressure, 0., 0., 1.);
    }
  `,
  gradientSubtract: `
    precision highp float;
    precision highp sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D u_pressure_texture;
    uniform sampler2D u_velocity_texture;

    void main () {
      float L = texture2D(u_pressure_texture, vL).x;
      float R = texture2D(u_pressure_texture, vR).x;
      float T = texture2D(u_pressure_texture, vT).x;
      float B = texture2D(u_pressure_texture, vB).x;
      vec2 velocity = texture2D(u_velocity_texture, vUv).xy;
      velocity.xy -= vec2(R - L, T - B);
      gl_FragColor = vec4(velocity, 0., 1.);
    }
  `,
  splat: `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D u_input_texture;
    uniform float u_ratio;
    uniform vec3 u_point_value;
    uniform vec2 u_point;
    uniform float u_point_size;

    void main () {
      vec2 p = vUv - u_point.xy;
      p.x *= u_ratio;
      vec3 splat = pow(2., -dot(p, p) / u_point_size) * u_point_value;
      vec3 base = texture2D(u_input_texture, vUv).xyz;
      gl_FragColor = vec4(base + splat, 1.);
    }
  `,
  output: `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D u_output_texture;

    void main () {
      vec3 C = texture2D(u_output_texture, vUv).rgb;
      gl_FragColor = vec4(vec3(1.) - C, 1.);
    }
  `,
};
function v(e, t) {
  return e[t] ?? null;
}
function C_y({
  color: e = {
    r: 0.21,
    g: 0.18,
    b: 0.51,
  },
  className: r = "",
}) {
  let i = (0, m.useRef)(null),
    n = (0, m.useRef)(0);
  return (
    (0, m.useEffect)(() => {
      let t,
        r,
        s,
        a,
        o = i.current;
      if (!o) return;
      let l = (function (e) {
        let t = e.getContext("webgl");
        if (!t) return null;
        t.getExtension("OES_texture_float");
        let r = (e, r) => {
            let i = t.createShader(r);
            return i
              ? (t.shaderSource(i, e), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS))
                ? i
                : (t.deleteShader(i), null)
              : null;
          },
          i = r(g.vertex, t.VERTEX_SHADER);
        if (!i) return null;
        let n = (e) => {
            let n = r(e, t.FRAGMENT_SHADER);
            if (!n) return null;
            let s = t.createProgram();
            if (
              !s ||
              (t.attachShader(s, i),
              t.attachShader(s, n),
              t.linkProgram(s),
              !t.getProgramParameter(s, t.LINK_STATUS))
            )
              return null;
            let a = {},
              o = t.getProgramParameter(s, t.ACTIVE_UNIFORMS);
            for (let e = 0; e < o; e++) {
              let r = t.getActiveUniform(s, e);
              r && (a[r.name] = t.getUniformLocation(s, r.name));
            }
            return {
              program: s,
              uniforms: a,
            };
          },
          s = {
            splat: n(g.splat),
            divergence: n(g.divergence),
            pressure: n(g.pressure),
            gradientSubtract: n(g.gradientSubtract),
            advection: n(g.advection),
            output: n(g.output),
          };
        if (!Object.values(s).every(Boolean)) return null;
        (t.bindBuffer(t.ARRAY_BUFFER, t.createBuffer()),
          t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), t.STATIC_DRAW),
          t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, t.createBuffer()),
          t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), t.STATIC_DRAW),
          t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, 0),
          t.enableVertexAttribArray(0));
        let a = (e, r, i = t.RGBA) => {
          t.activeTexture(t.TEXTURE0);
          let n = t.createTexture();
          (t.bindTexture(t.TEXTURE_2D, n),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.texImage2D(t.TEXTURE_2D, 0, i, e, r, 0, i, t.FLOAT, null));
          let s = t.createFramebuffer();
          return (
            t.bindFramebuffer(t.FRAMEBUFFER, s),
            t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0),
            t.viewport(0, 0, e, r),
            t.clear(t.COLOR_BUFFER_BIT),
            {
              fbo: s,
              width: e,
              height: r,
              attach: (e) => (t.activeTexture(t.TEXTURE0 + e), t.bindTexture(t.TEXTURE_2D, n), e),
            }
          );
        };
        return {
          gl: t,
          programs: s,
          createFBO: a,
          createDoubleFBO: (e, r, i = t.RGBA) => {
            let n = a(e, r, i),
              s = a(e, r, i);
            return {
              width: e,
              height: r,
              texelSizeX: 1 / e,
              texelSizeY: 1 / r,
              read: () => n,
              write: () => s,
              swap() {
                [n, s] = [s, n];
              },
            };
          },
          blit: (e) => {
            (e
              ? (t.viewport(0, 0, e.width, e.height), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo))
              : (t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
                t.bindFramebuffer(t.FRAMEBUFFER, null)),
              t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0));
          },
        };
      })(o);
      if (!l) return;
      let { gl: u, programs: c, createDoubleFBO: h, createFBO: d, blit: f } = l,
        p = {
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
          moved: !1,
        },
        m = !0,
        y = 4 / window.innerHeight,
        x = () => {
          let e, i;
          ((y = 4 / window.innerHeight),
            (o.width = window.innerWidth),
            (o.height = window.innerHeight),
            (e = Math.floor(0.25 * o.width)),
            (t = h(e, (i = Math.floor(0.25 * o.height)))),
            (r = h(e, i)),
            (s = d(e, i, u.RGB)),
            (a = h(e, i, u.RGB)));
        },
        b = (e, t) => {
          ((p.moved = !0), (p.dx = 5 * (e - p.x)), (p.dy = 5 * (t - p.y)), (p.x = e), (p.y = t));
        },
        _ = (e) => {
          ((m = !1), b(e.pageX, e.pageY));
        },
        w = (e) => {
          m = !1;
          let t = e.targetTouches[0];
          t && b(t.pageX, t.pageY);
        },
        T = (i) => {
          if (i && m) {
            let e =
                0.5 +
                0.25 * Math.sin(0.0017 * i) +
                0.12 * Math.sin(0.0031 * i + 1.3) +
                0.08 * Math.cos(0.0053 * i + 2.7) +
                0.05 * Math.sin(0.0079 * i + 4.1),
              t =
                0.5 +
                0.18 * Math.sin(0.0023 * i + 0.5) +
                0.12 * Math.cos(0.0041 * i + 1.8) +
                0.08 * Math.sin(0.0067 * i + 3.2) +
                0.05 * Math.cos(0.0089 * i + 5);
            b(e * window.innerWidth, t * window.innerHeight);
          }
          if (p.moved) {
            m || (p.moved = !1);
            let { splat: i } = c;
            (u.useProgram(i.program),
              u.uniform1i(v(i.uniforms, "u_input_texture"), r.read().attach(1)),
              u.uniform1f(v(i.uniforms, "u_ratio"), o.width / o.height),
              u.uniform2f(v(i.uniforms, "u_point"), p.x / o.width, 1 - p.y / o.height),
              u.uniform3f(v(i.uniforms, "u_point_value"), p.dx, -p.dy, 1),
              u.uniform1f(v(i.uniforms, "u_point_size"), y),
              f(r.write()),
              r.swap(),
              u.uniform1i(v(i.uniforms, "u_input_texture"), t.read().attach(1)),
              u.uniform3f(v(i.uniforms, "u_point_value"), 1 - e.r, 1 - e.g, 1 - e.b),
              f(t.write()),
              t.swap());
          }
          let { divergence: l, pressure: h, gradientSubtract: d, advection: g, output: x } = c;
          (u.useProgram(l.program),
            u.uniform2f(v(l.uniforms, "u_texel"), r.texelSizeX, r.texelSizeY),
            u.uniform1i(v(l.uniforms, "u_velocity_texture"), r.read().attach(1)),
            f(s),
            u.useProgram(h.program),
            u.uniform2f(v(h.uniforms, "u_texel"), r.texelSizeX, r.texelSizeY),
            u.uniform1i(v(h.uniforms, "u_divergence_texture"), s.attach(1)));
          for (let e = 0; e < 4; e++)
            (u.uniform1i(v(h.uniforms, "u_pressure_texture"), a.read().attach(2)), f(a.write()), a.swap());
          (u.useProgram(d.program),
            u.uniform2f(v(d.uniforms, "u_texel"), r.texelSizeX, r.texelSizeY),
            u.uniform1i(v(d.uniforms, "u_pressure_texture"), a.read().attach(1)),
            u.uniform1i(v(d.uniforms, "u_velocity_texture"), r.read().attach(2)),
            f(r.write()),
            r.swap(),
            u.useProgram(g.program),
            u.uniform2f(v(g.uniforms, "u_texel"), r.texelSizeX, r.texelSizeY),
            u.uniform1i(v(g.uniforms, "u_velocity_texture"), r.read().attach(1)),
            u.uniform1i(v(g.uniforms, "u_input_texture"), r.read().attach(1)),
            u.uniform1f(v(g.uniforms, "u_dt"), 1 / 60),
            f(r.write()),
            r.swap(),
            u.useProgram(g.program),
            u.uniform2f(v(g.uniforms, "u_texel"), t.texelSizeX, t.texelSizeY),
            u.uniform1i(v(g.uniforms, "u_input_texture"), t.read().attach(2)),
            f(t.write()),
            t.swap(),
            u.useProgram(x.program),
            u.uniform1i(v(x.uniforms, "u_output_texture"), t.read().attach(1)),
            f(null),
            (n.current = requestAnimationFrame(T)));
        };
      return (
        x(),
        window.addEventListener("resize", x),
        window.addEventListener("mousemove", _),
        window.addEventListener("touchmove", w, {
          passive: !1,
        }),
        (n.current = requestAnimationFrame(T)),
        () => {
          (window.removeEventListener("resize", x),
            window.removeEventListener("mousemove", _),
            window.removeEventListener("touchmove", w),
            cancelAnimationFrame(n.current));
        }
      );
    }, [e]),
    (<canvas ref={i} className={`pointer-events-none mix-blend-multiply blur ${r}`} aria-hidden="true" />)
  );
}
function x() {
  let e = (0, m.useRef)(null),
    { scrollY: a, scrollYProgress: g } = (0, r.useScroll)({
      target: e,
      offset: ["start start", "end start"],
    }),
    v = (0, i.useTransform)(g, [0, 0.5], [1, 0]),
    x = (0, n.useSpring)(v, {
      stiffness: 100,
      damping: 30,
    }),
    b = (0, i.useTransform)(a, (e) => 0.7 * e);
  return (
    <section ref={e} className="relative min-h-dvh w-full">
      <C_y className="absolute inset-0 -z-5" />
      <s.motion.div
        className="pointer-events-none absolute inset-0 -z-10 origin-top scale-125 will-change-transform"
        style={{
          scaleY: x,
          y: b,
        }}
        aria-hidden="true"
      >
        <p.default
          src="/svg/gradient-fade.svg"
          alt=""
          fill={!0}
          className="object-cover object-top dark:-scale-y-100"
          priority={!0}
        />
        <div className="from-background absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t to-transparent" />
      </s.motion.div>
      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col items-start justify-center gap-6 px-4 py-20 sm:justify-start sm:gap-0 sm:py-0 sm:pt-40 lg:px-8 lg:pt-68">
        <s.motion.h1
          className="text-background dark:text-background text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="block">Design with AI —</span>
          <span className="block">
            the <em className="text-background/80 dark:text-background/80 italic">future</em> of creativity
          </span>
        </s.motion.h1>
        <s.motion.div
          className="w-full sm:mt-12 lg:mt-16"
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div
            className="relative rounded-4xl rounded-b-[2.3rem] border border-black/5 bg-[#f8f8fa] p-3"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(124, 58, 237, 0.08)",
            }}
          >
            <div className="flex items-start gap-3">
              <textarea
                placeholder="Ask Kraft anything..."
                className="no-focus-ring mx-4 my-2 min-h-15 w-full resize-none bg-transparent text-gray-800 placeholder:text-gray-400"
                rows={2}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="focus-ring isolate flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
                  aria-label="Attach file"
                >
                  <C_o className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="focus-ring isolate flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
                >
                  <C_l className="h-4 w-4 shrink-0" />
                  <span className="xs:inline hidden">Reasoning</span>
                </button>
                <button
                  type="button"
                  className="focus-ring isolate hidden h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 sm:flex"
                >
                  <C_u className="h-4 w-4 shrink-0" />
                  <span>Create Design</span>
                </button>
                <button
                  type="button"
                  className="focus-ring isolate hidden h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 md:flex"
                >
                  <C_c className="h-4 w-4 shrink-0" />
                  <span>Wireframe</span>
                </button>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  className="focus-ring isolate hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-700 sm:flex"
                  aria-label="Voice input"
                >
                  <C_h className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="focus-ring bg-foreground dark:bg-background hover:bg-foreground/90 dark:hover:bg-background/90 isolate flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
                  aria-label="Send message"
                >
                  <d.ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-background/60 mt-6 text-center text-xs">
            Kraft can make mistakes, but learns from them.
          </p>
        </s.motion.div>
      </div>
      <s.motion.div
        className="absolute inset-x-0 bottom-24 mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <p className="text-foreground/60 dark:text-foreground/50 max-w-sm text-sm">
          Kraft uses advanced AI to transform your ideas into stunning designs. Just describe what you need.
        </p>
        <C_f className="text-foreground/60 dark:text-foreground/50 h-12 w-12" strokeWidth={1} />
      </s.motion.div>
    </section>
  );
}
export { x as Hero };
