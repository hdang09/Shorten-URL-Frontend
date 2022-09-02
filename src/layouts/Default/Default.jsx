import PropTypes from 'prop-types';

import * as Styled from './Default.styled';
import { Header, Sidebar } from '../../components';

const Default = ({ admin, children }) => {
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
