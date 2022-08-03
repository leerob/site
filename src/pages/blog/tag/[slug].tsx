import Container from '@/components/Container';
import PostPreview from '@/components/PostPreview';
import { getPostsByTag, getTagSlugs } from '@/lib/sanity-api';
import { IParams, IPost } from '@/typings';

export default function TagPage({
  posts,
  title
}: {
  posts: IPost[];
  title: string;
}) {
  return (
    <Container
      title={`Posts for tag ${title}`}
      description="Posts about code, dev life and various other things."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-100 capsize">
          {`Posts with tag ${title}`}
        </h1>
        <div className="grid grid-cols-1 divide-y  divide-gray-700/25 dark:divide-gray-300/25">
          {posts.length ? (
            posts.map((post) => (
              <PostPreview
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))
          ) : (
            <p className=" text-gray-700 dark:text-gray-400 italic text-lg">
              No results found
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await getTagSlugs();
  return {
    paths: paths.map((slug) => ({ params: { slug: slug } })),
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
  const { posts, title } = await getPostsByTag(params.slug, preview);
  return { props: { posts, title } };
}
