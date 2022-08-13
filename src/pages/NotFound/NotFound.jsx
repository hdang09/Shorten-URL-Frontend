import styled from 'styled-components';
import { Button } from '../../components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    font-size: 6rem;
    font-weight: 500;
    color: var(--primary-color);
    flex-direction: column;
`;

function NotFound() {
    return (
        <Wrapper>
            <p>404 - Not Found</p>
            <Button to="/">Back to Home</Button>
        </Wrapper>
    );
}

export default NotFound;
