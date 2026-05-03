"use client";

import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/ui/horizon-hero-section').then(mod => mod.Component), { ssr: false });

export default function HeroWrapper() {
  return <HeroSection />;
}
