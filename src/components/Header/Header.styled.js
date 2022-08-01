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
`;

export const Content = styled.div`
    width: ${(props) => (props.fullWidth ? '100%' : '1150px')};
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
        font-weight: 700;
        font-size: 2rem;
        color: var(--primary-color);
        margin: 0;
        margin-left: 16px;
    }
`;

export const Search = styled.div`
    width: 450px;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: inline-block;
    margin: 0;

    li {
        color: blue;
        list-style: none;
        display: inline-block;
        padding: 0 20px;
    }
`;

export const Avatar = styled.img`
    border-radius: 100%;
    width: 35px;
    height: 35px;
`;
export const User = styled.div``;
export const NameUser = styled.span`
    margin: 0 8px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;
export const Menu = styled.div``;
