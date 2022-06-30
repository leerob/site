import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/blog';
import components from '@/components/MDXComponents';
import { postQuery, postSlugsQuery } from '@/lib/queries';
import { sanityClient, getClient } from '@/lib/sanity-server';
import { mdxToHtml } from '@/lib/mdx';
import { Post } from '@/typings/types';

export default function PostPage({ post }: { post: Post }) {
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
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

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
