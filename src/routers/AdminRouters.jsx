import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { authSelector } from '../pages/Login/loginSlice';

const AdminRouters = () => (useSelector(authSelector) ? <Outlet /> : <Navigate to="/landing" />);

export default AdminRouters;
