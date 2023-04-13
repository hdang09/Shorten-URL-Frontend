import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsGear, BsLightbulb } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import { signOut } from '../../../app/reducers/authReducer';
import { modeSelector, toggleMode } from '../../../app/reducers/customizationReducer';
import config from '../../../config';
import { getInfo } from '../../../utils/adminAPI';
import { Avatar, Button } from '../..';
import * as Styled from '../Header.styled';

const RightContent = ({ isLandingPage }) => {
    const [infoUser, setInfoUser] = useState({});

    useEffect(() => {
        if (isLandingPage) return;

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
    }, [isLandingPage]);

    const dispatch = useDispatch();

    const themeInLocal = useSelector(modeSelector);
    const isDarkMode = themeInLocal === 'dark';

    const DROP_DOWN_MENU_LIST = [
        {
            to: '',
            handleClick: () => dispatch(toggleMode()),
            icon: <BsLightbulb />,
            text: `${themeInLocal === 'light' ? 'Dark' : 'Light'} Mode`,
        },
        {
            to: '/settings',
            icon: <BsGear />,
            text: 'Settings',
        },
        {
            to: '/landing',
            handleClick: () => dispatch(signOut()),
            icon: <FiLogOut />,
            text: 'Log out',
        },
    ];

    if (isLandingPage) {
        return (
            <Styled.HeaderButtons>
                <Button
                    href="https://www.facebook.com/fcodefpt"
                    style={{ display: 'inline-flex' }}
                    text
                >
                    Visit Fanpage
                </Button>
                <Button to={config.routes.login}>Log in</Button>
            </Styled.HeaderButtons>
        );
    }

    if ([...Object.keys(infoUser)].length) {
        return (
            <Tippy
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Styled.TippyBox>
                            {DROP_DOWN_MENU_LIST.map((item) => (
                                <Styled.MenuItem
                                    to={item.to}
                                    onClick={item.handleClick}
                                    key={item.text}
                                >
                                    {item.icon}
                                    <Styled.Text>{item.text}</Styled.Text>
                                </Styled.MenuItem>
                            ))}
                        </Styled.TippyBox>
                    </div>
                )}
            >
                <Styled.User>
                    <Avatar src={infoUser.avatar} size="3.5rem" />
                    <Styled.NameUser>{infoUser.first_name || 'Anonymous'}</Styled.NameUser>
                    <AiFillCaretDown />
                </Styled.User>
            </Tippy>
        );
    }

    return (
        <Styled.User>
            <Skeleton
                circle
                width="3.5rem"
                height="3.5rem"
                baseColor={isDarkMode ? '#161D31' : '#ebebeb'}
                inline
            />
            <Skeleton width={100} baseColor={isDarkMode ? '#161D31' : '#ebebeb'} />
        </Styled.User>
    );
};

RightContent.propTypes = {
    isLandingPage: PropTypes.bool,
};

export default RightContent;
