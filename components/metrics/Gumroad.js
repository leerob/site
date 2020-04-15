import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './Card';

const Gumroad = () => {
  const { data } = useSWR('/api/gumroad', fetcher);

  const sales = format(data?.sales);
  const link = 'https://gumroad.com/leerob';

  return (
    <MetricCard
      header="Gumroad Sales"
      link={link}
      metric={sales && `$${sales}`}
    />
  );
};

export default Gumroad;
