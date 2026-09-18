"use client";

import dynamic from 'next/dynamic';
import HorizonHeroSection from '@/components/ui/horizon-hero-section';

export default function HeroWrapper({ onOpenModal }: { onOpenModal?: () => void }) {
  return <HorizonHeroSection onOpenModal={onOpenModal} />;
}
