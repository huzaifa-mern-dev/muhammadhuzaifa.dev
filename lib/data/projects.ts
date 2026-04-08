
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  technologies: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  categories?: string[];
}

export const projects: Project[] = [
  {
    id: "task-manager",
    categories: ["Full-Stack & SaaS"],
    title: "Task Management System",
    subtitle: "Enterprise Dashboard",
    description: "Scalable MERN Stack Task Management System featuring RBAC and JWT authentication.",
    fullDescription: "A robust, scalable backend architecture for an enterprise-level task management system. Designed to handle complex state management, strict role-based access control (RBAC), and secure JWT authentication. It features complete CRUD operations for tasks and subtasks.",
    features: [
      "Role-Based Access Control (RBAC)",
      "Secure JWT Authentication & bcrypt",
      "Auto Password Generation & Clipboard API",
      "Complex Subtask Management"
    ],
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    image: "/imgs/home-page-2/projects/12.png",
    images: [
      "/imgs/home-page-2/projects/12.png",
    ],
    githubUrl: "https://github.com/huzaifa-mern-dev/mern-stack-task-manager",
  },
  {
    id: "lynk",
    categories: ["Full-Stack & SaaS"],
    title: "Lynk",
    subtitle: "URL Shortener & Analytics",
    description: "Open-source URL shortener offering detailed click analytics and secure QR code generation.",
    fullDescription: "A high-performance SaaS application built with Next.js 14 and MongoDB. Lynk provides users with a comprehensive dashboard to manage shortened links, monitor click traffic, and generate QR codes. Secured by Clerk Auth and styled with Shadcn/UI for a premium UX.",
    features: [
      "Comprehensive Click Analytics",
      "Dynamic QR Code Generation",
      "Secure User Dashboard & Management",
      "Robust Authentication (Clerk)"
    ],
    technologies: ["Next.js 14", "MongoDB", "Shadcn/UI", "Clerk Auth"],
    image: "/imgs/home-page-2/projects/14.png",
    images: ["/imgs/home-page-2/projects/14.png"],
    liveUrl: "https://lynk-next.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/Lynk-URL-Shortner"
  },
  {
    id: "codescreenshot",
    categories: ["Web Applications"],
    title: "CodeScreenshot",
    subtitle: "Code to Image Utility",
    description: "A modern utility tool to convert code snippets into beautiful, exportable images effortlessly.",
    fullDescription: "Built with React 18 and TailwindCSS, this utility empowers developers to generate highly customizable, high-resolution images from their code snippets. It features a fully draggable and resizable interface, real-time syntax highlighting, and rapid global state management.",
    features: [
      "Real-time Syntax Highlighting (highlight.js)",
      "Instant Image Export (html-to-image)",
      "Draggable & Resizable Panels (re-resizable)",
      "Global State Management (Zustand)"
    ],
    technologies: ["React 18", "TailwindCSS", "Zustand", "highlight.js", "clsx"],
    image: "/imgs/home-page-2/projects/13.png",
    images: ["/imgs/home-page-2/projects/13.png"],
    liveUrl: "https://sniplit.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/SnipLit",
  },
  {
    id: "palette",
    categories: ["Web Applications"],
    title: "Palette",
    subtitle: "Dynamic Portfolio Platform",
    description: "A visually stunning Next.js 15 application featuring advanced masonry layouts and curved text animations.",
    fullDescription: "Palette represents the bleeding edge of React development, built on the latest Next.js 15 architecture. It incorporates complex masonry layouts via Isotope, immersive video modals, and scroll-triggered WOW.js animations styled entirely with modular Sass. This project is strictly optimized for extreme performance and visual storytelling.",
    features: [
      "Next.js 15 Advanced Architecture",
      "Dynamic Masonry Grid Layouts (Isotope)",
      "Scroll-triggered Animations (WOW.js)",
      "Immersive Interactive Video Modals"
    ],
    technologies: ["Next.js 15", "React 18", "Sass", "Isotope", "WOW.js"],
    image: "/imgs/home-page-2/projects/2.png",
    images: [
      "/imgs/home-page-2/projects/2.png",
    ],
    liveUrl: "https://palette-tau.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/palette",
  },
  {
    id: "kindre",
    categories: ["Web Applications"],
    title: "Kindre",
    subtitle: "Luxury Restaurant Experience",
    description: "An elegant, high-end restaurant web experience featuring complex typography animations and smooth scroll interactions.",
    fullDescription: "Kindre is a premium React 18 application designed for the luxury hospitality sector. It leverages GSAP and Split-Type for highly sophisticated, cinematic typography animations. The layout is solidly constructed using Sass and Bootstrap, offering an immersive 'Elegance Retreat' experience across all devices.",
    features: [
      "Advanced Typography Animations (Split-Type)",
      "High-Performance Scroll Interactions (GSAP)",
      "Touch-optimized Carousels (Swiper)",
      "Custom Modular Styling (Sass)"
    ],
    technologies: ["React 18", "GSAP", "Sass", "Bootstrap", "Swiper"],
    image: "/imgs/home-page-2/projects/4.png",
    images: [
      "/imgs/home-page-2/projects/4.png"
    ],
    liveUrl: "https://kindre-royal-restuarent.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/KINDRE-Royal-Restuarent",
  },
  {
    id: "gta-6-redefine",
    categories: ["Landing Pages"],
    title: "Redefine Gaming",
    subtitle: "Cinematic Promo Page",
    description: "An immersive, animation-heavy promotional landing page built with React and GSAP.",
    fullDescription: "A bleeding-edge interactive promotional page engineered with React 18 and Vite for rapid builds. This project heavily utilizes the `@gsap/react` package to orchestrate complex, timeline-based scroll animations, creating a highly cinematic and engaging user experience that truly 'redefines' standard web layouts.",
    features: [
      "Complex Timeline Animations (GSAP)",
      "Cinematic Video Background Integration",
      "Rapid Build Architecture (Vite)",
      "Component-Driven UI (React 18 & Tailwind)"
    ],
    technologies: ["React 18", "GSAP", "Tailwind CSS", "Vite", "React Icons"],
    image: "/imgs/home-page-2/projects/9.png",
    images: [
      "/imgs/home-page-2/projects/9.png"
    ],
    liveUrl: "https://gta-6-theta.vercel.app",
    githubUrl: "https://github.com/huzaifa-mern-dev/GTA-6-Landing-Page",
  },
  {
    id: "paytip",
    categories: ["Landing Pages"],
    title: "Paytip",
    subtitle: "SaaS Chat Platform",
    description: "A fast, modern, and utility-driven landing page for a real-time customer engagement platform.",
    fullDescription: "Paytip showcases a clean, highly converting SaaS landing page architecture. Built entirely without heavy JavaScript frameworks, it relies on semantic HTML, Vanilla JavaScript, and Tailwind CSS to deliver a lightning-fast, highly responsive user interface with native Swiper integrations for testimonials and feature showcases.",
    features: [
      "Zero-Framework Lightning Fast Load Times",
      "Utility-First Responsive Design",
      "Interactive Feature Carousels",
      "Conversion-Optimized Layout"
    ],
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Swiper"],
    image: "/imgs/home-page-2/projects/5.png",
    images: [
      "/imgs/home-page-2/projects/5.png"
    ],
    liveUrl: "https://paytip.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/paytip",
  },
  {
    id: "cogni-ai",
    categories: ["Landing Pages"],
    title: "Cogni AI",
    subtitle: "AI Platform Landing Experience",
    description: "An immersive, high-converting landing page for an AI platform leveraging Next.js 14 and Headless UI.",
    fullDescription: "Designed for maximum aesthetic impact and high conversion rates, Cogni AI is a modern digital experience built on Next.js 14. It features highly accessible, unstyled components from Headless UI, advanced scroll-reveal animations via AOS, and custom typewriter effects to engage users instantly upon arrival.",
    features: [
      "Accessible UI Architecture (Headless UI)",
      "Advanced Scroll Animations (AOS & WOW.js)",
      "Dynamic Typewriter Effects for Engagement",
      "SEO-Optimized Server-Side Rendering"
    ],
    technologies: ["Next.js 14", "Headless UI", "Sass", "AOS", "Typewriter Effect"],
    image: "/imgs/home-page-2/projects/3.png",
    images: [
      "/imgs/home-page-2/projects/3.png",
    ],
    liveUrl: "https://cogni-ai-writer.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/cogni-ai-",
  },
  {
    id: "fauget",
    categories: ["Landing Pages"],
    title: "Fauget",
    subtitle: "Modern Web Interface",
    description: "A highly responsive and visually engaging web interface built with native web technologies.",
    fullDescription: "Fauget is a finely crafted web interface demonstrating mastery over fundamental web technologies. It utilizes Bootstrap for robust responsive grids, jQuery for seamless DOM manipulation, and Swiper for touch-enabled carousels, delivering a lightweight yet engaging user experience without the overhead of heavy frameworks.",
    features: [
      "Fully Responsive Grid System (Bootstrap)",
      "Touch-enabled Interactive Sliders (Swiper)",
      "Cross-browser Compatibility & Optimization",
      "Lightweight DOM Manipulation"
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Swiper"],
    image: "/imgs/home-page-2/projects/1.png",
    images: [
      "/imgs/home-page-2/projects/1.png",
    ],
    liveUrl: "https://fauget-agro.vercel.app/",
    githubUrl: "https://github.com/huzaifa-mern-dev/fauget",
  },
];
