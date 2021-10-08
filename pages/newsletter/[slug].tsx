import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import NewsletterLayout from 'layouts/newsletter';
import { allNewsletters } from '.contentlayer/data';
import type { Newsletter } from '.contentlayer/types';

export default function Newsletter(newsletter: Newsletter) {
  const Component = useMemo(
    () => getMDXComponent(newsletter.body.code),
    [newsletter.body.code]
  );

  return (
    <NewsletterLayout newsletter={newsletter}>
      <Component components={components as any} />
    </NewsletterLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allNewsletters.map((newsletter) => ({
      params: { slug: newsletter.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const newsletter = allNewsletters.find(
    (newsletter) => newsletter.slug === params.slug
  );

  return { props: newsletter };
}
