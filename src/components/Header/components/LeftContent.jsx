import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';
import config from '../../../config';
import * as Styled from '../Header.styled';

const LeftContent = () => {
    return (
        <Link to={config.routes.home}>
            <Styled.Logo>
                <img src={Logo} alt="F-Code Logo" />
                <p>
                    F<span>.</span>-<span>.</span>
                    CODE
                </p>
            </Styled.Logo>
        </Link>
    );
};

export default LeftContent;
