/**
 * lib/data/experience.ts
 * Work experience timeline data.
 * Used by ResumeSection.tsx (Server Component — no client JS needed).
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
  location: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "rojrztech-fullstack",
    role: "Full Stack Developer",
    company: "Rojrztech",
    duration: "Jan 2025 — Present",
    type: "Full-time",
    location: "Karachi, Pakistan · Remote",
    description:
      "Building and maintaining production MERN stack applications and WordPress platforms for diverse clients. Leading front-end architecture decisions, reviewing PRs, and mentoring junior developers on the team.",
    highlights: [
      "Architected a multi-tenant LMS with live class streaming (Node.js + Socket.io)",
      "Integrated Gemini AI into a client-facing chatbot reducing support tickets by 40%",
      "Delivered 6+ WordPress sites from design handoff to launch in under 2 weeks each",
      "Implemented CI/CD pipelines with GitHub Actions and Vercel",
    ],
  },
  {
    id: "rojrztech-junior",
    role: "Junior Web Developer",
    company: "Rojrztech",
    duration: "Jun 2024 — Dec 2024",
    type: "Full-time",
    location: "Karachi, Pakistan · Remote",
    description:
      "Front-end specialist focused on building responsive React UIs and customising WordPress themes with Elementor. Worked directly with the design team to translate Figma mockups into pixel-perfect components.",
    highlights: [
      "Built 10+ reusable React component libraries consumed across projects",
      "Reduced page load time by 60% on flagship client site via code splitting",
      "Customised Contact Form 7 and WPForms for complex multi-step form workflows",
    ],
  },
  {
    id: "codsoft-intern",
    role: "Web Developer Intern",
    company: "CodSoft",
    duration: "Jan 2024 — Feb 2024",
    type: "Internship",
    location: "Remote",
    description:
      "Completed a structured remote internship building assigned front-end tasks to client specifications. Gained hands-on experience with production code quality standards and agile sprint workflows.",
    highlights: [
      "Delivered all sprint tasks on time with zero rework requested",
      "Built a fully responsive landing page in HTML, CSS, and vanilla JS",
      "Received commendation for clean, well-commented code",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    duration: "2023 — Present",
    type: "Freelance",
    location: "Worldwide · Remote",
    description:
      "Independently delivering web applications, WordPress sites, and API integrations for international clients. Managing the full project lifecycle from requirements gathering to deployment.",
    highlights: [
      "Built CarHub, Haven Hub, and LeatherStride on WordPress + WooCommerce",
      "Deployed Lynk URL Shortener and Cogni AI on Vercel with custom domains",
      "Maintained 5-star client satisfaction across all engagements on Fiverr",
    ],
  },
];
