import { queryBuilder } from 'lib/planetscale';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
    const data = await queryBuilder
      .selectFrom('views')
      .select(['slug', 'count'])
      .execute();

    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ message: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
