import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import NewsletterLayout from '@/layouts/newsletter';

export default function Newsletter({ mdxSource, frontMatter }) {
  return (
    <NewsletterLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </NewsletterLayout>
  );
}

export async function getStaticPaths() {
  const newsletters = await getFiles('newsletter');

  return {
    paths: newsletters.map((newsletter) => ({
      params: {
        slug: newsletter.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const newsletter = await getFileBySlug('newsletter', params.slug);

  return { props: newsletter };
}
