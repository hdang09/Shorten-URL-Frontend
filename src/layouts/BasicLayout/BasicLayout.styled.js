import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    top: 0;
    margin-top: var(--header-height);
    background-color: ${(props) => props.theme.contrastBackground || props.theme.background};

    ${down('lg')} {
        align-items: flex-start;
        justify-content: space-between;
    }

    ${down('sm')} {
        overflow: hidden;
        justify-content: center;
    }
`;

export const Content = styled.div`
    width: 1150px;
    margin: 24px 16px;

    ${down('lg')} {
        margin: 16px 8px;
    }

    ${down('md')} {
        overflow-x: scroll;
        margin: 12px 8px 80px;
    }
`;
