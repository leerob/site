import { db } from 'lib/planetscale';

export async function POST(request: Request) {
  const slug = 'rust';
  const data = await db
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .execute();

  const views = !data.length ? 0 : Number(data[0].count);

  await db
    .insertInto('views')
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ count: views + 1 })
    .execute();

  return new Response(null, { status: 200 });
}
