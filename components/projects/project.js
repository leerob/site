import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';

import ProjectDescription from './project-description';
import ProjectLink from './project-link';
import ProjectName from './project-name';

const StyledProject = styled.li`
    margin-bottom: ${spacing.normal};

    &:last-child {
        margin-bottom: 0;
    }
`;

const Project = ({project}) => (
    <StyledProject>
        <ProjectLink href={project.link}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectLink>
    </StyledProject>
);

export default Project;
