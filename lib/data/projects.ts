
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
    id: "airis-dynamics",
    categories: ["Full-Stack & SaaS"],
    title: "Airis Dynamics",
    subtitle: "Corporate AI Platform",
    description: "Next.js based corporate AI platform with reusable component architecture and strict technical SEO.",
    fullDescription: "A high-performance corporate AI platform built with Next.js. Engineered with a scalable, reusable component architecture, focusing on seamless server-side rendering, optimized data fetching, and strict technical SEO to ensure peak performance and fast indexing.",
    features: [
      "Next.js Server-Side Rendering",
      "Scalable Component Architecture",
      "Technical SEO & Performance Optimization",
      "Dynamic AI Solution Showcase"
    ],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/imgs/home-page-2/projects/15.png",
    images: [
      "/imgs/home-page-2/projects/15.png",
    ],
    liveUrl: "https://airisdynamics.com/",
  },
  {
    id: "bincot-landing-page",
    categories: ["Landing Page", "Next.js"],
    title: "Bincot Consulting",
    subtitle: "Strategic Landing Page",
    description: "Next.js landing page for consulting services with integrated Calendly scheduling.",
    fullDescription: "A high-converting landing page built with Next.js, specifically designed for strategic consulting services. It features a clean, professional layout with a seamless Calendly popup integration, allowing clients to book consultations directly on-site while maintaining a fast, responsive user experience.",
    features: [
      "Calendly Popup Integration",
      "Next.js High-Performance Build",
      "Service & Case Study Showcase",
      "Mobile-First Responsive Design"
    ],
    technologies: ["Next.js", "React", "TailwindCSS", "Calendly"],
    image: "/imgs/home-page-2/projects/16.png",
    images: [
      "/imgs/home-page-2/projects/16.png",
    ],
    githubUrl: "https://github.com/huzaifa-mern-dev/bincot",
    liveUrl: "https://bincot.vercel.app/",
  },
  {
    id: "meridian-immigration",
    categories: ["Landing Page", "Next.js"],
    title: "Meridian Law",
    subtitle: "Immigration Legal Services",
    description: "Next.js landing page for a law firm featuring service showcases and booking flows.",
    fullDescription: "A professional, high-authority landing page built with Next.js for a global immigration law firm. The site is optimized for conversion, featuring detailed service cards, client success metrics, and a clean, trust-building UI that highlights expertise and compassionate legal representation.",
    features: [
      "Dynamic Service & Practice Area Cards",
      "Conversion-Optimized Booking CTA",
      "Trust-Building Success Metrics Section",
      "Fully Responsive Professional Layout"
    ],
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    image: "/imgs/home-page-2/projects/17.png",
    images: [
      "/imgs/home-page-2/projects/17.png",
    ],
    githubUrl: "https://github.com/huzaifa-mern-dev/immigration-firm-website",
    liveUrl: "https://meridian-law-2004.vercel.app/"
  },
  {
    id: "picky-pads-therapy",
    categories: ["Shopify", "E-commerce"],
    title: "Picky Pads Therapy",
    subtitle: "Shopify Store Redesign",
    description: "Full store redesign focusing on visual aesthetics and improved product browsing experience.",
    fullDescription: "A complete Shopify store redesign for a specialized handmade therapy brand. The project involved a full visual overhaul to match the brand's unique identity, optimizing the product catalog for better user engagement, and ensuring a seamless, mobile-responsive shopping experience for sensory-focused products.",
    features: [
      "Custom Store Redesign & Branding",
      "Optimized Product Catalog & Collection Pages",
      "Mobile-Responsive User Experience",
      "Enhanced Navigation for Therapy Products"
    ],
    technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
    image: "/imgs/home-page-2/projects/18.png",
    images: [
      "/imgs/home-page-2/projects/18.png",
    ],
    liveUrl: "https://pickypadstherapy.com/",
  },
  {
    id: "nebula-artistry",
    categories: ["Shopify", "E-commerce"],
    title: "Nebula Artistry",
    subtitle: "Shopify Store Redesign",
    description: "Creative store redesign featuring a custom space-themed aesthetic for a niche craft brand.",
    fullDescription: "A comprehensive Shopify store redesign for Nebula Artistry. The project focused on creating a vibrant, space-themed visual identity that complements the brand's unique 'sparkle putty' products. I implemented custom liquid templates and optimized the product gallery to enhance visual appeal and improve the mobile shopping journey.",
    features: [
      "Custom Space-Themed Visual Branding",
      "Optimized Product Gallery & Featured Sections",
      "Mobile-First Shopping Experience",
      "Enhanced Performance for Creative Assets"
    ],
    technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
    image: "/imgs/home-page-2/projects/19.png",
    images: [
      "/imgs/home-page-2/projects/19.png",
    ],
    liveUrl: "https://nebulaartistry.shop/",
  },
  {
    id: "nutrifeel",
    categories: ["Shopify", "E-commerce"],
    title: "Nutrifeel",
    subtitle: "Premium Supplement Store",
    description: "Shopify redesign focused on high-end branding, SEO optimization, and performance engineering.",
    fullDescription: "A sophisticated redesign of the Nutrifeel Shopify store, catering to premium Swiss-made supplements. The project involved an extensive focus on performance optimization to ensure fast load times, and a comprehensive SEO strategy to improve visibility. The final result is a clean, conversion-focused UI that effectively showcases product categories and reinforces brand authority.",
    features: [
      "Premium Design & Branding Overhaul",
      "Core Web Vitals & Performance Optimization",
      "Advanced On-Page SEO Strategy",
      "Category-Driven Product Discovery UI"
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Advanced SEO Tools"],
    image: "/imgs/home-page-2/projects/20.png",
    images: [
      "/imgs/home-page-2/projects/20.png",
    ],
    liveUrl: "https://nutrifeel.ch/",
  },
  {
    id: "lagenda-perfumes",
    categories: ["Shopify", "E-commerce"],
    title: "L'Agenda Perfumes",
    subtitle: "Luxury Fragrance Store",
    description: "High-end Shopify store redesign featuring luxury aesthetics and cinematic product presentation.",
    fullDescription: "A sophisticated e-commerce platform for L'Agenda Perfumes. The redesign focused on a dark, premium aesthetic to evoke luxury. We implemented custom, high-impact imagery for product showcases, a countdown-driven 'Fragrance House' story section, and a conversion-optimized layout to reflect the precision and quality of the brand's scent collection.",
    features: [
      "Luxury Dark-Mode Aesthetics",
      "Cinematic Product Photography Integration",
      "Interactive Countdown-Driven Storytelling",
      "Premium User Experience & Navigation"
    ],
    technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
    image: "/imgs/home-page-2/projects/21.png",
    images: [
      "/imgs/home-page-2/projects/21.png",
    ],
    liveUrl: "https://www.parillis.ch/",
  },
  {
    id: "access-navigation",
    categories: ["Shopify", "E-commerce"],
    title: "Access Navigation",
    subtitle: "Community-Led POD Store",
    description: "Shopify store with a custom 4-round user flow integration for Print-on-Demand products.",
    fullDescription: "A purpose-driven Shopify store integrated with Printify for seamless print-on-demand operations. The project featured a highly customized navigation experience, incorporating a 4-step user journey flow to guide visitors through product selection, customization, and purchase, effectively supporting community-led initiatives through every sale.",
    features: [
      "Custom 4-Round Product Selection Flow",
      "Printify POD Integration",
      "Purpose-Driven Branding & Storytelling",
      "Optimized UX for Community Initiatives"
    ],
    technologies: ["Shopify", "Printify API", "Liquid", "JavaScript"],
    image: "/imgs/home-page-2/projects/22.png",
    images: [
      "/imgs/home-page-2/projects/22.png",
    ],
    liveUrl: "https://accessnavigation.myshopify.com/",
  },
  {
    id: "skin-sanctuary",
    categories: ["WordPress", "Shopify"],
    title: "Skin Sanctuary",
    subtitle: "Aesthetic Clinic Platform",
    description: "WordPress clinic website with custom-coded Shopify store integration.",
    fullDescription: "A comprehensive aesthetic clinic website built on WordPress. The project featured a custom-coded integration of Shopify products using a plugin, where the UI was manually styled and tailored to ensure a cohesive look and feel with the main clinic website, along with custom promotional popups to maximize conversions.",
    features: [
      "Custom-Coded Shopify Storefront UI",
      "Shopify Plugin Integration for WordPress",
      "Promotional Popup Implementation",
      "Premium Aesthetic Clinic Branding"
    ],
    technologies: ["WordPress", "Shopify", "PHP", "JavaScript", "CSS"],
    image: "/imgs/home-page-2/projects/23.png",
    images: [
      "/imgs/home-page-2/projects/23.png",
    ],
    liveUrl: "https://skinsanctuarystl.com/",
  },


  {
    id: "doodle-mint-studios",
    categories: ["WordPress", "Landing Page"],
    title: "Doodle Mint Studios",
    subtitle: "Motion Design Agency",
    description: "WordPress website built for a motion design agency, showcasing vibrant animation services.",
    fullDescription: "A creative, high-energy WordPress website designed for Doodle Mint Studios. The site focuses on visual storytelling to showcase their motion design and illustration capabilities. It features a clean, professional layout that integrates portfolio galleries, client testimonials, and a streamlined 'Get a Quote' flow to drive conversions for the agency.",
    features: [
      "Vibrant Motion Design Showcase",
      "Streamlined 'Get a Quote' Conversion Flow",
      "Portfolio & Client Trust Sections",
      "Responsive & Performance-Optimized WordPress Design"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    image: "/imgs/home-page-2/projects/24.png",
    images: [
      "/imgs/home-page-2/projects/24.png",
    ],
    liveUrl: "https://doodlemintstudios.com/",
  },

  {
    id: "rise-up-landing",
    categories: ["Wix", "Landing Page"],
    title: "Rise Up",
    subtitle: "Movement Landing Page",
    description: "High-converting Wix landing page optimized for paid ad traffic.",
    fullDescription: "A focused, high-converting landing page built on Wix, specifically designed to capture traffic from paid advertising campaigns. The page features a minimalist, clean aesthetic with a prominent video introduction to quickly convey the brand's message, establishing a connection with the target audience and driving user action.",
    features: [
      "Optimized for Paid Ad Campaigns",
      "Video-Centric Hero Section",
      "Conversion-Focused Minimalist Layout",
      "Brand-Aligned Messaging for Men's Community"
    ],
    technologies: ["Wix", "Video Integration"],
    image: "/imgs/home-page-2/projects/25.png",
    images: [
      "/imgs/home-page-2/projects/25.png",
    ],
    liveUrl: "https://www.libertycoaching.eu/rise-up",
  },





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
