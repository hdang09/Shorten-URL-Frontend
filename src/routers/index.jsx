import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';
// import AdminRouers from './AdminRouers';
import { Login, Home, Landing, Analytics, Settings, MyURL, Admin, Management } from '../pages';
import { BasicLayout, ModernLayout } from '../layouts';
import { useLocalStorage } from '../hooks';
import { createContext, useEffect } from 'react';

import { login, signOut } from '../pages/Login/loginSlice';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import localStorageUtils from '../utils/localStorageUtils';
import config from '../config';

const publicRoutes = [
    { path: config.routes.landing, element: <Landing /> },
    { path: config.routes.login, element: <Login /> },
];

const privateRoutes = [
    { path: config.routes.home, element: <Home /> },
    { path: config.routes.analytics, element: <Analytics /> },
    { path: config.routes.settings, element: <Settings /> },
    { path: config.routes.url, element: <MyURL /> },
];

const adminRoutes = [
    { path: config.routes.admin, element: <Admin /> },
    { path: config.routes.adminAnalytics, element: <Analytics /> },
    { path: config.routes.adminManagement, element: <Management /> },
    { path: config.routes.adminManageUserURL, element: <MyURL /> },
    { path: config.routes.adminShortenURL, element: <Home /> },
    { path: config.routes.adminURL, element: <MyURL /> },
    { path: config.routes.adminSettings, element: <Settings /> },
];

export const LayoutContext = createContext();

const RouterComponents = () => {
    const [layout, setLayoutInLocal] = useLocalStorage('layout', 'new');
    const Layout = layout === 'new' ? ModernLayout : BasicLayout;
    const dispatch = useDispatch();

    // eslint-disable-next-line prefer-destructuring
    const token = localStorageUtils.getToken();
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    let location = useLocation();

    useEffect(() => {
        const UrlParams = new URLSearchParams(location.search);

        if (UrlParams.get('success') === 'true') {
            localStorage.setItem('token', JSON.stringify(UrlParams.get('token')));
            const { payload } = jwtDecode(UrlParams.get('token'));
            localStorage.setItem('id', JSON.stringify(payload._id));
            // return <Navigate to="/" replace />;
            // window.location = '/';
            dispatch(login());
        } else if (UrlParams.get('success') === 'false') {
            const toastType = UrlParams.get('status') === 'waiting' ? 'info' : 'error';
            toast[toastType](`The account is ${UrlParams.get('status')} to allow access`);
        } else if (parseJwt(token)?.exp < Date.now() / 1000) {
            dispatch(signOut());
        }
    }, [dispatch, location, token]);

    return (
        <LayoutContext.Provider value={setLayoutInLocal}>
            <Routes>
                <Route element={<PrivateRouters />}>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Layout>{route.element}</Layout>}
                        />
                    ))}
                </Route>
                <Route element={<PublicRouters />}>
                    {publicRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Route>
                <Route element={<PrivateRouters />}>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Layout admin>{route.element}</Layout>}
                        />
                    ))}
                </Route>
                {/* <Route path="*" element={<Navigate to="/landing" replace />} /> */}
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </LayoutContext.Provider>
    );
};

export { publicRoutes, privateRoutes, RouterComponents };
