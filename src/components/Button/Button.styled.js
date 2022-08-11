import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid transparent;
    background: var(--primary-color);
    border-radius: 32px;
    min-width: 100px;
    height: 40px;
    font-size: 1.6rem;
    text-align: center;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    color: var(--white-color);
    font-weight: 500;
    /* margin: 12px; */

    &:hover {
        opacity: 0.8;
        color: var(--white-color);
    }

    & + & {
        margin-top: 8px;
    }

    &.outline {
        background-color: var(--white-color);
        border-color: var(--primary-color);
        color: var(--primary-color);

        &:hover {
            opacity: 0.8;
            color: var(--primary-color);
        }
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

    @media only screen and (max-width: 500px) {
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
