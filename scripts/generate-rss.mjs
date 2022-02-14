import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Lee Robinson',
    site_url: 'https://leerob.io',
    feed_url: 'https://leerob.io/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://leerob.io/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
