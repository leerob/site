import React from 'react';
import styled from 'styled-components';

import {heading} from '../styles/mixins';
import {spacing} from '../styles/vars';
import Footer from '../components/footer';
import H3 from '../components/elements/h3';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Social from '../components/socials/social';

const AboutTitle = styled.h3`
    ${heading} color: #2e2e2e;
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const description =
    'Front-end engineer with experience in scalability, best practices and design. Currently inventing the future of Grocery at Hy-Vee.';

const Index = () => (
    <Page description={description} title={'Lee Robinson - About Me'}>
        <Nav />
        <Main>
            <AboutTitle>{'About Me'}</AboutTitle>
            <p>
                {`Born and raised in Iowa, I'm currently living in Des Moines and working as a Software Engineer at Hy-Vee.`}
            </p>
            <p>{'I enjoy all things technology, videography, and music.'}</p>
            <H3>{'Contact'}</H3>
            <Social />
        </Main>
        <Footer />
    </Page>
);

export default Index;
