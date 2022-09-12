import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { getClient } from 'lib/sanity-server';
import { postBySlugQuery } from 'lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const post = await getClient(req.preview ?? false).fetch(postBySlugQuery, {
        slug,
      });

      if (!post) {
        return res.status(401).json({ message: 'Invalid slug' });
      }

      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString()
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      });

      return res.status(200).json({ total: views.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
