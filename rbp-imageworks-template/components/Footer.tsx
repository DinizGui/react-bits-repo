"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { useMotionValue, useSpring, useMotionTemplate, motion, useScroll, useTransform } from "motion/react";
import { LogoMark } from "@/components/Logo";
import { useReducedMotion, softEase } from "@/components/ReducedMotion";
import { siteConfig, SPECTRUM_CLASS } from "@/lib/site-config";
const v = siteConfig.url,
  _ = [
    {
      title: "Product",
      links: [
        {
          label: "Features",
          href: "#features",
        },
        {
          label: "Benchmarks",
          href: "#benchmarks",
        },
        {
          label: "Stories",
          href: "#stories",
        },
        {
          label: "Pricing",
          href: "#pricing",
        },
        {
          label: "FAQ",
          href: "#faq",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About",
          href: `${v}/about`,
        },
        {
          label: "Blog",
          href: `${v}/blog`,
        },
        {
          label: "Careers",
          href: `${v}/careers`,
        },
        {
          label: "Contact",
          href: `${v}/contact`,
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "X",
          href: "https://x.com/imageworks",
        },
        {
          label: "Instagram",
          href: "https://instagram.com/imageworks",
        },
        {
          label: "Discord",
          href: "https://discord.gg/imageworks",
        },
      ],
    },
  ],
  x = [
    {
      label: "Terms",
      href: `${v}/terms`,
    },
    {
      label: "Privacy",
      href: `${v}/privacy`,
    },
    {
      label: "Cookies",
      href: `${v}/cookies`,
    },
  ];
