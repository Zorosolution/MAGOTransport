"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mago-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() { localStorage.setItem("mago-cookie-consent", "accepted"); setVisible(false); }
  function decline() { localStorage.setItem("mago-cookie-consent", "declined"); setVisible(false); }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          aria-modal="false"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[100]"
        >
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft-lg">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-blue-700 flex-shrink-0" aria-hidden="true" />
                <p className="text-slate-900 text-sm font-semibold">Cookie-Einstellungen</p>
              </div>
              <button onClick={decline} className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer p-0.5" aria-label="Schließen">
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Wir verwenden Cookies, um diese Website zu verbessern und ihre Nutzung zu verstehen.
              Mehr dazu in unserer{" "}
              <Link href="/cookie-richtlinie" className="text-blue-700 hover:text-blue-800 underline underline-offset-2">
                Cookie-Richtlinie
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <button onClick={decline} className="flex-1 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-200 cursor-pointer">
                Ablehnen
              </button>
              <button onClick={accept} className="flex-1 py-2 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-xl transition-all duration-200 cursor-pointer">
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
