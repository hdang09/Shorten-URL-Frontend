import { between } from 'styled-breakpoints';
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

export const Label = styled.h3`
    color: ${(props) => props.theme.black};
    font-size: 1.6rem;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;

export const Crown = styled.div`
    display: flex;
    margin-left: 4px;
`;

export const Name = styled.span`
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 500;
    margin-left: 1rem;
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

export const ColStat = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0;
`;

export const InfoStat = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-left: 3px;

    & h2 {
        font-size: 2.4rem;
        font-weight: 600;
        color: ${(props) => props.theme.black};
    }
`;

const Icon = styled.div`
    --radius: 46px;
    width: var(--radius);
    height: var(--radius);
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    font-size: 2rem;
`;

export const LinksIcon = styled(Icon)`
    background-color: rgba(var(--purple-color), 0.12);
    & svg {
        color: rgb(var(--purple-color));
    }
`;

export const ClickIcon = styled(Icon)`
    background-color: rgba(var(--aqua-color), 0.12);
    & svg {
        color: rgb(var(--aqua-color));
    }
`;

export const AvgCTRIcon = styled(Icon)`
    background-color: rgba(var(--red-color), 0.12);
    & svg {
        color: rgb(var(--red-color));
    }
`;

export const AvgTimesIcon = styled(Icon)`
    background-color: rgba(var(--green-color), 0.12);
    & svg {
        color: rgb(var(--green-color));
    }
`;

export const CardWrapper = styled.div`
    display: Flex;
    align-items: center;
`;

export const TableWrapper = styled.div`
    margin: 14px 0;

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

    & .ant-table-pagination.ant-pagination {
        display: none;
    }
`;

export const CenterOnTablet = styled.div`
    ${between('md', 'lg')} {
        display: flex;
        justify-content: center;

        & div:first-child {
            margin-right: 8px;
        }
    }
`;
