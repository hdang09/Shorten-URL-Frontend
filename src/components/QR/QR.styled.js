import styled, { keyframes } from 'styled-components';

export const QR = styled.div`
    & canvas {
        max-width: 250px;
        max-height: 250px;
        /* height: auto; */
    }
`;

export const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 4px 0;
    position: relative;
`;

export const SettingsList = styled.ul`
    margin-top: 2rem;
    list-style: none;
    padding: 0;
    height: 325px;
    /* overflow-y: auto; */
    overflow-x: hidden;
`;

export const SettingsItem = styled.li`
    background-color: ${(props) => props.theme.background};
    width: 100%;
    min-height: 50px;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.25rem;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    cursor: pointer;
`;

export const Heading = styled.h2`
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.black};
`;

export const Content = styled.div`
    width: inherit;
    margin-top: 0.75rem;

    p {
        font-weight: bold;
    }

    p:last-of-type {
        margin-top: 24px;
    }
`;

export const HorizontalContent = styled(Content)`
    display: flex;
    max-width: 450px;
    height: 100px;
    overflow-x: auto;
    overflow-y: hidden;
`;

export const Image = styled.img`
    width: 50px;
    height: auto;
    margin: 8px 20px;

    &:hover {
        background-color: var(--hover-color);
        cursor: pointer;
    }
`;

const animateLine = keyframes`
    0% {
        top: 30px;
    }

    50% {
        top: calc(100% - 30px);
    }
`;

const scanning = keyframes`
    0%, 100% {
        clip-path: inset(0 0 100% 0);
    }

    50% {
        clip-path: inset(0 0 0 0);
    }
`;

const flicker = keyframes`
    0%, 100% {
        opacity: 0
    }

    50% {
        opacity: 0.5
    }
`;

export const QRScanningGroup = styled.div`
    height: 250px;
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        inset: 30px;
        width: calc(100% / 2 + 50px);
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        background: var(--primary-color);
        filter: drop-shadow(0 0 20px var(--primary-color))
            drop-shadow(0 0 60px var(--primary-color));
        animation: ${animateLine} 4s ease-in-out infinite;
    }
`;

export const QrScanningBg = styled.div`
    fill: ${(props) => props.theme.background};
    position: absolute;
    width: 250px;
    padding: 5rem;
`;

export const QrScanning = styled(QrScanningBg)`
    fill: var(--primary-color);
    position: absolute;
    z-index: 1;
    position: relative;
    overflow: hidden;
    background-size: 250px;
    animation: ${scanning} 4s linear infinite;
`;

export const BorderQr = styled.div`
    position: absolute;
    inset: 0;
    padding: 2px;
    animation: ${flicker} 1s linear infinite;

    & .border {
        stroke: ${(props) => props.theme.black};
    }
`;

export const ColorsInput = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;

    & input[type='color'] {
        width: 30px;
        height: 30px;
        margin-left: 6px;
    }
`;

export const UploadFile = styled.label`
    border-radius: 10px;
    border: 1px dashed ${(props) => props.theme.black};
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    & span {
        margin-top: 5px;
    }

    &:hover {
        background-color: ${(props) => props.theme.cardBackground};
        cursor: pointer;
        border-color: ${(props) => props.theme.cardBackground};
    }
`;

export const HideBgLogo = styled.div`
    margin-bottom: 10px;

    input[type='checkbox'] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: ${(props) => props.theme.cardBackground};
        /* Not removed via appearance */
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid ${(props) => props.theme.cardBackground};
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: inline-grid;
        place-content: center;
        margin-left: 8px;
        box-shadow: var(--box-shadow);

        &:hover {
            cursor: pointer;
        }

        &::before {
            content: '';
            width: 0.65em;
            height: 0.65em;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--primary-color);
        }

        &:checked::before {
            transform: scale(1);
        }
    }
`;

export const Slider = styled.div`
    display: flex;
    align-items: center;

    input {
        -webkit-appearance: none;
        height: 15px;
        background: ${(props) => props.theme.cardBackground};
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        display: inline-block;
        margin-left: 8px;
        border-radius: 5px;
        box-shadow: var(--box-shadow);

        &:hover {
            opacity: 1;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background-color: var(--primary-color);
            cursor: pointer;
            border-radius: 2px;
        }

        &::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background-color: var(--primary-color);
            cursor: pointer;
            border-radius: 2px;
        }
    }
`;
