import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { down } from 'styled-breakpoints';

export const Wrapper = styled.div`
    /* display: inline-block; */
    display: none;
    width: 250px;
    min-height: calc(100vh - var(--header-height));
    height: auto;
    background-color: ${(props) => props.theme.cardBackground};
    padding-top: 16px;

    ${down('lg')} {
        position: fixed;
        display: inline-block;
        width: var(--sidebar-width);
    }

    ${down('sm')} {
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
        min-height: auto;
    }
`;

export const SidebarItem = styled(NavLink)`
    color: ${(props) => props.theme.black};
    font-weight: 500;
    display: block;
    padding: 16px 32px;

    ${down('lg')} {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px 16px;
    }

    ${down('sm')} {
        padding: 12px 0;
    }

    &:hover {
        color: var(--primary-color);
        opacity: 0.8;
    }

    &.active2 {
        color: var(--primary-color);
        font-weight: 700;
    }
`;

export const Icon = styled.div`
    display: inline-block;
    font-size: 2rem;
    margin-right: 10px;

    ${down('lg')} {
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

    ${down('sm')} {
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
    ${(props) => (props.isAvatar ? 'border-radius: 1000px;' : '')}

    ${down('sm')} {
        display: none !important;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    background-color: ${(props) => props.theme.cardBackground};
    border-radius: ${(props) => (props.expanded ? '32px' : '100px')};
    padding: 1.5rem 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--box-shadow);
    margin: 0;

    ${down('sm')} {
        flex-direction: row;
        padding: 0 1.5rem;
        width: calc(100vw - 1rem);
        justify-content: space-around;
    }
`;

export const NewSidebarItem = styled(NavLink)`
    padding: 1.5rem;
    margin: 1rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.black};
    border-radius: ${(props) => (props.expanded ? '12px' : '50%')};
    display: flex;
    justify-content: center;
    align-items: center;
    ${down('sm')} {
        margin: 1rem 0;
    }
    &:hover {
        color: var(--primary-color);
        opacity: 0.8;
    }
    ${(props) =>
        props.to &&
        `&.active2 {
        background-color: var(--primary-color);
        color: ${props.theme.white};
    }`}
`;
