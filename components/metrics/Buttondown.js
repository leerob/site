import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';
import MetricCard from '@/components/metrics/Card';

export default function Buttondown() {
  const { data } = useSWR('/api/subscribers', fetcher);

  const subscriberCount = format(data?.count);
  const link = 'https://buttondown.email/leerob';

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
    />
  );
}
