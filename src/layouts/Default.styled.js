import styled from 'styled-components';
import banner from '../assets/banner-bg.jpg';

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
        margin-bottom: 80px;
    }
`;

export const Banner = styled.div`
    background-image: url(${banner});
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
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

export const Heading = styled.h1`
    color: var(--white-color);
    display: block;
    font-weight: 800;
    text-align: center;
    font-size: 4rem;
    margin-bottom: 8px;
`;

export const Subheading = styled.h2`
    color: var(--white-color);
    display: block;
    margin-bottom: 32px;
    font-weight: 400;
    text-align: center;
    /* font-size: 4rem; */

    @media only screen and (min-width: 600px) {
        padding: 8px;
    }
`;
