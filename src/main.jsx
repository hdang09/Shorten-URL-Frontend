import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react';

import store from './app/store';
import GlobalStyles from './assets/styles/GlobalStyles';
import App from './App';
import config from './config';

import 'antd/dist/antd.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
            <GlobalStyles />
            <ToastContainer
                theme={JSON.parse(window.localStorage.getItem(config.theme)) || 'light'}
            />
        </Provider>
    </>,
);
