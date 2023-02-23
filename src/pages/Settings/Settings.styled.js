import { between, down } from 'styled-breakpoints';
import styled from 'styled-components';

import hexToRgb from '../../utils/hexToRgb';

export const Toggle = styled.div`
    display: inline-block;
    padding: 0.25rem;
    background-color: ${(props) =>
        props.theme === 'dark' ? 'var(--primary-color)' : 'rgba(15, 23, 42, 0.1)'};
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    pointer-events: auto;
    cursor: pointer;
`;

export const Circle = styled.div`
    background-color: var(--white-color);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transform: ${(props) =>
        props.theme === 'dark'
            ? 'translate(1rem, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)'
            : '0'};
`;

export const ColorInput = styled.input`
    margin-right: 1rem;
    width: 40px;
    height: 40px;
`;

export const LayoutSelect = styled.div`
    width: 100%;
    min-height: 50px;
    border-radius: 0.5rem;
    border: 3px dashed var(--primary-color);
    padding: 1.25rem 1.5rem;
    cursor: pointer;
    background-color: ${(props) =>
        props.active === true ? 'var(--primary-color)' : 'transparent'};
    color: ${(props) => (props.active === true ? props.theme.white : props.theme.black)};

    &:hover {
        opacity: 0.8;
    }
`;

export const LayoutName = styled.label`
    margin-bottom: 0.5rem;
`;

export const LayoutImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const SettingsItem = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme.background};

    a {
        display: inline-block;

        &::after {
            content: '';
            display: block;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: ${(props) => props.theme.black};
            transition: width linear 0.35s;
        }

        &:hover::after {
            width: 100%;
        }
    }

    & div {
        margin-bottom: 0;
    }

    /* & + & {
        border-top: 1px solid ${(props) => props.theme.background};
    } */
`;

export const SettingsLabel = styled.div`
    margin: 0 0.5rem 0.5rem 0;
    display: inline-flex;
    align-items: center;
    /* font-size: 1.6rem; */
    font-weight: 500;

    & span {
        margin-left: 4px;
    }
`;

export const SettingsBox = styled.div`
    display: flex;
    flex: 1;
    height: 75px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.background};
    margin-bottom: 5px !important;

    &:hover {
        background-color: ${(props) => props.theme.background};
        cursor: pointer;
    }

    & + & {
        margin-left: 10px;
    }
`;

export const Preset = styled.div`
    width: ${(props) => (props.active ? '20px' : '16px')};
    height: ${(props) => (props.active ? '20px' : '16px')};
    background-color: ${(props) => props.color};
    border-radius: 1000px;
    transition: all;
`;

export const SmallSettingsBox = styled.div`
    height: 50px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px !important;
    border: ${(props) =>
        props.active ? '1px solid var(--primary-color)' : `2px solid ${props.theme.background}`};
    background-color: ${(props) =>
        props.active ? `rgba(${hexToRgb(props.primaryColor)}, 0.08)` : props.theme.cardBackground};

    &:hover {
        background-color: ${(props) =>
            props.active ? `rgba(${hexToRgb(props.primaryColor)}, 0.1)` : props.theme.background};
        cursor: pointer;
    }
`;

export const Layout = styled.div`
    max-width: 75px;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    display: flex;

    & div:first-child {
        background-color: ${(props) => (props.active ? 'var(--primary-color)' : '#a9b2bc')};
        border-radius: 3px;
    }

    & div:nth-child(2) {
        flex: 1;
        border-radius: 3px;
        border: 1px dashed ${(props) => (props.active ? `var(--primary-color)` : '#a9b2bc')};
        background-color: ${(props) =>
            props.active ? `rgba(${hexToRgb(props.primaryColor)}, 0.08)` : props.theme.background};
    }

    /* ${between('md', 'lg')} {
        max-width: 100px;
    } */
`;

export const BasicLayout = styled(Layout)`
    flex-direction: column;

    & div:first-child {
        width: 100%;
        height: 12px;
        margin-bottom: 5px;
    }
`;

export const ModernLayout = styled(Layout)`
    & div:first-child {
        width: 15px;
        height: 100%;
        margin-right: 6px;
    }
`;
