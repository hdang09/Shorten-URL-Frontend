import { down } from 'styled-breakpoints';
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
    background: linear-gradient(${gradientColors[permanentRandNum]});
    border-radius: 10px;
    animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

    ${down('md')} {
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

    ${down('md')} {
        padding: 20px;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 3.6rem;
    margin: 0 16px 0 6px;

    ${down('md')} {
        display: none;
    }

    .social-svg-icon {
        fill: ${(props) => props.theme.white} !important;
    }
`;

export const Main = styled.div`
    flex: 1;
    width: -webkit-fill-available;
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
    text-overflow: ellipsis;
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

export const Label = styled.div`
    /* margin-right: 4px; */
    /* display: inline-block; */
    & svg:nth-child(2) {
        margin-left: -8px;
    }

    & label {
        margin-left: 4px;
        font-weight: bold;
    }
`;

export const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    box-shadow: var(--box-shadow);
    height: 42px;
    border-radius: 32px;
    font-size: 1.4rem;
    caret-color: var(--primary-color);
    color: ${(props) => props.theme.black};
    padding: 8px 20px;
    box-sizing: border-box;

    & input {
        height: 28px;
        background: transparent;
    }

    & input:first-child {
        padding-right: 5px;
        border-right: 2px solid #ccc;
    }

    & input:last-child {
        padding-left: 10px;
    }
`;

export const CustomInput = styled.input`
    overflow: hidden;
    display: block;
`;
