import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { authSelector } from '../pages/Login/loginSlice';

const PrivateRouters = () => {
    const isAuthenticated = useSelector(authSelector);
    return isAuthenticated ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default PrivateRouters;
