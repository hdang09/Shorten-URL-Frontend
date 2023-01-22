import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../components/URLItem/urlSlice';
import authReducer from '../pages/Login/loginSlice';
import sidebarReducer from '../components/Sidebar/sidebarSlice';

const store = configureStore({
    reducer: {
        url: urlReducer,
        auth: authReducer,
        sidebar: sidebarReducer,
    },
});

export default store;
