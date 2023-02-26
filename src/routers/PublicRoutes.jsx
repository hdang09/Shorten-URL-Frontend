import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { adminSelector, userSelector } from '../app/reducers/authReducer';
import config from '../config';
import { Landing, Login } from '../pages';

const PublicRouters = () => {
    // Authentication
    const isUser = useSelector(userSelector);
    const isAdmin = useSelector(adminSelector);

    if (!isUser && !isAdmin) {
        return <Outlet />;
    }

    if (isAdmin) {
        return <Navigate to="/admin" replace />;
    }

    if (isUser) {
        return <Navigate to="/" replace />;
    }
};

const PublicRoutes = {
    path: '/',
    element: <PublicRouters />,
    children: [
        { path: config.routes.landing, element: <Landing /> },
        { path: config.routes.login, element: <Login /> },
    ],
};

export default PublicRoutes;
