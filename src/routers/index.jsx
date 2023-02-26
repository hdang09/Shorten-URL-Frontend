import { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

import { login, signOut } from '../app/reducers/authReducer';
import localStorageUtils from '../utils/localStorageUtils';

import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';
import UserRoutes from './UserRoutes';

export const LayoutContext = createContext();

const RouterComponents = () => {
    const dispatch = useDispatch();

    const token = localStorageUtils.getToken();

    let location = useLocation();

    useEffect(() => {
        const UrlParams = new URLSearchParams(location.search);

        if (UrlParams.get('success') === 'true') {
            localStorage.setItem('token', JSON.stringify(UrlParams.get('token')));
            const { payload } = jwtDecode(UrlParams.get('token'));
            localStorage.setItem('id', JSON.stringify(payload._id));
            dispatch(login());
            return;
        }

        if (UrlParams.get('success') === 'false') {
            const toastType = UrlParams.get('status') === 'waiting' ? 'info' : 'error';
            toast[toastType](`The account is ${UrlParams.get('status')} to allow access`);
            return;
        }

        if (!token) return;

        if (jwtDecode(token)?.exp < Date.now() / 1000) {
            dispatch(signOut());
        }
    }, [dispatch, location.search, token]);

    return useRoutes([UserRoutes, AdminRoutes, PublicRoutes]);
};

export { RouterComponents };
