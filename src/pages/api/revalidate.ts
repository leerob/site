// import type { NextApiRequest, NextApiResponse } from 'next';
// import { isValidRequest } from '@sanity/webhook';
// import { sanityClient } from 'lib/sanity-server';
// import { postUpdatedQuery } from 'lib/queries';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // This isn't working yet - not sure why
//   if (!isValidRequest(req, process.env.SANITY_STUDIO_REVALIDATE_SECRET)) {
//     return res.status(401).json({ message: 'Invalid request' });
//   }

//   const { _id: id } = req.body;
// if (typeof id !== 'string' || !id) {
//   return res.status(400).json({ message: 'Invalid _id' });
// }

// try {
//   const slug = await sanityClient.fetch(postUpdatedQuery, { id });
//   await Promise.all([
//     res.revalidate('/blog'),
//     res.revalidate(`/blog/${slug}`)
//   ]);
//   return res.status(200).json({ message: `Updated ${slug}` });
// } catch (err) {
//   return res.status(500).json({ message: err.message });
// }
// }
import { getUpdatedPostSlug } from '@/lib/sanity-api';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';
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
    const slug = await getUpdatedPostSlug({id});
    await Promise.all([
      res.revalidate('/blog'),
      res.revalidate(`/blog/${slug}`)
    ]);
    return res.status(200).json({ message: `Updated ${slug}` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.json({ success: true });
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false
  }
};

async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}
