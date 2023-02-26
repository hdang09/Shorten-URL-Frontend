import { configureStore } from '@reduxjs/toolkit';

import { authReducer, customizationReducer, sidebarReducer, urlReducer } from './reducers';

const store = configureStore({
    reducer: {
        url: urlReducer,
        auth: authReducer,
        sidebar: sidebarReducer,
        customization: customizationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
