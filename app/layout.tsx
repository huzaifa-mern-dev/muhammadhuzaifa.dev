import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Huzaifa — Full Stack Developer",
    description:
      "Full Stack Developer specialising in React, Next.js, Node.js, WordPress & MongoDB.",
    creator: "@huzaifa_dev",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[
        inter.variable,
        dmMono.variable,
        playfairDisplay.variable,
      ].join(" ")}
    >
      <body
        className={`${satoshi.variable} font-sans antialiased bg-gray-50 dark:bg-[#272730] text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
