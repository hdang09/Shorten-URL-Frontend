import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const SidebarItem = styled(NavLink)`
    color: var(--black-color);
    font-weight: 500;
    display: block;
    padding: 16px 32px;

    @media only screen and (max-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0;
    }

    &:hover {
        color: var(--primary-color);
        opacity: 0.8;
    }

    &.active {
        color: var(--primary-color);
        font-weight: 700;
    }
`;
