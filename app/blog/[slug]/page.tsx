import { MDXRemote } from 'next-mdx-remote';

import components from '@/app/ui/MDXComponents';
import BlogLayout from '@/layouts/blog';
import { mdxToHtml } from '@/app/lib/mdx';
import { getPost, getPostSlugs } from '@/app/lib/sanity-api';
import { IParams, IPost } from '@/app/lib/definitions';

export default function PostPage({ post }: { post: IPost }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.mdxContent!}
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
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: IParams }) {
  const post = await getPost(params.slug);

  if (!post) {
    return { notFound: true };
  }

  const { html, readingTime } = await mdxToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        mdxContent: html,
        readingTime
      }
    }
  };
}
