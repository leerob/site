import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import SnippetLayout from 'layouts/snippets';
import { allSnippets } from '.contentlayer/data';
import type { Snippet } from '.contentlayer/types';

export default function Snippet(snippet: Snippet) {
  const Component = useMemo(
    () => getMDXComponent(snippet.body.code),
    [snippet.body.code]
  );

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
