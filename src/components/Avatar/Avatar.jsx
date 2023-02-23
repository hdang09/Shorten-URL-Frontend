import React from 'react';

import noAvatar from '../../assets/images/no-avatar.png';

import * as Styled from './Avatar.styled';

const Avatar = ({ src, alt = '', size }) => {
    return (
        <Styled.Avatar
            src={src || noAvatar}
            alt={alt || 'Avatar'}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = noAvatar;
            }}
            size={size}
        />
    );
};

export default Avatar;
