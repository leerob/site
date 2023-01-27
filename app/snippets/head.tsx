import { NextSeo } from 'next-seo';

import { DEFAULT_SEO } from 'config';

export default async function Head() {
  const updateMeta = {
    ...DEFAULT_SEO,
    title: 'Code Snippets | Dzmitry Svirin',
    description: 'A mix of snippets I&lsquo;ve found usefull and want to share'
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
