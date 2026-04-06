"use client";

/**
 * components/sections/TestimonialsSection.tsx
 *
 * A premium "Wall of Love" masonry layout displaying high-ticket architecture reviews.
 * Adheres strictly to the primary-2 lock and dark surface tokens.
 */

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Alex Sterling",
    role: "Founder, Peak Performance",
    platform: "Upwork",
    rating: 5,
    text: "Huzaifa didn't just build a website; he completely re-architected our Shopify backend. Our load times dropped by 3 seconds, and conversions went up by 40%. The best investment we made this year."
  },
  {
    name: "Sarah Lin",
    role: "CTO, SaaSFlow",
    platform: "Upwork",
    rating: 5,
    text: "An exceptional MERN stack developer. We hired him on Upwork to migrate our legacy web app to Next.js. His code is spotless, and his communication is top-tier."
  },
  {
    name: "Marcus Thorne",
    role: "E-Commerce Director, Haven",
    platform: "Fiverr",
    rating: 5,
    text: "He engineered a robust GraphQL API that seamlessly synced our inventory across three warehouses. Flawless execution and delivered ahead of schedule."
  },
  {
    name: "Elena Rodriguez",
    role: "Co-Founder, Artify",
    platform: "Direct",
    rating: 5,
    text: "We needed a highly custom Framer Motion interface that didn't compromise performance. Huzaifa delivered an Awwwards-worthy experience that our users absolutely love. Truly a master of his craft."
  },
  {
    name: "James Cavendish",
    role: "Tech Lead, OmniRetail",
    platform: "Direct",
    rating: 5,
    text: "Finding a developer who understands both complex backend architecture and pixel-perfect UI design is rare. Muhammad handled our entire full-stack migration flawlessly."
  },
  {
    name: "David Chen",
    role: "Director of Operations, Lumen",
    platform: "Upwork",
    rating: 5,
    text: "His ability to dive into a messy Next.js codebase, clean up the technical debt, and implement strict TypeScript standards was transformative for our engineering team."
  }
];

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-2 dark:text-primary-2">
        Wall of Love
      </span>
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="ri-star-fill text-primary-2 text-lg" />
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  if (platform === "Upwork") {
    return (
      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#14a800]/10 border border-[#14a800]/20 text-[#14a800] text-[10px] font-bold uppercase tracking-wider">
        <i className="ri-briefcase-line" /> {platform}
      </span>
    );
  }
  if (platform === "Fiverr") {
    return (
      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#00b22d]/10 border border-[#00b22d]/20 text-[#00b22d] text-[10px] font-bold uppercase tracking-wider">
        <i className="ri-briefcase-line" /> {platform}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-500/10 border border-gray-500/20 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">
      <i className="ri-user-star-line" /> Direct
    </span>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden bg-transparent"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Soft Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary-2/[0.03] dark:bg-primary-2/[0.04] blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Block */}
        <AnimatedSection variant="fade-up" className="mb-16 lg:mb-24">
          <div className="text-center">
            <SectionLabel />
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Client Success{" "}
              <span className="text-primary-2 dark:text-primary-2 relative inline-block">
                Stories
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 font-normal dark:text-[#a1a1aa] font-sans text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Trusted by founders and scaling brands across the globe to deliver robust digital infrastructure.
            </p>
          </div>
        </AnimatedSection>

        {/* CSS Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className={[
                "break-inside-avoid relative p-8 lg:p-10 rounded-[2rem] overflow-hidden group",
                "bg-white dark:bg-[#272730]",
                "border border-gray-200 dark:border-white/5",
                "hover:border-primary-2/30 dark:hover:border-primary-2/30",
                "shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none",
                "transition-all duration-300"
              ].join(" ")}
            >
              {/* Decorative Giant Quote Background */}
              <i className="ri-double-quotes-r absolute -right-4 -bottom-6 text-[140px] text-gray-900/[0.02] dark:text-white/[0.02] group-hover:text-primary-2/[0.05] dark:group-hover:text-primary-2/[0.04] transition-colors duration-500 pointer-events-none transform rotate-6" />
              
              <StarRating />
              
              <p className="text-gray-600 dark:text-gray-300 font-sans text-base lg:text-[1.1rem] leading-relaxed mb-10 relative z-10 italic">
                &quot;{t.text}&quot;
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-gray-100 dark:border-white/5 pt-6 relative z-10">
                <div className="pr-4">
                  <h4 className="text-gray-900 dark:text-white font-bold font-sans text-base mb-1 tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 dark:text-[#a1a1aa] font-sans text-xs">
                    {t.role}
                  </p>
                </div>
                <div className="shrink-0">
                  <PlatformBadge platform={t.platform} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
