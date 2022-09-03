import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { authSelector } from '../pages/Login/loginSlice';

const PublicRouters = () => (useSelector(authSelector) ? <Navigate to="/" /> : <Outlet />);

export default PublicRouters;
