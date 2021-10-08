import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import UsesLayout from 'layouts/uses';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <UsesLayout>
      <Component components={components as any} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const uses = allOtherPages.find((page) => page.slug === 'uses')!;

  return { props: uses };
}
