import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { adminSelector } from '../app/reducers/authReducer';
import { layoutSelector } from '../app/reducers/customizationReducer';
import config from '../config';
import { BasicLayout, ModernLayout } from '../layouts';
import { Admin, Analytics, Home, Management, MyURL, Settings } from '../pages';

const AdminRouters = () => {
    // Layout
    const Layout = useSelector(layoutSelector) === 'new' ? ModernLayout : BasicLayout;

    // Authentication
    const isAdmin = useSelector(adminSelector);

    return isAdmin ? (
        <Layout admin>
            <Outlet />
        </Layout>
    ) : (
        <Navigate to="/" replace />
    );
};

const AdminRoutes = {
    path: '/',
    element: <AdminRouters />,
    children: [
        { path: config.routes.admin, element: <Admin /> },
        { path: config.routes.adminAnalytics, element: <Analytics /> },
        { path: config.routes.adminManagement, element: <Management /> },
        { path: config.routes.adminManageUserURL, element: <MyURL /> },
        { path: config.routes.adminShortenURL, element: <Home /> },
        { path: config.routes.adminURL, element: <MyURL /> },
        { path: config.routes.adminSettings, element: <Settings /> },
    ],
};

export default AdminRoutes;
