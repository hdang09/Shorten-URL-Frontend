import { createSlice } from '@reduxjs/toolkit';
import localStorageUtils from '../../utils/localStorageUtils';

const initialState = {
    isAuthenticated: localStorageUtils.getToken(),
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            localStorageUtils.deleteUser();
            localStorage.removeItem('id');
        },
    },
});

export const authSelector = (state) => state.auth?.isAuthenticated;
export const { login, signOut } = loginSlice.actions;
export default loginSlice.reducer;
