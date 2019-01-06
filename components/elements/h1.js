import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import titleStyle from '../../utils/title-style';

const StyledH1 = styled.h1`
    ${heading} font-size: 32px;
    margin: 0;
    line-height: 1.35;

    @media (min-width: 768px) {
        font-size: 2.5em;
    }
`;

const H1 = ({children}) => <StyledH1>{titleStyle(children)}</StyledH1>;

export default H1;
