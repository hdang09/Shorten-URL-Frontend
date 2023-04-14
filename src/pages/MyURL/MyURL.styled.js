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
