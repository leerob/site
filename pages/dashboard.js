import React from 'react';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Unsplash from '../components/metrics/unsplash';
import YouTube from '../components/metrics/youtube';
import GoogleAnalytics from '../components/metrics/analytics';

const Dashboard = () => (
    <Page
        description={'Inspired by open startups, this dashboard shows various stats about my digital presence.'}
        image={'/static/images/metrics.png'}
        title={'Lee Robinson - Dashboard'}
    >
        <Nav />
        <Main>
            <Unsplash />
            <YouTube />
            <GoogleAnalytics />
        </Main>
        <Footer />
    </Page>
);

export default Dashboard;
