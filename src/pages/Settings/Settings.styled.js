import styled from 'styled-components';

export const Toggle = styled.div`
    display: inline-block;
    padding: 0.25rem;
    background-color: ${(props) =>
        props.theme === 'dark' ? 'var(--primary-color)' : 'rgba(15, 23, 42, 0.1)'};
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    pointer-events: auto;
    cursor: pointer;
`;

export const Circle = styled.div`
    background-color: #ffffff;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
        transform;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    box-shadow: var(--box-shadow);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transform: ${(props) =>
        props.theme === 'dark'
            ? 'translate(1rem, 0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)'
            : '0'};
`;

export const ColorInput = styled.input`
    margin-right: 1rem;
    width: 40px;
    height: 40px;
`;

export const LayoutSelect = styled.div`
    width: 100%;
    min-height: 50px;
    border-radius: 0.5rem;
    border: 3px dashed var(--primary-color);
    padding: 1.25rem 1.5rem;
    cursor: pointer;
    background-color: ${(props) =>
        props.active === true ? 'var(--primary-color)' : 'transparent'};
    color: ${(props) => (props.active === true ? props.theme.white : props.theme.black)};

    &:hover {
        opacity: 0.8;
    }
`;

export const LayoutName = styled.label`
    margin-bottom: 0.5rem;
`;

export const LayoutImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const SettingsItem = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.background};

    a {
        display: inline-block;

        &::after {
            content: '';
            display: block;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: ${(props) => props.theme.black};
            transition: width linear 0.35s;
        }

        &:hover::after {
            width: 100%;
        }
    }
`;

export const SettingsLabel = styled.p`
    margin: 0 0.5rem 0.5rem 0;
    display: inline-block;
    /* font-size: 1.6rem; */
    font-weight: 500;
`;
