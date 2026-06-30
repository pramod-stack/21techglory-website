import { posts, Post } from './posts-data';

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}
