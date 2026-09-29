"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "@/components/ReducedMotion";
const r = (e) => e * e * (3 - 2 * e),
  a = (e) => (e < 0 ? 0 : e > 1 ? 1 : e);
function s() {
  const e = document.documentElement;
  return {
    color: getComputedStyle(e).getPropertyValue("--foreground").trim() || "#000",
    alpha: e.classList.contains("dark") ? 0.32 : 0.26,
  };
}
function DotField({ stageId: e, className: o, alpha: l = 1 }: any) {
  const u = useRef(null),
    c = useReducedMotion();
  useEffect(() => {
    const t = u.current,
      i = document.getElementById(e);
    if (t && i)
      return (function (e, t, i, n) {
        const o = e.getContext("2d", {
          alpha: true,
        });
        if (!o) return () => {};
        let l = e.parentElement,
          u = 0,
          c = 0,
          h = 1,
          d = 0,
          p = 0,
          f = 1,
          m = s(),
          g = 0,
          v = 0,
          _ = 0,
          x = 0,
          y = 0,
          S = 0,
          M = () => {
            const i = l.getBoundingClientRect(),
              n = t.getBoundingClientRect();
            u = i.width;
            c = i.height;
            h = Math.min(window.devicePixelRatio || 1, 2);
            e.width = Math.round(u * h);
            e.height = Math.round(c * h);
            d = u / 2;
            p = n.top - i.top + n.height / 2;
            f = 0.78 * Math.hypot(u / 2, c / 2);
            o.setTransform(h, 0, 0, h, 0, 0);
          },
          b = (e) => {
            o.clearRect(0, 0, u, c);
            o.fillStyle = m.color;
            const t = i ? 1 : 1 - Math.pow(1 - a((e - 0.35) / 2.6), 3);
            if (t <= 0) return;
            const s = t * (f + 160),
              l = (e / 5.5) * Math.PI * 2,
              h = y > 0.001,
              _ = d - 26 * Math.ceil(d / 26),
              x = p - 26 * Math.ceil(p / 26);
            for (let e = x; e <= c + 26; e += 26)
              for (let t = _; t <= u + 26; t += 26) {
                const u = Math.hypot(t - d, e - p),
                  _ = u / f;
                if (_ > 1.2) continue;
                let x = Math.exp(-3 * _ * _) * r(a(e / 160)) * r(a((c - e) / 160)),
                  S = m.alpha * n * x,
                  M = 1.2,
                  b = t,
                  E = e;
                if (!i) {
                  const i = 0.5 + 0.5 * Math.sin(u / 110 - l);
                  if (((S *= 0.55 + 0.45 * i), (M *= 1 + 0.3 * (i - 0.5)), (S *= a((s - u) / 140)), h)) {
                    const i = t - g,
                      n = e - v,
                      r = Math.hypot(i, n);
                    if (r < 170) {
                      const e = 1 - r / 170,
                        t = e * e * y,
                        a = (14 * t) / (r || 1);
                      b += i * a;
                      E += n * a;
                      M *= 1 + 1.1 * t;
                      S += 0.4 * t * (0.35 + 0.65 * x);
                    }
                  }
                }
                S < 0.004 ||
                  ((o.globalAlpha = S > 1 ? 1 : S), o.beginPath(), o.arc(b, E, M, 0, 2 * Math.PI), o.fill());
              }
            o.globalAlpha = 1;
          };
        M();
        const E = new ResizeObserver(M);
        E.observe(l);
        E.observe(t);
        const T = new MutationObserver(() => {
          m = s();
          if (i) {
            b(0);
          }
        });
        if (
          (T.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
          }),
          i)
        ) {
          b(0);
          const e = new ResizeObserver(() => b(0));
          e.observe(l);
          return () => {
            E.disconnect();
            e.disconnect();
            T.disconnect();
          };
        }
        let w = 0,
          A = 0,
          R = 0,
          C = true,
          P = (e) => {
            R = requestAnimationFrame(P);
            const t = Math.min(e - A, 100) / 1e3;
            A = e;
            w += t;
            const i = 1 - Math.exp(-(9 * t));
            g += (_ - g) * i;
            v += (x - v) * i;
            const n = 1 - Math.exp(-(5 * t));
            y += (S - y) * n;
            b(w);
          },
          N = () => {
            R && (cancelAnimationFrame(R), (R = 0));
          },
          L = () => {
            R || !C || document.hidden || ((A = performance.now()), (R = requestAnimationFrame(P)));
          },
          D = (e) => {
            if ("mouse" !== e.pointerType) return;
            const t = l.getBoundingClientRect();
            _ = e.clientX - t.left;
            x = e.clientY - t.top;
            const i = _ >= 0 && x >= 0 && _ <= t.width && x <= t.height;
            i && 0 === S && ((g = _), (v = x));
            S = i ? 1 : 0;
          },
          I = () => {
            S = 0;
          };
        window.addEventListener("pointermove", D, {
          passive: true,
        });
        document.addEventListener("pointerleave", I);
        window.addEventListener("blur", I);
        const U = new IntersectionObserver(
          (e) => {
            (C = e[0]?.isIntersecting ?? true) ? L() : N();
          },
          {
            rootMargin: "80px",
          },
        );
        U.observe(l);
        const O = () => {
          document.hidden ? N() : L();
        };
        document.addEventListener("visibilitychange", O);
        L();
        return () => {
          N();
          E.disconnect();
          T.disconnect();
          U.disconnect();
          window.removeEventListener("pointermove", D);
          document.removeEventListener("pointerleave", I);
          window.removeEventListener("blur", I);
          document.removeEventListener("visibilitychange", O);
        };
      })(t, i, c, l);
  }, [e, c, l]);
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${o ?? ""}`}>
      <canvas ref={u} className="block h-full w-full" />
    </div>
  );
}
export { DotField };
