import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    & + & {
        margin-top: 16px;
    }
`;

export const InputTag = styled.input`
    border: none;
    background-color: var(
        ${(props) =>
            props.transparent ? '--background-color' : '--white-color'}
    );
    height: 42px;
    border-radius: 32px;
    padding: 20px;
    min-width: ${(props) => (props.large ? '100%' : '325px')};
    display: block;
    font-size: 1.4rem;
    caret-color: var(--primary-color);
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
