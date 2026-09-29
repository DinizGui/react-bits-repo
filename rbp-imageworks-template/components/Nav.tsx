"use client";

import { useState, useRef, useEffect, useId, useInsertionEffect, useCallback } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Logo } from "@/components/Logo";
import { softEase, quickEase, useReducedMotion } from "@/components/ReducedMotion";
const h = [
    {
      label: "Features",
      href: "#features",
      id: "features",
    },
    {
      label: "Benchmarks",
      href: "#benchmarks",
      id: "benchmarks",
    },
    {
      label: "Stories",
      href: "#stories",
      id: "stories",
    },
    {
      label: "Pricing",
      href: "#pricing",
      id: "pricing",
    },
  ],
  d = "https://app.imageworks.example.com/sign-in",
  p = "#pricing",
  f = {
    duration: 0.45,
    ease: softEase,
  },
  m = {
    duration: 0.22,
    ease: quickEase,
  },
  g = {
    type: "spring",
    stiffness: 420,
    damping: 36,
  } as const,
  v = [0.22, 1, 0.36, 1] as const,
  _ = (e) => ({
    hidden: {
      opacity: 0,
      y: -18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: v,
        delay: e,
        delayChildren: e + 0.25,
        staggerChildren: 0.055,
      },
    },
  }),
  x = {
    hidden: {
      opacity: 0,
      y: -6,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: v,
      },
    },
  };
