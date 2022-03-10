import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import NewsletterLayout from 'layouts/newsletter';
import { allNewsletters } from 'contentlayer/generated';
import type { Newsletter } from 'contentlayer/generated';

export default function NewsletterPage(newsletter: Newsletter) {
  const Component = useMDXComponent(newsletter.body.code);

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
