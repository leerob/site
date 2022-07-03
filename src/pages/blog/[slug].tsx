import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/blog';
import components from '@/components/MDXComponents';
import { getPost, getPostSlugs } from '@/lib/sanity-api';
import { mdxToHtml } from '@/lib/mdx';
import { IParams, TPost } from '@/typings/types';

export default function PostPage({ post }: { post: TPost }) {
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
  const paths = await getPostSlugs();
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({
  params,
  preview
}: {
  params: IParams;
  preview: boolean;
}) {
  const post = await getPost(params.slug, preview);

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
