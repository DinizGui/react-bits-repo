"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const l = [0.16, 1, 0.3, 1] as const,
  a = [0.65, 0, 0.35, 1] as const,
  c = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  } as const,
  h = [
    {
      label: "Twitter",
      icon: function ({ className: e }: any) {
        return (
          <svg className={e} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      },
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: function ({ className: e }: any) {
        return (
          <svg className={e} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      },
      href: "#",
    },
    {
      label: "GitHub",
      icon: function ({ className: e }: any) {
        return (
          <svg className={e} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      },
      href: "#",
    },
  ],
  d = [
    {
      id: "products",
      title: "PRODUCTS",
      links: [
        {
          label: "Chrome Extension",
          href: "#",
          badge: null,
        },
        {
          label: "Safari Extension",
          href: "#",
          badge: "NEW",
        },
        {
          label: "API Access",
          href: "#",
          badge: null,
        },
      ],
    },
    {
      id: "resources",
      title: "RESOURCES",
      links: [
        {
          label: "Documentation",
          href: "#",
          badge: null,
        },
        {
          label: "Changelog",
          href: "#",
          badge: null,
        },
        {
          label: "Pricing",
          href: "#",
          badge: null,
        },
        {
          label: "Blog",
          href: "#",
          badge: null,
        },
      ],
    },
    {
      id: "contact",
      title: "CONTACT",
      links: [],
    },
  ];
function ComponentU({ isOpen: e }: any) {
  return (
    <div className="relative flex h-2.5 w-7 cursor-pointer flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={
          e
            ? {
                rotate: 45,
                y: 4,
              }
            : {
                rotate: 0,
                y: 0,
              }
        }
        transition={{
          duration: 0.4,
          ease: l,
        }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={
          e
            ? {
                rotate: -45,
                y: -4,
              }
            : {
                rotate: 0,
                y: 0,
              }
        }
        transition={{
          duration: 0.4,
          ease: l,
        }}
      />
    </div>
  );
}
function ComponentP({ card: e }: any) {
  return (
    <motion.div
      className="bg-menu-card min-h-50 rounded-2xl p-6 min-[1080px]:min-h-80"
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: l,
          },
        },
      }}
    >
      <span className="text-background/50 text-xs font-medium tracking-widest uppercase">{e.title}</span>
      {"contact" === e.id && (
        <div className="mt-6 flex h-[calc(100%-2rem)] flex-col justify-between pb-4">
          <Link
            href="mailto:hello@tldr.app"
            className="text-background hover:text-background/70 text-xl font-semibold transition-colors md:text-2xl"
          >
            hello@tldr.app
          </Link>
          <div className="mt-auto flex items-center gap-4 pt-8">
            {h.map(({ label: e, icon: ComponentI, href: r }: any) => (
              <a
                key={e}
                href={r}
                className="bg-background/10 text-background hover:bg-background/20 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                aria-label={e}
              >
                <ComponentI className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      )}
      {e.links.length > 0 && (
        <ul className="mt-6">
          {e.links.map((r, n) => (
            <li key={r.label}>
              <Link
                href={r.href}
                className="group text-background hover:text-background/70 flex items-center justify-between py-4 text-xl font-semibold transition-all duration-300 md:text-2xl"
              >
                <span className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                  {r.label}
                  {r.badge && (
                    <span className="bg-accent rounded px-2 py-0.5 text-xs font-medium text-black uppercase">
                      {r.badge}
                    </span>
                  )}
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
              {n < e.links.length - 1 && <div className="bg-background/10 h-px" />}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
function ComponentM() {
  return (
    <motion.div
      className="col-span-full flex items-center justify-center gap-2 pt-2"
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: l,
          },
        },
      }}
    >
      <Link
        href="#"
        className="text-background rounded-[3.5px] bg-background/10 px-6 py-3 text-xl font-medium tracking-tight transition-colors"
      >
        Sign Up
      </Link>
      <Link
        href="#"
        className="group bg-accent relative rounded-[3.5px] px-6 py-3 text-xl font-medium tracking-tight text-black transition-all duration-500 hover:rounded-[50px]"
      >
        <span
          className="relative block h-[1.25em] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <span className="flex flex-col duration-0 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2/3 group-hover:transition-transform group-hover:duration-300">
            <span className="block leading-[1.25em]">Try It</span>
            <span className="block leading-[1.25em]">Try It</span>
            <span className="block leading-[1.25em]">Try It</span>
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
function Header() {
  const [e, i] = useState(false),
    [h, f] = useState(false),
    [g, v] = useState(0),
    x = useSyncExternalStore(
      (e) => {
        const t = window.matchMedia("(min-width: 700px)");
        t.addEventListener("change", e);
        return () => t.removeEventListener("change", e);
      },
      () => window.matchMedia("(min-width: 700px)").matches,
      () => true,
    );
  React.useEffect(() => {
    const e = document.querySelector<HTMLElement>(".h-screen.overflow-y-auto");
    if (e) {
      v(e.offsetWidth - e.clientWidth);
    }
    const t = () => {
      f((e ? e.scrollTop : window.scrollY) > 50);
    };
    t();
    window.addEventListener("scroll", t, {
      passive: true,
    });
    e?.addEventListener("scroll", t, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", t);
      e?.removeEventListener("scroll", t);
    };
  }, []);
  return (
    <>
      <AnimatePresence>
        {e && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
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
              duration: 0.3,
              ease: l,
            }}
            onClick={() => i(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <motion.header
        className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4"
        style={{
          paddingRight: `calc(1rem + ${g}px)`,
        }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: l,
        }}
      >
        <motion.nav
          className="bg-foreground shadow-2xl/20 border border-neutral-200/10 flex max-w-6xl flex-col overflow-hidden rounded-md"
          initial={false}
          animate={{
            width: e ? "100%" : h ? "56rem" : "42rem",
          }}
          transition={{
            ...c,
            delay: e ? 0 : 0.15,
          }}
        >
          <div className="flex w-full items-center justify-between py-2 pr-2 pl-4">
            <Link href="/">
              <span className="text-background text-4xl font-extrabold -tracking-widest">TLDR</span>
            </Link>
            <button
              className="text-background/80 hover:text-background flex h-full cursor-pointer items-center gap-2 rounded-[3.5px] px-2 transition-colors hover:bg-white/10"
              onClick={() => i(!e)}
            >
              <ComponentU isOpen={e} />
              <span className="text-xl font-medium tracking-tight">Menu</span>
            </button>
          </div>
          <AnimatePresence>
            {e && (
              <motion.div
                className="overflow-hidden"
                style={{
                  maxHeight: "calc(100vh - 6rem)",
                }}
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                  transition: {
                    duration: 0.5,
                    ease: a,
                    delay: x ? 0.2 : 0,
                  },
                }}
                exit={{
                  height: 0,
                  transition: {
                    duration: 0.4,
                    ease: a,
                  },
                }}
              >
                <div className="scrollbar-hide max-h-[calc(100vh-6rem)] overflow-y-auto" data-lenis-prevent>
                  <motion.div
                    className="grid grid-cols-1 gap-6 p-6 min-[1080px]:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: x ? 0.7 : 0.2,
                        },
                      },
                    }}
                  >
                    {d.map((e) => (
                      <ComponentP key={e.id} card={e} />
                    ))}
                    <ComponentM />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  );
}
export { Header };
