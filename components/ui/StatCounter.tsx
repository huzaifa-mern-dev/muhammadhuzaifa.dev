'use client';
/**
 * components/ui/StatCounter.tsx
 *
 * Drop-in replacement for the old jQuery Odometer / counter.js.
 * Uses `react-countup` with `enableScrollSpy` — the number stays
 * at zero (or `start`) until the element scrolls into the viewport,
 * then animates to `end`. Safe to render on the server: CountUp
 * checks for `window` internally before attaching the IntersectionObserver.
 *
 * Usage:
 *   <StatCounter end={25} suffix="+" label="Projects Shipped" />
 *   <StatCounter end={2}  suffix="+" label="Years Experience" decimals={0} />
 */

import CountUp from 'react-countup';

interface StatCounterProps {
  /** Target number (will animate up to this value) */
  end: number;
  /** Starting value. Default: 0 */
  start?: number;
  /** Text appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** Text prepended before the number, e.g. "$" */
  prefix?: string;
  /** Decimal places to show. Default: 0 */
  decimals?: number;
  /** Animation duration in seconds. Default: 2.2 */
  duration?: number;
  /** Label displayed below the number */
  label?: string;
  /** Extra Tailwind classes for the root wrapper */
  className?: string;
  /** Override the number Tailwind classes */
  numberClassName?: string;
  /** Override the label Tailwind classes */
  labelClassName?: string;
  /** Separator for thousands. Default: ',' */
  separator?: string;
}

export default function StatCounter({
  end,
  start = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2.2,
  label,
  className = '',
  numberClassName,
  labelClassName,
  separator = ',',
}: StatCounterProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <p
        className={
          numberClassName ??
          'text-4xl sm:text-5xl font-bold font-sans text-[#62a92b] dark:text-[#62a92b] tabular-nums leading-none'
        }
        aria-label={`${prefix}${end}${suffix} ${label ?? ''}`}
        aria-live="polite"
      >
        <CountUp
          start={start}
          end={end}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          duration={duration}
          separator={separator}
          // enableScrollSpy activates the animation when the element
          // enters the viewport — replaces jQuery counter / Odometer scroll logic
          enableScrollSpy
          // scrollSpyOnce ensures it only fires once per page load (same as AOS once: true)
          scrollSpyOnce
          // scrollSpyDelay allows a short pause before animating (ms)
          scrollSpyDelay={200}
        />
      </p>

      {label && (
        <p
          className={
            labelClassName ??
            'mt-2 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-[#636366]'
          }
        >
          {label}
        </p>
      )}
    </div>
  );
}

// ─── Preset Stats Grid ────────────────────────────────────────────────────────
/**
 * A pre-built 4-column responsive stats row using <StatCounter>.
 * Drop this directly into any section instead of manually building the grid.
 *
 * Usage:
 *   <StatsGrid />
 *   <StatsGrid stats={[ { end: 5, suffix: '+', label: 'Years' }, ... ]} />
 */
interface Stat {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

const DEFAULT_STATS: Stat[] = [
  { end: 2,  suffix: '+', label: 'Years Experience' },
  { end: 25, suffix: '+', label: 'Projects Shipped'  },
  { end: 20, suffix: '+', label: 'Technologies'      },
  { end: 10, suffix: '+', label: 'Happy Clients'     },
];

export function StatsGrid({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-5 rounded-2xl bg-white dark:bg-[#1e1e27] border border-gray-200/60 dark:border-white/[0.07] shadow-[0_1px_4px_rgba(0,0,0,0.05)] dark:shadow-none"
        >
          <StatCounter
            end={stat.end}
            suffix={stat.suffix}
            prefix={stat.prefix}
            decimals={stat.decimals ?? 0}
            label={stat.label}
          />
        </div>
      ))}
    </div>
  );
}
