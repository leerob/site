import { NextSeo } from 'next-seo';

import { DEFAULT_SEO } from 'config'; // your path may vary

export default async function Head() {
  const updateMeta = {
    ...DEFAULT_SEO,
    title: 'Tag page',
    description: 'Tag page'
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
