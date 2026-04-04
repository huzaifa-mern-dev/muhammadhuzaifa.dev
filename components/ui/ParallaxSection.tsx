'use client';
/**
 * components/ui/ParallaxSection.tsx
 *
 * SSR-safe GSAP + ScrollTrigger wrapper for complex parallax / reveal effects.
 * Uses the official @gsap/react `useGSAP` hook — the safest way to run GSAP
 * inside React: it automatically cleans up all tweens/ScrollTriggers on unmount.
 *
 * ── Why useGSAP instead of useEffect? ────────────────────────────────────────
 * – `useGSAP` registers tweens with the GSAP context, enabling automatic revert
 *   on unmount (no leaked ScrollTriggers even in Strict Mode / React 18).
 * – It is scoped to the `scope` ref so GSAP selectors only target children of
 *   the wrapper, not the whole document.
 *
 * ── SSR Safety ───────────────────────────────────────────────────────────────
 * `useGSAP` runs only after hydration (same as useEffect). GSAP itself also
 * guards against `window` access:
 *   gsap.registerPlugin(ScrollTrigger)  ← safe; GSAP checks the environment.
 * The "use client" directive ensures this module is never evaluated on the server.
 *
 * ── Usage examples ────────────────────────────────────────────────────────────
 *
 *   // 1. Simple parallax image
 *   <ParallaxSection yStart={60} yEnd={-60}>
 *     <img src="..." />
 *   </ParallaxSection>
 *
 *   // 2. Image reveal (clip-path sweep, like the old img-anim-right CSS)
 *   <ParallaxReveal direction="right">
 *     <img src="..." />
 *   </ParallaxReveal>
 *
 *   // 3. Counter / text that counts up on scroll (use useGSAP pattern directly)
 *   See the jsDoc example at the bottom of this file.
 */

import { useRef, type ReactNode } from 'react';
import { gsap }       from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP }    from '@gsap/react';

// Register plugins once — safe to call multiple times (GSAP deduplicates)
gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── ParallaxSection ──────────────────────────────────────────────────────────
interface ParallaxSectionProps {
  children: ReactNode;
  /** Starting Y offset in px (positive = down, element slides up into view) */
  yStart?: number;
  /** Ending Y offset in px */
  yEnd?: number;
  /** Starting X offset in px */
  xStart?: number;
  /** Ending X offset in px */
  xEnd?: number;
  /** Starting opacity */
  opacityStart?: number;
  /** Ending opacity */
  opacityEnd?: number;
  /** Starting scale (1 = normal) */
  scaleStart?: number;
  /** Ending scale */
  scaleEnd?: number;
  /** ScrollTrigger scrub value — true = 1x speed, number = speed multiplier */
  scrub?: boolean | number;
  /** Tailwind classes for the wrapper div */
  className?: string;
}

export default function ParallaxSection({
  children,
  yStart = 0,
  yEnd = 0,
  xStart = 0,
  xEnd = 0,
  opacityStart = 1,
  opacityEnd = 1,
  scaleStart = 1,
  scaleEnd = 1,
  scrub = 1,
  className = '',
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!innerRef.current) return;

      gsap.fromTo(
        innerRef.current,
        // from:
        { y: yStart, x: xStart, opacity: opacityStart, scale: scaleStart },
        // to:
        {
          y: yEnd,
          x: xEnd,
          opacity: opacityEnd,
          scale: scaleEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',   // when top of element hits bottom of viewport
            end: 'bottom top',     // when bottom of element leaves top of viewport
            scrub,                 // ties animation progress to scroll position
          },
        }
      );
    },
    { scope: containerRef } // ← GSAP cleans up automatically on unmount
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

// ─── ParallaxReveal ───────────────────────────────────────────────────────────
/**
 * Image / content reveal using a clip-path sweep — replicates the old
 * `img-anim-right` / `img-anim-left` CSS @keyframes but with ScrollTrigger
 * so it fires once exactly when the element scrolls into view.
 */
interface ParallaxRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  /** Delay in seconds before the reveal starts (useful for staggered reveals) */
  delay?: number;
  /** Reveal duration in seconds */
  duration?: number;
  className?: string;
}

export function ParallaxReveal({
  children,
  direction = 'right',
  delay = 0,
  duration = 0.9,
  className = '',
}: ParallaxRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const clipStart: Record<string, string> = {
    right: 'inset(0 100% 0 0)',
    left:  'inset(0 0 0 100%)',
    up:    'inset(100% 0 0 0)',
    down:  'inset(0 0 100% 0)',
  };

  const slideStart: Record<string, { x?: number; y?: number }> = {
    right: { x: 40 },
    left:  { x: -40 },
    up:    { y: 40 },
    down:  { y: -40 },
  };

  useGSAP(
    () => {
      const el = containerRef.current?.firstElementChild as HTMLElement | null;
      if (!el) return;

      gsap.fromTo(
        el,
        {
          clipPath: clipStart[direction],
          ...slideStart[direction],
          opacity: 0,
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// ─── useGSAP direct usage example (for custom inline animations) ──────────────
/**
 * @example
 *
 * // components/sections/HeroSection.tsx (or any "use client" section)
 * import { useRef }      from 'react';
 * import { gsap }        from 'gsap';
 * import { ScrollTrigger } from 'gsap/ScrollTrigger';
 * import { useGSAP }     from '@gsap/react';
 *
 * gsap.registerPlugin(ScrollTrigger, useGSAP);
 *
 * export default function HeroSection() {
 *   const sectionRef = useRef<HTMLElement>(null);
 *
 *   useGSAP(
 *     () => {
 *       // All GSAP selectors here are scoped to sectionRef
 *       gsap.from('.hero-title', {
 *         y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
 *       });
 *
 *       // Parallax on the hero image
 *       gsap.to('.hero-image', {
 *         y: -80,
 *         ease: 'none',
 *         scrollTrigger: {
 *           trigger: sectionRef.current,
 *           start: 'top top',
 *           end:   'bottom top',
 *           scrub: true,
 *         },
 *       });
 *     },
 *     { scope: sectionRef }   // ← prevents window leaks, auto-cleanup on unmount
 *   );
 *
 *   return (
 *     <section ref={sectionRef} id="about">
 *       <h1 className="hero-title">Hello</h1>
 *       <img  className="hero-image" src="/hero.jpg" />
 *     </section>
 *   );
 * }
 */
