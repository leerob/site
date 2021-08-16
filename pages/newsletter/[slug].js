import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import components from '@/components/MDXComponents';
import NewsletterLayout from '@/layouts/newsletter';

export default function Newsletter({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <NewsletterLayout frontMatter={frontMatter}>
      <Component components={components} />
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
