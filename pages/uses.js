import hydrate from 'next-mdx-remote/hydrate';
import { ChakraProvider } from '@chakra-ui/react';

import { getFileBySlug } from '../lib/mdx';
import UsesLayout from '../layouts/uses';

import MDXComponents from '../components/MDXComponents';
import theme from '../styles/theme';

export default function Uses({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
    provider: {
      component: (props) => <ChakraProvider resetCSS theme={theme} {...props} />
    }
  });

  return <UsesLayout frontMatter={frontMatter}>{content}</UsesLayout>;
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
