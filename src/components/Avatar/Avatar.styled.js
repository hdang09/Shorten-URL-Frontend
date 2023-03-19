import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Avatar = styled.img`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 100px;

    ${down('sm')} {
        ${(props) => props.hideOnMobile && 'display: none !important'}
    }
`;
