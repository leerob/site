import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getTagSlugs, getPostsByTag } from '@/lib/sanity-api';
import { IParams, IPost } from '@/typings/types';

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
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {`Posts for tag ${title}`}
        </h1>
        {posts.map((post) => (
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
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: { params: IParams }) {
  const { title, posts } = await getPostsByTag(params.slug);

  return { props: { posts, title } };
}
