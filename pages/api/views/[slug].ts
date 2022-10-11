import type { NextApiRequest, NextApiResponse } from 'next';
import { grafbase, gql } from 'lib/grafbase';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();
    const query = gql`
      {
        view(by: { slug: "${slug}" }) {
          count
        }
      }
    `

    const { view } = await grafbase.request(query);
    const count = view.count + 1;

    // TODO add upsert and atomic incremental of count
    if (req.method === 'POST') {
      if (view === null) {
        const createMutation = gql`
          mutation {
            viewCreate(input: { slug: "${slug}" }) {
              view {
                id
              }
            }
          }
        `

        await grafbase.request(createMutation);
      } else {
        const updateMutation = gql`
          mutation {
            viewUpdate(by: { slug: "${slug}" }, input: { count: "${count}" }) {
              view {
                id
              }
            }
          }
        `

        await grafbase.request(updateMutation);
      }

      return res.status(200).json({
        total: count.toString()
      });
    }

    if (req.method === 'GET') {
      return res.status(200).json({ total: view.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
