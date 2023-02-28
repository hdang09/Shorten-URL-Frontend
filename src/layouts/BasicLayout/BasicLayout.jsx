import { Header, Sidebar } from '../../components';

import * as Styled from './BasicLayout.styled';

const BasicLayout = ({ isAdmin, children }) => {
    return (
        <>
            <Header isAdmin={isAdmin} new />
            <Styled.Container>
                <Sidebar isAdmin={isAdmin} />
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </>
    );
};

export default BasicLayout;
