import styled from 'styled-components';

// Statistics
export const ColStat = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0;
`;

export const InfoStat = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 0 0 12px 3px;
    flex: 1;

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

export const ClicksIcon = styled(Icon)`
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
