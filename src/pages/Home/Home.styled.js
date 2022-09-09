import styled from 'styled-components';

export const Image = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    position: relative;
    /* background-color: var(--primary-color); */
    /* border: 5px solid ${(props) => props.theme.background}; */

    & img {
        position: relative;
        width: 450px;
        height: auto;
        overflow-x: hidden;
        z-index: 999;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: var(--primary-color);
    width: 425px;
    height: 500px;
    /* top: 0; */
`;
