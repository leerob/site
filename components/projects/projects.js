import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';
import projects from '../../data/projects';

import Project from './project';
import ProjectsTitle from './projects-title';

const StyledProjects = styled.section`
    margin-bottom: ${spacing.normal};
    vertical-align: top;

    @media (min-width: 768px) {
        display: inline-block;
    }
`;

const Projects = () => (
    <StyledProjects>
        <ProjectsTitle>{'Projects'}</ProjectsTitle>
        <ul>
            {projects.map((project) => (
                <Project key={project.name} project={project} />
            ))}
        </ul>
    </StyledProjects>
);

export default Projects;
