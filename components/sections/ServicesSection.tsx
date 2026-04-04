/**
 * components/sections/ServicesSection.tsx — Server Component, Theme-Aware
 *
 * Phase 6 Polish:
 *  - Heading: responsive type scale (text-3xl → lg:text-5xl)
 *  - Body text: lg:text-lg on description
 *  - Card title: bumped to text-base lg:text-[1.05rem]
 *  - Card description: text-sm → lg:text-base
 *  - Card depth: stronger border + shadow in light mode
 *  - Accent: #62a92b (light) confirmed → green-700 keeps 4.5:1 contrast ✓
 *  - CTA button: hover lift + shadow
 */

import { services } from "@/lib/data/services";

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

function ServiceCard({
  title,
  description,
  iconPath,
  iconViewBox = "0 0 24 24",
  highlights,
  index,
}: {
  title: string;
  description: string;
  iconPath: string;
  iconViewBox?: string;
  highlights: string[];
  index: number;
}) {
  function highlightText(text: string, keywords: string[]): React.ReactNode {
    if (!keywords.length) return text;
    const pattern = new RegExp(
      `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
      "gi"
    );
    const parts = text.split(pattern);
    return parts.map((part, i) => {
      const isKw = keywords.some((kw) => kw.toLowerCase() === part.toLowerCase());
      return isKw ? (
        <span key={i} className="text-primary-2 dark:text-primary-2 font-medium">
          {part}
        </span>
      ) : part;
    });
  }

  return (
    <article
      className={[
        "group relative flex flex-col items-start text-left gap-5 p-6 lg:p-7 rounded-2xl",
        // Light: crisp white card with visible border + shadow depth
        "bg-white",
        "shadow-[0_2px_8px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.04)]",
        "border border-gray-200",
        // Dark: subtler — let background separation do the work
        "dark:bg-[#1e1e27] dark:shadow-none dark:border-white/[0.06]",
        "transition-all duration-300 ease-out",
        // Hover
        "hover:border-primary-2/40 dark:hover:border-primary-2/30",
        "hover:shadow-[0_12px_36px_rgba(98,169,43,0.13)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "hover:-translate-y-1.5",
      ].join(" ")}
    >
      {/* Card number */}
      <div className="absolute top-5 right-5 text-[11px] font-mono text-gray-300 dark:text-[#3b3b41] select-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className={[
          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
          "bg-primary-2/10 dark:bg-primary-2/10",
          "border border-primary-2/20 dark:border-primary-2/15",
          "transition-all duration-300",
          "group-hover:bg-primary-2/15 group-hover:border-primary-2/30",
          "dark:group-hover:bg-primary-2/12 dark:group-hover:border-primary-2/30",
        ].join(" ")}
      >
        <svg
          viewBox={iconViewBox}
          width="22"
          height="22"
          fill="currentColor"
          className="text-primary-2 dark:text-primary-2 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      </div>

      {/* Title */}
      <h3 className="font-sans font-bold text-gray-900 dark:text-white text-lg md:text-xl leading-snug pr-6 group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base font-sans font-normal text-gray-500 dark:text-[#636366] leading-relaxed flex-1">
        {highlightText(description, highlights)}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-gray-100 dark:border-white/5">
        {highlights.slice(0, 4).map((kw) => (
          <span
            key={kw}
            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-[#636366] border border-gray-200 dark:border-white/5"
          >
            {kw}
          </span>
        ))}
        {highlights.length > 4 && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-[#636366] border border-gray-200 dark:border-white/5">
            +{highlights.length - 4}
          </span>
        )}
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-2/0 to-transparent dark:via-primary-2/0 transition-all duration-300 group-hover:via-primary-2/40 dark:group-hover:via-primary-2/40" />
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary-2/[0.04] dark:bg-primary-2/[0.04] blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">
          <SectionLabel />
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold font-sans text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Services I{" "}
            <span className="text-primary-2 dark:text-primary-2">Offer</span>
          </h2>
          <p className="text-gray-500 font-normal dark:text-[#636366] font-sans text-base max-w-xl mx-auto leading-relaxed">
            From pixel-perfect UIs to robust back-end systems — I build
            full-cycle digital products that perform at scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconPath={service.iconPath}
              iconViewBox={service.iconViewBox}
              highlights={service.highlights}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-sm font-sans text-gray-400 dark:text-[#636366] mb-4">
            Need something custom? Let&apos;s talk.
          </p>
          <a
            href="#contact"
            className={[
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
              "border border-primary-2/40 dark:border-primary-2/30",
              "text-primary-2 dark:text-primary-2",
              "font-sans font-medium text-sm lg:text-base",
              "hover:bg-[#4e8a1e] hover:text-white hover:border-[#4e8a1e]",
              "dark:hover:bg-primary-2 dark:hover:text-[#1e1e27] dark:hover:border-primary-2",
              "hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(98,169,43,0.3)] dark:hover:shadow-none",
              "transition-all duration-200",
            ].join(" ")}
          >
            <i className="ri-send-plane-line" />
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
