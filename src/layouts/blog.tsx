import Image from 'next/future/image';
import { parseISO, format } from 'date-fns';
import { PropsWithChildren, Suspense } from 'react';
import BlurredImage from '@/components/Image';
import Container from '@/components/Container';
import { IPost } from '@/typings';
import { urlForImage } from '@/lib/sanity-client';
import { Tags } from '@/components/Tags';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: IPost }>) {
  return (
    <Container
      title={`${post.title} Dzmitry Svirin`}
      description={post.excerpt}
      image={urlForImage(post.coverImage!).url()}
      date={new Date(post.date).toISOString()}
      type="article"
      tags={post.tags?.map((tag) => tag.title)}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <Tags tags={post.tags} />
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        {post.coverImage && (
          <div className="flex flex-col w-full mb-2">
            <BlurredImage
              src={urlForImage(post.coverImage!).url()}
              alt={`Image for ${post.title}`}
            />
          </div>
        )}
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Dzmitry Svirin"
              height={24}
              width={24}
              sizes="20vw"
              src="/svirins.webp"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {`Dzmitry Svirin  • `}
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime}
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </Suspense>
      </article>
    </Container>
  );
}
