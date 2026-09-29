"use client";

import { createContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Lenis from "lenis";

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotion() {
  return false;
}

export const ReducedMotionContext = createContext(false);

function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);
  return <ReducedMotionContext.Provider value={reducedMotion}>{children}</ReducedMotionContext.Provider>;
}

const lenisOptions = {
  duration: 1.6,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
};

function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis(lenisOptions);

    function onAnchorClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -100 });
      }
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ReducedMotionProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </ReducedMotionProvider>
    </ThemeProvider>
  );
}
