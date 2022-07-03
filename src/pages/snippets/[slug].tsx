import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import SnippetLayout from 'src/layouts/snippets';
import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';
import { getSnippetSlugs, getSnippet } from '@/lib/sanity-api';
import { IParams, TSnippet } from '@/typings/types';

export default function SnippetsPage({
  snippet
}: {
  snippet: TSnippet & { content: MDXRemoteSerializeResult };
}) {
  return (
    <SnippetLayout snippet={snippet}>
      <MDXRemote {...snippet.content} components={components} />
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getSnippetSlugs();
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({
  params,
  preview
}: {
  params: IParams;
  preview: boolean;
}) {
  const snippet = await getSnippet(params.slug, preview);

  if (!snippet) {
    return { notFound: true };
  }

  const { html } = await mdxToHtml(snippet.content);

  return {
    props: {
      snippet: {
        ...snippet,
        content: html
      }
    }
  };
}
