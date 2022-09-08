import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGlobe, BsGear, BsQuestionOctagon, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';

import { Button } from '..';
import { useLocalStorage } from '../../hooks';
import Logo from '../../assets/images/logo.png';
import * as Styled from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { adminSidebarSelector, userSidebarSelector } from '../Sidebar/sidebarSlice';
import { signOut } from '../../pages/Login/loginSlice';

function Header({ admin, landingPage }) {
    const dispatch = useDispatch();

    const navListMenu = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    useEffect(() => document.body.setAttribute('data-theme', theme), [theme]);

    const account = {
        id: 'string',
        first_name: '(K17 HCM)',
        last_name: 'Tran Hai Dang',
        email: 'dangthse171362@fpt.edu.vn',
        role: 'admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU',
    };

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
            <Styled.NavItem to={item.to} key={item.name}>
                {item.name}
            </Styled.NavItem>
        ));
    }

    return (
        <Styled.Wrapper landingPage={landingPage}>
            <Styled.Content>
                <Link to="/">
                    <Styled.Logo>
                        <img src={Logo} alt="F-Code Logo" />
                        <p>
                            F<span style={{ visibility: 'hidden' }}>.</span>-
                            <span style={{ visibility: 'hidden' }}>.</span>
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
                                    <Styled.MenuItem
                                        to=""
                                        onClick={() =>
                                            setTheme((theme) =>
                                                theme === 'dark' ? 'light' : 'dark',
                                            )
                                        }
                                    >
                                        <BsLightbulb />
                                        <Styled.Text>
                                            {theme === 'light' ? 'Dark' : 'Light'} Theme
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
                            <Styled.Avatar src={account.avatar} />
                            <Styled.NameUser>{account.last_name}</Styled.NameUser>
                            <AiFillCaretDown />
                        </Styled.User>
                    </Tippy>
                )}
            </Styled.Content>
        </Styled.Wrapper>
    );
}

export default Header;
