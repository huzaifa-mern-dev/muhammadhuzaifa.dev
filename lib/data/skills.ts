/**
 * lib/data/skills.ts
 * All skill data used by SkillsSection.tsx marquee rows.
 * Row 1 scrolls left, Row 2 scrolls right.
 */

export interface Skill {
  name: string;
  /** Remix Icon class name — e.g. "ri-reactjs-line" */
  icon: string;
  /** Tailwind hex or token colour for the icon */
  color: string;
}

export const skillsRowOne: Skill[] = [
  { name: 'React.js',     icon: 'ri-reactjs-line',       color: '#61DAFB' },
  { name: 'Next.js',      icon: 'ri-nextjs-line',         color: '#ffffff' },
  { name: 'TypeScript',   icon: 'ri-code-s-slash-line',   color: '#3178C6' },
  { name: 'Node.js',      icon: 'ri-nodejs-line',         color: '#68A063' },
  { name: 'MongoDB',      icon: 'ri-database-2-line',     color: '#47A248' },
  { name: 'Tailwind CSS', icon: 'ri-palette-line',        color: '#38BDF8' },
  { name: 'Express.js',   icon: 'ri-server-line',         color: '#8a8a8a' },
  { name: 'GraphQL',      icon: 'ri-braces-line',         color: '#E10098' },
  { name: 'Redux',        icon: 'ri-stack-line',          color: '#764ABC' },
  { name: 'Docker',       icon: 'ri-box-3-line',          color: '#2496ED' },
];

export const skillsRowTwo: Skill[] = [
  { name: 'WordPress',    icon: 'ri-wordpress-line',      color: '#21759B' },
  { name: 'GSAP',         icon: 'ri-movie-line',          color: '#88CE02' },
  { name: 'Figma',        icon: 'ri-pen-nib-line',        color: '#F24E1E' },
  { name: 'PostgreSQL',   icon: 'ri-database-line',       color: '#336791' },
  { name: 'Git & GitHub', icon: 'ri-git-branch-line',     color: '#F05032' },
  { name: 'REST APIs',    icon: 'ri-api-line',            color: '#62a92b' },
  { name: 'Zustand',      icon: 'ri-archive-stack-line',  color: '#e5c46b' },
  { name: 'Framer',       icon: 'ri-magic-line',          color: '#0055FF' },
  { name: 'Vercel',       icon: 'ri-global-line',         color: '#ffffff' },
  { name: 'Sass / SCSS',  icon: 'ri-css3-line',           color: '#CC6699' },
];
