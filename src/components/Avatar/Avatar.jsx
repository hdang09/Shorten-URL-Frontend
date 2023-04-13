import React from 'react';
import PropTypes from 'prop-types';

import noAvatar from '../../assets/images/no-avatar.png';

import * as Styled from './Avatar.styled';

const Avatar = React.forwardRef(
    ({ src, alt = 'Avatar', size = '4rem', hideOnMobile = false }, ref) => {
        return (
            <Styled.Avatar
                src={src || noAvatar}
                alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = noAvatar;
                }}
                size={size}
                hideOnMobile={hideOnMobile}
                ref={ref}
            />
        );
    },
);

Avatar.propTypes = {
    src: PropTypes.string, // cannot put isRequired here, because of call API problem
    alt: PropTypes.string,
    size: PropTypes.string.isRequired,
};

export default Avatar;
