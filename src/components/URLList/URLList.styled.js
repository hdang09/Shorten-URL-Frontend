import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
    padding: 44px 0;

    img {
        margin-bottom: 20px;
        width: 250px;
    }

    h1 {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: 900;
        color: ${(props) => props.theme.white};
    }
`;
