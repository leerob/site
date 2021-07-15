import db from '@/lib/planetscale';
import session from '@/lib/session';

export default async function handler(req, res) {
  session(req, res);

  const { id } = req.query;
  const { login } = req.session;

  const [rows] = await db.query(
    `
    SELECT * FROM guestbook
    WHERE id = ?;
  `,
    [id]
  );
  const entry = rows[0];

  if (req.method === 'GET') {
    return res.json(entry);
  }

  if (req.method === 'DELETE') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    await db.query(
      `
      DELETE FROM guestbook
      WHERE id = ?;
    `,
      [id]
    );
    return res.status(204).json({});
  }

  if (req.method === 'PUT') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    const body = (req.body.body || '').slice(0, 500);
    await db.query(
      `
      UPDATE guestbook
      SET body = ?, updated_at = now()
      WHERE id = ?;
    `,
      [body, id]
    );

    return res.status(201).json({
      ...entry,
      body
    });
  }

  return res.send('Method not allowed.');
}
