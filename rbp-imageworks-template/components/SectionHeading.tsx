"use client";

import { Reveal } from "@/components/Reveal";
function SectionHeading({ id: e, title: n, description: r, aside: a, className: s }: any) {
  return (
    <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${s ?? ""}`}>
      <div>
        <Reveal inView>
          <h2
            id={e}
            className="max-w-3xl font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-balance"
          >
            {n}
          </h2>
        </Reveal>
        {r && (
          <Reveal inView delay={0.08}>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-pretty text-muted-foreground sm:text-base">
              {r}
            </p>
          </Reveal>
        )}
      </div>
      {a && (
        <Reveal inView delay={0.16} className="shrink-0">
          {a}
        </Reveal>
      )}
    </div>
  );
}
export { SectionHeading };
