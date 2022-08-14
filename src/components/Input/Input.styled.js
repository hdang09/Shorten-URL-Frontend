import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 12px;

    & + button {
        margin-left: 8px;
    }

    & + & {
        margin-top: 16px;
    }

    &.large {
        display: flex;
        flex: 1;
    }

    &.transparent input {
        border: none;
        background-color: var(--background-color);
    }

    &.outline input {
        box-shadow: inset 0 0 6px var(--primary-color), inset 0 0 6px var(--primary-color),
            inset 0 0 6px var(--primary-color);
    }

    @media only screen and (max-width: 500px) {
        margin-right: 0;

        & + button {
            margin-left: 0;
        }
    }
`;

export const InputTag = styled.input`
    /* border: 1px solid var(--black-color); */
    box-shadow: var(--box-shadow);
    background-color: var(--white-color);
    height: 42px;
    border-radius: 32px;
    padding: 20px;
    min-width: ${(props) => (props.large ? '100%' : '325px')};
    display: block;
    font-size: 1.4rem;
    caret-color: var(--primary-color);
    color: var(--black-color);

    @media only screen and (max-width: 500px) {
        min-width: 100%;
    }
`;

export const Eye = styled.div`
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const SubmitBtn = styled.div`
    position: absolute;
    right: 12px;
    top: 0;
    margin: 0;
`;

export const Icon = styled.div`
    position: absolute;
    /* left: 8px; */
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    margin-right: 8px;
`;
