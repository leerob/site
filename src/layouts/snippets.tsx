import Container from '@/components/Container';
import type { PropsWithChildren } from 'react';
import { ISnippet } from '@/typings';
import StackIcon from '@/components/StackIcon';

export default function SnippetLayout({
  children,
  snippet
}: PropsWithChildren<{ snippet: ISnippet }>) {
  return (
    <Container
      title={`${snippet.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl capsize md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-400">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <StackIcon iconTitle={snippet.iconTitle!} />
          </div>
        </div>
        <div className="prose dark:prose-invert prose-slate  max-w-2xl  w-full">
          {children}
        </div>
      </article>
    </Container>
  );
}
