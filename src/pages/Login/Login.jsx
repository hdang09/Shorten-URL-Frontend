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

                                <div style={{ marginTop: '1rem' }}>
                                    <GoogleLogin
                                        clientId={`${CLIENT_ID}`}
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        render={(props) => (
                                            <Button
                                                onClick={() => dispatch(login())}
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
                                    <a href="https://www.facebook.com/">Contact admin</a>
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
