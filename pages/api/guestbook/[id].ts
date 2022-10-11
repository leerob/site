import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { grafbase, gql } from 'lib/grafbase';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const { id } = req.query;
  const { email } = session.user;

  const query = gql`
    {
      guestbook(id: "${id}") {
        id
        body
        createdBy
        updatedAt
      }
    }
  `

  const { guestbook } = await grafbase.request(query);

  if (req.method === 'GET') {
    return res.json({
      id: guestbook.id,
      body: guestbook.body,
      createdBy: guestbook.createdBy,
      updatedAt: guestbook.updatedAt
    });
  }

  if (!session || email !== guestbook.email) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'DELETE') {
    const deleteMutation = gql`
      {
        guestbookDelete(id: "${id}") {
          deletedId
        }
      }
    `

    await grafbase.request(deleteMutation);

    return res.status(204).json({});
  }

  if (req.method === 'PUT') {
    const body = (req.body.body || '').slice(0, 500);
    const updateMutation = gql`
      {
        guestbookUpdate(id: "${id}", input: { body: "${body}" }) {
          guestbook {
            id
          }
        }
      }
    `

    await grafbase.request(updateMutation);

    return res.status(201).json({
      ...guestbook,
      body
    });
  }

  return res.send('Method not allowed.');
}
