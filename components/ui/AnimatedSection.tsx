'use client';
/**
 * components/ui/AnimatedSection.tsx
 *
 * Reusable scroll-triggered animation wrapper using Framer Motion.
 * Replaces AOS / WOW.js — pure React, SSR-safe, no window.addEventListener setup.
 *
 * Usage:
 *   <AnimatedSection variant="fade-up" delay={0.1}>
 *     <MyCard />
 *   </AnimatedSection>
 *
 * Framer Motion's `whileInView` only fires in the browser so there is no
 * "window is not defined" risk even in App Router Server Components that
 * import Client Components.
 */

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

// ─── Animation Presets ───────────────────────────────────────────────────────

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up';

const DISTANCE = 32; // px offset for directional variants

const variantMap: Record<AnimationVariant, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: DISTANCE },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -DISTANCE },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: DISTANCE },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: -DISTANCE },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  'zoom-out': {
    hidden: { opacity: 0, scale: 1.06 },
    visible: { opacity: 1, scale: 1 },
  },
  'flip-up': {
    hidden: { opacity: 0, rotateX: 20, y: DISTANCE },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

// ─── Props ───────────────────────────────────────────────────────────────────

interface AnimatedSectionProps
  extends Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView' | 'animate'> {
  children: ReactNode;
  /** Which preset animation to use. Default: 'fade-up' */
  variant?: AnimationVariant;
  /** Seconds to delay the animation start. Useful for stagger sequences. */
  delay?: number;
  /** Animation duration in seconds. Default: 0.55 */
  duration?: number;
  /**
   * Fraction of the element that must be visible before triggering (0–1).
   * Default: 0.15 (fires when 15% of the element is in view).
   */
  threshold?: number;
  /** Whether to animate only the first time it enters view. Default: true */
  once?: boolean;
  /** Use a semantic element other than div */
  as?: 'div' | 'section' | 'article' | 'aside' | 'li' | 'span';
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function AnimatedSection({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.55,
  threshold = 0.15,
  once = true,
  as = 'div',
  className,
  ...rest
}: AnimatedSectionProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // ease-out-quart — buttery smooth
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// ─── Stagger Container ───────────────────────────────────────────────────────
/**
 * Wraps a group of <AnimatedSection> children and staggers them automatically.
 * Each direct child will be delayed by `staggerDelay` seconds.
 *
 * Usage:
 *   <StaggerContainer staggerDelay={0.1}>
 *     <AnimatedSection><Card /></AnimatedSection>
 *     <AnimatedSection><Card /></AnimatedSection>
 *   </StaggerContainer>
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className,
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
