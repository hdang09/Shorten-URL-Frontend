import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import urlReducer from './components/LinkItem/urlSlice';

const store = createStore(urlReducer);

import App from './App';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <ToastContainer theme={JSON.parse(window.localStorage.getItem('data-theme'))} />
        </Provider>
    </React.StrictMode>,
);
