import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { InferGetStaticPropsType } from 'next';
import { allSnippetsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Snippet } from 'lib/types';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Lee Robinson"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are a collection of code snippets I've used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets: Snippet[] = await getClient(preview).fetch(allSnippetsQuery);

  return { props: { snippets } };
}
