import React from 'react';
import styled from 'styled-components';

import {colors} from '../styles/vars';

import Link from './link';

const StyledNav = styled.nav`
    padding: 25px;

    @media (min-width: 737px) {
        padding: 2em 4em 4em;
        text-align: right;
    }
`;

const NavLink = styled(Link)`
    color: ${colors.accent};
    font-size: 0.9em;
    letter-spacing: 0.03em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.15s ease;

    :hover {
        color: ${colors.text};
    }

    + a {
        margin: 0 0 0 3em;

        @media (min-width: 737px) {
            margin: 0 0 0 4em;
        }
    }
`;

const Nav = () => (
    <StyledNav>
        <NavLink>{'Home'}</NavLink>
        <NavLink slug={'blog'}>{'Blog'}</NavLink>
        <NavLink slug={'about'}>{'About'}</NavLink>
    </StyledNav>
);

export default Nav;
