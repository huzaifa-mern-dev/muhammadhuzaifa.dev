"use client";

/**
 * components/ui/Preloader.tsx
 *
 * Full-screen overlay that fades out on mount.
 * Unmounts from the DOM completely after the animation so it
 * never blocks interaction or accessibility.
 */

import { useEffect, useState } from "react";

export default function Preloader() {
  // Two-stage state:
  // 1. `fading` → triggers the CSS opacity transition
  // 2. `hidden` → removes the element from the DOM entirely
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start the fade after a short delay so the logo is visible briefly
    const fadeTimer = setTimeout(() => setFading(true), 800);
    // Remove from DOM after fade is complete (matches transition duration below)
    const hideTimer = setTimeout(() => setHidden(true), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[9999] flex items-center justify-center",
        "bg-[#272730] dark:bg-[#272730]",
        "transition-opacity duration-500 ease-in-out",
        fading ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* Animated logo mark */}
      <div className="flex flex-col items-center gap-5 select-none">
        {/* Spinning ring SVG */}
        <div className="relative w-16 h-16">
          {/* Static outer circle */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#3b3b41"
              strokeWidth="3"
            />
          </svg>
          {/* Spinning accent arc */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            viewBox="0 0 64 64"
            fill="none"
            style={{ animationDuration: "1.1s" }}
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#62a92b"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="40 135"
            />
          </svg>

          {/* Logo letter in the centre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#62a92b] font-sans font-bold text-xl leading-none">
              H
            </span>
          </div>
        </div>

        {/* Brand name */}
        <p className="text-white font-sans font-light text-sm tracking-[0.25em] uppercase">
          Huzaifa<span className="text-[#62a92b]">.dev</span>
        </p>
      </div>
    </div>
  );
}
