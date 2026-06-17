import { NextResponse } from "next/server";
import {
  validateInquiry,
  formatInquiry,
  INQUIRY_RECIPIENT,
  type InquiryPayload,
} from "@/lib/inquiry";

// Auf Node-Runtime ausführen (zuverlässiger fetch zu Resend, keine Edge-Eigenheiten).
export const runtime = "nodejs";

// Versendet die Anfrage per E-Mail an MAGOTransport.
// Aktiv, sobald RESEND_API_KEY gesetzt ist. Ohne Konfiguration meldet die Route
// "nicht zugestellt", damit das Formular auf den mailto-Fallback umschaltet.
export async function POST(request: Request) {
  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: echte Nutzer füllen dieses Feld nie aus.
  if (payload.website && payload.website.trim() !== "") {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const errors = validateInquiry(payload);
  if (errors.length) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL || INQUIRY_RECIPIENT;
  const from = process.env.INQUIRY_FROM_EMAIL;

  // Keine Zustellung konfiguriert: Formular nutzt den mailto-Fallback.
  if (!apiKey || !from) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { subject, text } = formatInquiry(payload);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: payload.email,
      }),
    });

    if (!res.ok) {
      // Zustellung fehlgeschlagen: Fallback im Formular auslösen, Daten nicht verlieren.
      return NextResponse.json({ ok: true, delivered: false });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: true, delivered: false });
  }
}
