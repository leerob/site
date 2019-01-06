import React from 'react';
import styled from 'styled-components';

import articles from '../../data/articles';
import {spacing} from '../../styles/vars';

import Article from './article';
import ArticlesTitle from './articles-title';

const StyledArticles = styled.section`
    margin-bottom: ${spacing.normal};
    vertical-align: top;

    @media (min-width: 768px) {
        display: inline-block;
    }
`;

const Articles = () => (
    <StyledArticles>
        <ArticlesTitle>{'Articles'}</ArticlesTitle>
        <ul>
            {articles.map((article) => (
                <Article article={article} key={article.slug || article.url} />
            ))}
        </ul>
    </StyledArticles>
);

export default Articles;
