import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing} from '../../styles/vars';
import titleStyle from '../../utils/title-style';

const StyledH3 = styled.h3`
    ${heading} font-size: 20px;
    margin: ${spacing.normal} 0 ${spacing.small};

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;

const createId = (text) => text.toLowerCase().replace(/ /g, '-');

const H3 = ({children}) => <StyledH3 id={createId(children)}>{titleStyle(children)}</StyledH3>;

export default H3;
