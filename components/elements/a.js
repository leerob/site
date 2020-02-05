import React from 'react';
import Link from 'next/link';
import styled, {css} from 'styled-components';

const StyledA = styled.a`
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
        color: ${(props) => props.theme.primary};
    }

    ${(props) =>
        props.underline &&
        css`
            color: ${props.theme.primary};
            background-image: linear-gradient(120deg, #2ec7c0 0%, #1a86e4 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.2em;
            background-position: 0 100%;
            transition: background-size 0.25s ease-in;

            &:hover {
                background-size: 100% 88%;
                color: white;
            }
        `};
`;

const A = ({href, ...otherProps}) => {
    if (href.startsWith('/') || href.startsWith('#')) {
        return (
            <Link href={href}>
                <StyledA {...otherProps} />
            </Link>
        );
    }

    return <StyledA href={href} {...otherProps} />;
};

export default A;
