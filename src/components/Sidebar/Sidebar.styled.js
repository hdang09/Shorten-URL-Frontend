import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-block;
    width: var(--sidebar-width);
    height: calc(100vh - var(--header-height));
    background-color: var(--white-color);
    padding-top: 16px;

    @media only screen and (max-width: 992px) {
        width: 125px;
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;
