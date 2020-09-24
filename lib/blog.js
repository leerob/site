import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '../components/MDXComponents';

const root = process.cwd();

export async function getPosts() {
  return fs.readdirSync(path.join(root, 'data', 'blog'));
}

export async function getPostBySlug(slug) {
  const source = fs.readFileSync(
    path.join(root, 'data', 'blog', `${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
        require('../utils/title-style')
      ],
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      ...data
    }
  };
}
