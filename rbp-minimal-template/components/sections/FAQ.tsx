"use client";

import { useState, useRef } from "react";
import { ChevronRightIcon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
const l = [0.16, 1, 0.3, 1] as const,
  u = [
    {
      question: "How does TLDR summarize content?",
      answer:
        "TLDR uses advanced AI models to analyze and extract key information from any article, video, or document. Our algorithms identify the most important points and present them in a concise, easy-to-read format.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Absolutely. We process content locally whenever possible and never store your browsing history or personal data. All connections are encrypted, and we're fully GDPR compliant.",
    },
    {
      question: "Can I use TLDR on any website?",
      answer:
        "Yes! TLDR works on virtually any website with text content. This includes news articles, blog posts, research papers, documentation, and even YouTube video transcripts.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes 10 summaries per day, basic summarization features, and access to both Chrome and Safari extensions. No credit card required to get started.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime from your account settings. There are no cancellation fees, and you'll retain access to Pro features until the end of your billing period.",
    },
  ];
function ComponentC({ faq: e, index: i, isOpen: s, onToggle: o }: any) {
  return (
    <motion.div
      className="border-foreground/10 border-b last:border-b-0"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.5,
        delay: 0.05 * i,
        ease: l,
      }}
    >
      <button onClick={o} className="group flex w-full items-center justify-between py-6 text-left">
        <span className="text-foreground text-lg font-medium pr-8 md:text-xl">{e.question}</span>
        <motion.div
          className="text-foreground/50 shrink-0"
          animate={{
            rotate: s ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: l,
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {s && (
          <motion.div
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
              ease: l,
            }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground pb-6 text-base leading-relaxed">{e.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function FAQ() {
  const [e, n] = useState(null),
    r = useRef(null),
    h = useInView(r, {
      once: true,
      amount: 0.5,
    });
  return (
    <section className="bg-foreground px-6 py-16 md:py-32 rounded-4xl">
      <div className="mx-auto max-w-3xl">
        <motion.div
          ref={r}
          className="mb-12 text-center md:mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            h
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
            ease: l,
          }}
        >
          <h2 className="text-background text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Common Questions
          </h2>
        </motion.div>
        <motion.div
          className="bg-background rounded-2xl px-6 md:px-10 py-2"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: l,
          }}
        >
          {u.map((i, r) => (
            <ComponentC
              key={i.question}
              faq={i}
              index={r}
              isOpen={e === r}
              onToggle={() => {
                n(e === r ? null : r);
              }}
            />
          ))}
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: l,
          }}
        >
          <p className="text-background/60 mb-6 text-base">Still have questions? We're here to help.</p>
          <a
            href="mailto:hello@tldr.app"
            className="group inline-flex items-center gap-3 rounded-md bg-background py-3 pl-5 pr-3 font-medium text-foreground shadow-lg transition-all duration-500 ease-out hover:rounded-[50px]"
          >
            <span>Get in Touch</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 group-hover:scale-110">
              <ChevronRightIcon className="h-4 w-4 relative left-px" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
export { FAQ };
