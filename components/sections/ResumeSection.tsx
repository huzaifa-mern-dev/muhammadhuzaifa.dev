/**
 * components/sections/ResumeSection.tsx — Server Component, Theme-Aware
 *
 * Changes from Phase 3:
 *  - Section bg: bg-gray-100 dark:bg-[#1a1a22]
 *  - Timeline track: border-gray-200 dark:border-[#62a92b]/20
 *  - Dots: white bg with green border (light) ↔ dark bg with green border
 *  - Cards: bg-white border-gray-200 (light) ↔ bg-[#1e1e27] border-white/[0.06] (dark)
 *  - All text, badges, stat bar: fully paired
 */

import { education, type EducationEntry } from "@/lib/data/education";
import { experience, type ExperienceEntry } from "@/lib/data/experience";

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-2 dark:text-primary-2">
        Background
      </span>
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
    </div>
  );
}

const TYPE_STYLES: Record<string, { light: string; dark: string }> = {
  "Full-time":  { light: "bg-green-50 text-green-700 border-green-200",   dark: "dark:bg-[#62a92b]/10 dark:text-[#62a92b] dark:border-[#62a92b]/20" },
  "Internship": { light: "bg-blue-50 text-blue-700 border-blue-200",       dark: "dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20" },
  "Freelance":  { light: "bg-purple-50 text-purple-700 border-purple-200", dark: "dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20" },
  "Contract":   { light: "bg-orange-50 text-orange-700 border-orange-200", dark: "dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20" },
  "Part-time":  { light: "bg-yellow-50 text-yellow-700 border-yellow-200", dark: "dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20" },
};

