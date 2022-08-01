import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { authSelector } from '../component/Login/loginSlice';

const PrivateRouters = () => {
    let isAuthenticated = useSelector(authSelector);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouters;
