// @ts-nocheck
"use client";

import * as r from "motion/react";
import * as i from "motion/react";
import * as n from "motion/react";
import * as s from "react";
import * as a from "next/image";
import * as o from "next/link";
let l = [
    {
      href: "#features",
      label: "Features",
    },
    {
      href: "#templates",
      label: "Templates",
    },
    {
      href: "#pricing",
      label: "Pricing",
    },
    {
      href: "#resources",
      label: "Resources",
    },
  ],
  u = [
    {
      href: "",
      label: "Contact",
    },
    {
      href: "",
      label: "Join",
    },
  ];
function c() {
  var e;
  let [c, h] = (0, s.useState)(!1),
    [d, f] = (0, s.useState)(!1),
    { scrollY: p } = (0, n.useScroll)();
  ((e = (e) => {
    e > (p.getPrevious() ?? 0) && e > 50 ? f(!0) : f(!1);
  }),
    (0, s.useInsertionEffect)(() => p.on("change", e), [p, "change", e]));
  let m = () => h(!1);
  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-40 h-32 w-full"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <r.motion.header
        className="fixed top-0 z-50 w-full mix-blend-difference"
        initial={{
          y: -20,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: d && !c ? "-100%" : 0,
          opacity: 1,
          filter: d && !c ? "blur(8px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <r.motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <o.default href="/" className="focus-ring flex items-center" aria-label="Kraft home">
              <a.default src="/svg/logo.svg" alt="Kraft" width={120} height={34} priority={!0} />
            </o.default>
          </r.motion.div>
          <nav className="hidden items-center gap-3 lg:flex" aria-label="Main navigation">
            {l.map((e, i) => (
              <r.motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + 0.05 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                key={e.href}
              >
                <o.default
                  href={e.href}
                  className="focus-ring rounded-md px-2.5 py-1 font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                >
                  {e.label}
                </o.default>
              </r.motion.div>
            ))}
            <r.motion.div
              className="mx-4 h-px w-5 bg-white/30"
              role="separator"
              aria-orientation="vertical"
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                ease: "easeOut",
              }}
            />
            {u.map((e, i) => (
              <r.motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.45 + 0.05 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                key={e.label}
              >
                <o.default
                  href={e.href}
                  className="focus-ring rounded-md px-2.5 py-1 font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                >
                  {e.label}
                </o.default>
              </r.motion.div>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => h(!c)}
            className="focus-ring relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={c ? "Close menu" : "Open menu"}
            aria-expanded={c}
          >
            <span className="sr-only">{c ? "Close menu" : "Open menu"}</span>
            <span
              className={`absolute h-0.5 w-5 bg-white transition-transform duration-300 ${c ? "rotate-45" : "rotate-0"}`}
            />
            <span
              className={`absolute h-5 w-0.5 bg-white transition-transform duration-300 ${c ? "rotate-45" : "rotate-0"}`}
            />
          </button>
        </div>
      </r.motion.header>
      <i.AnimatePresence mode="sync">
        {c && (
          <r.motion.div
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
              duration: 0.2,
            }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
            key={"mobile-menu"}
          >
            <nav
              className="mx-auto flex h-full max-w-7xl flex-col items-start gap-4 px-4 pt-32 sm:px-6"
              aria-label="Mobile navigation"
            >
              {l.map((e, i) => (
                <r.motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + 0.08 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  key={e.href}
                >
                  <o.default
                    href={e.href}
                    onClick={m}
                    className="focus-ring block text-6xl text-white transition-colors hover:text-white sm:text-6xl"
                  >
                    {e.label}
                  </o.default>
                </r.motion.div>
              ))}
              <r.motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut",
                }}
                className="my-4 h-px w-20 origin-left bg-white/30"
                role="separator"
              />
              {u.map((e, i) => (
                <r.motion.div
                  initial={{
                    opacity: 0,
                    x: -40,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + 0.08 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  key={e.label}
                >
                  <o.default
                    href={e.href}
                    onClick={m}
                    className="focus-ring block text-6xl text-white transition-colors hover:text-white sm:text-6xl"
                  >
                    {e.label}
                  </o.default>
                </r.motion.div>
              ))}
            </nav>
          </r.motion.div>
        )}
      </i.AnimatePresence>
    </>
  );
}
export { c as Header };
