import styled, { keyframes } from 'styled-components';
import { down } from 'styled-breakpoints';

export const QR = styled.div`
    & canvas {
        width: 250px;
        height: auto;
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
    overflow-y: auto;
    overflow-x: hidden;
`;

export const SettingsItem = styled.li`
    background-color: ${(props) => props.theme.background};
    width: 100%;
    min-height: 50px;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    /* display: flex;
    align-items: center; */
    margin-bottom: 1rem;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
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
    margin: 8px 24px;
    /* padding: 10px; */
    border-radius: 6px;

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

export const QRScanningGroup = styled.div`
    height: 250px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        inset: 30px;
        width: calc(100% / 2 + 20px);
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
    fill: ${(props) => props.theme.black};
    position: absolute;
    width: 250px;
    padding: 5rem;
`;

export const QrScanning = styled(QrScanningBg)`
    fill: var(--primary-color);
    position: absolute;
    z-index: 10;
    position: relative;
    overflow: hidden;
    background-size: 250px;
    animation: ${scanning} 4s linear infinite;

    /* ${down('lg')} {
        padding: 12rem;
    }

    ${down('md')} {
        padding: 4rem;
    } */
`;
