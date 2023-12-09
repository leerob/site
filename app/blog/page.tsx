import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className="flex flex-col">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="flex items-start mb-8">
            <time className="flex-shrink-0 w-32 text-right pr-8 font-medium text-gray-600">
              {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}
            </time>
            <div className="w-full">
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4 hover:underline"
                href={`/blog/${post.slug}`}
              >
                <div className="flex-grow">
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </p>
                  <Suspense fallback={<p className="h-6" />}>
                  </Suspense>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </section>
  );
}
