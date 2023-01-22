import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { authSelector } from '../pages/Login/loginSlice';
import localStorageUtils from '../utils/localStorageUtils';

const PublicRouters = () => {
    const isAuthenticated = useSelector(authSelector);
    if (localStorageUtils.getToken()) {
        let { role } = jwtDecode(localStorageUtils.getToken()).payload;
        return role === '1' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />;
    }
    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRouters;
