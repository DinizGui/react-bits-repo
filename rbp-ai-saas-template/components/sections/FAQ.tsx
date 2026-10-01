// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "motion/react";
import { createLucideIcon as __lucide___mod75254 } from "lucide-react";
const __mod75254 = { default: __lucide___mod75254 };
let C_s = (0, __mod75254.default)("plus", [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le",
      },
    ],
  ]),
  a = [
    {
      question: "What kinds of designs can Kraft create?",
      answer:
        "Kraft can generate logos, landing pages, social media graphics, brand identities, app interfaces, presentations, and more. Just describe what you need in natural language, and Kraft will produce multiple production-ready options.",
    },
    {
      question: "How does Kraft ensure brand consistency?",
      answer:
        "Kraft learns your brand guidelines—colors, fonts, tone, and style—and applies them automatically to every design. Upload your brand kit once, and Kraft maintains consistency across all outputs.",
    },
    {
      question: "Can I edit or refine designs after generation?",
      answer:
        "Absolutely. You can tweak colors, adjust layouts, change fonts, or request specific modifications using natural language. Kraft understands conversational edits like 'make it more minimal' or 'use a warmer palette.'",
    },
    {
      question: "What export formats does Kraft support?",
      answer:
        "Kraft exports to all major formats including PNG, SVG, PDF, and Figma. You can also push designs directly to your codebase with production-ready React or HTML/CSS components.",
    },
    {
      question: "Is my data and designs secure?",
      answer:
        "Yes. All designs and data are encrypted end-to-end. We never train our models on your proprietary work, and you retain full ownership of everything you create with Kraft.",
    },
  ];
function C_o({ item: e, isOpen: r, onToggle: a }) {
  return (
    <i.motion.div
      layout={!0}
      className="rounded-2xl bg-muted/50"
      transition={{
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <button
        type="button"
        onClick={a}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-foreground">{e.question}</span>
        <i.motion.div
          animate={{
            rotate: 45 * !!r,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="shrink-0"
        >
          <C_s className="h-5 w-5 text-foreground" />
        </i.motion.div>
      </button>
      <n.AnimatePresence initial={!1}>
        {r && (
          <i.motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground">{e.answer}</p>
          </i.motion.div>
        )}
      </n.AnimatePresence>
    </i.motion.div>
  );
}
function l() {
  let [e, i] = (0, r.useState)(0);
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-4xl text-foreground font-medium tracking-tight">Answers to your questions</p>
          </div>
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-3">
              {a.map((r, n) => (
                <C_o
                  item={r}
                  isOpen={e === n}
                  onToggle={() => {
                    i(e === n ? null : n);
                  }}
                  key={r.question}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { l as FAQ };
