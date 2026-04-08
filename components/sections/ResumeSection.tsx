
import { education, type EducationEntry } from "@/lib/data/education";
import { experience, type ExperienceEntry } from "@/lib/data/experience";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

function ColumnHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-2/10 dark:bg-primary-2/10 border border-primary-2/20 dark:border-primary-2/20 flex-shrink-0">
        <i className={`${icon} text-primary-2 dark:text-primary-2 text-lg`} />
      </div>
      <h3 className="font-sans font-bold text-gray-900 dark:text-white text-2xl lg:text-3xl">{title}</h3>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  date,
  location,
  highlights,
  badge
}: {
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  highlights: string[];
  badge?: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary-2 border-4 border-gray-100 dark:border-[#1a1a22]" />

      <div className={[
        "p-6 rounded-2xl border text-left",
        "bg-white shadow-sm",
        "border-gray-200 dark:border-white/[0.08]",
        "dark:bg-[#1e1e27] dark:shadow-none",
        "transition-all duration-300",
        "hover:border-primary-2/40 dark:hover:border-primary-2/30",
      ].join(" ")}>
        
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h4 className="text-lg lg:text-xl font-bold font-sans text-gray-900 dark:text-white leading-snug">
              {title}
            </h4>
            <p className="text-base font-semibold font-sans text-primary-2 mt-1">
              {subtitle}
            </p>
          </div>
          {badge && (
            <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-[#8f8f92] border border-gray-200 dark:border-white/10">
              {badge}
            </span>
          )}
        </div>

        <p className="text-xs lg:text-sm font-sans text-gray-500 dark:text-gray-400 mt-2">
          {date} {location && `· ${location}`}
        </p>

        <ul className="text-sm lg:text-base font-sans text-gray-600 dark:text-gray-300 leading-relaxed mt-4 flex flex-col gap-2">
          {highlights.map((bullet, idx) => (
            <li key={idx} className="flex flex-row items-start gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-2/60 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative py-24 lg:py-32 overflow-hidden bg-gray-100 dark:bg-[#1a1a22]"
      aria-labelledby="resume-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] rounded-full bg-primary-2/[0.04] dark:bg-primary-2/[0.03] blur-3xl opacity-50" />
        <div className="absolute -right-20 bottom-1/4 w-[500px] h-[500px] rounded-full bg-primary-2/[0.02] dark:bg-primary-2/[0.02] blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-16 lg:mb-24">
            <SectionLabel />
            <h2
              id="resume-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-6 leading-tight"
            >
              My{" "}
              <span className="text-primary-2 dark:text-primary-2 relative inline-block whitespace-nowrap">
                Journey
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-[#a1a1aa] font-sans font-normal text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              A self-taught engineer with a hunger for building real things. Here&apos;s the path that got me here.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <AnimatedSection variant="fade-up" delay={0.1}>
            <ColumnHeading icon="ri-graduation-cap-line" title="Education" />
            
            <div className="border-l-2 border-gray-200 dark:border-gray-700 ml-4 flex flex-col gap-8 pb-4">
              {education.map((entry) => (
                <TimelineItem 
                  key={entry.id}
                  title={entry.degree}
                  subtitle={entry.institution}
                  date={entry.duration}
                  highlights={entry.highlights}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.2}>
            <ColumnHeading icon="ri-briefcase-4-line" title="Experience" />
            
            <div className="border-l-2 border-gray-200 dark:border-gray-700 ml-4 flex flex-col gap-8 pb-4">
              {experience.map((entry) => (
                <TimelineItem 
                  key={entry.id}
                  title={entry.role}
                  subtitle={entry.company}
                  date={entry.duration}
                  location={entry.location}
                  highlights={entry.highlights}
                  badge={entry.type}
                />
              ))}
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
