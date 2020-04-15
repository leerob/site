import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './Card';

const Buttondown = () => {
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
};

export default Buttondown;
