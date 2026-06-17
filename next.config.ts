import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eindeutiger Workspace-Root (verhindert Fehlinterpretation durch fremde Lockfiles)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
