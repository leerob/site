import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import RSS from 'rss';
import matter from 'gray-matter';

async function generate() {
  const feed = new RSS({
    title: 'Lee Robinson',
    site_url: 'https://leerob.io',
    feed_url: 'https://leerob.io/feed.xml'
  });

  const posts = readdirSync(join(process.cwd(), 'data', 'blog'));
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'blog', name));
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: 'https://leerob.io/blog/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.publishedAt,
      description: frontmatter.data.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
