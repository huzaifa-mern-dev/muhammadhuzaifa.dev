/**
 * lib/data/experience.ts
 * Work experience timeline data.
 * Refactored for punchy bullet points and sorted by current role.
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance";
  location: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Upwork",
    duration: "Sep 2025 — Present",
    type: "Freelance",
    location: "Remote",
    highlights: [
      "Independently delivering full-stack web applications and API integrations for international clients.",
      "Built custom WooCommerce stores (CarHub, Haven Hub) and deployed scalable Next.js apps.",
      "Maintained a 100% 5-star client satisfaction rating across all freelance engagements."
    ],
  },
  {
    id: "rojrztech-fullstack",
    role: "Team Lead",
    company: "Rojrztech",
    duration: "Nov 2024 — Sep 2025",
    type: "Full-time",
    location: "Karachi, Pakistan · Onsite",
    highlights: [
      "Leading front-end architecture and maintaining production MERN stack & WordPress platforms.",
      "Architected a multi-tenant LMS with live socket streaming and integrated Gemini AI chatbots.",
      "Delivered  scalable WordPress sites from design handoff to launch under tight deadlines."
    ],
  },
  {
    id: "rojrztech-junior",
    role: "Junior Web Developer",
    company: "Rojrztech",
    duration: "Jun 2024 — Dec 2024",
    type: "Full-time",
    location: "Karachi, Pakistan · Onsite",
    highlights: [
      "Built 10+ reusable React component libraries consumed across multiple client projects.",
      "Reduced page load time by 60% on flagship client site via aggressive code splitting.",
      "Customised WordPress themes to translate Figma mockups into pixel-perfect components."
    ],
  },
  {
    id: "codsoft-intern",
    role: "Web Developer Intern",
    company: "CodSoft",
    duration: "Jan 2024 — Feb 2024",
    type: "Internship",
    location: "Remote",
    highlights: [
      "Completed a structured remote internship delivering assigned front-end web tasks reliably.",
      "Built fully responsive landing pages using HTML, CSS, and vanilla JavaScript.",
      "Gained hands-on experience in agile sprint workflows and production code standards."
    ],
  },
];
