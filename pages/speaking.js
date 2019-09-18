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
import H2 from '../components/elements/h2';
import Img from '../components/elements/img';
import events from '../data/speaking';

const Title = styled.h1`
    ${heading};
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const description =
    'These are conferences I will or have spoken at, as well as summaries of the talks I’ve given. If you’d like to have me speak at your event, please contact me.';

const Speaking = () => (
    <Page description={description} image={'/static/images/speaking/speaking.jpg'} title={'Lee Robinson - Speaking'}>
        <Nav />
        <Main>
            <Title>{'Speaking'}</Title>
            <p>
                {`These are events I will or have spoken at, as well as summaries of the talks I’ve given. If you’d like to have me speak at your event, please `}
                <A href="mailto:me@leerob.io" underline>
                    {'contact me.'}
                </A>
            </p>
            <H3>{'Events'}</H3>
            <table>
                <thead>
                    <tr>
                        <th>{'Event'}</th>
                        <th>{'Date'}</th>
                        <th>{'Location'}</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.date}>
                            <td>
                                <A href={event.link}>{event.name}</A>
                            </td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <H2>{'Talks'}</H2>
            <H3>{`Recruiting Engineers (From An Engineer's Perspective)`}</H3>
            <Img src="/static/images/speaking/speaking.jpg" />
            <A href="/recruiting-engineers-talent42-lee-robinson.pdf">{'View Slides'}</A>
            {' | '}
            <A href="https://www.youtube.com/watch?v=chWOJB1LYkk">{'Watch Recording'}</A>
            <p>{`Hiring talent is becoming increasingly difficult with low unemployment rates and the tech industry booming. What you can do to stick out? Learn from an engineer who's been involved on both sides - both as a candidate and with hiring - on what candidates REALLY want out of a position.`}</p>
            <H3>{'Building Component Libraries with a Monorepo'}</H3>
            <Img src="/static/images/speaking/monorepo-slides.jpg" />
            <A href="/building-component-libraries-with-a-monorepo.pdf">{'View Slides'}</A>
            <p>{`Learn why your organization needs a component library and discover the best practices for building, scaling, and adopting it across all platforms. We'll be using industry-standard technology (React, JavaScript, Storybook) alongside cutting-edge solutions (CSS-in-JS, Monorepo).`}</p>
        </Main>
        <Footer />
    </Page>
);

export default Speaking;
