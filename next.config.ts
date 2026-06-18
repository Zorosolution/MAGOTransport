import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eindeutiger Workspace-Root (verhindert Fehlinterpretation durch fremde Lockfiles)
  turbopack: {
    root: __dirname,
  },
  // www auf die Hauptdomain umleiten (308). Greift nur bei Host www.magotransport.at,
  // daher keine Endlosschleife auf der Apex. Pfad und Query bleiben erhalten.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.magotransport.at" }],
        destination: "https://magotransport.at/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
