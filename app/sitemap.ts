import { getBlogPosts } from 'app/db/blog';
import dotenv from 'dotenv';

export default async function sitemap() {
  dotenv.config();
  const URL = process.env.APP_URL || 'http://localhost';
  let blogs = getBlogPosts().map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
