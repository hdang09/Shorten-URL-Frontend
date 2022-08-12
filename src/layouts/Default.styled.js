import styled from 'styled-components';
import banner from '../assets/banner-bg.jpg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
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

export const Banner = styled.div`
    background-image: url(${banner});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 1150px;
    margin: 16px;

    @media only screen and (max-width: 992px) {
        margin: 16px 8px;
    }

    @media only screen and (max-width: 500px) {
        margin: 12px 8px;
    }
`;

export const URLShortener = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
    }
`;
