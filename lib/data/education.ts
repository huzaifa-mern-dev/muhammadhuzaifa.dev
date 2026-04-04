/**
 * lib/data/education.ts
 * Education & certification timeline data.
 * Used by ResumeSection.tsx (Server Component — no client JS needed).
 */

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  tags?: string[];
}

export const education: EducationEntry[] = [
  {
    id: "virtual-uni",
    degree: "BS — Business & Information Technology",
    institution: "Virtual University of Pakistan",
    duration: "2025 — 2029",
    description:
      "Undergraduate programme combining computer science fundamentals with business management, covering data structures, software engineering, and digital entrepreneurship.",
    tags: ["Computer Science", "Business IT", "Software Engineering"],
  },
  {
    id: "full-stack-open",
    degree: "Full Stack Open — Backend Development",
    institution: "University of Helsinki",
    duration: "Sep 2024",
    description:
      "Intensive course covering Node.js, Express, MongoDB, GraphQL, TypeScript, and CI/CD pipelines. Internationally recognised by the Finnish education system.",
    tags: ["Node.js", "GraphQL", "TypeScript", "MongoDB"],
  },
  {
    id: "mozilla-js",
    degree: "JavaScript Foundations Professional Certificate",
    institution: "Mozilla",
    duration: "May 2024",
    description:
      "Covered core JavaScript concepts — closures, prototypes, async/await, the event loop, and Web APIs — building a strong foundation for modern front-end engineering.",
    tags: ["JavaScript", "Web APIs", "Async Programming"],
  },
  {
    id: "meta-frontend",
    degree: "Meta Front-End Developer Specialisation",
    institution: "Meta (Coursera)",
    duration: "2023",
    description:
      "9-course professional certificate covering React, UI/UX principles, responsive design, testing, and version control. Equivalent to industry-standard front-end training.",
    tags: ["React", "UI/UX", "Responsive Design", "Git"],
  },
];
