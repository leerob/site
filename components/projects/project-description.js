import React from 'react';
import styled from 'styled-components';

const StyledProjectDescription = styled.h4`
    color: ${(props) => props.theme.body};
    font-size: 14px;
    font-weight: lighter;
`;

const ProjectDescription = ({children}) => <StyledProjectDescription>{children}</StyledProjectDescription>;

export default ProjectDescription;
