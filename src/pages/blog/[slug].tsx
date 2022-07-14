import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from '@/layouts/blog';
import components from '@/components/MDXComponents';
import { getPost, getPostSlugs } from '@/lib/sanity-api';
import { mdxToHtml } from '@/lib/mdx';
import { IParams, IPost } from '@/typings';

// TODO: consider lazy hydration for MDXRemote
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
    fallback: 'blocking'
  };
}

export async function getStaticProps({
  params,
  preview = false
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
        mdxContent: html,
        readingTime
      }
    }
  };
}
