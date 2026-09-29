"use client";

import { useState, useId, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion, softEase } from "@/components/ReducedMotion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PHOTOS, photoSrc } from "@/lib/photos";
const c = [
  {
    quote:
      "We used to lose the first week of every campaign to sourcing. Now the art director writes the brief on Monday morning and we are choosing between finished options by lunch.",
    name: "Mara Lindqvist",
    role: "Head of Design",
    company: "Ruma Studio",
    photo: PHOTOS[9],
    caption: "Spring campaign hero, first take.",
  },
  {
    quote:
      "The brand rules are the part nobody talks about. Safe areas and logo clearance simply hold, so I stopped checking and started directing.",
    name: "Tomas Reyes",
    role: "Creative Director",
    company: "Fieldnote",
    photo: PHOTOS[3],
    caption: "Packaging series, twelve variations, one kept.",
  },
  {
    quote:
      "Every size the media plan asks for, reframed instead of cropped. Our production days went from three a month to none.",
    name: "Jonah Weiss",
    role: "Producer",
    company: "Sable & Co",
    photo: PHOTOS[6],
    caption: "Out-of-home set, four formats from one render.",
  },
  {
    quote:
      "Legal signed off in an afternoon. Rights, data and provenance were already answered in writing before anyone asked.",
    name: "Elin Marsh",
    role: "Marketing Operations",
    company: "Northlane",
    photo: PHOTOS[0],
    caption: "Editorial header, approved same day.",
  },
];
function Testimonials() {
  const [e, h] = useState(0),
    [d, p] = useState(false),
    f = useReducedMotion(),
    m = useId(),
    g = useRef(null);
  useEffect(() => {
    if (d || f) return;
    const e = window.setTimeout(() => h((e) => (e + 1) % c.length), 7e3);
    return () => window.clearTimeout(e);
  }, [e, d, f]);
  const v = useCallback((e) => {
      h(e);
      p(true);
    }, []),
    _ = c[e] ?? c[0];
  if (!_) return null;
  const x = f
      ? {
          initial: false,
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 1,
          },
        }
      : {
          initial: {
            opacity: 0,
            y: 10,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
          exit: {
            opacity: 0,
            y: -8,
          },
        },
    y = f
      ? {
          duration: 0,
        }
      : {
          duration: 0.5,
          ease: softEase,
        };
  return (
    <section id="stories" aria-labelledby="stories-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <SectionHeading
          id="stories-heading"
          title="Teams that stopped waiting on pictures."
          description="Design, brand and production leads on what changed once the images kept pace with the ideas."
        />
        <Reveal inView y={24} className="mt-12 lg:mt-14">
          <div
            onPointerEnter={() => p(true)}
            className="grid gap-6 rounded-2xl border border-border bg-muted p-2 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-8"
          >
            <div className="flex min-w-0 flex-col justify-between px-4 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pt-10 lg:pb-8">
              <div className="relative min-h-[14rem] sm:min-h-[12rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.blockquote
                    key={e}
                    id={`${m}-panel-${e}`}
                    role="tabpanel"
                    aria-labelledby={`${m}-tab-${e}`}
                    {...x}
                    transition={y}
                  >
                    <p className="font-serif text-[clamp(1.75rem,2.8vw,2.625rem)] leading-[1.15] tracking-[-0.015em] text-pretty">
                      “{_.quote}”
                    </p>
                    <footer className="mt-8 text-[15px]">
                      <span className="font-medium">{_.name}</span>
                      <span className="text-muted-foreground">
                        {", "}
                        {_.role}
                        {", "}
                        {_.company}
                      </span>
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>
              <div
                ref={g}
                role="tablist"
                aria-label="Stories"
                onKeyDown={(t) => {
                  const i = "ArrowRight" === t.key ? 1 : "ArrowLeft" === t.key ? -1 : 0;
                  if (!i) return;
                  t.preventDefault();
                  const n = (e + i + c.length) % c.length;
                  v(n);
                  g.current?.querySelectorAll("[role=tab]")[n]?.focus();
                }}
                className="-mx-6 mt-12 flex [scrollbar-width:none] gap-x-7 overflow-x-auto px-6 pt-5 whitespace-nowrap sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
              >
                {c.map((i, n) => {
                  const r = n === e;
                  return (
                    <button
                      key={i.name}
                      type="button"
                      role="tab"
                      id={`${m}-tab-${n}`}
                      aria-selected={r}
                      aria-controls={`${m}-panel-${n}`}
                      tabIndex={r ? 0 : -1}
                      onClick={() => v(n)}
                      className={`relative -mt-5 shrink-0 rounded-sm pt-5 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${r ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {r && (
                        <motion.span
                          layoutId="story-tab"
                          aria-hidden="true"
                          className="absolute inset-x-0 -top-px h-px bg-foreground"
                          transition={
                            f
                              ? {
                                  duration: 0,
                                }
                              : {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 40,
                                }
                          }
                        />
                      )}
                      {i.company}
                    </button>
                  );
                })}
              </div>
            </div>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-background sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={_.photo}
                  initial={
                    !f && {
                      opacity: 0,
                      scale: 1.03,
                    }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={
                    f
                      ? {
                          duration: 0,
                        }
                      : {
                          duration: 0.7,
                          ease: softEase,
                        }
                  }
                  className="absolute inset-0"
                >
                  <Image
                    src={photoSrc(_.photo, 1200, 1400)}
                    alt={_.caption}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
              />
              <AnimatePresence mode="wait" initial={false}>
                <motion.figcaption
                  key={e}
                  {...x}
                  transition={y}
                  className="absolute inset-x-0 bottom-0 p-5 text-[15px] text-white sm:p-6"
                >
                  {_.caption}
                </motion.figcaption>
              </AnimatePresence>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export { Testimonials };
