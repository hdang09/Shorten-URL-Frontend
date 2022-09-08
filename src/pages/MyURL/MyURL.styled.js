import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 200px;

    @media only screen and (max-width: 992px) {
        padding: 0;
    }
`;
