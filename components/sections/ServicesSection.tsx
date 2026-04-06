"use client";

/**
 * components/sections/ServicesSection.tsx
 *
 * Modern Bento Grid variant with dynamic CSS Grid spanning.
 * Completely strictly adhered to locked typography and primary-2 neon green tokens.
 * Client component to support Framer Motion interactions via whileHover.
 */

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    id: "custom-dev",
    title: "Custom Web & App Development",
    description: "Building scalable, high-performance web applications and SaaS platforms from the ground up using the MERN stack and Next.js.",
    icon: "ri-layout-masonry-fill",
    highlights: ["MERN Stack", "Next.js", "React", "SaaS"]
  },
  {
    id: "ecommerce",
    title: "Shopify & Headless E-commerce",
    description: "Developing high-converting storefronts, custom native apps, and headless Shopify architectures for scaling brands.",
    icon: "ri-shopping-cart-2-fill",
    highlights: ["Shopify", "Headless", "Liquid", "Custom Apps"]
  },
  {
    id: "wordpress",
    title: "WordPress & CMS Solutions",
    description: "Crafting custom themes, complex plugins, and seamless headless CMS integrations for robust content management.",
    icon: "ri-wordpress-fill",
    highlights: ["WordPress", "CMS", "Plugins", "Headless CMS"]
  },
  {
    id: "api-backend",
    title: "API & Backend Engineering",
    description: "Designing secure RESTful and GraphQL APIs to connect fragmented systems, automate workflows, and power complex frontends.",
    icon: "ri-server-fill",
    highlights: ["RESTful APIs", "GraphQL", "Node.js", "Microservices"]
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Auditing and re-architecting sluggish websites to achieve sub-second load times, eliminating API waterfalls, and improving core web vitals.",
    icon: "ri-speed-up-fill",
    highlights: ["Core Web Vitals", "Optimization", "Auditing"]
  },
  {
    id: "database",
    title: "Database Architecture",
    description: "Designing, migrating, and managing robust NoSQL (MongoDB) and SQL databases optimized for speed and scale.",
    icon: "ri-database-2-fill",
    highlights: ["MongoDB", "NoSQL", "SQL", "Architecture"]
  }
];

// Helper to determine Grid Spans for the Bento Box layout
function getBentoClass(index: number) {
  switch (index) {
    case 0:
      return "md:col-span-2 lg:col-span-2"; // Top row: big left
    case 1:
      return "md:col-span-1 lg:col-span-1"; // Top row: small right
    case 2:
      return "md:col-span-1 lg:col-span-1"; // Mid row: small left
    case 3:
      return "md:col-span-2 lg:col-span-2"; // Mid row: big right
    case 4:
      return "md:col-span-2 lg:col-span-2"; // Bottom row: big left
    case 5:
      return "md:col-span-1 lg:col-span-1"; // Bottom row: small right
    default:
      return "col-span-1";
  }
}

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-2 dark:text-primary-2">
        What I offer
      </span>
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Radial soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary-2/[0.03] dark:bg-primary-2/[0.04] blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        {/* Enforced Centered Heading with under-stroke SVG match */}
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-14 lg:mb-20">
            <SectionLabel />
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Services I{" "}
              <span className="text-primary-2 dark:text-primary-2 relative inline-block">
                Offer
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 font-normal dark:text-[#a1a1aa] font-sans text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              From pixel-perfect UIs to robust back-end systems — I build full-cycle digital products that perform at scale.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              variant="fade-up" 
              delay={index * 0.1}
              className={`h-full ${getBentoClass(index)}`}
            >
              <motion.article
                whileHover={{ y: -5 }}
                className={[
                  "group h-full flex flex-col items-start gap-5 p-6 lg:p-8 rounded-2xl relative overflow-hidden",
                  // Strict dark component token
                  "bg-white dark:bg-[#272730]",
                  "border border-gray-200 dark:border-white/5",
                  "shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none",
                  "transition-colors duration-300 ease-out",
                  "hover:border-primary-2 dark:hover:border-primary-2"
                ].join(" ")}
              >
                {/* Subtle Hover Glow Layer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-primary-2/5 dark:bg-primary-2/[0.04]" />
                
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-2/10 dark:bg-primary-2/10 border border-primary-2/20 text-primary-2 flex-shrink-0 transition-colors group-hover:bg-primary-2/20">
                  <i className={`${service.icon} text-2xl`} />
                </div>

                <h3 className="font-sans font-bold text-gray-900 dark:text-white text-xl md:text-2xl mt-2 mb-1 group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 dark:text-[#a1a1aa] text-base leading-relaxed flex-1 font-sans pr-2 lg:pr-6">
                  {service.description}
                </p>

                {/* Tech Tags / Pills Container */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 w-full relative z-10 border-t border-gray-100 dark:border-white/5">
                  {service.highlights.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/[0.02] group-hover:border-primary-2/30 group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection variant="fade-up" delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-sm font-sans text-gray-400 dark:text-[#a1a1aa] mb-4">
              Need something custom? Let&apos;s talk.
            </p>
            <a
              href="#contact"
              className={[
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "border border-primary-2/40 dark:border-primary-2/30",
                "text-primary-2 dark:text-primary-2",
                "font-sans font-bold text-sm lg:text-base",
                "hover:bg-primary-2 hover:text-white",
                "dark:hover:bg-primary-2 dark:hover:text-[#1e1e27] dark:hover:border-primary-2",
                "hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-none",
                "hover:shadow-primary-2/20",
                "transition-all duration-200",
              ].join(" ")}
            >
              <i className="ri-send-plane-line" />
              Start a project
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
