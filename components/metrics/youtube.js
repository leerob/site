import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';
import MetricGrid from './grid';

function YouTube() {
    const {data} = useSWR('/api/youtube', fetcher);

    if (!data) {
        return null;
    }

    const subscriberCount = format(data.subscriberCount);
    const viewCount = format(data.viewCount);

    return (
        <MetricGrid>
            <MetricCard brand="YouTube" header="YouTube Subscribers" metric={subscriberCount} />
            <MetricCard brand="YouTube" header="YouTube Views" metric={viewCount} />
        </MetricGrid>
    );
}

export default YouTube;
