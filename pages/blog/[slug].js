import hydrate from 'next-mdx-remote/hydrate';
import { ChakraProvider } from '@chakra-ui/react';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blogg';
import MDXComponents from '../../components/MDXComponents';
import theme from '../../styles/theme';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
    provider: {
      component: (props) => <ChakraProvider resetCSS theme={theme} {...props} />
    }
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

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
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
