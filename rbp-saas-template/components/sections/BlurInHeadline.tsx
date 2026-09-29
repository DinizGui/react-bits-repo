"use client";

import { useRef, useState, useEffect } from "react";
function BlurInHeadline() {
  const e = useRef(null),
    [a, n] = useState(0),
    i =
      "Modern teams use our platform to elevate every customer touchpoint, blending human expertise with AI capabilities in a unified system that drives continuous improvement across all channels.".split(
        " ",
      );
  useEffect(() => {
    const t = e.current;
    if (!t) return;
    let r = false,
      a = () => {
        r ||
          ((r = true),
          requestAnimationFrame(() => {
            const e = t.getBoundingClientRect(),
              a = window.innerHeight,
              i = 0.9 * a;
            n(Math.min(1, Math.max(0, (i - e.top) / (i - 0.25 * a))));
            r = false;
          }));
      };
    window.addEventListener("scroll", a, {
      passive: true,
    });
    a();
    return () => window.removeEventListener("scroll", a);
  }, []);
  return (
    <section ref={e} className="w-full bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-3xl font-medium text-left leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-snug">
          {i.map((e, r) => {
            const n = r / i.length,
              s = n + 1 / i.length,
              l = Math.min(1, Math.max(0, (a - n) / (s - n)));
            return (
              <span
                key={r}
                className="mr-2 inline-block lg:mr-3"
                style={{
                  opacity: 0.15 + 0.85 * l,
                  filter: `blur(${(1 - l) * 8}px)`,
                  transition: "opacity 75ms, filter 75ms",
                }}
              >
                {e}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
export { BlurInHeadline };
