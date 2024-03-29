import { down, up } from 'styled-breakpoints';
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
    margin-left: 1rem;

    ${down('lg')} {
        display: none;
    }
`;

export const Action = styled.span`
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    margin-left: 1rem;
`;

export const Crown = styled.div`
    display: flex;
    margin-left: 4px;
`;

export const Tag = styled.label`
    background-color: var(
        ${(props) =>
            props.type === 'Accept'
                ? '--success-color'
                : props.type === 'Waiting'
                ? '--info-color'
                : '--error-color'}
    );
    color: var(--white-color);
    border-radius: 4px;
    padding: 4px 10px;
`;

export const Wrapper = styled.div`
    width: calc(100vw - 32px);
    overflow-x: scroll;

    ${up('sm')} {
        width: 100%;
    }

    & .ant-table-tbody {
        background: ${(props) => props.theme.cardBackground};
        color: ${(props) => props.theme.black};
    }

    & .ant-table-thead tr th {
        /* Identify when is dark theme */
        background: ${(props) => (props.theme.white === '#fff' ? '#fafafa' : '#161D31')};
        color: ${(props) => props.theme.black};
    }

    & .ant-table-tbody tr:hover td {
        /* Identify when is dark theme */
        background-color: ${(props) => props.theme.white === '#000' && '#1e1d38'};
    }
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
`;

export const Separator = styled.div`
    width: 1px;
    height: 16px;
    background-color: var(--grey-color);
    margin: 0 8px;
    display: inline-block;
`;
