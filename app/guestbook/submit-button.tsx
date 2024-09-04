'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
      disabled={pending}
      type="submit"
    >
      Sign
    </button>
  );
}
