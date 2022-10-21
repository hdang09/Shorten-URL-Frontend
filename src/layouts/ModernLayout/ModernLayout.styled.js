import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    /* display: flex; */
    height: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
    box-sizing: border-box;

    /* width: 100%;
    height: 100%;
    max-height: 100vw;
    max-width: 100vh;
    background-color: ${(props) => props.theme.background}; */
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    top: 0;
    margin-left: 115px;
    flex: 1;

    ${down('lg')} {
        /* justify-content: flex-start; */
    }

    ${down('sm')} {
        overflow: hidden;
        margin: 0;
    }
`;

export const Content = styled.div`
    width: 1200px;
    margin: 2rem 1rem;

    ${down('lg')} {
        margin: 2rem 8px 0;
    }

    ${down('sm')} {
        width: auto;
        margin: 16px 8px 80px;
        overflow-x: auto;
    }
`;
