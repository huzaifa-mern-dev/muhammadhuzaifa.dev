'use client';

import { useRef, type ReactNode } from 'react';
import { gsap }       from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP }    from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ParallaxSectionProps {
  children: ReactNode;
  yStart?: number;
  yEnd?: number;
  xStart?: number;
  xEnd?: number;
  opacityStart?: number;
  opacityEnd?: number;
  scaleStart?: number;
  scaleEnd?: number;
  scrub?: boolean | number;
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
        { y: yStart, x: xStart, opacity: opacityStart, scale: scaleStart },
        {
          y: yEnd,
          x: xEnd,
          opacity: opacityEnd,
          scale: scaleEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',  
            end: 'bottom top',    
            scrub,                
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

interface ParallaxRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
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

