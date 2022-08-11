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
        /* display: none; */
    }
`;

export const Banner = styled.div`
    background-image: url(${banner});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    margin: 16px;

    @media only screen and (min-width: 992px) {
        width: 1150px;
    }
`;

export const URLShortener = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
    }
`;
