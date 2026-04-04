'use client';
/**
 * components/sections/PortfolioSection.tsx — Interactive Client Component
 *
 * Features:
 *  - Swiper carousel with coverflow effect, loop, and autoplay
 *  - yet-another-react-lightbox for full-screen image zoom on click
 *  - Tech tag pills per project
 *  - Live / GitHub link buttons
 *  - Full light + dark theme awareness
 */

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';

// Swiper Core CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Lightbox CSS
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import { projects } from '@/lib/data/projects';

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
    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-500 dark:text-[#636366] border border-gray-200 dark:border-white/[0.07]">
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxOpen,  setLightboxOpen]  = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const filterCategories = ["All", "E-commerce", "WordPress", "Custom Code"];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'WordPress') return p.technologies.includes('WordPress');
    if (activeTab === 'E-commerce') return p.id === 'leatherstride' || p.description.toLowerCase().includes('ecommerce');
    if (activeTab === 'Custom Code') return !p.technologies.includes('WordPress');
    return true;
  });

  // Build the slides array for the lightbox (yarl expects { src, title, description })
  const slides = filteredProjects.map((p) => ({
    src: p.image,
    title: `${p.title}${p.subtitle ? ` — ${p.subtitle}` : ''}`,
    description: p.technologies.join(' · '),
  }));

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Heading ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <SectionLabel />
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl font-bold font-sans text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Featured{' '}
            <span className="text-primary-2 dark:text-primary-2">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-sans font-normal text-base max-w-xl mx-auto leading-relaxed">
            A curated selection of work spanning full-stack apps, landing pages,
            and SaaS products. Click any card to zoom in.
          </p>
        </div>

        {/* ── Filter Tabs ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                if (swiperRef.current) {
                  swiperRef.current.slideTo(0);
                }
              }}
              className={[
                "px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-200",
                activeTab === category
                  ? "bg-primary-2 text-white shadow-md shadow-primary-2/20 dark:text-[#1e1e27] dark:shadow-none"
                  : "bg-white dark:bg-white/[0.03] text-gray-600 dark:text-[#8f8f92] border border-gray-200 dark:border-white/[0.08] hover:border-primary-2/50 hover:text-primary-2",
              ].join(" ")}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Swiper Carousel ─────────────────────────────────────────────── */}
        <div className="relative portfolio-swiper-wrapper">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Keyboard]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            keyboard={{ enabled: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
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
              0:    { slidesPerView: 1.1 },
              640:  { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
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
                      'group relative rounded-2xl overflow-hidden border cursor-pointer select-none',
                      'bg-white dark:bg-[#1e1e27]',
                      'border-gray-200/70 dark:border-white/[0.07]',
                      'shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-none',
                      'transition-all duration-500',
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-[0.96] opacity-70',
                    ].join(' ')}
                    onClick={() => openLightbox(i)}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`View ${project.title} in fullscreen`}
                    onKeyDown={(e) => {
                      if ((e.key === 'Enter' || e.key === ' ') && isActive) {
                        openLightbox(i);
                      }
                    }}
                  >
                    {/* ── Image ─────────────────────────────────────────── */}
                    <div className="relative w-full aspect-[16/12] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 60vw, 40vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={i < 3}
                      />

                      {/* Gradient overlay — appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                              aria-label={`View ${project.title} live site`}
                            >
                              <i className="ri-external-link-line text-sm" />
                              Live
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <i className="ri-github-line text-sm" />
                              GitHub
                            </a>
                          )}
                          <button
                            onClick={(e) => { e.stopPropagation(); openLightbox(i); }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-2/20 backdrop-blur-sm border border-primary-2/30 text-primary-2 dark:text-primary-2 text-xs font-medium hover:bg-primary-2/30 transition-colors"
                            aria-label="Zoom project image"
                          >
                            <i className="ri-zoom-in-line text-sm" />
                            Zoom
                          </button>
                        </div>
                      </div>

                      {/* Zoom hint icon top-right */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="ri-fullscreen-line text-white text-sm" />
                      </div>
                    </div>

                    {/* ── Card body ─────────────────────────────────────── */}
                    <div className="p-5 text-left">
                      <div className="mb-3">
                        <h3 className="font-sans font-bold text-gray-900 dark:text-white text-lg md:text-xl leading-snug group-hover:text-primary-2 dark:group-hover:text-primary-2 transition-colors duration-200">
                          {project.title}
                          {project.subtitle && (
                            <span className="block text-xs font-normal text-gray-400 dark:text-[#636366] mt-0.5">
                              {project.subtitle}
                            </span>
                          )}
                        </h3>
                      </div>

                      <p className="text-base font-sans font-normal text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 border-t border-gray-100 dark:border-white/[0.05] pt-3">
                        {project.technologies.map((tech) => (
                          <TechTag key={tech} label={tech} />
                        ))}
                      </div>
                    </div>

                    {/* Active slide accent line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-2 dark:via-primary-2 to-transparent" />
                    )}
                  </article>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── Custom Nav Buttons ───────────────────────────────────────── */}
          <button
            className="pf-btn-prev absolute left-0 top-[38%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-[#1e1e27] border border-gray-200 dark:border-white/[0.08] shadow-md flex items-center justify-center text-gray-500 dark:text-[#8f8f92] hover:border-primary-2/50 hover:text-primary-2 transition-all duration-200 disabled:opacity-30"
            aria-label="Previous project"
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <button
            className="pf-btn-next absolute right-0 top-[38%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-[#1e1e27] border border-gray-200 dark:border-white/[0.08] shadow-md flex items-center justify-center text-gray-500 dark:text-[#8f8f92] hover:border-primary-2/50 hover:text-primary-2 transition-all duration-200 disabled:opacity-30"
            aria-label="Next project"
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>
        </div>

        {/* ── Project Count ───────────────────────────────────────────────── */}
        <p className="text-center text-xs font-mono text-gray-300 dark:text-[#3b3b41] mt-2">
          {filteredProjects.length} projects · click to expand
        </p>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Captions]}
        zoom={{ maxZoomPixelRatio: 3 }}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.92)' },
        }}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
      />

      {/* ── Swiper pagination dot overrides ─────────────────────────────── */}
      <style jsx global>{`
        .portfolio-swiper-wrapper .swiper-pagination-bullet {
          background: #62a92b;
          opacity: 0.35;
        }
        .dark .portfolio-swiper-wrapper .swiper-pagination-bullet {
          background: #62a92b;
          opacity: 0.35;
        }
        .portfolio-swiper-wrapper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
