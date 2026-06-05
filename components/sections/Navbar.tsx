"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/fuhrpark", label: "Fuhrpark" },
  { href: "/abschleppdienst", label: "Abschleppdienst" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/blog", label: "Aktuelles" },
];

function TruckLogoIcon() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="w-8 h-6" aria-hidden="true">
      <rect x="1" y="3" width="19" height="16" rx="2" fill="#1D4ED8" />
      <rect x="1" y="3" width="19" height="3" rx="2" fill="#3B82F6" />
      <path d="M19 3 L19 19 L31 19 L31 9 L26 3 Z" fill="#1E40AF" />
      <path d="M26 4 L30 4 L31 11 L26 11 Z" fill="#BAE6FD" opacity="0.6" />
      <rect x="30" y="12" width="1.5" height="4" rx="0.5" fill="#FDE68A" />
      <circle cx="7" cy="21" r="3" fill="#0F172A" stroke="#4B5563" strokeWidth="1" />
      <circle cx="15" cy="21" r="3" fill="#0F172A" stroke="#4B5563" strokeWidth="1" />
      <circle cx="26" cy="21" r="3" fill="#0F172A" stroke="#4B5563" strokeWidth="1" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={cn(
          "flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300",
          scrolled ? "glass-strong shadow-2xl shadow-black/50" : "glass"
        )}
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group"
          aria-label="MAGOTransport Startseite"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/40 group-hover:shadow-blue-700/40 transition-shadow">
            <TruckLogoIcon />
          </div>
          <div className="leading-none">
            <span className="font-bold text-white tracking-tight text-base block">MAGO</span>
            <span className="text-blue-400 text-[10px] font-semibold tracking-[0.2em] uppercase">Transport</span>
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <ul className="hidden lg:flex items-center gap-0.5" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 text-sm rounded-lg transition-colors duration-200 cursor-pointer",
                  isActive(link.href)
                    ? "text-white bg-blue-600/20 font-medium border border-blue-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA-Bereich */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Notfall-Hotline */}
          <a
            href="tel:+43800MAGO24"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 transition-all duration-200 cursor-pointer text-sm font-medium pulse-amber"
            aria-label="Notfall-Hotline anrufen"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden xl:inline">24h Notfall:</span>
            <span>+43 800 626 424</span>
          </a>
          <Link
            href="/anfrage"
            className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-blue-900/40 hover:shadow-blue-700/40"
          >
            Angebot anfordern
          </Link>
        </div>

        {/* Mobil-Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobil-Menü */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={open ? { opacity: 1, height: "auto", marginTop: 8 } : { opacity: 0, height: 0, marginTop: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden lg:hidden"
        aria-hidden={!open}
      >
        <div className="glass-strong rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2.5 text-sm rounded-xl transition-colors cursor-pointer",
                isActive(link.href)
                  ? "text-white bg-blue-600/20 font-medium border border-blue-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/8 mt-2 pt-3 flex flex-col gap-2">
            <a
              href="tel:+43800626424"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400 rounded-xl cursor-pointer"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              24h Notfall: +43 800 626 424
            </a>
            <Link
              href="/anfrage"
              className="px-4 py-2.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-200 text-center cursor-pointer"
            >
              Angebot anfordern
            </Link>
            <Link
              href="/kontakt"
              className="px-4 py-2.5 text-sm text-slate-400 hover:text-white glass border border-white/10 rounded-xl text-center cursor-pointer transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