function ComponentY({ open: e }: any) {
  const i = useReducedMotion()
      ? {
          duration: 0,
        }
      : f,
    r = "absolute left-0 h-[1.5px] w-full rounded-full bg-current";
  return (
    <span aria-hidden="true" className="relative block h-[9px] w-[15px]">
      <motion.span
        className={r}
        initial={false}
        animate={
          e
            ? {
                top: "50%",
                y: "-50%",
                rotate: 45,
              }
            : {
                top: 0,
                y: 0,
                rotate: 0,
              }
        }
        transition={i}
      />
      <motion.span
        className={r}
        initial={false}
        animate={
          e
            ? {
                top: "50%",
                y: "-50%",
                rotate: -45,
              }
            : {
                top: "100%",
                y: "-100%",
                rotate: 0,
              }
        }
        transition={i}
      />
    </span>
  );
}
function S({ active: e }: any) {
  const [i, r] = useState(null),
    a = useReducedMotion(),
    s = i ?? e;
  return (
    <ul className="relative hidden items-center md:flex" onMouseLeave={() => r(null)}>
      {h.map((n) => {
        const o = e === n.id;
        return (
          <motion.li key={n.id} variants={x} className="relative">
            {s === n.id && (
              <motion.span
                layoutId="nav-thumb"
                aria-hidden="true"
                className="absolute inset-0 rounded-lg bg-white/10 dark:bg-black/8"
                transition={
                  a
                    ? {
                        duration: 0,
                      }
                    : g
                }
              />
            )}
            <a
              href={n.href}
              onMouseEnter={() => r(n.id)}
              onFocus={() => r(n.id)}
              onBlur={() => r(null)}
              aria-current={o ? "location" : undefined}
              className={`relative z-[1] inline-flex h-8 items-center rounded-lg px-3 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${o || i === n.id ? "text-background" : "text-background/65"}`}
            >
              {n.label}
              <span
                aria-hidden="true"
                className={`absolute bottom-[3px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-background transition-[opacity,transform] duration-300 ${o ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              />
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}
function M({ open: e, id: i, onClose: r, active: s }: any) {
  const c = useReducedMotion(),
    g = useRef(null);
  useEffect(() => {
    if (!e) return;
    const t = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const i = (e) => {
      if ("Escape" === e.key) {
        r();
      }
    };
    document.addEventListener("keydown", i);
    const n = window.setTimeout(() => g.current?.focus(), c ? 0 : 250);
    return () => {
      document.body.style.overflow = t;
      document.removeEventListener("keydown", i);
      window.clearTimeout(n);
    };
  }, [e, r, c]);
  const v = c
      ? {
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          },
          transition: {
            duration: 0.15,
          },
        }
      : {
          initial: {
            opacity: 0,
            scale: 0.92,
            y: -8,
          },
          animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: f,
          },
          exit: {
            opacity: 0,
            scale: 0.96,
            y: -6,
            transition: m,
          },
        },
    _ = (e) =>
      c
        ? {}
        : {
            initial: {
              opacity: 0,
              y: 12,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                ...f,
                delay: 0.1 + 0.05 * e,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.12,
              },
            },
          };
  return (
    <AnimatePresence>
      {e && (
        <>
          <motion.button
            key="scrim"
            type="button"
            aria-label="Close menu"
            onClick={r}
            className="fixed inset-0 z-30 bg-foreground/25 backdrop-blur-[2px] md:hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          />
          <motion.div
            key="panel"
            id={i}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed top-[4.25rem] right-4 left-4 z-40 origin-top-left overflow-hidden rounded-2xl bg-foreground p-2 text-background shadow-[0_24px_70px_-24px_rgba(0,0,0,0.6)] md:hidden dark:shadow-[0_24px_70px_-24px_rgba(0,0,0,0.9)]"
            {...v}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {h.map((e, i) => (
                  <motion.li key={e.id} {..._(i)}>
                    <a
                      ref={0 === i ? g : undefined}
                      href={e.href}
                      onClick={r}
                      aria-current={s === e.id ? "location" : undefined}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[1.375rem] font-medium tracking-[-0.01em] transition-colors hover:bg-background/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <span className="flex items-center gap-3">
                        {s === e.id && (
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-background" />
                        )}
                        {e.label}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-background/40 transition-[transform,color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                        aria-hidden
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div className="mt-3 grid grid-cols-2 gap-2" {..._(h.length)}>
              <a
                href={d}
                onClick={r}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-background/12 text-sm font-medium text-background transition-colors hover:bg-background/18 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Sign in
              </a>
              <a
                href={p}
                onClick={r}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-background text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start for free
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
function Nav() {
  let e;
  const r = useReducedMotion(),
    [a, g] = useState(false),
    [v, b] = useState(false),
    [E, T] = useState(null),
    w = useId(),
    A = useRef(null),
    { scrollY: R } = useScroll();
  e = (e) => {
    g(e > 48);
  };
  useInsertionEffect(() => R.on("change", e), [R, "change", e]);
  const C = useCallback(() => {
    b(false);
    A.current?.focus();
  }, []);
  useEffect(() => {
    const e = h.map((e) => document.getElementById(e.id)).filter((e) => null !== e);
    if (0 === e.length) return;
    const t = new IntersectionObserver(
      (e) => {
        for (const t of e)
          t.isIntersecting ? T(t.target.id) : E === t.target.id && t.boundingClientRect.top > 0 && T(null);
      },
      {
        rootMargin: "-33% 0px -60% 0px",
      },
    );
    for (const i of e) t.observe(i);
    return () => t.disconnect();
  }, [E]);
  useEffect(() => {
    const e = window.matchMedia("(min-width: 768px)"),
      t = () => {
        if (e.matches) {
          b(false);
        }
      };
    e.addEventListener("change", t);
    return () => e.removeEventListener("change", t);
  }, []);
  return (
    <>
      <motion.header
        onKeyDown={(e) => {
          if ("Escape" === e.key && v) {
            C();
          }
        }}
        className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-4 pt-4 sm:px-5 sm:pt-5"
        aria-label="Site"
      >
        <motion.div
          variants={_(0.15)}
          initial={!r && "hidden"}
          animate="show"
          className="flex h-11 items-center gap-1 rounded-xl bg-foreground p-1 text-background shadow-[0_12px_36px_-14px_rgba(0,0,0,0.45)] dark:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.8)]"
        >
          <motion.div variants={x} className="flex items-center pr-1 pl-2">
            <Logo className="h-9 text-background" compact={a} />
          </motion.div>
          <S active={E} />
          <motion.button
            variants={x}
            ref={A}
            type="button"
            onClick={() => b((e) => !e)}
            aria-expanded={v}
            aria-controls={w}
            aria-label={v ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-background/80 transition-colors hover:bg-background/10 hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
          >
            <ComponentY open={v} />
          </motion.button>
        </motion.div>
        <motion.div
          variants={_(0.3)}
          initial={!r && "hidden"}
          animate="show"
          className="flex h-11 items-center"
        >
          <AnimatePresence initial={false}>
            {!a && (
              <motion.div
                key="sign-in"
                className="hidden overflow-hidden sm:block"
                initial={
                  !r && {
                    width: 0,
                    opacity: 0,
                  }
                }
                animate={{
                  width: "auto",
                  opacity: 1,
                  transition: r
                    ? {
                        duration: 0,
                      }
                    : f,
                }}
                exit={{
                  width: 0,
                  opacity: 0,
                  transition: r
                    ? {
                        duration: 0,
                      }
                    : m,
                }}
              >
                <a
                  href={d}
                  className="mr-2 inline-flex h-11 items-center rounded-xl bg-foreground/[0.07] px-4 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-foreground/[0.11] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:bg-white/[0.13] dark:hover:bg-white/[0.18]"
                >
                  Sign in
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={p}
            className="group inline-flex h-11 items-center gap-1 rounded-xl bg-foreground pr-3 pl-4 text-sm font-medium whitespace-nowrap text-background shadow-[0_12px_36px_-14px_rgba(0,0,0,0.45)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:shadow-[0_12px_36px_-14px_rgba(0,0,0,0.8)]"
          >
            Start for free
            <ChevronRight
              className="h-4 w-4 text-background/70 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </motion.div>
      </motion.header>
      <M open={v} id={w} onClose={C} active={E} />
    </>
  );
}
export { Nav };
