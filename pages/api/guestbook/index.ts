import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import db from 'lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [rows] = await db.query(
    `
    SELECT id, body, created_by, updated_at FROM guestbook
    ORDER BY updated_at DESC;
  `,
    []
  );

  if (req.method === 'GET') {
    return res.json(rows);
  }

  const session = await getSession({ req });
  const { email, name } = session.user;

  if (req.method === 'POST') {
    if (!session) {
      return res.status(403).send('Unauthorized');
    }

    const body = (req.body.body || '').slice(0, 500);
    const [insert] = await db.query(
      `
      INSERT INTO guestbook (email, body, created_by)
      VALUES (?, ?, ?);
    `,
      [email, body, name]
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
