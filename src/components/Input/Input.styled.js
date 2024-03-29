import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;

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

    & input {
        background-color: ${(props) => props.theme.cardBackground};
    }

    &.background input {
        background-color: ${(props) => props.theme.background};
        border: none;
    }

    &.outline input {
        box-shadow: inset 0 0 6px var(--primary-color), inset 0 0 6px var(--primary-color),
            inset 0 0 6px var(--primary-color);
    }

    ${down('sm')} {
        margin-right: 0;

        & + button {
            margin-left: 0;
        }
    }
`;

export const InputTag = styled.input`
    /* border: 1px solid ${(props) => props.theme.black}; */
    box-shadow: var(--box-shadow);
    background-color: transparent;
    height: 42px;
    border-radius: 32px;
    padding: 20px;
    min-width: ${(props) => (props.large ? '100%' : '325px')};
    display: block;
    font-size: 1.4rem;
    caret-color: var(--primary-color);
    color: ${(props) => props.theme.black};

    /* ${down('sm')} {
        min-width: 100%;
    } */
`;

export const Eye = styled.div`
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${(props) => props.theme.black};

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

export const ColorInput = styled.input`
    position: absolute;
    bottom: 6px;
    right: 24px;
    width: 30px;
    height: 30px;
`;
