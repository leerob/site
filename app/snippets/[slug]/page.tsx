import { MDXRemote } from 'next-mdx-remote';
import { IconContext } from 'react-icons';
import SnippetLayout from 'src/layouts/snippets';

import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';
import { getSnippet, getSnippetSlugs } from '@/lib/sanity-api';
import { IParams, ISnippet } from '@/typings';

export default function SnippetsPage({ snippet }: { snippet: ISnippet }) {
  return (
    <IconContext.Provider
      value={{
        className: 'w-7 h-7 md:w-8 md:h-8 fill-gray-900  dark:fill-gray-100'
      }}
    >
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
    </IconContext.Provider>
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
  const snippet = await getSnippet(params.slug);

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
