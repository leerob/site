import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

const root = process.cwd();

export async function getFiles(type) {
  return readdirSync(join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? readFileSync(join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(root, 'data', `${type}.mdx`), 'utf8');

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypeSlug,
        rehypeHighlight,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ];
      return options;
    }
  });

  const tweetMatches = source.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);

  return {
    code,
    tweetIDs: tweetIDs || [],
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(join(root, 'data', type, postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
