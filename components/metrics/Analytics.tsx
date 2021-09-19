import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { IViews } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function Analytics() {
  const { data } = useSWR<IViews>('/api/views', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://leerob.io';

  return (
    <MetricCard
      header="All-Time Views"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
