import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button, Header } from '../../components';
import * as Styled from './Landing.styled';
import lightScreenshot from '../../assets/images/screenshots.png';
import darkScreenshot from '../../assets/images/screenshots-dark.png';
import { useLocalStorage } from '../../hooks';
import { useEffect } from 'react';

AOS.init();
AOS.init({
    // Global settings:
    disable: false,
    debounceDelay: 50, // the delay when resize windows
    throttleDelay: 0, // the delay when scrolling

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // the trigger point (px)
    delay: 0,
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'eas',
    once: false, // render one time or not
    mirror: false, // is animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Which position that the element should be triggered
});

AOS.refresh();

function LandingPage() {
    const [theme, setTheme] = useLocalStorage('data-theme', 'light');
    const screenshot = theme === 'light' ? lightScreenshot : darkScreenshot;

    useEffect(() => {
        document.title = 'F-Code Shorten URL Landing Page';
    }, []);

    return (
        <>
            <Header landingPage />
            <Styled.Banner>
                <Styled.Heading data-aos="fade-up">
                    Create <Styled.Highlight>Short</Styled.Highlight>&nbsp;Links!
                </Styled.Heading>
                <Styled.Subheading data-aos="fade-up">
                    A URL shortener built with powerful tools to help you grow and protect your
                    brand.
                </Styled.Subheading>
                <div style={{ margin: '2rem' }}>
                    <Button to="/login" style={{ display: 'inline-flex' }} shine="true">
                        Get Started
                    </Button>
                    <Button
                        href="https://www.facebook.com/fcodefpt"
                        outline
                        as={Styled.BannerButton}
                    >
                        Visit Fanpage
                    </Button>
                </div>
                <Styled.Screenshot src={screenshot} alt="Screenshot" />
            </Styled.Banner>
        </>
    );
}

export default LandingPage;
