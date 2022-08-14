import styled from 'styled-components';

// Statistics
export const InfoStat = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 0 0 12px 3px;

    & h2 {
        font-size: 2.5rem;
        font-weight: 800;
    }
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const LinksIcon = styled(Icon)`
    background-color: rgba(0, 0, 255, 0.2);
`;

export const ClickIcon = styled(Icon)`
    background-color: rgba(0, 255, 0, 0.2);
`;

export const AvgCTRIcon = styled(Icon)`
    background-color: rgba(255, 0, 0, 0.2);
`;

export const AvgTimesIcon = styled(Icon)`
    background-color: rgba(255, 255, 0, 0.2);
`;
