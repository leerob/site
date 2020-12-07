import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import NewsletterLayout from '@/layouts/newsletter';
import MDXComponents from '@/components/MDXComponents';

export default function Newsletter({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return (
    <NewsletterLayout frontMatter={frontMatter}>{content}</NewsletterLayout>
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
