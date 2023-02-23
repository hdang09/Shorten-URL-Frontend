import { down } from 'styled-breakpoints';
import styled, { keyframes } from 'styled-components';

import { Button } from '../../components';

export const Banner = styled.div`
    background-color: ${(props) => props.theme.cardBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: calc( var(--header-height) / 2); */
    flex-direction: column;
    min-height: 100vh;
`;

export const Heading = styled.h1`
    color: ${(props) => props.theme.black};
    display: block;
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    text-align: center;
    font-size: 4rem;
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

    ${down('sm')} {
        padding: 16px;
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

export const Highlight = styled.span`
    color: var(--primary-color);
    /* margin: 0 0.25rem; */
    padding: 0.25rem 0.5rem;
    border: 3px solid var(--primary-color);
    box-sizing: border-box;
    position: relative;
`;

export const BannerButton = styled.a`
    ${down('md')} {
        margin-left: 0 !important;
        margin-top: 1rem;
    }
`;
