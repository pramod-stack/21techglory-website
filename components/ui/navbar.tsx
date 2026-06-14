"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const serviceItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "SEO & GMB", href: "/services/seo" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "CRM Systems", href: "/services/crm" },
    { name: "Paid Ads", href: "/services/paid-ads" },
  ];

  const industryItems = [
    { name: "Skincare Clinics", href: "/skincare" },
    { name: "Hospitals & Doctors", href: "/hospitals" },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
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
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                isLinkActive('/') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                pathname.startsWith('/services') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}>
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black/95 border border-white/10 rounded-2xl p-2 shadow-xl backdrop-blur-md">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                        pathname === item.href 
                          ? 'bg-white/10 text-cyan-400 font-medium' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                pathname === '/skincare' || pathname === '/hospitals' ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}>
                Industries
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black/95 border border-white/10 rounded-2xl p-2 shadow-xl backdrop-blur-md">
                  {industryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                        pathname === item.href 
                          ? 'bg-white/10 text-cyan-400 font-medium' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/work" 
              className={`text-sm font-medium transition-colors ${
                isLinkActive('/work') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Our Work
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                isLinkActive('/about') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${
                isLinkActive('/contact') ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenModal} 
              className="hidden sm:inline-block px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              Let&apos;s Talk
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white md:hidden focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-black/95 backdrop-blur-lg border-t border-white/10 md:hidden flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className={`text-lg font-semibold border-b border-white/5 pb-2 ${
                pathname === '/' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              Home
            </Link>

            {/* Services for Mobile */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Services</span>
              <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium ${
                      pathname === item.href ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries for Mobile */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Industries</span>
              <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                {industryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium ${
                      pathname === item.href ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/work" 
              className={`text-lg font-semibold border-b border-white/5 pb-2 ${
                pathname === '/work' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              Our Work
            </Link>

            <Link 
              href="/about" 
              className={`text-lg font-semibold border-b border-white/5 pb-2 ${
                pathname === '/about' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className={`text-lg font-semibold border-b border-white/5 pb-2 ${
                pathname === '/contact' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              Contact
            </Link>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
              className="mt-4 w-full py-3 rounded-full bg-cyan-500 text-black text-center font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
