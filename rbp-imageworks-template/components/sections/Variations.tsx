"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useMotionValue, useTransform, motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "@/components/ReducedMotion";
import { PHOTOS, photoSrc } from "@/lib/photos";
const h = PHOTOS[6],
  d = photoSrc(h, 800, 500),
  p = photoSrc(h, 2e3, 1250),
  f = [
    {
      note: "As briefed",
      className: "filter-none",
    },
    {
      note: "Cooler",
      className: "[filter:hue-rotate(-28deg)_saturate(0.9)]",
    },
    {
      note: "Softer",
      className: "[filter:contrast(0.8)_brightness(1.1)]",
    },
    {
      note: "Darker",
      className: "[filter:brightness(0.7)_contrast(1.08)]",
    },
    {
      note: "Muted",
      className: "[filter:saturate(0.4)]",
    },
    {
      note: "Warmer",
      className: "[filter:sepia(0.45)_saturate(1.25)]",
    },
    {
      note: "Punchier",
      className: "[filter:saturate(1.6)_contrast(1.15)]",
    },
    {
      note: "Faded",
      className: "[filter:contrast(0.8)_brightness(1.18)_saturate(0.7)]",
    },
    {
      note: "Mono",
      className: "[filter:grayscale(1)_contrast(1.08)]",
    },
    {
      note: "Brighter",
      className: "[filter:brightness(1.25)]",
    },
    {
      note: "Flatter",
      className: "[filter:contrast(0.7)_brightness(1.06)]",
    },
    {
      note: "Deeper",
      className: "[filter:saturate(1.2)_brightness(0.82)_contrast(1.1)]",
    },
  ],
  m = [0.6, 0.9],
  g = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  v = (e: any, [t, i]: number[]) => g((e - t) / (i - t));
