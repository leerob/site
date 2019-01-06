import React from 'react';
import styled from 'styled-components';

import {colors} from '../../styles/vars';

const StyledProjectDescription = styled.h4`
    color: ${colors.light};
    font-size: 14px;
    font-weight: lighter;
`;

const ProjectDescription = ({children}) => <StyledProjectDescription>{children}</StyledProjectDescription>;

export default ProjectDescription;
