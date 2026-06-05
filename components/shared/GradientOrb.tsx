"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "blue" | "orange" | "purple" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const colorMap = {
  blue: "bg-sky-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
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
  animate = true,
}: GradientOrbProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 pointer-events-none",
        colorMap[color],
        sizeMap[size],
        className
      )}
      animate={
        animate
          ? {
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.22, 0.15],
            }
          : undefined
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
