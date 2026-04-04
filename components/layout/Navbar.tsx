"use client";

/**
 * components/layout/Navbar.tsx — Theme-Aware
 *
 * Changes from Phase 2:
 *  - ThemeToggle extracted as a sub-component with `mounted` guard
 *    to prevent hydration mismatch on icon render
 *  - All hardcoded dark hex colours replaced with light/dark pairs
 *  - Scrolled state: bg-white/90 (light) ↔ bg-[#1e1e27]/80 (dark)
 *  - Burger bars, icon buttons, nav links — all theme-aware
 */

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";

const NAV_LINKS = [
  { href: "/#about",     label: "About",     section: "about" },
  { href: "/#services",  label: "Services",  section: "services" },
  { href: "/#resume",    label: "Resume",    section: "resume" },
  { href: "/#portfolio", label: "Portfolio", section: "portfolio" },
  { href: "/#skills",    label: "Skills",    section: "skills" },
  { href: "/#contact",   label: "Contact",   section: "contact" },
] as const;

// ── Theme Toggle — isolated to prevent hydration issues ────────────────────
// The mounted guard is CRITICAL: on the server and during first render, we
// don't know which theme is active. Rendering a placeholder div that matches
// the button size prevents layout shift when the real icon appears.
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder matching exact button size — prevents layout shift
    return (
      <div className="w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "w-9 h-9 flex items-center justify-center rounded-lg",
        "border border-gray-200 dark:border-white/10",
        "text-gray-500 dark:text-[#8f8f92]",
        "hover:border-[#62a92b]/40 hover:text-[#62a92b]",
        "dark:hover:border-[#62a92b]/40 dark:hover:text-[#62a92b] dark:hover:bg-[#62a92b]/5",
        "transition-all duration-200",
      ].join(" ")}
    >
      <i className={`${isDark ? "ri-sun-line" : "ri-moon-line"} text-base`} />
    </button>
  );
}

// ── Main Navbar ────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // ── Scroll sticky ──────────────────────────────────────────────
  const handleScroll = useCallback(() => setScrolled(window.scrollY > 50), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Active section via IntersectionObserver ────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(section); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const openMobile = () => { setIsInfoOpen(false); setIsMobileOpen(true); };
  const openInfo   = () => { setIsMobileOpen(false); setIsInfoOpen(true); };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[100]",
          "transition-all duration-300 ease-in-out",
          scrolled
            ? [
                "py-3",
                "bg-white/90 dark:bg-[#1e1e27]/90",
                "backdrop-blur-xl",
                "border-b border-gray-200/70 dark:border-white/5",
                "shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
              ].join(" ")
            : "py-5 bg-transparent",
        ].join(" ")}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo ──────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="Huzaifa.dev home">
              <Image
                src="/imgs/home-page-2/template/favicon.svg"
                alt=""
                width={28}
                height={28}
                className="transition-transform duration-300 group-hover:rotate-12"
                aria-hidden="true"
              />
              <span className="font-sans font-semibold text-base text-gray-900 dark:text-white">
                Huzaifa<span className="text-green-700 dark:text-[#62a92b]">.dev</span>
              </span>
            </Link>

            {/* ── Desktop Nav ───────────────────────────────────── */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ href, label, section }) => {
                const isActive = activeSection === section;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={[
                      // lg: slightly larger for readability on wide monitors
                      "relative px-3.5 py-2 text-sm lg:text-[0.925rem] font-sans rounded-lg",
                      "transition-all duration-200",
                      isActive
                        ? "text-green-700 dark:text-[#62a92b]"
                        : "text-gray-500 dark:text-[#8f8f92] hover:text-gray-900 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {label}
                    <span
                      className={[
                        "absolute bottom-1.5 left-1/2 -translate-x-1/2",
                        "w-1 h-1 rounded-full bg-green-700 dark:bg-[#62a92b]",
                        "transition-all duration-200",
                        isActive ? "opacity-100" : "opacity-0",
                      ].join(" ")}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ── Controls ──────────────────────────────────────── */}
            <div className="flex items-center gap-2">

              {/* Mounted-safe theme toggle */}
              <ThemeToggle />

              {/* "Get in touch" — desktop */}
              <button
                onClick={openInfo}
                aria-label="Open contact info"
                className={[
                  "hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-sans font-medium",
                  "border border-green-600/40 text-green-700",
                  "dark:border-[#62a92b]/30 dark:text-[#62a92b]",
                  "hover:bg-green-700 hover:text-white hover:border-green-700",
                  "dark:hover:bg-[#62a92b] dark:hover:text-[#1e1e27] dark:hover:border-[#62a92b]",
                  // Prominent hover lift in both modes
                  "hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(21,128,61,0.3)] dark:hover:shadow-[0_4px_14px_rgba(168,255,83,0.25)]",
                  "transition-all duration-200",
                ].join(" ")}
              >
                <i className="ri-send-plane-line text-sm" />
                Get in touch
              </button>

              {/* Burger — mobile */}
              <button
                onClick={openMobile}
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
                className={[
                  "md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg",
                  "border border-gray-200 dark:border-white/10",
                  "hover:border-[#62a92b]/40 dark:hover:border-[#62a92b]/40",
                  "hover:bg-[#62a92b]/5 dark:hover:bg-[#62a92b]/5",
                  "transition-all duration-200",
                ].join(" ")}
              >
                <span className={["block h-px w-5 bg-gray-600 dark:bg-[#8f8f92] rounded-full transition-all duration-300 origin-center", isMobileOpen ? "rotate-45 translate-y-[7px]" : ""].join(" ")} />
                <span className={["block h-px w-5 bg-gray-600 dark:bg-[#8f8f92] rounded-full transition-all duration-300", isMobileOpen ? "opacity-0 scale-x-0" : ""].join(" ")} />
                <span className={["block h-px w-5 bg-gray-600 dark:bg-[#8f8f92] rounded-full transition-all duration-300 origin-center", isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""].join(" ")} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <OffcanvasInfo isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </>
  );
}
