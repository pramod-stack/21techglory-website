"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Post } from '@/lib/blog/posts-data';

interface BlogContainerProps {
  posts: Post[];
}

type CategoryFilter = 'All' | 'Local SEO' | 'Salon Growth' | 'Web & Conversion' | 'Automation';

export default function BlogContainer({ posts }: BlogContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories: CategoryFilter[] = ['All', 'Local SEO', 'Salon Growth', 'Web & Conversion', 'Automation'];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="space-y-12">
      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-6 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md">
        {/* Categories Accordion/Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                  : 'bg-transparent text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/5 focus:border-cyan-500/50 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 backdrop-blur-sm relative"
            >
              {/* Intent badge for user visual hint */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold border border-cyan-500/20 backdrop-blur-md">
                  {post.category}
                </span>
                {post.intent === 'BOFU' && (
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/20 backdrop-blur-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Priority</span>
                  </span>
                )}
              </div>

              {/* Spacer for aesthetic header design */}
              <div className="h-28 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent border-b border-white/5" />

              {/* Article Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta stats */}
                  <div className="flex items-center gap-4 text-gray-500 text-xs font-semibold">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:underline"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl">
          <p className="text-gray-400 text-lg">No insights found matching your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-6 py-2.5 bg-cyan-500 text-white font-semibold rounded-xl text-sm transition-all hover:bg-cyan-400 cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
