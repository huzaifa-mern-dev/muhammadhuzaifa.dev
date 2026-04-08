"use client";

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

  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isComplete]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      },
    });

    const counter = { val: 0 };

    tl.to(counter, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(counter.val).toString();
        }
      },
    })
    .to(contentRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power3.inOut",
    }, "+=0.2")
    .to(".preloader-slice", {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.inOut",
    });

  }, { scope: containerRef });

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-transparent pointer-events-none"
    >
      <div className="absolute inset-0 flex pointer-events-auto">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="preloader-slice w-1/5 h-full bg-primary-2"
          />
        ))}
      </div>

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
