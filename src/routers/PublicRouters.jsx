import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { adminSelector, userSelector } from '../pages/Login/loginSlice';

const PrivateRouters = () => {
    const isUser = useSelector(userSelector);
    const isAdmin = useSelector(adminSelector);
    if (!isUser && !isAdmin) {
        return <Outlet />;
    } else if (isAdmin) {
        return <Navigate to="/admin" replace />;
    } else if (isUser) {
        return <Navigate to="/" replace />;
    }
};

export default PrivateRouters;
