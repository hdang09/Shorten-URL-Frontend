import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${down('sm')} {
        display: flex;
    }
`;
