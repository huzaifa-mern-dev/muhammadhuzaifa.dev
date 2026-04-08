
import { skillsRowOne, skillsRowTwo, type Skill } from '@/lib/data/skills';

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-[#62a92b]/40 dark:bg-[#62a92b]/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#62a92b] dark:text-[#62a92b]">
        Tech Stack
      </span>
      <div className="h-px w-8 bg-[#62a92b]/40 dark:bg-[#62a92b]/40" />
    </div>
  );
}

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className={[
        'flex-shrink-0 flex items-center gap-3 mx-3',
        'px-5 py-3 rounded-xl',
        'bg-white dark:bg-[#1e1e27]',
        'border border-gray-200/80 dark:border-white/[0.07]',
        'shadow-[0_1px_4px_rgba(0,0,0,0.05)] dark:shadow-none',
        'transition-colors duration-300',
        'hover:border-[#62a92b]/30 dark:hover:border-[#62a92b]/30',
        'hover:shadow-[0_4px_16px_rgba(98,169,43,0.1)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
      ].join(' ')}
    >
      <i
        className={`${skill.icon} text-xl`}
        style={{ color: skill.color }}
        aria-hidden="true"
      />
      <span className="text-sm font-sans font-medium text-gray-700 dark:text-[#c5c5ca] whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
  label,
}: {
  skills: Skill[];
  direction: 'left' | 'right';
  label: string;
}) {
  const doubled = [...skills, ...skills];
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div
      className="relative overflow-hidden w-full"
      role="list"
      aria-label={label}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-gray-50 dark:from-[#272730] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-gray-50 dark:from-[#272730] to-transparent"
      />

      <div
        className={`flex w-max ${animClass} [animation-play-state:running] hover:[animation-play-state:paused]`}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((skill, i) => (
          <div key={`${skill.name}-${i}`} role="listitem">
            <SkillBadge skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-10 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#62a92b]/[0.03] dark:bg-[#62a92b]/[0.04] blur-3xl"
      />

      <div className="relative z-10">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <SectionLabel />
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Skills &{' '}
            <span className="text-[#62a92b] dark:text-[#62a92b]">Technologies</span>
          </h2>
          <p className="text-gray-500 dark:text-[#636366] font-sans text-base max-w-xl mx-auto leading-relaxed">
            The tools and technologies I reach for to build fast, accessible, and
            maintainable products. Hover to pause.
          </p>
        </div> */}

        <div className="flex flex-col gap-5 py-4">
          <MarqueeRow
            skills={skillsRowOne}
            direction="left"
            label="Front-end and back-end skills scrolling left"
          />
          <MarqueeRow
            skills={skillsRowTwo}
            direction="right"
            label="Tools and frameworks scrolling right"
          />
        </div>

        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '2+',  label: 'Years Experience' },
              { value: '25+', label: 'Projects Shipped' },
              { value: '20+', label: 'Technologies' },
              { value: '10+', label: 'Happy Clients' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-5 rounded-2xl bg-white dark:bg-[#1e1e27] border border-gray-200/60 dark:border-white/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.05)] dark:shadow-none"
              >
                <p className="text-3xl font-bold font-sans text-[#62a92b] dark:text-[#62a92b] mb-1">
                  {value}
                </p>
                <p className="text-xs font-mono text-gray-400 dark:text-[#636366] uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
