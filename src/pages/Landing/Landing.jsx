import { Button, Header } from '../../components';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: var(--header-height);
    height: calc(100vh - var(--header-height));
`;

const Text = styled.h1`
    font-weight: 600;
    font-size: 4rem;
    display: block;
    margin-bottom: 12px;
`;

const Highlight = styled.span`
    color: var(--primary-color);
`;

function LandingPage() {
    return (
        <>
            <Header landingPage />
            <Wrapper>
                <Text>
                    LITTLE <Highlight>URL</Highlight>, BIG <Highlight>CONTROL</Highlight>
                </Text>
                <Button as={NavLink} to="/login">
                    Explore Now
                </Button>
            </Wrapper>
        </>
    );
}

export default LandingPage;
