import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Code Snippets – Lee Robinson"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Code Snippets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          These are a collection of code snippets I've used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
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

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');

  return { props: { snippets } };
}
