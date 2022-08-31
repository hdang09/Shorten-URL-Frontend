import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
    position: fixed;
    bottom: auto;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    background-color: var(--white-color);

    &.transparent {
        background-color: transparent;
        box-shadow: none;
        color: var(--white-color);
    }
`;

export const Content = styled.div`
    width: 1150px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30px;
    }

    p {
        display: inline-block;
        font-size: 2rem;
        color: var(--primary-color);
        margin: 0;
        margin-left: 18px;
        font-family: Quantum;
        font-kerning: none;
        line-height: initial;
        background: rgb(69, 206, 123);
        background: linear-gradient(90deg, rgba(69, 206, 123, 1) 0%, rgba(255, 201, 20, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-rendering: optimizeSpeed;
    }
`;

export const Search = styled.div`
    width: 450px;

    @media only screen and (max-width: 992px) {
        width: 300px;
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;

    @media only screen and (max-width: 992px) {
        display: none;
    }
`;

export const NavItem = styled(NavLink)`
    margin: 0 20px;
    font-weight: 700;
    color: ${(props) => (props.transparent ? 'var(--white-color)' : 'var(--black-color)')};

    &.active {
        opacity: 0.75;
        color: var(--primary-color);
    }

    &:hover {
        color: var(--primary-color);
    }

    @media only screen and (max-width: 992px) {
        /* width: 300px; */
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const Avatar = styled.img`
    border-radius: 100%;
    width: 35px;
    height: 35px;
`;
export const User = styled.div`
    cursor: pointer;
`;

export const NameUser = styled.span`
    margin: 0 8px;
    color: ${(props) => (props.transparent ? 'var(--white-color)' : 'var(--black-color)')};

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;
export const Menu = styled.div``;

export const TippyBox = styled.ul`
    background-color: var(--white-color);
    padding: 12px 0;
    box-shadow: rgb(0 0 0 / 12%) 0px 4px 16px;
    border-radius: 8px;
    list-style: none;
`;

export const MenuItem = styled(Link)`
    display: block;
    padding: 12px 52px 12px 32px;
    color: var(--black-color);
    font-weight: 500;

    &:hover {
        color: var(--black-color);
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const Text = styled.span`
    margin-left: 8px;
`;
