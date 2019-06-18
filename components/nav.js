import React from 'react';
import styled from 'styled-components';

import Link from './link';

const StyledNav = styled.nav`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (min-width: 822px) {
        padding: 2em 4em 4em;
    }
`;

const Logo = styled.img`
    display: flex;
    height: 10px;
    padding-right: 2em;

    @media (min-width: 737px) {
        height: 16px;
        padding-right: 3em;
    }
`;

const NavLink = styled(Link)`
    color: ${(props) => props.theme.accent};
    font-size: 0.8em;
    letter-spacing: 0.03em;
    text-decoration: none;
    transition: all 0.15s ease;

    :hover {
        color: ${(props) => props.theme.primary};
    }

    @media (min-width: 737px) {
        font-size: 0.9em;
    }

    + a {
        margin: 0 0 0 2em;

        @media (min-width: 737px) {
            margin: 0 0 0 3em;
        }
    }
`;

const ProjectsLink = styled(NavLink)`
    display: none;

    @media (min-width: 405px) {
        display: initial;
    }
`;

const Nav = () => (
    <StyledNav>
        <Link aria-label="Lee Robinson - Home">
            <Logo alt="Lee Robinson" src="/static/images/logo.png" />
        </Link>
        <div>
            <NavLink slug={'about'}>{'Start Here'}</NavLink>
            <NavLink slug={'speaking'}>{'Speaking'}</NavLink>
            <NavLink slug={'blog'}>{'Blog'}</NavLink>
            <ProjectsLink slug={'projects'}>{'Projects'}</ProjectsLink>
        </div>
    </StyledNav>
);

export default Nav;
