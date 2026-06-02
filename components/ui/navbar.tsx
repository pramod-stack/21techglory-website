"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all">
            <span className="font-black text-white text-lg">21</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            TechGlory
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="#work" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Our Work</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button onClick={onOpenModal} className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
