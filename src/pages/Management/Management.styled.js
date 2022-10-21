import styled from 'styled-components';

export const TippyBox = styled.div`
    background-color: ${(props) => props.theme.white};
    padding: 12px;
    box-shadow: rgb(0 0 0 / 12%) 0px 4px 16px;
    border-radius: 8px;
    list-style: none;
    display: inline-flex;
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

export const Wrapper = styled.div`
    /* width: 100vw; */
    overflow-x: scroll;

    & .ant-table-tbody {
        background: ${(props) => props.theme.cardBackground};
        color: ${(props) => props.theme.black};
    }

    & .ant-table-thead tr th {
        /* Identify when is dark theme */
        background: ${(props) => (props.theme.white === '#fff' ? '#fafafa' : '#161D31')};
        color: ${(props) => props.theme.black};
    }

    & .ant-table-tbody tr:hover {
        /* Identify when is dark theme */
        color: ${(props) => (props.theme.white === '#000' ? '#000' : '')};
    }
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
`;

export const Separator = styled.div`
    width: 1px;
    height: 16px;
    background-color: #333;
    margin: 0 8px;
    display: inline-block;
`;
