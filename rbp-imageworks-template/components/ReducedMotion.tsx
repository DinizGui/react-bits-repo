"use client";

import { createContext, useSyncExternalStore, useContext } from "react";
function r(e) {
  const t = window.matchMedia("(prefers-reduced-motion: reduce)");
  t.addEventListener("change", e);
  return () => t.removeEventListener("change", e);
}
function o() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function n() {
  return false;
}
const s = createContext(false);
function ReducedMotionProvider({ children: e }: any) {
  const l = useSyncExternalStore(r, o, n);
  return <s.Provider value={l}>{e}</s.Provider>;
}
const quickEase = [0.55, 0, 1, 0.45] as const;
const softEase = [0.22, 1, 0.36, 1] as const;
function useReducedMotion() {
  return useContext(s);
}
export { ReducedMotionProvider };
export { quickEase };
export { softEase };
export { useReducedMotion };
