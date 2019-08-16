import React from 'react';
import styled from 'styled-components';

import Date from './date';
import ViewCounter from './view-counter';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const DateAndViews = ({date, id}) => (
    <Container>
        <Date>{date}</Date>
        <ViewCounter id={id} />
    </Container>
);

export default DateAndViews;
