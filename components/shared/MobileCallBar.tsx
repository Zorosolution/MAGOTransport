"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/inquiry";

// Feste Conversion-Leiste für mobile Geräte (unter md): Anruf und WhatsApp.
export function MobileCallBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2 pointer-events-none"
    >
      <div className="flex items-stretch gap-2">
        <a
          href="tel:+4369911147070"
          className="pointer-events-auto flex flex-1 items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-blue-700 text-white font-semibold text-sm shadow-soft-lg active:scale-[0.99] transition-transform"
          aria-label="Anrufen: +43 699 11147070"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Anrufen: +43 699 11147070
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center px-4 rounded-2xl bg-emerald-600 text-white shadow-soft-lg active:scale-[0.99] transition-transform"
          aria-label="MAGOTransport über WhatsApp kontaktieren"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
