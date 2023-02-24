import { db } from 'lib/planetscale';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = await db.selectFrom('views').select(['slug', 'count']).execute();

  return NextResponse.json({ data });
}
