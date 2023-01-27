import { MDXRemote } from 'next-mdx-remote';
import { IconContext } from 'react-icons';
import { ArticleJsonLd } from 'next-seo';

import components from 'ui/MDXComponents';
import { mdxToHtml } from 'lib/mdx';
import { getSnippet, getSnippetSlugs } from 'lib/sanity-api';

import StackIcon from 'ui/StackIcon';

export async function generateStaticParams() {
  const paths = await getSnippetSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export default async function SnippetsPage({ params }) {
  const snippet = await getSnippet(params.slug);
  const { html } = await mdxToHtml(snippet.content);

  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <ArticleJsonLd
        useAppDir={true}
        type="Article"
        url="https://example.com/blog"
        title={`${snippet.title} Dzmitry Svirin`}
        authorName="Dzmitry Svirin"
        description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks"
        images={[]}
        datePublished={''}
      />
      <div className="flex justify-between w-full">
        <div>
          <h1 className="font-bold capsize text-3xl  md:text-5xl tracking-tight mb-4 text-gray-900 dark:text-gray-100">
            {snippet.title}
          </h1>
          <p className="text-gray-800 dark:text-gray-200 py-2 md:text-lg">
            {snippet.description}
          </p>
        </div>
        <div className="mt-2 md:mt-6 scale-125 md:scale-150 ml-4 origin-center">
          <IconContext.Provider
            value={{
              className: 'w-9 h-9 fill-gray-900  dark:fill-gray-100'
            }}
          >
            <StackIcon iconTitle={snippet.iconTitle!} />
          </IconContext.Provider>
        </div>
      </div>
      {/* <hr className="w-full border-1 max-w-2xl border-gray-200 dark:border-gray-800" /> */}

      <div className="prose dark:prose-invert prose-slate  max-w-2xl  w-full md:prose-lg">
        <MDXRemote
          {...html!}
          components={
            {
              ...components
            } as any
          }
        />
      </div>
    </article>
  );
}
