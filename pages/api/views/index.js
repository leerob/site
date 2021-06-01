import db from '@/lib/planetscale';

export default async function handler(_, res) {
  try {
    const [rows] = await db.query(`
      SELECT SUM(count)
      FROM views;
    `);

    const total = rows[0]['SUM(count)'];
    return res.status(200).json({ total });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
