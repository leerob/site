'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>This page is currently quite on demand..hold tight for a min till Nishant's extremely smart army bots scale up the servers!</p>
    </div>
  );
}
