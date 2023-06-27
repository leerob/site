'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type PostView = {
  slug: string;
  count: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView: boolean;
}) {
  const { data } = useSWR<PostView[]>('/api/views', fetcher);
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const views = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    if (trackView) {
      registerView();
    }
  }, [slug]);

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {data ? `${views.toLocaleString()} views` : '​'}
    </p>
  );
}
