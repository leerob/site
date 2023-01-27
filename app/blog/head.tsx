import { NextSeo } from 'next-seo';

import { DEFAULT_SEO } from 'config';

export default async function Head() {
  const updateMeta = {
    ...DEFAULT_SEO,
    title: 'Blog | Dzmitry Svirin',
    description: 'Posts about code, dev life and 🎇 other things.'
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
