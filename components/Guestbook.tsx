import { useState, useRef, Suspense } from 'react';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full break-words">{entry.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return (
    <>
      <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Sign the Guestbook
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Share a message for a future visitor of my site.
        </p>
        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin/github"
            className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Login
          </a>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form.state === Form.Loading ? <LoadingSpinner /> : 'Sign'}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Your information is only used to display your name and reply by
            email.
          </p>
        )}
      </div>
      <div className="mt-4 space-y-8">
        <Suspense fallback={null}>
          {entries?.map((entry) => (
            <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
