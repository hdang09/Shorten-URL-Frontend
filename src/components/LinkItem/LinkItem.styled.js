import styled from 'styled-components';

export const Wrapper = styled.div`
    box-shadow: var(--box-shadow);
    padding: 12px;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    background: var(--primary-color);
    border-radius: 10px;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
    }

    /* &::before {
        content: '';
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.5;
    } */
`;

export const EditBox = styled.div`
    border: 1px solid var(--black-color);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
`;

export const Icon = styled.div`
    font-size: 2rem;
    margin-right: 16px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const Main = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 6px;
`;

export const Subtitle = styled.a`
    color: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: underline;
`;

export const Button = styled.div`
    cursor: pointer;
    font-size: 2.4rem;
    margin: 8px;
    dib &:hover {
        opacity: 0.5;
    }
`;
