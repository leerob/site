import React from 'react';
import styled from 'styled-components';

import {colors} from '../../styles/vars';

const StyledArticleDate = styled.h4`
    color: ${colors.accent};
    display: block;
    font-size: 0.9em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const ArticleDate = ({children}) => <StyledArticleDate>{children}</StyledArticleDate>;

export default ArticleDate;
