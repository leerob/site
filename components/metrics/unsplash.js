import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';
import { SimpleGrid } from '@chakra-ui/core';

import fetcher from '../../lib/fetcher';

import MetricCard from './Card';

const Unsplash = () => {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const link = 'https://unsplash.com/@leerob';

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} />
      <MetricCard header="Unsplash Views" link={link} metric={views} />
    </SimpleGrid>
  );
};

export default Unsplash;
