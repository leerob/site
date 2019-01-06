import styled from 'styled-components';

import {column} from '../styles/mixins';
import {spacing} from '../styles/vars';

const Main = styled.main`
    ${column} color: #3a4145;
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
`;

export default Main;
