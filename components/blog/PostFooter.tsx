import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Post } from '@/lib/blog/posts-data';

interface PostFooterProps {
  currentPost: Post;
  allPosts: Post[];
}

export default function PostFooter({ currentPost, allPosts }: PostFooterProps) {
  // Find related posts (same category, excluding current post, limit to 2)
  const relatedPosts = allPosts
    .filter((p) => p.category === currentPost.category && p.slug !== currentPost.slug)
    .slice(0, 2);

  // If we don't have 2 in the same category, get any other posts
  if (relatedPosts.length < 2) {
    const extraPosts = allPosts
      .filter((p) => p.slug !== currentPost.slug && !relatedPosts.some((rp) => rp.slug === p.slug))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...extraPosts);
  }

  // Generate localized/contextual CTA text based on money pages
  const getCtaContent = () => {
    const primary = currentPost.primaryMoneyPage.toLowerCase();
    
    if (primary.includes('clinic') || primary.includes('doctor') || primary.includes('hospital')) {
      return {
        title: "Ready to Scale Your Clinic's Patient Volume?",
        description: "Get a customized local search roadmap built specifically for healthcare providers. Command your neighborhood Map Pack and convert inquiries into booked appointments.",
        btnText: "Claim Your Clinic Audit",
      };
    }
    
    if (primary.includes('salon') || primary.includes('spa')) {
      return {
        title: "Fill Your Salon Calendar Automatically",
        description: "Transform your visual brand and online presence. Connect with high-intent beauty clients and deploy low-friction booking engines with automated WhatsApp reminder systems.",
        btnText: "Explore Salon Booking Solutions",
      };
    }
    
    if (primary.includes('automation') || primary.includes('ai')) {
      return {
        title: "Scale Your Service Business with AI Automation",
        description: "Stop wasting hours on manual scheduling, reminder calls, and review follow-ups. Automate your operations with customized AI voice agents and messaging triggers.",
        btnText: "Request Automation Blueprint",
      };
    }

    return {
      title: "Supercharge Your Digital Growth & Authority",
      description: "Partner with a dedicated engineering and SEO agency to launch high-performance search funnels, convert organic traffic, and outrank local competitors.",
      btnText: "Schedule a Growth Strategy Session",
    };
  };

  const cta = getCtaContent();

  return (
    <footer className="mt-16 pt-12 border-t border-white/10 space-y-16">
      {/* High-Intent Conversion CTA Box */}
      <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent border border-white/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Growth acceleration</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
            {cta.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {cta.description}
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            href={currentPost.primaryMoneyPage}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-98 group cursor-pointer"
          >
            <span>{cta.btnText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Related Insights Grid */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Related Insights
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-3 block">
                {post.category}
              </span>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mb-2 leading-snug">
                {post.title}
              </h4>
              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:underline">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
