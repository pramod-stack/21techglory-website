import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Tag } from 'lucide-react';

interface AuthorBylineProps {
  author: string;
  authorUrl: string;
  publishedAt: string;
  category: string;
  readingTime?: string;
}

export default function AuthorByline({
  author,
  authorUrl,
  publishedAt,
  category,
  readingTime = '5 min read',
}: AuthorBylineProps) {
  // Format date nicely
  const formatDate = (dateStr: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-6 py-6 border-y border-white/10 text-gray-400 text-sm">
      {/* Author */}
      <Link
        href={authorUrl}
        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white border border-white/10 group-hover:scale-105 transition-transform">
          <User className="w-4 h-4" />
        </div>
        <span className="font-semibold">{author}</span>
      </Link>

      {/* Date */}
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-cyan-400" />
        <span>{formatDate(publishedAt)}</span>
      </div>

      {/* Reading Time */}
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-purple-400" />
        <span>{readingTime}</span>
      </div>

      {/* Category */}
      <div className="flex items-center gap-2 ml-auto">
        <Tag className="w-4 h-4 text-emerald-400" />
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          {category}
        </span>
      </div>
    </div>
  );
}
