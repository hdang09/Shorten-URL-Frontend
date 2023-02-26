import { createSlice } from '@reduxjs/toolkit';

import config from '../../config';
import localStorageUtils from '../../utils/localStorageUtils';

const initialState = {
    mode: localStorageUtils.getItem(config.localStorage.theme) || 'light',
    isContrast: localStorageUtils.getItem(config.localStorage.isConstrast) || false,
    primaryColor: localStorageUtils.getItem(config.localStorage.primaryColor) || '#45ce7b',
    layout: localStorageUtils.getItem(config.localStorage.layout) || 'new',
};

const customizationSlice = createSlice({
    name: 'customization',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
            localStorageUtils.setItem(config.localStorage.theme, action.payload);
        },
        toggleMode: (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light';
            state.mode = newMode;
            localStorageUtils.setItem(config.localStorage.theme, newMode);
        },
        setContrast: (state, action) => {
            state.isContrast = action.payload;
            localStorageUtils.setItem(config.localStorage.isConstrast, action.payload);
        },
        setPrimaryColor: (state, action) => {
            const primaryColor = action.payload || state.primaryColor;
            state.primaryColor = primaryColor;
            localStorageUtils.setItem(config.localStorage.primaryColor, primaryColor);
            document.querySelector(':root').style.setProperty('--primary-color', primaryColor);
        },
        setLayout: (state, action) => {
            state.layout = action.payload;
            localStorageUtils.setItem(config.localStorage.layout, action.payload);
        },
    },
});

// Selector
export const modeSelector = (state) => state.customization?.mode;
export const contrastSelector = (state) => state.customization?.isContrast;
export const primaryColorSelector = (state) => state.customization?.primaryColor;
export const layoutSelector = (state) => state.customization?.layout;

// Actions
export const { setMode, toggleMode, setContrast, setPrimaryColor, setLayout } =
    customizationSlice.actions;

// Reducer
export default customizationSlice.reducer;
