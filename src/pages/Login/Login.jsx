/* eslint-disable react/no-unescaped-entities */
import { Button } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import * as Styled from './Login.styled';
import { API_URL } from '../../config';

function Login() {
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
                                    <Button
                                        href={`${API_URL}/api/auth/google`}
                                        large
                                        outline
                                        leftIcon={<FcGoogle />}
                                    >
                                        Continue with Google
                                    </Button>
                                </div>
                                <Styled.Contact>
                                    Cannot login?{' '}
                                    <a href="https://www.facebook.com/hdang.09">Contact admin</a>
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

// const ApiUrl = process.env.REACT_APP_API_URL + '/api/auth/'
//   // get token from the url after successful signed in
//   let location = useLocation()
//   const UrlParams = new URLSearchParams(location.search)
//   if (UrlParams.get('success') === 'true') {
//     // save token to localStorage
//     let response = {
//       success: UrlParams.get('success'),
//       token: UrlParams.get('token'),
//     }
//     LocalStorageUtils.setItem('token', response.token)
//     return <Navigate to="/" replace />
//   }
