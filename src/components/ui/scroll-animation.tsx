"use client";

import { motion, useInView, UseInViewOptions, Variant } from "framer-motion";
import { useRef } from "react";

type AnimationType = 
  | "fade-in"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "none";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: UseInViewOptions;
}

const animations: Record<string, { hidden: Variant; visible: Variant }> = {
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "none": {
    hidden: {},
    visible: {},
  },
};

export function ScrollAnimation({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 0.5,
  className,
  viewport = { once: true, margin: "-100px" },
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const selectedAnimation = animations[animation] || animations["slide-up"];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: selectedAnimation.hidden,
        visible: {
          ...selectedAnimation.visible,
          transition: {
            duration,
            delay,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
