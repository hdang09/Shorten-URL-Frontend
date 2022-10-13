import { RouterComponents } from './routers';
import { useLocalStorage } from './hooks';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/styles/themes';
import { createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const ThemeContext = createContext();

function App() {
    const color = JSON.parse(localStorage.getItem('primary-color')) || '#45ce7b';
    document.querySelector(':root').style.setProperty('--primary-color', `${color}`);

    const [themeInLocal, setThemeInLocal] = useLocalStorage('data-theme', 'light');
    const toggleTheme = () => setThemeInLocal(themeInLocal === 'light' ? 'dark' : 'light');

    const theme = themeInLocal === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={toggleTheme}>
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
