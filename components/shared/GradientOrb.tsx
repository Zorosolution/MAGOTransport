"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "blue" | "orange" | "purple" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

// Sehr dezente, helle Farbschleier – Premium-Mesh à la Stripe, kein Neon
const colorMap = {
  blue: "bg-blue-400",
  orange: "bg-amber-300",
  purple: "bg-indigo-300",
  green: "bg-emerald-300",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[600px] h-[600px]",
};

export function GradientOrb({
  className,
  color = "blue",
  size = "lg",
  animate = false,
}: GradientOrbProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full blur-3xl opacity-[0.12] pointer-events-none",
        colorMap[color],
        sizeMap[size],
        className
      )}
      animate={shouldAnimate ? { scale: [1, 1.06, 1] } : undefined}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
