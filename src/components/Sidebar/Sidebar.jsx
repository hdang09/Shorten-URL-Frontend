import { useContext, useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

import { ThemeContext } from '../../App';
import logo from '../../assets/images/logo.png';
import noAvatar from '../../assets/images/no-avatar.png';
import config from '../../config';
import { useLocalStorage } from '../../hooks';
import { signOut } from '../../pages/Login/loginSlice';
import { getInfo } from '../../utils/adminAPI';
import localStorageUtils from '../../utils/localStorageUtils';
import { adminSidebarSelector, userSidebarSelector } from '../Sidebar/sidebarSlice';

import * as Styled from './Sidebar.styled';

function Sidebar({ admin, redesign }) {
    const { theme: themeConfig, idUser: idConfig } = config.localStorage;

    const [infoUser, setInfoUser] = useState({});

    const dispatch = useDispatch();
    const sidebarList = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const theme = localStorageUtils.getItem(themeConfig) || 'light';
    const { toggleTheme, _ } = useContext(ThemeContext);
    const [id, setId] = useLocalStorage(idConfig, '');

    const isMobile = useBreakpoint(down('sm'));
    const tippyPosition = isMobile ? 'top' : 'right';

    useEffect(() => {
        const getInfoUser = async () => {
            const { data } = await getInfo(id);
            setInfoUser(data.data);
        };
        getInfoUser();
    }, [id]);

    const location = useLocation();

    return redesign ? (
        <Styled.Sidebar>
            <Link to={config.routes.home}>
                <Styled.Logo src={logo} alt="F-Code Logo" />
            </Link>
            <Styled.NavList>
                {sidebarList.map(({ name, icon, to }) => (
                    <Tippy content={name} placement={tippyPosition} key={name}>
                        <Styled.NewSidebarItem
                            to={to}
                            className={location.pathname === to ? 'active2' : ''}
                        >
                            {icon}
                        </Styled.NewSidebarItem>
                    </Tippy>
                ))}
                <Tippy
                    content={`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    placement={tippyPosition}
                    key={'Theme'}
                >
                    <Styled.NewSidebarItem to="" onClick={toggleTheme}>
                        {theme === 'light' ? <BsMoon /> : <BsSun />}
                    </Styled.NewSidebarItem>
                </Tippy>
                <Tippy content={'Log out'} placement={tippyPosition} key={'Log out'}>
                    <Styled.NewSidebarItem onClick={() => dispatch(signOut())}>
                        <MdLogout />
                    </Styled.NewSidebarItem>
                </Tippy>
            </Styled.NavList>
            <Tippy content={infoUser.first_name || 'Anonymous'} placement={tippyPosition}>
                <Styled.Logo
                    src={infoUser.avatar || noAvatar}
                    alt="Avatar"
                    isAvatar
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = noAvatar;
                    }}
                />
            </Tippy>
        </Styled.Sidebar>
    ) : (
        <Styled.Wrapper>
            {sidebarList.map((item) => (
                <Styled.SidebarItem
                    key={item.name}
                    to={item.to}
                    className={location.pathname === item.to ? 'active2' : ''}
                >
                    <Styled.Icon>{item.icon}</Styled.Icon>
                    {item.name}
                </Styled.SidebarItem>
            ))}
        </Styled.Wrapper>
    );
}

export default Sidebar;

{
    /* <Styled.NavList expanded={expandedNav}>
                {SIDEBAR_LIST.map(({ name, icon, to, ...rest }) =>
                    expandedNav ? (
                        <Styled.NewSidebarItem to={to} key={name} {...rest} expanded={expandedNav}>
                            {icon}
                            <span style={{ marginLeft: '1rem' }}>{name}</span>
                        </Styled.NewSidebarItem>
                    ) : (
                        <Tippy content={name} placement="right" key={name}>
                            <Styled.NewSidebarItem to={to} {...rest}>
                                {icon}
                            </Styled.NewSidebarItem>
                        </Tippy>
                    ),
                )}
            </Styled.NavList> */
}
