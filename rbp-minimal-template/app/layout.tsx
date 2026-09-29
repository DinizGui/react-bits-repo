import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Footer } from "@/components/Footer";
import "./globals.css";

const title = "React Bits Pro - Minimal Template - Read smarter, not longer";
const description = "AI-powered summaries for articles, videos, and documents. Save hours every week.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "TLDR Technologies", url: "https://example.com" }],
  manifest: "/site.webmanifest",
  keywords: ["AI summarizer", "article summary", "TLDR", "content summarization", "productivity", "reading assistant"],
  creator: "@tldr",
  publisher: "React Bits Pro - Minimal Template",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/797e433ab948586e-s.p.dbea232f.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/caa3a2e1cccd8315-s.p.853070df.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Header />
          <ThemeSwitch />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
