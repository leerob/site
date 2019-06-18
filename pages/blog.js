import React from 'react';

import Articles from '../components/articles/articles';
import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';

const Index = () => (
    <Page
        description={'Thoughts on the software industry, programming, tech, videography, music, and my personal life.'}
        image={'/static/images/speaking/speaking.jpg'}
        title={'Lee Robinson - Blog'}
    >
        <Nav />
        <Main>
            <Articles />
        </Main>
        <Footer />
    </Page>
);

export default Index;
