import PropTypes from 'prop-types';
import * as Styled from './New.styled';
import { Sidebar } from '../../components';

const New = ({ children, admin }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar redesign admin={admin} />
            <Styled.Container>
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </div>
    );
};

New.propTypes = {};

export default New;
