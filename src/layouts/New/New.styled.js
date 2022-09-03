import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../../components/Sidebar/Sidebar.styled';

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
