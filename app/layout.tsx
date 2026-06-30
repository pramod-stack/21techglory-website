import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/ui/floating-cta";
import { getOrganizationSchema } from "@/lib/schema/organization";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://21techglory.com"),
  title: "21TechGlory | AI Growth & Digital Infrastructure Partner",
  description: "21TechGlory helps businesses scale with AI, automation, and modern digital growth systems. We build premium websites and generate high-quality leads.",
  keywords: ["website development Bangalore", "SEO agency Bangalore", "AI automation agency", "local SEO services Bangalore", "Google business optimization", "AI agency India", "digital growth agency"],
  alternates: {
    canonical: "https://21techglory.com",
  },
  openGraph: {
    title: "21TechGlory | AI Growth & Digital Infrastructure Partner",
    description: "Scale your business with AI, automation, and premium digital experiences.",
    url: "https://21techglory.com",
    siteName: "21TechGlory",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "21TechGlory | AI Growth & Digital Infrastructure Partner",
    description: "Scale your business with AI, automation, and premium digital experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "21TechGlory",
    "url": "https://21techglory.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://21techglory.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
