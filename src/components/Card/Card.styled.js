import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--white-color);
    color: var(--black-color);
    border-radius: 12px;
    width: ${(props) => (props.noItem ? '500px' : '100%')};
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: var(--box-shadow);

    @media only screen and (max-width: 500px) {
        width: calc(100vw - 32px);
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    width: ${(props) => (props.noItem ? '100%' : 'auto')};
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 2.6rem;
    text-align: ${(props) => (props.noItem ? 'center' : 'left')};
`;

export const Subtitle = styled.h3`
    &:hover a {
        color: var(--primary-color);
        opacity: 0.6;
    }
`;
