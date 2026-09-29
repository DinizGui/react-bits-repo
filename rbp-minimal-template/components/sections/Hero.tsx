"use client";

import { useState, useRef, useMemo, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import { useMotionValue, useSpring, motion } from "motion/react";
import DitherBackground from "@/components/DitherBackground";
import { cn } from "@/lib/utils";
const RotatingCards = ({
  cards: e,
  radius: n = 360,
  duration: r = 20,
  cardWidth: s = 160,
  cardHeight: c = 190,
  pauseOnHover: h = true,
  reverse: d = false,
  draggable: p = false,
  autoPlay: f = true,
  onCardClick: m,
  mouseWheel: g = false,
  className: v = "",
  cardClassName: y = "",
  initialRotation: x = 0,
  showTrackLine: _ = false,
  trackLineOffset: b = 25,
}: any) => {
  const [S, M] = useState(false),
    [w, T] = useState(false),
    [E, A] = useState(false),
    [C, R] = useState(false),
    P = useRef(null),
    I = useRef(x),
    L = useRef(null),
    N = useRef(0),
    D = useRef(0),
    U = useMotionValue(x),
    O = useSpring(U, {
      damping: 30,
      stiffness: 200,
      mass: 0.5,
    }),
    F = useMemo(() => {
      const t = (2 * Math.PI) / e.length;
      return e.map((e, i) => {
        const r = t * i + (x * Math.PI) / 180;
        return {
          x: Math.cos(r) * n,
          y: Math.sin(r) * n,
          angle: (180 * r) / Math.PI,
        };
      });
    }, [e, n, x]),
    z = useRef(e),
    k = e.some((e) => e.image);
  if (z.current !== e) {
    z.current = e;
  }
  useEffect(() => {
    R(true);
  }, []);
  useEffect(() => {
    if (!k) return void A(true);
    A(false);
    let t = false;
    (async () => {
      const n = e
        .filter((e) => e.image)
        .map(
          (e) =>
            new Promise((t, n) => {
              const i = new Image();
              i.src = e.image;
              i.onload = t;
              i.onerror = n;
            }),
        );
      try {
        await Promise.all(n);
      } catch (e) {
      } finally {
        t || A(true);
      }
    })();
    return () => {
      t = true;
    };
  }, [e, k]);
  useEffect(() => {
    let e;
    L.current = null;
    const t = (n) => {
      if (null !== L.current && !S && !w && f && E) {
        const e = (360 / r) * Math.min((n - L.current) / 1e3, 0.1) * (d ? -1 : 1);
        I.current += e;
        U.set(I.current);
      }
      L.current = n;
      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);
    return () => {
      cancelAnimationFrame(e);
    };
  }, [r, d, S, w, f, U, E]);
  const B = useCallback((e, t) => {
      if (!P.current) return 0;
      const n = P.current.getBoundingClientRect(),
        i = n.left + n.width / 2;
      return (180 * Math.atan2(t - (n.top + n.height / 2), e - i)) / Math.PI;
    }, []),
    V = useCallback(
      (e) => {
        T(true);
        N.current = B(
          "clientX" in e ? e.clientX : (e.touches[0]?.clientX ?? 0),
          "clientY" in e ? e.clientY : (e.touches[0]?.clientY ?? 0),
        );
        D.current = I.current;
      },
      [B],
    ),
    G = useCallback(
      (e, t) => {
        if (!w) return;
        const n = B(t.point.x, t.point.y) - N.current,
          i = D.current + n;
        I.current = i;
        U.set(i);
      },
      [w, B, U],
    ),
    H = useCallback(() => {
      T(false);
    }, []);
  useEffect(() => {
    if (!g || !P.current) return;
    const e = (e) => {
        e.preventDefault();
        const t = 0.5 * e.deltaY;
        I.current += t * (d ? -1 : 1);
        U.set(I.current);
      },
      t = P.current;
    t.addEventListener("wheel", e, {
      passive: false,
    });
    return () => {
      t.removeEventListener("wheel", e);
    };
  }, [g, d, U]);
  const j = useCallback(
      (e, t) => {
        if (m) {
          m(e, t);
        }
      },
      [m],
    ),
    W = 2 * n + s,
    X = 2 * n + c;
  return (
    <div
      ref={P}
      className={cn("relative flex shrink-0 items-center justify-center", v)}
      style={{
        width: `${W}px`,
        height: `${X}px`,
      }}
    >
      {_ && (
        <svg
          className="pointer-events-none absolute inset-0"
          width="100%"
          height="100%"
          viewBox={`0 0 ${W} ${X}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx={W / 2}
            cy={X / 2}
            r={n + b}
            fill="none"
            className="stroke-foreground/10"
            strokeWidth="1"
          />
        </svg>
      )}
      <motion.div
        key={e.length}
        className="relative w-full h-full"
        style={{
          rotate: O,
          willChange: "transform",
        }}
        drag={p}
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={V}
        onDrag={G}
        onDragEnd={H}
      >
        {C &&
          e.map((n, r) => {
            const a = F[r];
            return a ? (
              <motion.div
                key={`${n.id}-${e.length}`}
                className={cn(
                  "absolute rounded-xl shadow-lg overflow-hidden cursor-pointer",
                  "border border-foreground/10",
                  "bg-background text-foreground",
                  y,
                )}
                style={{
                  width: `${s}px`,
                  height: `${c}px`,
                  left: "50%",
                  top: "50%",
                  x: a.x,
                  y: a.y,
                  marginLeft: `-${s / 2}px`,
                  marginTop: `-${c / 2}px`,
                  background: n.background || (n.image ? `url(${n.image}) center/cover` : undefined),
                  willChange: "transform",
                  rotate: a.angle + 90,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: E ? 1 : 0,
                  scale: E ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * r,
                  ease: "easeOut",
                }}
                onMouseEnter={() => h && M(true)}
                onMouseLeave={() => h && M(false)}
                onClick={() => j(n, r)}
                {...(h
                  ? {
                      whileHover: {
                        scale: 1.05,
                        transition: {
                          duration: 0.2,
                        },
                      },
                    }
                  : {})}
              >
                <div className="w-full h-full">{n.content}</div>
              </motion.div>
            ) : null;
          })}
      </motion.div>
    </div>
  );
};
const h = [0.16, 1, 0.3, 1] as const,
  d = [
    {
      label: "Chrome Extension",
      image: "/img/chrome-extension.webp",
    },
    {
      label: "Safari Extension",
      image: "/img/safari-extension.webp",
    },
    {
      label: "API Access",
      image: "/img/api-access.webp",
    },
    {
      label: "Article Summary",
      image: "/img/article-summary.webp",
    },
    {
      label: "Video Summary",
      image: "/img/video-summary.webp",
    },
    {
      label: "Podcast Summary",
      image: "/img/podcast-summary.webp",
    },
    {
      label: "PDF Summary",
      image: "/img/pdf-summary.webp",
    },
    {
      label: "Research Papers",
      image: "/img/research-papers.webp",
    },
    {
      label: "Social Threads",
      image: "/img/social-threads.webp",
    },
    {
      label: "Email Digest",
      image: "/img/email-digest.webp",
    },
    {
      label: "Book Summary",
      image: "/img/book-summary.webp",
    },
  ].map((e, n) => ({
    id: n + 1,
    content: (
      <div className="flex h-full flex-col p-2">
        <div className="relative flex-1 overflow-hidden rounded-t-sm rounded-b-full">
          <NextImage src={e.image} alt={e.label} fill className="object-cover grayscale" />
        </div>
        <div className="px-1 pt-3 text-center">
          <span className="text-sm font-medium">{e.label}</span>
        </div>
      </div>
    ),
  }));
function Hero() {
  const e = useRef(null),
    r = useRef(null),
    [o, l] = useState(false),
    [u, p] = useState(false),
    [f, m] = useState(0),
    [g, v] = useState(true),
    y = useRef(0),
    x = useRef(null);
  useEffect(() => {
    const e = () => v(window.innerWidth < 768);
    e();
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, []);
  useEffect(() => {
    const e = r.current;
    if (!e) return;
    const t = new IntersectionObserver(
      ([e]) => {
        e && (l(e.isIntersecting), e.isIntersecting && p(true));
      },
      {
        threshold: 0,
        rootMargin: "-10% 0px -10% 0px",
      },
    );
    t.observe(e);
    return () => t.disconnect();
  }, []);
  useEffect(() => {
    const e = o ? 1 : 0,
      t = () => {
        const n = e - y.current;
        Math.abs(n) > 0.001
          ? ((y.current += 0.02 * n), m(y.current), (x.current = requestAnimationFrame(t)))
          : ((y.current = e), m(e), 0 === e && p(false));
      };
    if (x.current) {
      cancelAnimationFrame(x.current);
    }
    x.current = requestAnimationFrame(t);
    return () => {
      if (x.current) {
        cancelAnimationFrame(x.current);
      }
    };
  }, [o]);
  return (
    <section
      ref={e}
      className="relative flex min-h-dvh flex-col items-center justify-start overflow-hidden px-6 pt-40 sm:pt-82"
    >
      {!g && u && <DitherBackground opacity={f} />}
      <div ref={r} className="relative z-10 mx-auto md:text-center">
        <h1 className="mb-8 text-5xl font-medium tracking-tighter md:text-8xl lg:text-8xl">
          {"No More Time To Waste".split("").map((e, n) => (
            <motion.span
              key={n}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.4,
                delay: 0.03 * n,
                ease: "easeOut",
              }}
              className="inline-block"
              style={{
                whiteSpace: " " === e ? "pre" : "normal",
              }}
            >
              {e}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-2xl leading-12 tracking-tight md:text-3xl"
        >
          <span className="text-foreground bg-foreground/5 inline-block rounded-md px-2 py-0.5 leading-10">
            Read less
          </span>{" "}
          &{" "}
          <span className="text-foreground bg-foreground/5 inline-block rounded-full px-4 py-0.5 leading-10">
            know more
          </span>{" "}
          Save{" "}
          <span className="text-foreground bg-foreground/5 inline-block rounded-md px-2 py-0.5 leading-10">
            hours
          </span>{" "}
          every week with AI summaries done right.
        </motion.p>
      </div>
      <div
        className="relative -mx-6 mt-2 h-100 w-screen overflow-hidden sm:h-125 md:h-137.5 lg:h-150 xl:h-175"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      >
        <div className="absolute left-1/2 top-25 -translate-x-1/2 sm:top-30 lg:top-35 xl:top-40">
          <div className="origin-top scale-[0.6] lg:scale-[0.7] xl:scale-100">
            <RotatingCards
              cards={d}
              radius={1e3}
              cardClassName="rounded-md"
              cardWidth={350}
              cardHeight={275}
              duration={100}
              pauseOnHover
              autoPlay
              initialRotation={-90}
              showTrackLine
              trackLineOffset={25}
            />
          </div>
        </div>
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pb-24 text-center"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.8,
          ease: h,
        }}
      >
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl">
          {"Turn Hours of Content "}
          <br />
          Into Fast Insight
        </h2>
        <motion.a
          href="#"
          className="bg-accent group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md py-3 pl-5 pr-3 font-medium text-black shadow-lg shadow-accent/25 transition-all duration-500 ease-out hover:rounded-[50px] hover:shadow-xl hover:shadow-accent/40 sm:w-auto"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: h,
            delay: 0.2,
          }}
        >
          <span>Get Started Free</span>
          <span className="bg-background text-foreground flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
            <ChevronRight className="relative left-px h-4 w-4" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
export { Hero };
