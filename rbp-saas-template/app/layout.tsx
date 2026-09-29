import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import "./globals.css";

const title = "React Bits Pro - SaaS Template";
const description =
  "Welcome to React Bits Pro - SaaS Template. A modern, accessible landing page template built with Next.js, Tailwind CSS, and TypeScript.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Your Name", url: "https://example.com" }],
  manifest: "/site.webmanifest",
  keywords: ["landing page", "template", "Next.js", "React", "Tailwind CSS", "TypeScript"],
  creator: "@yourhandle",
  publisher: title,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://example.com" },
  openGraph: {
    title,
    description,
    url: "https://example.com",
    images: [{ url: "https://example.com/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://example.com/og-image.png"],
  },
  icons: {
    shortcut: "/favicon-16x16.png",
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

function Corner({ position }: { position: string }) {
  return (
    <svg
      className={`site-corner site-corner--${position}`}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/797e433ab948586e-s.p.dbea232f.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/caa3a2e1cccd8315-s.p.853070df.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <div className="site-frame site-frame--top" aria-hidden="true" />
          <div className="site-frame site-frame--bottom" aria-hidden="true" />
          <div className="site-frame site-frame--left" aria-hidden="true" />
          <div className="site-frame site-frame--right" aria-hidden="true" />
          <Corner position="top-left" />
          <Corner position="top-right" />
          <Corner position="bottom-left" />
          <Corner position="bottom-right" />
          <Header />
          <ThemeSwitch />
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
