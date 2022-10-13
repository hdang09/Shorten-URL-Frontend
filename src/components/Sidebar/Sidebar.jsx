import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { MdLogout } from 'react-icons/md';
import { BsMoon, BsSun } from 'react-icons/bs';

import * as Styled from './Sidebar.styled';
import { userSidebarSelector, adminSidebarSelector } from '../Sidebar/sidebarSlice';
import logo from '../../assets/images/logo.png';
import { useLocalStorage } from '../../hooks';
import { signOut } from '../../pages/Login/loginSlice';

import { ThemeContext } from '../../App';
import { getInfo } from '../../utils/productApi';

function Sidebar({ admin, redesign }) {
    const [infoUser, setInfoUser] = useState({});
    const defaultAvatar =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU';

    const dispatch = useDispatch();
    const sidebarList = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const theme = JSON.parse(localStorage.getItem('data-theme')) || 'light';
    const setThemeInLocal = useContext(ThemeContext);
    const [id, setId] = useLocalStorage('id', '');

    useEffect(() => {
        const getInfoUser = async () => {
            const { data } = await getInfo(id);
            setInfoUser(data.data);
        };
        getInfoUser();
    }, [id]);

    return redesign ? (
        <Styled.Sidebar>
            <Link to="/">
                <Styled.Logo src={logo} alt="Logo" />
            </Link>
            <Styled.NavList>
                {sidebarList.map(({ name, icon, to, ...rest }) => (
                    <Tippy content={name} placement="right" key={name}>
                        <Styled.NewSidebarItem to={to} exact {...rest}>
                            {icon}
                        </Styled.NewSidebarItem>
                    </Tippy>
                ))}
                <Tippy
                    content={`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                    placement="right"
                    key={'abc'}
                >
                    <Styled.NewSidebarItem to="" onClick={setThemeInLocal}>
                        {theme === 'light' ? <BsMoon /> : <BsSun />}
                    </Styled.NewSidebarItem>
                </Tippy>
                <Tippy content={'Log out'} placement="right" key={'Log out'}>
                    <Styled.NewSidebarItem to="/landing" onClick={() => dispatch(signOut())}>
                        <MdLogout />
                    </Styled.NewSidebarItem>
                </Tippy>
            </Styled.NavList>
            <Tippy content={infoUser.first_name || 'Anonymous'} placement="right">
                <Styled.Logo src={infoUser.avatar || defaultAvatar} alt="Avatar" isAvatar />
            </Tippy>
        </Styled.Sidebar>
    ) : (
        <Styled.Wrapper>
            {sidebarList.map((item) => (
                <Styled.SidebarItem key={item.name} to={item.to}>
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
