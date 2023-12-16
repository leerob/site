import Image from 'next/image';
import { getPost, getPostSlugs } from '@/app/lib/sanity';
import { Tags } from '@/app/ui/Tags';
import { SanityImage } from '@/app/ui/SanityImage';
import { PortableText } from '@portabletext/react';
import { PTComponents } from '@/app/ui/PortableText';

export default async function PostPage({
  params
}: {
  params: {
    slug: string;
    searchParams: URLSearchParams;
  };
}) {
  const post = await getPost(params.slug);

  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-12">
      <Tags tags={post.tags} />
      <h1 className="my-2 text-3xl font-bold  tracking-tight capsize   md:text-5xl text-gray-100">
        {post.title}
      </h1>
      {post.coverImage && (
        <div className="flex flex-col w-full my-4">
          <SanityImage image={post.coverImage} />
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
          <p className="ml-2 text-xs md:text-sm lg:text-base  text-gray-400">
            <a
              className="  text-gray-300  font-medium link-underline link-underline-gradient"
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
        <p className="mt-2 text-xs md:text-sm lg:text-base  text-gray-400 min-w-32">
          {post.readingTime}
        </p>
      </div>
      <div className="w-full max-w-2xl mt-4 prose  prose-invert  md:prose-lg">
        <PortableText
          value={post.body}
          onMissingComponent={false}
          // @ts-ignore
          components={PTComponents}
        />
      </div>
    </article>
  );
}
export async function generateStaticParams() {
  const paths = await getPostSlugs();
  return paths.map((slug) => ({
    slug
  }));
}
