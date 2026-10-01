// @ts-nocheck
"use client";

import * as r from "react";
import * as i from "motion/react";
import * as n from "motion/react";
import * as s from "motion/react";
import { createLucideIcon as __lucide_a } from "lucide-react";
const a = { default: __lucide_a };
import * as u from "next/image";
let C_o = (0, a.default)("chevron-left", [
    [
      "path",
      {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3",
      },
    ],
  ]),
  C_l = (0, a.default)("chevron-right", [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq",
      },
    ],
  ]);
let c = [
  {
    badge: "Design Agency",
    company: "Stellar Creative",
    quote:
      "We've completely transformed our workflow with Kraft. What used to take our team days now happens in hours. The AI understands our brand guidelines perfectly and produces designs that clients love on the first revision.",
    name: "Sarah Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1574108233269-86d1199d28de?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [
      {
        label: "Design Output",
        value: "10x faster",
      },
      {
        label: "Client Revisions",
        value: "-80%",
      },
      {
        label: "Team Size",
        value: "12 designers",
      },
    ],
  },
  {
    badge: "Tech Startup",
    company: "Quantum Labs",
    quote:
      "As a startup without a dedicated design team, Kraft has been a game-changer. We ship beautiful marketing materials, pitch decks, and product interfaces without hiring a single designer. The ROI is incredible.",
    name: "Marcus Rodriguez",
    role: "Co-founder & CEO",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [
      {
        label: "Design Cost Savings",
        value: "$150k/year",
      },
      {
        label: "Time to Launch",
        value: "2 weeks",
      },
      {
        label: "Assets Created",
        value: "500+",
      },
    ],
  },
  {
    badge: "Enterprise",
    company: "GlobalTech Inc",
    quote:
      "Rolling out Kraft across our marketing team was seamless. The brand consistency features ensure every piece of content—from social posts to annual reports—looks like it came from the same designer. It's remarkable.",
    name: "Roy Park",
    role: "VP of Marketing",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [
      {
        label: "Brand Consistency",
        value: "99.5%",
      },
      {
        label: "Team Members",
        value: "200+",
      },
      {
        label: "Monthly Designs",
        value: "5,000+",
      },
    ],
  },
];
function C_h({ testimonial: e, isActive: r }) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-3xl p-6 sm:p-8 lg:flex-row lg:gap-12 lg:p-12 transition-colors duration-300 ${r ? "bg-accent/20" : "bg-muted"}`}
    >
      <div className="flex flex-1 flex-col">
        <span className="w-fit rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground sm:px-4 sm:py-1.5 sm:text-sm">
          {e.badge}
        </span>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:mt-6 sm:text-4xl lg:text-5xl">
          {e.company}
        </h3>
        <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg lg:mt-8 lg:text-xl">
          “{e.quote}”
        </p>
        <div className="mt-6 flex items-center gap-3 sm:mt-8">
          <u.default
            src={e.image}
            alt={e.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover lg:hidden"
          />
          <div>
            <p className="text-sm font-medium text-foreground sm:text-base">{e.name}</p>
            <p className="text-xs text-muted-foreground sm:text-sm lg:hiddenleading-snug">{e.role}</p>
          </div>
        </div>
        <p className="mt-4 text-xs font-medium uppercase text-muted-foreground/60 lg:mt-6">{e.company}</p>
      </div>
      <div className="hidden flex-col lg:flex lg:w-72">
        <div className="relative h-60 w-40 overflow-hidden rounded-full">
          <u.default src={e.image} alt={e.name} fill={!0} className="object-cover" />
        </div>
        <div className="mt-2 pt-6">
          <p className="text-xs font-medium uppercase text-muted-foreground">{e.role}</p>
          <p className="mt-1 text-lg font-semibold text-foreground leading-snug">{e.name}</p>
        </div>
        <div className="mt-6 border-t border-foreground/10 pt-8">
          <p className="text-xs font-medium uppercase text-muted-foreground">How they use Kraft</p>
          <div className="mt-4 space-y-2">
            {e.stats.map((e) => (
              <div className="flex justify-between" key={e.label}>
                <span className="text-sm text-muted-foreground">{e.label}</span>
                <span className="text-sm font-semibold text-foreground">{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function d() {
  let e = (0, r.useRef)(null),
    [a, u] = (0, r.useState)(0),
    [d, f] = (0, r.useState)({
      cardWidth: 0,
      gap: 24,
    }),
    p = (0, s.useMotionValue)(0),
    m = (0, n.useSpring)(p, {
      stiffness: 80,
      damping: 20,
    }),
    g = (0, r.useCallback)(() => {
      e.current &&
        f({
          cardWidth: e.current.offsetWidth - 0,
          gap: 24,
        });
    }, []);
  ((0, r.useEffect)(
    () => (g(), window.addEventListener("resize", g), () => window.removeEventListener("resize", g)),
    [g],
  ),
    (0, r.useEffect)(() => {
      let { cardWidth: e, gap: t } = d;
      e > 0 && p.set(-a * (e + t));
    }, [a, d, p]));
  let v = (e) => {
      u((t) => {
        let r = t + e;
        return r < 0 ? 0 : r >= c.length ? c.length - 1 : r;
      });
    },
    { cardWidth: y, gap: x } = d;
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl mb-12">
          <p className="text-4xl font-medium tracking-tight text-foreground">
            Trusted by design teams worldwide
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div ref={e} className="mx-auto max-w-7xl">
          <div className="overflow-visible">
            <i.motion.div
              className="flex"
              style={{
                x: m,
                gap: x,
              }}
            >
              {c.map((e, r) => (
                <div
                  className="shrink-0"
                  style={{
                    width: y || "90%",
                  }}
                  key={e.company}
                >
                  <C_h testimonial={e} isActive={r === a} />
                </div>
              ))}
            </i.motion.div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {c.map((e, r) => (
                <button
                  type="button"
                  onClick={() => {
                    u(r);
                  }}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${r === a ? "w-8 bg-foreground" : "w-2 bg-foreground/30 hover:bg-foreground/50"}`}
                  aria-label={`Go to testimonial ${r + 1}`}
                  key={r}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => v(-1)}
                disabled={0 === a}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-muted/75 text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous testimonial"
              >
                <C_o className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => v(1)}
                disabled={a === c.length - 1}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-muted/75 text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next testimonial"
              >
                <C_l className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { d as Testimonials };
