import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { adminSidebarSelector, userSidebarSelector } from '../../../app/reducers/sidebarReducer';
import * as Styled from '../Header.styled';

const NavList = ({ isAdmin, isLandingPage }) => {
    let navListMenu = useSelector(isAdmin ? adminSidebarSelector : userSidebarSelector);

    // * If landing page is built done => Uncomment these code
    // const NAV_LIST_LANDING_PAGE = [
    //     {
    //         to: '#',
    //         name: 'Home',
    //     },
    //     {
    //         to: '#enterprise',
    //         name: 'Enterprise',
    //     },
    //     {
    //         to: '#solution',
    //         name: 'Solution',
    //     },
    //     {
    //         to: '#help',
    //         name: 'Help',
    //     },
    // ];

    // navListMenu = isLandingPage ? NAV_LIST_LANDING_PAGE : navListMenu
    navListMenu = isLandingPage ? [] : navListMenu;

    return (
        <Styled.NavList>
            {navListMenu.map((item) => {
                return (
                    <Styled.NavItem to={item.to} key={item.name} end>
                        {item.name}
                    </Styled.NavItem>
                );
            })}
        </Styled.NavList>
    );
};

NavList.propTypes = {
    isAdmin: PropTypes.bool,
    isLandingPage: PropTypes.bool,
};

export default NavList;
