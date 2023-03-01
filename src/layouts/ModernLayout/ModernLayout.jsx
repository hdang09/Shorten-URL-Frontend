import { Sidebar } from '../../components';

import * as Styled from './ModernLayout.styled';

const ModernLayout = ({ children, isAdmin }) => {
    return (
        <Styled.Wrapper>
            <Sidebar redesign isAdmin={isAdmin} />
            <Styled.Container>
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default ModernLayout;
