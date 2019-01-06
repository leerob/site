import React from 'react';
import styled from 'styled-components';

import {colors, spacing} from '../../styles/vars';

const StyledSocialLink = styled.a`
    color: ${colors.light};
    display: inline-block;
    text-decoration: none;

    svg {
        display: inline-block;
        height: 24px;
        margin-right: ${spacing.extrasmall};
        vertical-align: middle;
        width: 24px;
    }
`;

const SocialLink = ({children, href, title}) => (
    <StyledSocialLink href={href} title={title}>
        {children}
    </StyledSocialLink>
);

export default SocialLink;
