import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${down('sm')} {
        display: flex;
    }
`;

export const Label = styled.div`
    & svg:nth-child(2) {
        margin-left: -8px;
    }

    & label {
        margin: 0 0 4px 4px;
        font-weight: bold;
    }
`;

export const WrapperInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    box-shadow: var(--box-shadow);
    height: 42px;
    border-radius: 32px;
    font-size: 1.4rem;
    color: ${(props) => props.theme.black};
    padding: 8px 20px;
    box-sizing: border-box;

    & input {
        height: 28px;
        background: transparent;
    }

    & input:first-child {
        max-width: 105px;
        padding-right: 5px;
        border-right: 2px solid #ccc;
    }

    & input:last-child {
        padding-left: 10px;
    }
`;

export const CustomInput = styled.input`
    overflow: hidden;
    display: block;
`;
