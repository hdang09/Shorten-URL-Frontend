import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { ChakraProvider } from '@chakra-ui/react';

import GlobalStyles from './assets/styles/GlobalStyles';

import App from './App';
import 'antd/dist/antd.css';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
            <GlobalStyles />
            <ToastContainer
                theme={JSON.parse(window.localStorage.getItem('data-theme')) || 'light'}
            />
        </Provider>
    </>,
);
