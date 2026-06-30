import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/:path*', destination: '/about', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/team/:path*', destination: '/about', permanent: true },
      { source: '/our-team', destination: '/about', permanent: true },
      { source: '/our-team/:path*', destination: '/about', permanent: true },
      { source: '/faq', destination: '/services/web-development#faq', permanent: true },
      { source: '/skincare', destination: '/industries/salons-spas', permanent: true },
      { source: '/hospitals', destination: '/industries/clinics-hospitals', permanent: true },
    ];
  },
};

export default nextConfig;