function EducationItem({ entry, isLast }: { entry: EducationEntry; isLast: boolean }) {
  return (
    <li className="relative pl-8 group">
      {/* Timeline track */}
      {!isLast && (
        <div className="absolute left-[7px] top-8 bottom-0 w-px bg-gradient-to-b from-gray-300 dark:from-[#62a92b]/30 via-gray-200 dark:via-white/10 to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-primary-2 dark:border-primary-2 bg-white dark:bg-[#1a1a22] transition-all duration-300 group-hover:bg-primary-2 dark:group-hover:bg-primary-2 group-hover:shadow-[0_0_12px_rgba(98,169,43,0.4)] dark:group-hover:shadow-[0_0_12px_rgba(168,255,83,0.5)]" />
      </div>

      <div className={[
        "p-5 rounded-xl border text-left",
        "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.04)]",
        "border-gray-200 dark:border-white/[0.06]",
        "dark:bg-[#1e1e27] dark:shadow-none",
        "transition-all duration-300",
        "group-hover:border-primary-2/30 dark:group-hover:border-primary-2/20",
        "group-hover:shadow-[0_6px_20px_rgba(98,169,43,0.1)] dark:group-hover:bg-[#232330]",
      ].join(" ")}>
        <p className="text-[10px] font-mono text-gray-400 dark:text-[#636366] uppercase tracking-widest mb-2">
          📅 {entry.duration}
        </p>
        <h4 className="font-sans font-bold text-gray-900 dark:text-white text-lg md:text-xl leading-snug mb-1 group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors duration-200">
          {entry.degree}
        </h4>
        <p className="font-sans text-xs text-primary-2 dark:text-primary-2/80 mb-3">
          {entry.institution}
        </p>
        <p className="text-base font-sans font-normal text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          {entry.description}
        </p>
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/[0.04] text-gray-500 dark:text-[#8f8f92] border border-gray-200 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

function ExperienceItem({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) {
  const typeCls = TYPE_STYLES[entry.type];
  const badgeCls = typeCls
    ? `${typeCls.light} ${typeCls.dark}`
    : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-[#8f8f92] border-gray-200 dark:border-white/10";

  return (
    <li className="relative pl-8 group">
      {!isLast && (
        <div className="absolute left-[7px] top-8 bottom-0 w-px bg-gradient-to-b from-gray-300 dark:from-primary-2/30 via-gray-200 dark:via-white/10 to-transparent" />
      )}

      {/* Dot */}
      <div className="absolute left-0 top-1.5">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-primary-2 dark:border-primary-2 bg-white dark:bg-[#1a1a22] transition-all duration-300 group-hover:bg-primary-2 dark:group-hover:bg-primary-2 group-hover:shadow-[0_0_12px_rgba(98,169,43,0.4)] dark:group-hover:shadow-[0_0_12px_rgba(168,255,83,0.5)]" />
      </div>

      <div className={[
        "p-5 rounded-xl border text-left",
        "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.04)]",
        "border-gray-200 dark:border-white/[0.06]",
        "dark:bg-[#1e1e27] dark:shadow-none",
        "transition-all duration-300",
        "group-hover:border-primary-2/30 dark:group-hover:border-primary-2/20",
        "group-hover:shadow-[0_6px_20px_rgba(98,169,43,0.1)] dark:group-hover:bg-[#232330]",
      ].join(" ")}>
        <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
          <p className="text-[10px] font-mono text-gray-400 dark:text-[#636366] uppercase tracking-widest">
            📅 {entry.duration}
          </p>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeCls}`}>
            {entry.type}
          </span>
        </div>

        <h4 className="font-sans font-bold text-gray-900 dark:text-white text-lg md:text-xl leading-snug mb-0.5 group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors duration-200">
          {entry.role}
        </h4>

        <div className="flex items-center gap-1.5 mb-3">
          <p className="font-sans text-xs text-primary-2 dark:text-primary-2/80">{entry.company}</p>
          <span className="text-gray-300 dark:text-[#3b3b41]">·</span>
          <p className="font-sans text-xs text-gray-400 dark:text-[#636366]">{entry.location}</p>
        </div>

        <p className="text-base font-sans font-normal text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          {entry.description}
        </p>

        {entry.highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {entry.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-sans text-gray-500 dark:text-[#8f8f92]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#62a92b]/60 dark:bg-[#62a92b]/60 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function ColumnHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary-2/10 dark:bg-primary-2/10 border border-primary-2/20 dark:border-primary-2/20 flex-shrink-0">
        <i className={`${icon} text-primary-2 dark:text-primary-2 text-sm`} />
      </div>
      <h3 className="font-sans font-bold text-gray-900 dark:text-white text-xl md:text-2xl">{title}</h3>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative py-24 overflow-hidden bg-gray-100 dark:bg-[#1a1a22]"
      aria-labelledby="resume-heading"
    >
      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-[#62a92b]/[0.04] dark:bg-[#62a92b]/[0.03] blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 w-72 h-72 rounded-full bg-purple-500/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionLabel />
          <h2
            id="resume-heading"
            className="text-3xl md:text-4xl font-bold font-sans text-gray-900 dark:text-white mb-4"
          >
            My{" "}
            <span className="text-primary-2 dark:text-primary-2">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-sans font-normal text-base max-w-xl mx-auto leading-relaxed">
            A self-taught engineer with a hunger for building real things.
            Here&apos;s the path that got me here.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <ColumnHeading icon="ri-graduation-cap-line" title="Education" />
            <ul className="flex flex-col gap-6">
              {education.map((entry, i) => (
                <EducationItem key={entry.id} entry={entry} isLast={i === education.length - 1} />
              ))}
            </ul>
          </div>
          <div>
            <ColumnHeading icon="ri-briefcase-4-line" title="Experience" />
            <ul className="flex flex-col gap-6">
              {experience.map((entry, i) => (
                <ExperienceItem key={entry.id} entry={entry} isLast={i === experience.length - 1} />
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-200 dark:border-white/5">
          {[
            { value: "2+",  label: "Years of Experience", icon: "ri-calendar-line" },
            { value: "30+", label: "Projects Delivered",  icon: "ri-rocket-line" },
            { value: "15+", label: "Happy Clients",       icon: "ri-heart-line" },
            { value: "4",   label: "Certifications",      icon: "ri-award-line" },
          ].map(({ value, label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-[#1e1e27] border border-gray-200 dark:border-white/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-none"
            >
              <i className={`${icon} text-primary-2 dark:text-primary-2 text-xl mb-2`} />
              <span className="text-2xl lg:text-3xl font-bold font-sans text-gray-900 dark:text-white">{value}</span>
              <span className="text-[11px] font-sans text-gray-400 dark:text-[#636366] mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
