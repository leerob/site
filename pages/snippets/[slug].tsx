import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import SnippetLayout from 'layouts/snippets';
import { allSnippets } from 'contentlayer/generated';
import type { Snippet } from 'contentlayer/generated';

export default function SnippetPage(snippet: Snippet) {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <SnippetLayout snippet={snippet}>
      <Component components={components as any} />
    </SnippetLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allSnippets.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);

  return { props: snippet };
}
