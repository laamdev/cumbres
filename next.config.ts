import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.clerk.dev" },
      { hostname: "res.cloudinary.com" },
      { hostname: "openweathermap.org" },
    ],
  },
};

export default nextConfig;
