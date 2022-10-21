import * as Styled from './BasicLayout.styled';
import { Header, Sidebar } from '../../components';

const BasicLayout = ({ admin, children }) => {
    return (
        <>
            <Header admin={admin} new />
            <Styled.Container>
                <Sidebar admin={admin} />
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </>
    );
};

export default BasicLayout;
