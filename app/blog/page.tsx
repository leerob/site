import { PostPreview } from '@/app/ui/PostPreview';
import { searchPosts } from '@/app/lib/sanity';
import { SearchBar } from '@/app/ui/SearchBar';

type Props = {
  params: {};
  searchParams: { title?: string };
};

const isEmptyObject = (obj: Object) => {
  return JSON.stringify(obj) === '{}';
};

export default async function Blog(props: Props) {
  const searchParams = props.searchParams;
  const queryString = isEmptyObject(searchParams)
    ? '*'
    : `${searchParams.title}*`;
  const posts = await searchPosts(queryString);

  return (
    <>
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100">
            Blog
          </h1>
          <p className=" font-semibold  text-gray-100 text-base mt-2 md:text-lg">
            Posts about code, dev life and various{' '}
            <span role="image" aria-label="technomagical">
              ⚗️
            </span>{' '}
            things.
          </p>
        </div>
      </div>
      <div className="flex flex-col  max-w-2xl mx-auto pb-16 w-full">
        <SearchBar />
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
