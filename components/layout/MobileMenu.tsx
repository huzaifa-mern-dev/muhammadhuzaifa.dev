"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about",     label: "About Me",   icon: "ri-user-3-line" },
  { href: "/#services",  label: "Services",   icon: "ri-service-line" },
  { href: "/#resume",    label: "Resume",     icon: "ri-file-text-line" },
  { href: "/#portfolio", label: "Portfolio",  icon: "ri-layout-masonry-line" },
  { href: "/#testimonials", label: "Testimonials", icon: "ri-message-2-line" },
  { href: "/#contact",   label: "Contact",    icon: "ri-send-plane-line" },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-[998]",
          "bg-black/50 dark:bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={[
          "fixed top-0 left-0 h-full w-[300px] z-[999]",
          "bg-white dark:bg-[#1e1e27]",
          "border-r border-gray-200 dark:border-white/5",
          "flex flex-col",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-white/5">
          <Link
            href="/"
            onClick={onClose}
            className="font-sans font-semibold text-lg text-gray-900 dark:text-white"
          >
            Huzaifa
            <span className="text-[#62a92b] dark:text-[#62a92b]">.dev</span>
          </Link>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className={[
              "w-8 h-8 flex items-center justify-center rounded-lg",
              "border border-gray-200 dark:border-white/10",
              "text-gray-500 dark:text-[#8f8f92]",
              "hover:border-[#62a92b]/40 hover:text-[#62a92b]",
              "dark:hover:border-[#62a92b]/40 dark:hover:text-[#62a92b]",
              "transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#62a92b]/50 dark:focus-visible:ring-[#62a92b]/50",
            ].join(" ")}
          >
            <i className="ri-close-line text-base" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="text-[10px] font-mono uppercase text-gray-400 dark:text-[#636366] tracking-widest px-3 mb-4">
            Navigation
          </p>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={[
                    "flex items-center gap-3 px-3 py-3 rounded-lg",
                    "text-gray-600 dark:text-[#b2b2ba] font-sans text-sm",
                    "transition-all duration-200 group",
                    "hover:bg-gray-100 dark:hover:bg-white/5",
                    "hover:text-gray-900 dark:hover:text-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0",
                      "bg-gray-100 dark:bg-white/5",
                      "text-gray-400 dark:text-[#636366]",
                      "group-hover:bg-[#62a92b]/10 group-hover:text-[#62a92b]",
                      "dark:group-hover:bg-[#62a92b]/10 dark:group-hover:text-[#62a92b]",
                      "transition-all duration-200",
                    ].join(" ")}
                  >
                    <i className={`${icon} text-sm`} />
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 py-5 border-t border-gray-200 dark:border-white/5">
          <a
            href="/#contact"
            onClick={onClose}
            className={[
              "flex items-center justify-center gap-2 w-full py-3 rounded-lg",
              "bg-[#62a92b] dark:bg-[#62a92b]",
              "text-white dark:text-[#1e1e27]",
              "font-sans font-semibold text-sm",
              "hover:opacity-90 transition-opacity duration-200",
            ].join(" ")}
          >
            <i className="ri-send-plane-line" />
            Get in touch
          </a>

          <div className="flex items-center justify-center gap-3 mt-4">
            {[
              { href: "https://www.linkedin.com/in/huzaifa-dev/", icon: "ri-linkedin-fill", label: "LinkedIn" },
              { href: "https://github.com/huzaifa-mern-dev", icon: "ri-github-fill", label: "GitHub" },
              { href: "mailto:huzaifa.fullstack@gmail.com", icon: "ri-mail-fill", label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-gray-400 dark:text-[#636366] hover:text-[#62a92b] dark:hover:text-[#62a92b] transition-colors duration-200"
              >
                <i className={`${icon} text-lg`} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
