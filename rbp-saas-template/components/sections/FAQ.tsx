"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const s = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "Start using our platform immediately with full access to all features. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with our free tier.",
    },
    {
      question: "Can I switch plans at any time?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with all major platforms including Slack, Zendesk, Salesforce, HubSpot, Intercom, and 50+ other tools. Our API also allows custom integrations for enterprise customers.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Security is our top priority. We use bank-level encryption (AES-256), are SOC 2 Type II certified, and GDPR compliant. All data is stored in secure, redundant data centers with 99.99% uptime.",
    },
    {
      question: "Do you offer dedicated support?",
      answer:
        "All plans include email support with 24-hour response times. Premium plans get priority support with 4-hour response times. Enterprise customers receive a dedicated success manager and phone support.",
    },
  ],
  l = [0.23, 1, 0.32, 1] as const;
function ComponentO({ faq: e, index: i, isOpen: s, onToggle: o }: any) {
  return (
    <motion.div
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
        margin: "-50px",
      }}
      transition={{
        duration: 0.5,
        ease: l,
        delay: 0.05 * i,
      }}
      onClick={o}
      className="cursor-pointer rounded-2xl bg-frame p-5 shadow-sm sm:p-6"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), o());
      }}
      aria-expanded={s}
    >
      <div className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-base font-medium text-foreground sm:text-lg">{e.question}</span>
        <motion.div
          animate={{
            rotate: s ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: l,
          }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
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
            <p className="pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{e.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function FAQ() {
  const [e, a] = useState(0);
  return (
    <section className="w-full px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
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
          }}
          transition={{
            duration: 0.6,
            ease: l,
          }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground">Frequently Asked Questions</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to know
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Can't find the answer you're looking for? Reach out!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href="#"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center rounded-xl bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="inline-flex items-center rounded-xl border border-border bg-frame px-6 py-2.5 text-sm font-semibold text-foreground transition-colors"
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
        <div className="flex flex-col gap-3" role="list">
          {s.map((r, n) => (
            <ComponentO
              key={n}
              faq={r}
              index={n}
              isOpen={e === n}
              onToggle={() => {
                a(e === n ? null : n);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export { FAQ };
