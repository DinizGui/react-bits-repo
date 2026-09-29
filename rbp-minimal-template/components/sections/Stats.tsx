"use client";

import { useRef, useEffect } from "react";
import { useInView, useSpring, useTransform, motion } from "motion/react";
const o = [0.16, 1, 0.3, 1] as const,
  l = [
    {
      value: 10,
      suffix: "M+",
      label: "Summaries Generated",
    },
    {
      value: 50,
      suffix: "K+",
      label: "Active Users",
    },
    {
      value: 4.9,
      suffix: "★",
      label: "Average Rating",
      decimals: 1,
    },
    {
      value: 98,
      suffix: "%",
      label: "Time Saved",
    },
  ];
function ComponentU({ value: e, suffix: n, decimals: o = 0 }: any) {
  const l = useRef(null),
    u = useInView(l, {
      once: true,
      amount: 0.5,
    }),
    c = useSpring(0, {
      stiffness: 50,
      damping: 30,
      restDelta: 0.001,
    }),
    h = useTransform(c, (e) => (o > 0 ? e.toFixed(o) : Math.floor(e).toString()));
  useEffect(() => {
    if (u) {
      c.set(e);
    }
  }, [u, c, e]);
  useEffect(() => {
    const e = h.on("change", (e) => {
      if (l.current) {
        l.current.textContent = e + n;
      }
    });
    return () => e();
  }, [h, n]);
  return <span ref={l}>0{n}</span>;
}
function ComponentC({ stat: e, index: r }: any) {
  const a = useRef(null),
    l = useInView(a, {
      once: true,
      amount: 0.5,
    });
  return (
    <motion.div
      ref={a}
      className="text-center"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        l
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 30,
            }
      }
      transition={{
        duration: 0.6,
        delay: 0.1 * r,
        ease: o,
      }}
    >
      <div className="text-foreground text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
        <ComponentU value={e.value} suffix={e.suffix} decimals={e.decimals ?? 0} />
      </div>
      <p className="text-muted-foreground mt-3 text-base md:text-lg">{e.label}</p>
    </motion.div>
  );
}
function Stats() {
  const e = useRef(null),
    r = useInView(e, {
      once: true,
      amount: 0.5,
    });
  return (
    <section className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={e}
          className="mb-12 text-center md:mb-20"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            r
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.6,
            ease: o,
          }}
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Trusted by Readers Worldwide
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {l.map((e, n) => (
            <ComponentC key={e.label} stat={e} index={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { Stats };
