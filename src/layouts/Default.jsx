import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
import * as Styled from './Default.styled';
import { Header, Sidebar } from '../components';
// import { Landing } from '../pages';

const Default = ({ admin, children }) => {
    // const MY_LINKS = useSelector((state) => state.urls);

    return (
        <>
            {/* {MY_LINKS.length > 0 ? (
                <>
                    <Header />
                    <Styled.Container>
                        <Sidebar />
                        <Styled.Content className="container">{children}</Styled.Content>
                    </Styled.Container>
                </>
            ) : (
                <Landing />
            )} */}
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
