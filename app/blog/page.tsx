import React from 'react';
import { getAllPosts } from '@/lib/blog/getAllPosts';
import BlogContainer from '@/components/blog/BlogContainer';

export const metadata = {
  title: 'Service Business Growth Insights & Strategies | 21TechGlory',
  description: 'Read expert strategies, local SEO roadmaps, and automation guides to scale appointment volumes and booking conversions for clinics, salons, and service providers.',
  alternates: {
    canonical: 'https://21techglory.com/blog',
  },
  openGraph: {
    title: 'Service Business Growth Insights & Strategies | 21TechGlory',
    description: 'Read expert strategies, local SEO roadmaps, and automation guides to scale appointment volumes and booking conversions for clinics, salons, and service providers.',
    url: 'https://21techglory.com/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  
  // Sort posts by date descending
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-hidden relative pb-24">
      {/* Background stars / grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] -z-10" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-40 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 uppercase tracking-wider">
            Knowledge base
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            21TechGlory Insights
          </h1>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed">
            Highly actionable local search strategies, operational automation blueprints, and booking optimization playbooks to scale your local service business.
          </p>
        </div>

        {/* Filterable Posts Grid */}
        <BlogContainer posts={sortedPosts} />
      </div>
    </main>
  );
}
