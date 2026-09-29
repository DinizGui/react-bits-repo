"use client";

import { useState, useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import { useReducedMotion, softEase } from "@/components/ReducedMotion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
const K = [
    44.2, 43.8, 44.1, 43.6, 43.9, 43.3, 43, 42.6, 42.9, 42.2, 41.8, 41.5, 40.9, 38.4, 35.8, 34.5, 33.9, 33.5,
    33.2, 32.8, 32.6, 32.3, 32, 31.8, 31.6, 31.4, 31.3, 31.1, 31, 31,
  ],
  Z = [30, 35, 40, 45] as const,
  J = [210, 260, 300, 380, 430, 520, 640, 760, 900, 1040, 1220, 1400],
  Q = [
    {
      name: "Imageworks",
      seconds: 31,
      label: "31 s",
      ours: true,
    },
    {
      name: "Stock search",
      seconds: 7200,
      label: "2 h",
    },
    {
      name: "Retouch a shot",
      seconds: 172800,
      label: "2 days",
    },
    {
      name: "Book a shoot",
      seconds: 1814400,
      label: "3 weeks",
    },
  ],
  ee = Math.log10(10),
  et = Math.log10(5184e3),
  ei = [
    {
      seconds: 60,
      label: "1 min",
    },
    {
      seconds: 3600,
      label: "1 hour",
    },
    {
      seconds: 86400,
      label: "1 day",
    },
    {
      seconds: 604800,
      label: "1 week",
    },
    {
      seconds: 2592e3,
      label: "1 month",
    },
  ],
  en = (e) => ((Math.log10(e) - ee) / (et - ee)) * 100;
function ComponentEr({ value: e, decimals: i = 0, active: n, className: a }: any) {
  const s = useReducedMotion(),
    [o, l] = useState(0);
  useEffect(() => {
    if (!n || s) return;
    const t = animate(0, e, {
      duration: 1.6,
      ease: softEase,
      onUpdate: (e) => l(e),
    });
    return () => t.stop();
  }, [n, e, s]);
  const u = (s ? e : o).toFixed(i);
  return (
    <span className={a}>
      <span className="sr-only">{e.toFixed(i)}</span>
      <span aria-hidden="true" className="tabular-nums">
        {u}
      </span>
    </span>
  );
}
function ComponentEa({ active: e }: any) {
  const i = useReducedMotion(),
    n = e || i,
    a = K.length,
    s = K.map((e, t) => [(t / (a - 1)) * 1e3, 1e3 - ((e - 28) / 22) * 1e3]),
    o = (function (e) {
      const t = e.length;
      if (t < 2) return "";
      const i = e.slice(1).map((t, i) => t[0] - (e[i]?.[0] ?? 0)),
        n = e
          .slice(1)
          .map((t, i) => t[1] - (e[i]?.[1] ?? 0))
          .map((e, t) => e / (i[t] || 1)),
        r = [n[0] ?? 0];
      for (let e = 1; e < t - 1; e++) {
        const t = n[e - 1] ?? 0,
          i = n[e] ?? 0;
        r.push(t * i <= 0 ? 0 : (2 * t * i) / (t + i));
      }
      r.push(n[t - 2] ?? 0);
      let a = `M${e[0]?.[0]} ${e[0]?.[1]}`;
      for (let i = 0; i < t - 1; i++) {
        const [t, n] = e[i] ?? [0, 0],
          [s, o] = e[i + 1] ?? [0, 0],
          l = (s - t) / 3;
        a += ` C${t + l} ${n + l * (r[i] ?? 0)}, ${s - l} ${o - l * (r[i + 1] ?? 0)}, ${s} ${o}`;
      }
      return a;
    })(s),
    l = `${o} L1000 1000 L0 1000 Z`,
    u = s[a - 1] ?? [1e3, 1e3],
    c = "render-time-fill";
  return (
    <div className="relative h-[240px] sm:h-[300px] lg:h-[340px]">
      {Z.map((e) => (
        <div
          key={e}
          style={{
            top: `${(1 - (e - 28) / 22) * 100}%`,
          }}
          className="absolute inset-x-0 flex items-center gap-3"
        >
          <span className="w-8 text-right text-xs text-muted-foreground tabular-nums">{e}s</span>
          <span className="h-px flex-1 bg-foreground/[0.08]" />
        </div>
      ))}
      <div className="absolute inset-y-0 right-0 left-11 text-foreground">
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={c} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity={0.22} />
              <stop offset="0.55" stopColor="currentColor" stopOpacity={0.06} />
              <stop offset="1" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>
          <motion.path
            d={l}
            fill={`url(#${c})`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: n ? 1 : 0,
            }}
            transition={{
              duration: 1.4,
              delay: i ? 0 : 0.5,
            }}
          />
          <motion.path
            d={o}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{
              pathLength: i ? 1 : 0,
            }}
            animate={{
              pathLength: n ? 1 : 0,
            }}
            transition={{
              duration: i ? 0 : 2,
              ease: softEase,
            }}
          />
        </svg>
        <motion.div
          style={{
            top: `${(u[1] / 1e3) * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: n ? 1 : 0,
            scale: n ? 1 : 0.6,
          }}
          transition={{
            duration: 0.5,
            delay: i ? 0 : 1.8,
          }}
          className="absolute left-full -translate-x-1/2 -translate-y-1/2"
        >
          <span className="relative block h-3 w-3 rounded-full bg-foreground ring-[3px] ring-muted">
            <span className="absolute inset-0 rounded-full bg-foreground/40 motion-safe:animate-ping" />
          </span>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 -bottom-7 flex justify-between pl-11 text-xs text-muted-foreground">
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}
function ComponentEs({ active: e }: any) {
  const i = useReducedMotion(),
    n = e || i,
    a = Math.max(...J);
  return (
    <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
      {J.map((e, s) => (
        <motion.span
          key={s}
          style={{
            height: `${(e / a) * 100}%`,
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: n ? 1 : 0,
          }}
          transition={{
            duration: i ? 0 : 0.9,
            ease: softEase,
            delay: i ? 0 : 0.04 * s,
          }}
          className={`flex-1 origin-bottom rounded-[2px] ${s === J.length - 1 ? "bg-foreground" : "bg-foreground/[0.16]"}`}
        />
      ))}
    </div>
  );
}
function ComponentEo({ active: e }: any) {
  const i = useReducedMotion(),
    n = 2 * Math.PI * 28;
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden="true">
      <circle cx={32} cy={32} r={28} fill="none" strokeWidth={5} className="stroke-foreground/[0.12]" />
      <motion.circle
        cx={32}
        cy={32}
        r={28}
        fill="none"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={n}
        className="stroke-foreground"
        initial={{
          strokeDashoffset: n,
        }}
        animate={{
          strokeDashoffset: e || i ? 0.38 * n : n,
        }}
        transition={{
          duration: i ? 0 : 1.4,
          ease: softEase,
        }}
      />
    </svg>
  );
}
function ComponentEl({ active: e }: any) {
  const i = useReducedMotion(),
    n = e || i;
  return (
    <div className="grid h-16 w-16 grid-cols-10 gap-[3px]" aria-hidden="true">
      {Array.from(
        {
          length: 100,
        },
        (e, r) => (
          <motion.span
            key={r}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: n ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: i ? 0 : 0.008 * r,
            }}
            className={`rounded-full ${37 === r ? "bg-foreground/[0.18]" : "bg-foreground"}`}
          />
        ),
      )}
    </div>
  );
}
function ComponentEu({ active: e }: any) {
  const i = useReducedMotion(),
    n = e || i;
  return (
    <div className="relative mt-36 mb-14 hidden h-px bg-border md:block">
      {ei.map((e) => (
        <div
          key={e.label}
          style={{
            left: `${en(e.seconds)}%`,
          }}
          className="absolute top-0 -translate-x-1/2"
        >
          <span className="block h-2 w-px bg-border" />
          <span className="mt-2 block text-xs whitespace-nowrap text-muted-foreground">{e.label}</span>
        </div>
      ))}
      {Q.map((e, a) => (
        <motion.div
          key={e.name}
          style={{
            left: `${en(e.seconds)}%`,
          }}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: n ? 1 : 0,
            y: n ? 0 : 8,
          }}
          transition={{
            duration: i ? 0 : 0.6,
            ease: softEase,
            delay: i ? 0 : 0.2 + 0.12 * a,
          }}
          className="absolute bottom-0 -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span
              className={`font-serif whitespace-nowrap ${e.ours ? "text-[2rem] leading-none" : "text-[1.25rem] leading-none text-muted-foreground"}`}
            >
              {e.label}
            </span>
            <span
              className={`mt-1.5 text-xs whitespace-nowrap ${e.ours ? "text-foreground" : "text-muted-foreground"}`}
            >
              {e.name}
            </span>
            <span className="mt-3 h-6 w-px bg-border" />
            <span
              className={`-mb-[5px] block h-[11px] w-[11px] rounded-full ring-4 ring-muted ${e.ours ? "bg-foreground" : "border border-foreground/50 bg-muted"}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
function Benchmarks() {
  const e = useRef(null),
    r = useInView(e, {
      once: true,
      margin: "-20% 0px",
    }),
    a = useRef(null),
    s = useInView(a, {
      once: true,
      margin: "-15% 0px",
    }),
    o = useRef(null),
    l = useInView(o, {
      once: true,
      margin: "-15% 0px",
    });
  return (
    <section id="benchmarks" aria-labelledby="benchmarks-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <SectionHeading
          id="benchmarks-heading"
          title="Faster than the shoot you would have booked."
          description="Measured across every render on the standard queue last month. No cherry-picked jobs, no priority lane."
        />
        <Reveal inView y={24} className="mt-12 lg:mt-14">
          <div
            ref={e}
            className="grid gap-10 rounded-2xl border border-border bg-muted p-6 sm:p-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16 lg:p-10"
          >
            <div className="flex flex-col">
              <p className="font-serif text-[5rem] leading-[0.9] tracking-[-0.03em] sm:text-[6.5rem]">
                <ComponentEr value={31} active={r} />
                <span className="text-[0.5em] text-muted-foreground">s</span>
              </p>
              <h3 className="mt-6 text-lg font-medium">Median time to a first render</h3>
              <p className="mt-2 max-w-sm text-[15px] leading-7 text-muted-foreground">
                From pressing render to a full-resolution image on screen, every day of the last thirty. The
                drop mid-month is the current model generation arriving.
              </p>
            </div>
            <div className="pb-8">
              <ComponentEa active={r} />
            </div>
          </div>
        </Reveal>
        <Reveal inView y={24} delay={0.05} className="mt-4 md:mt-5">
          <ul
            ref={a}
            className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-background md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            <li className="flex items-end justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="font-serif text-[3rem] leading-none tracking-[-0.02em]">
                  <ComponentEr value={1.4} decimals={1} active={s} />
                  <span className="text-[0.55em] text-muted-foreground">M</span>
                </p>
                <p className="mt-3 text-[15px] text-muted-foreground">Images rendered last month</p>
              </div>
              <div className="w-32 shrink-0 sm:w-40">
                <ComponentEs active={s} />
              </div>
            </li>
            <li className="flex items-end justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="font-serif text-[3rem] leading-none tracking-[-0.02em]">
                  <ComponentEr value={62} active={s} />
                  <span className="text-[0.55em] text-muted-foreground">%</span>
                </p>
                <p className="mt-3 text-[15px] text-muted-foreground">Approved on the first take</p>
              </div>
              <ComponentEo active={s} />
            </li>
            <li className="flex items-end justify-between gap-6 p-6 sm:p-8">
              <div>
                <p className="font-serif text-[3rem] leading-none tracking-[-0.02em]">
                  <ComponentEr value={99.2} decimals={1} active={s} />
                  <span className="text-[0.55em] text-muted-foreground">%</span>
                </p>
                <p className="mt-3 text-[15px] text-muted-foreground">Brand rules held without a fix</p>
              </div>
              <ComponentEl active={s} />
            </li>
          </ul>
        </Reveal>
        <Reveal inView y={24} delay={0.05} className="mt-4 md:mt-5">
          <div ref={o} className="rounded-2xl border border-border bg-muted p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.02em]">
                Brief to approved image.
              </h3>
              <p className="max-w-md text-[15px] leading-7 text-muted-foreground">
                The four ways a team gets a picture, timed end to end on the same campaign brief. Log scale,
                so the whole story fits on one line.
              </p>
            </div>
            <ComponentEu active={l} />
            <ul className="mt-8 divide-y divide-border md:hidden">
              {Q.map((e) => (
                <li key={e.name} className="flex items-baseline justify-between py-3">
                  <span className={e.ours ? "text-foreground" : "text-muted-foreground"}>{e.name}</span>
                  <span className={`font-serif text-xl ${e.ours ? "" : "text-muted-foreground"}`}>
                    {e.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export { Benchmarks };
