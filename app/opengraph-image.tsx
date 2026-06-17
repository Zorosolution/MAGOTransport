import { ImageResponse } from "next/og";

// Dynamisch erzeugtes Open-Graph-Bild (ersetzt das fehlende /og-image.png).
// Helles, markenkonformes Motiv im Designsystem der Website.
export const alt = "MAGOTransport: Auslieferungspartner und Abschleppdienst in Wien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f6f8fb 55%, #eff4ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Kopf: Wortmarke */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "30px", fontWeight: 700, color: "#0b1120" }}>
              MAGO
            </span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "5px",
                color: "#1d4ed8",
              }}
            >
              TRANSPORT
            </span>
          </div>
        </div>

        {/* Mitte: Aussage */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1d4ed8",
              marginBottom: "20px",
            }}
          >
            Auslieferungspartner seit 2007
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0b1120",
              letterSpacing: "-2px",
            }}
          >
            Wir liefern die Ware
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#1d4ed8",
              letterSpacing: "-2px",
            }}
          >
            Ihrer Firma aus.
          </span>
        </div>

        {/* Fuß: Leistungen, Gebiet, Telefon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e6e9ef",
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: "26px", color: "#475569", fontWeight: 500 }}>
            Auslieferung · Abschleppdienst · Wien und Wien-Umgebung
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0b1120",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 700,
              padding: "14px 26px",
              borderRadius: "14px",
            }}
          >
            +43 699 11147070
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
