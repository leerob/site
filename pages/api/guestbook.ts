import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { queryBuilder } from 'lib/planetscale';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(403).send('Unauthorized');
  }

  const email = session.user.email as string;
  const name = session.user.name as string;

  if (req.method === 'POST') {
    await queryBuilder
      .insertInto('guestbook')
      .values({
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
      })
      .execute();

    return res.status(200).json({ error: null });
  }

  if (req.method === 'DELETE') {
    await queryBuilder
      .deleteFrom('guestbook')
      .where('id', '=', req.body.id)
      .where('email', '=', email)
      .execute();

    return res.status(204).json({});
  }

  return res.send('Method not allowed.');
}
