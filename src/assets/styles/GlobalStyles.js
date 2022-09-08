import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import 'normalize.css';
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    @font-face {
        font-family: Quantum;
        src: url('./assets/fonts/Quantum.otf');
    }

    :root {
        --primary-color: 'rgb(69, 206, 123)';
        --purple-color: 115, 103, 240;
        --aqua-color: 0, 207, 232;
        --red-color: 234, 84, 85;
        --green-color: 40, 199, 111;
        --header-height: 60px;
        --box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    }
    

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Inter, Montserrat, Arial, Helvetica, sans-serif !important;
        font-size: 1.6rem;
        line-height: 1.5;
        text-rendering: optimizeSpeed;
    }

    border,
    input,
    [tabindex] {
        outline: none;
        border: none;
    }

    button {
        border: none;
    }

    a {
        color: var(--primary-color);
        text-decoration: none;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
        border-radius: 0;
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    /* Selection */
    ::selection {
        color: ${(props) => props.theme.white};
        background: var(--primary-color);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    /* OVerride CSS */
    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
        background: var(--primary-color);
    }

    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-color: var(--primary-color);
    }
`;

export const lightTheme = {
    black: '#000',
    white: '#fff',
    background: '#eef0f4',
    cardBackground: '#fff',
};

export const darkTheme = {
    black: '#fff',
    white: '#000',
    background: '#161D31',
    cardBackground: '#283046',
};

GlobalStyles.defaultProps = {
    theme: { ...lightTheme },
};

export default GlobalStyles;
