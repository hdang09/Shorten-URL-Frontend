import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { userSelector } from '../app/reducers/authReducer';
import { layoutSelector } from '../app/reducers/customizationReducer';
import config from '../config';
import { BasicLayout, ModernLayout } from '../layouts';
import { Analytics, Home, MyURL, Settings } from '../pages';

const UserRouters = () => {
    // Layout
    const Layout = useSelector(layoutSelector) === 'new' ? ModernLayout : BasicLayout;

    // Authentication
    const isUser = useSelector(userSelector);

    return isUser ? (
        <Layout>
            <Outlet />
        </Layout>
    ) : (
        <Navigate to="/landing" replace />
    );
};

const UserRoutes = {
    path: '/',
    element: <UserRouters />,
    children: [
        { path: config.routes.home, element: <Home /> },
        { path: config.routes.analytics, element: <Analytics /> },
        { path: config.routes.settings, element: <Settings /> },
        { path: config.routes.url, element: <MyURL /> },
    ],
};

export default UserRoutes;
