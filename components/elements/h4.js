import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import titleStyle from '../../utils/title-style';

const StyledH4 = styled.h4`
    ${heading} font-size: 18px;
`;

const H4 = ({children}) => <StyledH4>{titleStyle(children)}</StyledH4>;

export default H4;
