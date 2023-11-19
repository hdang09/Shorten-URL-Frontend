import { useEffect, useRef, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import { down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

import { signOut } from '../../app/reducers/authReducer';
import { modeSelector, toggleMode } from '../../app/reducers/customizationReducer';
import { adminSidebarSelector, userSidebarSelector } from '../../app/reducers/sidebarReducer';
import logo from '../../assets/images/logo.png';
import config from '../../config';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { getInfo } from '../../utils/adminAPI';
import Avatar from '../Avatar/Avatar';

import * as Styled from './Sidebar.styled';
import SidebarItem from './SidebarItem';

function Sidebar({ isAdmin, redesign }) {
    const [infoUser, setInfoUser] = useState({});
    const avatarRef = useRef();
    const dispatch = useDispatch();
    const sidebarList = useSelector(isAdmin ? adminSidebarSelector : userSidebarSelector);
    const theme = useSelector(modeSelector);
    const isMobile = useBreakpoint(down('sm'));
    const { height } = useWindowDimensions();

    const isBigHeight = height > 600;
    const tippyPosition = isMobile ? 'top' : 'right';

    useEffect(() => {
        const getInfoUser = async () => {
            const { data } = await getInfo();
            setInfoUser(data.data);
        };
        getInfoUser();
    }, []);

    let NAV_LIST = [
        ...sidebarList,
        {
            name: `${theme === 'light' ? 'Dark' : 'Light'} Mode`,
            icon: theme === 'light' ? <BsMoon /> : <BsSun />,
            handleClick: () => dispatch(toggleMode()),
        },
        {
            name: 'Log out',
            icon: <MdLogout />,
            handleClick: () => dispatch(signOut()),
        },
    ];

    if (isMobile || !isBigHeight) delete NAV_LIST[4];

    return redesign ? (
        <Styled.Sidebar>
            {isBigHeight && (
                <Link to={config.routes.home}>
                    <Styled.Logo src={logo} alt="F-Code Logo" />
                </Link>
            )}
            <Styled.NavList>
                {NAV_LIST.map((item) => (
                    <SidebarItem key={item.name} tippyPosition={tippyPosition} isNew {...item} />
                ))}
            </Styled.NavList>
            {isBigHeight && (
                <Tippy content={infoUser.firstName || 'Anonymous'} placement={tippyPosition}>
                    <Avatar src={infoUser.avatar} size="4.4rem" hideOnMobile innerref={avatarRef} />
                </Tippy>
            )}
        </Styled.Sidebar>
    ) : (
        <Styled.Wrapper>
            {sidebarList.map((item) => (
                <SidebarItem key={item.name} tippyPosition={tippyPosition} {...item} />
            ))}
        </Styled.Wrapper>
    );
}

export default Sidebar;

Sidebar.propTypes = {
    isAdmin: PropTypes.bool,
    redesign: PropTypes.bool,
};
