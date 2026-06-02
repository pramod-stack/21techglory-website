"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function PortfolioParallax() {
  return (
    <div className="w-full relative z-20 bg-black">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "SLV Home Like PG",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Conceive Clinics",
    link: "https://www.conceiveclinics.com",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Local Restaurant Growth",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Dental Practice SEO",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Real Estate Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "B2B SaaS Automation",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Scaling",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Legal Firm Lead Gen",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Logistics Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Gym Membership App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Financial Consulting",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "AI Booking System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Luxury PG Network",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Specialty Clinic",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Startup Launchpad",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=600&auto=format&fit=crop",
  },
];
