import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--white-color);
    border-radius: 12px;
    width: ${(props) => (props.noItem ? '500px' : '100%')};
    margin-bottom: 16px;
    padding: 20px;
    box-shadow: var(--box-shadow);

    @media only screen and (max-width: 500px) {
        width: calc(100vw - 16px);
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 2.8rem;
`;
