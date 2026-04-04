/**
 * components/layout/Footer.tsx — Server Component, Theme-Aware
 */

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/#about",     label: "About me" },
  { href: "/#services",  label: "Services" },
  { href: "/#resume",    label: "Resume" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#skills",    label: "Skills" },
  { href: "/#contact",   label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/huzaifa-dev/", icon: "ri-linkedin-fill", label: "LinkedIn" },
  { href: "https://github.com/huzaifa-mern-dev",      icon: "ri-github-fill",   label: "GitHub" },
  { href: "mailto:huzaifa.fullstack@gmail.com",        icon: "ri-mail-fill",     label: "Email" },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-[#1e1e27] border-t border-gray-200 dark:border-white/5">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#62a92b]/30 dark:via-[#62a92b]/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Huzaifa.dev — back to home">
            <Image
              src="/imgs/home-page-2/template/favicon.svg"
              alt="Huzaifa.dev logo"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-sans font-semibold text-lg text-gray-900 dark:text-white">
              Huzaifa<span className="text-[#62a92b] dark:text-[#62a92b]">.dev</span>
            </span>
          </Link>

          {/* Social */}
          <div className="flex items-center gap-4">
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
                  "text-gray-400 dark:text-[#8f8f92]",
                  "hover:border-[#62a92b]/40 hover:text-[#62a92b]",
                  "dark:hover:border-[#62a92b]/50 dark:hover:text-[#62a92b] dark:hover:bg-[#62a92b]/5",
                  "hover:-translate-y-0.5 transition-all duration-300",
                ].join(" ")}
              >
                <i className={`${icon} text-base`} />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-sans text-gray-400 dark:text-[#8f8f92] hover:text-[#62a92b] dark:hover:text-[#62a92b] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full h-px bg-gray-200 dark:bg-white/5" />

          {/* Copyright */}
          <p className="text-xs font-sans text-gray-400 dark:text-[#636366] text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-500 dark:text-[#8f8f92]">Muhammad Huzaifa</span>.
            Designed &amp; built with{" "}
            <span className="text-[#62a92b] dark:text-[#62a92b]">♥</span> using Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
