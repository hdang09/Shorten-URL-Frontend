import { Link, useLocation } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGear, BsQuestionOctagon, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Tippy from '@tippyjs/react/headless';

import { Button } from '..';
import Logo from '../../assets/images/logo.png';
import * as Styled from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { adminSidebarSelector, userSidebarSelector } from '../Sidebar/sidebarSlice';
import { signOut } from '../../pages/Login/loginSlice';
import { ThemeContext } from '../../App';
import { useContext, useState, useEffect } from 'react';
import { getInfo } from '../../utils/adminAPI';
import { useLocalStorage } from '../../hooks';
import { toast } from 'react-toastify';
import config from '../../config';

function Header({ admin, landingPage }) {
    const location = useLocation();

    const [infoUser, setInfoUser] = useState({});
    const defaultAvatar =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnc6MdmGqI6SSWXO_yEK6FpBZUd4L_VNJLBAOmEzlahtmEHZm_UaXVkEcwXEb4rMpGz0&usqp=CAU';

    const { toggleTheme, _ } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const navListMenu = useSelector(admin ? adminSidebarSelector : userSidebarSelector);
    const theme = JSON.parse(localStorage.getItem('data-theme')) || 'light';
    const [id, setId] = useLocalStorage('id', '');

    useEffect(() => {
        if (!landingPage) {
            const getInfoUser = async () => {
                try {
                    const { data } = await getInfo(id);
                    setInfoUser(data.data);
                } catch (e) {
                    console.log(e);
                    toast.error(e);
                }
            };
            getInfoUser();
        }
    }, [id, landingPage]);

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
            <Styled.Content>
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
                                    <Styled.MenuItem to="" onClick={toggleTheme}>
                                        <BsLightbulb />
                                        <Styled.Text>
                                            {theme === 'light' ? 'Dark' : 'Light'} Mode
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
                            <Styled.Avatar src={infoUser.avatar || defaultAvatar} />
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
