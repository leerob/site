import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { GitHub } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const stars = new Number(data?.stars);
  const link = 'https://github.com/leerob';

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={stars}
      isCurrency={false}
    />
  );
}
