import { Link, NavLink } from 'react-router-dom';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.header`
    height: var(--header-height);
    position: fixed;
    bottom: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.isLandingPage === true
            ? `backdrop-filter: blur(5px);`
            : `box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    background-color: ${props.theme.cardBackground};`}

    &.transparent {
        background-color: transparent;
        box-shadow: none;
        color: ${(props) => props.theme.white};
    }
`;

export const Content = styled.div`
    width: 1150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;

    ${down('md')} {
        justify-content: ${(props) => (props.isLoginPage ? ' center' : 'space-between')};
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 30px;
    }

    p {
        display: inline-block;
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary-color);
        margin: 0;
        margin-left: 18px;
        font-family: 'Quantum', 'GT Walsheim Pro Black';
        font-kerning: none;
        line-height: initial;
        background: rgb(69, 206, 123);
        background: linear-gradient(90deg, rgba(69, 206, 123, 1) 0%, rgba(255, 201, 20, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-rendering: optimizeSpeed;
    }

    & p span {
        visibility: hidden;
    }
`;

export const Search = styled.div`
    width: 450px;

    ${down('lg')} {
        width: 300px;
    }

    ${down('sm')} {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;

    ${down('lg')} {
        display: none;
    }
`;

export const NavItem = styled(NavLink)`
    margin: 0 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.black};

    &.active2 {
        --active-line: 2px;
        opacity: 0.75;
        color: var(--primary-color);
        line-height: calc(var(--header-height) - var(--active-line));
        border-bottom: var(--active-line) solid var(--primary-color);
    }

    &:hover {
        color: var(--primary-color);
    }

    ${down('lg')} {
        /* width: 300px; */
    }

    ${down('sm')} {
        display: none;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.theme.black};

    & span:nth-child(2) {
        margin-left: 10px;
    }
`;

export const NameUser = styled.span`
    margin: 0 8px;
    color: ${(props) =>
        props.transparent ? '${(props) => props.theme.white}' : '${(props) => props.theme.black}'};

    ${down('sm')} {
        display: none;
    }
`;

export const Menu = styled.div``;

export const TippyBox = styled.ul`
    background-color: ${(props) => props.theme.white};
    padding: 12px 0;
    box-shadow: rgb(0 0 0 / 12%) 0px 4px 16px;
    border-radius: 8px;
    list-style: none;
`;

export const MenuItem = styled(Link)`
    display: block;
    padding: 12px 52px 12px 32px;
    color: ${(props) => props.theme.black};
    font-weight: 500;

    &:hover {
        color: ${(props) => props.theme.black};
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Text = styled.span`
    margin-left: 8px;
`;

export const HeaderButtons = styled.div`
    ${down('md')} {
        display: none;
    }
`;
