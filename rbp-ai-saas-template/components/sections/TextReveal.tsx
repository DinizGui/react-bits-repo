// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "motion/react";
import * as s from "motion/react";
function a(e, t, r, i, n) {
  return t === e ? r : r + ((n - e) * (i - r)) / (t - e);
}
function C_o({ char: e, charIndex: r, charsTotal: n, progress: o }) {
  let l,
    u = r < (l = Math.ceil(n / 2)) ? r : l - Math.abs(Math.floor(n / 2) - r) - 1,
    c = Math.ceil(n / 2),
    h = a(0, c, 0.5, 2.1, u),
    d = a(0, c, 0, 60, u),
    f = r < n / 2 ? a(0, c, -4, 0, u) : a(0, c, 0, 4, u),
    p = 0.5 * (n > 1 ? r / (n - 1) : 0),
    m = (0, s.useTransform)(o, (e) => {
      let t = 1 - p;
      return t <= 0 ? e : Math.max(0, Math.min(1, (e - p) / t));
    }),
    g = (0, s.useTransform)(m, (e) =>
      e <= 0 ? 0 : e >= 1 ? 1 : e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    ),
    v = (0, s.useTransform)(g, [0, 1], [h, 1]),
    y = (0, s.useTransform)(g, [0, 1], [d, 0]),
    x = (0, s.useTransform)(g, [0, 1], [f, 0]),
    b = (0, s.useTransform)(g, [0, 1], [12, 0]),
    _ = (0, s.useTransform)(g, [0, 1], [0, 1]),
    w = (0, s.useTransform)(b, (e) => `blur(${e}px)`);
  return (
    <i.motion.span
      className="inline-block will-change-transform"
      style={{
        scale: v,
        y,
        rotate: x,
        filter: w,
        opacity: _,
        transformOrigin: "50% 100%",
      }}
    >
      {" " === e ? " " : e}
    </i.motion.span>
  );
}
function l({ text: e, className: i = "" }) {
  let s = (0, r.useRef)(null),
    { scrollYProgress: a } = (0, n.useScroll)({
      target: s,
      offset: ["start 1.4", "start 0.15"],
    }),
    l = e.split(""),
    u = l.length;
  return (
    <div ref={s} className="flex min-h-64 items-center justify-center overflow-hidden px-8">
      <p className={`text-center px-8 ${i}`}>
        {l.map((e, r) => (
          <C_o char={e} charIndex={r} charsTotal={u} progress={a} key={r} />
        ))}
      </p>
    </div>
  );
}
export { l as TextReveal };
