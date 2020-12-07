import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import { trackGoal } from 'fathom-client';

import fetcher from '@/lib/fetcher';

export default function Subscribe() {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      // TODO: Add error state

      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    // TODO: Add success state
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-blue-800 bg-blue-50 dark:bg-blue-900">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <div className="relative my-4">
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
          // isLoading={loading} TODO: loading dots
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      <p className="text-sm text-gray-800 dark:text-gray-200">
        {`${subscriberCount || '-'} subscribers – `}
        <Link href="/newsletter">
          <a>24 issues</a>
        </Link>
      </p>
    </div>
  );
}
