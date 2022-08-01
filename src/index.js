import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
// import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <GlobalStyles />
        <App />
        <h1>Hello</h1>
        {/* </Provider> */}
    </React.StrictMode>,
);
