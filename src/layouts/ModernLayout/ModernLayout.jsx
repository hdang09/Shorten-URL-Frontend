import { Sidebar } from '../../components';

import * as Styled from './ModernLayout.styled';

const ModernLayout = ({ children, admin }) => {
    return (
        <Styled.Wrapper>
            <Sidebar redesign admin={admin} />
            <Styled.Container>
                <Styled.Content className="container">{children}</Styled.Content>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default ModernLayout;
