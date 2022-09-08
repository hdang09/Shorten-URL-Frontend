import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import loginComponent from '../../assets/images/login-component.png';

export const Wrapper = styled.div`
    height: 100vh;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    overflow: hidden;
    background-color: ${(props) => props.theme.background};
`;

export const ImgSection = styled.div`
    background-image: url(${loginComponent});
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const LoginSection = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
`;

export const Title = styled.h1`
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 2.8rem;
    color: ${(props) => props.theme.black};
`;

export const SubTitle = styled.h2`
    margin-bottom: 32px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.black};
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 992px) {
        width: 450px;
        height: 650px;
        box-shadow: var(--box-shadow);
        border-radius: 12px;
        background-color: ${(props) => props.theme.white};
    }
`;

export const RecoverPass = styled.p`
    text-align: right;
    font-size: 1.4rem;
    margin: 10px 0 20px;
    right: 0;
    color: ${(props) => props.theme.black};
`;

export const SignUp = styled.p`
    text-align: center;
    margin: 12px;
    font-size: 1.4rem;
    color: ${(props) => props.theme.black};
`;
