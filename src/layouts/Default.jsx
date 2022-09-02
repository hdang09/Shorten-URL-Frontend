import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
import * as Styled from './Default.styled';
import { Header, Sidebar } from '../components';
// import { Landing } from '../pages';

const Default = ({ admin, children }) => {
    // const MY_LINKS = useSelector((state) => state.urls);

    return (
        <>
            <Header admin={admin} />
            <Styled.Container>
                <Sidebar admin={admin} />
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </>
    );
};

Default.propTypes = {};

export default Default;
