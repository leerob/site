import React from 'react';
import useSWR from 'swr';
import fetch from 'isomorphic-unfetch';
import format from 'comma-number';

import MetricCard from './card';
import MetricGrid from './grid';

const fetcher = async (path) => {
    const res = await fetch(path);

    return res.json();
};

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
