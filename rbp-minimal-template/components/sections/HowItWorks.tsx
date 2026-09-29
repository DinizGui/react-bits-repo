"use client";

import { useRef } from "react";
import { Download, MousePointer, Sparkles } from "lucide-react";
import { useInView, motion } from "motion/react";
const u = [0.16, 1, 0.3, 1] as const,
  c = [
    {
      icon: Download,
      title: "Install the extension",
      description: "Add TLDR to Chrome or Safari with one click. No sign-up required to get started.",
    },
    {
      icon: MousePointer,
      title: "Browse normally",
      description: "Visit any article, video, or document. TLDR detects content automatically.",
    },
    {
      icon: Sparkles,
      title: "Get your summary",
      description: "One click delivers key takeaways. Save hours every week, effortlessly.",
    },
  ];
function ComponentH({ step: e, index: n }: any) {
  const i = useRef(null),
    r = useInView(i, {
      once: true,
      amount: 0.5,
    }),
    ComponentA = e.icon;
  return (
    <motion.div
      ref={i}
      className="bg-muted min-h-70 rounded-2xl p-6 md:p-8 flex flex-col"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        r
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
        delay: 0.1 * n,
        ease: u,
      }}
    >
      <div className="text-foreground mb-6">
        <ComponentA className="h-12 w-12" strokeWidth={1} />
      </div>
      <h3 className="mb-3 text-xl font-medium tracking-tight md:text-2xl mt-auto">{e.title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{e.description}</p>
    </motion.div>
  );
}
function HowItWorks() {
  const e = useRef(null),
    n = useInView(e, {
      once: true,
      amount: 0.5,
    });
  return (
    <section className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={e}
          className="mb-8 text-center md:mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            n
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
            ease: u,
          }}
        >
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">Get Started</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {c.map((e, n) => (
            <ComponentH key={e.title} step={e} index={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { HowItWorks };
