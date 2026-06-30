import { posts, Post } from './posts-data';

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}
