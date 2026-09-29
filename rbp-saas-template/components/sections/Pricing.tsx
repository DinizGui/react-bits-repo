"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
const n = [
    {
      name: "Starter",
      price: 24,
      monthlyPrice: 40,
      description: "Perfect for small teams getting started",
      features: ["2 Team Members", "10GB Storage", "Basic Analytics", "Email Support"],
      popular: false,
    },
    {
      name: "Premium",
      price: 99,
      monthlyPrice: 120,
      description: "Best for growing teams with advanced needs",
      features: ["10 Team Members", "50GB Storage", "Advanced Analytics", "Priority Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 125,
      monthlyPrice: 150,
      description: "For large organizations requiring scale",
      features: ["Unlimited Members", "2TB Storage", "Custom Integrations", "Dedicated Support"],
      popular: false,
    },
  ],
  i = [0.23, 1, 0.32, 1] as const;
function ComponentS({ plan: e, index: n }: any) {
  const s = e.popular;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.6,
        ease: i,
        delay: 0.1 * n,
      }}
      className="relative"
    >
      {s && <div className="absolute -inset-1 rounded-[1.2em] bg-accent" aria-hidden="true" />}
      <div
        className={`relative flex h-full flex-col rounded-2xl bg-frame p-6 sm:p-8 ${s ? "" : "border border-border"}`}
      >
        {s && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/50">
              Most Popular
            </span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground">{e.name}</h3>
        <div className="mt-4">
          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold tracking-tight text-foreground">${e.price}</span>
            <span className="mb-1 text-sm text-muted-foreground">/month</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Billed annually, or ${e.monthlyPrice}/mo billed monthly
          </p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-colors ${s ? "bg-foreground text-background hover:bg-foreground/90" : "bg-muted text-foreground hover:bg-muted/80"}`}
        >
          Get Started
        </motion.button>
        <div className="mt-8">
          <p className="text-sm font-medium text-muted-foreground">Includes:</p>
          <ul className="mt-4 space-y-3">
            {e.features.map((e) => (
              <li key={e} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-foreground" strokeWidth={2.5} />
                <span className="text-sm text-foreground">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
function Pricing() {
  return (
    <section id="pricing" className="w-full bg-background px-6 py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
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
            ease: i,
          }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground">Pricing</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {n.map((e, r) => (
            <ComponentS key={e.name} plan={e} index={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { Pricing };
