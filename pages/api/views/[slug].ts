import { queryBuilder } from 'lib/planetscale';
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    if (!slug) {
      return new Response(JSON.stringify({ message: 'Slug is required.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await queryBuilder
      .selectFrom('views')
      .where('slug', '=', slug)
      .select(['count'])
      .execute();

    const views = !data.length ? 0 : Number(data[0].count);

    if (req.method === 'POST') {
      await queryBuilder
        .insertInto('views')
        .values({ slug, count: 1 })
        .onDuplicateKeyUpdate({ count: views + 1 })
        .execute();

      return new Response(JSON.stringify({ total: views + 1 }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    if (req.method === 'GET') {
      return new Response(JSON.stringify({ total: views }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ message: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
