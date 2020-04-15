import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';
import { SimpleGrid } from '@chakra-ui/core';

import fetcher from '../../lib/fetcher';

import MetricCard from './Card';

const YouTube = () => {
  const { data } = useSWR('/api/youtube', fetcher);

  const subscriberCount = format(data?.subscriberCount);
  const viewCount = format(data?.viewCount);
  const link = 'https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw';

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscriberCount}
      />
      <MetricCard header="YouTube Views" link={link} metric={viewCount} />
    </SimpleGrid>
  );
};

export default YouTube;
