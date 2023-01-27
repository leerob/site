import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { ArticleJsonLd } from 'next-seo';
import components from 'ui/MDXComponents';
import { mdxToHtml } from 'lib/mdx';
import { getPost, getPostSlugs } from 'lib/sanity-api';
import BlurredImage from 'ui/Image';
import { Tags } from 'ui/Tags';
import { urlForImage } from 'lib/sanity-client';

export async function generateStaticParams() {
  const paths = await getPostSlugs();
  return paths.map((slug) => ({ slug: slug }));
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  const { html, readingTime } = await mdxToHtml(post.content);

  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-12">
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url="https://example.com/blog"
        title={`${post.title} Dzmitry Svirin`}
        images={[urlForImage(post.coverImage).url()]}
        datePublished={new Date(post.date).toISOString()}
        authorName="Dzmitry Svirin"
        description={post.excerpt}
      />
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
          {readingTime}
        </p>
      </div>
      <div className="w-full max-w-2xl mt-4 prose prose-slate dark:prose-invert  md:prose-lg">
        <MDXRemote
          {...html!}
          components={
            {
              ...components
            } as any
          }
        />
      </div>
    </article>
  );
}
