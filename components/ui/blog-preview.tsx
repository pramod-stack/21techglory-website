"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { posts as allPosts } from '@/lib/blog/posts-data';

export default function BlogPreview() {
  // Sort posts by date descending and take top 3
  const activePosts = [...allPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  // Helper to format date nicely
  const formatDate = (dateStr: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Growth Insights</h2>
            <p className="text-gray-400 text-lg">Actionable strategies and case studies on how to scale your business using modern digital infrastructure.</p>
          </div>
          <Link href="/blog" className="shrink-0 flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group cursor-pointer">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activePosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 h-full cursor-pointer relative"
              >
                {/* Visual block with gradient header for aesthetics */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent border-b border-white/5 flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold opacity-40">21TechGlory Insights</span>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold text-black bg-cyan-400 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-500" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-purple-500" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

