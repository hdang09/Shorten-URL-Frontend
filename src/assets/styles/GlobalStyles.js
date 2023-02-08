import { createGlobalStyle } from 'styled-components';
import { lightTheme } from './themes';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Quantum';
        src: url('./assets/fonts/Quantum.otf');
    }

    :root {
        --primary-color: rgb(69, 206, 123);
        --secondary-color: rgb(240, 190, 32);
        --white-color: #fff;
        --success-color: #7AC5A9;
        --error-color: #EB403F;
        --info-color: #3FA0EB;
        --grey-color: #333;
        --purple-color: 115, 103, 240;
        --aqua-color: 0, 207, 232;
        --red-color: 234, 84, 85;
        --green-color: 40, 199, 111;
        --header-height: 60px;
        --box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    }

    @font-face {
        font-family: 'GT Walsheim Pro';
        src: local('GT Walsheim Pro'), url(../fonts/GTWalsheimPro-Regular.woff2) format('woff2');
        line-height: 150%;
    }
    
    @font-face {
        font-family: 'GT Walsheim Pro Black';
        src: local('GT Walsheim Pro Black'), url(../fonts/GTWalsheimPro-Black.woff2) format('woff2');
        line-height: 150%;
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
        font-family: 'GT Walsheim Pro', 'Inter', 'Montserrat', Arial, Helvetica, sans-serif !important;
        font-size: 1.6rem;
        line-height: 1.5;
        text-rendering: optimizeSpeed;
        overflow: unset !important;
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

    a[href=""] {
        color: var(--primary-color);
        text-decoration: none;
    }

    a:hover {
        opacity: 0.9;
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

    p {
        margin-bottom: 0;
    }

    /* OVerride CSS */
    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
        background: var(--primary-color);
    }

    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-color: var(--primary-color);
    }

    img, svg, video, canvas, audio, iframe, embed, object {
        display: inline-block !important;
    }
`;

GlobalStyles.defaultProps = {
    theme: {
        ...lightTheme,
    },
};

export default GlobalStyles;
