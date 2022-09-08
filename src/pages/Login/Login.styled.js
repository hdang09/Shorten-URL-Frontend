import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import urlComponent from '../../assets/images/url.png';

export const Wrapper = styled.div`
    height: 100vh;
    background-size: cover;
    background-clip: border-box;
    background-position: center;
    overflow: hidden;
    background-color: ${(props) => props.theme.background};
`;

export const ImgSection = styled.div`
    background-image: url(${urlComponent});
    width: 400px;
    height: 200px;
    object-fit: contain;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 2rem;
    /* padding: 0 5rem; */
    box-sizing: border-box;
`;

export const LoginSection = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
`;

export const Title = styled.h1`
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 2.8rem;
    color: ${(props) => props.theme.black};
`;

export const SubTitle = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.black};
`;

export const Separator = styled.div`
    width: calc(100% - 18em);
    height: 1px;
    background-color: ${(props) => props.theme.black};
    margin: 2rem 0;
`;

export const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 450px;
    height: 650px;
    box-shadow: var(--box-shadow);
    border-radius: 12px;
    background-color: ${(props) => props.theme.cardBackground};
`;

export const Contact = styled.p`
    color: ${(props) => props.theme.black};
    position: absolute;
    bottom: 2rem;
`;
