import { createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './assets/styles/themes';
import config from './config';
import { useLocalStorage } from './hooks';
import { RouterComponents } from './routers';

const ThemeContext = createContext();

function App() {
    const { primaryColor, theme: themeConfig, isConstrast } = config.localStorage;

    const color = JSON.parse(localStorage.getItem(primaryColor)) || '#45ce7b';
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const [themeInLocal, setThemeInLocal] = useLocalStorage(themeConfig, 'light');
    const toggleTheme = () => setThemeInLocal(themeInLocal === 'light' ? 'dark' : 'light');

    const [contrastInLocal, setContrastInLocal] = useLocalStorage(isConstrast, false);
    const toggleContrast = () => setContrastInLocal(!contrastInLocal);

    let theme;
    const getTheme = () => {
        if (themeInLocal === 'dark') {
            theme = darkTheme;
            return;
        }

        if (contrastInLocal === true) {
            theme = {
                ...lightTheme,
                contrastBackground: lightTheme.cardBackground,
            };
            return;
        }

        theme = {
            ...lightTheme,
            contrastBackground: null,
        };
    };
    getTheme();

    return (
        <ThemeContext.Provider value={{ toggleTheme, toggleContrast }}>
            <ThemeProvider theme={theme}>
                <Router>
                    <RouterComponents />
                </Router>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
export { ThemeContext };
