'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type Views = {
  total: number;
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
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total || 0);

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
      {data ? `${views.toLocaleString()} views` : '–'}
    </p>
  );
}
