import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../components/LinkItem/urlSlice';
import authReducer from '../pages/Login/loginSlice';
import sidebarReducer from '../components/Sidebar/sidebarSlice';

const store = configureStore({
    reducer: {
        urls: urlReducer,
        auth: authReducer,
        sidebar: sidebarReducer,
    },
});

export default store;
