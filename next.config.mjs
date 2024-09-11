/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.autotempest.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
