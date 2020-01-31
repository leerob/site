import React from 'react';
import styled from 'styled-components';

import H3 from './elements/h3';
import Img from './elements/img';
import A from './elements/a';
import Strong from './elements/strong';

const MasteringNextjs = styled(Img)`
    border: 1px solid #e6e6e6;
    border-radius: 8px;
`;

const NextjsCourse = () => (
    <>
        <H3 as="h5">{'Looking to learn React & Next.js? 🏆'}</H3>
        <p>
            {`I've launched a new video course `}
            <A href="https://masteringnextjs.com" rel="noopener noreferrer" target="_blank" underline>
                {'Mastering Next.js'}
            </A>
            {' containing '}
            <Strong>{'55 jam-packed lessons'}</Strong>
            {'. Buy now and '}
            <Strong>{'get 50% off!'}</Strong>
        </p>
        <a href="https://masteringnextjs.com" rel="noopener noreferrer" target="_blank">
            <MasteringNextjs alt="Mastering Next.js" src="/static/images/mastering-nextjs.jpg" />
        </a>
    </>
);

export default NextjsCourse;
