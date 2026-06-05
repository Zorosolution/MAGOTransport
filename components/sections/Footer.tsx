"use client";

import Link from "next/link";
import { Zap, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TruckLogo() {
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

const footerLinks = {
  Leistungen: [
    { label: "Nationale Transporte", href: "/leistungen#national" },
    { label: "Internationale Transporte", href: "/leistungen#international" },
    { label: "Expresslieferungen", href: "/leistungen#express" },
    { label: "Lagerlogistik", href: "/leistungen#lager" },
    { label: "Abschleppdienst", href: "/abschleppdienst" },
    { label: "Pannenhilfe", href: "/abschleppdienst#pannenhilfe" },
  ],
  Unternehmen: [
    { label: "Über MAGOTransport", href: "/ueber-uns" },
    { label: "Fuhrpark", href: "/fuhrpark" },
    { label: "Aktuelles", href: "/blog" },
    { label: "Karriere", href: "/ueber-uns#karriere" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "FAQ", href: "/faq" },
  ],
  Rechtliches: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
    { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
  ],
};

const socialLinks = [
  { label: "X (Twitter)", icon: XIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

const kontaktInfo = [
  { icon: Mail,   text: "office@magotransport.at",  href: "mailto:office@magotransport.at" },
  { icon: Phone,  text: "+43 800 626 424",           href: "tel:+43800626424" },
  { icon: Phone,  text: "Notfall: +43 676 123 456",  href: "tel:+43676123456" },
  { icon: MapPin, text: "Logistikstraße 1, 1220 Wien, Österreich", href: "#" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) { setState("error"); return; }
    setState("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter Anmeldung">
      <p className="text-white text-sm font-semibold mb-1">Newsletter</p>
      <p className="text-slate-500 text-xs mb-3">Brancheninfos & Neuigkeiten von MAGOTransport.</p>
      {state === "success" ? (
        <p className="text-green-400 text-sm py-2">✓ Erfolgreich angemeldet!</p>
      ) : (
        <div className="flex gap-2">
          <label htmlFor="nl-email" className="sr-only">E-Mail-Adresse</label>
          <input
            id="nl-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
            placeholder="ihre@email.at"
            className="flex-1 min-w-0 px-3 py-2 text-sm glass border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            aria-describedby={state === "error" ? "nl-error" : undefined}
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Anmelden"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
      {state === "error" && (
        <p id="nl-error" className="text-red-400 text-xs mt-1.5" role="alert">
          Bitte geben Sie eine gültige E-Mail-Adresse ein.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 pt-16 pb-8" role="contentinfo" aria-label="Seitennavigation">
      <div className="max-w-6xl mx-auto px-6">
        {/* Notfall-Banner */}
        <div className="glass-blue rounded-2xl p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            <p className="text-white font-semibold text-sm">24/7 Notfall-Hotline – Pannenhilfe & Abschleppdienst</p>
          </div>
          <a
            href="tel:+43800626424"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-xl transition-all cursor-pointer whitespace-nowrap"
            aria-label="Notfall-Hotline anrufen"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            +43 800 626 424
          </a>
        </div>

        {/* Haupt-Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-14">
          {/* Marke + Kontakt */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 cursor-pointer group" aria-label="MAGOTransport Startseite">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                <TruckLogo />
              </div>
              <div className="leading-none">
                <span className="font-bold text-white tracking-tight text-base block">MAGO</span>
                <span className="text-blue-400 text-[10px] font-semibold tracking-[0.2em] uppercase">Transport</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Ihr zuverlässiger Partner für nationale und internationale Transporte,
              Logistiklösungen und 24/7-Abschleppdienst in Österreich und Europa.
            </p>
            <address className="not-italic space-y-2 mb-5">
              {kontaktInfo.map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-2.5 text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer group">
                  <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  <span>{text}</span>
                </a>
              ))}
            </address>
            <div className="flex items-center gap-2" role="list" aria-label="Social Media">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-200 cursor-pointer" role="listitem" target="_blank" rel="noopener noreferrer">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link-Spalten */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} className="col-span-1 lg:col-span-2" aria-label={`${category}-Links`}>
              <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 cursor-pointer">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <NewsletterForm />
          </div>
        </div>

        {/* Bodenzeile */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} MAGOTransport GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-slate-600 text-xs">24/7 Einsatzbereit</span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
                { label: "Impressum", href: "/impressum" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-slate-600 hover:text-slate-400 text-xs transition-colors cursor-pointer">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
