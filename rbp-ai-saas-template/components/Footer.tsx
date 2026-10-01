// @ts-nocheck
"use client";

import * as r from "next/link";
import * as i from "next/image";
import { createLucideIcon as __lucide_n } from "lucide-react";
const n = { default: __lucide_n };
let s = (0, n.default)("facebook", [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ]),
  a = (0, n.default)("twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  o = (0, n.default)("linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    [
      "rect",
      {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5",
      },
    ],
    [
      "circle",
      {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8",
      },
    ],
  ]),
  l = {
    Product: [
      {
        label: "Features",
        href: "#",
      },
      {
        label: "Pricing",
        href: "#",
      },
      {
        label: "Changelog",
        href: "#",
      },
      {
        label: "Roadmap",
        href: "#",
      },
    ],
    Company: [
      {
        label: "About",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
      {
        label: "Press",
        href: "#",
      },
    ],
    Resources: [
      {
        label: "Documentation",
        href: "#",
      },
      {
        label: "Help Center",
        href: "#",
      },
      {
        label: "Community",
        href: "#",
      },
    ],
  },
  u = [
    {
      icon: s,
      href: "#",
      label: "Facebook",
    },
    {
      icon: a,
      href: "#",
      label: "Twitter",
    },
    {
      icon: o,
      href: "#",
      label: "LinkedIn",
    },
  ];
function c() {
  return (
    <footer className="relative overflow-hidden bg-background px-4 text-foreground sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 opacity-60"
        style={{
          background:
            "linear-gradient(to top, rgba(51,61,167,0.8) 0%, rgba(81,96,195,0.5) 20%, rgba(115,136,223,0.3) 40%, rgba(140,158,230,0.15) 60%, rgba(165,180,240,0.05) 80%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="grid flex-1 gap-8 sm:grid-cols-3">
            {Object.entries(l).map(([e, i]) => (
              <div key={e}>
                <h3 className="text-sm text-muted-foreground">{e}</h3>
                <ul className="mt-4 space-y-3">
                  {i.map((e) => (
                    <li key={e.label}>
                      <r.default
                        href={e.href}
                        className="text-lg text-foreground transition-colors hover:text-foreground/70"
                      >
                        {e.label}
                      </r.default>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:text-right">
            <h3 className="text-sm text-muted-foreground">Social</h3>
            <div className="mt-4 flex gap-3 lg:justify-end">
              {u.map((e) => (
                <r.default
                  href={e.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
                  aria-label={e.label}
                  key={e.label}
                >
                  <e.icon className="h-5 w-5 fill-foreground/40 text-foreground/40" strokeWidth={1} />
                </r.default>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            {"© "}
            {new Date().getFullYear()}
            {" Kraft, Inc. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <r.default
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </r.default>
            <r.default
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </r.default>
            <r.default
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookies
            </r.default>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-338 select-none h-44 pb-12">
        <i.default
          src="/svg/logo-text.svg"
          alt=""
          width={2500}
          height={400}
          className="w-full opacity-5 invert dark:invert-0"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
export { c as Footer };
