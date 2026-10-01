"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Img = { src: string; alt: string };

const DEFAULT_IMAGES: Img[] = Array.from({ length: 12 }, (_, i) => ({
  src: `/img/mock${i + 1}_compressed.webp`,
  alt: `Kraft design ${i + 1}`,
}));

// Coluna 0 entra da esquerda, coluna 2 da direita, a do meio cresce no lugar
const COLUMN_FROM = [
  { xPercent: -400, origin: "0% 50%", scaleX: 6, scaleY: 0.3, filter: "blur(10px)" },
  { xPercent: 0, origin: "50% 50%", scaleX: 0.7, scaleY: 0.7, filter: "blur(5px)" },
  { xPercent: 400, origin: "100% 50%", scaleX: 6, scaleY: 0.3, filter: "blur(10px)" },
];

function ImageReveal({ images = DEFAULT_IMAGES, className = "" }: { images?: Img[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const columns: Img[][] = [[], [], []];
  images.forEach((img, i) => columns[i % 3].push(img));

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      ref.current!.querySelectorAll(".column").forEach((column, c) => {
        const from = COLUMN_FROM[c] ?? { xPercent: 0, origin: "50% 50%", scaleX: 1, scaleY: 1, filter: "blur(0px)" };
        column.querySelectorAll(".column__item").forEach((item) => {
          const wrap = item.querySelector(".column__item-imgwrap");
          if (!wrap) return;
          gsap.fromTo(
            wrap,
            {
              willChange: "filter",
              xPercent: from.xPercent,
              opacity: 0,
              scaleX: from.scaleX,
              scaleY: from.scaleY,
              filter: from.filter,
            },
            {
              startAt: { transformOrigin: from.origin },
              scrollTrigger: {
                trigger: item,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true,
              },
              xPercent: 0,
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              filter: "blur(0px)",
            },
          );
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className={`overflow-hidden -mt-24 ${className}`}>
      <div
        ref={ref}
        className="columns mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 sm:px-6 md:gap-6 lg:gap-8 lg:px-8"
      >
        {columns.map((col, c) => (
          <div key={c} className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
            {col.map((img, i) => (
              <figure key={`col${c}-${i}`} className="column__item">
                <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                  <div
                    className="column__item-img h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img.src})` }}
                    role="img"
                    aria-label={img.alt}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-color"
                    style={{ background: "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)" }}
                    aria-hidden="true"
                  />
                </div>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export { ImageReveal };
