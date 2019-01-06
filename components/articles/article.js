import React from 'react';
import styled from 'styled-components';

import {colors, spacing} from '../../styles/vars';
import Date from '../date';
import H3 from '../elements/h3';
import Link from '../link';

const StyledArticle = styled.li`
    margin-bottom: ${spacing.normal};
    transition: all 0.15s ease;

    + li {
        margin: 2em 0 0;
    }

    h3 {
        margin-top: 0;
    }

    :hover {
        h3 {
            transition: all 0.15s ease;
            color: ${colors.accent};
        }
    }
`;

const ExternalLink = styled.a`
    text-decoration: none;
`;

const PublisherInfo = styled.span`
    color: ${colors.light};
    display: block;
    font-size: 0.9em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const Publisher = styled.span`
    color: ${colors.accent};
`;

const Article = ({article}) => (
    <StyledArticle>
        {article.url ? (
            <ExternalLink href={article.url}>
                <PublisherInfo>
                    {'Hosted by '}
                    <Publisher>{article.publisher}</Publisher>
                </PublisherInfo>
                <H3>{article.title}</H3>
            </ExternalLink>
        ) : (
            <Link slug={`blog/${article.slug}`}>
                <Date>{article.date}</Date>
                <H3>{article.title}</H3>
            </Link>
        )}
    </StyledArticle>
);

export default Article;
