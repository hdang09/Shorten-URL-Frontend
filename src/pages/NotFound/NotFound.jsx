import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 5rem;
    font-weight: 500;
    color: var(--primary-color);
`;

function NotFound() {
    return <Wrapper>404 - Not Found</Wrapper>;
}

export default NotFound;
