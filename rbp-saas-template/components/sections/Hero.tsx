"use client";

import { useRef, useState, useMemo, useCallback, useEffect, useContext, useInsertionEffect } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { useTransform, useMotionValue, useSpring, frame, motion } from "motion/react";
function ComponentA({
  logos: e,
  speed: a = 120,
  direction: n = "left",
  logoHeight: i = 48,
  gap: s = 32,
  pauseOnHover: l = true,
  className: o,
}: any) {
  const c = useRef(null),
    d = useRef(null),
    u = useRef(null),
    m = useRef(false),
    f = useRef(null),
    x = useRef(null),
    h = useRef(0),
    p = useRef(0),
    g = useRef(0),
    [b, y] = useState(2),
    v = useMemo(() => Math.abs(a) * ("left" === n ? 1 : -1), [a, n]),
    w = useCallback(() => {
      const e = c.current?.clientWidth ?? 0,
        t = u.current?.getBoundingClientRect().width ?? 0;
      if (t > 0) {
        g.current = Math.ceil(t);
        const r = Math.ceil(e / t) + 2;
        y((e) => {
          const t = Math.max(2, r);
          return e === t ? e : t;
        });
      }
    }, []);
  useEffect(() => {
    const e = c.current,
      t = u.current;
    if (!e || !t) return;
    const r = new ResizeObserver(w);
    r.observe(e);
    r.observe(t);
    return () => r.disconnect();
  }, [w, e]);
  useEffect(() => {
    const e = d.current;
    if (!e) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      e.style.transform = "translate3d(0, 0, 0)";
      return;
    }
    const t = (r) => {
      if (null === x.current) {
        x.current = r;
      }
      const a = Math.max(0, r - x.current) / 1e3;
      x.current = r;
      const n = m.current && l ? 0 : v,
        i = 1 - Math.exp(-a / 0.25);
      p.current += (n - p.current) * i;
      const s = g.current;
      if (s > 0) {
        let t = h.current + p.current * a;
        h.current = t = ((t % s) + s) % s;
        e.style.transform = `translate3d(${-h.current}px, 0, 0)`;
      }
      f.current = requestAnimationFrame(t);
    };
    f.current = requestAnimationFrame(t);
    return () => {
      null !== f.current && (cancelAnimationFrame(f.current), (f.current = null));
      x.current = null;
    };
  }, [v, l]);
  const j = useCallback(() => {
      m.current = true;
    }, []),
    N = useCallback(() => {
      m.current = false;
    }, []);
  return (
    <div className="flex justify-center px-6">
      <div
        ref={c}
        className={`relative overflow-x-hidden max-w-480 w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${o ?? ""}`}
        style={{
          "--logo-gap": `${s}px`,
          "--logo-height": `${i}px`,
        } as React.CSSProperties}
      >
        <div
          ref={d}
          className="flex will-change-transform select-none w-max"
          onMouseEnter={j}
          onMouseLeave={N}
        >
          {Array.from(
            {
              length: b,
            },
            (r, a) => (
              <ul key={a} ref={0 === a ? u : undefined} className="flex items-center" aria-hidden={a > 0}>
                {e.map((e, r) => (
                  <li
                    key={`${a}-${r}`}
                    className="flex-none mr-(--logo-gap) text-(length:--logo-height) leading-none"
                  >
                    {e.href ? (
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center invert"
                        title={e.title}
                      >
                        {e.node}
                      </a>
                    ) : (
                      <span className="inline-flex items-center invert">{e.node}</span>
                    )}
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
const h = [0.23, 1, 0.32, 1] as const,
  p = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  },
  g = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  b = [
    {
      node: (
        <Image
          src="/mock-logos/acmecorp.svg"
          alt="Acme Corp"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/altshift.svg"
          alt="Altshift"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/biosynthesis.svg"
          alt="Biosynthesis"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/boltshift.svg"
          alt="Boltshift"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/capsule.svg"
          alt="Capsule"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/catalog.svg"
          alt="Catalog"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/cloudwatch.svg"
          alt="Cloudwatch"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
    {
      node: (
        <Image
          src="/mock-logos/commandr.svg"
          alt="Commandr"
          width={120}
          height={32}
          className="h-[1em] w-auto"
        />
      ),
    },
  ];
function Hero() {
  const e = useRef(null),
    l = useMotionValue(0),
    o = useMotionValue(0),
    c = {
      damping: 25,
      stiffness: 150,
    },
    d = useSpring(l, c),
    u = useSpring(o, c);
  return (
    <section
      ref={e}
      className="flex flex-col relative"
      style={{
        colorScheme: "light",
      }}
      onMouseMove={(t) => {
        if (!e.current || window.innerWidth < 850) return;
        const r = e.current.getBoundingClientRect(),
          a = r.left + r.width / 2,
          n = r.top + r.height / 2,
          i = (t.clientX - a) / (r.width / 2),
          s = (t.clientY - n) / (r.height / 2);
        l.set(20 * i);
        o.set(20 * s);
      }}
      onMouseLeave={() => {
        l.set(0);
        o.set(0);
      }}
    >
      <motion.div
        className="absolute inset-0 min-[850px]:inset-2.5 bg-cover bg-center bg-no-repeat -z-10 brightness-125 rounded-br-4xl rounded-bl-4xl min-[850px]:scale-105"
        style={{
          backgroundImage: "url(/BG.jpg)",
          x: d,
          y: u,
        }}
        aria-hidden="true"
      />
      <div className="flex items-start justify-center px-6 pt-64 max-[850px]:pt-32">
        <motion.div
          className="flex flex-col items-center max-[850px]:items-start text-center max-[850px]:text-left max-w-4xl max-[850px]:w-full"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.15,
            delayChildren: 0.2,
          }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 pl-4 pr-3 py-1.5 rounded-xl border border-black/10 bg-white text-black text-sm font-medium mb-6"
            variants={p}
            transition={{
              duration: 0.8,
              ease: h,
            }}
          >
            Now Available<span className="text-accent">✦</span>
          </motion.div>
          <h1 className="text-8xl max-[850px]:text-5xl font-medium tracking-tight leading-[1.1] mb-6 text-black">
            <motion.span
              className="block"
              variants={p}
              transition={{
                duration: 0.8,
                ease: h,
              }}
            >
              Build Faster
            </motion.span>
            <motion.span
              className="block"
              variants={p}
              transition={{
                duration: 0.8,
                ease: h,
              }}
            >
              {"Ship with "}
              <span className="italic font-serif text-accent">Confidence</span>
            </motion.span>
          </h1>
          <motion.p
            className="text-lg text-neutral-600 mb-8"
            variants={p}
            transition={{
              duration: 0.8,
              ease: h,
            }}
          >
            The modern platform for teams who want to move fast without breaking things
          </motion.p>
          <motion.button
            type="button"
            className="group relative cursor-pointer inline-flex items-center max-[850px]:w-full"
            variants={g}
            transition={{
              duration: 0.8,
              ease: h,
            }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <span className="absolute right-0 inset-y-0 w-[calc(100%-2rem)] max-[850px]:w-full rounded-xl bg-accent" />
            <span className="relative z-10 px-6 py-3 rounded-xl bg-black text-white font-medium max-[850px]:flex-1">
              Get Started
            </span>
            <span className="relative -left-px z-10 w-11 h-11 rounded-xl flex items-center justify-center text-black">
              <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className="relative px-6 mt-24 max-[850px]:mt-10"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: h,
        }}
      >
        <div className="relative max-w-5xl mx-auto">
          <div className="relative dark:mix-blend-darken rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl/5 mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
            <Image
              src="/dashboardmock.png"
              alt="Dashboard preview"
              width={1920}
              height={1080}
              className="w-full h-auto invert dark:invert-0 dark:contrast-100 contrast-125"
              priority
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="pt-24 pb-12"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: h,
        }}
      >
        <ComponentA logos={b} speed={60} logoHeight={42} gap={124} />
      </motion.div>
    </section>
  );
}
export { Hero };
