"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TruckSVGProps {
  className?: string;
  width?: number;
}

export function TruckSVG({ className = "", width = 320 }: TruckSVGProps) {
  return (
    <svg
      viewBox="0 0 340 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      className={className}
      aria-label="MAGOTransport LKW"
      role="img"
    >
      {/* === ANHÄNGER / TRAILER === */}
      <rect x="1" y="8" width="210" height="68" rx="5" fill="#0B1E3D" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="5" y="13" width="201" height="58" rx="3" fill="#091629" />

      {/* Dekorstreifen oben/unten */}
      <rect x="1" y="8" width="210" height="8" rx="5" fill="#1D4ED8" />
      <rect x="1" y="68" width="210" height="8" rx="5" fill="#1D4ED8" />

      {/* MAGO-Branding */}
      <text x="106" y="44" textAnchor="middle" fill="#3B82F6" fontSize="22" fontWeight="800"
        fontFamily="system-ui, sans-serif" letterSpacing="-0.5">MAGO</text>
      <text x="106" y="58" textAnchor="middle" fill="#60A5FA" fontSize="7.5"
        fontFamily="system-ui, sans-serif" letterSpacing="3.5">TRANSPORT</text>

      {/* Hintere Tür */}
      <rect x="200" y="8" width="3" height="68" fill="#1D4ED8" />
      <line x1="201" y1="42" x2="203" y2="42" stroke="#2563EB" strokeWidth="1.5" />

      {/* Anhänger-Kupplung */}
      <rect x="208" y="42" width="16" height="12" rx="3" fill="#334155" />
      <rect x="211" y="44" width="10" height="8" rx="2" fill="#475569" />

      {/* === FÜHRERHAUS / CAB === */}
      <path d="M221 8 L221 76 L336 76 L336 36 L307 8 Z" fill="#1E3A8A" />
      {/* Schatteneffekt Cab-Seite */}
      <path d="M221 8 L255 8 L255 76 L221 76 Z" fill="#1D4ED8" opacity="0.3" />

      {/* Windschutzscheibe */}
      <path d="M306 11 L332 11 L334 43 L306 43 Z" fill="#BAE6FD" opacity="0.55" rx="2" />
      <line x1="319" y1="11" x2="319" y2="43" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.6" />

      {/* Fahrertür */}
      <rect x="231" y="24" width="50" height="42" rx="3" fill="#162D4A" stroke="#2563EB" strokeWidth="0.5" />
      {/* Türfenster */}
      <rect x="236" y="28" width="20" height="14" rx="2" fill="#BAE6FD" opacity="0.35" />
      {/* Türgriff */}
      <rect x="273" y="47" width="4" height="9" rx="1.5" fill="#60A5FA" />

      {/* Seitenstreifen Cab */}
      <rect x="221" y="8" width="115" height="6" rx="3" fill="#1D4ED8" />
      <rect x="221" y="70" width="115" height="6" rx="3" fill="#1D4ED8" />

      {/* Außenspiegel */}
      <rect x="328" y="19" width="13" height="8" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
      <line x1="331" y1="27" x2="335" y2="27" stroke="#334155" strokeWidth="1" />

      {/* Scheinwerfer */}
      <rect x="331" y="38" width="5" height="14" rx="2" fill="#FDE68A" />
      <rect x="330" y="37" width="7" height="16" rx="2" fill="#FDE68A" opacity="0.3" style={{ filter: "blur(4px)" }} />

      {/* Kühlergrill */}
      <rect x="332" y="22" width="4" height="16" rx="1" fill="#0F172A" stroke="#334155" strokeWidth="0.5" />
      {[0, 3, 6, 9, 12].map((y) => (
        <line key={y} x1="332" y1={22 + y} x2="336" y2={22 + y} stroke="#1E3A5F" strokeWidth="0.5" />
      ))}

      {/* Auspuff */}
      <rect x="292" y="0" width="7" height="14" rx="3" fill="#374151" />
      <ellipse cx="295" cy="0" rx="3.5" ry="2" fill="#4B5563" />

      {/* Trittstufe */}
      <rect x="221" y="72" width="90" height="4" rx="1.5" fill="#0F172A" />

      {/* === RÄDER === */}
      {/* Anhänger vorne */}
      <circle cx="45" cy="82" r="13" fill="#0F172A" stroke="#374151" strokeWidth="2.5" />
      <circle cx="45" cy="82" r="7" fill="#1F2937" />
      <circle cx="45" cy="82" r="3" fill="#374151" />
      {/* Anhänger hinten */}
      <circle cx="85" cy="82" r="13" fill="#0F172A" stroke="#374151" strokeWidth="2.5" />
      <circle cx="85" cy="82" r="7" fill="#1F2937" />
      <circle cx="85" cy="82" r="3" fill="#374151" />
      {/* Cab vorne */}
      <circle cx="262" cy="82" r="13" fill="#0F172A" stroke="#374151" strokeWidth="2.5" />
      <circle cx="262" cy="82" r="7" fill="#1F2937" />
      <circle cx="262" cy="82" r="3" fill="#374151" />
      {/* Cab hinten */}
      <circle cx="300" cy="82" r="13" fill="#0F172A" stroke="#374151" strokeWidth="2.5" />
      <circle cx="300" cy="82" r="7" fill="#1F2937" />
      <circle cx="300" cy="82" r="3" fill="#374151" />

      {/* Bodenschatten */}
      <ellipse cx="170" cy="95" rx="160" ry="4.5" fill="rgba(0,0,0,0.5)" />
    </svg>
  );
}

interface AnimatedTruckProps {
  className?: string;
}

export function AnimatedTruck({ className = "" }: AnimatedTruckProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`relative ${className}`}>
        <TruckSVG width={340} className="opacity-80" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        initial={{ x: "-120%" }}
        animate={{ x: "120vw" }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 4,
        }}
        className="flex items-end"
      >
        <TruckSVG width={340} className="opacity-90 drop-shadow-2xl" />
      </motion.div>
    </div>
  );
}

/** Kleine Variante für Sektions-Dekorationen */
export function MiniTruck({ className = "" }: AnimatedTruckProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        initial={{ x: "-110%" }}
        animate={{ x: "110%" }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2,
        }}
        style={shouldReduceMotion ? { animation: "none" } : {}}
      >
        <TruckSVG width={220} className="opacity-60" />
      </motion.div>
    </div>
  );
}
