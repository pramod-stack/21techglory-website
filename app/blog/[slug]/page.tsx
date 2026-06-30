import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog/getPostBySlug';
import { getAllPosts } from '@/lib/blog/getAllPosts';
import PostHeader from '@/components/blog/PostHeader';
import PostBody from '@/components/blog/PostBody';
import FaqInPost from '@/components/blog/FaqInPost';
import PostFooter from '@/components/blog/PostFooter';

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | 21TechGlory',
    };
  }

  return {
    title: `${post.title} | 21TechGlory`,
    description: post.description,
    alternates: {
      canonical: `https://21techglory.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | 21TechGlory`,
      description: post.description,
      url: `https://21techglory.com/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: post.ogImage || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#030014] text-white pb-24">
      {/* Article Header */}
      <PostHeader
        title={post.title}
        description={post.description}
        publishedAt={post.publishedAt}
        author={post.author}
        authorUrl={post.authorUrl}
        category={post.category}
      />

      {/* Main Content Area */}
      <div className="container max-w-4xl mx-auto px-4 md:px-8">
        <article className="space-y-8">
          {/* Post Body Blocks */}
          <PostBody blocks={post.blocks} />

          {/* Faq In Post with JSON-LD */}
          <FaqInPost faqs={post.faqs} />

          {/* Footer CTA & Related insights */}
          <PostFooter currentPost={post} allPosts={allPosts} />
        </article>
      </div>
    </main>
  );
}
