// @ts-nocheck
"use client";

import * as r from "motion/react";
import { createLucideIcon as __lucide_i } from "lucide-react";
const i = { default: __lucide_i };
let C_n = (0, i.default)("check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c",
      },
    ],
  ]),
  s = [
    {
      name: "Starter",
      description: "For individuals and side projects",
      price: "$29",
      period: "/mo",
      icon: (0, i.default)("rocket", [
        [
          "path",
          {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz",
          },
        ],
        [
          "path",
          {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk",
          },
        ],
        [
          "path",
          {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4",
          },
        ],
        [
          "path",
          {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4",
          },
        ],
      ]),
      features: [
        "50 design generations/month",
        "Basic brand kit",
        "PNG & SVG exports",
        "Email support",
        "1 workspace",
      ],
      cta: "Get started",
    },
    {
      name: "Pro",
      description: "Best for startups and growing teams",
      price: "$99",
      period: "/mo",
      note: "Cancel or pause any time",
      icon: (0, i.default)("zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]),
      features: [
        "Unlimited design generations",
        "Advanced brand consistency",
        "All export formats + Figma",
        "Priority support & delivery",
        "5 team members",
        "API access",
      ],
      cta: "Upgrade plan",
      popular: !0,
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      price: "Custom",
      period: "",
      icon: (0, i.default)("building-2", [
        [
          "path",
          {
            d: "M10 12h4",
            key: "a56b0p",
          },
        ],
        [
          "path",
          {
            d: "M10 8h4",
            key: "1sr2af",
          },
        ],
        [
          "path",
          {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei",
          },
        ],
        [
          "path",
          {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2",
          },
        ],
        [
          "path",
          {
            d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
            key: "16ra0t",
          },
        ],
      ]),
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Custom model training",
        "Dedicated account manager",
        "SSO & advanced security",
        "SLA & on-prem options",
      ],
      cta: "Contact sales",
    },
  ];
function C_a({ plan: e }) {
  let C_i = e.icon,
    s = (
      <div
        className={`relative flex h-full flex-col rounded-3xl bg-background p-3 ${e.popular ? "" : "border border-foreground/10"}`}
      >
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <C_i className="h-5 w-5 text-foreground" />
          </div>
          {e.popular && (
            <span className="rounded-full border border-accent/50 bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              Most popular
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{e.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-5xl font-semibold tracking-tight text-foreground">{e.price}</span>
          {e.period && <span className="text-lg text-muted-foreground">{e.period}</span>}
          {e.note && <span className="ml-auto text-right text-sm text-muted-foreground">{e.note}</span>}
        </div>
        <div className="mt-8 flex-1">
          <div className="flex h-full flex-col rounded-xl bg-muted/50 p-6">
            <ul className="flex-1 space-y-4">
              {e.features.map((e) => (
                <li className="flex items-start gap-3" key={e}>
                  <C_n className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{e}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-6 w-full cursor-pointer rounded-full py-4 text-base font-semibold transition-all ${e.popular ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-foreground text-background hover:bg-foreground/70"}`}
            >
              {e.cta}
            </button>
          </div>
        </div>
      </div>
    );
  return e.popular ? (
    <div className="relative">
      <r.motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] rounded-full bg-accent-light opacity-50 blur-3xl"
        animate={{
          x: ["-50%", "-30%", "-70%", "-40%", "-60%", "-50%"],
          y: ["-50%", "-70%", "-30%", "-60%", "-40%", "-50%"],
          scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: 1 / 0,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
      />
      <r.motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[50%] rounded-full bg-accent opacity-40 blur-3xl"
        animate={{
          x: ["-50%", "-70%", "-30%", "-60%", "-40%", "-50%"],
          y: ["-50%", "-30%", "-70%", "-40%", "-60%", "-50%"],
          scale: [1, 0.9, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: 1 / 0,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        }}
      />
      <div className="absolute -inset-px rounded-[1.52rem] bg-linear-to-br from-accent to-accent-light opacity-25" />
      <div className="relative">{s}</div>
    </div>
  ) : (
    s
  );
}
function o() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-4xl font-medium tracking-tight text-foreground">Simple, transparent pricing</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {s.map((e) => (
            <C_a plan={e} key={e.name} />
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground">
          Start free and scale as you grow. No hidden fees, no surprises.
        </p>
      </div>
    </section>
  );
}
export { o as Pricing };
