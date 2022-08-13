import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import * as Styled from './Login.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <Styled.Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 col-md-12">
                        <Styled.LoginSection>
                            <Styled.Title>Hello Again!</Styled.Title>
                            <Styled.SubTitle>Welcome back you've been missed</Styled.SubTitle>
                            <div>
                                <Input transparent placeholder="Enter username" />
                                <Input transparent password />
                                <Styled.RecoverPass>Recovery Password</Styled.RecoverPass>
                                <Button to="/" large>
                                    Log in
                                </Button>
                                <Button to="/" large leftIcon={<FcGoogle />} outline>
                                    Continue with FPT Email
                                </Button>
                                <Styled.SignUp>
                                    Don't have an account?
                                    <Link to="/signup"> Sign up</Link>
                                </Styled.SignUp>
                            </div>
                        </Styled.LoginSection>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Login;
