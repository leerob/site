import { Suspense, useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { InferGetStaticPropsType } from 'next';
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
      title="Blog – Dzmitry Svirynn"
      description="Posts about code, dev life and various other things."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-6 capsize text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-400 ">
          I&apos;ve been writing online since 2022, mostly about web development
          and Linux things.
          <br />
          Reasons to start blogging were: overcome shyness 😥, get better
          understanding 👨‍💻 by explaining and be helpful 🦸as possible to others.
        </p>
        <div className="relative w-full my-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles by title"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-700  dark:bg-gray-800 dark:text-gray-100 focus:border-signal-opaque dark:focus:border-signal-opaque focus-visible:ring-1 focus:ring-signal focus:outline-none"
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
        <div className="grid grid-cols-1 divide-y  divide-gray-700/25 dark:divide-gray-300/25">
          {filteredBlogPosts.length ? (
            filteredBlogPosts.map((post) => (
              <BlogPost
                key={post.title}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
              />
            ))
          ) : (
            <p className=" text-gray-700 dark:text-gray-400 italic">
              No results found
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await getPosts(preview);

  return { props: { posts } };
}
