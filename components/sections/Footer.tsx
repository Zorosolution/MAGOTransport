"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

function TruckLogo() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="w-8 h-6" aria-hidden="true">
      <rect x="1" y="3" width="19" height="16" rx="2" fill="#ffffff" />
      <rect x="1" y="3" width="19" height="3" rx="2" fill="#bfdbfe" />
      <path d="M19 3 L19 19 L31 19 L31 9 L26 3 Z" fill="#dbeafe" />
      <path d="M26 4 L30 4 L31 11 L26 11 Z" fill="#1d4ed8" opacity="0.5" />
      <rect x="30" y="12" width="1.5" height="4" rx="0.5" fill="#fde68a" />
      <circle cx="7" cy="21" r="3" fill="#0f172a" stroke="#475569" strokeWidth="1" />
      <circle cx="15" cy="21" r="3" fill="#0f172a" stroke="#475569" strokeWidth="1" />
      <circle cx="26" cy="21" r="3" fill="#0f172a" stroke="#475569" strokeWidth="1" />
    </svg>
  );
}

const footerLinks = {
  Leistungen: [
    { label: "Auslieferung für Unternehmen", href: "/leistungen#auslieferung" },
    { label: "Partnerschaften", href: "/leistungen#partnerschaft" },
    { label: "Abschleppdienst", href: "/abschleppdienst" },
    { label: "Fahrzeugtransport", href: "/leistungen#fahrzeuge" },
    { label: "Fuhrpark", href: "/fuhrpark" },
    { label: "Anfrage stellen", href: "/anfrage" },
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

const kontaktInfo = [
  { icon: Mail,   text: "office@magotransport.at",  href: "mailto:office@magotransport.at" },
  { icon: Phone,  text: "+43 699 11147070",           href: "tel:+4369911147070" },
  { icon: Phone,  text: "Abschleppdienst: +43 699 11147070",  href: "tel:+4369911147070" },
  { icon: MapPin, text: "Alxingergasse 16/7a, 1100 Wien", href: "https://www.google.com/maps/search/?api=1&query=Alxingergasse+16%2F7a+1100+Wien" },
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
      <p className="text-slate-900 text-sm font-semibold mb-1">Newsletter</p>
      <p className="text-slate-500 text-xs mb-3">Brancheninfos und Neuigkeiten von MAGOTransport.</p>
      {state === "success" ? (
        <p className="text-emerald-600 text-sm py-2 font-medium">Erfolgreich angemeldet.</p>
      ) : (
        <div className="flex gap-2">
          <label htmlFor="nl-email" className="sr-only">E-Mail-Adresse</label>
          <input
            id="nl-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
            placeholder="ihre@email.at"
            className="flex-1 min-w-0 px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            aria-describedby={state === "error" ? "nl-error" : undefined}
          />
          <button
            type="submit"
            className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Anmelden"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
      {state === "error" && (
        <p id="nl-error" className="text-red-600 text-xs mt-1.5" role="alert">
          Bitte geben Sie eine gültige E-Mail-Adresse ein.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-28 md:pb-8" role="contentinfo" aria-label="Seitenfußbereich">
      <div className="max-w-6xl mx-auto px-6">
        {/* Abschleppdienst-Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
            <p className="text-slate-900 font-semibold text-sm">Abschleppdienst in Wien und Wien-Umgebung. Rufen Sie uns an.</p>
          </div>
          <a
            href="tel:+4369911147070"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-cta"
            aria-label="Abschleppdienst anrufen: +43 699 11147070"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            +43 699 11147070
          </a>
        </div>

        {/* Haupt-Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 mb-14">
          {/* Marke + Kontakt */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 cursor-pointer group" aria-label="MAGOTransport Startseite">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-primary">
                <TruckLogo />
              </div>
              <div className="leading-none">
                <span className="font-bold text-slate-900 tracking-tight text-base block">MAGO</span>
                <span className="text-blue-700 text-[10px] font-semibold tracking-[0.2em] uppercase">Transport</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-5">
              Auslieferungspartner in Wien und Wien-Umgebung. Wir holen Ware bei Unternehmen ab
              und stellen sie an deren Kunden zu. Dazu Abschleppdienst und Fahrzeugtransport.
            </p>
            <address className="not-italic space-y-2 mb-5">
              {kontaktInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-2.5 text-slate-600 hover:text-blue-700 text-xs transition-colors cursor-pointer group"
                >
                  <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-400 group-hover:text-blue-700 transition-colors" aria-hidden="true" />
                  <span>{text}</span>
                </a>
              ))}
            </address>
          </div>

          {/* Link-Spalten */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} className="col-span-1 lg:col-span-2" aria-label={`${category}`}>
              <h3 className="text-slate-900 text-sm font-semibold mb-4 tracking-wide">{category}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-600 hover:text-blue-700 text-sm transition-colors duration-200 cursor-pointer">
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
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} MAGOTransport GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-slate-500 text-xs">Wien und Wien-Umgebung</span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
                { label: "Impressum", href: "/impressum" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-slate-500 hover:text-slate-900 text-xs transition-colors cursor-pointer">
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
