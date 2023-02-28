import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGear, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { signOut } from '../../app/reducers/authReducer';
import { modeSelector, toggleMode } from '../../app/reducers/customizationReducer';
import { adminSidebarSelector, userSidebarSelector } from '../../app/reducers/sidebarReducer';
import Logo from '../../assets/images/logo.png';
import config from '../../config';
import { getInfo } from '../../utils/adminAPI';
import { Avatar, Button } from '..';

import * as Styled from './Header.styled';

const Header = ({ isAdmin, isLandingPage }) => {
    const location = useLocation();

    const [infoUser, setInfoUser] = useState({});

    const dispatch = useDispatch();

    const navListMenu = useSelector(isAdmin ? adminSidebarSelector : userSidebarSelector);
    const themeInLocal = useSelector(modeSelector);

    useEffect(() => {
        if (isLandingPage) return;

        const getInfoUser = async () => {
            try {
                const { data } = await getInfo();
                setInfoUser(data.data);
            } catch (e) {
                console.log(e);
                toast.error(e);
            }
        };
        getInfoUser();
    }, [isLandingPage]);

    let navItem;
    if (isLandingPage) {
        // navList = (
        //     <Styled.NavList>
        //         <Styled.NavItem to="#">HOME</Styled.NavItem>
        //         <Styled.NavItem to="#enterprise">ENTERPRISE</Styled.NavItem>
        //         <Styled.NavItem to="#solution">SOLUTION</Styled.NavItem>
        //         <Styled.NavItem to="#helps">HELPS</Styled.NavItem>
        //     </Styled.NavList>
        // );
    } else {
        navItem = navListMenu.map((item) => (
            <Styled.NavItem
                to={item.to}
                key={item.name}
                className={location.pathname === item.to ? 'active2' : ''}
            >
                {item.name}
            </Styled.NavItem>
        ));
    }

    const DROP_DOWN_MENU_LIST = [
        {
            to: '',
            handleClick: () => dispatch(toggleMode()),
            icon: <BsLightbulb />,
            text: `${themeInLocal === 'light' ? 'Dark' : 'Light'} Mode`,
        },
        // {
        //     to: '/helps',
        //     icon: <BsQuestionOctagon />,
        //     text: 'Helps',
        // },
        {
            to: '/settings',
            icon: <BsGear />,
            text: 'Settings',
        },
        {
            to: '/landing',
            handleClick: () => dispatch(signOut()),
            icon: <FiLogOut />,
            text: 'Log out',
        },
    ];

    return (
        <Styled.Wrapper isLandingPage={isLandingPage}>
            <Styled.Content isLoginPage={isLandingPage}>
                <Link to={config.routes.home}>
                    <Styled.Logo>
                        <img src={Logo} alt="F-Code Logo" />
                        <p>
                            F<span>.</span>-<span>.</span>
                            CODE
                        </p>
                    </Styled.Logo>
                </Link>
                <Styled.NavList>{navItem}</Styled.NavList>
                {isLandingPage ? (
                    <Styled.HeaderButtons>
                        <Button
                            href="https://www.facebook.com/fcodefpt"
                            style={{ display: 'inline-flex' }}
                            text
                        >
                            Visit Fanpage
                        </Button>
                        <Button to="/login">Log in</Button>
                    </Styled.HeaderButtons>
                ) : (
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Styled.TippyBox>
                                    {DROP_DOWN_MENU_LIST.map((item) => (
                                        <Styled.MenuItem
                                            to={item.to}
                                            onClick={item.handleClick}
                                            key={item.text}
                                        >
                                            {item.icon}
                                            <Styled.Text>{item.text}</Styled.Text>
                                        </Styled.MenuItem>
                                    ))}
                                </Styled.TippyBox>
                            </div>
                        )}
                    >
                        {/* {[...Object.keys(infoUser)].length && ( */}
                        <Styled.User>
                            <Avatar src={infoUser.avatar} size="3.5rem" />
                            <Styled.NameUser>{infoUser.first_name || 'Anonymous'}</Styled.NameUser>
                            <AiFillCaretDown />
                        </Styled.User>
                        {/* )} */}
                    </Tippy>
                )}
            </Styled.Content>
        </Styled.Wrapper>
    );
};

Header.propTypes = {
    isAdmin: PropTypes.bool,
    isLandingPage: PropTypes.bool,
};

export default Header;
