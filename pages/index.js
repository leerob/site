import React from 'react';
import styled from 'styled-components';

import Link from '../components/link';
import Page from '../components/page';
import {column} from '../styles/mixins';
import {colors, spacing} from '../styles/vars';

const Main = styled.main`
    background-color: #101010;
    color: #fefefe;
    display: flex;
    flex: 1;
`;

const Content = styled.div`
    ${column}
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Quote = styled.blockquote`
    font-style: italic;
    margin: 2em 0;
    padding: 0 1em 0 0;
    position: relative;

    @media (min-width: 737px) {
        left: -2.25em;
        margin: 0 0 4em;
        padding: 0 1.5em 0 2.25em;
    }
`;

const Bio = styled.h3`
    font-size: 1.2em;
    margin: 0;

    :before {
        color: #ff5252;
        content: '“';
        display: none;
        font-size: 3em;
        left: 0.05em;
        line-height: 1;
        position: absolute;
        top: -0.05em;
    }

    @media (min-width: 737px) {
        :before {
            display: block;
        }
    }
`;

const Subtitle = styled.h2`
    font-style: italic;
    margin: 0;
    color: ${colors.accent};
    letter-spacing: 0.03;
`;

const Title = styled.h1`
    font-size: 1.65em;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    line-height: 1.35;
    margin: 0;
    font-weight: bold;

    @media (min-width: 737px) {
        font-size: 2.3em;
    }
`;

const Container = styled.div`
    padding: 30px 0;

    @media (min-width: 737px) {
        padding: 30px 0 80px;
    }
`;

const Action = styled.h4`
    font-style: italic;
    letter-spacing: 0.05em;
    margin: 1em 0 0;
    text-transform: uppercase;
`;

const ActionLink = styled(Link)`
    color: ${colors.accent};
    transition: all 0.15s ease;

    :after {
        content: ' →';
    }

    :hover {
        color: white;

        :after {
            color: white;
        }
    }
`;

const description = 'Curious mind, developer, and writer.';

const Index = () => (
    <Page description={description} image={'/static/images/avatar.jpg'} title={`Lee Robinson - ${description}`}>
        <Main>
            <Content>
                <Container>
                    <Subtitle>{description}</Subtitle>
                    <Title>{'Lee Robinson'}</Title>
                </Container>
                <Quote>
                    <Bio>
                        {
                            'Front-end engineer with experience in scalability, best practices and design. Currently inventing the future of Grocery at Hy-Vee.'
                        }
                    </Bio>
                </Quote>
                <Action>
                    {'Check out his '}
                    <ActionLink slug={'blog'}>{'blog'}</ActionLink>
                </Action>
                <Action>
                    {'These are his '}
                    <ActionLink slug={'projects'}>{'projects'}</ActionLink>
                </Action>
                <Action>
                    {'Find out more '}
                    <ActionLink slug={'about'}>{'about him'}</ActionLink>
                </Action>
            </Content>
        </Main>
    </Page>
);

export default Index;
