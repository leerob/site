import React from 'react';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Projects from '../components/projects/projects';

const description = `Projects I've done personally or for clients.`;

const Index = () => (
    <Page description={description} title={`Lee Robinson - Projects`}>
        <Nav />
        <Main>
            <Projects />
        </Main>
        <Footer />
    </Page>
);

export default Index;
