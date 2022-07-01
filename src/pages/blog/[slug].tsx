import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/blog';
import components from '@/components/MDXComponents';
import { getPost, getPostSlugs } from '@/lib/sanity-api';
import { mdxToHtml } from '@/lib/mdx';
import type { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

export default function PostPage({ post }: { post: Props }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostSlugs()
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: {params: IParams}) {
  const post = await getPost({slug: params.slug}) 

  if (!post) {
    return { notFound: true };
  }

  const { html, readingTime } = await mdxToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content: html,
        readingTime
      }
    }
  };
}
