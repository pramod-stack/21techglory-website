"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    title: "How Clinics Are Getting 2x More Patients With Local SEO",
    excerpt: "Discover the exact Google Business Profile strategies we use to help healthcare providers dominate their local search results.",
    category: "Local SEO",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&h=400&auto=format&fit=crop",
    date: "Oct 12, 2023"
  },
  {
    title: "The AI Automation Playbook For Modern Businesses",
    excerpt: "Stop doing manual data entry. Learn how to connect WhatsApp, your CRM, and AI to follow up with leads automatically 24/7.",
    category: "AI Automation",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&h=400&auto=format&fit=crop",
    date: "Oct 05, 2023"
  },
  {
    title: "Why Generic Website Templates Are Killing Your Conversion Rate",
    excerpt: "A beautiful website isn't enough. Here's why you need a conversion-optimized digital experience to turn visitors into buyers.",
    category: "Web Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop",
    date: "Sep 28, 2023"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Growth Insights</h2>
            <p className="text-gray-400 text-lg">Actionable strategies and case studies on how to scale your business using modern digital infrastructure.</p>
          </div>
          <Link href="#" className="shrink-0 flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold text-black bg-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
