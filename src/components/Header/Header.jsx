import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGlobe, BsGear, BsQuestionOctagon, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';

import { Button } from '..';
import { useLocalStorage } from '../../hooks';
import Logo from '../../assets/logo.png';
import * as Styled from './Header.styled';

function Header({ admin, landingPage }) {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    useEffect(() => document.body.setAttribute('data-theme', theme), [theme]);

    let navList;
    if (admin) {
        navList = (
            <Styled.NavList>
                <Styled.NavItem to="/admin/">DASHBOARD</Styled.NavItem>
                <Styled.NavItem to="/admin/management">MANAGEMENT</Styled.NavItem>
                <Styled.NavItem to="/admin/shorten-url">SHORTEN URL</Styled.NavItem>
                <Styled.NavItem to="/admin/settings">SETTINGS</Styled.NavItem>
            </Styled.NavList>
        );
    } else if (landingPage) {
        // navList = (
        //     <Styled.NavList>
        //         <Styled.NavItem to="#">HOME</Styled.NavItem>
        //         <Styled.NavItem to="#enterprise">ENTERPRISE</Styled.NavItem>
        //         <Styled.NavItem to="#solution">SOLUTION</Styled.NavItem>
        //         <Styled.NavItem to="#helps">HELPS</Styled.NavItem>
        //     </Styled.NavList>
        // );
    } else {
        navList = (
            <Styled.NavList>
                <Styled.NavItem to="/">HOME</Styled.NavItem>
                <Styled.NavItem to="/url">MY URLS</Styled.NavItem>
                <Styled.NavItem to="/analytics">ANALYTICS</Styled.NavItem>
                <Styled.NavItem to="/settings">SETTINGS</Styled.NavItem>
            </Styled.NavList>
        );
    }

    return (
        <Styled.Wrapper>
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
                {navList}
                {landingPage ? (
                    <div>
                        <Button to="/signup" style={{ display: 'inline-flex' }} text>
                            Sign up
                        </Button>
                        <Button to="/login">Log in</Button>
                    </div>
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
                                    <Styled.MenuItem to="/admin">
                                        <BsGlobe />
                                        <Styled.Text>Admin Page (Dev Only)</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/helps">
                                        <BsQuestionOctagon />
                                        <Styled.Text>Helps</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/settings">
                                        <BsGear />
                                        <Styled.Text>Settings</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/login">
                                        <FiLogOut />
                                        <Styled.Text>Log out</Styled.Text>
                                    </Styled.MenuItem>
                                </Styled.TippyBox>
                            </div>
                        )}
                    >
                        <Styled.User>
                            <Styled.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU" />
                            <Styled.NameUser>Hai Dang</Styled.NameUser>
                            <AiFillCaretDown />
                        </Styled.User>
                    </Tippy>
                )}
            </Styled.Content>
        </Styled.Wrapper>
    );
}

export default Header;
