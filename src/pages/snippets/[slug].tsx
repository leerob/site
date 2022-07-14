import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'src/layouts/snippets';
import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';
import { getSnippetSlugs, getSnippet } from '@/lib/sanity-api';
import { IParams, ISnippet } from '@/typings/types';

export default function SnippetsPage({ snippet }: { snippet: ISnippet }) {
  return (
    <SnippetLayout snippet={snippet}>
      <MDXRemote
        {...snippet.mdxContent!}
        components={
          {
            ...components
          } as any
        }
      />
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
  preview = false
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
        mdxContent: html
      }
    }
  };
}
