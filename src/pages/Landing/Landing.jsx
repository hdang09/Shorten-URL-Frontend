import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { modeSelector } from '../../app/reducers/customizationReducer';
import lightScreenshot from '../../assets/images/screenshots.png';
import darkScreenshot from '../../assets/images/screenshots-dark.png';
import { Button, Header } from '../../components';
import aosInit from '../../utils/aosInit';

import * as Styled from './Landing.styled';

import 'aos/dist/aos.css';

aosInit();

function LandingPage() {
    const theme = useSelector(modeSelector);
    const screenshot = theme === 'light' ? lightScreenshot : darkScreenshot;

    useEffect(() => {
        document.title = 'F-Code Shorten URL Landing Page';
    }, []);

    return (
        <>
            <Header isLandingPage />
            <Styled.Banner>
                <Styled.Heading data-aos="fade-up">
                    Create <Styled.Highlight>Short</Styled.Highlight> Links!
                </Styled.Heading>
                <Styled.Subheading data-aos="fade-up">
                    An URL Shortener built with powerful tools that transform long, ugly links into
                    nice, short URLs.
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

LandingPage.propTypes = {};

export default LandingPage;
