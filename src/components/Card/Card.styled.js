import { down } from 'styled-breakpoints';
import styled, { keyframes } from 'styled-components';
const scaleUpCanter = keyframes`
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.black};
    border-radius: 12px;
    width: ${(props) => (props.noItem ? '500px' : '100%')};
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: var(--box-shadow);
    animation: ${scaleUpCanter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    transition: all 0.3s ease-in-out, background 0s, color 0s, border-color 0s;

    ${down('sm')} {
        /* width: calc(100vw - 32px); */
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
    width: ${(props) => (props.noItem ? '100%' : 'auto')};
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 2.6rem;
    text-align: ${(props) => (props.noItem ? 'center' : 'left')};
    color: ${(props) => props.theme.black};
`;

export const Subtitle = styled.h3`
    margin-bottom: 12px;
    color: var(--primary-color);

    &:hover a {
        opacity: var(--secondary-color);
    }
`;
