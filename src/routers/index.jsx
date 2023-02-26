import { createContext, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

import { login, signOut } from '../app/reducers/authReducer';
import localStorageUtils from '../utils/localStorageUtils';

import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';
import UserRoutes from './UserRoutes';

export const LayoutContext = createContext();

const RouterComponents = () => {
    // Redux
    const dispatch = useDispatch();

    // Cookies
    const cookies = useMemo(() => new Cookies(), []);
    const token = cookies.get('token');

    let location = useLocation();

    useEffect(() => {
        const UrlParams = new URLSearchParams(location.search);

        if (UrlParams.get('success') === 'true') {
            cookies.set('token', UrlParams.get('token'), { path: '/' });
            // localStorage.setItem('token', JSON.stringify(UrlParams.get('token')));
            const { payload } = jwtDecode(UrlParams.get('token'));
            cookies.set('id', payload._id, { path: '/' });
            // localStorage.setItem('id', JSON.stringify(payload._id));
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
    }, [cookies, dispatch, location.search, token]);

    return useRoutes([UserRoutes, AdminRoutes, PublicRoutes]);
};

export { RouterComponents };
