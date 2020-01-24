import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
    border-radius: 50%;
    height: 60px;
    vertical-align: middle;
    width: 60px;
`;

const Avatar = () => <StyledAvatar alt="Lee Robinson" src={'/static/images/lee.jpg'} />;

export default Avatar;
