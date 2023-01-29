import { queryBuilder } from 'lib/planetscale';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();
    const views = Number(JSON.parse(req.body).views);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('views')
        .values({ slug, count: 1 })
        .onDuplicateKeyUpdate({ count: views + 1 })
        .execute();

      return res.status(200).json({
        total: views + 1,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
