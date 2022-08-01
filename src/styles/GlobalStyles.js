import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import 'normalize.css';
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');

    :root {
        --primary-color: #45CE7B;
        --black-color: #000;
        --white-color: #fff;
        --background-color: #EEF0F4;
        --sidebar-width: 250px;
        --header-height: 60px;
        --box-shadow: 0 5px 8px rgb(0 0 0 / 8%);
    }

    * {
        bottom: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: Montserrat, Arial, Helvetica, sans-serif !important;
        font-size: 1.6rem;
        line-height: 1.5;
        text-rendering: optimizeSpeed;
        background-color: var(--background-color)
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

    a[href] {
        color: var(--primary-color);
        text-decoration: none;
    }

    // Scrollbar
    ::-webkit-scrollbar {
        border-radius: 0;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.15);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
    }

    // Selection
    ::selection {
        color: #fff;
        background: var(--primary-color);
    }
`;

export default GlobalStyles;
