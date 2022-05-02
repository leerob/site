import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Satvik Shukla',
    site_url: 'https://doad.vercel.app',
    feed_url: 'https://doad.vercel.app/feed.xml',
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://doad.vercel.app/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
