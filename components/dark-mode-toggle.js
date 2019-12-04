import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

import Sun from '../icons/sun.svg';
import Moon from '../icons/moon.svg';

const ToggleButton = styled.button`
    background: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.025em;
    margin: 0 0 0 1em;
    padding: 0;
    transition: all 0.15s ease;

    @media (min-width: 737px) {
        margin: 0 0 0 2em;
    }
`;

const iconStyles = `
    width: 14px;
    height: 14px;

    @media (min-width: 768px) {
        height: 16px;
        width: 16px;
    }
`;

const SunIcon = styled(Sun)`
    color: ${(props) => props.theme.accent};
    ${iconStyles};
`;

const MoonIcon = styled(Moon)`
    color: ${(props) => props.theme.accent};
    ${iconStyles};
`;

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);
    const label = darkMode.value ? 'Use dark theme' : 'Use light theme';

    return (
        <ToggleButton aria-label={label} onClick={darkMode.toggle} type="button">
            {darkMode.value ? <SunIcon /> : <MoonIcon />}
        </ToggleButton>
    );
};

export default DarkModeToggle;
