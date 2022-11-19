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

const publicRoutes = [
    { name: 'landing', path: '/landing', element: <Landing /> },
    { name: 'login', path: '/login', element: <Login /> },
];

const privateRoutes = [
    { name: 'home', path: '/', element: <Home /> },
    { name: 'analytics', path: '/analytics', element: <Analytics /> },
    { name: 'settings', path: '/settings', element: <Settings /> },
    { name: 'url', path: '/url', element: <MyURL /> },
];

const adminRoutes = [
    { name: 'admin', path: '/admin/', element: <Admin /> },
    { name: 'analytics', path: '/admin/analytics', element: <Analytics /> },
    { name: 'management', path: '/admin/management', element: <Management /> },
    { name: 'management/user-url', path: '/admin/management/user-url', element: <MyURL /> },
    { name: 'shorten-url', path: '/admin/shorten-url', element: <Home /> },
    { name: 'shorten-url/admin-url', path: '/admin/shorten-url/admin-url', element: <MyURL /> },
    { name: 'settings', path: '/admin/settings', element: <Settings /> },
];

export const LayoutContext = createContext();

const RouterComponents = () => {
    const [layout, setLayoutInLocal] = useLocalStorage('layout', 'new');
    // eslint-disable-next-line prefer-destructuring
    const Layout = layout === 'new' ? ModernLayout : BasicLayout;
    const dispatch = useDispatch();

    // // eslint-disable-next-line prefer-destructuring
    // const token = useLocalStorage('token', '')[0];
    // const parseJwt = (token) => {
    //     try {
    //         return JSON.parse(atob(token.split('.')[1]));
    //     } catch (e) {
    //         return null;
    //     }
    // };

    // useEffect(() => {
    //     if (!parseJwt(token) || parseJwt(token)?.exp < Date.now() / 1000) {
    //         dispatch(signOut());
    //     }
    // }, [dispatch, token]);

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
        }
    }, [dispatch, location]);

    return (
        <LayoutContext.Provider value={setLayoutInLocal}>
            <Routes>
                <Route element={<PrivateRouters />}>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<Layout>{route.element}</Layout>}
                        />
                    ))}
                </Route>
                <Route element={<PublicRouters />}>
                    {publicRoutes.map((route) => (
                        <Route key={route.name} path={route.path} element={route.element} />
                    ))}
                </Route>
                <Route element={<PrivateRouters />}>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<Layout admin>{route.element}</Layout>}
                        />
                    ))}
                </Route>
                <Route path="*" element={<Navigate to="/landing" replace />} />
            </Routes>
        </LayoutContext.Provider>
    );
};

export { publicRoutes, privateRoutes, RouterComponents };
