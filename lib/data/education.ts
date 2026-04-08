
export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    id: "virtual-uni",
    degree: "BS — Business & Information Tech",
    institution: "Virtual University of Pakistan",
    duration: "2025 — 2029",
    highlights: [
      "Combining computer science fundamentals with core business management principles.",
      "Focusing on data structures, software engineering, and digital entrepreneurship.",
      "Studied core software engineering principles, including data structures, algorithm design, and scalable system architecture.",
    ],
  },
  {
    id: "full-stack-open",
    degree: "Full Stack Open",
    institution: "University of Helsinki",
    duration: "Sep 2024",
    highlights: [
      "Mastered backend architectures using Node.js, Express, MongoDB, and GraphQL.",
      "Implemented strict TypeScript typing and robust CI/CD pipelines for deployments.",
      "Developed and deployed multiple full-cycle web applications, mastering RESTful API design and database state management.",
    ],
  },
  {
    id: "mozilla-js",
    degree: "JavaScript Foundations Specialization",
    institution: "Mozilla",
    duration: "May 2024",
    highlights: [
      "Deep-dived into core JS concepts: closures, prototypes, async/await, and the event loop.",
      "Built a strong foundation in interacting natively with complex Web APIs.",
      "Gained hands-on experience with modern JavaScript features, asynchronous programming, and DOM manipulation.",
    ],
  },
  {
    id: "meta-frontend",
    degree: "Meta Front-End Specialisation",
    institution: "Meta (Coursera)",
    duration: "Nov 2023",
    highlights: [
      "Completed a 9-course professional certificate focusing strictly on React and UI/UX.",
      "Studied advanced responsive design, component testing, and version control (Git).",
      "Built a strong foundation in modern JavaScript features, asynchronous programming, and DOM manipulation.",
    ],
  },
];
