import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';

import * as Styled from './Login.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from '../../hooks';

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
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" />
                    <div className="col-lg-6 col-md-12">
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
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Login;
