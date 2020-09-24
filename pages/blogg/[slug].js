import hydrate from 'next-mdx-remote/hydrate';

import { getPosts, getPostBySlug } from '../../lib/blog';
import BlogLayout from '../../layouts/Blog';
import MDXComponents from '../../components/MDXComponents';

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return { props: post };
}
