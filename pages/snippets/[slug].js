import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import components from '@/components/MDXComponents';
import SnippetLayout from '@/layouts/snippets';

export default function Snippet({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <SnippetLayout frontMatter={frontMatter}>
      <Component components={components} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets');

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('snippets', params.slug);

  return { props: snippet };
}
