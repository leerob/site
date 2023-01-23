import type { NextApiRequest, NextApiResponse } from 'next';
import { queryBuilder } from 'lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await queryBuilder
        .insertInto('views')
        .values({ slug, count: 1 })
        .returning('count')
        // .onConflict((oc) =>
        //   oc.column('slug').doUpdateSet({
        //     count: (eb) => eb.ref('excluded.count') + 1,
        //   })
        // )
        .execute();

      return res.status(200).json({
        total: newOrUpdatedViews.toString(),
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
