'use client';

import { useEffect } from 'react';

export default function ViewCounter({
  slug,
  views,
}: {
  slug: string;
  views: number;
}) {
  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
        body: JSON.stringify({ views }),
      });

    registerView();
  }, [slug]);

  const optimisticViews = views + 1;
  return (
    <div className="text-neutral-700 dark:text-neutral-300">
      {`${optimisticViews.toLocaleString()} views`}
    </div>
  );
}
