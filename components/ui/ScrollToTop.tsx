"use client";

/**
 * components/ui/ScrollToTop.tsx
 *
 * Fixed bottom-right button with an SVG progress ring that fills up
 * as the user scrolls down the page. Clicking it scrolls smoothly back to top.
 * Hidden while at the very top of the page.
 */

import { useEffect, useState, useCallback } from "react";

// Square path dimensions — matches the 40×40 viewBox from the original site
const SIZE = 40;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2; // 18.75
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ≈117.8

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const calculateScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (docHeight <= 0) return;

    const progress = Math.min(scrollTop / docHeight, 1);
    setScrollProgress(progress);
    setVisible(scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll, { passive: true });
    calculateScroll(); // run once on mount
    return () => window.removeEventListener("scroll", calculateScroll);
  }, [calculateScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // dashoffset = full circumference means 0% fill,
  // 0 means 100% fill
  const dashOffset = CIRCUMFERENCE * (1 - scrollProgress);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-[999] w-12 h-12",
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      {/* Progress ring SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
      >
        {/* Track (background ring) */}
        <rect
          x={STROKE / 2}
          y={STROKE / 2}
          width={SIZE - STROKE}
          height={SIZE - STROKE}
          rx={8}
          stroke="#3b3b41"
          strokeWidth={STROKE}
          fill="#272730"
        />
        {/* Progress ring (accent colour) */}
        <rect
          x={STROKE / 2}
          y={STROKE / 2}
          width={SIZE - STROKE}
          height={SIZE - STROKE}
          rx={8}
          stroke="#62a92b"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
      </svg>

      {/* Arrow icon */}
      <i className="ri-arrow-up-line text-white text-base z-10" />
    </button>
  );
}
