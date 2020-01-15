import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const StyledImage = styled.img`
    display: block;
    margin: 0 auto ${spacing.normal};
    max-width: 100%;
`;

const Image = ({src, ...rest}) => (
    <StyledImage async decoding="async" importance="low" loading="lazy" src={src} {...rest} />
);

export default Image;
