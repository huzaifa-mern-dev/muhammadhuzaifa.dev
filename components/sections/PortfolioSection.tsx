'use client';
/**
 * components/sections/PortfolioSection.tsx — Interactive Client Component
 *
 * Features:
 *  - Swiper carousel with coverflow effect, loop, and autoplay
 *  - Premium Framer Motion interactive project modal (Split Layout)
 *  - Deep theme awareness with primary-2 targeted accents
 */

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion, AnimatePresence } from 'framer-motion';

// Swiper Core CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects, type Project } from '@/lib/data/projects';

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-2 dark:text-primary-2">
        My Work
      </span>
      <div className="h-px w-8 bg-primary-2/40 dark:bg-primary-2/40" />
    </div>
  );
}

// ─── Technology Tag ───────────────────────────────────────────────────────────
function TechTag({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-500 dark:text-[#8f8f92] border border-gray-200 dark:border-white/[0.07]">
      {label}
    </span>
  );
}

// ─── Modal Nested Carousel ────────────────────────────────────────────────────
function ModalCarousel({ images, alt }: { images: string[], alt: string }) {
  const [index, setIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full min-h-[300px] bg-gray-50 dark:bg-[#272730] overflow-hidden group flex items-center justify-center">
      <Image
        src={images[index]}
        alt={`${alt} screenshot ${index + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain mx-auto"
        priority
      />
      
      {/* Absolute Gradient overlay to ensure arrows and dots are visible over light images */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prev} 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary-2 hover:border-primary-2 transition-colors opacity-0 group-hover:opacity-100 shadow-xl" 
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-primary-2 hover:border-primary-2 transition-colors opacity-0 group-hover:opacity-100 shadow-xl" 
            aria-label="Next image"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${i === index ? 'w-6 bg-primary-2' : 'w-2 bg-white/40'}`} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // 1. Data Extraction (Unique Categories)
  const allCategories = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.categories || []).filter(Boolean)))
  ];

  // 3. Filtering Logic (Verification)
  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'All') return true;
    return p.categories?.includes(activeTab);
  });

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Radial accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#62a92b]/[0.04] dark:bg-[#62a92b]/[0.04] blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <SectionLabel />
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Featured{' '}
            <span className="text-primary-2 dark:text-primary-2 relative inline-block">
              Projects
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-2/30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-[#a1a1aa] font-sans font-normal text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of work spanning full-stack apps, dynamic landing pages,
            and complete SaaS infrastructures. Click any card to explore.
          </p>
        </div>

        {/* ── Filter Tabs ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                if (swiperRef.current) {
                  swiperRef.current.slideTo(0);
                }
              }}
              className={[
                "px-6 py-2.5 rounded-full text-sm font-semibold font-sans transition-all duration-300 border",
                activeTab === category
                  ? "bg-primary-2 border-primary-2 text-white shadow-[0_0_20px_rgba(98,169,43,0.3)]"
                  : "bg-white dark:bg-white/[0.02] text-gray-600 dark:text-[#8f8f92] border-gray-200 dark:border-white/10 hover:border-primary-2/50 dark:hover:border-primary-2/50 hover:text-primary-2 dark:hover:text-primary-2 shadow-sm dark:shadow-none",
              ].join(" ")}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Swiper Carousel ─────────────────────────────────────────────── */}
        <div className="relative portfolio-swiper-wrapper max-w-full overflow-visible">
          <Swiper
            key={activeTab}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Keyboard]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={filteredProjects.length >= 4}
            keyboard={{ enabled: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.pf-btn-next',
              prevEl: '.pf-btn-prev',
            }}
            breakpoints={{
              0:    { slidesPerView: 1.15 },
              640:  { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.3 },
              1280: { slidesPerView: 2.8 },
            }}
            className="!pb-12"
            aria-label="Portfolio projects carousel"
          >
            {filteredProjects.map((project, i) => (
              <SwiperSlide key={project.id}>
                {({ isActive }) => (
                  <article
                    className={[
                      'group relative rounded-3xl border cursor-pointer select-none',
                      'bg-white dark:bg-[#272730]',
                      'border-gray-200 dark:border-white/5',
                      'shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none',
                      'transition-transform duration-500 ease-out',
                      'hover:border-primary-2/50 dark:hover:border-primary-2/40',
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-[0.92] opacity-50 grayscale-[30%]',
                    ].join(' ')}
                    onClick={() => setSelectedProject(project)}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`View details for ${project.title}`}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && isActive) {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    {/* ── GPU-Accelerated Shadow Layer ── */}
                    <div 
                      className="absolute inset-0 rounded-3xl shadow-[0_8px_40px_rgba(98,169,43,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0 pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* ── Content Wrapper to maintain z-index above shadow ── */}
                    <div className="relative z-10 w-full h-full flex flex-col rounded-3xl overflow-hidden">
                      {/* ── Card Image Header ───────────────────────────────── */}
                      <div className="relative w-full aspect-[16/11] overflow-hidden bg-gray-100 dark:bg-black/20">
                        <Image
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 60vw, 40vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          priority={i < 3}
                        />

                        {/* Hover Overlay indicating click action */}
                        <div className="absolute inset-0 bg-primary-2/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                            <i className="ri-add-line text-3xl font-bold" />
                          </div>
                          <span className="text-white font-sans font-bold mt-4 tracking-wide uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                            View Details
                          </span>
                        </div>
                      </div>

                      {/* ── Card Body ───────────────────────────────────────── */}
                      <div className="p-6 lg:p-8 text-left bg-white dark:bg-[#272730] relative z-10 flex-grow">
                        <div className="mb-4">
                          <h3 className="font-sans font-bold text-gray-900 dark:text-white text-xl md:text-2xl leading-tight">
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <span className="block text-sm font-semibold font-sans text-primary-2 mt-1">
                              {project.subtitle}
                            </span>
                          )}
                        </div>

                        <p className="text-base font-sans font-normal text-gray-500 dark:text-gray-400 mb-6 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 border-t border-gray-100 dark:border-white/5 pt-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <TechTag key={tech} label={tech} />
                          ))}
                          {project.technologies.length > 3 && (
                            <TechTag label={`+${project.technologies.length - 3}`} />
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── Custom Nav Buttons ───────────────────────────────────────── */}
          <button
            className="pf-btn-prev absolute left-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#272730] border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-900 dark:text-white hover:border-primary-2 hover:bg-primary-2 hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Previous project"
          >
            <i className="ri-arrow-left-s-line text-2xl" />
          </button>
          <button
            className="pf-btn-next absolute right-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-[#272730] border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-900 dark:text-white hover:border-primary-2 hover:bg-primary-2 hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Next project"
          >
            <i className="ri-arrow-right-s-line text-2xl" />
          </button>
        </div>
      </div>

      {/* ── Interactive Modal via Framer Motion ─────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-[#1a1a22] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 hover:bg-red-500 hover:text-white border border-transparent dark:border-white/5 flex items-center justify-center transition-all duration-200 text-gray-500 dark:text-gray-300 shadow-sm"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-xl" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-full">
                
                {/* ── Left Column: Content ── */}
                <div className="p-8 lg:p-12 xl:p-16 flex flex-col order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-gray-100 dark:border-white/5 bg-white dark:bg-[#1a1a22]">
                  <h3 id="modal-title" className="text-3xl lg:text-4xl font-bold font-sans text-gray-900 dark:text-white mb-2 leading-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.subtitle && (
                    <span className="block text-lg font-semibold font-sans text-primary-2 mb-6">
                      {selectedProject.subtitle}
                    </span>
                  )}

                  <p className="text-base font-sans font-normal text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>

                  {/* Features List */}
                  {selectedProject.features && (
                    <div className="mb-8">
                      <h4 className="text-sm font-bold font-sans text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-white/5 pb-2">
                        Key Features
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <i className="ri-checkbox-circle-fill text-primary-2 text-lg mt-[-2px]" />
                            <span className="text-sm lg:text-base font-sans text-gray-600 dark:text-[#a1a1aa] leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-10">
                    <h4 className="text-sm font-bold font-sans text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-white/5 pb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-[#272730] border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-700 dark:text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto flex flex-wrap gap-4 pt-4">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary-2 text-white font-sans font-bold text-sm hover:bg-[#528d24] transition-colors shadow-lg shadow-primary-2/20"
                      >
                        <i className="ri-external-link-line" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-[#272730] text-gray-900 dark:text-white font-sans font-bold text-sm border border-gray-200 dark:border-white/10 hover:border-gray-900 dark:hover:border-white transition-colors shadow-sm dark:shadow-none"
                      >
                        <i className="ri-github-fill" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Right Column: Image Carousel ── */}
                <div className="order-1 lg:order-2 bg-gray-50 dark:bg-[#111116] w-full min-h-[300px]">
                  <ModalCarousel 
                    images={selectedProject.images || [selectedProject.image]} 
                    alt={selectedProject.title} 
                  />
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Swiper pagination overrides ─────────────────────────────── */}
      <style jsx global>{`
        .portfolio-swiper-wrapper .swiper-pagination-bullet {
          background: #62a92b;
          opacity: 0.35;
        }
        .portfolio-swiper-wrapper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
