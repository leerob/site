import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFileBySlug } from '@/lib/mdx';
import components from '@/components/MDXComponents';
import UsesLayout from '@/layouts/uses';

export default function Uses({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <UsesLayout frontMatter={frontMatter}>
      <Component components={components} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
