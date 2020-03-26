import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';
import { SimpleGrid } from '@chakra-ui/core';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';

const GoogleAnalytics = () => {
  const { data: allTime } = useSWR(
    '/api/ga-page-views?startDate=2019-01-01',
    fetcher
  );
  const { data: today } = useSWR('/api/ga-page-views?startDate=today', fetcher);

  const allTimePageViews = format(allTime?.pageViews);
  const todayPageViews = format(today?.pageViews);
  const link = 'https://leerob.io';

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard
        header="All-Time Views"
        link={link}
        metric={allTimePageViews}
      />
      <MetricCard header="Today's Views" link={link} metric={todayPageViews} />
    </SimpleGrid>
  );
};

export default GoogleAnalytics;
