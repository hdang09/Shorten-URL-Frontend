import { Header, URLShortener } from '../../components';
import * as Styled from './Landing.styled';

function LandingPage() {
    return (
        <>
            <Header transparent />
            <Styled.Banner>
                <Styled.Heading>Create Short Links!</Styled.Heading>
                <Styled.Subheading>
                    A URL shortener built with powerful tools to help you grow and protect your
                    brand.
                </Styled.Subheading>
                <URLShortener noItem />
            </Styled.Banner>
        </>
    );
}

export default LandingPage;
