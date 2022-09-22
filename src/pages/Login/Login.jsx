import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { login } from '../Login/loginSlice';
import * as Styled from './Login.styled';
import { useLocalStorage } from '../../hooks';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { CLIENT_ID } from '../../config';

function Login() {
    const dispatch = useDispatch();
    const [tokenStorage, setTokenStorage] = useLocalStorage('token', '');
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7Il9pZCI6IjYzMjY2ZDU5MjcwN2IyMWMxOTAxNWZkZCIsImVtYWlsIjoiZGFuZ3RyYW5oYWk2MjhAZ21haWwuY29tIiwicm9sZSI6IjEifSwiaWF0IjoxNjYzODQ5MDk4LCJleHAiOjE2NjM4NTA4OTh9.gc_fhDzLIOt4S7bhQP4TnlIlbn7deb3B6NQr0mCO73M';

    const handleLogin = () => {
        dispatch(login());
        localStorage.setItem('token', JSON.stringify(token));
    };

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
                    <Col col={3} hiddenMdDown />
                    <Col col={6} xs={12} sm={12} md={12} lg={6}>
                        <Styled.LoginSection>
                            <Styled.Box>
                                <Styled.ImgSection />
                                <Styled.Title>Hello Again!</Styled.Title>
                                <Styled.SubTitle>Welcome back you've been missed</Styled.SubTitle>
                                <Styled.Separator />

                                <div style={{ margin: '1rem 0 8rem 0' }}>
                                    <GoogleLogin
                                        clientId={'http://localhost:5000/api/auth'}
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        render={(props) => (
                                            <Button
                                                onClick={handleLogin}
                                                to="/"
                                                large
                                                outline
                                                leftIcon={<FcGoogle />}
                                            >
                                                Continue with Google
                                            </Button>
                                        )}
                                    />
                                </div>
                                <Styled.Contact>
                                    Don't have an account?{' '}
                                    <a href="https://www.facebook.com/fcodefpt">Contact admin</a>
                                </Styled.Contact>
                            </Styled.Box>
                        </Styled.LoginSection>
                    </Col>
                    <Col col={3} hiddenMdDown />
                </Row>
            </Container>
        </Styled.Wrapper>
    );
}

export default Login;
