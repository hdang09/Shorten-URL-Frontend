import { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGear, BsLightbulb, BsQuestionOctagon } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react/headless';

import { signOut } from '../../app/reducers/authReducer';
import { modeSelector, toggleMode } from '../../app/reducers/customizationReducer';
import { adminSidebarSelector, userSidebarSelector } from '../../app/reducers/sidebarReducer';
import Logo from '../../assets/images/logo.png';
import noAvatar from '../../assets/images/no-avatar.png';
import config from '../../config';
import { getInfo } from '../../utils/adminAPI';
import { Button } from '..';

import * as Styled from './Header.styled';

function Header({ admin, landingPage }) {
    const location = useLocation();

    const [infoUser, setInfoUser] = useState({});

    const dispatch = useDispatch();

    const navListMenu = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const themeInLocal = useSelector(modeSelector);

    useEffect(() => {
        if (landingPage) return;

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
    }, [landingPage]);

    let navItem;
    if (landingPage) {
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

    return (
        <Styled.Wrapper landingPage={landingPage}>
            <Styled.Content isLoginPage={landingPage}>
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
                {landingPage ? (
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
                                    {/* // ! toggleTheme */}
                                    <Styled.MenuItem to="" onClick={() => dispatch(toggleMode())}>
                                        <BsLightbulb />
                                        <Styled.Text>
                                            {themeInLocal === 'light' ? 'Dark' : 'Light'} Mode
                                        </Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/helps">
                                        <BsQuestionOctagon />
                                        <Styled.Text>Helps</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/settings">
                                        <BsGear />
                                        <Styled.Text>Settings</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem
                                        to="/landing"
                                        onClick={() => dispatch(signOut())}
                                    >
                                        <FiLogOut />
                                        <Styled.Text>Log out</Styled.Text>
                                    </Styled.MenuItem>
                                </Styled.TippyBox>
                            </div>
                        )}
                    >
                        <Styled.User>
                            <Styled.Avatar
                                src={infoUser.avatar || noAvatar}
                                alt="Avatar"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = noAvatar;
                                }}
                            />
                            <Styled.NameUser>{infoUser.first_name || 'Anonymous'}</Styled.NameUser>
                            <AiFillCaretDown />
                        </Styled.User>
                    </Tippy>
                )}
            </Styled.Content>
        </Styled.Wrapper>
    );
}

export default Header;
