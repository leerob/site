'use server';

import { auth } from 'lib/auth';
import { type Session } from 'next-auth';
import { queryBuilder } from 'lib/planetscale';
import { revalidatePath } from 'next/cache';

export async function increment(slug: string) {
  const data = await queryBuilder
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .execute();

  const views = !data.length ? 0 : Number(data[0].count);

  await queryBuilder
    .insertInto('views')
    .values({ slug, count: 1 })
    .onDuplicateKeyUpdate({ count: views + 1 })
    .execute();
  return;
}

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

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  const entry = formData.get('entry')?.toString() || '';
  const body = entry.slice(0, 500);

  await queryBuilder
    .insertInto('guestbook')
    .values({ email, body, created_by })
    .execute();

  revalidatePath('/guestbook');

  const data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'guestbook@leerob.io',
      to: 'me@leerob.io',
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  const response = await data.json();
  console.log('Email sent', response);
}

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== 'me@leerob.io') {
    throw new Error('Unauthorized');
  }

  const selectedEntriesAsNumbers = selectedEntries.map(Number);

  await queryBuilder
    .deleteFrom('guestbook')
    .where('id', 'in', selectedEntriesAsNumbers)
    .execute();

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}
