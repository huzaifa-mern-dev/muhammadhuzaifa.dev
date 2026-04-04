'use client';
/**
 * components/sections/HeroSection.tsx
 *
 * Rebuilt Premium Consultancy Agency Hero
 * - Split-screen 2-column layout
 * - Clean background
 * - Upwork badge
 * - Profile image with morphing/water CSS clip-path animation
 * - AnimatedSection reveals preserved
 */

import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center justify-center py-24 bg-transparent overflow-hidden"
      aria-label="About Muhammad Huzaifa"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* 2-column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">
          
          {/* ── Left Column: Text Content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0">
            <AnimatedSection variant="fade-up" delay={0.1}>
              {/* Upwork Top Rated Badge */}
              <div className="inline-flex items-center gap-2.5 text-xs font-mono mb-8 border rounded-full px-4 py-1.5 text-primary-2 border-primary-2/40 bg-primary-2/10 dark:text-primary-2 dark:border-primary-2/20 dark:bg-primary-2/5 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-2 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-2"></span>
                </span>
                <span className="uppercase tracking-wide font-medium">Upwork Top Rated</span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary-2 dark:text-primary-2 relative whitespace-nowrap">
                  Muhammad Huzaifa
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-base md:text-lg font-sans font-normal text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-10 text-left lg:text-left">
                Full Stack Developer & Digital Craftsman specialising in{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">React</strong>,{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">Next.js</strong>,{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">Node.js</strong> &amp;{" "}
                <strong className="text-gray-900 dark:text-white font-semibold">WordPress</strong>. 
                I build robust back-end systems and pixel-perfect UIs that perform at scale.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* Primary CTA */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className={[
                    "inline-flex items-center gap-2 px-8 py-4 rounded-xl",
                    "bg-primary-2",
                    "text-white dark:text-[#1e1e27]",
                    "font-sans font-bold text-sm lg:text-base tracking-wide",
                    "shadow-[0_8px_20px_rgba(98,169,43,0.3)] dark:shadow-[0_8px_20px_rgba(168,255,83,0.25)]",
                    "hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(98,169,43,0.4)] dark:hover:shadow-[0_12px_24px_rgba(168,255,83,0.35)]",
                    "transition-all duration-300 active:scale-95",
                  ].join(" ")}
                >
                  <i className="ri-download-2-line text-lg" />
                  Download CV
                </a>

                {/* Secondary CTA */}
                <a
                  href="#contact"
                  className={[
                    "inline-flex items-center gap-2 px-8 py-4 rounded-xl",
                    "border-2 border-gray-200 dark:border-white/10",
                    "text-gray-700 dark:text-[#8f8f92]",
                    "font-sans font-bold text-sm lg:text-base tracking-wide",
                    "hover:border-primary-2 hover:text-primary-2 dark:hover:border-primary-2 dark:hover:text-primary-2",
                    "hover:-translate-y-1 hover:bg-primary-2/5",
                    "transition-all duration-300 active:scale-95",
                  ].join(" ")}
                >
                  <i className="ri-mail-send-line text-lg" />
                  Hire Me
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right Column: Morphing Image ── */}
          <div className="flex items-center justify-center order-1 lg:order-2 w-full">
            <AnimatedSection variant="zoom-in" delay={0.2} className="relative flex items-center justify-center w-full max-w-[500px]">
              
              {/* Decorative background shadow for morph */}
              <div 
                className="absolute inset-0 bg-primary-2/15 dark:bg-primary-2/20 blur-2xl transform scale-90"
                style={{ animation: 'morph 8s ease-in-out infinite' }}
                aria-hidden="true"
              />

              {/* The Morphing Image Wrapper */}
              <div 
                className="relative overflow-hidden w-[85%] aspect-square bg-gray-100 dark:bg-white/5 border-4 border-white dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10"
                style={{
                  animation: 'morph 8s ease-in-out infinite',
                }}
              >
                <Image
                  src="https://github.com/huzaifa-mern-dev.png" 
                  alt="Muhammad Huzaifa"
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700 pointer-events-none"
                  priority
                />
                
                {/* Overlay blend to tint image if needed */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-2/10 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-10 right-0 w-16 h-16 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center animate-bounce z-20" style={{ animationDuration: '3s' }}>
                <i className="ri-reactjs-line text-3xl text-[#61DAFB]" />
              </div>
              <div className="absolute bottom-10 left-0 w-14 h-14 bg-white dark:bg-white/5 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center animate-bounce z-20" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <i className="ri-code-s-slash-line text-2xl text-primary-2" />
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
