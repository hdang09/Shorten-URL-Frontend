import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { adminSelector } from '../pages/Login/loginSlice';

const PrivateRouters = () => {
    const isAdmin = useSelector(adminSelector);
    return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRouters;
