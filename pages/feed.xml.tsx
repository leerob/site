import RSS from 'rss';
import { sanityClient } from 'lib/sanity-server';
import { indexQuery } from 'lib/queries';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServerSideTranslation from '@/translations/ServerSideTranslation';

export async function getServerSideProps({ res, locale = 'zh' }) {
  const i18nSSRConfig = await serverSideTranslations(locale ,['common']);
  // @ts-ignore
  const t = await getServerSideT(i18nSSRConfig);
  const feed = new RSS({
    title: t('author.name'),
    site_url: 'https://leerob.io',
    feed_url: 'https://leerob.io/feed.xml'
  });

  const allPosts = await sanityClient.fetch(indexQuery);
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://leerob.io/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) }
  };
}

export default function RSSFeed() {
  return null;
}
