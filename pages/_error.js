import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Page from '../components/page';
import BoltIcon from '../icons/bolt.svg';
import {column, heading} from '../styles/mixins';
import {spacing} from '../styles/vars';
import Nav from '../components/nav';

const Article = styled.article`
    ${column}
    padding: ${spacing.normal};
    
    h3 {
        ${heading};
        color: ${(props) => props.theme.text};
        margin: 8px 0 12px;
        font-size: 32px;
    }
    
    svg {
        display: inline-block;
        height: 32px;
        vertical-align: middle;
        width: 32px;

        path {
            fill: ${(props) => props.theme.primary};
        }
    }
`;

const Error = () => (
    <Page description="Not found." title="Not Found - Lee Robinson">
        <Nav />
        <Article>
            <h3>
                <BoltIcon />
                {'Oops!'}
            </h3>
            <p>{'Whatever it was you were looking for no longer exists.'}</p>
            <p>{'Sorry about that!'}</p>
        </Article>
        <Footer />
    </Page>
);

export default Error;
