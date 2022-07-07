import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
