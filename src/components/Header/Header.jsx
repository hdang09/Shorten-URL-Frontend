import { Input } from '..';
import { Link } from 'react-router-dom';
import NewLogo from '../../images/new-logo.png';
import { AiFillCaretDown } from 'react-icons/ai';
import {
    Avatar,
    Content,
    Wrapper,
    Logo,
    Search,
    NameUser,
    NavList,
    User,
} from './Header.styled';

function Header({ landingPage }) {
    return (
        <Wrapper>
            {landingPage ? (
                <Content>
                    <Logo as={Link} to="/">
                        <img src={NewLogo} alt="F-Code Logo" />
                        <p>F - Code</p>
                    </Logo>
                    <NavList>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Features</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Info</Link>
                        </li>
                    </NavList>
                </Content>
            ) : (
                <Content fullWidth>
                    <Link to="/">
                        <Logo>
                            <img src={NewLogo} alt="" />
                            <p>F - Code</p>
                        </Logo>
                    </Link>
                    <Search>
                        <Input large transparent />
                    </Search>
                    <User>
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU" />
                        <NameUser>Hai Dang</NameUser>
                        <AiFillCaretDown />
                    </User>
                </Content>
            )}
        </Wrapper>
    );
}

export default Header;
