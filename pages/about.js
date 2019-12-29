import React from 'react';
import styled from 'styled-components';

import {heading} from '../styles/mixins';
import {spacing} from '../styles/vars';
import A from '../components/elements/a';
import Footer from '../components/footer';
import H3 from '../components/elements/h3';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Social from '../components/socials/social';
import MusicGrid from '../components/music/album';
import ConcertList from '../components/concerts';

const AboutTitle = styled.h1`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const description = `Lee Robinson is a developer, writer, and UI/UX enthusiast. He's interested in all things JAMstack (JavaScript, APIs, Markup) and Design Systems. Lee has spoken across the country at conferences and meet-ups about front-end development, design, and recruiting. He currently works at Hy-Vee (and previously at Workiva) in Des Moines, IA. `;

const Index = () => (
    <Page description={description} image={'/static/images/speaking/speaking.jpg'} title={'Lee Robinson - About Me'}>
        <Nav />
        <Main>
            <AboutTitle>{'About Me'}</AboutTitle>
            <p>
                {`Lee Robinson is a developer, writer, and UI/UX enthusiast. He works at `}
                <A href="https://www.hy-vee.com" underline>
                    {'Hy-Vee'}
                </A>
                {`, a $10 billion dollar retailer in the Midwest. His primary focus is developing Aisles Online, Hy-Vee's e-commerce grocery shopping platform, which serves millions of customers every year.`}
            </p>
            <p />
            <p>
                {`Lee has spoken across the country at conferences and meet-ups about front-end development, design, and recruiting. He also runs his own `}
                <A href="/blog" underline>
                    {'blog'}
                </A>
                {`, attracting thousands of readers every month. `}
            </p>
            <p>
                {`Prior to Hy-Vee, Lee worked as an engineer at Workiva (NYSE:WK) - a cloud provider of connected data, reporting, and compliance solutions. Lee enjoys all things technology, music, and photography/videography.`}
            </p>
            <hr />
            <p>
                {'For a closer look at the professional work I’ve done, check out my '}
                <A href="/robinson-resume-2019.pdf" underline>
                    {'resume.'}
                </A>
                {' If you’re interested in reaching out to me, feel free to '}
                <A href="mailto:me@leerob.io" underline>
                    {'email me.'}
                </A>
            </p>
            <H3>{'Contact'}</H3>
            <Social />
            <H3>{'Music'}</H3>
            <p>{'Some of my favorite albums that have been on repeat lately 🎶'}</p>
            <MusicGrid />
            <ConcertList />
            <H3>{'Travel Map'}</H3>
            <p>{' Check out the map below to see every place I’ve traveled to ✈️ '}</p>
            <iframe
                height="280"
                src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
                title="Lee's Travel Map"
                width="100%"
            />
        </Main>
        <Footer />
    </Page>
);

export default Index;
