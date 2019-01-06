import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing} from '../../styles/vars';

const StyledProjectName = styled.h3`
    ${heading} font-size: 20px;
    margin: ${spacing.normal} 0 0.2em;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;

const ProjectName = ({children}) => <StyledProjectName>{children}</StyledProjectName>;

export default ProjectName;
