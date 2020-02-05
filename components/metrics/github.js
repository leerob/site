import React from 'react';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../../lib/fetcher';

import MetricCard from './card';
import MetricGrid from './grid';

function GitHub() {
    const {data} = useSWR('/api/github', fetcher);

    const followers = format(data?.followers);
    const stars = format(data?.stars);
    const link = 'https://github.com/leerob';

    return (
        <MetricGrid>
            <MetricCard brand="GitHub" header="GitHub Followers" link={link} metric={followers} />
            <MetricCard brand="GitHub" header="GitHub Stars" link={link} metric={stars} />
        </MetricGrid>
    );
}

export default GitHub;
