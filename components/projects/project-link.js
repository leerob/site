import React from 'react';
import styled from 'styled-components';

const StyledProjectLink = styled.a`
    text-decoration: none;
`;

const ProjectLink = ({children, href}) => <StyledProjectLink href={href}>{children}</StyledProjectLink>;

export default ProjectLink;
