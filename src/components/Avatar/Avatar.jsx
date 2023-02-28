import React from 'react';
import PropTypes from 'prop-types';

import noAvatar from '../../assets/images/no-avatar.png';

import * as Styled from './Avatar.styled';

const Avatar = ({ src, alt = 'Avatar', size = '4rem' }) => {
    return (
        <Styled.Avatar
            src={src || noAvatar}
            alt={alt}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = noAvatar;
            }}
            size={size}
        />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.string.isRequired,
};

export default Avatar;
