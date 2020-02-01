import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';
import MetricGrid from './grid';

function Unsplash() {
    const {data} = useSWR('/api/unsplash', fetcher);

    if (!data) {
        return null;
    }

    const downloads = format(data.downloads);
    const views = format(data.views);

    return (
        <MetricGrid>
            <MetricCard brand="Unsplash" header="Unsplash Downloads" metric={downloads} />
            <MetricCard brand="Unsplash" header="Unsplash Views" metric={views} />
        </MetricGrid>
    );
}

export default Unsplash;
