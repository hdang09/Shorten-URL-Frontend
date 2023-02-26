import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

import localStorageUtils from '../../utils/localStorageUtils';

const initialState = {
    isAdmin:
        new Cookies().get('token') && jwtDecode(new Cookies().get('token')).payload.role === '1',
    isUser:
        new Cookies().get('token') && jwtDecode(new Cookies().get('token')).payload.role === '0',
    isVisitFirstTime: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            const { role } = jwtDecode(new Cookies().get('token')).payload;
            state.isUser = role === '0';
            state.isAdmin = role === '1';
        },
        signOut: (state) => {
            const cookies = new Cookies();
            state.isAdmin = false;
            state.isUser = false;
            cookies.remove('token', { path: '/' });
            cookies.remove('id', { path: '/' });
        },
    },
});

// Selector
export const adminSelector = (state) => state.auth?.isAdmin;
export const userSelector = (state) => state.auth?.isUser;

// Actions
export const { login, signOut } = authSlice.actions;

// Reducer
export default authSlice.reducer;
