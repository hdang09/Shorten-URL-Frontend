import styled from 'styled-components';
import banner from '../../assets/banner-bg.jpg';

export const Banner = styled.div`
    background-image: url(${banner});
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
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

    @media only screen and (min-width: 600px) {
        padding: 8px;
    }
`;
