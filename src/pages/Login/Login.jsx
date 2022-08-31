import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';

import * as Styled from './Login.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from '../../hooks';
import { Container, Row, Col } from 'styled-bootstrap-grid';

function Login() {
    const [tokenStorage, setTokenStorage] = useLocalStorage('token', '');

    const onSuccess = async (response) => {
        const token = response.tokenId;
        // const res = await productApi.login(token);
        setTokenStorage(res.data.tokens.access.token);
        // LocalStorageUtils.setItem('token', res.data.tokens.access.token)
        return (window.location = '/');
    };
    const onFailure = (response) => {};

    return (
        <Styled.Wrapper>
            <Container>
                <Row>
                    <Col col={6} hiddenMdDown />
                    <Col col={6} xs={12} sm={12} md={12} lg={6}>
                        <Styled.LoginSection>
                            <Styled.Box>
                                <Styled.Title>Hello Again!</Styled.Title>
                                <Styled.SubTitle>Welcome back you've been missed</Styled.SubTitle>
                                <div>
                                    <Input transparent placeholder="Enter username" />
                                    <Input transparent password />
                                    <Styled.RecoverPass>Recovery Password</Styled.RecoverPass>
                                    <Button to="/" large>
                                        Log in
                                    </Button>

                                    <GoogleLogin
                                        // clientId="977769293513-67s7vl5ij0nrvpafqliamobp1hhocrja.apps.googleusercontent.com"
                                        clientId="testhehe.apps.googleusercontent.com"
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        render={(props) => (
                                            <Button
                                                onClick={props.onClick}
                                                to="/"
                                                large
                                                leftIcon={<FcGoogle />}
                                                outline
                                            >
                                                Continue with FPT Email
                                            </Button>
                                        )}
                                    />
                                    <Styled.SignUp>
                                        Don't have an account?
                                        <Link to="/signup"> Sign up</Link>
                                    </Styled.SignUp>
                                </div>
                            </Styled.Box>
                        </Styled.LoginSection>
                    </Col>
                </Row>
            </Container>
        </Styled.Wrapper>
    );
}

export default Login;
