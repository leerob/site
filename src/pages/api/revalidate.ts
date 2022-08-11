import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getUpdatedPostSlug } from '@/lib/sanity-api';
const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
  const body = await readBody(req); // Read the body into a string
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' });
    return;
  }

  const { _id: id } = JSON.parse(body);

  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ message: 'Invalid _id' });
  }

  try {
    const slug = await getUpdatedPostSlug(id);
    await Promise.all([
      res.revalidate('/blog'),
      res.revalidate(`/blog/${slug}`),
      res.json({ success: true })
    ]);
    return res.status(200).json({ message: `Updated ${slug}` });
  } catch (e) {
    if (e instanceof Error) return new Error(e.message);
    return new Error(`unknown error: ${JSON.stringify(e)}`);
  }
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false
  }
};

async function readBody(readable: NextApiRequest) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}
