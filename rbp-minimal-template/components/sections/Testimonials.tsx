"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
const o = [0.16, 1, 0.3, 1] as const,
  l = [
    {
      title: "10 Hours Saved Every Week",
      description:
        "I used to spend hours reading through research papers and articles. Now TLDR gives me the key insights in seconds. It's completely changed how I consume content.",
      name: "Sarah Chen",
      role: "Product Manager at Stripe",
    },
    {
      title: "My Secret Productivity Weapon",
      description:
        "As a busy professional, I don't have time to watch every video or read every article. TLDR lets me stay informed without the time commitment.",
      name: "Marcus Johnson",
      role: "Senior Engineer at Vercel",
    },
    {
      title: "Works With Everything",
      description:
        "Articles, YouTube videos, podcasts, PDFs—TLDR handles it all. One tool for all my summarization needs. The consistency is remarkable.",
      name: "Elena Rodriguez",
      role: "Content Strategist at Notion",
    },
    {
      title: "Actually Useful AI",
      description:
        "Unlike other AI tools that give generic responses, TLDR actually captures what matters. The summaries are accurate and save me from information overload.",
      name: "David Park",
      role: "Research Lead at OpenAI",
    },
    {
      title: "Perfect for Research",
      description:
        "I go through dozens of papers weekly. TLDR helps me quickly identify which ones deserve a deeper read. It's become essential to my workflow.",
      name: "Priya Sharma",
      role: "PhD Candidate at MIT",
    },
  ];
function Testimonials() {
  const e = useRef(null),
    [i, u] = useState(false),
    [c, h] = useState(true),
    [d, p] = useState(1),
    f = useCallback(() => {
      if (e.current) {
        const { scrollLeft: t, scrollWidth: n, clientWidth: i } = e.current,
          r = n - i;
        u(t > 1);
        h(t < r - 1);
        p(Math.min(1, (r - t) / 150));
      }
    }, []);
  useEffect(() => {
    const t = e.current;
    if (t)
      return (
        f(),
        t.addEventListener("scroll", f),
        window.addEventListener("resize", f),
        () => {
          t.removeEventListener("scroll", f);
          window.removeEventListener("resize", f);
        }
      );
  }, [f]);
  const m = (t) => {
    if (e.current) {
      const n = e.current,
        i = (n.children[0] ? n.children[0].offsetWidth : 400) + 24,
        r = Math.round(n.scrollLeft / i),
        a = "left" === t ? Math.max(0, r - 1) : Math.min(l.length - 1, r + 1);
      n.scrollTo({
        left: a * i,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="bg-background py-16 text-foreground overflow-hidden md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 md:mb-16"
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
            ease: o,
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
            What People Are Saying
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => m("left")}
              disabled={!i}
              className="cursor-pointer p-3 rounded-md bg-accent text-black transition-all duration-200 hover:scale-110 hover:bg-accent/80 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => m("right")}
              disabled={!c}
              className="cursor-pointer p-3 rounded-md bg-accent text-black transition-all duration-200 hover:scale-110 hover:bg-accent/80 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        <div className="relative -mx-6 md:mx-0">
          <div
            ref={e}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-6 md:px-0"
            style={{
              scrollPaddingInline: "1.5rem",
            }}
          >
            {l.map((e, n) => (
              <div
                key={n}
                className="flex-none w-[calc(100vw-3rem)] md:w-100 h-112.5 bg-muted rounded-2xl p-8 md:p-10 flex flex-col justify-between snap-start"
              >
                <h3 className="text-3xl md:text-4xl font-medium leading-[1.1] tracking-tight">{e.title}</h3>
                <div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{e.description}</p>
                  <div>
                    <p className="font-medium text-foreground">{e.name}</p>
                    <p className="text-sm text-muted-foreground">{e.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-32 transition-opacity duration-300 hidden md:block"
            style={{
              opacity: d,
              background: "linear-gradient(to right, transparent, var(--background))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
