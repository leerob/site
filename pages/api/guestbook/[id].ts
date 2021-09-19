import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import db from 'lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const { id } = req.query;
  const { name } = session.user;

  const [rows] = await db.query(
    `
    SELECT id, body, created_by, updated_at FROM guestbook
    WHERE id = ?;
  `,
    [id]
  );
  const entry = rows[0];

  if (req.method === 'GET') {
    return res.json(entry);
  }

  if (req.method === 'DELETE') {
    if (!name || name !== entry.created_by) {
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
    if (!name || name !== entry.created_by) {
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
