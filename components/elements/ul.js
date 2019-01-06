import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const Ul = styled.ul`
    margin: 0 0 ${spacing.normal} ${spacing.large};
    list-style-type: disc;

    p {
        margin-bottom: 0;
    }
`;

export default Ul;
