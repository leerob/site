import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { IViews } from '@/typings';

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<IViews>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
}
