import Container from '@/components/Container';
import SnippetPreview from '@/components/SnippetPreview';
import { getSnippets } from '@/lib/sanity-api';
import { InferGetStaticPropsType } from 'next';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Code Snippets – Dzmitry Svirin"
      description="A mix of snippets I've found usefull and want to share"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
          Code Snippets
        </h1>
        <h2 className="text-[22px] md:text-2xl tracking-tight text-gray-900 dark:text-gray-100 font-normal">
          Some 🎲 stuff I&apos;ve found useful and want to share.
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-2 sm:grid-cols-2">
          {snippets?.length &&
            snippets?.map((snippet) => (
              <SnippetPreview
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
