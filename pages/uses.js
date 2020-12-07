import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/uses';
import MDXComponents from '@/components/MDXComponents';

export default function Uses({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <UsesLayout frontMatter={frontMatter}>{content}</UsesLayout>;
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
