import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';
import Wrapper, {
    Title,
    SubTitle,
    Image,
    LoginSection,
    RecoverPass,
    SignUp,
} from './Login.styled';

function Login() {
    return (
        <div className="container">
            <Wrapper className="row">
                <Image className="col">
                    <img
                        src="https://img.freepik.com/free-vector/link-building-concept_23-2148006397.jpg?t=st=1658285110~exp=1658285710~hmac=a42a9e075ceb06d8670e52f7f6638010e645ba4e509a815dee21d17657e6f8c1&w=740"
                        alt=""
                    />
                </Image>
                <LoginSection className="col">
                    <Title>Hello again!</Title>
                    <SubTitle>Welcome back you've been missed</SubTitle>
                    <div>
                        <Input placeholder="Enter username" />
                        <Input password />
                        <RecoverPass>Recovery Password</RecoverPass>
                        <Button large>Log in</Button>
                        <Button large outline>
                            Continue with FPT Email
                        </Button>
                        <SignUp>
                            Don't have an account?
                            <Link to="/signup"> Sign up</Link>
                        </SignUp>
                    </div>
                </LoginSection>
            </Wrapper>
        </div>
    );
}

export default Login;
