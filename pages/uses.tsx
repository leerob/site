import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import UsesLayout from 'layouts/uses';
import { allOtherPages } from 'contentlayer/generated';
import type { OtherPage } from 'contentlayer/generated';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

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
