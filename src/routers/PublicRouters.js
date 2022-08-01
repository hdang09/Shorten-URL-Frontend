import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { authSelector } from '../component/Login/loginSlice';

const PublicRouters = () => {
    let isAuthenticated = useSelector(authSelector);
    return isAuthenticated ? <Navigate to="/room" /> : <Outlet />;
};

export default PublicRouters;
