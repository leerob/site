import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

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

    :hover {
        transform: translateY(-1px);
    }
`;

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <ToggleButton onClick={darkMode.toggle} type="button">
            {darkMode.value ? '☀️' : '🌙'}
        </ToggleButton>
    );
};

export default DarkModeToggle;
