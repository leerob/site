import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = new Number(data?.downloads);
  const views = new Number(data?.views);
  const link = 'https://unsplash.com/@leerob';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} />
      <MetricCard header="Unsplash Views" link={link} metric={views} />
    </div>
  );
}
