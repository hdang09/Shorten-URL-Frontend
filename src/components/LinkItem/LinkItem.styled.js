import styled, { keyframes } from 'styled-components';
import gradientColors from '../../assets/styles/gradientColors';

const permanentRandNum = Math.floor(Math.random() * gradientColors.length);

const slideLeft = keyframes`
    from {
        transform: translateX(100px);
    }
    to {
         transform: translateX(0);
    }
`;

export const Wrapper = styled.div`
    box-shadow: var(--box-shadow);
    padding: 12px;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    background: linear-gradient(${(props) => gradientColors[permanentRandNum]});
    border-radius: 10px;
    animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
    }

    /* &::before {
        content: '';
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.5;
    } */
`;

export const EditBox = styled.div`
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 10px;
    padding: 20px 50px;
    margin-bottom: 20px;

    @media only screen and (max-width: 500px) {
        padding: 20px;
    }
`;

export const Icon = styled.div`
    font-size: 3.6rem;
    margin-right: 16px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const Main = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: ${(props) => props.theme.white};
`;

export const Subtitle = styled.a`
    color: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
`;

export const Button = styled.div`
    cursor: pointer;
    font-size: 2.4rem;
    margin: 8px;
    display: inline-block;
    &:hover {
        opacity: 0.5;
    }
`;

export const QRDrawer = styled.div`
    padding: 48px;
`;

export const HighLight = styled.span`
    color: var(--primary-color);
    display: ${(props) => (props.wrap ? 'block' : 'inline-block')};
`;

export const Link = HighLight.withComponent('a');

export const Item = styled.div`
    margin-bottom: 8px;

    & svg {
        margin-right: 4px;
    }
`;
