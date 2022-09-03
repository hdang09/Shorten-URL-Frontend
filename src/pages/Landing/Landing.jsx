import { Button, Header } from '../../components';
import * as Styled from './Landing.styled';
import lightScreenshot from '../../assets/screenshots.png';
import darkScreenshot from '../../assets/screenshots-dark.png';
import { useLocalStorage } from '../../hooks';

function LandingPage() {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    const screenshot = theme === 'light' ? lightScreenshot : darkScreenshot;
    return (
        <>
            <Header landingPage />
            <Styled.Banner>
                <Styled.Heading>
                    Create <Styled.Highlight>Short</Styled.Highlight>&nbsp;Links!
                </Styled.Heading>
                <Styled.Subheading>
                    A URL shortener built with powerful tools to help you grow and protect your
                    brand.
                </Styled.Subheading>
                <div style={{ margin: '2rem' }}>
                    <Button to="/login" style={{ display: 'inline-flex' }} shine="true">
                        Get Started
                    </Button>
                    <Button href="https://shorten-url-hdang09.vercel.app/" outline>
                        Watch Demo
                    </Button>
                </div>
                <Styled.Screenshot src={screenshot} alt="Screenshot" />
            </Styled.Banner>
        </>
    );
}

export default LandingPage;
