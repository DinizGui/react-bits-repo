"use client";

import { ChevronRightIcon, Check } from "lucide-react";
import { motion } from "motion/react";
const a = [0.16, 1, 0.3, 1] as const,
  s = [
    {
      name: "Free",
      tagline: "Get started with our free plan",
      price: "$0",
      period: "month",
      features: ["10 summaries per day", "Chrome extension", "Articles & blogs", "Basic support"],
    },
    {
      name: "Pro",
      tagline: "Get everything out of TLDR",
      price: "$6",
      period: "month",
      highlighted: true,
      features: [
        "Unlimited summaries",
        "Chrome & Safari extensions",
        "Videos, podcasts & PDFs",
        "Multi-language support",
        "API access",
        "Priority support",
        "Export to Notion & Obsidian",
      ],
    },
  ];
function ComponentO({ plan: e }: any) {
  return (
    <motion.div
      className={`rounded-2xl p-6 md:p-8 ${e.highlighted ? "border-accent bg-background border-2 transition-[border-color,box-shadow] duration-300 hover:border-accent/80 hover:shadow-lg hover:shadow-accent/10" : "bg-background transition-[background-color] duration-300 hover:bg-background/80"}`}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        opacity: {
          duration: 0.6,
          ease: a,
        },
        y: {
          duration: 0.3,
          ease: a,
        },
      }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium">{e.name}</h3>
        <p className="text-muted-foreground text-sm">{e.tagline}</p>
      </div>
      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-4xl font-medium tracking-tight md:text-5xl">{e.price}</span>
        <span className="text-muted-foreground text-sm">
          {"/ "}
          {e.period}
        </span>
      </div>
      <ul className="space-y-3">
        {e.features.map((e) => (
          <li key={e} className="flex items-start gap-3 text-sm">
            <Check className="text-foreground mt-0.5 h-4 w-4 shrink-0" />
            <span>{e}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
function Pricing() {
  const e = s[0],
    n = s[1];
  return e && n ? (
    <section className="bg-muted px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center md:mb-16"
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
            ease: a,
          }}
        >
          <h2 className="mb-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">Pricing</h2>
          <p className="text-muted-foreground text-lg">Start for free and upgrade to unlock more features.</p>
        </motion.div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="md:mt-16">
            <ComponentO plan={e} />
          </div>
          <div>
            <ComponentO plan={n} />
          </div>
        </div>
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 md:mt-16"
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
            delay: 0.2,
            ease: a,
          }}
        >
          <a
            href="#"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent py-3 pl-5 pr-3 font-medium text-black transition-all duration-500 ease-out hover:rounded-[50px] hover:shadow-lg hover:shadow-accent/20 sm:w-auto"
          >
            <span>Go Pro</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-110">
              <ChevronRightIcon className="h-4 w-4 relative left-px" />
            </span>
          </a>
          <a href="#" className="text-muted-foreground text-sm transition-colors hover:text-foreground">
            Start For Free
          </a>
        </motion.div>
      </div>
    </section>
  ) : null;
}
export { Pricing };
