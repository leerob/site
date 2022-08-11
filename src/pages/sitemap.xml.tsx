import { type ServerResponse } from 'http';

import { getPostSlugs } from '@/lib/sanity-api';

/**
 * todo: add dedicated tag pages for each tag
 **/

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://svirins.codes/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;
export async function getServerSideProps({ res }: { res: ServerResponse }) {
  const allPosts = await getPostSlugs();
  const allPages = [
    ...allPosts.map((slug) => `blog/${slug}`),
    ...['', 'blog', 'snippets']
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

export default function Sitemap() {
  return null;
}
