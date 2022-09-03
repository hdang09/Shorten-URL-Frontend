import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../components/LinkItem/urlSlice';
import authReducer from '../pages/Login/loginSlice';

const store = configureStore({
    reducer: {
        urls: urlReducer,
        auth: authReducer,
    },
});

export default store;
