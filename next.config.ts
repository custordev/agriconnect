import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // config: {
  //   api: {
  //     bodyParser: false,
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;