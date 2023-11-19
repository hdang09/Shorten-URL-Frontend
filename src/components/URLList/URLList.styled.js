import { up } from 'styled-breakpoints';
import styled from 'styled-components';

import config from '../../config';

export const URLList = styled.div`
    ${up('lg')} {
        max-height: ${(props) => (props.$isSmall ? '352px' : 'auto')};
        overflow-y: auto;
        overflow-x: hidden;
    }
`;

export const NoLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
    padding: 44px 0;

    img {
        margin-bottom: 20px;
        width: 250px;
    }

    h1 {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 900;
        color: ${(props) => props.theme.black};
    }
`;
