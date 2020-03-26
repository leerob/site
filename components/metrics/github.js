import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';
import { SimpleGrid } from '@chakra-ui/core';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';

const GitHub = () => {
  const { data } = useSWR('/api/github', fetcher);

  const followers = format(data?.followers);
  const stars = format(data?.stars);
  const link = 'https://github.com/leerob';

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard header="GitHub Followers" link={link} metric={followers} />
      <MetricCard header="GitHub Stars" link={link} metric={stars} />
    </SimpleGrid>
  );
};

export default GitHub;
