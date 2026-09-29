"use client";

import { motion } from "motion/react";
import { useReducedMotion, softEase } from "@/components/ReducedMotion";
function Reveal({
  children: e,
  className: r,
  delay: a = 0,
  y: s = 16,
  inView: o = false,
  when: l = true,
  scale: u,
  duration: c = 0.8,
}: any) {
  const h = useReducedMotion(),
    d =
      undefined === u
        ? {
            opacity: 0,
            y: s,
          }
        : {
            opacity: 0,
            y: s,
            scale: u,
          },
    p =
      undefined === u
        ? {
            opacity: 1,
            y: 0,
          }
        : {
            opacity: 1,
            y: 0,
            scale: 1,
          };
  return (
    <motion.div
      className={r}
      initial={!h && d}
      {...(o
        ? {
            whileInView: p,
            viewport: {
              once: true,
              margin: "-80px",
            },
          }
        : {
            animate: l || h ? p : d,
          })}
      transition={{
        duration: c,
        ease: softEase,
        delay: a,
      }}
    >
      {e}
    </motion.div>
  );
}
export { Reveal };
