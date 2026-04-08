"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/#about",     label: "About" },
  { href: "/#services",  label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#resume",    label: "Resume" },
  { href: "/#contact",   label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/huzaifa-dev/", icon: "ri-linkedin-fill", label: "LinkedIn" },
  { href: "https://github.com/huzaifa-mern-dev",      icon: "ri-github-fill",   label: "GitHub" },
  { href: "mailto:huzaifa.fullstack@gmail.com",       icon: "ri-mail-line",     label: "Email" },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#1a1a24] pt-32 pb-24 md:pb-10 px-6 md:px-12 overflow-hidden">
      
      <div className="w-full text-center relative z-0">
        <h2 className="text-[16vw] md:text-[8vw] font-black font-sans tracking-tighter leading-[0.85] md:leading-none opacity-5 dark:opacity-10 text-gray-900 dark:text-white select-none">
          LET'S BUILD<br className="md:hidden" /> ALONG.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-12 mt-16 md:-mt-8 relative z-10 max-w-7xl mx-auto">
        
        <div className="md:col-span-5 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group w-fit" aria-label="Huzaifa.dev home">
            <Image
              src="/imgs/home-page-2/template/favicon.svg"
              alt="Huzaifa.dev logo"
              width={36}
              height={36}
              className="transition-transform duration-500 group-hover:rotate-[360deg] shadow-sm drop-shadow-md"
            />
            <span className="font-sans font-bold text-2xl text-gray-900 dark:text-white">
              Huzaifa<span className="text-primary-2">.dev</span>
            </span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Engineering sub-second architectures and custom digital experiences for high-ticket brands.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col">
          <h3 className="text-gray-900 dark:text-white font-sans font-bold uppercase tracking-widest text-xs mb-6 opacity-60">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="group inline-flex items-center text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base cursor-pointer">
                  <span className="relative flex items-center pr-6">
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group-hover:text-primary-2 transition-colors duration-200 block"
                    >
                      {label}
                    </motion.span>
                    <i className="ri-arrow-right-line text-primary-2 absolute right-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col md:items-end md:text-right">
          <h3 className="text-gray-900 dark:text-white font-sans font-bold uppercase tracking-widest text-xs mb-6 opacity-60">
            Connect With Me
          </h3>
          
          <div className="flex items-center gap-4 mb-8">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-2 hover:border-primary-2/30 hover:shadow-[0_0_15px_rgba(98,169,43,0.25)] transition-all duration-300"
                aria-label={label}
              >
                <i className={`${icon} text-lg`} />
              </motion.a>
            ))}
          </div>

          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-2 text-white font-sans font-bold text-sm tracking-wide shadow-lg shadow-primary-2/20 hover:bg-[#528d24] hover:shadow-[0_4px_16px_rgba(98,169,43,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto text-center"
          >
            Book a Call
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10 mt-20 pt-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs md:text-sm font-sans text-gray-500 font-medium">
          © {new Date().getFullYear()} Muhammad Huzaifa. Local time in Pakistan: Pakistan Standard Time (PKT).
        </p>
        <p className="text-xs md:text-sm font-sans text-gray-500 font-medium">
          Crafted with Next.js &amp; Tailwind CSS.
        </p>
      </div>
      
    </footer>
  );
}
