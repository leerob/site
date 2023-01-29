import Link from 'next/link';
import BlogViews from './views';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <p className="font-mono text-neutral-500 text-sm">
                <Suspense fallback="–">
                  {/* @ts-expect-error Server Component */}
                  <BlogViews slug={post.slug} />
                </Suspense>
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
