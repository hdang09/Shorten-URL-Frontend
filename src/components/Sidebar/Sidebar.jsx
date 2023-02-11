import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { MdLogout } from 'react-icons/md';
import { BsMoon, BsSun } from 'react-icons/bs';

import * as Styled from './Sidebar.styled';
import { userSidebarSelector, adminSidebarSelector } from '../Sidebar/sidebarSlice';
import logo from '../../assets/images/logo.png';
import { useLocalStorage } from '../../hooks';
import { signOut } from '../../pages/Login/loginSlice';

import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

import { ThemeContext } from '../../App';
import { getInfo } from '../../utils/adminAPI';
import config from '../../config';

function Sidebar({ admin, redesign }) {
    const [infoUser, setInfoUser] = useState({});
    const defaultAvatar =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU';

    const dispatch = useDispatch();
    const sidebarList = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const theme = JSON.parse(localStorage.getItem('data-theme')) || 'light';
    const { toggleTheme, _ } = useContext(ThemeContext);
    const [id, setId] = useLocalStorage('id', '');

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
                <Styled.Logo src={logo} alt="Logo" />
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
                <Styled.Logo src={infoUser.avatar || defaultAvatar} alt="Avatar" isAvatar />
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
