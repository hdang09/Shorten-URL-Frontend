import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';
// import AdminRouers from './AdminRouers';
import { Login, Home, Landing, Analytics, Settings, MyURL, Admin, Management } from '../pages';
import { BasicLayout, ModernLayout } from '../layouts';
import { useLocalStorage } from '../hooks';
import { createContext, useEffect } from 'react';

import { login, signOut, authSelector } from '../pages/Login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

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
    const token = useLocalStorage('token', '')[0];
    const Layout = layout === 'new' ? ModernLayout : BasicLayout;
    const dispatch = useDispatch();

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        if (!parseJwt(token) || parseJwt(token)?.exp < Date.now() / 1000) {
            dispatch(signOut());
        }
    }, [dispatch, token]);

    let location = useLocation();

    useEffect(() => {
        const UrlParams = new URLSearchParams(location.search);

        if (UrlParams.get('success') === 'true') {
            // save token to localStorage
            let response = {
                success: UrlParams.get('success'),
                token: UrlParams.get('token'),
            };
            // alert(response.token);
            localStorage.setItem('token', JSON.stringify(response.token));
            const { payload } = jwtDecode(response.token);
            localStorage.setItem('id', JSON.stringify(payload._id));
            // return <Navigate to="/" replace />;
            // window.location = '/';
            dispatch(login());
        }
    }, [dispatch, location]);

    let isAuthenticated = useSelector(authSelector);

    return (
        <LayoutContext.Provider value={setLayoutInLocal}>
            <Routes>
                <Route exact element={<PrivateRouters auth={isAuthenticated} />}>
                    {privateRoutes.map((route) => (
                        <Route
                            exact
                            restrict
                            key={route.name}
                            path={route.path}
                            element={<Layout>{route.element}</Layout>}
                        />
                    ))}
                </Route>
                <Route exact element={<PublicRouters auth={isAuthenticated} />}>
                    {publicRoutes.map((route) => (
                        <Route
                            exact
                            restrict
                            key={route.name}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Route>
                <Route exact>
                    {adminRoutes.map((route) => (
                        <Route
                            exact
                            restrict
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
