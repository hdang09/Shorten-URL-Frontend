import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { userSelector } from '../pages/Login/loginSlice';

const PrivateRouters = () => {
    const isUser = useSelector(userSelector);
    return isUser ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default PrivateRouters;
