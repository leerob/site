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
