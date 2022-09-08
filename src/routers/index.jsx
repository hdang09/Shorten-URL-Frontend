import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';
import AdminRouters from './AdminRouters';
import {
    Login,
    Home,
    Landing,
    Analytics,
    Settings,
    MyURL,
    NotFound,
    Admin,
    Management,
} from '../pages';
import { BasicLayout, ModernLayout } from '../layouts';
import { useLocalStorage } from '../hooks';
import { createContext } from 'react';

const publicRoutes = [
    { name: 'landing', path: '/landing', element: <Landing /> },
    { name: 'login', path: '/login', element: <Login /> },
];

const privateRoutes = [
    { name: 'home', path: '/', element: <Home /> },
    { name: 'analytics', path: '/Analytics', element: <Analytics /> },
    { name: 'settings', path: '/settings', element: <Settings /> },
    { name: 'url', path: '/url', element: <MyURL /> },
];

const adminRoutes = [
    { name: 'admin', path: '/admin', element: <Admin /> },
    { name: 'management', path: '/admin/management', element: <Management /> },
    { name: 'management/user-url', path: '/admin/management/user-url', element: <MyURL /> },
    { name: 'shorten-url', path: '/admin/shorten-url', element: <Home /> },
    { name: 'shorten-url/admin-url', path: '/admin/shorten-url/admin-url', element: <MyURL /> },
    { name: 'settings', path: '/admin/settings', element: <Settings /> },
];

export const LayoutContext = createContext();

const RouterComponents = () => {
    const [layout, setLayoutInLocal] = useLocalStorage('layout', 'new');
    const Layout = layout === 'new' ? ModernLayout : BasicLayout;
    return (
        <LayoutContext.Provider value={setLayoutInLocal}>
            <Router>
                <Routes>
                    <Route exact element={<PrivateRouters />}>
                        {privateRoutes.map((route) => (
                            <Route
                                exact
                                key={route.name}
                                path={route.path}
                                element={<Layout>{route.element}</Layout>}
                            />
                        ))}
                    </Route>
                    <Route exact element={<PublicRouters />}>
                        {publicRoutes.map((route) => (
                            <Route
                                exact
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
                                key={route.name}
                                path={route.path}
                                element={<Layout admin>{route.element}</Layout>}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </LayoutContext.Provider>
    );
};

export { publicRoutes, privateRoutes, RouterComponents };
