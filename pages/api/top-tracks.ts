import { getTopTracks } from 'lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await getTopTracks();

  if (response.status > 400) {
    return res.status(200).json([]);
  }

  const items = await response.json();

  const tracks = items.map((item) => ({
    artist: item.artists,
    songUrl: item.track_url,
    title: item.track_name,
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200',
  );

  return res.status(200).json({ tracks });
}
