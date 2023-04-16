import { useEffect } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { SiFandom } from 'react-icons/si';
import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import { modeSelector } from '../../app/reducers/customizationReducer';
import lightScreenshot from '../../assets/images/screenshots.png';
import darkScreenshot from '../../assets/images/screenshots-dark.png';
import { Button, Header } from '../../components';
import config from '../../config';
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
            <Styled.Main>
                <Styled.Hero>
                    <Styled.GradientBg />
                    <Styled.Heading data-aos="fade-up">
                        Create{' '}
                        <Styled.Highlight>
                            <h1>Short</h1>
                            <h1>Short</h1>
                        </Styled.Highlight>{' '}
                        Links!
                    </Styled.Heading>
                    <Styled.Subheading data-aos="fade-up">
                        An URL Shortener built with powerful tools that transform long, ugly links
                        into nice, short URLs.
                    </Styled.Subheading>
                    <Styled.CtaWrap>
                        <Button
                            to={config.routes.login}
                            style={{ display: 'inline-flex' }}
                            shine="true"
                            rightIcon={<BsFillCaretRightFill />}
                        >
                            Get Started
                        </Button>
                        <Button
                            href="https://www.facebook.com/fcodefpt"
                            outline
                            as={Styled.BannerButton}
                            rightIcon={<SiFandom />}
                        >
                            Visit Fanpage
                        </Button>
                    </Styled.CtaWrap>
                </Styled.Hero>
                <Styled.Screenshot src={screenshot} alt="Screenshot" />
                {/* All Features */}
                {/* How to start */}
                {/* Testimonials */}
                {/* Contact */}
            </Styled.Main>
            {/* Footer */}
        </>
    );
}

LandingPage.propTypes = {};

export default LandingPage;
