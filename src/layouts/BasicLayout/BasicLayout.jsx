import { Header, Sidebar } from '../../components';

import * as Styled from './BasicLayout.styled';

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
