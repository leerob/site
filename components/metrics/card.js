import React from 'react';
import styled from 'styled-components';

import {colors} from '../../styles/vars';

const Card = styled.div`
    display: block;
    background-color: #1a232b;
    border-radius: 8px;
    padding: 1.25rem;
    box-shadow: 0 2.79304px 3.72406px rgba(0, 0, 0, 0.07), 0 9.38125px 12.5083px rgba(0, 0, 0, 0.0417275),
        0 42px 56px rgba(0, 0, 0, 0.0282725);
    overflow: hidden;
    padding: 0;
    margin: 0 1rem 0.75rem 0;
`;

const Section = styled.div`
    padding: 1.25rem;
`;

const Source = styled.div`
    display: flex;
    align-items: center;
    padding: 0.6rem 1.25rem;
    font-size: 0.7rem;
    background-color: ${colors.grey[900]};
    color: ${colors.grey[400]};
`;

const Image = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    color: ${colors.grey[300]};
    font-size: 1rem;
`;

const Metric = styled.h2`
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.grey[100]};
    line-height: 1;
    margin-bottom: 0.5rem;
    display: block;
`;

const getSvgFilename = (path) => path.toLowerCase().replace(' ', '');

const MetricCard = ({brand, header, metric}) => (
    <Card>
        <Section>
            <Header>{header}</Header>
            <Metric>{metric}</Metric>
        </Section>
        <Source>
            <Image alt={brand} src={`/static/logos/${getSvgFilename(brand)}.svg`} title={brand} />
            <span>{brand}</span>
        </Source>
    </Card>
);

export default MetricCard;
