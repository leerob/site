import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/uses';
import MDXComponents from '@/components/MDXComponents';

export default function Uses({ mdxSource, frontMatter }) {
  return (
    <UsesLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
