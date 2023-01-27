import PostPreview from 'ui/PostPreview';
import { getPostsByTag, getTagSlugs } from 'lib/sanity-api';
// title={`Posts for tag ${title}`}
// description="Posts about code, dev life and various other things."
export async function generateStaticParams() {
  const paths = await getTagSlugs();
  return paths.map((slug) => ({ tag: slug }));
}

export default async function TagPage({ params }) {
  const { posts, title } = await getPostsByTag(params.tag);

  return (
    <div className="flex flex-col max-w-2xl mx-auto pb-16 w-full">
      <h1 className="mb-4 text-3xl font-bold capsize tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
        {`Posts with tag '${title}'`}
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
  );
}
