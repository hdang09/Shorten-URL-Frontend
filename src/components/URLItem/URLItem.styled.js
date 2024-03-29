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
    /* box-shadow: var(--box-shadow); */
    overflow: hidden;
    padding: 12px;
    color: ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    /* background: linear-gradient(${gradientColors[permanentRandNum]}); */
    background: ${(props) => props.theme.background};
    border-radius: 10px;
    animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

    ${down('md')} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const SkeletonWrapper = styled.div`
    box-shadow: var(--box-shadow);
    padding: 12px;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    border-radius: 10px;

    ${down('md')} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const EditBox = styled.div`
    border: 2px solid ${(props) => props.theme.gray};
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
        fill: ${(props) => props.theme.black} !important;
    }

    .social-svg-mask {
        fill: ${(props) => props.theme.background} !important;
        transition: none !important;
    }
`;

export const Main = styled.div`
    flex: 1;
    width: -webkit-fill-available;
    margin-right: 10px;
    max-height: 54px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--primary-color);

    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, 1);
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Subtitle = styled.a`
    color: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    padding-bottom: 1px;
    border-bottom: 2px solid ${(props) => props.theme.gray};

    display: -webkit-inline-box;
    -webkit-line-clamp: var(--line-clamp, 1);
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:hover {
        color: inherit;
        border-color: var(--primary-color);
        transition: border-color 0.25s linear;
    }
`;

export const SubtitleSkel = styled.a`
    color: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
    text-overflow: ellipsis;
    padding-bottom: 1px;
    border-bottom: 2px solid ${(props) => props.theme.gray};
    border-color: transparent;

    &:hover {
        color: inherit;
        border-color: var(--primary-color);
        transition: border-color 0.25s linear;
    }
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

export const DrawerTitle = styled.span`
    color: ${(props) => props.theme.black};
`;

export const QRDrawer = styled.div`
    padding: 0 12px;
`;

export const HighLight = styled.span`
    color: var(--primary-color);
    display: ${(props) => (props.wrap ? 'block' : 'inline-block')};
`;

export const Link = styled(HighLight)`
    overflow-wrap: break-word;

    &:hover {
        color: var(--secondary-color);
    }
`;

export const Item = styled.div`
    margin-bottom: 16px;

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
    color: ${(props) => props.theme.black};
    padding: 8px 20px;
    box-sizing: border-box;

    & input {
        height: 28px;
        background: transparent;
    }
`;

export const Domain = styled.span`
    display: block;
    padding-right: 12px;
    border-right: 2px solid ${(props) => props.theme.gray};
`;

export const Input = styled.input`
    width: 100%;
    overflow: hidden;
    display: block;
    padding-left: 12px;
`;
