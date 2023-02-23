import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from '../components/Sidebar/sidebarSlice';
import urlReducer from '../components/URLItem/urlSlice';
import authReducer from '../pages/Login/loginSlice';

const store = configureStore({
    reducer: {
        url: urlReducer,
        auth: authReducer,
        sidebar: sidebarReducer,
    },
});

export default store;
