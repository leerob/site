import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const SocialListItem = styled.li`
    display: block;
    margin-bottom: ${spacing.normal};

    @media (min-width: 405px) {
        display: inline-block;
        margin-right: ${spacing.large};

        &:last-child {
            margin-right: 0;
        }
    }
`;

export default SocialListItem;
