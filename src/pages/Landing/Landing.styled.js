import { down } from 'styled-breakpoints';
import styled, { keyframes } from 'styled-components';

import { Button, Card } from '../../components';

export const Main = styled.main`
    background-color: ${(props) => props.theme.cardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: calc( var(--header-height) / 2); */
    flex-direction: column;
    min-height: 100vh;
`;

export const Hero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const GradientBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    transform: scale(1.5);
    width: min(600px, 100vw);
    height: 400px;
    opacity: 0.2;
    filter: blur(69px);
    will-change: transform;
    background: linear-gradient(
        135deg,
        #f7c900 0%,
        var(--primary-color) 30%,
        var(--secondary-color) 70%,
        #00accf 100%
    );
    background-size: 200% 200%;
    animation: glow 10s ease infinite;

    ${down('lg')} {
        transform: scale(1);
    }
`;

export const Heading = styled.h1`
    color: ${(props) => props.theme.black};
    display: block;
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    text-align: center;
    font-size: 4.5rem;
    margin: 10rem 0 1rem;
    /* font-family: Quantum; */
    /* text-transform: uppercase; */
`;

export const Subheading = styled.h2`
    color: ${(props) => props.theme.black};
    display: block;
    /* margin-bottom: 32px; */
    font-weight: 400;
    text-align: center;
    font-size: 1.6rem;

    ${down('sm')} {
        padding: 16px;
    }
`;

export const CtaWrap = styled.div`
    margin: 2rem;
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
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: var(--box-shadow);
    margin: 4rem 0;
    animation: ${scaleUpCanter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;

    ${down('lg')} {
        width: 100%;
        padding: 0 12px;
    }
`;

export const LinkButton = styled(Button)`
    display: inline-flex;
`;

const wave = keyframes`
    from, to {
        clip-path: polygon(0 55%, 8% 55%, 20% 55%, 31% 53%, 38% 45%, 48% 38%, 55% 34%, 68% 33%, 78% 34%, 85% 43%, 89% 50%, 94% 57%, 100% 57%, 100% 100%, 0% 100%);
    }

    50% {
        clip-path: polygon(0% 54%, 7% 46%, 16% 39%, 27% 34%, 37% 35%, 47% 38%, 53% 47%, 57% 51%, 66% 55%, 77% 55%, 88% 56%, 100% 56%, 100% 100%, 0% 100%, 0 78%);
    }
`;

export const Highlight = styled.span`
    color: var(--primary-color);
    /* margin: 0 0.25rem; */
    padding: 0.25rem 0.5rem;
    border: 3px solid var(--primary-color);
    box-sizing: border-box;
    position: relative;

    h1 {
        display: inline-block;
        font-size: inherit;
    }

    h1:first-child {
        position: absolute;
        color: transparent;
        -webkit-text-stroke: 2px var(--primary-color);
    }

    h1:nth-child(2) {
        color: var(--primary-color);
        animation: ${wave} 4s ease-in-out infinite;
    }
`;

export const BannerButton = styled.a`
    ${down('md')} {
        margin-left: 0 !important;
        margin-top: 1rem;
    }
`;

export const ShortenerCard = styled(Card)`
    width: auto;
`;
