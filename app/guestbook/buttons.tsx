'use client';

import { signIn, signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <button
      className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}

export function SignIn() {
  return (
    <button
      className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8"
      onClick={() => signIn('github')}
    >
      <img alt="GitHub logo" src="/github-logo.svg" width="20" height="20" />
      <div className="ml-3">Sign in with GitHub</div>
    </button>
  );
}
