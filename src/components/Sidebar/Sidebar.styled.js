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

export const Sidebar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 5rem 0 5rem 1.5rem;
    z-index: 10;

    @media only screen and (max-width: 500px) {
        width: 100vw;
        height: auto;
        justify-content: flex-end;
        padding: 0;
        bottom: 1rem;
        margin: auto;
    }
`;

export const Logo = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    background-color: var(--white-color);
    border-radius: ${(props) => (props.expanded ? '32px' : '100px')};
    padding: 1.5rem 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--box-shadow);
    margin: 0;

    @media only screen and (max-width: 500px) {
        flex-direction: row;
        padding: 0 1.5rem;
        width: calc(100vw - 1rem);
        justify-content: space-around;

        & > :first-child {
            display: none;
        }
    }
`;

export const NewSidebarItem = styled(NavLink)`
    padding: 1.5rem;
    margin: 1rem;
    font-size: 1.8rem;
    color: var(--black-color);
    border-radius: ${(props) => (props.expanded ? '12px' : '50%')};
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 500px) {
        margin: 1rem 0;
    }
    &:hover {
        color: var(--primary-color);
        opacity: 0.8;
    }
    ${(props) =>
        props.to &&
        `&.active {
        background-color: var(--primary-color);
        color: var(--white-color);
    }`}
`;
