import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessToken = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    'https://api.unsplash.com//users/leerob/statistics',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      method: 'GET'
    }
  );

  const unsplashdata = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    downloads: unsplashdata.downloads.total,
    views: unsplashdata.views.total
  });
}
