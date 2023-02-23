import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import localStorageUtils from '../../utils/localStorageUtils';

const initialState = {
    isAdmin:
        localStorageUtils.getToken() &&
        jwtDecode(localStorageUtils.getToken()).payload.role === '1',
    isUser:
        localStorageUtils.getToken() &&
        jwtDecode(localStorageUtils.getToken()).payload.role === '0',
    isVisitFirstTime: null,
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            const { role } = jwtDecode(localStorageUtils.getToken()).payload;
            state.isUser = role === '0';
            state.isAdmin = role === '1';
        },
        signOut: (state) => {
            state.isAdmin = false;
            state.isUser = false;
            localStorageUtils.deleteUser();
            localStorage.removeItem('id');
        },
    },
});

export const adminSelector = (state) => state.auth?.isAdmin;
export const userSelector = (state) => state.auth?.isUser;
export const { login, signOut } = loginSlice.actions;
export default loginSlice.reducer;
