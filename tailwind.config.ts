import type { Config } from "tailwindcss";

const config: Config = {
  // ─── Dark Mode ────────────────────────────────────────────────────────────
  // Tailwind will activate dark styles when the `dark` class is on <html>.
  // next-themes handles adding/removing this class with SSR FOUC prevention.
  darkMode: "class",

  // ─── Content Paths ────────────────────────────────────────────────────────
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ─── Colors ─────────────────────────────────────────────────────────
      // Mapped from the 94-variable :root block in main.css.
      // Convention: light value is DEFAULT, dark value is the `dark:` variant.
      // Usage: text-primary-2  →  #62a92b (light) / text-primary-2 dark:... = #62a92b
      colors: {
        // ── Brand / Accent ──────────────────────────────────────────
        "primary-1": {
          DEFAULT: "#6e4ef2", // --tc-theme-primary-1
          dark: "#6e4ef2", // --tc-theme-dark-primary-1
        },
        "primary-2": {
          DEFAULT: "#62a92b", // --tc-theme-primary-2  (light mode)
          dark: "#62a92b", // --tc-theme-dark-primary-2 (synced)
        },
        "primary-3": {
          DEFAULT: "#be6895", // --tc-theme-primary-3
          dark: "#fcc6e2", // --tc-theme-dark-primary-3
        },
        "secondary-1": {
          DEFAULT: "#f1f2f3", // --tc-theme-secondary-1
        },
        "secondary-2": {
          DEFAULT: "#f778ba", // --tc-theme-dark-secondary-2
        },

        // ── Neutral Scale ────────────────────────────────────────────
        // Light: --tc-neutral-*  |  Dark aliases: --tc-neutral-dark-*
        neutral: {
          0: "#333a32", // --tc-neutral-0
          100: "#272730", // --tc-neutral-100
          200: "#565662", // --tc-neutral-200
          300: "#5e5e65", // --tc-neutral-300
          400: "#6d6d72", // --tc-neutral-400
          500: "#858587", // --tc-neutral-500
          600: "#969698", // --tc-neutral-600
          700: "#b2b2ba", // --tc-neutral-700
          800: "#c5c5ca", // --tc-neutral-800
          900: "#edeaf8", // --tc-neutral-900
          1000: "#ffffff", // --tc-neutral-1000
        },

        // ── Background Surfaces ──────────────────────────────────────
        // Light bg:  DEFAULT  |  Dark bg: suffix -dark
        bg: {
          1: { DEFAULT: "#edeaf8", dark: "#24242d" }, // --tc-bg-1 / --tc-bg-dark-1
          2: { DEFAULT: "#6e4ef2", dark: "#272730" }, // --tc-bg-2 / --tc-bg-dark-2
          3: { DEFAULT: "#ffffff", dark: "#272730" }, // --tc-bg-3 / --tc-bg-dark-3
          4: { DEFAULT: "#fbf8f9", dark: "#333a32" }, // --tc-bg-4 / --tc-bg-dark-4
          5: { DEFAULT: "#e8e8e8", dark: "#333a32" }, // --tc-bg-5 / --tc-bg-dark-5
          6: { DEFAULT: "#f6f4fd", dark: "#2a2a31" }, // --tc-bg-6 / --tc-bg-dark-6
        },

        // ── Shorthand semantic tokens (most used in index.html) ──────
        background: {
          DEFAULT: "#ffffff", // light page background
          dark: "#272730", // dark page background
        },
        surface: {
          DEFAULT: "#ffffff", // card/panel surface (light)
          dark: "#272730", // card/panel surface (dark)
        },

        // ── System / Status ──────────────────────────────────────────
        success: { DEFAULT: "#64e1b0", dark: "#10b983" },
        info: { DEFAULT: "#5577a7", dark: "#0f172e" },
        warning: { DEFAULT: "#ffd45d", dark: "#fcd34e" },
        danger: { DEFAULT: "#ec4040", dark: "#fca5a7" },
        muted: { DEFAULT: "#9ca3af", dark: "#9ca3af" },

        // ── Border ───────────────────────────────────────────────────
        border: {
          DEFAULT: "#c0dcbc", // --tc-border-1
          dark: "#3b413d", // --tc-border-dark-1
        },

        // ── TODO: Add remaining custom variables here ─────────────────
        // Copy any additional entries from your main.css :root block
        // that aren't listed above (e.g. dark-secondary-1/3, specific grays).
      },

      // ─── Font Families ───────────────────────────────────────────────────
      fontFamily: {
        // Default sans now rigidly mapped to our Satoshi variable!
        sans: ["var(--font-satoshi)", "sans-serif"],
        // Google Fonts — loaded via next/font/google in layout.tsx
        urbanist: ["var(--font-sans)", "sans-serif"],
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
        playfair: ["var(--font-playfair)", "serif"],
      },

      // ─── Font Sizes (mapped from --tc-fs-* and --tc-ds-*) ───────────────
      fontSize: {
        "fs-7": "14px", // --tc-fs-7
        "fs-6": "16px", // --tc-fs-6 (body)
        "fs-5": "19px", // --tc-fs-5
        "fs-4": "23px", // --tc-fs-4
        "fs-3": "28px", // --tc-fs-3
        "fs-2": "33px", // --tc-fs-2
        "fs-1": "40px", // --tc-fs-1
        "ds-3": "64px", // --tc-ds-3
        "ds-2": "72px", // --tc-ds-2
        "ds-1": "80px", // --tc-ds-1
      },

      // ─── Background Image / Gradients ────────────────────────────────────
      backgroundImage: {
        "linear-1": "linear-gradient(90deg, #6d4df2 0%, #8c71ff 100%)",
        "linear-4": "linear-gradient(-90deg, #62a92b 0%, #62a92b 100%)",
        "linear-4-dark": "linear-gradient(-90deg, #62a92b 0%, #62a92b 100%)",
        "linear-5":
          "linear-gradient(-90deg, rgba(31, 31, 36, 0.45) 0%, rgb(31, 31, 36) 100%)",
        // TODO: Add linear-2, linear-3, linear-5-dark from main.css
      },

      // ─── Box Shadow ──────────────────────────────────────────────────────
      boxShadow: {
        "shadow-1": "0 13px 35px -12px rgba(35, 35, 35, 0.1)",
        "shadow-2": "0px 0px 25px 0px rgba(0, 0, 0, 0.08)",
      },

      // ─── Keyframe Animations ─────────────────────────────────────────────
      // The @keyframes bodies are defined in globals.css.
      // Here we just wire up the shorthand animation utility classes.
      animation: {
        // Typewriter cursor blink + typing sweep
        typewriter: "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        // Flicker cursor effect on hero heading underscore
        flicker: "flicker 800ms infinite",
        // Infinite marquee scrollers (skills / hero tech icons)
        "marquee-left": "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 20s linear infinite",
        // Rotating border gradient on cards
        "border-rotate": "border-rotate 8s linear infinite",
        // Floating up-down bob
        "float-y": "float-y 3s ease-in-out infinite alternate",
        // Rotating spinner (used on decorative circles)
        rotateme: "rotateme 10s linear infinite",
        // Zoom-in on scroll reveal
        "zoom-in": "zoom-in 0.5s ease-out forwards",
        // Fade in slide up
        "fade-up": "fadeInUp2 0.5s ease-out both",
      },

      // ─── Keyframe Timing Functions ───────────────────────────────────────
      keyframes: {
        // Typewriter sweep
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "orange" },
        },
        // Cursor flicker
        flicker: {
          "0%": { color: "transparent" },
          "50%": { color: "var(--tw-color-neutral-0, #333a32)" },
          "100%": { color: "transparent" },
        },
        // Marquee: duplicate the list and scroll left by 50%
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        // Rotating conic border
        "border-rotate": {
          to: { "--angle": "360deg" } as Record<string, string>,
        },
        // Float Y bob
        "float-y": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        // Spin in place
        rotateme: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        // Zoom in
        "zoom-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        // Fade up
        fadeInUp2: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // ─── Spacing Extras ──────────────────────────────────────────────────
      // Custom spacing values used heavily in index.html beyond Tailwind defaults
      spacing: {
        "7": "1.75rem",
        "8": "2rem",
        "30": "7.5rem", // py-30 → padding-top/bottom: 7.5rem
        "60": "60px", // py-60 (60px not rem-based in original)
        "130": "130px", // pt-130
        // TODO: Add more from your section padding audit
      },

      // ─── Z-Index ─────────────────────────────────────────────────────────
      zIndex: {
        "999": "999",
        "1000": "1000",
      },
    },
  },

  plugins: [],
};

export default config;
