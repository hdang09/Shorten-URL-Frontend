import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid transparent;
    background: var(--primary-color);
    /* background: linear-gradient(0deg, var(--primary-color) 0%, rgb(42, 245, 152) 100%); */
    border-radius: 32px;
    min-width: 100px;
    height: 46px;
    font-size: 1.6rem;
    text-align: center;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-color);
    font-weight: 500;
    box-shadow: ${(props) => (props.shine ? ' 0 8px 25px -8px var(--primary-color)' : 'none')};

    &:hover {
        opacity: 0.8;
        color: var(--white-color);
    }

    & + & {
        margin-left: 1.5rem;
        display: inline-flex;
    }

    &.outline {
        background: var(--white-color);
        border: 1px solid var(--primary-color);
        color: var(--primary-color);

        &:hover {
            opacity: 0.8;
            color: var(--primary-color);
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
        color: var(--black-color);
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
    margin-right: 6px;
`;

export const RightIcon = styled.div`
    font-size: 2rem;
    margin-left: 6px;
`;
