import styled from 'styled-components';

export const Label = styled.div`
    /* margin-right: 4px; */
    /* display: inline-block; */
    & svg:nth-child(2) {
        margin-left: -8px;
    }

    & label {
        margin-left: 4px;
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
    caret-color: var(--primary-color);
    color: ${(props) => props.theme.black};
    padding: 8px 20px;
    box-sizing: border-box;

    & input {
        height: 28px;
        background: transparent;
    }

    & input:first-child {
        padding-right: 5px;
        border-right: 2px solid #ccc;
    }

    & input:last-child {
        padding-left: 10px;
    }
`;

export const CustomInput = styled.input`
    /* border: 1px solid ${(props) => props.theme.black}; */
    /* min-width: ${(props) => (props.large ? '100%' : '325px')}; */
    display: block;
`;
