// @ts-nocheck

import { StackIcon } from '@/app/ui/Icons';
import { getSnippet, getSnippetSlugs } from '@/app/lib/sanity';

export default async function SnippetsPage(props) {
  const snippet = await getSnippet(props.slug);

  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
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
          <StackIcon iconTitle={snippet.iconTitle!} />
        </div>
      </div>

      <div className="prose dark:prose-invert prose-slate  max-w-2xl  w-full md:prose-lg"></div>
    </article>
  );
}

export async function generateStaticParams() {
  const paths = await getSnippetSlugs();
  return paths.map((slug) => ({
    slug
  }));
}
