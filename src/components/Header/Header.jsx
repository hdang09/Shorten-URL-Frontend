import { Input, Button } from '..';
import { Link, NavLink } from 'react-router-dom';
import NewLogo from '../../images/new-logo.png';
import { AiFillCaretDown } from 'react-icons/ai';
import * as Styled from './Header.styled';
import Tippy from '@tippyjs/react/headless';

function Header({ landingPage, transparent }) {
    return (
        <Styled.Wrapper className={transparent && 'transparent'}>
            {landingPage ? (
                <Styled.Content>
                    <Styled.Logo as={Link} to="/">
                        <img src={NewLogo} alt="F-Code Logo" />
                        <p>F - Code</p>
                    </Styled.Logo>
                    <Styled.NavList>
                        <Button as={NavLink} to="/signup" outline>
                            Sign Up
                        </Button>
                        <Button as={NavLink} to="/login">
                            Log In
                        </Button>
                    </Styled.NavList>
                </Styled.Content>
            ) : (
                <Styled.Content>
                    <Link to="/">
                        <Styled.Logo>
                            <img src={NewLogo} alt="" />
                            <p>F - Code</p>
                        </Styled.Logo>
                    </Link>
                    {!transparent && (
                        <Styled.NavList>
                            <Styled.NavItem to="/">HOME</Styled.NavItem>
                            <Styled.NavItem to="/url">MY URLS</Styled.NavItem>
                            <Styled.NavItem to="/statistics">STATISTICS</Styled.NavItem>
                            <Styled.NavItem to="/settings">SETTINGS</Styled.NavItem>
                        </Styled.NavList>
                    )}
                    {/* <Styled.Search>
                        <Input large transparent />
                    </Styled.Search> */}

                    <Tippy
                        interactive
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Styled.TippyBox>
                                    <Link to="/">Language</Link>
                                    <Link to="/">Helps</Link>
                                    <Link to="/settings">Settings</Link>
                                    <Link to="/login">Log out</Link>
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
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
}

export default Header;
