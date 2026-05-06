import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ui/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "21TechGlory | Digital Agency Bangalore — Websites, AI & Growth Systems",
  description: "21TechGlory builds high-converting websites, AI automation & ad campaigns that bring real customers to your business. Free strategy call available.",
  keywords: "digital agency bangalore, website development, SEO, Google ads, AI automation, CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
