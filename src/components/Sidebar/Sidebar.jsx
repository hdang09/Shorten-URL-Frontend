import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { MdLogout } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';

import * as Styled from './Sidebar.styled';
import { userSidebarSelector, adminSidebarSelector } from '../Sidebar/sidebarSlice';
import logo from '../../assets/logo.png';
import { useLocalStorage } from '../../hooks';
import { signOut } from '../../pages/Login/loginSlice';

function Sidebar({ admin, redesign }) {
    const sidebarList = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    useEffect(() => document.body.setAttribute('data-theme', theme), [theme]);

    return redesign ? (
        <Styled.Sidebar>
            <Link to="/">
                <Styled.Logo src={logo} alt="Logo" />
            </Link>
            <Styled.NavList>
                {sidebarList.map(({ name, icon, to, ...rest }) => (
                    <Tippy content={name} placement="right" key={name}>
                        <Styled.NewSidebarItem to={to} {...rest}>
                            {icon}
                        </Styled.NewSidebarItem>
                    </Tippy>
                ))}
                <Tippy
                    content={`${theme === 'light' ? 'Dark' : 'Light'} Theme`}
                    placement="right"
                    key={'abc'}
                >
                    <Styled.NewSidebarItem
                        to=""
                        onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}
                    >
                        <BsMoon />
                    </Styled.NewSidebarItem>
                </Tippy>
                <Tippy content={'Log out'} placement="right" key={'Log out'}>
                    <Styled.NewSidebarItem to="" onClick={() => dispatch(signOut())}>
                        <MdLogout />
                    </Styled.NewSidebarItem>
                </Tippy>
            </Styled.NavList>
            <Tippy content="Hai Dang" placement="right">
                <Styled.Logo
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU"
                    alt="Avatar"
                />
            </Tippy>
        </Styled.Sidebar>
    ) : (
        <Styled.Wrapper>
            {sidebarList.map((item) => (
                <Styled.SidebarItem key={item.name} to={item.to}>
                    <Styled.Icon>{item.icon}</Styled.Icon>
                    {item.title}
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
