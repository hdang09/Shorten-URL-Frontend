import PropTypes from 'prop-types';

import LeftContent from './components/LeftContent';
import NavList from './components/NavList';
import RightContent from './components/RightContent';
import * as Styled from './Header.styled';

const Header = ({ isAdmin, isLandingPage }) => {
    return (
        <Styled.Wrapper isLandingPage={isLandingPage}>
            <Styled.Content isLoginPage={isLandingPage}>
                <LeftContent />
                <NavList isAdmin={isAdmin} isLandingPage={isLandingPage} />
                <RightContent isLandingPage={isLandingPage} />
            </Styled.Content>
        </Styled.Wrapper>
    );
};

Header.propTypes = {
    isAdmin: PropTypes.bool,
    isLandingPage: PropTypes.bool,
};

export default Header;
