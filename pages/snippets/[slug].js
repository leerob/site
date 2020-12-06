import hydrate from 'next-mdx-remote/hydrate';
import { ChakraProvider } from '@chakra-ui/react';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import SnippetLayout from '../../layouts/snippets';
import MDXComponents from '../../components/MDXComponents';
import theme from '../../styles/theme';

export default function Snippet({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
    provider: {
      component: (props) => <ChakraProvider resetCSS theme={theme} {...props} />
    }
  });

  return <SnippetLayout frontMatter={frontMatter}>{content}</SnippetLayout>;
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets');

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('snippets', params.slug);

  return { props: snippet };
}