function ComponentY() {
  const [e, i] = useState(false);
  return (
    <div className="max-w-[26rem]">
      <h2 className="font-serif text-[2rem] leading-none tracking-[-0.01em] text-foreground">
        Don’t miss out
      </h2>
      <p className="mt-2 text-[15px] text-muted-foreground">
        New models, features and the occasional making-of, once a month.
      </p>
      {/* TODO: backend original não recuperável (o original só marca o estado como inscrito, sem enviar o e-mail a lugar nenhum) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          i(true);
        }}
        className="relative mt-6"
        aria-label="Newsletter signup"
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          required
          disabled={e}
          placeholder="Enter your email"
          autoComplete="email"
          className="h-13 w-full rounded-xl border border-border bg-background pr-14 pl-4 text-[15px] text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-80"
        />
        <button
          type="submit"
          aria-label={e ? "Subscribed" : "Subscribe"}
          disabled={e}
          className="absolute top-1.5 right-1.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background transition-[opacity,transform] hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95 disabled:bg-emerald-600 disabled:text-white"
        >
          {e ? <Check className="h-4 w-4" aria-hidden /> : <ArrowRight className="h-4 w-4" aria-hidden />}
        </button>
      </form>
      <p
        role="status"
        aria-live="polite"
        className={`mt-2 text-sm text-muted-foreground transition-opacity ${e ? "opacity-100" : "opacity-0"}`}
      >
        {e ? "You're on the list. Talk soon." : " "}
      </p>
    </div>
  );
}
function S({ className: e }: any) {
  const r = useRef(null),
    s = useRef(null),
    o = useReducedMotion(),
    u = useMotionValue(-9999),
    c = useMotionValue(-9999),
    p = useMotionValue(0),
    m = useSpring(u, {
      stiffness: 300,
      damping: 30,
      mass: 0.5,
    }),
    v = useSpring(c, {
      stiffness: 300,
      damping: 30,
      mass: 0.5,
    }),
    _ = useSpring(p, {
      stiffness: 120,
      damping: 22,
    }),
    x = useMotionValue(120),
    y = useMotionTemplate`radial-gradient(${x}px at ${m}px ${v}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(0,0,0,0.55) 58%, transparent 100%)`;
  useEffect(() => {
    const e = r.current,
      t = s.current;
    if (!e || !t) return;
    let i = 0,
      n = () => {
        let n, r;
        if (
          (i ||
            ((n = e.style.fontSize),
            (e.style.fontSize = "100px"),
            (r = t.getBoundingClientRect().width / 100),
            (e.style.fontSize = n),
            (i = r)),
          !i)
        )
          return;
        const a = (0.98 * e.clientWidth) / i;
        e.style.fontSize = `${a}px`;
        e.style.height = `${0.72 * a}px`;
        x.set(0.72 * a * 0.9);
      };
    n();
    const a = new ResizeObserver(n);
    a.observe(e);
    document.fonts?.ready.then(() => {
      i = 0;
      n();
    });
    return () => a.disconnect();
  }, [x]);
  const M =
      "absolute bottom-[-0.32em] left-1/2 flex -translate-x-1/2 items-end gap-[0.12em] leading-none font-medium tracking-[-0.05em] whitespace-nowrap select-none",
    b = (
      <>
        <LogoMark className="h-[0.86em] w-[0.86em] shrink-0 translate-y-[-0.13em]" />
        <span>Imageworks</span>
      </>
    );
  return (
    <div
      ref={r}
      aria-hidden="true"
      onPointerMove={(e) => {
        if (o) return;
        const t = e.currentTarget.getBoundingClientRect();
        u.set(e.clientX - t.left);
        c.set(e.clientY - t.top);
        p.set(1);
      }}
      onPointerEnter={(e) => {
        if (o) return;
        const t = e.currentTarget.getBoundingClientRect();
        m.jump(e.clientX - t.left);
        v.jump(e.clientY - t.top);
      }}
      onPointerLeave={() => p.set(0)}
      className="relative h-[15vw] overflow-hidden"
    >
      <div ref={s} className={`${M} ${e ?? ""}`}>
        {b}
      </div>
      {!o && (
        <motion.div
          style={{
            opacity: _,
            maskImage: y,
            WebkitMaskImage: y,
          }}
          className="absolute inset-0"
        >
          <div
            className={`${SPECTRUM_CLASS} ${M} [background-size:200%_100%] bg-clip-text text-transparent motion-safe:animate-[spectrum-drift_14s_linear_infinite]`}
          >
            <span
              className={`inline-block h-[0.86em] w-[0.86em] shrink-0 translate-y-[-0.13em] [mask-image:url(/brand-mask.svg)] [background-size:200%_100%] [mask-size:100%_100%] motion-safe:animate-[spectrum-drift_14s_linear_infinite] ${SPECTRUM_CLASS}`}
            />
            <span>Imageworks</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
function Footer() {
  const e = useRef(null),
    i = useReducedMotion(),
    { scrollYProgress: a } = useScroll({
      target: e,
      offset: ["start end", "end end"],
    }),
    s = useTransform(a, [0, 1], ["52%", "0%"]),
    o = useTransform(a, [0, 0.6], [0.3, 1]);
  return (
    <footer
      ref={e}
      aria-labelledby="footer-heading"
      className="relative overflow-hidden bg-background text-foreground"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <motion.div
          style={
            i
              ? {}
              : {
                  y: s,
                  opacity: o,
                }
          }
        >
          <S className="text-foreground/[0.08] dark:text-foreground/[0.14]" />
        </motion.div>
        <motion.div
          initial={
            !i && {
              opacity: 0,
              y: 24,
            }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-10%",
          }}
          transition={{
            duration: 0.9,
            ease: softEase,
          }}
          className="relative -mt-px mb-4 rounded-2xl border border-border bg-muted px-6 pt-10 pb-6 sm:mb-6 sm:px-10 sm:pt-12 lg:px-12"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
            <ComponentY />
            <nav aria-label="Footer">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
                {_.map((e) => (
                  <div key={e.title}>
                    <h3 className="text-xs font-medium tracking-[0.08em] text-foreground/85 uppercase">
                      {e.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {e.links.map((e) => (
                        <li key={e.label}>
                          <a
                            href={e.href}
                            className="group inline-flex items-center gap-1 rounded-sm text-[15px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            {...(e.href.startsWith("http")
                              ? {
                                  rel: "noreferrer noopener",
                                }
                              : {})}
                          >
                            <span className="relative">
                              {e.label}
                              <span
                                aria-hidden="true"
                                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100"
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 pb-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:pb-0">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                All systems normal
              </span>
              <span>
                {"© "}
                {new Date().getFullYear()} {siteConfig.name}
              </span>
            </div>
            <ul className="flex flex-wrap items-center gap-5">
              {x.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.href}
                    className="rounded-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
export { Footer };
