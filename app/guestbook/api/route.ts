import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'app/api/auth/[...nextauth]/route';
import { db } from 'lib/planetscale';
import { NextResponse } from 'next/server';

async function getSession(): Promise<Session> {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function POST(request: Request) {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;
  const { value } = await request.json();
  const body = (value || '').slice(0, 500);

  await db
    .insertInto('guestbook')
    .values({ email, body, created_by })
    .execute();

  return NextResponse.json({ error: null });
}

export async function DELETE(request: Request) {
  const session = await getSession();
  const email = session.user?.email as string;
  const { id } = await request.json();

  await db
    .deleteFrom('guestbook')
    .where('id', '=', id)
    .where('email', '=', email)
    .execute();

  return new Response(null, { status: 204 });
}
