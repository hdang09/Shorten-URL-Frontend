import { Button, Header, URLShortener } from '../../components';
import * as Styled from './Landing.styled';
import screenshot from '../../assets/screenshots.png';

function LandingPage() {
    return (
        <>
            <Header landingPage />
            <Styled.Banner>
                <Styled.Heading>
                    Create <span style={{ color: 'var(--primary-color' }}>Short</span> Links!
                </Styled.Heading>
                <Styled.Subheading>
                    A URL shortener built with powerful tools to help you grow and protect your
                    brand.
                </Styled.Subheading>
                <div style={{ margin: '2rem' }}>
                    <Button to="/" style={{ display: 'inline-flex' }} shine="true">
                        Get Started
                    </Button>
                    <Button to="/" outline>
                        Watch Demo
                    </Button>
                </div>
                <Styled.Screenshot src={screenshot} />
            </Styled.Banner>
        </>
    );
}

export default LandingPage;
