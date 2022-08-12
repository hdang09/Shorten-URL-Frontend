import { Input, Button } from '..';
import { Link, NavLink } from 'react-router-dom';
import NewLogo from '../../images/new-logo.png';
import { AiFillCaretDown } from 'react-icons/ai';
import * as Styled from './Header.styled';
import Tippy from '@tippyjs/react/headless';
import { BsGlobe, BsGear, BsQuestionOctagon } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

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
                                    <Styled.MenuItem to="/">
                                        <BsGlobe />
                                        <Styled.Text>Language</Styled.Text>
                                    </Styled.MenuItem>
                                    <Styled.MenuItem to="/">
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
                </Styled.Content>
            )}
        </Styled.Wrapper>
    );
}

export default Header;
