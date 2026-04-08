"use client";

import { useEffect, useState, useCallback } from "react";

const SIZE = 40;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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
    calculateScroll();
    return () => window.removeEventListener("scroll", calculateScroll);
  }, [calculateScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
      >
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

      <i className="ri-arrow-up-line text-white text-base z-10" />
    </button>
  );
}
