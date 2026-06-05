"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  badgeColor?: "sky" | "purple" | "orange" | "green";
  title: React.ReactNode;
  description?: string;
  className?: string;
  orbColor?: "blue" | "purple" | "orange" | "green";
}

const badgeColorMap: Record<string, string> = {
  sky: "text-sky-400 border-sky-500/20",
  purple: "text-purple-400 border-purple-500/20",
  orange: "text-orange-400 border-orange-500/20",
  green: "text-green-400 border-green-500/20",
};

export function PageHero({
  badge,
  badgeColor = "sky",
  title,
  description,
  className,
  orbColor = "blue",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-40 pb-20 overflow-hidden text-center",
        className
      )}
      aria-label="Page header"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(14,165,233,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <GradientOrb
        color={orbColor}
        size="xl"
        className="-top-32 left-1/2 -translate-x-1/2 opacity-15"
        animate={false}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <span
              className={cn(
                "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 glass rounded-full border",
                badgeColorMap[badgeColor]
              )}
            >
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
