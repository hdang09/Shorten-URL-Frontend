import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { ImStatsBars } from 'react-icons/im';
import { BsGear, BsMoon } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import Tippy from '@tippyjs/react';

import { signOut } from '../../pages/Login/loginSlice';

import * as Styled from './New.styled';
import logo from '../../assets/logo.png';
import { useLocalStorage } from '../../hooks';

const New = ({ children }) => {
    const [expandedNav, setExpandedNav] = useState(false);
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    useEffect(() => document.body.setAttribute('data-theme', theme), [theme]);

    const SIDEBAR_LIST = [
        {
            name: 'Menu',
            icon: <AiOutlineMenu />,
            to: '',
            onClick: () => setExpandedNav(!expandedNav),
        },
        { name: 'Home', icon: <AiOutlineHome />, to: '/' },
        { name: 'My URLs', icon: <BiLink />, to: '/url' },
        { name: 'Analytics', icon: <ImStatsBars />, to: '/analytics' },
        { name: 'Settings', icon: <BsGear />, to: '/settings' },
        {
            name: `${theme === 'light' ? 'Dark' : 'Light'} Theme`,
            icon: <BsMoon />,
            onClick: () => setTheme((theme) => (theme === 'light' ? 'dark' : 'light')),
            to: '',
        },
        { name: 'Log out', icon: <MdLogout />, to: '', onClick: () => dispatch(signOut()) },
    ];

    const NewSidebar = () => (
        <Styled.Sidebar>
            <Link to="/">
                <Styled.Logo src={logo} alt="Logo" />
            </Link>
            <Styled.NavList expanded={expandedNav}>
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
            </Styled.NavList>
            <Tippy content="Hai Dang" placement="right">
                <Styled.Logo
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU"
                    alt="Avatar"
                />
            </Tippy>
        </Styled.Sidebar>
    );

    return (
        <div style={{ display: 'flex' }}>
            <NewSidebar />
            <Styled.Container>
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </div>
    );
};

New.propTypes = {};

export default New;
