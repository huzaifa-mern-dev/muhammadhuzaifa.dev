"use client";

/**
 * components/sections/TestimonialsSection.tsx
 *
 * A premium "Wall of Love" masonry layout displaying high-ticket architecture reviews.
 * Adheres strictly to the primary-2 lock and dark surface tokens.
 */

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const testimonials = [
  {
    name: "Eileen Parent",
    role: "Founder & CEO, Access Navigation.org",
    platform: "Upwork",
    rating: 5,
    text: "Quality Work & Absolute Integrity - Muhammad is the real deal. He set up our Shopify/Printify store with total precision. He solved every issue we threw at him and refused to cut corners on quality. Excellent communication, very fair pricing, and a deep understanding of our non-profit mission. We feel lucky to have found him! I’ll be a returning client for sure. Highly recommended for anyone who wants quality work from an honest person."
  },
  {
    name: "Jazlynn H.",
    role: "Founder, pickypadstherapy.com",
    platform: "Upwork",
    rating: 5,
    text: "Working with Muhammad was a fantastic experience from start to finish. He went above and beyond my expectations. What impressed me the most was his dedication and patience. He spent hours making sure every small detail looked perfect, and even after completing the main work, he continued to make adjustments until I was 100% satisfied. His communication was always clear, polite, and fast. It’s rare to find a freelancer who combines skill, professionalism, and genuine care for the project — but Muhammad is exactly that."
  },
  {
    name: "Marie",
    role: "Founder, nebulaartistry.shop",
    platform: "Upwork",
    rating: 5,
    text: "Muhammad was absolutely awesome to work with! He did a fantastic job redoing my Shopify store and everything looks polished, modern, and runs so smoothly now. He understood exactly what I wanted, communicated clearly throughout the process, and delivered the project on time. I really appreciate his professionalism and attention to detail. Highly recommend him to anyone looking for a skilled and reliable Shopify expert!"
  },
  {
    name: "Kreshnik Veseli",
    role: "Founder, parillis.ch",
    platform: "Upwork", // Ya evidence ke hisaab se 'Direct' ya 'Fiverr' likh dein
    rating: 5,
    text: "Trustworthy, autonomous, and skilled in his field, Muhammed is the ideal freelancer to move my projects forward or for long-term hiring. He knows how to show understanding and unparalleled politeness."
  },
  {
    name: "Ali Hassan",
    role: "Client, California, United States",
    platform: "Upwork", 
    rating: 5,
    text: "Had a great experience working with Huzaifa, very professional and delivered exactly what I needed. Would definitely work with him again."
  },
  {
    name: "Kreshnik Veseli",
    role: "Founder, neroli-studio.ch",
    platform: "Upwork", 
    rating: 5,
    text: "Perfect. Muhammed listened and finished the job successfully." // Ek hi client ke 2 chote messages maine single solid review bananay ke liye merge kar diye evidence ke sath.
  },
  
  {
    name: "Ibrar Shabir",
    role: "Client, California, United States",
    platform: "Upwork",
    rating: 5,
    text: "Huzaifa did a great job on our Elementor landing page. He followed the requirements perfectly, created a clean and responsive design, and added a functional modal popup with conditional form logic. Communication was smooth and delivery was on time. Highly recommended!"
  }

];

function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-2 dark:text-primary-2">
        Wall of Love
      </span>
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="ri-star-fill text-primary-2 text-lg" />
      ))}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  if (platform === "Upwork") {
    return (
      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#14a800]/10 border border-[#14a800]/20 text-[#14a800] text-[10px] font-bold uppercase tracking-wider">
        <i className="ri-briefcase-line" /> {platform}
      </span>
    );
  }
  if (platform === "Fiverr") {
    return (
      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#00b22d]/10 border border-[#00b22d]/20 text-[#00b22d] text-[10px] font-bold uppercase tracking-wider">
        <i className="ri-briefcase-line" /> {platform}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-500/10 border border-gray-500/20 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider">
      <i className="ri-user-star-line" /> Direct
    </span>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden bg-transparent"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Soft Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary-2/[0.03] dark:bg-primary-2/[0.04] blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Block */}
        <AnimatedSection variant="fade-up" className="mb-16 lg:mb-24">
          <div className="text-center">
            <SectionLabel />
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Client Success{" "}
              <span className="text-primary-2 dark:text-primary-2 relative inline-block">
                Stories
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 font-normal dark:text-[#a1a1aa] font-sans text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Trusted by founders and scaling brands across the globe to deliver robust digital infrastructure.
            </p>
          </div>
        </AnimatedSection>

        {/* CSS Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className={[
                "break-inside-avoid relative p-8 lg:p-10 rounded-[2rem] overflow-hidden group",
                "bg-white dark:bg-[#272730]",
                "border border-gray-200 dark:border-white/5",
                "hover:border-primary-2/30 dark:hover:border-primary-2/30",
                "shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none",
                "transition-all duration-300"
              ].join(" ")}
            >
              {/* Decorative Giant Quote Background */}
              <i className="ri-double-quotes-r absolute -right-4 -bottom-6 text-[140px] text-gray-900/[0.02] dark:text-white/[0.02] group-hover:text-primary-2/[0.05] dark:group-hover:text-primary-2/[0.04] transition-colors duration-500 pointer-events-none transform rotate-6" />
              
              <StarRating />
              
              <p className="text-gray-600 dark:text-gray-300 font-sans text-base lg:text-[1.1rem] leading-relaxed mb-10 relative z-10 italic">
                &quot;{t.text}&quot;
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-gray-100 dark:border-white/5 pt-6 relative z-10">
                <div className="pr-4">
                  <h4 className="text-gray-900 dark:text-white font-bold font-sans text-base mb-1 tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 dark:text-[#a1a1aa] font-sans text-xs">
                    {t.role}
                  </p>
                </div>
                <div className="shrink-0">
                  <PlatformBadge platform={t.platform} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
