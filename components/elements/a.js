import styled from 'styled-components';

import {colors} from '../../styles/vars';

const A = styled.a`
    color: ${colors.accent};
    cursor: pointer;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

export default A;
