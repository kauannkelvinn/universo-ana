import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xcvpkzhmpeytdubs.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
