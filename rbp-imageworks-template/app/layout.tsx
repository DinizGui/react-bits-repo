import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  authors: siteConfig.authors,
  manifest: "/site.webmanifest",
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  publisher: siteConfig.name,
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
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Home",
    description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [{ url: `${siteConfig.url}${siteConfig.ogImage}`, width: 1200, height: 630, alt: "Home" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.creator,
    title: "Home",
    description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
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
        <link rel="preload" href="/fonts/797e433ab948586e-s.p.1v5bejj26fx9h.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/e41d5df559864f9e-s.p.2rlzm4mj5kw8e.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <a
            href="#main-content"
            className="absolute top-4 -left-[9999px] z-9999 rounded-md border-2 border-ring bg-background px-4 py-3 font-semibold text-foreground no-underline focus:left-4 focus:outline-2 focus:outline-offset-2 focus:outline-ring"
          >
            Skip to main content
          </a>
          {children}
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}
