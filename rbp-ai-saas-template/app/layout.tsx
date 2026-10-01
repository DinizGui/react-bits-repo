import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "React Bits Pro - AI SaaS Template";
const description =
  "Welcome to React Bits Pro - AI SaaS Template. Build, deploy, and scale AI-powered applications with enterprise-grade infrastructure. From ideation to production in minutes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-ai.com"),
  title,
  description,
  authors: [{ name: "Nexus AI", url: "https://nexus-ai.com" }],
  manifest: "/site.webmanifest",
  keywords: [
    "AI",
    "artificial intelligence",
    "machine learning",
    "AI platform",
    "LLM",
    "GPT",
    "AI API",
    "developer tools",
    "AI infrastructure",
  ],
  creator: "@nexusai",
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
  alternates: { canonical: "https://nexus-ai.com" },
  openGraph: {
    title,
    description,
    url: "https://nexus-ai.com",
    images: [{ url: "https://nexus-ai.com/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://nexus-ai.com/og-image.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
