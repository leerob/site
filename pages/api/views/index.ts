import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [rows] = await db.query(
      `
      SELECT SUM(count) as total
      FROM views;
    `,
      []
    );

    const total = rows[0]['total'];
    return res.status(200).json({ total });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
