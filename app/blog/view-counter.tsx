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
  const views = new Number(
    data && typeof data.find === 'function' ? 
      data.find((view) => view.slug === slug)?.count || 0 : 0
  );

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
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {data ? `${views.toLocaleString()} views` : '​'}
    </p>
  );
}
