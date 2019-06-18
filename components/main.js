import styled from 'styled-components';

import {column} from '../styles/mixins';
import {spacing} from '../styles/vars';

const Main = styled.main`
    ${column};
    color: ${(props) => props.theme.primary};
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
`;

export default Main;
