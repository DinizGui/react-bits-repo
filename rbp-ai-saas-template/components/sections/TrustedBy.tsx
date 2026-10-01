// @ts-nocheck
"use client";

import * as r from "next/image";
import * as i from "next/link";
import * as n from "lucide-react";
import * as s from "react";
import * as a from "motion/react";
import * as o from "motion/react";
let l = [
    {
      name: "Acme Corp",
      src: "/mock-logos/acmecorp.svg",
      href: "#acme",
    },
    {
      name: "Boltshift",
      src: "/mock-logos/boltshift.svg",
      href: "#boltshift",
    },
    {
      name: "Capsule",
      src: "/mock-logos/capsule.svg",
      href: "#capsule",
    },
    {
      name: "Catalog",
      src: "/mock-logos/catalog.svg",
      href: "#catalog",
    },
    {
      name: "Cloudwatch",
      src: "/mock-logos/cloudwatch.svg",
      href: "#cloudwatch",
    },
    {
      name: "Featherdev",
      src: "/mock-logos/featherdev.svg",
      href: "#featherdev",
    },
  ],
  u = [
    {
      name: "Altshift",
      src: "/mock-logos/altshift.svg",
      href: "#altshift",
    },
    {
      name: "Biosynthesis",
      src: "/mock-logos/biosynthesis.svg",
      href: "#biosynthesis",
    },
    {
      name: "Commandr",
      src: "/mock-logos/commandr.svg",
      href: "#commandr",
    },
    {
      name: "Epicurious",
      src: "/mock-logos/epicurious.svg",
      href: "#epicurious",
    },
    {
      name: "Focalpoint",
      src: "/mock-logos/focalpoint.svg",
      href: "#focalpoint",
    },
    {
      name: "Galileo",
      src: "/mock-logos/galileo.svg",
      href: "#galileo",
    },
  ];
function C_c({ logoA: e, logoB: n, index: l }) {
  let [u, c] = (0, s.useState)(!1),
    h = u ? n : e,
    d = (0, s.useCallback)(
      () =>
        setTimeout(
          () => {
            c((e) => !e);
          },
          3e3 + 4e3 * Math.random() + 300 * l,
        ),
      [l],
    );
  return (
    (0, s.useEffect)(() => {
      let e = d(),
        t = setInterval(
          () => {
            (clearTimeout(e), (e = d()));
          },
          7e3 + 3e3 * Math.random(),
        );
      return () => {
        (clearTimeout(e), clearInterval(t));
      };
    }, [d]),
    (
      <i.default
        href={h.href}
        className="relative flex h-24 items-center justify-center rounded-xl bg-muted/50 px-6 transition-colors hover:bg-muted focus-ring overflow-hidden"
      >
        <o.AnimatePresence mode="wait">
          <a.motion.div
            initial={{
              opacity: 0,
              filter: "blur(8px)",
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              scale: 0.9,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
            key={u ? "b" : "a"}
          >
            <r.default
              src={h.src}
              alt={h.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert"
            />
          </a.motion.div>
        </o.AnimatePresence>
      </i.default>
    )
  );
}
function h() {
  return (
    <section className="py-20 md:py-28">
      <div className="px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-85rem)/2+2rem))]">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Trusted by teams who ship faster with Kraft
          </h2>
          <i.default
            href="#"
            className="group flex shrink-0 items-center leading-0 gap-2 text-xl font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all
            <n.ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </i.default>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
          {l.map((e, r) => (
            <C_c logoA={e} logoB={u[r] ?? e} index={r} key={e.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
export { h as TrustedBy };
