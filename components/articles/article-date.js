import React from 'react';
import styled from 'styled-components';

const StyledArticleDate = styled.h4`
    color: ${(props) => props.theme.accent};
    display: block;
    font-size: 0.9em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const ArticleDate = ({children}) => <StyledArticleDate>{children}</StyledArticleDate>;

export default ArticleDate;
