import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';
import { SimpleGrid } from '@chakra-ui/core';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';

const Buttondown = () => {
  const { data } = useSWR('/api/subscribers', fetcher);

  const subscriberCount = format(data?.count);
  const link = 'https://buttondown.email/leerob';

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard
        header="Newsletter Subscribers"
        link={link}
        metric={subscriberCount}
      />
    </SimpleGrid>
  );
};

export default Buttondown;
