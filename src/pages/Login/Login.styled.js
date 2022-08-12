import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import background from '../../assets/login-bg.png';

export const Wrapper = styled.div`
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    overflow: hidden;

    @media only screen and (max-width: 992px) {
        background-image: none;
        background-color: var(--white-color);
    }
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
export const LoginSection = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 992px) {
        background-color: var(--white-color);
    }
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
