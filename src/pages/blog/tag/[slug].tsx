import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getTagSlugs, getPostsByTag } from '@/lib/sanity-api';
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
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black md:text-5xl dark:text-white">
          {`Posts for tag ${title}`}
        </h1>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          {`I've been writing online since 2022, mostly about web development and Linux thingss.
            In total, I've written ${posts.length} articles on my blog. Reasons to start blogging were: overcome shyness, get better understanding of some concepts by explaining to others and be helpful as possible to others.
            Use the search below to filter by title.`}
        </p>
        {posts?.length > 0 &&
          posts?.map((post) => (
            <BlogPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          ))}
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
