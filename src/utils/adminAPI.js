import Cookies from 'universal-cookie';

import { get, post, put } from './apiCaller';

const cookies = new Cookies();

// Admin API
export const getAllUser = () => {
    const url = '/api/admin';
    return get(url);
};

export const createAccount = (data = {}) => {
    const url = '/api/admin/account';
    return post(url, data);
};

export const updateUserStatus = (status, accountId) => {
    const url = '/api/admin/status';

    return put(url, {}, { status: status.toUpperCase(), accountId });
};

export const updateUserRole = (role, accountId) => {
    const url = '/api/admin/role';

    const ROLE = {
        USER: 0,
        ADMIN: 1,
    };
    return put(url, {}, { role: role === ROLE.USER ? 'USER' : 'ADMIN', accountId });
};

// Users API
export const getInfo = () => {
    const url = `/api/user`;

    return get(url);
};
