import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
`;

export const Title = styled.h1`
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 2.8rem;
`;

export const SubTitle = styled.h2`
    margin-bottom: 32px;
    font-size: 1.6rem;
`;

export const Image = styled.div`
    background-color: var(--background-color);
    position: relative;

    & img {
        border-radius: 32px;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media only screen and (max-width: 996px) {
        display: none;
    }
`;
export const LoginSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const RecoverPass = styled.p`
    text-align: right;
    font-size: 1.4rem;
    margin: 10px 0 20px;
    right: 0;
`;

export const SignUp = styled.p`
    text-align: center;
    margin: 12px;
    font-size: 1.4rem;
`;

export default Wrapper;
