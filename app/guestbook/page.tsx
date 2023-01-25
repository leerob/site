import { queryBuilder } from 'lib/planetscale';
import { SignIn, SignOut } from './actions';
import { unstable_getServerSession } from 'next-auth/next';
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

export default async function GuestbookPage() {
  const [entries] = await Promise.all([
    getGuestbook(),
    // unstable_getServerSession(),
  ]);

  let session = null;

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
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
          <div className="w-full text-sm">
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
