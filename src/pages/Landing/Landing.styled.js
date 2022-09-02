import styled, { keyframes } from 'styled-components';
import banner from '../../assets/banner-bg.jpg';
import { Button } from '../../components';

export const Banner = styled.div`
    /* background-image: url(${banner}); */
    background-color: #fcfbff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--header-height);
    flex-direction: column;
`;

export const Heading = styled.h1`
    color: var(--black-color);
    display: block;
    font-weight: 800;
    text-align: center;
    font-size: 4rem;
    margin: 4rem 0 0.5rem;
`;

export const Subheading = styled.h2`
    color: var(--black-color);
    display: block;
    /* margin-bottom: 32px; */
    font-weight: 400;
    text-align: center;

    @media only screen and (min-width: 600px) {
        padding: 8px;
    }
`;

const scaleUpCanter = keyframes`
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1);
    }
`;

export const Screenshot = styled.img`
    width: 1000px;
    /* height: auto; */
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: var(--box-shadow);
    margin: 4rem 0;
    animation: ${scaleUpCanter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;
    @media only screen and (max-width: 992px) {
        width: 100%;
        padding: 0 12px;
    }
`;

export const LinkButton = styled(Button)`
    display: inline-flex;
`;
