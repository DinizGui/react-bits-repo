"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion, softEase } from "@/components/ReducedMotion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
const r = [
  {
    q: "Who owns the images?",
    a: "You do. Every plan, including the free tier, grants full commercial rights to what you render. There is no attribution requirement and no separate licence to buy for print, packaging or broadcast.",
  },
  {
    q: "Is my work used to train the models?",
    a: "No. Briefs, references, brand kits and renders stay in your workspace and are never used for training. Workspace data is deleted within thirty days of closing an account.",
  },
  {
    q: "What counts as one image?",
    a: "One finished render at any size, including all the formats you export from it. Variations count individually; upscales and background removal on an existing render are free.",
  },
  {
    q: "How do brand rules work?",
    a: "You set safe areas, logo clearance, approved colours and typography once per brand kit. Every render is checked against them before you see it, and anything that breaks a rule is flagged with the reason.",
  },
  {
    q: "Can I use my own photography as a reference?",
    a: "Yes, and it is the best way to work. Pin your own shoots to a reference board and new renders inherit their light, lens and palette. References are never shared across workspaces.",
  },
  {
    q: "What happens if I go over my allowance?",
    a: "Rendering keeps working. Extra images are billed at your plan's per-image rate at the end of the month, and you get a notice at eighty and one hundred percent so nothing surprises finance.",
  },
  {
    q: "Do you offer invoicing and procurement paperwork?",
    a: "On Agency and Enterprise. We support annual invoicing, purchase orders, security questionnaires and data processing agreements, and can sign your own paper where it is reasonable.",
  },
];
function ComponentC({ q: e, a: i, open: n, onToggle: r, id: u }: any) {
  const h = useReducedMotion();
  return (
    <li className="rounded-2xl bg-muted">
      <h3>
        <button
          type="button"
          id={`${u}-q`}
          aria-expanded={n}
          aria-controls={`${u}-a`}
          onClick={r}
          className="group flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-5 text-left text-[17px] leading-6 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 sm:py-6"
        >
          <span className="transition-colors group-hover:text-foreground/80">{e}</span>
          <motion.span
            aria-hidden="true"
            animate={{
              rotate: n ? 45 : 0,
            }}
            transition={
              h
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.3,
                    ease: softEase,
                  }
            }
            className="flex h-5 w-5 shrink-0 items-center justify-center text-foreground/60"
          >
            <Plus className="h-[18px] w-[18px]" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {n && (
          <motion.div
            id={`${u}-a`}
            role="region"
            aria-labelledby={`${u}-q`}
            initial={
              !h && {
                height: 0,
                opacity: 0,
              }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={
              h
                ? {
                    opacity: 0,
                  }
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={
              h
                ? {
                    duration: 0.1,
                  }
                : {
                    duration: 0.35,
                    ease: softEase,
                  }
            }
            className="overflow-hidden"
          >
            <p className="max-w-2xl px-5 pb-6 text-[15px] leading-7 text-muted-foreground sm:px-6 sm:pb-7">
              {i}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
function Faq() {
  const [e, a] = useState(0),
    s = useId();
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-heading"
            title="The questions that come up before the first render."
            description="Anything missing, write to us. A person answers within a working day."
          />
        </div>
        <Reveal inView delay={0.1}>
          <ul className="flex flex-col gap-3">
            {r.map((i, n) => (
              <ComponentC
                key={i.q}
                {...i}
                id={`${s}-${n}`}
                open={e === n}
                onToggle={() => a(e === n ? null : n)}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
export { Faq };
