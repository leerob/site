import { PostPreview } from '@/app/ui/PostPreview';
import { getPostsByTag, getTagSlugs } from '@/app/lib/sanity';

export default async function TagPage({
  params
}: {
  params: {
    tag: string;
    searchParams: URLSearchParams;
  };
}) {
  const { posts, title, description } = await getPostsByTag(params.tag);
  return (
    <>
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize md:text-5xl text-gray-100">
            {`Posts with #${title} tag`}
          </h1>
          {description && (
            <p className="font-semibold  text-gray-100 text-base mt-2 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col  max-w-2xl mx-auto pb-16 w-full">
        <div className="grid grid-cols-1 divide-y  divide-gray-300/25">
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
            <p className="  text-gray-400 italic text-lg">No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const paths = await getTagSlugs();
  return paths.map((tag) => ({
    tag
  }));
}
