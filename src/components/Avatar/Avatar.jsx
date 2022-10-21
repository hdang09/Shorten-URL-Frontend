import React from 'react';
import * as Styled from './Avatar.styled';

const Avatar = ({ src, alt = '', size }) => {
    const defaultAvatar =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU';

    return (
        <Styled.Avatar
            src={src || defaultAvatar}
            alt={alt || 'Avatar'}
            onError={(e) => (e.currentTarget.src = defaultAvatar)}
            size={size}
        />
    );
};

export default Avatar;
