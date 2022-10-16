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
    background-color: ${(props) => props.theme.background};

    @media only screen and (max-width: 992px) {
        align-items: flex-start;
        justify-content: space-between;
    }

    ${down('sm')} {
        overflow: hidden;
    }
`;

export const Content = styled.div`
    width: 1150px;
    margin: 24px 16px;

    @media only screen and (max-width: 992px) {
        margin: 16px 8px;
    }

    ${down('md')} {
        width: auto;
        overflow-x: scroll;
        margin: 12px 8px 80px;
    }
`;
