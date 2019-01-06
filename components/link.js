import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {colors} from '../styles/vars';

const StyledArticleLink = styled.a`
    color: ${colors.accent};
    text-decoration: none;

    :hover {
        text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    }
`;

const CustomLink = (props) => {
    const slug = props.slug || '';
    const href = `/${slug}`;

    return (
        <Link href={href} prefetch>
            <StyledArticleLink href={href} {...props}>
                {props.children}
            </StyledArticleLink>
        </Link>
    );
};

export default CustomLink;
