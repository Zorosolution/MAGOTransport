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
  sky: "text-blue-700 bg-blue-50 border-blue-100",
  purple: "text-indigo-700 bg-indigo-50 border-indigo-100",
  orange: "text-amber-700 bg-amber-50 border-amber-100",
  green: "text-emerald-700 bg-emerald-50 border-emerald-100",
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
        "relative pt-40 pb-20 overflow-hidden text-center bg-muted/40",
        className
      )}
      aria-label="Seitenkopf"
    >
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(29,78,216,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <GradientOrb
        color={orbColor}
        size="xl"
        className="-top-40 left-1/2 -translate-x-1/2 opacity-[0.10]"
        animate={false}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <span
              className={cn(
                "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border",
                badgeColorMap[badgeColor]
              )}
            >
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* sanfter Übergang nach unten */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
