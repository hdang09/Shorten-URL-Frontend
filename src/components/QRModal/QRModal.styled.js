import styled from 'styled-components';
import { down } from 'styled-breakpoints';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
`;

export const Wrapper = styled.div`
    position: fixed;
    top: 48px;
    bottom: 48px;
    left: 200px;
    right: 200px;
    box-shadow: var(--box-shadow);
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    z-index: 100;
    display: flex;

    ${down('lg')} {
        left: 24px;
        right: 24px;
    }
`;

export const CloseBTN = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    margin: 20px;
    /* font-size: 2rem; */
`;

export const Preview = styled.div`
    width: 350px;
    height: 100%;
    padding: 32px;
    display: inline-block;
    border-right: 1px solid ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${down('md')} {
        width: 100%;
        border: none;
    }
`;

export const PreviewImage = styled.img`
    width: 250px;
    margin-bottom: 20px;
`;

export const Customize = styled.div`
    padding: 32px;
    display: inline-block;
    flex: 1;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin: 8px 16px;
    padding: 10px;
    border-radius: 6px;

    &:hover {
        background-color: var(--hover-color);
        cursor: pointer;
    }
`;

export const List = styled.ul`
    list-style: none;
    overflow: auto;
    padding: 0;

    & h2 {
        color: ${(props) => props.theme.black};
    }
`;

export const Item = styled.li`
    margin: 4px 0 16px 0;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex-shrink: 0;
    width: calc(100vw - 120px);
    overflow: auto;
`;
