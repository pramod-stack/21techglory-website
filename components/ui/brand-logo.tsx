import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'monogram' | 'wordmark' | 'emblem' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  href?: string;
}

export default function BrandLogo({
  variant = 'wordmark',
  size = 'md',
  className = '',
  theme = 'auto',
  href = '/'
}: BrandLogoProps) {
  const sizeMap = {
    sm: { h: 'h-7', text: 'text-base', mark: 22 },
    md: { h: 'h-9', text: 'text-xl', mark: 28 },
    lg: { h: 'h-12', text: 'text-2xl', mark: 36 },
    hero: { h: 'h-16', text: 'text-4xl', mark: 48 },
  };

  const currentSize = sizeMap[size];

  // Monogram SVG mark: Geometric 21 with gold orbit
  const MonogramMark = ({ markSize = 28 }: { markSize?: number }) => (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <rect width="32" height="32" rx="8" className="fill-[#001848] dark:fill-[#1447E6]" />
      {/* Dynamic 21 geometric glyph */}
      <path
        d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 13.5 14.8 14.8 13.5 16L8 22H16"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8V24M21 8L17.5 11"
        stroke="#D9A441"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const content = (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none group ${className}`}>
      <MonogramMark markSize={currentSize.mark} />
      
      {variant !== 'monogram' && (
        <div className="flex flex-col">
          <div className={`flex items-baseline font-black tracking-tight leading-none text-[#001848] dark:text-[#FAFAF7] ${currentSize.text}`}>
            <span>21</span>
            <span className="text-[#1447E6] dark:text-[#4F7DF7]">TECH</span>
            <span className="text-[#D9A441] dark:text-[#E8B44C]">GLORY</span>
          </div>
          {variant === 'stacked' && (
            <span className="text-[9px] font-mono tracking-widest text-[#5C6273] dark:text-[#A7B0C0] uppercase mt-0.5">
              Growth Infrastructure
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1447E6] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
