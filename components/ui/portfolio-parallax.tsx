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
    title: "E-Commerce Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "AI Booking System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Corporate Website",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Logistics Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "EdTech LMS",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Healthcare App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Fintech Solution",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Agency Portfolio",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Marketing CRM",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Real Estate Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Crypto Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Fitness App",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Law Firm Website",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Restaurant Menu System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    title: "Inventory Management",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&h=600&auto=format&fit=crop",
  },
];
