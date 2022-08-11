import { configureStore } from '@reduxjs/toolkit';
import urlReducer from '../components/LinkItem/urlSlice';

const store = configureStore({
    reducer: {
        url: urlReducer,
        // posts: postsReducer
    },
});

export default store;
