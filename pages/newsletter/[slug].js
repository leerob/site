import hydrate from 'next-mdx-remote/hydrate';
import { ChakraProvider } from '@chakra-ui/react';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import NewsletterLayout from '../../layouts/Newsletter';
import MDXComponents from '../../components/MDXComponents';
import theme from '../../styles/theme';

export default function Newsletter({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
    provider: {
      component: (props) => <ChakraProvider resetCSS theme={theme} {...props} />
    }
  });

  return (
    <NewsletterLayout frontMatter={frontMatter}>{content}</NewsletterLayout>
  );
}

export async function getStaticPaths() {
  const newsletters = await getFiles('newsletter');

  return {
    paths: newsletters.map((newsletter) => ({
      params: {
        slug: newsletter.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const newsletter = await getFileBySlug('newsletter', params.slug);

  return { props: newsletter };
}
