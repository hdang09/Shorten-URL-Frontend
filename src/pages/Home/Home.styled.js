import styled from 'styled-components';

// Statistics

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;

export const URLShortener = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
    }
`;

export const InfoStat = styled.div`
    display: inline-flex;
    flex-direction: column;
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
