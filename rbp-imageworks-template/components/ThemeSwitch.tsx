"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
function ThemeSwitch() {
  const e = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false,
    ),
    { setTheme: i, resolvedTheme: l } = useTheme();
  if (!e)
    return (
      <div className="fixed right-6 bottom-6 z-50">
        <button
          className="h-10 w-10 cursor-not-allowed rounded-full bg-foreground/10 opacity-30"
          aria-label="Toggle theme"
          disabled
        />
      </div>
    );
  const a = "dark" === l;
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        onClick={() => {
          i("dark" === l ? "light" : "dark");
        }}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-muted text-foreground opacity-30 shadow-lg transition-opacity duration-300 hover:opacity-100 hover:shadow-xl focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={a ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={a}
        type="button"
      >
        {a ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
      </button>
    </div>
  );
}
export { ThemeSwitch };
