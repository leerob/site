import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import Container from '@/components/Container';
import PostPreview from '@/components/PostPreview';
import { getPosts } from '@/lib/sanity-api';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Container
      title="Blog – Dzmitry Svirin"
      description="Posts about code, dev life and 🎇 other things."
    >
      <div className="flex flex-col  max-w-2xl mx-auto w-full">
        <div className="flex flex-col">
          <h1 className="mb-4 text-3xl font-bold tracking-tight capsize text-gray-900 md:text-5xl dark:text-gray-100">
            Blog
          </h1>
          <p className="text-gray-900 font-semibold  dark:text-gray-100 text-base mt-2 md:text-lg">
            Posts about code, dev life and various{' '}
            <span role="image" aria-label="technomagical">
              ⚗️
            </span>{' '}
            things.
          </p>
        </div>
      </div>
      <div className="flex flex-col  max-w-2xl mx-auto pb-16 w-full">
        <div className="relative w-full mt-4 mb-2">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles by title"
            className="block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-200 rounded-md dark:border-gray-700  dark:bg-gray-800 dark:text-gray-100 focus:border-active/80 focus-visible:ring-1 focus:ring-active/75 focus:outline-none md:text-lg"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-700/25 dark:divide-gray-300/25">
          {filteredBlogPosts.length ? (
            filteredBlogPosts.map((post) => (
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

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts } };
}
