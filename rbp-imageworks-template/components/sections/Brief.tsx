"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { useTransform, motion, useMotionValue, useScroll } from "motion/react";
import { useReducedMotion } from "@/components/ReducedMotion";
import { PHOTOS, photoSrc } from "@/lib/photos";
const c =
    "“Launch hero. One glass form, lit soft, floating. Keep the left third quiet for a headline. Colours from the board, nothing neon.”",
  h = c.split(" "),
  d = PHOTOS[3],
  p = photoSrc(d, 2400, 1500),
  f = [0.32, 0.86],
  m = [0.4, 0.58],
  g = [0.84, 0.96],
  v = (e: any, [t, i]: number[]) => {
    let n;
    return (n = (e - t) / (i - t)) < 0 ? 0 : n > 1 ? 1 : n;
  };
function BriefWord({ text: e, progress: i, index: n }: any) {
  const a = h.length,
    s = (n / a) * 0.28,
    l = Math.min(0.28, ((n + 3) / a) * 0.28),
    u = useTransform(i, (e) => 0.14 + 0.86 * v(e, [s, l]));
  return (
    <motion.span
      style={{
        opacity: u,
      }}
      className="inline-block"
    >
      {e}
      {" "}
    </motion.span>
  );
}
function ComponentX({ progress: e }: any) {
  const i = useRef(null),
    n = useMotionValue(0.14);
  useEffect(() => {
    const e = i.current;
    if (!e) return;
    const t = () => n.set(Math.min(0.6, Math.max(0.1, Math.min(200 / e.offsetWidth, 160 / e.offsetHeight))));
    t();
    const r = new ResizeObserver(t);
    r.observe(e);
    return () => r.disconnect();
  }, [n]);
  const s = useTransform(e, (e) => {
      let t;
      return (t = v(e, f)) < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }),
    c = useTransform([s, n], ([e, t]: any[]) => t + (1 - t) * e),
    h = useTransform(c, (e) => 16 / e),
    d = useTransform(e, (e) => v(e, [0.02, 0.14])),
    m = useTransform(e, (e) => v(e, g)),
    _ = useTransform(m, (e) => 12 * (1 - e));
  return (
    <motion.div
      ref={i}
      style={{
        scale: c,
        borderRadius: h,
        opacity: d,
      }}
      className="absolute inset-3 overflow-hidden bg-muted will-change-transform sm:inset-4"
    >
      <Image
        src={p}
        alt="White anemones streaked across a dark green field during a long exposure."
        fill
        sizes="100vw"
        className="object-cover"
      />
      <motion.span
        aria-hidden="true"
        style={{
          opacity: m,
        }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent"
      />
      <motion.div
        style={{
          opacity: m,
          y: _,
        }}
        className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10"
      >
        <p className="max-w-md font-serif text-[1.5rem] leading-[1.15] tracking-[-0.01em] text-balance sm:text-[2rem]">
          First take. Thirty-one seconds.
        </p>
      </motion.div>
    </motion.div>
  );
}
function Brief() {
  const e = useRef(null),
    n = useReducedMotion(),
    { scrollYProgress: a } = useScroll({
      target: e,
      offset: ["start start", "end end"],
    }),
    d = useTransform(a, (e) => 1 - v(e, m)),
    f =
      "mx-auto max-w-3xl text-center font-serif text-[clamp(1.75rem,3.3vw,2.75rem)] leading-[1.15] tracking-[-0.015em] text-balance text-foreground";
  return n ? (
    <section aria-label="The brief" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <p className={f}>{c}</p>
        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={p}
            alt="White anemones streaked across a dark green field during a long exposure."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
            <p className="max-w-md font-serif text-[1.5rem] leading-[1.15] sm:text-[2rem]">
              First take. Thirty-one seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section ref={e} aria-label="The brief" className="relative h-[320svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          style={{
            opacity: d,
          }}
          className="mx-auto max-w-[1440px] px-4 pt-28 sm:px-6 sm:pt-32"
        >
          <p className="sr-only">{c}</p>
          <p aria-hidden="true" className={f}>
            {h.map((e, i) => (
              <BriefWord key={i} text={e} progress={a} index={i} />
            ))}
          </p>
        </motion.div>
        <ComponentX progress={a} />
      </div>
    </section>
  );
}
export { Brief };
