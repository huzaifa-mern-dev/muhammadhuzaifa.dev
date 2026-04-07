/**
 * app/layout.tsx — Root Layout
 *
 * Responsibilities:
 *   1. Load all fonts via next/font (zero CLS, self-hosted, optimised)
 *   2. Set global metadata (SEO)
 *   3. Wrap the app in ThemeProvider for dark/light mode
 *   4. Attach font CSS variables to <html> so Tailwind can reference them
 */

import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ChatWidget  from "@/components/ui/ChatWidget";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

// ─── Google Fonts ─────────────────────────────────────────────────────────────
// next/font automatically self-hosts these at build time — no external request
// at runtime, no layout shift, no CORS issues.

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

// ─── Local Font (Satoshi) ────────────────────────────────────────────────────
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Muhammad Huzaifa — Full Stack Developer",
    template: "%s | Muhammad Huzaifa",
  },
  description:
    "Portfolio of Muhammad Huzaifa — Full Stack Developer specialising in React, Next.js, Node.js, WordPress, and MongoDB. Open to freelance projects.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "MERN Stack",
    "Muhammad Huzaifa",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Huzaifa", url: "https://muhammadhuzaifa.dev" }],
  creator: "Muhammad Huzaifa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadhuzaifa.dev",
    title: "Muhammad Huzaifa — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js, WordPress & MongoDB.",
    siteName: "Huzaifa.dev",
    // TODO: Add og:image once you have a cover image in /public
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Huzaifa — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js, WordPress & MongoDB.",
    creator: "@huzaifa_dev", // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/imgs/home-page-2/template/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/imgs/home-page-2/template/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#272730" },
  ],
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning is REQUIRED when using next-themes.
      // next-themes modifies the `class` attribute on <html> on the client
      // to add/remove "dark". Without this prop, React will warn about
      // a hydration mismatch (server renders no class, client adds "dark").
      suppressHydrationWarning
      className={[
        inter.variable,
        dmMono.variable,
        playfairDisplay.variable,
      ].join(" ")}
    >
      {/*
        suppressHydrationWarning on <body> suppresses the React warning caused
        by next-themes injecting the 'dark' class before React hydrates.
        This is the recommended pattern for next-themes.
      */}
      <body
        className={`${satoshi.variable} font-sans antialiased bg-gray-50 dark:bg-[#272730] text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        {/*
          ThemeProvider config:
          - attribute="class"      → Tailwind darkMode: 'class' strategy
          - defaultTheme="dark"    → Always start in dark mode
          - enableSystem={false}   → CRITICAL: disable OS override so dark mode
                                     persists even on systems set to light mode
          - disableTransitionOnChange → prevents flash on theme toggle
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Fade-out preloader — shown on every cold page load */}
          <Preloader />

          {/* Persistent navigation — fixed, floats above all content */}
          <Navbar />

          {/* Page content injected here by Next.js App Router */}
          {children}

          {/* Persistent footer */}
          <Footer />

          {/* AI chat widget — floating bottom-right */}
          <ChatWidget />

          {/* Fixed scroll-to-top progress ring button */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
