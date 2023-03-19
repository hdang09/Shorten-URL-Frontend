import React from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import * as Styled from './Sidebar.styled';

const NewSidebarItem = ({ name, icon, to, handleClick, tippyPosition, isNew = false }) => {
    return isNew ? (
        <Tippy content={name} placement={tippyPosition} key={name}>
            <Styled.NewSidebarItem to={to} onClick={handleClick} end>
                {icon}
            </Styled.NewSidebarItem>
        </Tippy>
    ) : (
        <Styled.SidebarItem key={name} to={to} end>
            <Styled.Icon>{icon}</Styled.Icon>
            {name}
        </Styled.SidebarItem>
    );
};

NewSidebarItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.string,
    tippyPosition: PropTypes.string,
    handleClick: PropTypes.func,
};

export default NewSidebarItem;
