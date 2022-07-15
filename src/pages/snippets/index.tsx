import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { InferGetStaticPropsType } from 'next';
import { getSnippets } from '@/lib/sanity-api';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Dzmitry Svirin"
      description="A mix of snippets I've found usefull and want to share"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Shell scripts, functions and some 🎲 stuff I&apos;ve found useful and
          want to share.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets?.length &&
            snippets?.map((snippet) => (
              <FunctionCard
                key={snippet.slug}
                title={snippet.title}
                slug={snippet.slug}
                iconTitle={snippet.iconTitle}
                description={snippet.description}
              />
            ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets = await getSnippets(preview);

  return { props: { snippets } };
}
