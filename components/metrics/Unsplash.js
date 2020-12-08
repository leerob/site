import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const link = 'https://unsplash.com/@leerob';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} />
      <MetricCard header="Unsplash Views" link={link} metric={views} />
    </div>
  );
}
