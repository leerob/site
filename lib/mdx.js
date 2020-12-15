import { promises as fs } from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getFiles(type) {
  return await fs.readdir(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? await fs.readFile(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : await fs.readFile(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = await fs.readdir(path.join(root, 'data', type));

  return files.reduce(async (allPostsPromise, postSlug) => {
    const allPosts = await allPostsPromise;
    const source = await fs.readFile(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, Promise.resolve([]));
}
