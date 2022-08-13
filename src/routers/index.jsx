import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login, Home, Landing, Statistics, Settings, MyURL, NotFound } from '../pages';
import Default from '../layouts/Default';

const publicRoutes = [
    // { name: 'home', path: '/', element: Landing },
    { name: 'login', path: '/login', element: Login },
];

const privateRoutes = [
    { name: 'home', path: '/', element: Home, layout: Default },
    { name: 'statistics', path: '/statistics', element: Statistics, layout: Default },
    { name: 'settings', path: '/settings', element: Settings, layout: Default },
    { name: 'url', path: '/url', element: MyURL, layout: Default },
];

const RouterComponents = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route>
                        {privateRoutes.map((route) => {
                            const Element = route.element;
                            const Layout = route.layout;
                            return (
                                <Route
                                    key={route.name}
                                    path={route.path}
                                    element={
                                        Layout ? (
                                            <Layout>
                                                <Element />
                                            </Layout>
                                        ) : (
                                            <Element />
                                        )
                                    }
                                />
                            );
                        })}
                    </Route>
                    <Route>
                        {publicRoutes.map((route) => {
                            const Element = route.element;
                            return (
                                <Route key={route.name} path={route.path} element={<Element />} />
                            );
                        })}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export { publicRoutes, privateRoutes, RouterComponents };
