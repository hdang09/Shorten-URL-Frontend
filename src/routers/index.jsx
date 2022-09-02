import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import { Default as DefaultLayout, New as NewLayout } from '../layouts';

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
    { name: 'shorten-url', path: '/admin/shorten-url', element: <Home /> },
    { name: 'settings', path: '/admin/settings', element: <Settings /> },
];

const RouterComponents = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<NewLayout>{route.element}</NewLayout>}
                        />
                    ))}
                </Route>
                <Route>
                    {publicRoutes.map((route) => (
                        <Route key={route.name} path={route.path} element={route.element} />
                    ))}
                </Route>
                <Route>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={<DefaultLayout admin>{route.element}</DefaultLayout>}
                        />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export { publicRoutes, privateRoutes, RouterComponents };
