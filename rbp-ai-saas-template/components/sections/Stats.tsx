// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "motion/react";
let s = {
    some: 0,
    all: 1,
  },
  a = [
    {
      category: "Speed",
      metric: "Designs/min",
      competitors: [
        {
          name: "Kraft",
          value: 94.2,
          isKraft: !0,
        },
        {
          name: "Figma AI",
          value: 71.8,
        },
        {
          name: "Canva Magic",
          value: 68.4,
        },
        {
          name: "Framer AI",
          value: 58.7,
        },
      ],
    },
    {
      category: "Quality",
      metric: "Score",
      competitors: [
        {
          name: "Kraft",
          value: 96.8,
          isKraft: !0,
        },
        {
          name: "Figma AI",
          value: 89.2,
        },
        {
          name: "Canva Magic",
          value: 82.1,
        },
        {
          name: "Framer AI",
          value: 79.4,
        },
      ],
    },
    {
      category: "Consistency",
      metric: "Accuracy %",
      competitors: [
        {
          name: "Kraft",
          value: 98.1,
          isKraft: !0,
        },
        {
          name: "Figma AI",
          value: 81.3,
        },
        {
          name: "Framer AI",
          value: 76.9,
        },
        {
          name: "Canva Magic",
          value: 72.4,
        },
      ],
    },
  ];
function C_o({ benchmark: e }) {
  let a = (0, r.useRef)(null),
    o = (function (e, { root: t, margin: i, amount: a, once: o = !1, initial: l = !1 } = {}) {
      let [u, c] = (0, r.useState)(l);
      return (
        (0, r.useEffect)(() => {
          if (!e.current || (o && u)) return;
          let r = {
            root: (t && t.current) || void 0,
            margin: i,
            amount: a,
          };
          return (function (e, t, { root: r, margin: i, amount: a = "some" } = {}) {
            let o = (0, n.resolveElements)(e),
              l = new WeakMap(),
              u = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    let r = l.get(e.target);
                    if (!!r !== e.isIntersecting)
                      if (e.isIntersecting) {
                        let r = t(e.target, e);
                        "function" == typeof r ? l.set(e.target, r) : u.unobserve(e.target);
                      } else "function" == typeof r && (r(e), l.delete(e.target));
                  });
                },
                {
                  root: r,
                  rootMargin: i,
                  threshold: "number" == typeof a ? a : s[a],
                },
              );
            return (o.forEach((e) => u.observe(e)), () => u.disconnect());
          })(e.current, () => (c(!0), o ? void 0 : () => c(!1)), r);
        }, [t, e, i, o, a]),
        u
      );
    })(a, {
      once: !0,
      margin: "-100px",
    }),
    l = Math.max(...e.competitors.map((e) => e.value));
  return (
    <div ref={a} className="space-y-4">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-foreground">{e.category}</h3>
      </div>
      <div className="space-y-3">
        {e.competitors.map((e, r) => {
          let n = (e.value / l) * 100;
          return (
            <div className="flex items-center gap-4" key={e.name}>
              <div className="w-28 shrink-0">
                <span
                  className={`text-sm ${e.isKraft ? "font-medium text-foreground" : "text-muted-foreground"}`}
                >
                  {e.name}
                </span>
              </div>
              <div className="flex flex-1 items-center gap-0">
                <div className="relative h-6 flex-1 overflow-hidden rounded-sm bg-muted/30">
                  <i.motion.div
                    className={`absolute inset-y-0 left-0 rounded-sm ${e.isKraft ? "bg-linear-to-r from-[#333DA7] to-[#7388DF]" : "bg-muted/75"}`}
                    initial={{
                      width: 0,
                    }}
                    animate={
                      o
                        ? {
                            width: `${n}%`,
                          }
                        : {
                            width: 0,
                          }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * r,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                </div>
                <div className="w-12 shrink-0 pl-2 text-right">
                  <i.motion.span
                    className={`text-sm tabular-nums ${e.isKraft ? "font-medium text-foreground" : "text-muted-foreground"}`}
                    initial={{
                      opacity: 0,
                    }}
                    animate={
                      o
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + 0.1 * r,
                    }}
                  >
                    {e.value}
                  </i.motion.span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function l() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Performance that stands out
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We benchmark Kraft against leading design tools across speed, quality, and consistency. The
            results speak for themselves.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-12">
          {a.map((e) => (
            <C_o benchmark={e} key={e.category} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { l as Stats };
