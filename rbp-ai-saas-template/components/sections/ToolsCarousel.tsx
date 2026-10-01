// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "motion/react";
import * as s from "motion/react";
import * as a from "next/image";
let o = [
  {
    title: "Describe",
    description: "Tell Kraft what you need. A logo, a landing page, an entire brand—just say it.",
    image: "/img/describe.webp",
  },
  {
    title: "Generate",
    description: "Watch as Kraft creates multiple design options, each one production-ready.",
    image: "/img/generate.webp",
  },
  {
    title: "Refine",
    description: "Tweak colors, fonts, adjust layouts—Kraft understands natural language edits.",
    image: "/img/refine.webp",
  },
  {
    title: "Ship",
    description: "Export to Figma, download assets, or push directly to your codebase. Done.",
    image: "/img/ship.webp",
  },
];
function l() {
  let e = (0, r.useRef)(null),
    l = (0, r.useRef)(null),
    [u, c] = (0, r.useState)({
      left: 0,
      right: 0,
    }),
    [h, d] = (0, r.useState)(!1),
    [f, p] = (0, r.useState)(!1),
    m = (0, n.useMotionValue)(0),
    g = (0, n.useMotionValue)(0),
    v = (0, n.useMotionValue)(0),
    y = (0, s.useSpring)(g, {
      stiffness: 500,
      damping: 40,
    }),
    x = (0, s.useSpring)(v, {
      stiffness: 500,
      damping: 40,
    });
  return (
    (0, r.useEffect)(() => {
      let t = () => {
        e.current &&
          l.current &&
          c({
            left: Math.min(0, -(e.current.scrollWidth - l.current.offsetWidth)),
            right: 0,
          });
      };
      return (t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t));
    }, []),
    (
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-2xl font-medium tracking-tight text-foreground md:text-3xl lg:text-4xl">
              From idea to finished design in four simple steps
            </h2>
          </div>
        </div>
        <div
          ref={l}
          className="relative"
          onMouseEnter={() => d(!0)}
          onMouseLeave={() => d(!1)}
          onMouseMove={(e) => {
            if (l.current) {
              let t = l.current.getBoundingClientRect();
              (g.set(e.clientX - t.left + 16), v.set(e.clientY - t.top - 16));
            }
          }}
        >
          <i.motion.div
            ref={e}
            className="flex cursor-grab gap-2.5 pr-48 active:cursor-grabbing pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-85rem)/2+2rem))]"
            style={{
              x: m,
            }}
            drag="x"
            dragConstraints={u}
            dragElastic={0.15}
            dragTransition={{
              power: 0.3,
              timeConstant: 200,
              modifyTarget: (e) => Math.max(u.left, Math.min(0, e)),
            }}
            onDragEnd={(e, t) => {
              p(!1);
              let r = t.velocity.x,
                i = m.get() + 0.3 * r;
              (i > 0 ? (i = 0) : i < u.left && (i = u.left), m.set(i));
            }}
            onDragStart={() => p(!0)}
            whileDrag={{
              cursor: "grabbing",
            }}
          >
            {o.map((e, r) => (
              <i.motion.div
                className="group flex w-80 shrink-0 flex-col rounded-xl bg-muted/50 px-6 pt-6 transition-colors duration-300 hover:bg-foreground sm:w-96 md:w-105"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * r,
                }}
                viewport={{
                  once: !0,
                }}
                key={e.title}
              >
                <h3 className="text-2xl tracking-tight text-foreground mb-2 transition-colors duration-300 group-hover:text-background">
                  {e.title}
                </h3>
                <p className="mt-2 text-lg tracking-tight leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-background/70">
                  {e.description}
                </p>
                <div className="relative mt-6 aspect-3/4 w-full h-80 overflow-hidden">
                  <a.default
                    src={e.image}
                    alt={e.title}
                    fill={!0}
                    className="object-contain object-top scale-90 grayscale"
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 420px"
                    draggable={!1}
                  />
                </div>
              </i.motion.div>
            ))}
          </i.motion.div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent md:w-48"
            aria-hidden="true"
          />
          <i.motion.div
            className="pointer-events-none absolute left-0 top-0 z-50 flex items-center justify-center rounded-full border border-foreground/10 bg-background/20 px-4 py-2 text-xs font-medium tracking-tight text-white dark:text-foreground backdrop-blur-md"
            style={{
              x: y,
              y: x,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: h && !f ? 1 : 0,
              scale: h && !f ? 1 : 0.8,
            }}
            transition={{
              duration: 0.15,
            }}
          >
            Drag
          </i.motion.div>
        </div>
      </section>
    )
  );
}
export { l as ToolsCarousel };
