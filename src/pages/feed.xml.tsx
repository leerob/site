import { type ServerResponse } from 'http';
import RSS from 'rss';

import { getPosts } from '@/lib/sanity-api';
export async function getServerSideProps({ res }: { res: ServerResponse }) {
  const feed = new RSS({
    title: 'Dzmitry Svirin',
    site_url: 'https://svirins.codes',
    feed_url: 'https://svirins.codes/feed.xml'
  });

  const allPosts = await getPosts();
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://svirins.codes/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
