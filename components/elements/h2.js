import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing} from '../../styles/vars';
import titleStyle from '../../utils/title-style';

const StyledH2 = styled.h2`
    ${heading} font-size: 1.4em;
    margin: ${spacing.large} 0 ${spacing.small};
    line-height: 1.25;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const createId = (text) => text.toLowerCase().replace(/ /g, '-');

const H2 = ({children}) => <StyledH2 id={createId(children)}>{titleStyle(children)}</StyledH2>;

export default H2;
