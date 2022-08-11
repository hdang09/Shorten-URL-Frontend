import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tippy from 'tippy.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import urlReducer from './components/LinkItem/urlSlice';

const store = createStore(urlReducer);

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <ToastContainer />
        </Provider>
    </React.StrictMode>,
);
