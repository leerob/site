import Rss from "rss";
import { allBlogs } from "contentlayer/generated";

const siteUrl = 'https://leerob.io';

export async function GET(request: Request) {
  const feed = new Rss({
    title: "Lee Robinson",
    description: "Developer, writer, and creator.",
    feed_url: `${siteUrl}/api/blog/feed.xml`,
    site_url: siteUrl,
    language: "en",
  });
  
  allBlogs.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `${siteUrl}/blog/${post.slug}`,
      date: post.publishedAt,
    });
  });
  
  return new Response(feed.xml(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
