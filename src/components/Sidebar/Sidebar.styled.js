import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    /* display: inline-block; */
    display: none;
    width: var(--sidebar-width);
    min-height: calc(100vh - var(--header-height));
    height: auto;
    background-color: var(--white-color);
    padding-top: 16px;

    @media only screen and (max-width: 992px) {
        display: inline-block;
        width: 125px;
    }

    @media only screen and (max-width: 500px) {
        display: flex;
        flex-direction: row;
        z-index: 10;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: auto;
        justify-content: space-between;
        padding: 0 16px;
        border-top: 1px solid #ccc;
        min-height: auto;
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
        flex-direction: column;
        padding: 16px 0;
    }

    @media only screen and (max-width: 500px) {
        padding: 12px 0;
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

export const Icon = styled.div`
    display: inline-block;
    font-size: 2rem;
    margin-right: 10px;

    @media only screen and (max-width: 992px) {
        margin: 0;
    }
`;
