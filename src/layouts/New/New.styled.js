import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    top: 0;
    margin-left: 115px;
    flex: 1;

    @media only screen and (max-width: 992px) {
        justify-content: flex-start;
    }

    @media only screen and (max-width: 500px) {
        overflow: hidden;
        margin: 0;
    }
`;

export const Content = styled.div`
    width: 1200px;
    margin: 4rem 1rem;

    @media only screen and (max-width: 992px) {
        margin: 2rem 8px 0;
    }

    @media only screen and (max-width: 500px) {
        margin: 16px 8px 80px;
    }
`;
