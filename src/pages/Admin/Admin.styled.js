import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 700;
`;

export const Links = styled(Title)`
    color: rgb(var(--purple-color));
`;

export const Clicks = styled(Title)`
    color: rgb(var(--aqua-color));
`;

export const CTR = styled(Title)`
    color: rgb(var(--red-color));
`;

export const Times = styled(Title)`
    color: rgb(var(--green-color));
`;

export const DashboardCalandar = styled.div`
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
`;

export const Label = styled.h3`
    color: ${(props) => props.theme.black};
`;
