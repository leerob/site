import type { Metadata } from 'next';
import { auth } from 'lib/auth';
import { queryBuilder } from 'lib/planetscale';
import { SignIn, SignOut } from './buttons';
import Form from './form';

async function getGuestbook() {
  const data = await queryBuilder
    .selectFrom('guestbook')
    .select(['id', 'body', 'created_by', 'updated_at'])
    .orderBy('updated_at', 'desc')
    .limit(100)
    .execute();

  return data;
}

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Sign my guestbook and leave your mark.',
};

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function GuestbookPage() {
  let entries;
  let session;

  try {
    const [guestbookRes, sessionRes] = await Promise.allSettled([
      getGuestbook(),
      auth(),
    ]);

    if (guestbookRes.status === 'fulfilled' && guestbookRes.value[0]) {
      entries = guestbookRes.value;
    } else {
      console.error(guestbookRes);
    }

    if (sessionRes.status === 'fulfilled') {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        sign my guestbook
      </h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      {entries.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))}
    </section>
  );
}
