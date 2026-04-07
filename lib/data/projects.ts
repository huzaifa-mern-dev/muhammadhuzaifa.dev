/**
 * lib/data/projects.ts
 * All portfolio project data (migrated from hardcoded Swiper slides in index.html).
 * Used by PortfolioSection.tsx to render slides dynamically.
 */

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string; // short description
  fullDescription?: string; // used for the new interactive modal
  features?: string[]; // used for the new interactive modal
  technologies: string[];
  image: string; // cover image path
  images?: string[]; // carousel images path
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "task-manager",
    title: "Task Management",
    subtitle: "System",
    description: "MERN Stack Task Management System",
    fullDescription: "A robust, scalable backend architecture for an enterprise task management system. Designed to handle real-time concurrency, complex state management, and role-based access control.",
    features: ["Real-time Socket.io Syncing", "Role-Based Access Control (RBAC)", "Advanced MongoDB Aggregations", "Secure JWT Authentication"],
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
    image: "/imgs/home-page-2/projects/4.png",
    images: ["/imgs/home-page-2/projects/4.png", "/imgs/home-page-2/projects/3.png"],
    githubUrl: "https://github.com/huzaifa-mern-dev/mern-stack-task-manager",
  },
  {
    id: "sniplit",
    title: "SnipLit",
    subtitle: "CodeScreenshot",
    description: "CodeScreenshot — a powerful tool to create stunning screenshots of your code with customisable font options.",
    fullDescription: "SnipLit is a highly interactive React application allowing developers to generate beautiful, shareable snippets of code with syntax highlighting themes and custom typography.",
    features: ["Custom Zustand State Engine", "Live Syntax Highlighting", "Dynamic Font Loading", "Export to High-Res PNG"],
    technologies: ["React", "Zustand", "Tailwind CSS"],
    image: "/imgs/home-page-2/projects/3.png",
    images: ["/imgs/home-page-2/projects/3.png", "/imgs/home-page-2/projects/4.png"],
    liveUrl: "https://sniplit-code.netlify.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/SnipLit",
  },
  {
    id: "gta6",
    title: "Modern and Animated",
    subtitle: "GTA 6 Landing Page",
    description: "GTA 6 Theta — immersive dynamic landing page inspired by the cinematic world of Grand Theft Auto.",
    fullDescription: "An ambitious, highly animated landing page utilizing GSAP ScrollTrigger to recreate the immersive, high-fidelity experience of a AAA game studio release.",
    features: ["GSAP ScrollTrigger Pinned Sections", "Custom Parallax Mouse Tracking", "Responsive CSS Grid Architecture"],
    technologies: ["React", "GSAP", "Tailwind CSS"],
    image: "/imgs/home-page-2/projects/8.png",
    images: ["/imgs/home-page-2/projects/8.png", "/imgs/home-page-2/projects/5.png"],
    liveUrl: "https://gta-6-theta.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/GTA-6-Landing-Page/",
  },
  {
    id: "lynk",
    title: "Lynk — Your Next-Gen",
    subtitle: "URL Shortener",
    description: "Lynk — a powerful URL shortening service designed for simplicity, efficiency, and detailed insights.",
    fullDescription: "Built on Next.js 14 App Router, Lynk provides an incredibly fast, edge-rendered dashboard to generate, track, and manage shortened URLs with sophisticated analytics.",
    features: ["Next.js Server Actions & SSR", "High-Performance API Routes", "MongoDB Click-Tracking Analytics", "Dynamic Tailwind Theming"],
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: "/imgs/home-page-2/projects/5.png",
    images: ["/imgs/home-page-2/projects/5.png", "/imgs/home-page-2/projects/3.png"],
    liveUrl: "https://lynk-next.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/Lynk-URL-Shortner",
  },
  {
    id: "mh-portfolio",
    title: "Modern Portfolio Design",
    subtitle: "for Developer",
    description: "Responsive Portfolio website built with HTML, CSS and Javascript.",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "/imgs/home-page-2/projects/2.png",
    liveUrl: "https://mh-protfolio.netlify.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/MH-Personal-portfolio",
  },
  {
    id: "blog-landing",
    title: "Personal Portfolio and Blog",
    subtitle: "Landing Page Design",
    description: "Responsive Personal Blog Landing Page built with HTML, CSS and Javascript.",
    technologies: ["HTML", "CSS", "Javascript"],
    image: "/imgs/home-page-2/projects/1.png",
    liveUrl: "https://wp-web-works.netlify.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/WP-Web-Works",
  },
  {
    id: "leatherstride",
    title: "LeatherStride",
    subtitle: "Ecommerce Brand Website",
    description: "Ecommerce brand website built with WordPress and WooCommerce.",
    technologies: ["WordPress", "Elementor", "Contact Form 7"],
    image: "/imgs/home-page-2/projects/6.png",
  },
  {
    id: "haven-hub",
    title: "Heaven Hub",
    subtitle: "Travel Agency Solution",
    description: "Travel Agency solution built with WordPress.",
    technologies: ["WordPress", "Elementor", "Contact Form 7"],
    image: "/imgs/home-page-2/projects/7.png",
    liveUrl: "http://haven-hub.infy.uk/?i=1",
  },
  {
    id: "carhub",
    title: "CarHub",
    subtitle: "Car Rental Website",
    description: "Sleek UI, responsive design with great animations.",
    technologies: ["WordPress", "Elementor", "Contact Form 7"],
    image: "/imgs/home-page-2/projects/9.png",
    liveUrl: "http://carhub.infy.uk/",
  },
  {
    id: "palette",
    title: "Palette",
    subtitle: "Architecture Design Website",
    description:
      "Isotope layout + Swiper = excellent combo for showcasing architectural projects.",
    technologies: ["Next.js", "React", "SCSS"],
    image: "/imgs/home-page-2/projects/10.png",
    liveUrl: "https://palette-tau.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/palette",
  },
  {
    id: "paytip",
    title: "PayTip",
    subtitle: "SaaS Payment Landing Page",
    description: "Clean, fast, responsive — perfect for SaaS presentation.",
    technologies: ["HTML", "TailwindCSS", "JS"],
    image: "/imgs/home-page-2/projects/11.png",
    liveUrl: "https://paytip.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/paytip",
  },
  {
    id: "kindre",
    title: "Kindre",
    subtitle: "Restaurant Website",
    description: "Great animations via GSAP — appetizing vibe.",
    technologies: ["React", "GSAP", "Bootstrap"],
    image: "/imgs/home-page-2/projects/12.png",
    liveUrl: "https://kindre-royal-restuarent.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/KINDRE-Royal-Restuarent",
  },
  {
    id: "cogni-ai",
    title: "Cogni AI",
    subtitle: "AI Writer Website",
    description: "Modern UI, solid branding, AI-focused design.",
    technologies: ["Next.js", "SCSS"],
    image: "/imgs/home-page-2/projects/13.png",
    liveUrl: "https://cogni-ai-writer.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/cogni-ai-",
  },
  {
    id: "fauget",
    title: "Fauget",
    subtitle: "Agriculture and Farming Website",
    description: "Beautiful animation, responsive layout.",
    technologies: ["HTML", "Bootstrap", "JS"],
    image: "/imgs/home-page-2/projects/14.png",
    liveUrl: "https://fauget-agro.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/fauget/",
  },
  {
    id: "hiplyx",
    title: "HIPLYX",
    subtitle: "Logistics Website",
    description: "Beautiful, modern and responsive layout.",
    technologies: ["WordPress", "Elementor", "Contact Form 7"],
    image: "/imgs/home-page-2/projects/15.png",
    liveUrl: "http://hiplyx.fwh.is/",
  },
];
