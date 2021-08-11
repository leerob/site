import db from '@/lib/planetscale';
import session from '@/lib/session';

export default async function handler(req, res) {
  session(req, res);

  const { login, email } = req.session;
  const [rows] = await db.query(`
    SELECT id, body, created_by, updated_at FROM guestbook
    ORDER BY updated_at DESC;
  `);

  if (req.method === 'GET') {
    return res.json(rows);
  }

  if (req.method === 'POST') {
    if (!login) {
      return res.status(403).send('Unauthorized');
    }

    const body = (req.body.body || '').slice(0, 500);
    const [insert] = await db.query(
      `
      INSERT INTO guestbook (email, body, created_by)
      VALUES (?, ?, ?);
    `,
      [email, body, login]
    );

    const [rows] = await db.query(
      `
      SELECT id, body, created_by, updated_at FROM guestbook
      WHERE id = ?;
    `,
      [insert.insertId]
    );

    return res.status(200).json(rows[0]);
  }

  return res.send('Method not allowed.');
}
