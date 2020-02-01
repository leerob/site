import React from 'react';
import styled from 'styled-components';

import A from '../elements/a';

const Container = styled.div`
    text-align: center;
    font-size: 1rem;
    margin: 1rem 1rem 0 0;
`;

const MetricsFooter = () => (
    <Container>
        {`Want to learn more about Next.js? Check out `}
        <A href="https://masteringnextjs.com?ref=dashboard" underline>
            {'my course.'}
        </A>
    </Container>
);

export default MetricsFooter;
