import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
// import remarkEmbedder from '@remark-embedder/core';
// import oembedTransformer from '@remark-embedder/transformer-oembed';

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        // [remarkEmbedder, { transformers: [oembedTransformer] }]
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypeAccessibleEmojis,
        rehypeExternalLinks,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });

  return {
    html: mdxSource,
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text
  };
}
