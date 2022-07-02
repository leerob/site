import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'src/layouts/snippets';
import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';
import { getSnippetSlugs, getSnippet } from '@/lib/sanity-api';
import type { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props'];

export default function SnippetsPage({ snippet }: { snippet: Props }) {
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

export async function getStaticProps({ params }: { params: IParams }) {
  const snippet = await getSnippet({
    slug: params.slug
  });

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
