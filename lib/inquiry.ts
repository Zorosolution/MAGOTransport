// Gemeinsame Logik für Anfrage- und Kontaktformular.
// Reine Funktionen, nutzbar serverseitig (Route Handler) und clientseitig (mailto-Fallback).

export type InquiryKind = "anfrage" | "kontakt";

export interface InquiryPayload {
  kind: InquiryKind;
  name: string;
  email: string;
  telefon?: string;
  firma?: string;
  betreff?: string;
  nachricht?: string;
  // Felder der mehrstufigen Anfrage
  transportTyp?: string;
  abholt?: string;
  ziel?: string;
  gewicht?: string;
  volumen?: string;
  datum?: string;
  beschreibung?: string;
  // Honeypot gegen Spam, muss leer bleiben
  website?: string;
}

export const INQUIRY_RECIPIENT = "office@magotransport.at";

// Zentrale WhatsApp-Verknüpfung (Navbar, CTA, Kontaktleiste, mobile Leiste).
export const WHATSAPP_LINK = `https://wa.me/4369911147070?text=${encodeURIComponent(
  "Guten Tag, ich habe eine Anfrage an MAGOTransport."
)}`;

const transportLabels: Record<string, string> = {
  auslieferung: "Auslieferung",
  partner: "Partnerschaft",
  express: "Express oder Sonderfahrt",
  abschlepp: "Abschleppdienst",
  fahrzeug: "Fahrzeugtransport",
  sonstiges: "Sonstiges",
};

const betreffLabels: Record<string, string> = {
  angebot: "Angebotsanfrage",
  auslieferung: "Auslieferung",
  abschlepp: "Abschleppdienst",
  fahrzeug: "Fahrzeugtransport",
  partnership: "Partnerschaft",
  karriere: "Mitarbeit",
  sonstiges: "Sonstiges",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Serverseitige Validierung (spiegelt die Formularregeln, schützt zusätzlich).
export function validateInquiry(p: Partial<InquiryPayload>): string[] {
  const errors: string[] = [];
  if (p.kind !== "anfrage" && p.kind !== "kontakt") errors.push("Ungültige Anfrageart.");
  if (!p.name?.trim()) errors.push("Name fehlt.");
  if (!p.email?.trim()) errors.push("E-Mail fehlt.");
  else if (!EMAIL_RE.test(p.email)) errors.push("E-Mail ist ungültig.");

  if (p.kind === "kontakt") {
    if (!p.nachricht?.trim() || p.nachricht.trim().length < 20) {
      errors.push("Nachricht ist zu kurz.");
    }
  }
  if (p.kind === "anfrage") {
    if (!p.transportTyp?.trim()) errors.push("Transportart fehlt.");
    if (!p.abholt?.trim()) errors.push("Abholort fehlt.");
    if (!p.ziel?.trim()) errors.push("Zielort fehlt.");
    if (!p.datum?.trim()) errors.push("Wunschdatum fehlt.");
  }
  // Längenbegrenzung als einfacher Missbrauchsschutz
  const tooLong = Object.values(p).some(
    (v) => typeof v === "string" && v.length > 4000
  );
  if (tooLong) errors.push("Eingabe ist zu lang.");
  return errors;
}

function line(label: string, value?: string): string {
  return value && value.trim() ? `${label}: ${value.trim()}\n` : "";
}

// Erzeugt Betreff und Textkörper für die Benachrichtigungs-E-Mail an MAGOTransport.
export function formatInquiry(p: InquiryPayload): { subject: string; text: string } {
  if (p.kind === "anfrage") {
    const typ = transportLabels[p.transportTyp ?? ""] ?? p.transportTyp ?? "Anfrage";
    const subject = `Neue Anfrage: ${typ}${p.firma ? ` (${p.firma})` : ""}`;
    const text =
      `Neue Angebotsanfrage über magotransport.at\n\n` +
      line("Transportart", typ) +
      line("Abholort", p.abholt) +
      line("Zielort", p.ziel) +
      line("Gewicht", p.gewicht) +
      line("Volumen", p.volumen) +
      line("Wunschdatum", p.datum) +
      line("Beschreibung", p.beschreibung) +
      `\nKontakt\n` +
      line("Name", p.name) +
      line("Firma", p.firma) +
      line("E-Mail", p.email) +
      line("Telefon", p.telefon);
    return { subject, text };
  }

  const betreff = betreffLabels[p.betreff ?? ""] ?? p.betreff ?? "Kontaktanfrage";
  const subject = `Kontaktanfrage: ${betreff}`;
  const text =
    `Neue Nachricht über das Kontaktformular auf magotransport.at\n\n` +
    line("Betreff", betreff) +
    line("Name", p.name) +
    line("E-Mail", p.email) +
    line("Telefon", p.telefon) +
    `\nNachricht\n${(p.nachricht ?? "").trim()}\n`;
  return { subject, text };
}

// Baut einen mailto-Link als Fallback, falls keine serverseitige Zustellung konfiguriert ist.
export function buildMailtoHref(p: InquiryPayload): string {
  const { subject, text } = formatInquiry(p);
  const params = new URLSearchParams({ subject, body: text });
  return `mailto:${INQUIRY_RECIPIENT}?${params.toString()}`;
}
