import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';
import MetricGrid from './grid';

function GoogleAnalytics() {
    const {data: allTime} = useSWR('/api/page-views?startDate=2019-01-01', fetcher);
    const {data: today} = useSWR('/api/page-views?startDate=today', fetcher);

    if (!allTime || !today) {
        return null;
    }

    const allTimePageViews = format(allTime.pageViews);
    const todayPageViews = format(today.pageViews);

    return (
        <MetricGrid>
            <MetricCard brand="Google Analytics" header="All-Time Views" metric={allTimePageViews} />
            <MetricCard brand="Google Analytics" header="Today's Views" metric={todayPageViews} />
        </MetricGrid>
    );
}

export default GoogleAnalytics;
