import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { setPrimaryColor } from './app/reducers/customizationReducer';
import getTheme from './utils/getTheme';
import Routes from './routes';

function App() {
    const dispatch = useDispatch();

    // Primary Color
    useEffect(() => {
        dispatch(setPrimaryColor());
    }, [dispatch]);

    // Theme
    const theme = getTheme();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
