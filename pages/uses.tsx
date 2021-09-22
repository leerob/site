import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFileBySlug } from 'lib/mdx';
import components from 'components/MDXComponents';
import UsesLayout from 'layouts/uses';

export default function Uses({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <UsesLayout>
      <Component components={components as any} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug('uses');

  return { props: uses };
}
