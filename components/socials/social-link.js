import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const StyledSocialLink = styled.a`
    color: ${(props) => props.theme.primary};
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
