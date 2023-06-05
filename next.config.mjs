/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.clerk.dev", "res.cloudinary.com"],
  },
}

export default nextConfig
