import styled from 'styled-components';

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
`;

export const SettingsList = styled.ul`
    margin-top: 2rem;
    list-style: none;
    padding: 0;
    max-height: 300px;
    overflow-y: auto;
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
`;

export const Heading = styled.h2`
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.black};
`;

export const Content = styled.div`
    width: auto;
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
