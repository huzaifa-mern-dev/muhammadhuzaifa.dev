"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import OffcanvasInfo from "./OffcanvasInfo";

const NAV_LINKS = [
  { href: "/#about",     label: "About",     section: "about" },
  { href: "/#services",  label: "Services",  section: "services" },
  { href: "/#resume",    label: "Resume",    section: "resume" },
  { href: "/#portfolio", label: "Portfolio", section: "portfolio" },
  { href: "/#testimonials", label: "Testimonials", section: "testimonials"},
  { href: "/#contact",   label: "Contact",   section: "contact" },
] as const;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "w-10 h-10 flex items-center justify-center rounded-full",
        "border border-gray-200 dark:border-white/10 flex-shrink-0",
        "text-gray-500 dark:text-[#8f8f92]",
        "hover:border-primary-2/40 hover:text-primary-2 hover:bg-primary-2/5",
        "dark:hover:border-primary-2/40 dark:hover:text-primary-2 dark:hover:bg-primary-2/5",
        "transition-all duration-300",
      ].join(" ")}
    >
      <i className={`${isDark ? "ri-sun-line" : "ri-moon-line"} text-lg`} />
    </button>
  );
}

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

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
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-[95%] max-w-5xl transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 rounded-full backdrop-blur-md bg-white/70 dark:bg-[#272730]/70 border border-gray-200/50 dark:border-white/10 shadow-lg">
          
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0" aria-label="Huzaifa.dev home">
            <Image
              src="/imgs/home-page-2/template/favicon.svg"
              alt=""
              width={30}
              height={30}
              className="transition-transform duration-300 group-hover:rotate-12"
              aria-hidden="true"
            />
            <span className="font-sans font-bold text-lg text-gray-900 dark:text-white sm:block">
              Huzaifa<span className="text-primary-2 dark:text-primary-2">.dev</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 relative">
            {NAV_LINKS.map(({ href, label, section }) => {
              const isActive = activeSection === section;
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "relative px-4 py-2 text-[0.925rem] font-sans font-medium rounded-full",
                    "transition-colors duration-300 z-10",
                    isActive
                      ? "text-primary-2 dark:text-primary-2"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
                  ].join(" ")}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-primary-2/10 dark:bg-primary-2/10 z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <ThemeToggle />

            <button
              onClick={openInfo}
              aria-label="Open contact info"
              className={[
                "hidden md:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-sans font-bold tracking-wide",
                "bg-primary-2 text-white shadow-md shadow-primary-2/20",
                "hover:bg-[#528d24] hover:shadow-[0_4px_14px_rgba(98,169,43,0.3)] hover:-translate-y-0.5",
                "transition-all duration-300",
              ].join(" ")}
            >
              <i className="ri-send-plane-line text-[15px]" />
              Get in touch
            </button>

            <button
              onClick={openMobile}
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
              className={[
                "md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full",
                "border border-gray-200 dark:border-white/10",
                "hover:border-primary-2/40 dark:hover:border-primary-2/40",
                "hover:bg-primary-2/5 dark:hover:bg-primary-2/5",
                "transition-all duration-300",
              ].join(" ")}
            >
              <span className={["block h-[2px] w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center", isMobileOpen ? "rotate-45 translate-y-[7px]" : ""].join(" ")} />
              <span className={["block h-[2px] w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300", isMobileOpen ? "opacity-0 scale-x-0" : ""].join(" ")} />
              <span className={["block h-[2px] w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center", isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""].join(" ")} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <OffcanvasInfo isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </>
  );
}
