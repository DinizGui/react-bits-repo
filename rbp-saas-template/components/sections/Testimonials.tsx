"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
const s = [
    {
      quote:
        "This platform completely transformed how our support team operates. Response times dropped by 60% and customer satisfaction is at an all-time high.",
      name: "Jennifer Walsh",
      title: "VP of Customer Success @ Commandr",
      avatar:
        "/images/external/photo-1600481453173-55f6a844a4ea.jpg",
      color: "#a8d946",
      company: "Commandr",
    },
    {
      quote:
        "From onboarding to full deployment, the entire process was seamless. Our team productivity increased by 40% and we couldn't be happier with the results.",
      name: "Michael Torres",
      title: "Head of Operations @ Interlock",
      avatar:
        "/images/external/photo-1530466015235-1d47696ea847.jpg",
      color: "#a8d946",
      company: "Interlock",
    },
    {
      quote:
        "The AI-powered insights brought our customer strategy to life. Every interaction now feels personalized yet scalable for our growing user base.",
      name: "Amanda Chen",
      title: "CX Director @ Focalpoint",
      avatar:
        "/images/external/photo-1705408115324-6bd2cbfa4d93.jpg",
      color: "#a8d946",
      company: "Focalpoint",
    },
    {
      quote:
        "Outstanding platform and support team. They helped us implement automation two weeks ahead of schedule with zero compromises on quality.",
      name: "David Patterson",
      title: "CEO @ Acme Corp",
      avatar:
        "/images/external/photo-1564172556663-2bef9580fc44.jpg",
      color: "#a8d946",
      company: "Acme Corp",
    },
  ],
  l = [
    {
      name: "Commandr",
      logo: "/mock-logos/commandr.svg",
    },
    {
      name: "Interlock",
      logo: "/mock-logos/interlock.svg",
    },
    {
      name: "Focalpoint",
      logo: "/mock-logos/focalpoint.svg",
    },
    {
      name: "Acme Corp",
      logo: "/mock-logos/acmecorp.svg",
    },
  ];
function Testimonials() {
  const [e, o] = useState(0);
  useEffect(() => {
    const e = setInterval(() => {
      o((e) => (e + 1) % s.length);
    }, 1e4);
    return () => clearInterval(e);
  }, []);
  return (
    <section className="w-full bg-frame border-t border-b border-accent/15 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="mb-16 text-4xl leading-tight font-medium text-neutral-900 sm:text-5xl lg:mb-20 lg:text-6xl dark:text-neutral-50"
        >
          Trusted by teams worldwide
        </motion.h2>
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-12">
          <div
            className="flex items-center justify-start gap-4 lg:gap-6"
            role="tablist"
            aria-label="Testimonials"
          >
            {s.map((a, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: e === i ? 1.1 : 0.9,
                  opacity: e === i ? 1 : 0.6,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="relative"
                role="tab"
                aria-selected={e === i}
                tabIndex={e === i ? 0 : -1}
                onClick={() => o(i)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-colors duration-500 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                  style={{
                    backgroundColor: e === i ? a.color : undefined,
                  }}
                >
                  <Image
                    src={a.avatar}
                    alt={a.name}
                    width={64}
                    height={64}
                    className="h-8 w-8 rounded-full object-cover grayscale sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                  />
                </div>
                {e === i && (
                  <svg
                    className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)] -rotate-90"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke={a.color}
                      strokeWidth="1.5"
                      opacity="0.2"
                    />
                    <motion.circle
                      key={`progress-${e}`}
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke={a.color}
                      strokeWidth="1.5"
                      strokeDasharray={`${2 * Math.PI * 48}`}
                      initial={{
                        strokeDashoffset: 2 * Math.PI * 48,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 10,
                        ease: "linear",
                      }}
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col justify-center" role="tabpanel" aria-live="polite">
            <AnimatePresence mode="wait">
              {s[e] && (
                <motion.div
                  key={e}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <blockquote className="mb-6 text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
                    “{s[e].quote}”
                  </blockquote>
                  <div className="text-base font-medium text-neutral-900 sm:text-lg dark:text-neutral-100">
                    {s[e].name}, <span className="text-neutral-600 dark:text-neutral-400">{s[e].title}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {l.map((a, i) => {
            const l = s[e]?.company === a.name;
            return (
              <motion.div
                key={a.name}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                }}
                animate={{
                  scale: l ? 1.1 : 1,
                }}
                className="flex items-center"
              >
                <Image
                  src={a.logo}
                  alt={`${a.name} logo`}
                  width={120}
                  height={40}
                  className={`h-8 w-auto object-contain brightness-0 transition-all duration-300 sm:h-10 dark:invert ${l ? "opacity-100 dark:opacity-100" : "opacity-30 hover:opacity-60 dark:opacity-20 dark:hover:opacity-50"}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
