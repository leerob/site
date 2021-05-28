import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Buttondown() {
  const { data } = useSWR('/api/subscribers', fetcher);

  const subscriberCount = new Number(data?.count);
  const link = 'https://buttondown.email/leerob';

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
    />
  );
}
