import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 700;
    font-size: 3rem;
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
    font-size: 1.6rem;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;

export const Name = styled.span`
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
`;

export const Tag = styled.label`
    ${(props) =>
        props.type === 'Accept'
            ? `
    background-color: #7AC5A9;`
            : props.type === 'Waiting'
            ? `
    background-color: #3FA0EB;`
            : `
    background-color: #EB403F;`}

    color: #fff;
    border-radius: 4px;
    padding: 4px 10px;
`;
