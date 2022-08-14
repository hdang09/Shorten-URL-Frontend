import styled, { keyframes } from 'styled-components';

const primaryColors = [
    '160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%',
    '62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%',
    '90deg, rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%',
    '19deg, rgb(250, 172, 168) 0%, rgb(221, 214, 243) 100%',
    'rgb(169, 201, 255) 0%, rgb(255, 187, 236) 100%',
    '90deg, rgb(116, 235, 213) 0%, rgb(159, 172, 230) 100%',
    '225deg, rgb(255, 60, 172) 0%, rgb(120, 75, 160) 50%, rgb(43, 134, 197) 100%',
    '5deg, rgb(250, 139, 255) 0%, rgb(43, 210, 255) 52%, rgb(43, 255, 136) 90%',
    '90deg, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%',
];

const permanentRandNum = Math.floor(Math.random() * primaryColors.length);

const slideLeft = keyframes`
    from {
        transform: translateX(100px);
    }
    to {
         transform: translateX(0);
    }
`;

export const Wrapper = styled.div`
    box-shadow: var(--box-shadow);
    padding: 12px;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    background: linear-gradient(${(props) => primaryColors[permanentRandNum]});
    border-radius: 10px;
    animation: ${slideLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s forwards;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: flex-start;
    }

    /* &::before {
        content: '';
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.5;
    } */
`;

export const EditBox = styled.div`
    border: 1px solid var(--black-color);
    border-radius: 10px;
    padding: 20px 50px;
    margin-bottom: 20px;

    @media only screen and (max-width: 500px) {
        padding: 20px;
    }
`;

export const Icon = styled.div`
    font-size: 3.6rem;
    margin-right: 16px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`;

export const Main = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 6px;
`;

export const Subtitle = styled.a`
    color: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: underline;
`;

export const Button = styled.div`
    cursor: pointer;
    font-size: 2.4rem;
    margin: 8px;
    dib &:hover {
        opacity: 0.5;
    }
`;
