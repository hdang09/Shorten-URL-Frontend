import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const PublicRouters = ({ auth }) => {
    if (localStorage.getItem('token')) {
        let { role } = jwtDecode(localStorage.getItem('token')).payload;
        return role === '1' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />;
    }
    return auth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRouters;
