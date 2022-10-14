import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid transparent;
    background: var(--primary-color);
    /* background: linear-gradient(0deg, ${(props) =>
        props.theme.primary} 0%, rgb(42, 245, 152) 100%); */
    border-radius: 32px;
    min-width: 100px;
    height: 46px;
    font-size: 1.6rem;
    text-align: center;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    font-weight: 500;
    box-shadow: ${(props) =>
        props.shine === 'true' ? ' 0 8px 25px -8px var(--primary-color)' : 'none'};
    transition: all 0.5s;

    &:hover {
        opacity: 0.8;
        color: ${(props) => props.theme.white};
    }

    & + & {
        margin-left: 1.5rem;
        display: inline-flex;
    }

    &.outline {
        /* background: ${(props) => props.theme.white}; */
        background: transparent;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);

        &:hover {
            opacity: 1;
            background-color: var(--primary-color);
            color: #fff;
        }
    }

    &.text {
        border: none;
        background-color: transparent;
        color: var(--primary-color);
    }

    &.large {
        height: 45px;
        width: 100%;
    }

    &.menu {
        border-color: transparent;
        background-color: transparent;
        color: ${(props) => props.theme.black};
        text-align: left;
        padding: 0 40px;
    }

    &.active {
        color: var(--primary-color);
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const LeftIcon = styled.div`
    font-size: 2rem;
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

export const RightIcon = styled.div`
    font-size: 2rem;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;
