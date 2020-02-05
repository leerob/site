import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';
import LinkedInIcon from '../../icons/linkedin.svg';
import GitHubIcon from '../../icons/github.svg';
import TwitterIcon from '../../icons/twitter.svg';

import SocialLink from './social-link';

const Centered = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: ${spacing.large};
`;

const Social = () => (
    <Centered>
        <li>
            <SocialLink href="https://twitter.com/leeerob" title="Twitter">
                <TwitterIcon />
            </SocialLink>
        </li>
        <li>
            <SocialLink href="https://github.com/leerob" title="GitHub">
                <GitHubIcon />
            </SocialLink>
        </li>
        <li>
            <SocialLink href="https://www.linkedin.com/in/leejamesrobinson/" title="LinkedIn">
                <LinkedInIcon />
            </SocialLink>
        </li>
    </Centered>
);

export default Social;
