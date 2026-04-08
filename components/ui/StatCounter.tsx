'use client';

import CountUp from 'react-countup';

interface StatCounterProps {
  end: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label?: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
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
          enableScrollSpy
          scrollSpyOnce
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
