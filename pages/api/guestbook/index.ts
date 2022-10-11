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
  if (req.method === 'GET') {
    const query = gql`
      {
        guestbookCollection(last: 100) {
          edges {
            node {
              id
              body
              createdBy
            }
          }
        }
      }
    `

    const { guestbookCollection } = await grafbase.request(query);

    return res.json(
      guestbookCollection.edges.map(({ node }) => ({
        id: node.id,
        body: node.body,
        createdBy: node.createdBy,
        updatedAt: node.updatedAt
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name } = session.user;
  const body = (req.body.body || '').slice(0, 500);

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const mutation = gql`
      mutation {
        guestbookCreate(input: {email: "${email}", body: "${body}", createdBy: "${name}"}) {
          guestbook {
            id
            body
            createdBy
            updatedAt
          }
        }
      }
    `
    const { guestbook } = await grafbase.request(mutation)

    return res.status(200).json({
      id: guestbook.id,
      body: guestbook.body,
      createdBy: guestbook.createdBy,
      updatedAt: guestbook.updatedAt
    });
  }

  return res.send('Method not allowed.');
}
