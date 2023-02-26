import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { setPrimaryColor } from './app/reducers/customizationReducer';
import getTheme from './utils/getTheme';
import { RouterComponents } from './routers';

function App() {
    const dispatch = useDispatch();

    // Primary Color
    dispatch(setPrimaryColor());

    // Theme
    const theme = getTheme();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <RouterComponents />
            </Router>
        </ThemeProvider>
    );
}

export default App;
