import Unsplash, { toJson } from 'unsplash-js';

let unsplash;

export default async (_, res) => {
  if (!unsplash) {
    unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });
  }

  const userStats = await unsplash.users.statistics('leerob');
  const { downloads, views } = await toJson(userStats);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    downloads: downloads.total,
    views: views.total
  });
};
