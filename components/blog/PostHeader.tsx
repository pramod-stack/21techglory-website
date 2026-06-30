import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AuthorByline from './AuthorByline';

interface PostHeaderProps {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  authorUrl: string;
  category: 'Local SEO' | 'Salon Growth' | 'Web & Conversion' | 'Automation';
}

export default function PostHeader({
  title,
  description,
  publishedAt,
  author,
  authorUrl,
  category,
}: PostHeaderProps) {
  return (
    <header className="relative pt-32 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to insights</span>
        </Link>

        {/* Title & Description */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium max-w-3xl">
            {description}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="mt-8">
          <AuthorByline
            author={author}
            authorUrl={authorUrl}
            publishedAt={publishedAt}
            category={category}
          />
        </div>
      </div>
    </header>
  );
}
