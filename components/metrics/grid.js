import styled from 'styled-components';

const MetricGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export default MetricGrid;
