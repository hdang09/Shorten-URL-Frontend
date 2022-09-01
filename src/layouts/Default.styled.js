import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    top: 0;
    margin-top: var(--header-height);

    @media only screen and (max-width: 992px) {
        justify-content: flex-start;
    }

    @media only screen and (max-width: 500px) {
        overflow: hidden;
    }
`;

export const Content = styled.div`
    width: 1150px;
    margin: 16px;

    @media only screen and (max-width: 992px) {
        margin: 16px 8px;
    }

    @media only screen and (max-width: 500px) {
        margin: 12px 8px 80px;
    }
`;