function VariationTile({ index: e, progress: i, gridRef: n, field: s }: any) {
  const o = useRef(null),
    h = f[e] ?? {
      note: "",
      className: "filter-none",
    },
    x = 5 === e,
    y = useRef({
      dx: 0,
      dy: 0,
      rank: 0,
      fill: 1,
      cx: 0,
      cy: 0,
    }),
    S = useMotionValue(0),
    M = useTransform([i, S], ([e]: any[]) => {
      const t = 0.04 + 0.12 * y.current.rank;
      return 1 - Math.pow(1 - v(e, [t, t + 0.34]), 5);
    }),
    b = useTransform(i, (e) => {
      let t;
      return (t = v(e, m)) < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }),
    E = useTransform([M, b, S], ([e, t]: any[]) => {
      const i = y.current.dx;
      return -i * (1 - e) - (x ? i * t : 0);
    }),
    T = useTransform([M, b, S], ([e, t]: any[]) => {
      const i = y.current.dy;
      return -i * (1 - e) - (x ? i * t : 0);
    }),
    w = useTransform([M, b, S], ([e, t]: any[]) => {
      const i = 0.97 + 0.03 * e;
      return x ? i + (y.current.fill - 1) * t : i * (1 - 0.06 * t);
    }),
    A = useTransform(i, (e) => v(e, [0, 0.04])),
    R = useTransform([A, b], ([e, t]: any[]) => (x ? e : e * (1 - t))),
    C = useTransform([s.x, s.y, s.on, M, b, S], ([e, t, i, n, r]: any[]) => {
      if (x) return 0;
      const a = 1 - g(Math.hypot(y.current.cx - e, y.current.cy - t) / 300);
      return a * a * (3 - 2 * a) * i * n * (1 - r);
    }),
    P = useTransform(C, (e) => 1 + 0.07 * e),
    N = useTransform(C, (t) => (x ? 20 : 12 - e + Math.round(12 * t)));
  useEffect(() => {
    const e = o.current,
      t = n.current;
    if (!e || !t) return;
    const i = () => {
      const i = t.clientWidth,
        n = t.clientHeight,
        r = e.offsetLeft + e.offsetWidth / 2,
        a = e.offsetTop + e.offsetHeight / 2,
        s = r - i / 2,
        o = a - n / 2;
      y.current = {
        dx: s,
        dy: o,
        cx: r,
        cy: a,
        rank: Math.hypot(s, o) / Math.hypot(i / 2, n / 2),
        fill: Math.min(i / e.offsetWidth, n / e.offsetHeight),
      };
      S.set(S.get() + 1);
    };
    i();
    const r = new ResizeObserver(i);
    r.observe(t);
    return () => r.disconnect();
  }, [n, S]);
  return (
    <motion.li
      ref={o}
      style={{
        x: E,
        y: T,
        scale: w,
        opacity: R,
        zIndex: N,
      }}
      className={`relative min-h-0 ${x ? "" : "will-change-transform"}`}
    >
      <motion.div
        style={{
          scale: P,
        }}
        className="relative h-full w-full"
      >
        <motion.span
          aria-hidden="true"
          style={{
            opacity: C,
          }}
          className="pointer-events-none absolute inset-0 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)]"
        />
        <figure className="relative h-full w-full overflow-hidden rounded-xl bg-muted">
          <Image
            src={x ? p : d}
            alt={x ? `Marigold field in motion, ${h.note.toLowerCase()} grade.` : ""}
            fill
            sizes={x ? "100vw" : "(min-width: 1024px) 25vw, 33vw"}
            className={`object-cover ${h.className}`}
          />
          <figcaption className="sr-only">{h.note}</figcaption>
        </figure>
      </motion.div>
    </motion.li>
  );
}
function ComponentX({ progress: e, gridRef: i }: any) {
  const n = useTransform(e, (e) => v(e, [0.82, 0.92])),
    s = useTransform(n, (e) => 10 * (1 - e)),
    o = useMotionValue("100%"),
    u = useMotionValue("100%"),
    h = useMotionValue("0.75rem");
  useEffect(() => {
    const e = i.current,
      t = e?.querySelector("li");
    if (!e || !t) return;
    const n = () => {
      const i = Math.min(e.clientWidth / t.offsetWidth, e.clientHeight / t.offsetHeight);
      o.set(`${t.offsetWidth * i}px`);
      u.set(`${t.offsetHeight * i}px`);
      const n = t.querySelector("figure");
      if (n) {
        const e = parseFloat(getComputedStyle(n).borderRadius);
        h.set(`${e * i}px`);
      }
    };
    n();
    const r = new ResizeObserver(n);
    r.observe(e);
    return () => r.disconnect();
  }, [i, o, u, h]);
  return (
    <motion.div
      style={{
        opacity: n,
        width: o,
        height: u,
        borderRadius: h,
      }}
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
    >
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
      <motion.p
        style={{
          y: s,
        }}
        className="absolute inset-x-0 bottom-0 p-6 font-serif text-[1.5rem] leading-[1.15] tracking-[-0.01em] text-white sm:p-10 sm:text-[2rem]"
      >
        Kept: warmer, as the board suggested.
      </motion.p>
    </motion.div>
  );
}
function ComponentY({ progress: e }: any) {
  const i = useTransform(e, (e) => 1 - v(e, [0.5, 0.58])),
    n = useTransform(e, (e) => v(e, [0.6, 0.7])),
    a = "font-serif text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-balance";
  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <motion.h2
        id="features-heading"
        style={{
          opacity: i,
        }}
        className={a}
      >
        Ask for twelve, not one.
      </motion.h2>
      <motion.p
        aria-hidden="true"
        style={{
          opacity: n,
        }}
        className={`${a} absolute inset-x-0 top-0`}
      >
        Keep the one you’d pitch.
      </motion.p>
    </div>
  );
}
function Variations() {
  const e = useRef(null),
    n = useRef(null),
    r = useReducedMotion(),
    { scrollYProgress: l } = useScroll({
      target: e,
      offset: ["start start", "end end"],
    }),
    h = useSpring(l, {
      stiffness: 160,
      damping: 32,
      mass: 0.5,
    }),
    p = useMotionValue(0),
    m = useMotionValue(0),
    g = useMotionValue(0),
    v = {
      x: useSpring(p, {
        stiffness: 140,
        damping: 22,
        mass: 0.6,
      }),
      y: useSpring(m, {
        stiffness: 140,
        damping: 22,
        mass: 0.6,
      }),
      on: useSpring(g, {
        stiffness: 90,
        damping: 24,
      }),
    };
  return r ? (
    <section id="features" aria-labelledby="features-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2
          id="features-heading"
          className="mx-auto max-w-3xl text-center font-serif text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-balance"
        >
          Ask for twelve, not one. Keep the one you’d pitch.
        </h2>
        <ul className="mt-12 grid grid-cols-3 gap-3 lg:grid-cols-4">
          {f.map((e, i) => (
            <li
              key={e.note}
              className={`relative aspect-[4/5] overflow-hidden rounded-xl bg-muted ${5 === i ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""}`}
            >
              <Image
                src={d}
                alt={5 === i ? "Marigold field in motion, warmer grade." : ""}
                fill
                sizes="25vw"
                className={`object-cover ${e.className}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section
      id="features"
      ref={e}
      aria-labelledby="features-heading"
      className="relative h-[420svh] scroll-mt-0"
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-4 pt-28 sm:px-6 sm:pt-32">
          <ComponentY progress={h} />
        </div>
        <div className="mx-auto min-h-0 w-full max-w-[1440px] flex-1 px-4 pt-10 pb-6 sm:px-6 sm:pt-12 sm:pb-8">
          <div
            ref={n}
            onPointerMove={(e) => {
              if ("mouse" !== e.pointerType) return;
              const t = e.currentTarget.getBoundingClientRect();
              p.set(e.clientX - t.left);
              m.set(e.clientY - t.top);
              g.set(1);
            }}
            onPointerEnter={(e) => {
              if ("mouse" !== e.pointerType) return;
              const t = e.currentTarget.getBoundingClientRect();
              v.x.jump(e.clientX - t.left);
              v.y.jump(e.clientY - t.top);
            }}
            onPointerLeave={() => g.set(0)}
            className="relative h-full"
          >
            <ComponentX progress={h} gridRef={n} />
            <ul className="grid h-full grid-cols-3 grid-rows-4 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:grid-rows-3">
              {f.map((e, i) => (
                <VariationTile key={e.note} index={i} progress={h} gridRef={n} field={v} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Variations };
