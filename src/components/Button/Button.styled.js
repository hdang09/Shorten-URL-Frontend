import styled from 'styled-components';

const MyButton = styled.button`
    border: 1px solid transparent;
    background-color: var(--primary-color);
    border-radius: 32px;
    min-width: 100px;
    height: 45px;
    font-size: 1.6rem;
    text-align: center;
    padding: 0 20px;
    display: block;
    width: 100%;
    color: var(--white-color);
    font-weight: 500;
    margin: 12px;

    & + & {
        margin-top: 12px;
    }

    &.outline {
        background-color: var(--white-color);
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    &.large {
    }

    &:hover {
        opacity: 0.8;
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
`;

export default MyButton;
