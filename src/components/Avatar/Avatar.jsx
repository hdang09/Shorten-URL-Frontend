import React from 'react';
import * as Styled from './Avatar.styled';
import noAvatar from '../../assets/images/no-avatar.png';

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
