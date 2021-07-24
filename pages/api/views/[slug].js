import db from '@/lib/planetscale';

export default async function handler(req, res) {
  try {
    const [rows] = await db.query(
      `
      SELECT * FROM views
      WHERE slug = ?;
    `,
      [req.query.slug]
    );

    if (req.method === 'POST') {
      if (rows.length == 0) {
        await db.query(
          `
          INSERT INTO views (slug)
          VALUES (?);
        `,
          [req.query.slug]
        );

        return res.status(200).json({
          total: 1
        });
      } else {
        await db.query(
          `
          UPDATE views
          SET count = count + 1
          WHERE slug = ?;
        `,
          [req.query.slug]
        );

        return res.status(200).json({
          total: rows[0].count + 1
        });
      }
    }

    if (req.method === 'GET') {
      return res.status(200).json({ total: rows[0].count });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
