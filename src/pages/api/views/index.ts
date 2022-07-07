import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma-api';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true
      }
    });

    return res.status(200).json({ total: totalViews._sum.count!.toString() });
  } catch (e) {
    if (e instanceof Error) return new Error(e.message);
    return new Error(`unknown error: ${JSON.stringify(e)}`);
  }
}
