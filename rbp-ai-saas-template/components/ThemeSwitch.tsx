// @ts-nocheck
"use client";

import { createLucideIcon as __lucide_r } from "lucide-react";
const r = { default: __lucide_r };
import * as s from "next-themes";
import * as a from "react";
let C_i = (0, r.default)("moon", [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ]),
  C_n = (0, r.default)("sun", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2",
      },
    ],
    [
      "path",
      {
        d: "M12 2v2",
        key: "tus03m",
      },
    ],
    [
      "path",
      {
        d: "M12 20v2",
        key: "1lh1kg",
      },
    ],
    [
      "path",
      {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j",
      },
    ],
    [
      "path",
      {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv",
      },
    ],
    [
      "path",
      {
        d: "M2 12h2",
        key: "1t8f8n",
      },
    ],
    [
      "path",
      {
        d: "M20 12h2",
        key: "1q8mjw",
      },
    ],
    [
      "path",
      {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5",
      },
    ],
    [
      "path",
      {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs",
      },
    ],
  ]);
function o() {
  let e = (0, a.useSyncExternalStore)(
      () => () => {},
      () => !0,
      () => !1,
    ),
    { setTheme: r, resolvedTheme: o } = (0, s.useTheme)();
  if (!e)
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-12 h-12 rounded-full bg-foreground/10 opacity-30 cursor-not-allowed"
          aria-label="Toggle theme"
          disabled={!0}
        />
      </div>
    );
  let l = "dark" === o;
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => {
          r("dark" === o ? "light" : "dark");
        }}
        className="w-10 h-10 cursor-pointer rounded-full bg-muted text-foreground flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-xl"
        aria-label={l ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={l}
        type="button"
      >
        {l ? <C_n className="w-5 h-5" aria-hidden="true" /> : <C_i className="w-5 h-5" aria-hidden="true" />}
      </button>
    </div>
  );
}
export { o as ThemeSwitch };
