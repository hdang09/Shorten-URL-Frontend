import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    ${down('lg')} {
        padding: 0;
    }
`;

export const Body = styled.div`
    max-height: calc(100vh - 275px);
    overflow-y: scroll;
`;
