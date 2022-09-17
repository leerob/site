import Image from 'next/future/image';
import { PropsWithChildren, Suspense } from 'react';

import Container from '@/components/Container';
import BlurredImage from '@/components/Image';
import { Tags } from '@/components/Tags';
import { urlForImage } from '@/lib/sanity-client';
import { IPost } from '@/typings';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: IPost }>) {
  return (
    <Container
      title={`${post.title} Dzmitry Svirin`}
      description={post.excerpt}
      image={urlForImage(post.coverImage).url()}
      date={new Date(post.date).toISOString()}
      type="article"
      tags={post.tags?.map((tag) => tag.title)}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-12">
        <Tags tags={post.tags} />
        <h1 className="my-2 text-3xl font-bold  tracking-tight capsize  text-gray-900 md:text-5xl dark:text-gray-100">
          {post.title}
        </h1>
        {post.coverImage && (
          <div className="flex flex-col w-full my-4">
            <BlurredImage
              src={urlForImage(post.coverImage).url()}
              alt={`Image for ${post.title}`}
            />
          </div>
        )}
        <div className="flex flex-row items-start justify-between w-full mt-2 tems-center">
          <div className="flex items-center">
            <Image
              alt="Dzmitry Svirin"
              height={36}
              width={36}
              src="/svirins.png"
              className="rounded-full"
            />
            <p className="ml-2 text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-400">
              <a
                className=" text-gray-800 dark:text-gray-300  font-medium link-underline link-underline-gradient"
                href="https://twitter.com/svirins"
              >
                Dzmitry Svirin
              </a>
              {` • `}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }).format(new Date(post.date))}
            </p>
          </div>
          <p className="mt-2 text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 min-w-32">
            {post.readingTime}
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full max-w-2xl mt-4 prose prose-slate dark:prose-invert  md:prose-lg">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
