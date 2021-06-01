import db from '@/lib/planetscale';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const [result] = await db.query(`
        INSERT INTO views (slug) VALUES("${req.query.slug}")
        ON DUPLICATE KEY
        UPDATE count = last_insert_id(count + 1), updated_at = now();
      `);

      const isNewValue = result['insertId'] === 0;
      if (isNewValue) {
        return res.status(200).json({
          total: 1
        });
      }

      const [rows] = await db.query(`SELECT last_insert_id();`);
      const newCount = rows[0]['last_insert_id()'];

      return res.status(200).json({
        total: newCount
      });
    }

    if (req.method === 'GET') {
      const [rows] = await db.query(`
        SELECT * FROM views
        WHERE slug = "${req.query.slug}";
      `);

      return res.status(200).json({ total: rows[0].count });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
