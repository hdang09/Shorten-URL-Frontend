import { down } from 'styled-breakpoints';
import styled, { keyframes } from 'styled-components';

const scaleUpCenter = keyframes`
    from {
        opacity: 0.5;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.black};
    border-radius: 12px;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: var(--box-shadow);
    animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;

    ${down('sm')} {
        width: auto;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    width: auto;
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 2.6rem;
    text-align: left;
    color: ${(props) => props.theme.black};
`;

export const Subtitle = styled.h3`
    margin-bottom: 12px;
    color: var(--primary-color);

    & a {
        color: var(--primary-color);
    }

    & a:hover {
        color: var(--secondary-color);
    }
`;
