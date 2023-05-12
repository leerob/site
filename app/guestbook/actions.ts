'use server';

import { auth } from 'app/auth';
import { Session } from 'next-auth';
import { queryBuilder } from 'lib/planetscale';
import { revalidatePath } from 'next/cache';

async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;
  const entry = formData.get('entry')?.toString() || '';
  const body = entry.slice(0, 500);

  await queryBuilder
    .insertInto('guestbook')
    .values({ email, body, created_by })
    .execute();

  revalidatePath('/guestbook');
}
