import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function AnimatedName() {
  return (
    <ViewTransition>
      <Link
        href="/"
        className="flex mb-8 font-medium text-gray-400 dark:text-zinc-400"
      >
        Lee Robinson
      </Link>
    </ViewTransition>
  );
}
