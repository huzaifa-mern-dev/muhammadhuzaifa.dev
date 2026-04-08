'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up';

const DISTANCE = 32;

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

interface AnimatedSectionProps
  extends Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView' | 'animate'> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside' | 'li' | 'span';
}

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
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

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
