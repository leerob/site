import type { NextApiRequest, NextApiResponse } from 'next';
import { getPostBySlug } from '@/lib/sanity-api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const post = await getPostBySlug({
    slug: req.query.slug
  });

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: `/blog/${post.slug}` });
  res.end();
}
