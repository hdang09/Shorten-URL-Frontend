import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGlobe, BsGear, BsQuestionOctagon, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';

import { useLocalStorage } from '../../hooks';
import Logo from '../../assets/logo.png';
import * as Styled from './Header.styled';

function Header({ transparent }) {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    document.body.setAttribute('data-theme', theme);

    return (
        <Styled.Wrapper className={transparent && 'transparent'}>
            <Styled.Content>
                <Link to="/">
                    <Styled.Logo>
                        <img src={Logo} alt="F-Code Logo" />
                        <p>F - Code</p>
                    </Styled.Logo>
                </Link>
                {!transparent && (
                    <Styled.NavList>
                        <Styled.NavItem to="/">HOME</Styled.NavItem>
                        <Styled.NavItem to="/url">MY URLS</Styled.NavItem>
                        <Styled.NavItem to="/analytics">ANALYTICS</Styled.NavItem>
                        <Styled.NavItem to="/settings">SETTINGS</Styled.NavItem>
                    </Styled.NavList>
                )}
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <Styled.TippyBox>
                                <Styled.MenuItem
                                    to="/"
                                    onClick={() =>
                                        setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
                                    }
                                >
                                    <BsLightbulb />
                                    <Styled.Text>
                                        {theme === 'light' ? 'Dark' : 'Light'} Theme
                                    </Styled.Text>
                                </Styled.MenuItem>
                                <Styled.MenuItem to="/language">
                                    <BsGlobe />
                                    <Styled.Text>Language</Styled.Text>
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
                        <Styled.NameUser transparent={transparent}>Hai Dang</Styled.NameUser>
                        <AiFillCaretDown />
                    </Styled.User>
                </Tippy>
            </Styled.Content>
        </Styled.Wrapper>
    );
}

export default Header;
