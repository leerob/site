import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';

import {column} from '../styles/mixins';
import {spacing} from '../styles/vars';

import Blockquote from './elements/blockquote';
import Code from './elements/code';
import Em from './elements/em';
import Footer from './footer';
import H1 from './elements/h1';
import H2 from './elements/h2';
import H3 from './elements/h3';
import Img from './elements/img';
import Li from './elements/li';
import Link from './link';
import Nav from './nav';
import Ol from './elements/ol';
import Page from './page';
import Strong from './elements/strong';
import Subscribe from './subscribe';
import Ul from './elements/ul';
import NextjsCourse from './nextjs-course';

const components = {
    a: Link,
    blockquote: Blockquote,
    em: Em,
    h1: H1,
    h2: H2,
    h3: H3,
    img: Img,
    li: Li,
    ol: Ol,
    pre: Code,
    strong: Strong,
    ul: Ul
};

const Main = styled.main`
    ${column}
    padding: ${spacing.normal};
    
    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

const editUrl = (slug) => `https://github.com/leerob/leerob.io/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://leerob.io/blog/${slug}`)}`;

const Post = ({children, meta}) => (
    <Page date={meta.date} description={meta.description} image={meta.image} title={`${meta.title} - Lee Robinson`}>
        <Nav />
        <Main>
            <MDXProvider components={components}>
                <article>{children}</article>
            </MDXProvider>
            <hr />
            {!meta.hideCourseMarketing && (
                <>
                    <NextjsCourse />
                    <hr />
                </>
            )}
            <p>
                <Link href={discussUrl(meta.slug)} rel="noopener noreferrer" target="_blank">
                    {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(meta.slug)} rel="noopener noreferrer" target="_blank">
                    {'Edit on GitHub'}
                </Link>
            </p>
            <Subscribe />
        </Main>
        <Footer />
    </Page>
);

export default Post;
