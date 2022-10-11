import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { authSelector } from '../pages/Login/loginSlice';

const PrivateRouters = () => {
    return useSelector(authSelector) ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default PrivateRouters;
