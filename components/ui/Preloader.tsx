"use client";

/**
 * components/ui/Preloader.tsx
 *
 * Awwwards-style Webflow slice preloader logic powered by GSAP.
 * Locks the body scroll while active, ticks a counter to 100%,
 * fades out the logo, and sequentially slices the background out of the viewport.
 */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Lock scrolling while preloader is active, unlock when complete or unmounted
  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
    } else {
      // Must clear it exactly
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isComplete]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Timeline configuration
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      },
    });

    const counter = { val: 0 };

    // Phase 1: Animate the counter from 0 to 100 over ~2 seconds
    tl.to(counter, {
      val: 100,
      duration: 2.2, // Smooth wait time
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          // Update the DOM counter dynamically exactly matching the easing curve
          counterRef.current.innerText = Math.round(counter.val).toString();
        }
      },
    })
    // Phase 2: Fade out the Logo and Counter text quickly with a subtle lift
    .to(contentRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power3.inOut",
    }, "+=0.2") // Trigger 0.2s after hitting 100%
    // Phase 3: Animate the 5 background slices sliding upwards (waterfall slice exit)
    .to(".preloader-slice", {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.1, // Stagger delays the exit of each slice slightly
      ease: "power4.inOut",
    });

  }, { scope: containerRef });

  // Completely remove from DOM once the sequence is visually cleared
  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-transparent pointer-events-none"
    >
      {/* Slices Container - blocks interactions while animating */}
      <div className="absolute inset-0 flex pointer-events-auto">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="preloader-slice w-1/5 h-full bg-primary-2" // Enforced deep dark theme
          />
        ))}
      </div>

      {/* Foreground Brand / Counter */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
          Huzaifa<span className="text-white">.dev</span>
        </h1>
        
        <div className="text-white text-lg md:text-xl flex items-center justify-center tracking-widest mt-2 overflow-hidden">
          <span ref={counterRef} className="w-[3ch] text-right">0</span>
          <span className="text-white opacity-80">%</span>
        </div>
      </div>
    </div>
  );
}
