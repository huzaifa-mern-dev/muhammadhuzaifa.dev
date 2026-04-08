"use client";

import { useEffect } from "react";
import Link from "next/link";

interface OffcanvasInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_DETAILS = [
  { icon: "ri-phone-fill",  label: "Phone",    value: "+92 316 1334869",              href: "tel:+923161334869" },
  { icon: "ri-mail-fill",   label: "Email",    value: "huzaifa.fullstack@gmail.com",  href: "mailto:huzaifa.fullstack@gmail.com" },
  { icon: "ri-map-2-fill",  label: "Location", value: "Karachi, Pakistan",            href: "https://www.google.com/maps/place/Karachi" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/huzaifa-dev/", icon: "ri-linkedin-fill", label: "LinkedIn" },
  { href: "https://github.com/huzaifa-mern-dev",      icon: "ri-github-fill",   label: "GitHub" },
  { href: "mailto:huzaifa.fullstack@gmail.com",        icon: "ri-mail-fill",     label: "Email" },
] as const;

const STATS = [
  { value: "2+",  label: "Years Exp." },
  { value: "30+", label: "Projects" },
  { value: "15+", label: "Clients" },
] as const;

export default function OffcanvasInfo({ isOpen, onClose }: OffcanvasInfoProps) {
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
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
        aria-label="Contact and info drawer"
        className={[
          "fixed top-0 right-0 h-full w-[340px] z-[999]",
          "bg-white dark:bg-[#1e1e27]",
          "border-l border-gray-200 dark:border-white/5",
          "flex flex-col overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-white/5 flex-shrink-0">
          <div>
            <p className="text-[10px] font-mono uppercase text-gray-400 dark:text-[#636366] tracking-widest mb-0.5">
              Get in touch
            </p>
            <h2 className="text-gray-900 dark:text-white font-sans font-semibold text-base leading-tight">
              Let&apos;s{" "}
              <span className="text-[#62a92b] dark:text-[#62a92b]">Connect</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close info drawer"
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

        <div className="flex-1 px-6 py-6 flex flex-col gap-7">

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#62a92b] dark:bg-[#62a92b] animate-pulse flex-shrink-0" />
            <span className="text-xs font-sans text-gray-500 dark:text-[#8f8f92]">
              Available for freelance &amp; full-time roles
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center py-3 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5"
              >
                <span className="text-[#62a92b] dark:text-[#62a92b] font-sans font-bold text-lg leading-tight">
                  {value}
                </span>
                <span className="text-[10px] font-sans text-gray-400 dark:text-[#636366] mt-0.5 text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-mono uppercase text-gray-400 dark:text-[#636366] tracking-widest">
              Contact Info
            </p>
            {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 group"
              >
                <div
                  className={[
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    "border border-gray-200 dark:border-white/10",
                    "text-[#62a92b] dark:text-[#62a92b]",
                    "bg-[#62a92b]/5 dark:bg-[#62a92b]/5",
                    "group-hover:bg-[#62a92b]/10 group-hover:border-[#62a92b]/30",
                    "dark:group-hover:bg-[#62a92b]/10 dark:group-hover:border-[#62a92b]/30",
                    "transition-all duration-200",
                  ].join(" ")}
                >
                  <i className={`${icon} text-sm`} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-gray-400 dark:text-[#636366] uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm font-sans text-gray-600 dark:text-[#b2b2ba] truncate group-hover:text-[#62a92b] dark:group-hover:text-[#62a92b] transition-colors duration-200">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-mono uppercase text-gray-400 dark:text-[#636366] tracking-widest">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "WordPress", "Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-[#8f8f92] border border-gray-200 dark:border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-mono uppercase text-gray-400 dark:text-[#636366] tracking-widest">
              Find me on
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={[
                    "w-9 h-9 rounded-lg flex items-center justify-center",
                    "border border-gray-200 dark:border-white/10",
                    "text-gray-500 dark:text-[#8f8f92]",
                    "hover:border-[#62a92b]/40 hover:text-[#62a92b] hover:bg-[#62a92b]/5",
                    "dark:hover:border-[#62a92b]/40 dark:hover:text-[#62a92b] dark:hover:bg-[#62a92b]/5",
                    "transition-all duration-200",
                  ].join(" ")}
                >
                  <i className={`${icon} text-base`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-5 border-t border-gray-200 dark:border-white/5 flex-shrink-0">
          <Link
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
            Send a message
          </Link>

          <a
            href="/Huzaifa.pdf"
            download
            className={[
              "flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-lg",
              "border border-gray-200 dark:border-white/10",
              "text-gray-500 dark:text-[#8f8f92]",
              "font-sans text-sm",
              "hover:border-[#62a92b]/40 hover:text-[#62a92b]",
              "dark:hover:border-[#62a92b]/40 dark:hover:text-[#62a92b]",
              "transition-all duration-200",
            ].join(" ")}
          >
            <i className="ri-download-line" />
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
}
